import { PARTY_STATES } from "./app-config.js";
import { getParty, saveParty } from "./storage-service.js";
import { partyCode, uid } from "./utils.js";
import { getItems, getDuration } from "./game-types.js";
import { savePartyRemote, listenPartyRemote, initFirebase } from "./firebase-service.js";

let firebaseEnabled = false;

export async function bootSync() {
  const result = await initFirebase();
  firebaseEnabled = result.enabled;
  return firebaseEnabled;
}

export function createParty(game) {
  const id = partyCode();
  const now = new Date().toISOString();
  const party = {
    id,
    title: game?.titre || "Partie Party Live",
    game,
    state: "attente_joueurs",
    step: "attente_joueurs",
    roundIndex: 0,
    startedAt: now,
    updatedAt: now,
    timerEndsAt: null,
    players: {},
    responses: {},
    votes: {},
    scores: {},
    history: [],
    selectedPlayerId: null,
    activeTeam: null,
    message: "Scannez le QR code pour rejoindre."
  };
  persistParty(party);
  return party;
}

export function persistParty(party) {
  const next = { ...party, updatedAt: new Date().toISOString() };
  saveParty(next);
  if (firebaseEnabled) savePartyRemote(next).catch(console.warn);
  return next;
}

export function listenParty(id, callback) {
  let last = "";
  const emit = () => {
    const party = getParty(id);
    const raw = JSON.stringify(party);
    if (party && raw !== last) {
      last = raw;
      callback(party);
    }
  };
  emit();
  const interval = window.setInterval(emit, 650);
  const onStorage = (event) => {
    if (!event.key || event.key.includes("party_live_parties")) emit();
  };
  window.addEventListener("storage", onStorage);
  const remoteUnsub = firebaseEnabled ? listenPartyRemote(id, (party) => {
    saveParty(party);
    callback(party);
  }) : () => {};
  return () => {
    window.clearInterval(interval);
    window.removeEventListener("storage", onStorage);
    remoteUnsub();
  };
}

export function joinParty(partyId, pseudo) {
  const party = getParty(String(partyId || "").toUpperCase());
  if (!party) throw new Error("Partie introuvable");
  if (!pseudo || !pseudo.trim()) throw new Error("Choisis un pseudo");
  const clean = pseudo.trim().slice(0, 28);
  const exists = Object.values(party.players || {}).find((player) => player.name.toLowerCase() === clean.toLowerCase());
  const stored = JSON.parse(localStorage.getItem("party_live_player_v1") || "null");
  if (exists && stored?.partyId === party.id && stored?.playerId === exists.id) return exists;
  if (exists) throw new Error("Ce pseudo est deja pris");
  const player = {
    id: uid("player"),
    name: clean,
    joinedAt: new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
    score: 0
  };
  party.players[player.id] = player;
  party.scores[player.id] = party.scores[player.id] || 0;
  persistParty(party);
  localStorage.setItem("party_live_player_v1", JSON.stringify({ partyId: party.id, playerId: player.id, name: clean }));
  return player;
}

export function touchPlayer(party, playerId) {
  if (!party?.players?.[playerId]) return party;
  party.players[playerId].lastSeenAt = new Date().toISOString();
  return persistParty(party);
}

export function currentItem(party) {
  const items = getItems(party?.game);
  return items[party?.roundIndex || 0] || null;
}

export function startRound(party) {
  const duration = getDuration(party.game);
  party.state = "reponses_ouvertes";
  party.step = "reponses_ouvertes";
  party.responses = {};
  party.votes = {};
  party.timerEndsAt = Date.now() + duration * 1000;
  party.message = "Reponses ouvertes";
  if (["mime_challenge", "times_up", "mot_interdit"].includes(party.game.type)) {
    const players = Object.keys(party.players || {});
    party.selectedPlayerId = players[(party.roundIndex || 0) % Math.max(players.length, 1)] || null;
  }
  return persistParty(party);
}

export function closeResponses(party) {
  party.state = "reponses_fermees";
  party.step = "reponses_fermees";
  party.timerEndsAt = null;
  party.message = "La manche est terminee";
  return persistParty(party);
}

export function openVote(party) {
  party.state = "vote_en_cours";
  party.step = "vote_en_cours";
  party.timerEndsAt = Date.now() + (party.game.temps_vote || 30) * 1000;
  party.message = "Vote ouvert";
  return persistParty(party);
}

export function showCorrection(party) {
  party.state = "correction";
  party.step = "correction";
  party.timerEndsAt = null;
  party.message = "Correction";
  return persistParty(party);
}

export function nextRound(party) {
  const items = getItems(party.game);
  const oldItem = currentItem(party);
  party.history.push({
    at: new Date().toISOString(),
    roundIndex: party.roundIndex,
    item: oldItem,
    responses: party.responses,
    votes: party.votes,
    scores: party.scores
  });
  party.roundIndex = Math.min((party.roundIndex || 0) + 1, Math.max(items.length - 1, 0));
  party.state = party.roundIndex >= items.length - 1 && oldItem === items[items.length - 1] ? "classement" : "presentation_jeu";
  party.step = party.state;
  party.responses = {};
  party.votes = {};
  party.timerEndsAt = null;
  party.selectedPlayerId = null;
  return persistParty(party);
}

export function finishParty(party) {
  party.state = "fin_partie";
  party.step = "fin_partie";
  party.finishedAt = new Date().toISOString();
  party.timerEndsAt = null;
  party.message = "Partie terminee";
  return persistParty(party);
}

export function submitResponse(party, playerId, value) {
  if (!party.players[playerId]) throw new Error("Tu n'es pas connecte");
  if (!["reponses_ouvertes", "question_en_cours"].includes(party.state)) throw new Error("La manche est terminee");
  if (party.responses[playerId]) throw new Error("Reponse deja envoyee");
  party.responses[playerId] = {
    playerId,
    value,
    at: Date.now()
  };
  const participation = party.game?.points?.participation || 0;
  if (participation) addScore(party, playerId, participation, false);
  return persistParty(party);
}

export function submitVote(party, playerId, responsePlayerId) {
  if (party.state !== "vote_en_cours") throw new Error("Vote ferme");
  if (playerId === responsePlayerId) throw new Error("Vote pour toi-meme impossible");
  party.votes[playerId] = { playerId, responsePlayerId, at: Date.now() };
  return persistParty(party);
}

export function addScore(party, playerId, points, persist = true) {
  party.scores[playerId] = (party.scores[playerId] || 0) + Number(points || 0);
  if (party.players[playerId]) party.players[playerId].score = party.scores[playerId];
  return persist ? persistParty(party) : party;
}

export function awardVoteWinners(party) {
  const counts = {};
  Object.values(party.votes || {}).forEach((vote) => {
    counts[vote.responsePlayerId] = (counts[vote.responsePlayerId] || 0) + 1;
  });
  const ranking = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const points = party.game.points || {};
  if (ranking[0]) addScore(party, ranking[0][0], points.gagnant || 5, false);
  if (ranking[1]) addScore(party, ranking[1][0], points.deuxieme || 3, false);
  party.state = "resultats_manche";
  party.step = "resultats_manche";
  party.message = "Resultats de la manche";
  return persistParty(party);
}

export function sortedScores(party) {
  return Object.values(party.players || {})
    .map((player) => ({ ...player, score: party.scores?.[player.id] || 0 }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

export function assertState(state) {
  return PARTY_STATES.includes(state) ? state : "accueil";
}

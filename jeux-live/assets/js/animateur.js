import { GAME_TYPES } from "./app-config.js";
import { $, escapeHtml, downloadText, toCsv, formatDate } from "./utils.js";
import { loadLibrary } from "./storage-service.js";
import { renderQr } from "./qr-code.js";
import { getItems, getRoundInstruction, getRoundTitle, labelType } from "./game-types.js";
import { autoCorrectRound } from "./game-engine.js";
import {
  bootSync,
  createParty,
  listenParty,
  startRound,
  closeResponses,
  openVote,
  showCorrection,
  nextRound,
  finishParty,
  awardVoteWinners,
  persistParty,
  sortedScores,
  addScore,
  currentItem
} from "./party-service.js";

let library = [];
let party = null;
let unlisten = null;

const gameSelect = $("#gameSelect");
const setup = $("#setup");
const partyView = $("#partyView");

bootSync().then((enabled) => {
  $("#syncStatus").textContent = enabled ? "Firebase actif" : "Mode localStorage";
});

function init() {
  library = loadLibrary();
  gameSelect.innerHTML = library.map((game) => `<option value="${game.id}">${escapeHtml(game.titre)} - ${labelType(game.type)}</option>`).join("");
  const launchId = localStorage.getItem("party_live_launch_game");
  if (launchId && library.some((game) => game.id === launchId)) {
    gameSelect.value = launchId;
    localStorage.removeItem("party_live_launch_game");
  }
  gameSelect.addEventListener("change", renderSummary);
  $("#createPartyBtn").addEventListener("click", createSelectedParty);
  $("#startRoundBtn").addEventListener("click", () => update(startRound(party)));
  $("#closeResponsesBtn").addEventListener("click", () => update(closeResponses(party)));
  $("#openVoteBtn").addEventListener("click", () => update(openVote(party)));
  $("#correctionBtn").addEventListener("click", correction);
  $("#nextRoundBtn").addEventListener("click", () => update(nextRound(party)));
  $("#finishBtn").addEventListener("click", () => update(finishParty(party)));
  $("#fullscreenBtn").addEventListener("click", () => document.body.classList.toggle("fullscreen-mode"));
  $("#exportBtn").addEventListener("click", exportResults);
  renderSummary();
}

function renderSummary() {
  const game = library.find((item) => item.id === gameSelect.value) || library[0];
  const count = getItems(game).length;
  $("#gameSummary").innerHTML = `<strong>${escapeHtml(labelType(game?.type))}</strong><br>${escapeHtml(game?.description || "")}<br>${count} item(s) pret(s).`;
}

function createSelectedParty() {
  const game = library.find((item) => item.id === gameSelect.value) || library[0];
  party = createParty(game);
  setup.style.display = "none";
  partyView.style.display = "";
  const joinUrl = new URL("joueur.html", window.location.href);
  joinUrl.searchParams.set("party", party.id);
  $("#partyCode").textContent = party.id;
  $("#joinUrl").textContent = joinUrl.href;
  renderQr($("#qrCode"), joinUrl.href);
  if (unlisten) unlisten();
  unlisten = listenParty(party.id, update);
  update(party);
}

function update(nextParty) {
  party = nextParty;
  renderParty();
}

function renderParty() {
  if (!party) return;
  const item = currentItem(party);
  const items = getItems(party.game);
  $("#partyState").textContent = party.state;
  $("#roundCounter").textContent = `Manche ${Math.min((party.roundIndex || 0) + 1, items.length)} / ${items.length}`;
  $("#playerCount").textContent = Object.keys(party.players || {}).length;
  renderTimer();
  renderProjector(item);
  renderPlayers();
  renderScores();
}

function renderProjector(item) {
  const game = party.game;
  const responses = Object.values(party.responses || {});
  const votes = Object.values(party.votes || {});
  const responseCards = responses.map((response) => {
    const player = party.players[response.playerId];
    const name = game.anonyme && party.state === "vote_en_cours" ? "Anonyme" : player?.name || "Joueur";
    return `<article class="answer-card"><strong>${escapeHtml(name)}</strong><p>${escapeHtml(response.value)}</p>${party.state !== "vote_en_cours" ? `<button class="btn small success" data-award="${response.playerId}">+1</button>` : ""}</article>`;
  }).join("");

  let html = "";
  if (party.state === "attente_joueurs") {
    html = `<div class="center"><p class="muted">En attente des joueurs</p><h2 class="projector-question">Scannez le QR code</h2></div>`;
  } else if (party.state === "fin_partie") {
    html = `<div class="center"><p class="muted">Partie terminee</p><h2 class="projector-question">Classement final</h2></div>`;
  } else {
    const publicInstruction = getRoundInstruction(game, item, true);
    html = `<div><p class="muted">${escapeHtml(labelType(game.type))}</p><h2 class="projector-question">${escapeHtml(getRoundTitle(game, item))}</h2><p style="font-size:clamp(1.2rem,2.2vw,2rem);">${escapeHtml(publicInstruction)}</p></div>`;
    if (item?.elements_a_classer?.length) html += `<div class="answer-grid">${item.elements_a_classer.map((value) => `<div class="answer-card">${escapeHtml(value)}</div>`).join("")}</div>`;
    if (item?.choix?.length && party.state !== "correction") html += `<div class="answer-grid">${item.choix.map((value) => `<div class="answer-card">${escapeHtml(value)}</div>`).join("")}</div>`;
    if (party.state === "correction") html += correctionHtml(item);
    if (responses.length) html += `<h3>Reponses (${responses.length})</h3><div class="answer-grid">${responseCards}</div>`;
    if (votes.length) html += `<p class="notice ok">${votes.length} vote(s) recu(s)</p>`;
  }
  $("#projectorContent").innerHTML = html;
  document.querySelectorAll("[data-award]").forEach((button) => {
    button.addEventListener("click", () => update(addScore(party, button.dataset.award, 1)));
  });
}

function correctionHtml(item) {
  if (!item) return "";
  if (party.game.type === "quiz_fun") return `<div class="notice ok"><strong>Bonne reponse : ${escapeHtml(item.bonne_reponse)}</strong><br>${escapeHtml(item.explication || "")}</div>`;
  if (party.game.type === "question_classement") {
    const answer = item.mode === "classement" ? (item.ordre_attendu || []).join(" > ") : `${item.reponse_numerique} ${item.unite || ""}`;
    return `<div class="notice ok"><strong>Bonne reponse : ${escapeHtml(answer)}</strong><br>${escapeHtml(item.explication || "")}</div>`;
  }
  if (party.game.type === "mime_challenge") return `<div class="notice ok"><strong>Secret : ${escapeHtml(item.texte_secret)}</strong></div>`;
  if (party.game.type === "times_up") return `<div class="notice ok"><strong>Mot : ${escapeHtml(item.mot)}</strong></div>`;
  if (party.game.type === "mot_interdit") return `<div class="notice ok"><strong>Mot : ${escapeHtml(item.mot_secret)}</strong><br>Interdits : ${escapeHtml((item.mots_interdits || []).join(", "))}</div>`;
  return "";
}

function renderPlayers() {
  const players = Object.values(party.players || {});
  $("#playersList").innerHTML = players.length ? players.map((player) => `<div class="item"><strong>${escapeHtml(player.name)}</strong><span class="pill">${party.scores[player.id] || 0}</span></div>`).join("") : `<p class="muted">Aucun joueur connecte.</p>`;
}

function renderScores() {
  $("#scoresList").innerHTML = sortedScores(party).map((player) => `<li><span>${escapeHtml(player.name)}</span><strong>${player.score}</strong></li>`).join("") || `<li><span>Aucun score</span><strong>0</strong></li>`;
}

function renderTimer() {
  const target = party.timerEndsAt;
  if (!target) {
    $("#timer").textContent = "--:--";
    return;
  }
  const seconds = Math.max(0, Math.ceil((target - Date.now()) / 1000));
  $("#timer").textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function correction() {
  if (party.game.type === "battle_slogans" && Object.keys(party.votes || {}).length) {
    update(awardVoteWinners(party));
    return;
  }
  autoCorrectRound(party);
  update(showCorrection(persistParty(party)));
}

function exportResults() {
  const rows = [["date", "partie", "joueur", "score"]];
  sortedScores(party).forEach((player) => rows.push([formatDate(), party.title, player.name, player.score]));
  downloadText(`party-live-${party.id}.csv`, toCsv(rows), "text/csv");
  downloadText(`party-live-${party.id}.json`, JSON.stringify(party, null, 2));
}

window.setInterval(() => party && renderTimer(), 500);
init();

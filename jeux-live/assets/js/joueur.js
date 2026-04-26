import { $, escapeHtml } from "./utils.js";
import { getParty } from "./storage-service.js";
import { getRoundInstruction, getRoundTitle, labelType, isSecretGame } from "./game-types.js";
import { bootSync, joinPartyOnline, listenParty, submitResponse, submitVote, currentItem } from "./party-service.js";

let party = null;
let player = null;
let unlisten = null;

const syncReady = bootSync();

function init() {
  const params = new URLSearchParams(location.search);
  if (params.get("party")) $("#partyInput").value = params.get("party").toUpperCase();
  $("#joinBtn").addEventListener("click", join);
  const stored = JSON.parse(localStorage.getItem("party_live_player_v1") || "null");
  if (stored?.partyId && getParty(stored.partyId)) {
    $("#partyInput").value = stored.partyId;
    $("#pseudoInput").value = stored.name || "";
  }
}

async function join() {
  try {
    await syncReady;
    const code = $("#partyInput").value.trim().toUpperCase();
    player = await joinPartyOnline(code, $("#pseudoInput").value);
    $("#joinCard").style.display = "none";
    $("#playerCard").style.display = "";
    if (unlisten) unlisten();
    unlisten = listenParty(code, update);
  } catch (error) {
    $("#joinError").style.display = "";
    $("#joinError").textContent = error.message;
  }
}

function update(nextParty) {
  party = nextParty;
  if (!player || !party.players[player.id]) {
    const stored = JSON.parse(localStorage.getItem("party_live_player_v1") || "null");
    player = party.players[stored?.playerId] || player;
  }
  render();
}

function render() {
  if (!party || !player) return;
  const item = currentItem(party);
  const score = party.scores?.[player.id] || 0;
  $("#helloPlayer").textContent = player.name;
  $("#partyInfo").textContent = `${party.title} - ${labelType(party.game.type)}`;
  $("#myScore").textContent = `${score} point${score > 1 ? "s" : ""}`;
  $("#playerNotice").style.display = "none";
  $("#playerActions").innerHTML = "";

  let html = `<p class="pill">${escapeHtml(party.state)}</p>`;
  if (party.state === "attente_joueurs") {
    html += `<h3>En attente de l'animateur</h3><p class="muted">Tu es bien connecte.</p>`;
  } else if (party.state === "fin_partie") {
    html += `<h3>Partie terminee</h3><p>Merci d'avoir joue.</p>`;
  } else {
    const isDesignated = party.selectedPlayerId === player.id;
    const publicView = !(isDesignated && isSecretGame(party.game));
    html += `<h3>${escapeHtml(getRoundTitle(party.game, item))}</h3><p>${escapeHtml(getRoundInstruction(party.game, item, publicView))}</p>`;
    if (isDesignated && isSecretGame(party.game)) html += `<div class="notice ok">Secret visible uniquement sur ton telephone.</div>`;
  }
  $("#playerContent").innerHTML = html;
  renderActions(item);
}

function renderActions(item) {
  const alreadyAnswered = party.responses?.[player.id];
  if (party.state === "reponses_ouvertes") {
    if (alreadyAnswered) return notice("Reponse envoyee", "ok");
    if (party.game.type === "quiz_fun") {
      $("#playerActions").innerHTML = (item.choix || []).map((choice) => `<button class="btn choice-btn" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join("");
    } else if (party.game.type === "question_classement" && item.mode === "estimation") {
      $("#playerActions").innerHTML = `<input id="answerInput" inputmode="decimal" placeholder="Ta reponse${item.unite ? ` en ${escapeHtml(item.unite)}` : ""}"><button class="btn primary mobile-action" id="sendAnswer">Envoyer</button>`;
    } else if (party.game.type === "question_classement" && item.mode === "classement") {
      $("#playerActions").innerHTML = `<div class="notice">Elements : ${(item.elements_a_classer || []).map(escapeHtml).join(", ")}</div><textarea id="answerInput" placeholder="Ex: souris, chat, cheval, elephant"></textarea><button class="btn primary mobile-action" id="sendAnswer">Envoyer</button>`;
    } else if (["mime_challenge", "times_up", "mot_interdit"].includes(party.game.type)) {
      if (party.selectedPlayerId === player.id) {
        $("#playerActions").innerHTML = `<button class="btn primary mobile-action" id="sendAnswer">J'ai fait deviner</button>`;
      } else {
        $("#playerActions").innerHTML = `<input id="answerInput" placeholder="Ta proposition"><button class="btn primary mobile-action" id="sendAnswer">Envoyer</button>`;
      }
    } else {
      $("#playerActions").innerHTML = `<textarea id="answerInput" placeholder="Ta reponse"></textarea><button class="btn primary mobile-action" id="sendAnswer">Envoyer</button>`;
    }
    document.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => send(button.dataset.answer)));
    $("#sendAnswer")?.addEventListener("click", () => send($("#answerInput")?.value || "Fait"));
  } else if (party.state === "vote_en_cours") {
    const responses = Object.values(party.responses || {}).filter((response) => response.playerId !== player.id);
    if (party.votes?.[player.id]) return notice("Vote envoye", "ok");
    $("#playerActions").innerHTML = responses.map((response, index) => `<button class="btn choice-btn" data-vote="${response.playerId}">Slogan ${index + 1} - ${escapeHtml(response.value)}</button>`).join("") || `<p class="muted">Aucune reponse a departager.</p>`;
    document.querySelectorAll("[data-vote]").forEach((button) => button.addEventListener("click", () => vote(button.dataset.vote)));
  } else {
    notice(party.message || "En attente de l'animateur");
  }
}

function send(value) {
  try {
    if (!String(value || "").trim()) throw new Error("Ecris une reponse");
    submitResponse(party, player.id, String(value).trim());
    notice("Reponse envoyee", "ok");
  } catch (error) {
    notice(error.message, "error");
  }
}

function vote(responsePlayerId) {
  try {
    submitVote(party, player.id, responsePlayerId);
    notice("Vote envoye", "ok");
  } catch (error) {
    notice(error.message, "error");
  }
}

function notice(message, type = "") {
  const box = $("#playerNotice");
  box.textContent = message;
  box.className = `notice ${type}`;
  box.style.display = "";
}

init();

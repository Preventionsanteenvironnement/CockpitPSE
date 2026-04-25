import { GAME_TYPES } from "./app-config.js";
import { $, safeJsonParse, copyText, downloadText, escapeHtml } from "./utils.js";
import { SAMPLE_LIBRARY } from "./examples.js";
import { upsertGame } from "./storage-service.js";
import { createBlankGame, getItems, getRoundInstruction, getRoundTitle, labelType, validateGame } from "./game-types.js";

let current = SAMPLE_LIBRARY[0];

function init() {
  const editJson = sessionStorage.getItem("party_live_edit_json");
  if (editJson) {
    try {
      current = JSON.parse(editJson);
      sessionStorage.removeItem("party_live_edit_json");
    } catch {
      current = SAMPLE_LIBRARY[0];
    }
  }
  $("#typeSelect").innerHTML = Object.entries(GAME_TYPES).map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("");
  $("#typeSelect").value = current.type;
  $("#newGameBtn").addEventListener("click", newGame);
  $("#syncFormBtn").addEventListener("click", syncForm);
  $("#addRoundBtn").addEventListener("click", addItem);
  $("#validateBtn").addEventListener("click", validateJson);
  $("#copyBtn").addEventListener("click", copyJson);
  $("#exportBtn").addEventListener("click", exportJson);
  $("#saveBtn").addEventListener("click", saveJson);
  $("#jsonArea").addEventListener("input", renderPreview);
  writeJson(current);
  fillForm();
  renderPreview();
}

function newGame() {
  current = createBlankGame($("#typeSelect").value);
  writeJson(current);
  fillForm();
  renderPreview();
}

function fillForm() {
  $("#titleInput").value = current.titre || "";
  $("#descriptionInput").value = current.description || "";
}

function syncForm() {
  const parsed = readJson();
  if (!parsed) return;
  parsed.type = $("#typeSelect").value;
  parsed.titre = $("#titleInput").value || labelType(parsed.type);
  parsed.description = $("#descriptionInput").value || "";
  current = parsed;
  writeJson(current);
  status("#formStatus", "JSON mis a jour depuis le formulaire.", "ok");
  renderPreview();
}

function addItem() {
  const parsed = readJson();
  if (!parsed) return;
  const id = `${parsed.type}_${Date.now()}`;
  const samples = {
    battle_slogans: { id, objet: "Produit imaginaire", contexte: "Contexte", consigne: "Invente un slogan.", contraintes: [], exemples: [], difficulte: "facile" },
    question_classement: { id, mode: "estimation", question: "Nouvelle question", unite: "", reponse_numerique: 0, tolerance: 0, explication: "", difficulte: "facile" },
    mime_challenge: { id, categorie: "Categorie", texte_secret: "Defi secret", indice_public: "Indice public", difficulte: "facile" },
    times_up: { id, mot: "Mot", categorie: "Categorie", difficulte: "facile", interdits: [] },
    mot_interdit: { id, mot_secret: "Mot", categorie: "Categorie", mots_interdits: [], indices_autorises: [], difficulte: "facile" },
    quiz_fun: { id, question: "Question ?", choix: ["A", "B", "C", "D"], bonne_reponse: "A", explication: "", categorie: "General", difficulte: "facile" }
  };
  if (parsed.type === "battle_slogans" || parsed.type === "question_classement") parsed.manches = [...(parsed.manches || []), samples[parsed.type]];
  else if (parsed.type === "mime_challenge") parsed.defis = [...(parsed.defis || []), samples[parsed.type]];
  else if (parsed.type === "quiz_fun") parsed.questions = [...(parsed.questions || []), samples[parsed.type]];
  else parsed.cartes = [...(parsed.cartes || []), samples[parsed.type]];
  current = parsed;
  writeJson(parsed);
  renderPreview();
}

function validateJson() {
  const parsed = readJson();
  if (!parsed) return;
  const errors = validateGame(parsed);
  if (errors.length) status("#jsonStatus", errors.join(" "), "error");
  else status("#jsonStatus", "JSON valide et importable.", "ok");
}

function saveJson() {
  const parsed = readJson();
  if (!parsed) return;
  const errors = validateGame(parsed);
  if (errors.length) return status("#jsonStatus", errors.join(" "), "error");
  const saved = upsertGame(parsed);
  writeJson(saved);
  status("#jsonStatus", "Jeu sauvegarde dans la bibliotheque locale.", "ok");
}

async function copyJson() {
  await copyText($("#jsonArea").value);
  status("#jsonStatus", "JSON copie.", "ok");
}

function exportJson() {
  const parsed = readJson();
  if (!parsed) return;
  downloadText(`${parsed.id || "party-live-jeu"}.json`, JSON.stringify(parsed, null, 2));
}

function renderPreview() {
  const parsed = readJson(false);
  if (!parsed) return;
  const first = getItems(parsed)[0];
  $("#projectorPreview").innerHTML = first
    ? `<p class="muted">${escapeHtml(labelType(parsed.type))}</p><h2>${escapeHtml(getRoundTitle(parsed, first))}</h2><p>${escapeHtml(getRoundInstruction(parsed, first, true))}</p>`
    : `<p class="muted">Ajoutez un item pour obtenir un apercu.</p>`;
  $("#mobilePreview").innerHTML = first
    ? `<div class="notice">${escapeHtml(getRoundInstruction(parsed, first, false))}</div>`
    : `<div class="notice">En attente de contenu.</div>`;
}

function readJson(showError = true) {
  const result = safeJsonParse($("#jsonArea").value);
  if (!result.ok) {
    if (showError) status("#jsonStatus", `JSON invalide : ${result.error}`, "error");
    return null;
  }
  current = result.data;
  return result.data;
}

function writeJson(value) {
  $("#jsonArea").value = JSON.stringify(value, null, 2);
}

function status(selector, message, type = "") {
  const box = $(selector);
  box.textContent = message;
  box.className = `notice ${type}`;
  box.style.display = "";
}

init();

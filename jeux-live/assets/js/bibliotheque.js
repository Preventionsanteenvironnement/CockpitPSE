import { GAME_TYPES, STORAGE_KEYS } from "./app-config.js";
import { $, escapeHtml, downloadText } from "./utils.js";
import { loadLibrary, saveLibrary, deleteGame, upsertGame } from "./storage-service.js";
import { SAMPLE_LIBRARY } from "./examples.js";
import { labelType, getItems } from "./game-types.js";

let library = [];

function init() {
  $("#typeFilter").innerHTML = `<option value="">Tous les types</option>${Object.entries(GAME_TYPES).map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("")}`;
  $("#typeFilter").addEventListener("change", render);
  $("#resetSamplesBtn").addEventListener("click", () => {
    saveLibrary(SAMPLE_LIBRARY);
    library = loadLibrary();
    render();
  });
  library = loadLibrary();
  render();
}

function render() {
  const filter = $("#typeFilter").value;
  const items = filter ? library.filter((game) => game.type === filter) : library;
  $("#libraryGrid").innerHTML = items.map(card).join("") || `<div class="card">Aucun jeu.</div>`;
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", handleAction));
}

function card(game) {
  return `<article class="game-card">
    <div class="between">
      <span class="pill">${escapeHtml(labelType(game.type))}</span>
      <span class="pill">${getItems(game).length} item(s)</span>
    </div>
    <h3>${escapeHtml(game.titre || "Sans titre")}</h3>
    <p class="muted">${escapeHtml(game.description || "")}</p>
    <div class="row">
      <button class="btn small primary" data-action="launch" data-id="${game.id}">Lancer</button>
      <button class="btn small" data-action="edit" data-id="${game.id}">Modifier</button>
      <button class="btn small" data-action="duplicate" data-id="${game.id}">Dupliquer</button>
      <button class="btn small" data-action="export" data-id="${game.id}">Exporter</button>
      <button class="btn small danger" data-action="delete" data-id="${game.id}">Supprimer</button>
    </div>
  </article>`;
}

function handleAction(event) {
  const id = event.currentTarget.dataset.id;
  const action = event.currentTarget.dataset.action;
  const game = library.find((item) => item.id === id);
  if (!game) return;
  if (action === "launch") {
    localStorage.setItem("party_live_launch_game", id);
    location.href = "animateur.html";
  }
  if (action === "edit") {
    sessionStorage.setItem("party_live_edit_json", JSON.stringify(game));
    location.href = "editeur.html";
  }
  if (action === "duplicate") {
    upsertGame({ ...game, id: `${game.id}_copie_${Date.now()}`, titre: `${game.titre} copie` });
    library = loadLibrary();
    render();
  }
  if (action === "export") {
    downloadText(`${game.id}.json`, JSON.stringify(game, null, 2));
  }
  if (action === "delete" && confirm("Supprimer ce jeu ?")) {
    deleteGame(id);
    library = loadLibrary();
    render();
  }
}

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEYS.library) {
    library = loadLibrary();
    render();
  }
});

init();

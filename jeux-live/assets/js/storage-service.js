import { STORAGE_KEYS } from "./app-config.js";
import { SAMPLE_LIBRARY } from "./examples.js";

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new StorageEvent("storage", { key, newValue: JSON.stringify(value) }));
}

export function loadLibrary() {
  const library = read(STORAGE_KEYS.library, null);
  if (library) return library;
  write(STORAGE_KEYS.library, SAMPLE_LIBRARY);
  return SAMPLE_LIBRARY;
}

export function saveLibrary(library) {
  write(STORAGE_KEYS.library, library);
}

export function upsertGame(game) {
  const library = loadLibrary();
  const next = { ...game, id: game.id || `jeu_${Date.now()}`, updatedAt: new Date().toISOString() };
  const index = library.findIndex((item) => item.id === next.id);
  if (index >= 0) library[index] = next;
  else library.unshift(next);
  saveLibrary(library);
  return next;
}

export function deleteGame(id) {
  saveLibrary(loadLibrary().filter((game) => game.id !== id));
}

export function loadParties() {
  return read(STORAGE_KEYS.parties, {});
}

export function saveParties(parties) {
  write(STORAGE_KEYS.parties, parties);
}

export function getParty(id) {
  return loadParties()[id] || null;
}

export function saveParty(party) {
  const parties = loadParties();
  parties[party.id] = party;
  saveParties(parties);
  return party;
}

export function removeParty(id) {
  const parties = loadParties();
  delete parties[id];
  saveParties(parties);
}

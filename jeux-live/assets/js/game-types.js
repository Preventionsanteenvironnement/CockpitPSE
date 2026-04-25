import { GAME_TYPES } from "./app-config.js";

export function getItems(game) {
  if (!game) return [];
  if (game.type === "battle_slogans" || game.type === "question_classement") return game.manches || [];
  if (game.type === "mime_challenge") return game.defis || [];
  if (game.type === "quiz_fun") return game.questions || [];
  if (game.type === "times_up" || game.type === "mot_interdit") return game.cartes || [];
  return [];
}

export function getRoundTitle(game, item) {
  if (!game || !item) return "En attente";
  if (game.type === "battle_slogans") return item.objet || item.contexte || game.titre;
  if (game.type === "question_classement") return item.question;
  if (game.type === "mime_challenge") return item.indice_public || item.categorie;
  if (game.type === "times_up") return item.categorie || game.titre;
  if (game.type === "mot_interdit") return item.categorie || game.titre;
  if (game.type === "quiz_fun") return item.question;
  return game.titre;
}

export function getRoundInstruction(game, item, publicView = true) {
  if (!game || !item) return "";
  if (game.type === "battle_slogans") return item.consigne || "Invente un slogan.";
  if (game.type === "question_classement") {
    if (item.mode === "classement") return `${item.question} Glisse mentalement l'ordre puis envoie ta liste separee par des virgules.`;
    return `${item.question}${item.unite ? ` (${item.unite})` : ""}`;
  }
  if (game.type === "mime_challenge") {
    return publicView ? `Categorie : ${item.categorie}. Indice : ${item.indice_public}` : item.texte_secret;
  }
  if (game.type === "times_up") return publicView ? `Categorie : ${item.categorie}` : item.mot;
  if (game.type === "mot_interdit") {
    return publicView ? `Categorie : ${item.categorie}` : `${item.mot_secret} - interdits : ${(item.mots_interdits || []).join(", ")}`;
  }
  if (game.type === "quiz_fun") return item.question;
  return "";
}

export function getDuration(game) {
  if (!game) return 45;
  return game.temps_reponse || game.temps_question || game.temps_mime || game.temps_par_tour || game.temps || 45;
}

export function needsVote(game) {
  return game?.type === "battle_slogans";
}

export function isSecretGame(game) {
  return ["mime_challenge", "times_up", "mot_interdit"].includes(game?.type);
}

export function labelType(type) {
  return GAME_TYPES[type] || type || "Jeu";
}

export function validateGame(game) {
  const errors = [];
  if (!game || typeof game !== "object") errors.push("Le JSON doit etre un objet.");
  if (!game?.type) errors.push("Le champ type est obligatoire.");
  if (!game?.titre) errors.push("Le champ titre est obligatoire.");
  if (!getItems(game).length) errors.push("Ajoutez au moins une manche, question, carte ou defi.");
  return errors;
}

export function createBlankGame(type = "quiz_fun") {
  const base = {
    id: `${type}_${Date.now()}`,
    type,
    titre: labelType(type),
    description: ""
  };
  if (type === "battle_slogans") return { ...base, temps_reponse: 60, temps_vote: 30, points: { participation: 1, gagnant: 5, deuxieme: 3 }, anonyme: true, manches: [] };
  if (type === "question_classement") return { ...base, temps_reponse: 45, points: { participation: 1, exact: 5, proche: 3 }, manches: [] };
  if (type === "mime_challenge") return { ...base, temps_mime: 45, mode: "joueur_designe", joueur_designe_aleatoire: true, points: { mime_reussi: 2, devineur: 3 }, defis: [] };
  if (type === "times_up") return { ...base, temps_par_tour: 60, points_mot_trouve: 1, nombre_manches: 3, manches: [], cartes: [] };
  if (type === "mot_interdit") return { ...base, temps: 45, points: { joueur_fait_deviner: 2, joueur_devine: 3 }, cartes: [] };
  return { ...base, temps_question: 25, points: { bonne_reponse: 5, bonus_rapidite: true }, questions: [] };
}

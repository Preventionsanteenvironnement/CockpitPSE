// ════════════════════════════════════════════════════════════════════════
// COMMENTAIRES AUTO par compétence — pour QCU, Vrai/Faux, Nombre uniquement
// Utilisé par grille.html lors de l'auto-correction
// ════════════════════════════════════════════════════════════════════════

const COMMENTAIRES_AUTO = {
  C1: {
    I: "Aucune information attendue identifiée. Information relevée fausse ou erronée.",
    M: "Information attendue partiellement identifiée."
  },
  C2: {
    I: "Problème non identifié / partiellement identifié / mal formulé.",
    M: "Problème identifié précisément."
  },
  C3: {
    I: "Pas d'explication / explication partielle d'un phénomène physiologique, d'un enjeu environnemental, d'une disposition réglementaire.",
    M: "Explication d'un phénomène physiologique, d'un enjeu environnemental, d'une disposition réglementaire identifiée."
  },
  C4: {
    I: "Pas de solution / solution inadaptée ou sans lien avec le thème / problème.",
    M: "Solution adaptée à la situation problème."
  },
  C5: {
    I: "Pas d'argument / argument non pertinent — argument sans lien avec un choix.",
    M: "Argument(s) avec des « éléments de preuve » en lien avec un choix."
  },
  C6: {
    I: "Absence de phrase : pas de syntaxe, ou vocabulaire limité ou succinct / inadapté à l'écrit.",
    M: "Enchaînement de phrases avec des transitions, une syntaxe et un vocabulaire adaptés à la situation."
  }
};

// Types de questions éligibles à l'auto-commentaire
const AUTO_COMMENT_TYPES = new Set(["radio", "vrai_faux", "number"]);

/**
 * Retourne le commentaire auto pour une question donnée
 * @param {string} inputType - type de la question (radio, vrai_faux, number, textarea, etc.)
 * @param {string} competence - compétence (C1, C2, ..., C6)
 * @param {string} level - niveau attribué par l'auto-correction ("I", "M", "A", "NT")
 * @returns {string|null} - commentaire ou null si pas éligible
 */
function getAutoComment(inputType, competence, level) {
  // Uniquement pour QCU, Vrai/Faux, Nombre
  if (!AUTO_COMMENT_TYPES.has(inputType)) return null;

  // Uniquement pour I (insuffisant) et M (maîtrisé)
  if (level !== "I" && level !== "M") return null;

  const compData = COMMENTAIRES_AUTO[competence];
  if (!compData) return null;

  return compData[level] || null;
}

// Export global
window.COMMENTAIRES_AUTO = COMMENTAIRES_AUTO;
window.AUTO_COMMENT_TYPES = AUTO_COMMENT_TYPES;
window.getAutoComment = getAutoComment;

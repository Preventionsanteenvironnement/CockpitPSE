import { addScore } from "./party-service.js";

export function autoCorrectRound(party) {
  const game = party.game;
  if (!game) return party;
  if (game.type === "quiz_fun") return correctQuiz(party);
  if (game.type === "question_classement") return correctClassement(party);
  return party;
}

function correctQuiz(party) {
  const question = (party.game.questions || [])[party.roundIndex || 0];
  if (!question) return party;
  Object.values(party.responses || {}).forEach((response) => {
    if (String(response.value).trim() === String(question.bonne_reponse).trim()) {
      addScore(party, response.playerId, party.game.points?.bonne_reponse || 5, false);
    }
  });
  return party;
}

function correctClassement(party) {
  const item = (party.game.manches || [])[party.roundIndex || 0];
  if (!item) return party;
  Object.values(party.responses || {}).forEach((response) => {
    if (item.mode === "estimation") {
      const value = Number(String(response.value).replace(",", "."));
      const diff = Math.abs(value - Number(item.reponse_numerique));
      if (diff === 0) addScore(party, response.playerId, party.game.points?.exact || 5, false);
      else if (diff <= Number(item.tolerance || 0)) addScore(party, response.playerId, party.game.points?.proche || 3, false);
    } else {
      const answer = String(response.value).split(",").map((v) => v.trim().toLowerCase()).filter(Boolean);
      const expected = (item.ordre_attendu || []).map((v) => String(v).toLowerCase());
      const perfect = expected.length === answer.length && expected.every((v, index) => v === answer[index]);
      if (perfect) addScore(party, response.playerId, party.game.points?.exact || 5, false);
    }
  });
  return party;
}

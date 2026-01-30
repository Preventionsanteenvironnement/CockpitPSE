// ════════════════════════════════════════════════════════════════════════════
// 🤖 MODULE DE CORRECTION AUTOMATIQUE - Version 1.0
// À ajouter dans ta grille de correction (Grille_v16.html)
// ════════════════════════════════════════════════════════════════════════════

/**
 * Lance la correction automatique si le blueprint contient les données
 * Appeler cette fonction APRÈS avoir chargé le blueprint et les réponses
 * 
 * @param {Object} blueprint - Le blueprint du devoir avec correction_auto
 * @param {Object} reponses - Les réponses de l'élève depuis Firebase
 */
function lancerCorrectionAuto(blueprint, reponses) {
    // Vérifier si la correction auto est activée
    if (!blueprint?.correction_auto_enabled) {
        console.log("ℹ️ Correction auto non activée pour ce devoir");
        return;
    }
    
    console.log("🤖 Lancement de la correction automatique...");
    
    const questions = extractQuestionsFromBlueprint(blueprint);
    let totalAutoPoints = 0;
    let questionsCorrigees = 0;
    
    questions.forEach((q, idx) => {
        if (!q.correction_auto) return;
        
        const qid = q.qid || `q_${idx}`;
        const reponseEleve = reponses[qid];
        const resultat = evaluerReponse(q, reponseEleve);
        
        // Appliquer le résultat dans la grille
        appliquerResultatAuto(qid, resultat, q.bareme);
        
        totalAutoPoints += resultat.points;
        questionsCorrigees++;
        
        console.log(`  ${q.label} : ${resultat.niveau} (${resultat.points}/${q.bareme} pts) - ${resultat.commentaire}`);
    });
    
    console.log(`✅ Correction auto terminée : ${questionsCorrigees} questions, ${totalAutoPoints.toFixed(2)} pts`);
    
    // Mettre à jour les totaux
    if (typeof calculateTotal === 'function') calculateTotal();
    if (typeof updateCounters === 'function') {
        ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'].forEach(c => updateCounters(c));
    }
    
    // Afficher un message
    afficherBilanCorrectionAuto(questionsCorrigees, totalAutoPoints);
}

/**
 * Évalue une réponse selon le type de correction
 */
function evaluerReponse(question, reponseEleve) {
    const auto = question.correction_auto;
    const bareme = question.bareme || 1;
    
    // Pas de réponse
    if (!reponseEleve || (Array.isArray(reponseEleve) && reponseEleve.length === 0)) {
        return { niveau: 'NT', points: 0, commentaire: '❌ Non répondu' };
    }
    
    // Normaliser la réponse en tableau
    const reponsesArray = Array.isArray(reponseEleve) ? reponseEleve : [reponseEleve];
    const reponsesNorm = reponsesArray.map(r => String(r).toLowerCase().trim());
    
    switch (auto.type) {
        
        // ═══════════════════════════════════════════════════════════════
        // RADIO SIMPLE : 1 seule bonne réponse
        // ═══════════════════════════════════════════════════════════════
        case 'radio_simple': {
            const bonneReponse = auto.bonne_reponse.toLowerCase();
            if (reponsesNorm.includes(bonneReponse)) {
                return { niveau: 'M', points: bareme, commentaire: '✅ Correct' };
            } else {
                return { niveau: 'I', points: 0, commentaire: `❌ Attendu: ${auto.bonne_reponse}` };
            }
        }
        
        // ═══════════════════════════════════════════════════════════════
        // RADIO SIMPLE AVEC TOLÉRANCE : plusieurs réponses acceptées
        // ═══════════════════════════════════════════════════════════════
        case 'radio_simple_tolerance': {
            const bonneReponse = auto.bonne_reponse.toLowerCase();
            const acceptees = auto.reponses_acceptees.map(r => r.toLowerCase());
            
            if (reponsesNorm.includes(bonneReponse)) {
                return { niveau: 'M', points: bareme, commentaire: '✅ Réponse optimale' };
            } else if (reponsesNorm.some(r => acceptees.includes(r))) {
                const pts = auto.points_tolerance || (bareme * 0.75);
                return { niveau: 'A', points: pts, commentaire: '🟡 Acceptable (tolérance)' };
            } else {
                return { niveau: 'I', points: 0, commentaire: `❌ Attendu: ${auto.bonne_reponse}` };
            }
        }
        
        // ═══════════════════════════════════════════════════════════════
        // RADIO MULTIPLE : plusieurs sous-questions, toutes doivent être bonnes
        // ═══════════════════════════════════════════════════════════════
        case 'radio_multiple': {
            const bonnes = auto.bonnes_reponses.map(r => r.toLowerCase());
            const nbAttendu = auto.nb_attendu || bonnes.length;
            
            let nbCorrect = 0;
            bonnes.forEach(b => {
                if (reponsesNorm.includes(b)) nbCorrect++;
            });
            
            const ratio = nbCorrect / nbAttendu;
            const points = Math.round((ratio * bareme) * 4) / 4; // Arrondi au 0.25
            
            if (ratio >= 1) {
                return { niveau: 'M', points: bareme, commentaire: `✅ ${nbCorrect}/${nbAttendu} correct` };
            } else if (ratio >= 0.75) {
                return { niveau: 'A', points, commentaire: `🟡 ${nbCorrect}/${nbAttendu} correct` };
            } else if (ratio >= 0.5) {
                return { niveau: 'A', points, commentaire: `🟠 ${nbCorrect}/${nbAttendu} correct` };
            } else if (nbCorrect > 0) {
                return { niveau: 'I', points, commentaire: `❌ ${nbCorrect}/${nbAttendu} correct` };
            } else {
                return { niveau: 'I', points: 0, commentaire: `❌ 0/${nbAttendu} correct` };
            }
        }
        
        // ═══════════════════════════════════════════════════════════════
        // RADIO MULTIPLE FLEXIBLE : certaines réponses ont plusieurs options valides
        // ═══════════════════════════════════════════════════════════════
        case 'radio_multiple_flexible': {
            const bonnes = auto.bonnes_reponses;
            const nbAttendu = auto.nb_attendu || bonnes.length;
            
            let nbCorrect = 0;
            
            // Pour chaque bonne réponse attendue
            bonnes.forEach((attendu, idx) => {
                // attendu peut être string ou array de strings
                const attenduArray = Array.isArray(attendu) ? attendu : [attendu];
                const attenduNorm = attenduArray.map(a => a.toLowerCase());
                
                // Vérifier si une des réponses de l'élève correspond
                if (reponsesNorm.some(r => attenduNorm.includes(r))) {
                    nbCorrect++;
                }
            });
            
            const ratio = nbCorrect / nbAttendu;
            const points = Math.round((ratio * bareme) * 4) / 4;
            
            if (ratio >= 1) {
                return { niveau: 'M', points: bareme, commentaire: `✅ ${nbCorrect}/${nbAttendu} correct` };
            } else if (ratio >= 0.7) {
                return { niveau: 'A', points, commentaire: `🟡 ${nbCorrect}/${nbAttendu} correct` };
            } else if (ratio >= 0.4) {
                return { niveau: 'I', points, commentaire: `🟠 ${nbCorrect}/${nbAttendu} correct` };
            } else {
                return { niveau: 'I', points: Math.max(0, points), commentaire: `❌ ${nbCorrect}/${nbAttendu} correct` };
            }
        }
        
        // ═══════════════════════════════════════════════════════════════
        // CHECKBOX MULTIPLE : plusieurs cases à cocher, avec piège possible
        // ═══════════════════════════════════════════════════════════════
        case 'checkbox_multiple': {
            const bonnes = auto.bonnes_reponses.map(r => r.toLowerCase());
            const mauvaises = (auto.mauvaises_reponses || []).map(r => r.toLowerCase());
            const nbAttendu = auto.nb_attendu || 2;
            const ptsBonne = auto.points_par_bonne || (bareme / nbAttendu);
            const ptsPiege = auto.points_si_piege || 0;
            
            let nbBonnes = 0;
            let nbMauvaises = 0;
            
            reponsesNorm.forEach(r => {
                if (bonnes.includes(r)) nbBonnes++;
                if (mauvaises.includes(r)) nbMauvaises++;
            });
            
            let points = (nbBonnes * ptsBonne) + (nbMauvaises * ptsPiege);
            points = Math.max(0, Math.min(bareme, points)); // Entre 0 et bareme
            points = Math.round(points * 4) / 4;
            
            let commentaire = `✅ ${nbBonnes} bonne(s)`;
            if (nbMauvaises > 0) commentaire += ` ⚠️ ${nbMauvaises} piège(s)`;
            
            if (nbBonnes >= nbAttendu && nbMauvaises === 0) {
                return { niveau: 'M', points: bareme, commentaire };
            } else if (nbBonnes >= 1 && nbMauvaises === 0) {
                return { niveau: 'A', points, commentaire };
            } else if (nbBonnes >= 1) {
                return { niveau: 'I', points, commentaire };
            } else {
                return { niveau: 'I', points: 0, commentaire: '❌ Aucune bonne réponse' };
            }
        }
        
        default:
            console.warn(`Type de correction inconnu: ${auto.type}`);
            return { niveau: '', points: 0, commentaire: '⚠️ Type inconnu' };
    }
}

/**
 * Applique le résultat de correction auto dans la grille
 */
function appliquerResultatAuto(qid, resultat, bareme) {
    // Trouver la ligne du tableau de correction
    const row = document.querySelector(`#correctionTable tbody tr[data-qid="${qid}"]`);
    if (!row) {
        console.warn(`Ligne non trouvée pour ${qid}`);
        return;
    }
    
    // 1. Cliquer sur le bouton de niveau
    if (resultat.niveau) {
        const btnNiveau = row.querySelector(`.level-btn.${resultat.niveau.toLowerCase()}`);
        if (btnNiveau) {
            // Retirer les autres actifs
            row.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            btnNiveau.classList.add('active');
            row.dataset.level = resultat.niveau;
        }
    }
    
    // 2. Ajouter le commentaire auto
    const commentDiv = row.querySelector('.editable-div');
    if (commentDiv && resultat.commentaire) {
        const existant = commentDiv.innerText.trim();
        if (!existant) {
            commentDiv.innerHTML = `<span style="color:#6b7280; font-style:italic;">🤖 ${resultat.commentaire}</span>`;
        }
    }
    
    // 3. Mettre à jour les points de la compétence
    const comp = row.dataset.comp;
    if (comp) {
        const ptsInput = document.getElementById(`pts_${comp}`);
        if (ptsInput) {
            const currentPts = parseFloat(ptsInput.value) || 0;
            ptsInput.value = (currentPts + resultat.points).toFixed(2);
        }
    }
}

/**
 * Affiche un bilan de la correction automatique
 */
function afficherBilanCorrectionAuto(nbQuestions, totalPoints) {
    // Créer ou mettre à jour le bandeau
    let banner = document.getElementById('auto-correction-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'auto-correction-banner';
        banner.style.cssText = `
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        `;
        const statusBanner = document.getElementById('statusBanner');
        if (statusBanner) {
            statusBanner.parentNode.insertBefore(banner, statusBanner.nextSibling);
        }
    }
    
    banner.innerHTML = `
        <span>
            <strong>🤖 Correction automatique appliquée</strong><br>
            <small>${nbQuestions} questions pré-corrigées • ${totalPoints.toFixed(2)} pts calculés</small>
        </span>
        <button onclick="this.parentElement.remove()" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        ">✕ Fermer</button>
    `;
}

// ════════════════════════════════════════════════════════════════════════════
// INTÉGRATION : Ajouter cet appel dans ta fonction init() après renderCorrection
// ════════════════════════════════════════════════════════════════════════════
// 
// Exemple d'intégration dans init() :
//
//     renderCorrection({ questions: extractQuestionsFromBlueprint(CURRENT_BLUEPRINT) }, CURRENT_COPY.reponses || {});
//     
//     // ⭐ AJOUTER ICI :
//     if (CURRENT_BLUEPRINT.correction_auto_enabled && !CURRENT_EVALUATION) {
//         lancerCorrectionAuto(CURRENT_BLUEPRINT, CURRENT_COPY.reponses || {});
//     }
//
// ════════════════════════════════════════════════════════════════════════════

console.log("🤖 Module Correction Auto chargé !");

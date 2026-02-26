/* 📁 DATA_MODULES.JS — Configuration complète du suivi PSE
   
   📅 Créé le : 26 janvier 2026
   🎓 Niveaux : CAP (1ère/2ème année) + Bac Pro (Seconde/Première/Terminale)
   
   Structure :
   - CLASSES_CONFIG : association classe → niveau + groupes
   - GROUPES_CLASSES : classes regroupées ensemble
   - MODULES_PSE : modules par niveau
   - COMPETENCES_PSE : compétences par niveau
   - BAREME_SUIVI : barème de notation
   - BANQUE_COMMENTAIRES : commentaires rapides
*/

// ═══════════════════════════════════════════════════════════════════════
// GROUPES DE CLASSES (classes qui sont toujours ensemble)
// ═══════════════════════════════════════════════════════════════════════
window.GROUPES_CLASSES = {
    "B2GATL": ["B2GATL1", "B2GATL2"],      // Seconde GATL groupées
    "B1AGO": ["B1AGO1", "B1AGO2"],          // Première AGOrA groupées
    "BTAGO": ["BTAGO1", "BTAGO2"],          // Terminale AGOrA groupées
    // Les autres classes sont seules (MELEC, CAP...)
};

// ═══════════════════════════════════════════════════════════════════════
// CONFIGURATION DES CLASSES → NIVEAUX
// ═══════════════════════════════════════════════════════════════════════
window.CLASSES_CONFIG = {
    // ─────────────────────────────────────────────────────────────────────
    // CAP 1ère année
    // ─────────────────────────────────────────────────────────────────────
    "C1CAN": { niveau: "CAP", annee: 1, filiere: "Carrosserie", groupe: null },
    "C1HORT": { niveau: "CAP", annee: 1, filiere: "Horticulture", groupe: null },
    "C1JP": { niveau: "CAP", annee: 1, filiere: "Jardinier Paysagiste", groupe: null },
    "C1PSR": { niveau: "CAP", annee: 1, filiere: "PSR", groupe: null },
    "C1VAN": { niveau: "CAP", annee: 1, filiere: "Vannerie", groupe: null },
    
    // ─────────────────────────────────────────────────────────────────────
    // CAP 2ème année
    // ─────────────────────────────────────────────────────────────────────
    "C2CAN": { niveau: "CAP", annee: 2, filiere: "Carrosserie", groupe: null },
    "C2HORT": { niveau: "CAP", annee: 2, filiere: "Horticulture", groupe: null },
    "C2JP": { niveau: "CAP", annee: 2, filiere: "Jardinier Paysagiste", groupe: null },
    "C2PSR": { niveau: "CAP", annee: 2, filiere: "PSR", groupe: null },
    "C2VAN": { niveau: "CAP", annee: 2, filiere: "Vannerie", groupe: null },
    
    // ─────────────────────────────────────────────────────────────────────
    // Bac Pro Seconde (B2 = 2nde)
    // ─────────────────────────────────────────────────────────────────────
    "B2GATL1": { niveau: "BAC_PRO_2NDE", annee: "Seconde", filiere: "GATL", groupe: "B2GATL" },
    "B2GATL2": { niveau: "BAC_PRO_2NDE", annee: "Seconde", filiere: "GATL", groupe: "B2GATL" },
    "B2MELEC": { niveau: "BAC_PRO_2NDE", annee: "Seconde", filiere: "MELEC", groupe: null },
    
    // ─────────────────────────────────────────────────────────────────────
    // Bac Pro Première (B1 = 1ère)
    // ─────────────────────────────────────────────────────────────────────
    "B1AGO1": { niveau: "BAC_PRO_1ERE", annee: "Première", filiere: "AGOrA", groupe: "B1AGO" },
    "B1AGO2": { niveau: "BAC_PRO_1ERE", annee: "Première", filiere: "AGOrA", groupe: "B1AGO" },
    "B1MELEC": { niveau: "BAC_PRO_1ERE", annee: "Première", filiere: "MELEC", groupe: null },
    
    // ─────────────────────────────────────────────────────────────────────
    // Bac Pro Terminale (BT = Terminale)
    // ─────────────────────────────────────────────────────────────────────
    "BTAGO1": { niveau: "BAC_PRO_TERM", annee: "Terminale", filiere: "AGOrA", groupe: "BTAGO" },
    "BTAGO2": { niveau: "BAC_PRO_TERM", annee: "Terminale", filiere: "AGOrA", groupe: "BTAGO" },
    "BTMELEC": { niveau: "BAC_PRO_TERM", annee: "Terminale", filiere: "MELEC", groupe: null }
};

// ═══════════════════════════════════════════════════════════════════════
// MODULES PAR NIVEAU
// ═══════════════════════════════════════════════════════════════════════
window.MODULES_PSE = {
    
    // ─────────────────────────────────────────────────────────────────────
    // CAP (1ère et 2ème année - mêmes modules)
    // ─────────────────────────────────────────────────────────────────────
    "CAP": [
        // Thème A - Santé
        { id: "MA1", titre: "Le système de santé", theme: "A" },
        { id: "MA2", titre: "Le sommeil, un rythme biologique", theme: "A" },
        { id: "MA3", titre: "L'activité physique", theme: "A" },
        { id: "MA4", titre: "Les addictions", theme: "A" },
        { id: "MA5", titre: "La sexualité – La contraception", theme: "A" },
        { id: "MA6", titre: "Prévenir les IST", theme: "A" },
        { id: "MA7", titre: "L'alimentation adaptée à son activité", theme: "A" },
        
        // Thème B - Environnement
        { id: "MB1", titre: "Les ressources en eau", theme: "B" },
        { id: "MB2", titre: "Le risque majeur", theme: "B" },
        { id: "MB3", titre: "Les ressources en énergie", theme: "B" },
        { id: "MB4", titre: "Le bruit au quotidien", theme: "B" },
        
        // Thème C - Travail
        { id: "MC1", titre: "Les différents contrats de travail", theme: "C" },
        { id: "MC2", titre: "Les enjeux de la santé et sécurité au travail", theme: "C" },
        { id: "MC3", titre: "La démarche de prévention (activité)", theme: "C" },
        { id: "MC4", titre: "La démarche de prévention (risque spécifique)", theme: "C" },
        { id: "C4.1", titre: "Le risque lié au bruit", theme: "C", parent: "MC4" },
        { id: "C4.2", titre: "Le risque lié aux poussières", theme: "C", parent: "MC4" },
        { id: "C4.3", titre: "Le risque chimique", theme: "C", parent: "MC4" },
        { id: "C4.4", titre: "Le risque mécanique", theme: "C", parent: "MC4" },
        { id: "C4.5", titre: "Le risque électrique", theme: "C", parent: "MC4" },
        { id: "C4.6", titre: "Le risque lié à l'éclairage", theme: "C", parent: "MC4" },
        { id: "C4.7", titre: "Le risque de chute", theme: "C", parent: "MC4" },
        { id: "C4.8", titre: "Le risque incendie", theme: "C", parent: "MC4" },
        { id: "MC5", titre: "Les risques liés à l'activité physique", theme: "C" },
        { id: "MC6", titre: "Les acteurs et organismes de prévention", theme: "C" },
        { id: "MC7", titre: "Le suivi médical et la vaccination", theme: "C" },
        
        // Thème D - Consommation
        { id: "MD1", titre: "L'assurance", theme: "D" },
        { id: "MD2", titre: "Le budget", theme: "D" },
        { id: "MD3", titre: "Les achats", theme: "D" },

        // Chef d'œuvre
        { id: "CDO", titre: "Chef d'œuvre", theme: "E" }
    ],
    
    // ─────────────────────────────────────────────────────────────────────
    // BAC PRO SECONDE
    // ─────────────────────────────────────────────────────────────────────
    "BAC_PRO_2NDE": [
        // Thème A - Santé
        { id: "A1", titre: "Le système de santé", theme: "A" },
        { id: "A2", titre: "Les rythmes biologiques – Le sommeil", theme: "A" },
        { id: "A3", titre: "L'activité physique", theme: "A" },
        { id: "A4", titre: "Les addictions", theme: "A" },
        { id: "A5", titre: "La sexualité – La contraception", theme: "A" },
        
        // Thème B - Environnement
        { id: "B1", titre: "L'alimentation écoresponsable", theme: "B" },
        { id: "B2", titre: "Les risques majeurs", theme: "B" },
        
        // Thème C - Travail
        { id: "C1", titre: "Les enjeux de la santé et sécurité au travail", theme: "C" },
        { id: "C2", titre: "Les notions de base en prévention", theme: "C" }
    ],
    
    // ─────────────────────────────────────────────────────────────────────
    // BAC PRO PREMIÈRE
    // ─────────────────────────────────────────────────────────────────────
    "BAC_PRO_1ERE": [
        // Thème A - Santé
        { id: "A6", titre: "Les infections sexuellement transmissibles", theme: "A" },
        { id: "A7", titre: "Les pratiques alimentaires", theme: "A" },
        { id: "A8", titre: "Le stress au quotidien", theme: "A" },
        
        // Thème B - Environnement
        { id: "B3", titre: "Le bruit au quotidien", theme: "B" },
        { id: "B4", titre: "L'eau et le développement durable", theme: "B" },
        
        // Thème C - Travail
        { id: "C3", titre: "Les acteurs de prévention", theme: "C" },
        { id: "C4", titre: "L'assistance et le secours en milieu professionnel", theme: "C" },
        { id: "C5", titre: "L'analyse des risques professionnels", theme: "C" },
        { id: "C6", titre: "L'analyse d'un risque spécifique", theme: "C" }
    ],
    
    // ─────────────────────────────────────────────────────────────────────
    // BAC PRO TERMINALE
    // ─────────────────────────────────────────────────────────────────────
    "BAC_PRO_TERM": [
        // Thème A - Santé
        { id: "A9", titre: "La sécurité alimentaire", theme: "A" },
        
        // Thème B - Environnement
        { id: "B5", titre: "Les ressources en énergie et développement durable", theme: "B" },
        
        // Thème C - Travail
        { id: "C7", titre: "Le suivi de la santé au travail", theme: "C" },
        { id: "C8", titre: "Déclaration et réparation des AT/MP", theme: "C" },
        { id: "C9", titre: "Les risques psychosociaux", theme: "C" },
        { id: "C10", titre: "Les risques liés à l'activité physique", theme: "C" },
        { id: "C11", titre: "L'analyse d'une situation de travail", theme: "C" },
        { id: "C12", titre: "L'égalité de traitement au travail", theme: "C" }
    ]
};

// ═══════════════════════════════════════════════════════════════════════
// COMPÉTENCES PAR NIVEAU
// ═══════════════════════════════════════════════════════════════════════
window.COMPETENCES_PSE = {
    "CAP": [
        { id: "C1", titre: "Traiter une information" },
        { id: "C2", titre: "Appliquer une méthode d'analyse" },
        { id: "C3", titre: "Mettre en relation phénomène et prévention" },
        { id: "C4", titre: "Proposer une solution" },
        { id: "C5", titre: "Argumenter un choix" },
        { id: "C6", titre: "Communiquer à l'écrit et à l'oral" }
    ],
    "BAC_PRO": [
        { id: "C1", titre: "Traiter une information" },
        { id: "C2", titre: "Appliquer une démarche d'analyse" },
        { id: "C3", titre: "Expliquer un phénomène en lien avec la prévention" },
        { id: "C4", titre: "Proposer une solution" },
        { id: "C5", titre: "Argumenter un choix" },
        { id: "C6", titre: "Communiquer à l'écrit et à l'oral" }
    ]
};

// ═══════════════════════════════════════════════════════════════════════
// BARÈME DE NOTATION DU SUIVI
// ═══════════════════════════════════════════════════════════════════════
window.BAREME_SUIVI = {
    travail: {
        "tresbien": { points: 4, label: "✓✓ Très bien", emoji: "✓✓", color: "#16a34a", description: "Travail fait et juste" },
        "fait": { points: 3, label: "✓ Fait", emoji: "✓", color: "#22c55e", description: "Travail fait" },
        "partiel": { points: 1.5, label: "⚠️ Partiel", emoji: "⚠️", color: "#f59e0b", description: "Travail partiel" },
        "insuffisant": { points: 0, label: "❌ Insuffisant", emoji: "❌", color: "#dc2626", description: "Travail non fait" }
    },
    oral: {
        2: { points: 2, label: "Très bien", emoji: "2", color: "#16a34a" },
        1: { points: 1, label: "Bien", emoji: "1", color: "#f59e0b" },
        0: { points: 0, label: "Aucune", emoji: "0", color: "#94a3b8" }
    },
    attention: {
        "bonne": { points: 3, label: "😊 Bonne", emoji: "😊", color: "#16a34a" },
        "moyenne": { points: 1.5, label: "😐 Moyenne", emoji: "😐", color: "#f59e0b" },
        "insuffisante": { points: 0, label: "😕 Insuffisante", emoji: "😕", color: "#dc2626" }
    },
    porteVue: {
        "ok": { points: 1, label: "✅ OK", emoji: "✅", color: "#16a34a" },
        "oubli": { points: 0, label: "❌ Oublié", emoji: "❌", color: "#dc2626" }
    },
    maxPoints: 10  // 4 + 2 + 3 + 1
};

// ═══════════════════════════════════════════════════════════════════════
// BANQUE DE COMMENTAIRES RAPIDES
// ═══════════════════════════════════════════════════════════════════════
window.BANQUE_COMMENTAIRES = {
    positif: [
        "Bons efforts !",
        "Continue comme ça !",
        "Très bonne participation",
        "Belle progression",
        "Travail sérieux",
        "Attentif et impliqué",
        "Bravo pour ton investissement",
        "Excellent travail aujourd'hui"
    ],
    encouragement: [
        "Tu peux mieux faire",
        "Concentre-toi davantage",
        "Pense à ton matériel",
        "Participe plus à l'oral",
        "Fais des efforts",
        "Je compte sur toi",
        "Reste concentré jusqu'à la fin",
        "N'hésite pas à poser des questions"
    ],
    alerte: [
        "Travail insuffisant",
        "Manque d'attention",
        "Trop de bavardages",
        "Matériel incomplet",
        "Exercices non faits",
        "Comportement à revoir",
        "Manque de sérieux",
        "Il faut te ressaisir"
    ]
};

// ═══════════════════════════════════════════════════════════════════════
// FONCTIONS UTILITAIRES
// ═══════════════════════════════════════════════════════════════════════

/**
 * Obtenir le niveau d'une classe
 */
window.getNiveauClasse = function(classeId) {
    const config = window.CLASSES_CONFIG[classeId];
    return config ? config.niveau : null;
};

/**
 * Obtenir les modules pour une classe
 */
window.getModulesForClasse = function(classeId) {
    const niveau = window.getNiveauClasse(classeId);
    if (!niveau) return [];
    return window.MODULES_PSE[niveau] || [];
};

/**
 * Modules revision Bac Pro : pour Premiere → Seconde + Premiere, pour Terminale → tout le cursus
 */
window.BAC_PRO_REVISION_MAP = {
    "BAC_PRO_1ERE": ["BAC_PRO_2NDE", "BAC_PRO_1ERE"],
    "BAC_PRO_TERM": ["BAC_PRO_2NDE", "BAC_PRO_1ERE", "BAC_PRO_TERM"]
};

window.BAC_PRO_NIVEAU_LABELS = {
    "BAC_PRO_2NDE": "Seconde Bac Pro",
    "BAC_PRO_1ERE": "Premiere Bac Pro",
    "BAC_PRO_TERM": "Terminale Bac Pro"
};

/**
 * Obtenir les modules groupes par annee pour revision
 * Retourne: [{ niveauKey, niveauLabel, modules: [] }, ...]
 */
window.getModulesForRevision = function(classeId) {
    const niveau = window.getNiveauClasse(classeId);
    if (!niveau) return [];

    const niveauxToLoad = window.BAC_PRO_REVISION_MAP[niveau];
    if (!niveauxToLoad) {
        // Pas un Bac Pro multi-annee → retourner un seul groupe
        return [{
            niveauKey: niveau,
            niveauLabel: niveau.replace(/_/g, ' '),
            modules: window.MODULES_PSE[niveau] || []
        }];
    }

    return niveauxToLoad.map(nk => ({
        niveauKey: nk,
        niveauLabel: window.BAC_PRO_NIVEAU_LABELS[nk] || nk.replace(/_/g, ' '),
        modules: window.MODULES_PSE[nk] || []
    }));
};

/**
 * Obtenir les compétences pour une classe
 */
window.getCompetencesForClasse = function(classeId) {
    const config = window.CLASSES_CONFIG[classeId];
    if (!config) return [];
    const niveauComp = config.niveau.startsWith("BAC_PRO") ? "BAC_PRO" : "CAP";
    return window.COMPETENCES_PSE[niveauComp] || [];
};

/**
 * Obtenir toutes les classes d'un groupe (ou juste la classe si pas de groupe)
 */
window.getClassesFromGroupe = function(classeOuGroupe) {
    // Si c'est un groupe
    if (window.GROUPES_CLASSES[classeOuGroupe]) {
        return window.GROUPES_CLASSES[classeOuGroupe];
    }
    // Sinon c'est une classe simple
    return [classeOuGroupe];
};

/**
 * Obtenir la liste des classes/groupes pour l'affichage
 */
window.getListeClassesPourAffichage = function() {
    const liste = [];
    const dejaMis = new Set();
    
    Object.entries(window.CLASSES_CONFIG).forEach(([classeId, config]) => {
        if (config.groupe) {
            // Classe dans un groupe → afficher le groupe
            if (!dejaMis.has(config.groupe)) {
                liste.push({
                    id: config.groupe,
                    label: config.groupe + " (groupé)",
                    niveau: config.niveau,
                    isGroupe: true
                });
                dejaMis.add(config.groupe);
            }
        } else {
            // Classe seule
            liste.push({
                id: classeId,
                label: classeId,
                niveau: config.niveau,
                isGroupe: false
            });
        }
    });
    
    // Trier par niveau puis par nom
    return liste.sort((a, b) => a.label.localeCompare(b.label));
};

/**
 * Calculer la note sur 20 à partir des points
 */
window.calculerNoteSuivi = function(points, maxPoints) {
    if (maxPoints === 0) return 0;
    return Math.round((points / maxPoints) * 20 * 10) / 10;
};

/**
 * Calculer les points d'une saisie
 */
window.calculerPointsSaisie = function(saisie, criteresActifs) {
    let points = 0;
    let maxPoints = 0;
    
    if (criteresActifs.travail && saisie.travail) {
        const b = window.BAREME_SUIVI.travail[saisie.travail];
        if (b) {
            points += b.points;
            maxPoints += 4; // max travail
        }
    }
    if (criteresActifs.oral && saisie.oral !== undefined && saisie.oral !== null) {
        const b = window.BAREME_SUIVI.oral[saisie.oral];
        if (b) {
            points += b.points;
            maxPoints += 2; // max oral
        }
    }
    if (criteresActifs.attention && saisie.attention) {
        const b = window.BAREME_SUIVI.attention[saisie.attention];
        if (b) {
            points += b.points;
            maxPoints += 3; // max attention
        }
    }
    if (criteresActifs.porteVue && saisie.porteVue) {
        const b = window.BAREME_SUIVI.porteVue[saisie.porteVue];
        if (b) {
            points += b.points;
            maxPoints += 1; // max porte-vue
        }
    }
    
    return { 
        points, 
        maxPoints, 
        noteSur20: window.calculerNoteSuivi(points, maxPoints) 
    };
};

// ===================================================================
// DOSSIERS TRANSVERSAUX (dossiers pour regrouper les exercices transversaux)
// ===================================================================
window.DOSSIERS_TRANSVERSAUX = [
    { id: 'DUERP', label: '📋 DUERP', color: '#1e293b',
      description: "Document Unique d'Evaluation des Risques Professionnels",
      autoTypes: ['duerp_ligne', 'duerp_mini', 'duer_mission_directeur'] },
    { id: 'PAD', label: '⚠️ PAD', color: '#f59e0b',
      description: "Processus d'Apparition du Dommage",
      autoTypes: ['pad'] },
    { id: 'ESTIMATION', label: '📊 Estimation du risque', color: '#8b5cf6',
      description: "Estimation du risque professionnel",
      autoTypes: ['estimation_risque'] },
    { id: 'PREVENTION', label: '🛡️ Prevention', color: '#22c55e',
      description: "Mesures de prevention",
      autoTypes: ['prevention'] },
    { id: 'PICTOGRAMME', label: '⚠️ Pictogrammes', color: '#b45309',
      description: "Pictogrammes de securite",
      autoTypes: ['pictogramme'] },
    { id: 'ACTEURS_PREV', label: '👥 Acteurs de prevention', color: '#0891b2',
      description: "Les acteurs de prevention en entreprise",
      autoTypes: [] },
    { id: 'ANALYSE_RISQUES', label: '🔍 Analyse des risques professionnels', color: '#dc2626',
      description: "Analyse des risques professionnels",
      autoTypes: [] },
    { id: 'ANALYSE_SITUATION', label: '🏭 Analyse situation de travail', color: '#9333ea',
      description: "Analyse d'une situation de travail",
      autoTypes: [] },
    { id: 'OUTILS_ANALYSE', label: '🛠️ Outils d\'analyse', color: '#0d9488',
      description: "Outils d'analyse des risques",
      autoTypes: [],
      sousDossiers: [
          { id: 'ITAMAMI', label: 'ITAMaMi' },
          { id: '5M', label: 'Methode des 5M' },
          { id: 'QQOQCP', label: 'QQOQCP' },
          { id: 'ISHIKAWA', label: 'Diagramme d\'Ishikawa' }
      ] },
    { id: 'CARTE_MENTALE', label: '🧠 Carte mentale', color: '#ea580c',
      description: "Cartes mentales",
      autoTypes: [] }
];

window.inferDossier = function(exercise) {
    if (exercise.dossier) return exercise.dossier;
    for (var i = 0; i < window.DOSSIERS_TRANSVERSAUX.length; i++) {
        var d = window.DOSSIERS_TRANSVERSAUX[i];
        if (d.autoTypes.indexOf(exercise.type) !== -1) return d.id;
    }
    return null;
};

window.inferSousDossier = function(exercise) {
    return exercise.sous_dossier || null;
};

console.log("✅ Modules PSE chargés :", Object.keys(window.MODULES_PSE).length, "niveaux");
console.log("✅ Classes configurées :", Object.keys(window.CLASSES_CONFIG).length);
console.log("✅ Groupes :", Object.keys(window.GROUPES_CLASSES).length);
console.log("✅ Dossiers transversaux :", window.DOSSIERS_TRANSVERSAUX.length);

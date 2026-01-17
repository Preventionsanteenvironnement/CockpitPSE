/* Fichier : data_eleves.js
   EMPLACEMENT : Site Prof (CoqPilot) - À côté de grille.html
   RÔLE : Traduit le CODE en NOM + PRÉNOM
   CONFIDENTIALITÉ : Ne JAMAIS mettre ce fichier sur le site élève.
*/

// Initialisation de la base de données
window.BDD_ELEVES = [];

// Dictionnaire de Décodage (Code -> Identité Réelle)
const ANNUAIRE_DECRYPT = {
    // --- VISITEURS ---
    "INV": { nom: "VISITEUR", prenom: "Anonyme", classe: "VISITEUR" },
    "PSE": { nom: "VISITEUR", prenom: "Anonyme", classe: "VISITEUR" },

    // --- B1AGO1 ---
    "KA47": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "LU83": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "MO12": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "QF59": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "RA26": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "TI74": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "NE08": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },
    "SA91": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO1" },

    // --- B1AGO2 ---
    "VO35": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "PY64": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "XK19": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "DF82": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "GE73": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "MU51": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "ZO28": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },
    "HI96": { nom: "A_REMPLIR", prenom: "", classe: "B1AGO2" },

    // --- 1CAP ---
    "BA14": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "CE72": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "DI39": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "FO85": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "GU61": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "JE27": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "KO93": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "LA58": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "ME04": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "NA46": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "PE11": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "QU75": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "RI32": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "SO98": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },
    "TU65": { nom: "A_REMPLIR", prenom: "", classe: "1CAP" },

    // --- 2CAP ---
    "VE21": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "WA87": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "XA53": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "YA19": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "ZO76": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "BU42": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "CU08": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "DU64": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "FU31": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "GU97": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "HU52": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "JU18": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "KU84": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "LU49": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },
    "MU15": { nom: "A_REMPLIR", prenom: "", classe: "2CAP" },

    // --- TCAP ---
    "NU71": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "OU37": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "PU03": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "RU69": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "SU25": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "TU91": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "VU57": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "WU13": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "XU79": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "YU45": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "ZU01": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "AV67": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "BV23": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "CV89": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },
    "DV55": { nom: "A_REMPLIR", prenom: "", classe: "TCAP" },

    // --- 2BACPRO ---
    "EV11": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "FV77": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "GV33": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "HV99": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "IV55": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "JV11": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "KV77": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "LV33": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "MV99": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "NV55": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "OV11": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "PV77": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "QV33": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "RV99": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },
    "SV55": { nom: "A_REMPLIR", prenom: "", classe: "2BACPRO" },

    // --- 1BACPRO ---
    "TV11": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "UV77": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "VV33": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "WV99": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "XV55": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "YV11": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "ZV77": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "AW33": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "BW99": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "CW55": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "DW11": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "EW77": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "FW33": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "GW99": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },
    "HW55": { nom: "A_REMPLIR", prenom: "", classe: "1BACPRO" },

    // --- TBACPRO ---
    "IW11": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "JW77": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "KW33": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "LW99": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "MW55": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "NW11": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "OW77": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "PW33": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "QW99": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "RW55": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "SW11": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "TW77": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "UW33": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "VW99": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },
    "WW55": { nom: "A_REMPLIR", prenom: "", classe: "TBACPRO" },

    // --- PROFESSEURS ---
    "PROFPSE": { nom: "PROF", prenom: "Principal", classe: "PROF" },
    "BRAHMSPSE": { nom: "PROF", prenom: "Brahms", classe: "PROF" }
};

// Remplissage automatique de la liste pour l'autocomplétion (ne pas toucher)
Object.keys(ANNUAIRE_DECRYPT).forEach(code => {
    window.BDD_ELEVES.push(ANNUAIRE_DECRYPT[code]);
});
/* 📁 ENRICHISSEMENT_COCKPIT.JS
   
   Script pour enrichir les données Firebase avec les infos élèves du cockpit
   À charger APRÈS data_eleves.js
   
   Fonctionnalité :
   - Prend un code élève ("NV33")
   - Retourne les infos complètes (nom, prénom, classe)
   - Affiche proprement dans l'interface cockpit
*/

// ========================================
// 1. FONCTION PRINCIPALE D'ENRICHISSEMENT
// ========================================

/**
 * Enrichir un objet devoir avec les données élève
 * @param {Object} devoir - Document Firebase brut
 * @returns {Object} Devoir enrichi avec nom/prénom
 */
window.enrichirDevoir = function(devoir) {
    // Récupérer le code élève
    const code = devoir.identifiant || devoir.eleve?.userCode || devoir.eleve?.code || "INCONNU";
    
    // Chercher l'élève dans la BDD
    const eleve = window.BDD_ELEVES ? window.BDD_ELEVES.find(e => e.userCode === code.toUpperCase()) : null;
    
    if (eleve) {
        // Enrichissement réussi
        return {
            ...devoir,
            identifiant: code,
            classe: eleve.classe,
            nomComplet: `${eleve.prenom} ${eleve.nom}`,
            eleve: {
                ...devoir.eleve,
                userCode: eleve.userCode,
                nom: eleve.nom,
                prenom: eleve.prenom,
                classe: eleve.classe,
                nomComplet: `${eleve.prenom} ${eleve.nom}`
            },
            _enrichi: true
        };
    } else {
        // Code inconnu - on garde les données brutes
        console.warn(`⚠️ Code élève inconnu : ${code}`);
        return {
            ...devoir,
            identifiant: code,
            classe: devoir.classe || "VISITEUR",
            nomComplet: code, // On affiche le code si pas trouvé
            eleve: {
                ...devoir.eleve,
                userCode: code,
                nom: "Code inconnu",
                prenom: code,
                nomComplet: code
            },
            _enrichi: false
        };
    }
};

// ========================================
// 2. FONCTION D'AFFICHAGE ÉLÈVE
// ========================================

/**
 * Générer le HTML pour afficher un élève
 * @param {Object} devoir - Devoir enrichi
 * @returns {string} HTML formaté
 */
window.afficherEleve = function(devoir) {
    const enrichi = window.enrichirDevoir(devoir);
    
    // Badge de classe avec couleur
    const badgeClasse = `<span class="badge-classe" style="
        background: ${getClasseColor(enrichi.classe)};
        color: white;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.85em;
        font-weight: bold;
    ">${enrichi.classe}</span>`;
    
    if (enrichi._enrichi) {
        // Élève trouvé - affichage complet
        return `
            <div class="eleve-info">
                <strong>${enrichi.eleve.prenom} ${enrichi.eleve.nom}</strong>
                <br>
                <small style="color: #666;">Code: ${enrichi.identifiant}</small>
                ${badgeClasse}
            </div>
        `;
    } else {
        // Code inconnu - affichage minimal
        return `
            <div class="eleve-info">
                <strong style="color: #999;">Code: ${enrichi.identifiant}</strong>
                ${badgeClasse}
                <br>
                <small style="color: #e74c3c;">⚠️ Élève non reconnu</small>
            </div>
        `;
    }
};

// ========================================
// 3. COULEURS PAR CLASSE
// ========================================

function getClasseColor(classe) {
    const colors = {
        // BAC PRO AGOrA
        "B1AGO1": "#3498db", "B1AGO2": "#2980b9",
        "B2GATL1": "#1abc9c", "B2GATL2": "#16a085",
        "BTAGO1": "#9b59b6", "BTAGO2": "#8e44ad",
        
        // BAC PRO MELEC
        "B1MELEC": "#e67e22", "B2MELEC": "#d35400", "BTMELEC": "#e74c3c",
        
        // CAP
        "C1CAN": "#f39c12", "C2CAN": "#f39c12",
        "C1HORT": "#27ae60", "C2HORT": "#27ae60",
        "C1JP": "#2ecc71", "C2JP": "#2ecc71",
        "C1PSR": "#e67e22", "C2PSR": "#e67e22",
        "C1VAN": "#95a5a6", "C2VAN": "#95a5a6",
        
        // Autres
        "VISITEUR": "#bdc3c7",
        "PROF": "#34495e"
    };
    
    return colors[classe] || "#7f8c8d";
}

// ========================================
// 4. FONCTION DE RECHERCHE
// ========================================

/**
 * Rechercher un élève par nom, prénom ou code
 * @param {string} query - Terme de recherche
 * @returns {Array} Liste des élèves correspondants
 */
window.rechercherEleve = function(query) {
    if (!query || query.length < 2) return [];
    
    const q = query.toLowerCase();
    
    return window.BDD_ELEVES.filter(e => 
        e.nom.toLowerCase().includes(q) ||
        e.prenom.toLowerCase().includes(q) ||
        e.userCode.toLowerCase().includes(q) ||
        e.classe.toLowerCase().includes(q)
    );
};

// ========================================
// 5. STATISTIQUES PAR CLASSE
// ========================================

/**
 * Obtenir les statistiques par classe
 * @param {Array} devoirs - Liste des devoirs Firebase
 * @returns {Object} Stats par classe
 */
window.getStatsClasses = function(devoirs) {
    const stats = {};
    
    devoirs.forEach(devoir => {
        const enrichi = window.enrichirDevoir(devoir);
        const classe = enrichi.classe || "VISITEUR";
        
        if (!stats[classe]) {
            stats[classe] = {
                total: 0,
                enrichis: 0,
                inconnus: 0,
                eleves: []
            };
        }
        
        stats[classe].total++;
        if (enrichi._enrichi) {
            stats[classe].enrichis++;
            stats[classe].eleves.push(enrichi.eleve.nomComplet);
        } else {
            stats[classe].inconnus++;
        }
    });
    
    return stats;
};

// ========================================
// 6. EXPORT CSV
// ========================================

/**
 * Exporter les résultats enrichis en CSV
 * @param {Array} devoirs - Liste des devoirs
 * @returns {string} Contenu CSV
 */
window.exporterCSV = function(devoirs) {
    const lignes = [
        "Code;Nom;Prénom;Classe;Exercice;Date;Note"
    ];
    
    devoirs.forEach(devoir => {
        const enrichi = window.enrichirDevoir(devoir);
        const ligne = [
            enrichi.identifiant,
            enrichi.eleve.nom || "",
            enrichi.eleve.prenom || "",
            enrichi.classe,
            devoir.titre || devoir.devoirId || "",
            devoir.createdAtISO ? new Date(devoir.createdAtISO).toLocaleString('fr-FR') : "",
            devoir.note || ""
        ].join(";");
        
        lignes.push(ligne);
    });
    
    return lignes.join("\n");
};

/**
 * Télécharger le CSV
 */
window.telechargerCSV = function(devoirs, filename = "devoirs.csv") {
    const csv = window.exporterCSV(devoirs);
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};

// ========================================
// 7. INITIALISATION
// ========================================

if (window.BDD_ELEVES) {
    console.log("✅ Script d'enrichissement chargé");
    console.log(`   📊 ${window.BDD_ELEVES.length} élèves disponibles`);
    console.log("   🔧 Fonctions disponibles :");
    console.log("      - enrichirDevoir(devoir)");
    console.log("      - afficherEleve(devoir)");
    console.log("      - rechercherEleve(query)");
    console.log("      - getStatsClasses(devoirs)");
    console.log("      - exporterCSV(devoirs)");
    console.log("      - telechargerCSV(devoirs)");
} else {
    console.error("❌ BDD_ELEVES non trouvée ! Chargez data_eleves.js d'abord.");
}

// ========================================
// 8. EXEMPLE D'UTILISATION
// ========================================

/*
DANS VOTRE COCKPIT.HTML, APRÈS AVOIR RÉCUPÉRÉ LES DEVOIRS DE FIREBASE :

// Récupération Firebase (exemple)
const devoirs = await getDocs(collection(db, "devoirs_rendus"));

// Enrichir chaque devoir
const devoirsEnrichis = devoirs.docs.map(doc => {
    const data = doc.data();
    return enrichirDevoir(data);
});

// Afficher dans un tableau
devoirsEnrichis.forEach(devoir => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${devoir.eleve.prenom} ${devoir.eleve.nom}</td>
        <td><span class="badge">${devoir.classe}</span></td>
        <td>${devoir.identifiant}</td>
        <td>${devoir.titre}</td>
        <td>${new Date(devoir.createdAtISO).toLocaleString('fr-FR')}</td>
    `;
    tableBody.appendChild(row);
});

// Ou utiliser la fonction d'affichage
devoirsEnrichis.forEach(devoir => {
    console.log(afficherEleve(devoir));
});
*/

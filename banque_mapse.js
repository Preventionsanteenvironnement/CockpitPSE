/* Banque d'exercices de mapse.fr : les élèves lisent des fichiers du dépôt PSE
   (banque/index.json et banque/exercices/<id>.json) ; Firebase reste l'espace de brouillon du cockpit.

   Publier depuis le cockpit = télécharger le fichier de l'exercice, prêt à être déposé dans
   banque/exercices/ par une PR (outils/banque_construire.py met ensuite la liste à jour).
   Aucun accès GitHub n'est enregistré dans le navigateur. */
(function () {
    "use strict";

    var URL_INDEX = "https://mapse.fr/banque/index.json";
    var CHAMPS_EXCLUS = ["sourcePrompt"]; // consignes de conception : jamais dans un fichier public

    function isoSansMs(date) {
        return date.toISOString().replace(/\.\d{3}Z$/, "Z");
    }

    // Timestamp Firestore, marqueur serverTimestamp() ou texte ISO -> texte ISO
    function enDate(valeur) {
        if (!valeur) return null;
        if (typeof valeur === "string") return valeur;
        if (typeof valeur.toDate === "function") return isoSansMs(valeur.toDate());
        if (typeof valeur.seconds === "number") return isoSansMs(new Date(valeur.seconds * 1000));
        return isoSansMs(new Date()); // serverTimestamp() pas encore résolu
    }

    // Fichier public d'un exercice : id en premier, sans les champs exclus, dates en texte
    function fichier(exo, id) {
        var f = { id: id };
        Object.keys(exo).forEach(function (cle) {
            if (cle === "id" || CHAMPS_EXCLUS.indexOf(cle) !== -1 || exo[cle] === undefined) return;
            f[cle] = (cle === "createdAt" || cle === "updatedAt") ? enDate(exo[cle]) : exo[cle];
        });
        if (!f.updatedAt) f.updatedAt = isoSansMs(new Date());
        if (!f.createdAt) f.createdAt = f.updatedAt;
        return f;
    }

    function texteFichier(f) {
        return JSON.stringify(f, null, 1) + "\n";
    }

    // Exercices en ligne sur mapse.fr (null si la liste est inaccessible)
    function chargerEnLigne() {
        return fetch(URL_INDEX, { cache: "no-cache" })
            .then(function (rep) { return rep.ok ? rep.json() : null; })
            .then(function (liste) {
                if (!Array.isArray(liste)) return null;
                var ids = new Set();
                liste.forEach(function (e) { if (e && e.id) ids.add(e.id); });
                return { ids: ids, liste: liste };
            })
            .catch(function () { return null; });
    }

    function telecharger(f) {
        var blob = new Blob([texteFichier(f)], { type: "application/json" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = f.id + ".json";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    }

    // Fichier de l'exercice avec l'état de publication voulu, téléchargé pour dépôt dans banque/exercices/
    function preparer(exo, id, publie) {
        var copie = {};
        Object.keys(exo).forEach(function (cle) { copie[cle] = exo[cle]; });
        copie.publie = publie;
        copie.updatedAt = isoSansMs(new Date());
        var f = fichier(copie, id);
        telecharger(f);
        return f;
    }

    window.BanqueMapse = { fichier: fichier, texteFichier: texteFichier, chargerEnLigne: chargerEnLigne,
        telecharger: telecharger, preparer: preparer };
})();

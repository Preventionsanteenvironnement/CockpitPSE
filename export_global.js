/*
 * export_global.js — Export JSON unifie de toutes les evaluations CockpitPSE
 *
 * Expose window.exportGlobalJSON() et injecte un bouton "📦 Tout exporter (JSON)"
 * dans le slot #annuaireHeaderSlot (a cote du bouton RGPD local).
 *
 * RGPD : aucun nom d'eleve dans le JSON exporte — codes uniquement.
 *
 * Sources lues :
 *   - Firestore : collectionGroup("evaluations"), collectionGroup("copies"),
 *                 collectionGroup("suivi")
 *   - localStorage : ccf1_e11_v2(+_classes,_settings),
 *                    ccf4v3_index + ccf4v3_s_*,
 *                    cockpit-pse-eval-session-v1, cockpit-pse-bac-session-v1,
 *                    pse_v5_stu, pse_v5_cls, pse_v5_defi, pse_v5_dates, pse_v5_cfg,
 *                    jf-mecheri-2122
 */
(function () {
    'use strict';

    var FIREBASE_CONFIG = {
        apiKey: "AIzaSyAWdCMvOiAJln3eT9LIAQD3RWJUD0lQcLI",
        authDomain: "devoirs-pse.firebaseapp.com",
        projectId: "devoirs-pse",
        storageBucket: "devoirs-pse.appspot.com",
        messagingSenderId: "614730413904",
        appId: "1:614730413904:web:a5dd478af5de30f6bede55"
    };

    // ─────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────
    function lsGet(key) {
        try {
            var v = localStorage.getItem(key);
            return v == null ? null : JSON.parse(v);
        } catch (_) {
            return null;
        }
    }

    // Un code eleve typique : 2 a 6 chars, lettres + chiffres, ex KA47, NM12
    var CODE_RE = /^[A-Z]{1,3}[0-9]{1,3}[A-Z0-9]{0,3}$/;
    function looksLikeCode(s) {
        if (typeof s !== 'string') return false;
        return CODE_RE.test(s.trim());
    }

    function toDateISO(v) {
        if (!v) return null;
        try {
            if (typeof v === 'object' && v.toDate) return v.toDate().toISOString();
            if (typeof v === 'object' && v.seconds) return new Date(v.seconds * 1000).toISOString();
            var d = new Date(v);
            return isNaN(d.getTime()) ? null : d.toISOString();
        } catch (_) { return null; }
    }

    function addEleve(map, code, classe) {
        if (!code) return;
        if (!map[code]) map[code] = { code: code, classe: classe || null };
        else if (!map[code].classe && classe) map[code].classe = classe;
    }

    function toastInfo(msg) {
        var t = document.createElement('div');
        t.textContent = msg;
        t.style.cssText = 'position:fixed;top:20px;right:20px;background:#0f172a;color:#fff;padding:14px 20px;border-radius:10px;z-index:99999;font-family:Inter,sans-serif;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.25);';
        document.body.appendChild(t);
        return {
            update: function (m) { t.textContent = m; },
            close: function () { setTimeout(function () { t.remove(); }, 1200); }
        };
    }

    // ─────────────────────────────────────────────────────────────
    // Firestore reader
    // ─────────────────────────────────────────────────────────────
    async function readFirestore(evaluations, eleves) {
        try {
            var appMod = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
            var fsMod = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");

            var app;
            try { app = appMod.initializeApp(FIREBASE_CONFIG, "cockpit-export-" + Date.now()); }
            catch (e) { app = appMod.initializeApp(FIREBASE_CONFIG); }
            var db = fsMod.getFirestore(app);

            var qEvals = fsMod.query(fsMod.collectionGroup(db, "evaluations"), fsMod.limit(10000));
            var snapEvals = await fsMod.getDocs(qEvals);
            snapEvals.forEach(function (docSnap) {
                var ev = docSnap.data() || {};
                var path = docSnap.ref.path; // resultats/{code}/evaluations/{id}
                var parts = path.split('/');
                var code = parts.length >= 2 ? parts[1] : (ev.eleveCode || ev.userCode || null);
                if (!code) return;
                var classe = ev.classe || (ev.eleve && ev.eleve.classe) || null;
                addEleve(eleves, code, classe);
                var devoirId = ev.devoirId || "unknown";
                var note = null;
                if (ev.nonNote) note = "NN";
                else if (ev.absent) note = "ABS";
                else if (ev.note_finale !== undefined && ev.note_finale !== null) note = ev.note_finale;
                evaluations.push({
                    id: devoirId + "_" + code + "_fs",
                    code: code,
                    classe: classe,
                    module: ev.module || "devoir",
                    devoirId: devoirId,
                    titre: ev.titre || ev.title || devoirId,
                    note: note,
                    baremeSur: ev.baremeSur || ev.noteSur || 20,
                    mode: ev.mode || "note",
                    date: toDateISO(ev.date || ev.timestamp || ev.createdAt) || null,
                    statut: ev.statut || null,
                    publie: ev.publie === true,
                    competences: ev.indicateurs || ev.competences || [],
                    appreciation: ev.appreciation || "",
                    source: "firestore:" + path
                });
            });

            // copies — complement (notes brutes si l'eval n'a pas ete generee)
            var qCopies = fsMod.query(fsMod.collectionGroup(db, "copies"), fsMod.limit(10000));
            var snapCopies = await fsMod.getDocs(qCopies);
            snapCopies.forEach(function (docSnap) {
                var d = docSnap.data() || {};
                var path = docSnap.ref.path;
                var parts = path.split('/');
                var code = parts.length >= 2 ? parts[1] : (d.userCode || (d.eleve && d.eleve.userCode));
                if (!code) return;
                var classe = (d.eleve && d.eleve.classe) || d.classe || null;
                addEleve(eleves, code, classe);
                var devoirId = d.devoirId || "unknown";
                // ne pousser une "copie" que si on n'a pas deja une eval pour ce couple
                var exists = evaluations.some(function (e) {
                    return e.code === code && e.devoirId === devoirId && e.source.indexOf("firestore:") === 0;
                });
                if (exists) return;
                var note = null;
                var cands = [d.note_finale, d.resultat_auto && d.resultat_auto.score, d.meta && d.meta.score, d.score, d.note];
                for (var i = 0; i < cands.length; i++) {
                    var c = cands[i];
                    if (c === 0) { note = 0; break; }
                    if (c === null || c === undefined) continue;
                    if (typeof c === "number" && !isNaN(c)) { note = c; break; }
                    if (typeof c === "string") {
                        var m = c.match(/(\d+(?:[.,]\d+)?)/);
                        if (m) { note = parseFloat(m[1].replace(",", ".")); break; }
                    }
                }
                evaluations.push({
                    id: devoirId + "_" + code + "_copy",
                    code: code,
                    classe: classe,
                    module: "devoir",
                    devoirId: devoirId,
                    titre: d.titre || devoirId,
                    note: note,
                    baremeSur: 20,
                    mode: "note",
                    date: toDateISO(d.timestamp || d.date || (d.meta && d.meta.date) || d.createdAt),
                    source: "firestore:" + path
                });
            });

            // suivi — comportement
            var suiviCount = 0;
            try {
                var qSuivi = fsMod.query(fsMod.collectionGroup(db, "suivi"), fsMod.limit(10000));
                var snapSuivi = await fsMod.getDocs(qSuivi);
                snapSuivi.forEach(function (docSnap) {
                    var s = docSnap.data() || {};
                    var path = docSnap.ref.path;
                    var parts = path.split('/');
                    var code = parts.length >= 2 ? parts[1] : (s.code || null);
                    if (!code) return;
                    addEleve(eleves, code, s.classe || null);
                    evaluations.push({
                        id: "suivi_" + code + "_" + (s.date || docSnap.id),
                        code: code,
                        classe: s.classe || null,
                        module: "suivi",
                        devoirId: s.type || "suivi",
                        titre: s.titre || s.type || "Suivi",
                        note: null,
                        mode: "suivi",
                        date: toDateISO(s.date || s.timestamp),
                        details: s,
                        source: "firestore:" + path
                    });
                    suiviCount++;
                });
            } catch (e) {
                console.warn("suivi non lu :", e.message);
            }

            return {
                ok: true,
                evaluationsCount: snapEvals.size,
                copiesCount: snapCopies.size,
                suiviCount: suiviCount
            };
        } catch (err) {
            console.warn("Firestore indisponible :", err);
            return { ok: false, error: err.message || String(err) };
        }
    }

    // ─────────────────────────────────────────────────────────────
    // localStorage readers
    // ─────────────────────────────────────────────────────────────
    function readCCF1(evaluations, eleves, sessionsCcf1) {
        var data = lsGet('ccf1_e11_v2');
        if (!data) return;
        var allData = (data && data.data) ? data.data : data;
        if (!allData || typeof allData !== 'object') return;
        Object.keys(allData).forEach(function (key) {
            // key = "classe::name_ou_code"
            var rec = allData[key];
            if (!rec || typeof rec !== 'object') return;
            var classe = rec.class || rec.classe || (key.indexOf('::') >= 0 ? key.split('::')[0] : null);
            var nameOrCode = rec.name || (key.indexOf('::') >= 0 ? key.split('::')[1] : key);
            // RGPD : ne garder que si c'est un code, sinon on ne peut rien faire
            if (!looksLikeCode(nameOrCode)) return;
            addEleve(eleves, nameOrCode, classe);
            var total = 0, has = false;
            if (rec.notes) {
                for (var p = 1; p <= 4; p++) {
                    if (rec.notes[p] !== null && rec.notes[p] !== undefined) { total += rec.notes[p]; has = true; }
                }
                total = Math.round(total * 2) / 2;
            }
            evaluations.push({
                id: "ccf1_e11_" + nameOrCode,
                code: nameOrCode,
                classe: classe,
                module: "CCF1-E11",
                devoirId: "CCF1_E11",
                titre: "CCF E11 - Presentation dossier",
                note: has ? total : null,
                baremeSur: 20,
                mode: "note",
                date: rec.date || null,
                statut: rec.status || null,
                phases: rec.notes ? {
                    1: { note: rec.notes[1], indicateurs: (rec.indicators && rec.indicators[1]) || [], observations: (rec.observations && rec.observations[1]) || '' },
                    2: { note: rec.notes[2], indicateurs: (rec.indicators && rec.indicators[2]) || [], observations: (rec.observations && rec.observations[2]) || '' },
                    3: { note: rec.notes[3], indicateurs: (rec.indicators && rec.indicators[3]) || [], observations: (rec.observations && rec.observations[3]) || '' },
                    4: { note: rec.notes[4], indicateurs: (rec.indicators && rec.indicators[4]) || [], observations: (rec.observations && rec.observations[4]) || '' }
                } : null,
                appreciation: rec.appreciation || "",
                source: "localStorage:ccf1_e11_v2"
            });
        });
        // metadonnees classes
        var classes = lsGet('ccf1_e11_v2_classes');
        if (classes) {
            Object.keys(classes).forEach(function (cls) {
                sessionsCcf1.push({ classe: cls, eleves: (classes[cls] || []).filter(looksLikeCode) });
            });
        }
    }

    function readCCF4(evaluations, eleves, sessionsCcf4) {
        var idx = lsGet('ccf4v3_index');
        if (!idx || !Array.isArray(idx)) return;
        idx.forEach(function (sessionRef) {
            var sid = sessionRef.id || sessionRef.sessionId || sessionRef;
            if (!sid) return;
            var s = lsGet('ccf4v3_s_' + sid);
            if (!s) return;
            sessionsCcf4.push({
                id: sid,
                theme: s.theme || s.titre || null,
                date: s.date || null,
                classe: s.classe || null
            });
            var students = s.students || s.eleves || s.notes || {};
            // students peut etre un object { code: {...} } ou un tableau
            var entries = Array.isArray(students)
                ? students.map(function (x) { return [x.code || x.id, x]; })
                : Object.keys(students).map(function (k) { return [k, students[k]]; });
            entries.forEach(function (pair) {
                var code = pair[0];
                var st = pair[1] || {};
                if (!looksLikeCode(code)) return;
                addEleve(eleves, code, s.classe || st.classe || null);
                evaluations.push({
                    id: "ccf4_" + sid + "_" + code,
                    code: code,
                    classe: s.classe || st.classe || null,
                    module: "CCF4-Bio",
                    devoirId: "CCF4_" + sid,
                    titre: "CCF Biologie - " + (s.theme || s.titre || sid),
                    note: st.note !== undefined ? st.note : (st.total !== undefined ? st.total : null),
                    baremeSur: 20,
                    mode: "note",
                    date: s.date || null,
                    appreciation: st.appreciation || st.commentaire || "",
                    details: st,
                    source: "localStorage:ccf4v3_s_" + sid
                });
            });
        });
    }

    function readCompetences(evaluations, eleves) {
        ['cockpit-pse-eval-session-v1', 'cockpit-pse-bac-session-v1'].forEach(function (k) {
            var s = lsGet(k);
            if (!s) return;
            var bac = k.indexOf('bac') >= 0;
            var module = bac ? "competences-bac" : "competences-cap";
            var students = s.students || s.eleves || {};
            Object.keys(students).forEach(function (code) {
                if (!looksLikeCode(code)) return;
                var rec = students[code] || {};
                addEleve(eleves, code, s.classe || rec.classe || null);
                evaluations.push({
                    id: module + "_" + code + "_" + (s.id || s.date || "x"),
                    code: code,
                    classe: s.classe || rec.classe || null,
                    module: module,
                    devoirId: s.id || module,
                    titre: s.titre || s.title || module,
                    note: rec.note !== undefined ? rec.note : null,
                    baremeSur: 20,
                    mode: "competences",
                    date: s.date || null,
                    competences: rec.competences || rec.indicateurs || rec.niveaux || [],
                    appreciation: rec.appreciation || "",
                    source: "localStorage:" + k
                });
            });
        });
    }

    function readParticipation(evaluations, eleves) {
        var stu = lsGet('pse_v5_stu');
        if (!stu || !Array.isArray(stu)) return;
        stu.forEach(function (st) {
            var code = st.code || st.id;
            if (!looksLikeCode(code)) return;
            addEleve(eleves, code, st.classe || null);
            evaluations.push({
                id: "participation_" + code,
                code: code,
                classe: st.classe || null,
                module: "participation",
                devoirId: "participation",
                titre: "Participation orale (cumul)",
                note: null,
                mode: "participation",
                participations: st.participations || st.total || st.count || 0,
                sessions: st.sessions || null,
                defi: !!st.defi,
                source: "localStorage:pse_v5_stu"
            });
        });
    }

    function readJournalFormation(evaluations) {
        var d = lsGet('jf-mecheri-2122');
        if (!d) return;
        // On exporte les meta du journal mais sans noms (verif via codes uniquement).
        // Format heterogene — on stocke en bloc anonymise.
        // Pas d'extraction par eleve : juste reference de presence.
        evaluations.push({
            id: "journal_formation_meta",
            code: null,
            module: "journal-formation",
            devoirId: "journal_formation",
            titre: "Journal de formation (donnees brutes ignorees — non liees a un code eleve)",
            mode: "info",
            source: "localStorage:jf-mecheri-2122",
            note: null
        });
    }

    // ─────────────────────────────────────────────────────────────
    // Orchestrateur
    // ─────────────────────────────────────────────────────────────
    window.exportGlobalJSON = async function () {
        var toast = toastInfo("📦 Collecte des evaluations Firebase + locales...");
        var evaluations = [];
        var eleves = {};
        var sessionsCcf1 = [];
        var sessionsCcf4 = [];
        var sourcesUsed = [];

        try {
            // LocalStorage d'abord (rapide, offline)
            readCCF1(evaluations, eleves, sessionsCcf1); sourcesUsed.push('ccf1_e11_v2');
            readCCF4(evaluations, eleves, sessionsCcf4); sourcesUsed.push('ccf4v3_*');
            readCompetences(evaluations, eleves); sourcesUsed.push('cockpit-pse-eval/bac');
            readParticipation(evaluations, eleves); sourcesUsed.push('pse_v5_*');
            readJournalFormation(evaluations); sourcesUsed.push('jf-mecheri-2122');

            toast.update("📦 Lecture Firestore...");
            var fsResult = await readFirestore(evaluations, eleves);
            if (fsResult.ok) sourcesUsed.push('firestore:evaluations/copies/suivi');

            var elevesArr = Object.keys(eleves).map(function (c) { return eleves[c]; });
            elevesArr.sort(function (a, b) { return a.code.localeCompare(b.code); });

            var nowISO = new Date().toISOString();
            var yyyy = new Date().getFullYear();
            var exportYear = (new Date().getMonth() >= 7) ? (yyyy + "-" + (yyyy + 1)) : ((yyyy - 1) + "-" + yyyy);

            var out = {
                meta: {
                    version: "1.0",
                    exportDate: nowISO,
                    exportYear: exportYear,
                    source: "CockpitPSE",
                    totalEvaluations: evaluations.length,
                    totalEleves: elevesArr.length,
                    sourcesUsed: sourcesUsed,
                    firestore: fsResult.ok ? {
                        evaluations: fsResult.evaluationsCount,
                        copies: fsResult.copiesCount,
                        suivi: fsResult.suiviCount
                    } : "indisponible",
                    rgpd: "Aucun nom d'eleve — codes uniquement."
                },
                eleves: elevesArr,
                evaluations: evaluations,
                sessions_ccf1: sessionsCcf1,
                sessions_ccf4: sessionsCcf4,
                competences_referentiel: []
            };

            var json = JSON.stringify(out, null, 2);
            var blob = new Blob([json], { type: 'application/json' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            var stamp = nowISO.slice(0, 16).replace(/[:T]/g, '-');
            a.download = 'cockpit_export_evaluations_' + stamp + '.json';
            document.body.appendChild(a);
            a.click();
            a.remove();

            console.log("📦 Export terminé : " + evaluations.length + " evaluations, " +
                elevesArr.length + " eleves, " + sourcesUsed.length + " sources",
                { firestore: fsResult });

            toast.update("✅ Export termine : " + evaluations.length + " evaluations, " + elevesArr.length + " eleves");
            toast.close();
        } catch (err) {
            console.error("Erreur export :", err);
            toast.update("❌ Erreur : " + (err.message || err));
            setTimeout(function () { toast.close(); }, 4000);
        }
    };

    // ─────────────────────────────────────────────────────────────
    // Bouton UI
    // ─────────────────────────────────────────────────────────────
    function injectButton() {
        var slot = document.getElementById('annuaireHeaderSlot');
        if (!slot) {
            // Re-essayer si le DOM n'est pas pret
            setTimeout(injectButton, 500);
            return;
        }
        if (document.getElementById('btnExportGlobal')) return;

        var wrap = document.createElement('div');
        wrap.style.cssText = 'display:inline-block;margin-left:8px;';
        wrap.innerHTML =
            '<style>' +
            '#btnExportGlobal{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1px solid #cbd5e1;background:#f8fafc;color:#475569;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;font-family:inherit;}' +
            '#btnExportGlobal:hover{background:#e0e7ff;border-color:#6366f1;color:#3730a3;}' +
            '</style>' +
            '<button id="btnExportGlobal" title="Exporter en un seul JSON toutes les evaluations / notes / competences (RGPD : codes uniquement)">' +
            '📦 Tout exporter (JSON)' +
            '</button>';
        slot.appendChild(wrap);
        document.getElementById('btnExportGlobal').addEventListener('click', function () {
            window.exportGlobalJSON();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectButton);
    } else {
        injectButton();
    }
})();

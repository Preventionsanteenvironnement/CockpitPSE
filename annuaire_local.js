/**
 * ═══════════════════════════════════════════════════════════════
 * ANNUAIRE LOCAL — Module RGPD-safe pour la grille PSE
 * ═══════════════════════════════════════════════════════════════
 * 
 * PRINCIPE : Les noms/prénoms des élèves restent UNIQUEMENT
 * sur l'ordinateur du prof (localStorage). Rien ne transite
 * vers GitHub, Firebase ou un serveur distant.
 * 
 * USAGE : Inclure ce fichier dans grille.html et index.html
 *   <script src="annuaire_local.js"></script>
 * 
 * API :
 *   AnnuaireLocal.getNom(code)        → "Jean DUPONT" ou null
 *   AnnuaireLocal.getAll()            → { EX01: "Jean DUPONT", ... }
 *   AnnuaireLocal.isLoaded()          → true/false
 *   AnnuaireLocal.count()             → nombre d'élèves chargés
 *   AnnuaireLocal.clear()             → supprime l'annuaire du navigateur
 *   AnnuaireLocal.importCSV(file)     → Promise (charge un fichier CSV)
 *   AnnuaireLocal.exportCSV()         → déclenche le téléchargement
 *   AnnuaireLocal.renderButton(container) → injecte le bouton UI
 *   AnnuaireLocal.resolveDisplay(code)    → "Prénom NOM (CODE)" ou "CODE"
 * ═══════════════════════════════════════════════════════════════
 */

const AnnuaireLocal = (function () {

    const STORAGE_KEY = "pse_annuaire_local";
    const STORAGE_DATE_KEY = "pse_annuaire_date";

    // ─── Lecture / Écriture localStorage ───────────────────────

    function _read() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.warn("⚠️ Annuaire local corrompu, reset.", e);
            localStorage.removeItem(STORAGE_KEY);
            return {};
        }
    }

    function _write(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
    }

    // ─── API publique ──────────────────────────────────────────

    function getNom(code) {
        if (!code) return null;
        const data = _read();
        return data[code.trim().toUpperCase()] || data[code.trim()] || null;
    }

    function getAll() {
        return _read();
    }

    function isLoaded() {
        return Object.keys(_read()).length > 0;
    }

    function count() {
        return Object.keys(_read()).length;
    }

    function getDate() {
        return localStorage.getItem(STORAGE_DATE_KEY) || null;
    }

    function clear() {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_DATE_KEY);
    }

    /**
     * resolveDisplay(code) :
     * Si l'annuaire est chargé → "Prénom NOM (KA47)"
     * Sinon                    → "KA47"
     */
    function resolveDisplay(code) {
        const nom = getNom(code);
        if (nom) return `${nom} (${code})`;
        return code || "—";
    }

    // ─── Import CSV ────────────────────────────────────────────

    function importCSV(file) {
        return new Promise((resolve, reject) => {
            if (!file) return reject(new Error("Aucun fichier sélectionné"));

            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const text = e.target.result;
                    const lines = text.split(/\r?\n/).filter(l => l.trim());
                    const data = _read(); // on fusionne avec l'existant
                    let added = 0, updated = 0, skipped = 0;

                    for (const line of lines) {
                        // Gestion : code,nom OU code;nom OU code\tnom
                        const parts = line.split(/[,;\t]/).map(s => s.trim());
                        if (parts.length < 2) { skipped++; continue; }

                        const code = parts[0].toUpperCase();
                        const nom = parts.slice(1).join(" ").trim(); // au cas où le nom contient des virgules

                        if (!code || !nom) { skipped++; continue; }
                        // Ignorer les en-têtes probables
                        if (code === "CODE" || code === "ID") { skipped++; continue; }

                        if (data[code]) {
                            if (data[code] !== nom) { data[code] = nom; updated++; }
                            else { skipped++; }
                        } else {
                            data[code] = nom;
                            added++;
                        }
                    }

                    _write(data);

                    resolve({
                        total: Object.keys(data).length,
                        added,
                        updated,
                        skipped,
                        message: `✅ ${added} ajouté(s), ${updated} mis à jour, ${skipped} ignoré(s). Total : ${Object.keys(data).length} élèves.`
                    });
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error("Erreur de lecture du fichier"));
            reader.readAsText(file, "UTF-8");
        });
    }

    // ─── Export CSV ────────────────────────────────────────────

    function exportCSV() {
        const data = _read();
        const entries = Object.entries(data).sort((a, b) => a[1].localeCompare(b[1], 'fr'));

        if (entries.length === 0) {
            alert("Aucun élève dans l'annuaire local.");
            return;
        }

        const csv = entries.map(([code, nom]) => `${code},${nom}`).join("\n");
        const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" }); // BOM UTF-8
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `annuaire_pse_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // ─── UI : Bouton intégrable ────────────────────────────────

    function renderButton(container) {
        if (!container) return;

        const wrapper = document.createElement("div");
        wrapper.id = "annuaire-local-ui";
        wrapper.innerHTML = `
            <style>
                #annuaire-local-ui {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .annuaire-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 7px 14px;
                    border-radius: 8px;
                    border: 1px solid #cbd5e1;
                    background: #f8fafc;
                    color: #475569;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: inherit;
                }
                .annuaire-btn:hover { background: #e2e8f0; border-color: #94a3b8; }
                .annuaire-btn.loaded { background: #dcfce7; border-color: #86efac; color: #166534; }
                .annuaire-btn .annuaire-count {
                    background: #3b82f6;
                    color: white;
                    font-size: 11px;
                    padding: 1px 6px;
                    border-radius: 10px;
                    font-weight: 700;
                }
                .annuaire-btn.loaded .annuaire-count { background: #16a34a; }

                .annuaire-dropdown {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    margin-top: 4px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
                    padding: 8px;
                    z-index: 9999;
                    min-width: 260px;
                }
                .annuaire-dropdown.show { display: block; }

                .annuaire-dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 13px;
                    color: #334155;
                    transition: background 0.15s;
                    border: none;
                    background: none;
                    width: 100%;
                    text-align: left;
                    font-family: inherit;
                }
                .annuaire-dropdown-item:hover { background: #f1f5f9; }
                .annuaire-dropdown-item.danger { color: #dc2626; }
                .annuaire-dropdown-item.danger:hover { background: #fef2f2; }

                .annuaire-dropdown-sep {
                    height: 1px;
                    background: #e2e8f0;
                    margin: 4px 8px;
                }

                .annuaire-dropdown-info {
                    padding: 6px 12px;
                    font-size: 11px;
                    color: #94a3b8;
                    text-align: center;
                }

                #annuaire-file-input { display: none; }
            </style>

            <button class="annuaire-btn" id="annuaireMainBtn" title="Annuaire RGPD local (noms d'eleves stockes uniquement sur cet ordinateur)">
                🔒 RGPD local
                <span class="annuaire-count" id="annuaireCount">0</span>
            </button>

            <div class="annuaire-dropdown" id="annuaireDropdown">
                <button class="annuaire-dropdown-item" id="annuaireBtnImport">
                    📂 Importer un fichier CSV
                </button>
                <button class="annuaire-dropdown-item" id="annuaireBtnExport">
                    💾 Exporter l'annuaire (CSV)
                </button>
                <div class="annuaire-dropdown-sep"></div>
                <button class="annuaire-dropdown-item" id="annuaireBtnToggle">
                    👁️ Afficher les noms
                </button>
                <div class="annuaire-dropdown-sep"></div>
                <button class="annuaire-dropdown-item danger" id="annuaireBtnClear">
                    🗑️ Supprimer l'annuaire
                </button>
                <div class="annuaire-dropdown-info" id="annuaireInfo">
                    🔒 Données stockées uniquement sur cet ordinateur
                </div>
            </div>

            <input type="file" id="annuaire-file-input" accept=".csv,.txt">
        `;

        container.appendChild(wrapper);

        // ── Événements ──

        const mainBtn = document.getElementById("annuaireMainBtn");
        const dropdown = document.getElementById("annuaireDropdown");
        const countBadge = document.getElementById("annuaireCount");
        const infoEl = document.getElementById("annuaireInfo");
        const fileInput = document.getElementById("annuaire-file-input");
        let namesVisible = false;

        function updateUI() {
            const n = count();
            countBadge.textContent = n;
            mainBtn.classList.toggle("loaded", n > 0);

            const d = getDate();
            if (n > 0 && d) {
                const dateStr = new Date(d).toLocaleDateString("fr-FR");
                infoEl.textContent = `🔒 ${n} élèves · Importé le ${dateStr}`;
            } else {
                infoEl.textContent = "🔒 Données stockées uniquement sur cet ordinateur";
            }

            // Mettre à jour le label du toggle
            const toggleBtn = document.getElementById("annuaireBtnToggle");
            toggleBtn.textContent = namesVisible ? "🙈 Masquer les noms" : "👁️ Afficher les noms";
        }

        // Ouvrir/fermer dropdown
        mainBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("show");
        });

        document.addEventListener("click", () => dropdown.classList.remove("show"));
        dropdown.addEventListener("click", (e) => e.stopPropagation());

        // Import
        document.getElementById("annuaireBtnImport").addEventListener("click", () => {
            fileInput.click();
        });

        fileInput.addEventListener("change", async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const result = await importCSV(file);
                alert(result.message);
                updateUI();
                // Déclencher un événement custom pour que la grille se mette à jour
                document.dispatchEvent(new CustomEvent("annuaire-updated", { detail: result }));
            } catch (err) {
                alert("❌ Erreur d'import : " + err.message);
            }
            fileInput.value = ""; // reset
        });

        // Export
        document.getElementById("annuaireBtnExport").addEventListener("click", () => {
            exportCSV();
            dropdown.classList.remove("show");
        });

        // Toggle noms
        document.getElementById("annuaireBtnToggle").addEventListener("click", () => {
            namesVisible = !namesVisible;
            document.dispatchEvent(new CustomEvent("annuaire-toggle", { detail: { visible: namesVisible } }));
            updateUI();
            dropdown.classList.remove("show");
        });

        // Supprimer
        document.getElementById("annuaireBtnClear").addEventListener("click", () => {
            if (confirm("⚠️ Supprimer l'annuaire local ?\n\nLes noms seront effacés de ce navigateur.\n(Votre fichier CSV original n'est pas affecté)")) {
                clear();
                namesVisible = false;
                updateUI();
                document.dispatchEvent(new CustomEvent("annuaire-updated", { detail: { total: 0 } }));
                document.dispatchEvent(new CustomEvent("annuaire-toggle", { detail: { visible: false } }));
            }
            dropdown.classList.remove("show");
        });

        updateUI();
    }

    // ─── API publique ──────────────────────────────────────────

    return {
        getNom,
        getAll,
        isLoaded,
        count,
        getDate,
        clear,
        importCSV,
        exportCSV,
        resolveDisplay,
        renderButton
    };

})();

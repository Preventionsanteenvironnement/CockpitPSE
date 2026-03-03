/**
 * json_import_utils.js — Utilitaires partagés pour l'import JSON
 * Nettoyage, diagnostics d'erreurs et helpers UI pour tous les éditeurs CockpitPSE.
 *
 * Usage : <script src="json_import_utils.js"></script> AVANT le <script type="module">
 * API :   window.JsonImportUtils.cleanJsonFull(raw, options)
 */
var JsonImportUtils = (function () {
    'use strict';

    // ========== CONSTANTES REGEX ==========

    var DOUBLE_QUOTES_RE = /[\u201C\u201D\u201E\u201F\u2033\u2036\u00AB\u00BB\uFF02]/g;
    var SINGLE_QUOTES_RE = /[\u2018\u2019\u201A\u201B\u2032\u2035\uFF07]/g;
    var ZW_RE = /[\u200B\u200C\u200D\u200E\u200F\u2028\u2029\u202A-\u202E\u2060-\u2064\u2066-\u2069\u00AD]/g;
    var TRAILING_COMMA_RE = /,\s*([\]}])/g;

    // ========== TIER A — PRIMITIVES DE NETTOYAGE ==========

    function countMatches(raw, regex) {
        if (!raw) return 0;
        var m = String(raw).match(regex);
        return m ? m.length : 0;
    }

    function normalizeJsonQuotes(raw) {
        if (!raw) return raw;
        var out = '';
        var inString = false;
        var stringDelim = null;
        var escaped = false;
        var i = 0;

        function isDoubleQuoteLike(ch) {
            return ch === '"' || /[\u201C\u201D\u201E\u201F\u2033\u2036\u00AB\u00BB\uFF02]/.test(ch);
        }
        function isSingleQuoteLike(ch) {
            return /[\u2018\u2019\u201A\u201B\u2032\u2035\uFF07]/.test(ch);
        }
        function nextSignificantChar(str, start) {
            for (var k = start; k < str.length; k++) {
                var cc = str.charAt(k);
                if (!/\s/.test(cc)) return cc;
            }
            return '';
        }

        while (i < raw.length) {
            var ch = raw.charAt(i);

            if (!inString) {
                if (isDoubleQuoteLike(ch)) {
                    inString = true;
                    stringDelim = (ch === '"') ? '"' : 'curly';
                    out += '"';
                    i++;
                    continue;
                }
                if (isSingleQuoteLike(ch)) {
                    out += "'";
                    i++;
                    continue;
                }
                out += ch;
                i++;
                continue;
            }

            // inString === true
            if (escaped) {
                out += ch;
                escaped = false;
                i++;
                continue;
            }
            if (ch === '\\') {
                out += ch;
                escaped = true;
                i++;
                continue;
            }

            if (isDoubleQuoteLike(ch)) {
                var next = nextSignificantChar(raw, i + 1);
                var canClose = (next === ':' || next === ',' || next === '}' || next === ']' || next === '');

                if ((stringDelim === '"' && ch === '"') || (stringDelim === 'curly' && ch !== '"')) {
                    if (canClose) {
                        out += '"';
                        inString = false;
                        stringDelim = null;
                    } else {
                        out += '\\"';
                    }
                    i++;
                    continue;
                }

                out += '\\"';
                i++;
                continue;
            }

            if (isSingleQuoteLike(ch)) {
                out += "'";
                i++;
                continue;
            }

            out += ch;
            i++;
        }

        return out;
    }

    function extractBalancedJsonAt(raw, start) {
        if (!raw || start < 0 || start >= raw.length) return null;
        var stack = [];
        var inString = false;
        var escaped = false;

        for (var j = start; j < raw.length; j++) {
            var ch = raw.charAt(j);
            if (inString) {
                if (escaped) escaped = false;
                else if (ch === '\\') escaped = true;
                else if (ch === '"') inString = false;
                continue;
            }
            if (ch === '"') { inString = true; continue; }
            if (ch === '{' || ch === '[') {
                stack.push(ch);
                continue;
            }
            if (ch === '}' || ch === ']') {
                if (stack.length === 0) return null;
                var last = stack.pop();
                if ((last === '{' && ch !== '}') || (last === '[' && ch !== ']')) return null;
                if (stack.length === 0) return raw.substring(start, j + 1);
            }
        }
        return null;
    }

    function extractBalancedJson(raw) {
        if (!raw) return null;
        for (var i = 0; i < raw.length; i++) {
            var c = raw.charAt(i);
            if (c !== '{' && c !== '[') continue;
            var candidate = extractBalancedJsonAt(raw, i);
            if (candidate) return candidate;
        }
        return null;
    }

    function extractParsableJson(raw) {
        if (!raw) return null;
        var parsed = [];
        for (var i = 0; i < raw.length; i++) {
            var c = raw.charAt(i);
            if (c !== '{' && c !== '[') continue;
            var candidate = extractBalancedJsonAt(raw, i);
            if (!candidate) continue;
            try {
                JSON.parse(candidate);
                parsed.push({ json: candidate, start: i, len: candidate.length, isArray: c === '[' });
            } catch (e) {}
        }
        if (parsed.length === 0) return null;
        parsed.sort(function (a, b) {
            if (a.len !== b.len) return b.len - a.len;
            return a.start - b.start;
        });
        return parsed[0].json;
    }

    function extractImportJsonCandidate(raw) {
        var out = String(raw || '');
        var codeBlockMatch = out.match(/```(?:json|javascript|JSON|js)?\s*\n?([\s\S]*?)```/);
        if (codeBlockMatch) out = codeBlockMatch[1] || '';

        if (out.charAt(0) !== '{' && out.charAt(0) !== '[') {
            var firstBrace = out.indexOf('{');
            var firstBracket = out.indexOf('[');
            var start = firstBrace >= 0 ? firstBrace : firstBracket;
            if (start >= 0) {
                var lastBrace = out.lastIndexOf('}');
                var lastBracket = out.lastIndexOf(']');
                var end = out.charAt(start) === '{' ? lastBrace : lastBracket;
                if (end > start) out = out.substring(start, end + 1);
            }
        }
        return out.trim();
    }

    // ========== TIER B — PIPELINES DE NETTOYAGE ==========

    function defaultScoreBlock(parsed, blockText) {
        var score = blockText.length;
        try {
            if (parsed && typeof parsed === 'object') {
                if (Array.isArray(parsed.questions)) score += 50000 + parsed.questions.length * 100;
                if (Array.isArray(parsed)) score += 10000 + parsed.length * 100;
                if (parsed.type) score += 2000;
                if (parsed.titre || parsed.title) score += 1000;
            }
        } catch (e) {}
        return score;
    }

    /**
     * Pipeline complet de nettoyage JSON.
     * @param {string} raw - JSON brut (peut contenir BOM, guillemets typographiques, code blocks, etc.)
     * @param {object} [options]
     * @param {function} [options.scoreBlock] - (parsedValue, blockText) => number — scoring personnalise
     * @returns {{ cleaned: string, stats: object }}
     */
    function cleanJsonFull(raw, options) {
        var opts = options || {};
        var scorer = opts.scoreBlock || defaultScoreBlock;

        var stats = {
            typoDoubleQuotes: countMatches(raw, DOUBLE_QUOTES_RE),
            typoSingleQuotes: countMatches(raw, SINGLE_QUOTES_RE),
            nbsp: countMatches(raw, /\u00A0/g),
            zeroWidth: countMatches(raw, ZW_RE),
            trailingCommas: 0,
            codeBlocksFound: 0,
            extractionMethod: 'none'
        };

        // 1. Supprimer BOM
        raw = raw.replace(/\uFEFF/g, '');
        // 2. Supprimer caracteres invisibles / zero-width
        raw = raw.replace(ZW_RE, '');
        // 3. Remplacer NBSP par espace normal
        raw = raw.replace(/\u00A0/g, ' ');
        // 4. Normalisation des guillemets typographiques
        raw = normalizeJsonQuotes(raw);
        // 5. Supprimer artefacts de citations IA
        raw = raw.replace(/\[cite_start\]/gi, '');
        raw = raw.replace(/\[cite(?:\s*:\s*[^\]]*)?\]/gi, '');
        // 6. Extraire le JSON des blocs de code Markdown
        var codeBlocks = [];
        var codeBlockRegex = /```(?:json|javascript|JSON|js)?\s*\n?([\s\S]*?)```/g;
        var cbMatch;
        while ((cbMatch = codeBlockRegex.exec(raw)) !== null) {
            var block = (cbMatch[1] || '').trim();
            if (block) codeBlocks.push(block);
        }
        stats.codeBlocksFound = codeBlocks.length;

        if (codeBlocks.length === 1) {
            raw = codeBlocks[0];
            stats.extractionMethod = 'codeblock_single';
        } else if (codeBlocks.length > 1) {
            var bestBlock = null;
            var bestScore = -1;
            codeBlocks.forEach(function (block) {
                var score = block.length;
                try {
                    var parsed = JSON.parse(block);
                    score += 100000;
                    score += scorer(parsed, block);
                } catch (e) {
                    // keep base length score
                }
                if (score > bestScore) {
                    bestScore = score;
                    bestBlock = block;
                }
            });
            raw = bestBlock || codeBlocks[codeBlocks.length - 1];
            stats.extractionMethod = 'codeblock_scored';
        }

        // 7. Extraire un JSON parsable si texte autour
        if (stats.extractionMethod === 'none') {
            var parsable = extractParsableJson(raw);
            if (parsable) {
                raw = parsable;
                stats.extractionMethod = 'parsable';
            } else {
                var balanced = extractBalancedJson(raw);
                if (balanced) {
                    raw = balanced;
                    stats.extractionMethod = 'balanced';
                }
            }
        }

        // 8. Supprimer les commentaires // en debut de ligne
        raw = raw.replace(/^\s*\/\/.*$/gm, '');
        // 9. Supprimer les trailing commas
        raw = raw.replace(/,\s*([\]}])/g, function (_match, closer) {
            stats.trailingCommas += 1;
            return closer;
        });
        // 10. Remplacer Python booleans/None
        raw = raw.replace(/\bTrue\b/g, 'true');
        raw = raw.replace(/\bFalse\b/g, 'false');
        raw = raw.replace(/\bNone\b/g, 'null');

        return { cleaned: raw.trim(), stats: stats };
    }

    /**
     * Nettoyage leger (sans extraction de blocs).
     */
    function cleanJsonLight(raw) {
        var stats = {
            typoDoubleQuotes: countMatches(raw, DOUBLE_QUOTES_RE),
            typoSingleQuotes: countMatches(raw, SINGLE_QUOTES_RE),
            nbsp: countMatches(raw, /\u00A0/g),
            zeroWidth: countMatches(raw, ZW_RE),
            trailingCommas: 0,
            codeBlocksFound: 0,
            extractionMethod: 'none'
        };

        raw = raw.replace(/\uFEFF/g, '');
        raw = raw.replace(ZW_RE, '');
        raw = raw.replace(/\u00A0/g, ' ');
        raw = normalizeJsonQuotes(raw);
        raw = raw.replace(/\[cite_start\]/gi, '');
        raw = raw.replace(/\[cite(?:\s*:\s*[^\]]*)?\]/gi, '');
        raw = raw.replace(/^\s*\/\/.*$/gm, '');
        raw = raw.replace(/,\s*([\]}])/g, function (_match, closer) {
            stats.trailingCommas += 1;
            return closer;
        });
        raw = raw.replace(/\bTrue\b/g, 'true');
        raw = raw.replace(/\bFalse\b/g, 'false');
        raw = raw.replace(/\bNone\b/g, 'null');

        return { cleaned: raw.trim(), stats: stats };
    }

    // ========== TIER C — DIAGNOSTICS D'ERREURS ==========

    function lineColumnFromIndex(raw, index) {
        var safeIndex = Math.max(0, Math.min(index, raw.length));
        var line = 1, column = 1;
        for (var i = 0; i < safeIndex; i++) {
            if (raw.charAt(i) === '\n') { line += 1; column = 1; }
            else column += 1;
        }
        return { line: line, column: column };
    }

    function indexFromLineColumn(raw, line, column) {
        var currentLine = 1, currentColumn = 1;
        for (var i = 0; i < raw.length; i++) {
            if (currentLine === line && currentColumn === column) return i;
            if (raw.charAt(i) === '\n') { currentLine += 1; currentColumn = 1; }
            else currentColumn += 1;
        }
        return Math.max(0, raw.length - 1);
    }

    function parseErrorLocation(message, raw) {
        var msg = String(message || '');
        var index = null, line = null, column = null;

        var m = msg.match(/position\s+(\d+)/i);
        if (m) index = Number(m[1]);

        m = msg.match(/line\s+(\d+)\s+column\s+(\d+)/i);
        if (m) {
            line = Number(m[1]);
            column = Number(m[2]);
            if (index === null && !isNaN(line) && !isNaN(column)) {
                index = indexFromLineColumn(raw, line, column);
            }
        }

        if (index === null || isNaN(index)) return null;
        var lc = lineColumnFromIndex(raw, index);
        return {
            index: index,
            line: (!isNaN(line) && line !== null) ? line : lc.line,
            column: (!isNaN(column) && column !== null) ? column : lc.column
        };
    }

    function parseErrorContext(raw, index) {
        var safeIndex = Math.max(0, Math.min(index, raw.length));
        var start = Math.max(0, safeIndex - 30);
        var end = Math.min(raw.length, safeIndex + 30);
        var snippet = raw.slice(start, end).replace(/\n/g, '\\n');
        var pointer = Array(Math.max(0, safeIndex - start) + 1).join(' ') + '^';
        return { snippet: snippet, pointer: pointer };
    }

    function inferJsonStructureIssue(raw) {
        if (!raw) return null;
        var stack = [];
        var inString = false;
        var escaped = false;
        var line = 1;
        var column = 1;
        var openToClose = { '{': '}', '[': ']' };

        for (var i = 0; i < raw.length; i++) {
            var ch = raw.charAt(i);

            if (inString) {
                if (escaped) escaped = false;
                else if (ch === '\\') escaped = true;
                else if (ch === '"') inString = false;
            } else {
                if (ch === '"') {
                    inString = true;
                } else if (ch === '{' || ch === '[') {
                    stack.push({ ch: ch, index: i, line: line, column: column });
                } else if (ch === '}' || ch === ']') {
                    if (stack.length === 0) {
                        return {
                            index: i, line: line, column: column,
                            message: 'Fermeture inattendue "' + ch + '" (sans ouverture correspondante).'
                        };
                    }
                    var top = stack.pop();
                    var expected = openToClose[top.ch];
                    if (ch !== expected) {
                        return {
                            index: i, line: line, column: column,
                            message: 'Fermeture "' + ch + '" inattendue. "' + top.ch + '" ouvert en ligne ' + top.line + ', colonne ' + top.column + ' attend "' + expected + '".'
                        };
                    }
                }
            }

            if (ch === '\n') { line += 1; column = 1; }
            else column += 1;
        }

        if (inString) {
            var idx = Math.max(0, raw.length - 1);
            var lc = lineColumnFromIndex(raw, idx);
            return {
                index: idx, line: lc.line, column: lc.column,
                message: 'Chaine non fermee: guillemet double manquant (").'
            };
        }

        if (stack.length > 0) {
            var lastItem = stack[stack.length - 1];
            return {
                index: lastItem.index, line: lastItem.line, column: lastItem.column,
                message: 'Bloc non ferme: "' + lastItem.ch + '" ouvert ici attend "' + openToClose[lastItem.ch] + '".'
            };
        }

        return null;
    }

    function getJsonBoundaryError(raw) {
        if (!raw) return '\u274C JSON vide apres nettoyage.';
        var first = raw.charAt(0);
        var last = raw.charAt(raw.length - 1);
        if (first !== '{' && first !== '[') return '\u274C JSON tronque : le contenu doit commencer par "{" ou "[".';
        if (last !== '}' && last !== ']') return '\u274C JSON tronque : le contenu doit se terminer par "}" ou "]".';
        if (first === '{' && last !== '}') return '\u274C JSON tronque : objet commence par "{" sans "}" final.';
        if (first === '[' && last !== ']') return '\u274C JSON tronque : tableau commence par "[" sans "]" final.';
        return null;
    }

    /**
     * Construit un message d'erreur detaille pour un JSON invalide.
     * @returns {string} Message d'erreur formate (multi-lignes)
     */
    function buildImportParseErrors(error, cleanedJson, stats) {
        var messages = ['\u274C JSON invalide : ' + (error && error.message ? error.message : 'Erreur inconnue')];
        if (stats && stats.typoDoubleQuotes > 0) {
            messages.push('\uD83D\uDCA1 Guillemets doubles typographiques detectes : remplace-les par des guillemets standards (").');
        }
        var loc = parseErrorLocation(error && error.message, cleanedJson);
        if (loc) {
            var ctx = parseErrorContext(cleanedJson, loc.index);
            messages.push('\uD83D\uDCCD Position : index ' + loc.index + ' (ligne ' + loc.line + ', colonne ' + loc.column + ')');
            messages.push('\uD83D\uDD0E Contexte (\u00B130) : ' + ctx.snippet + '\n' + ctx.pointer);
            return messages.join('\n');
        }

        var inferred = inferJsonStructureIssue(cleanedJson);
        if (inferred) {
            var ictx = parseErrorContext(cleanedJson, inferred.index);
            messages.push('\uD83D\uDCCD Position (estimee) : ligne ' + inferred.line + ', colonne ' + inferred.column);
            messages.push('\uD83D\uDD27 Diagnostic : ' + inferred.message);
            messages.push('\uD83D\uDD0E Contexte (\u00B130) : ' + ictx.snippet + '\n' + ictx.pointer);
        } else {
            messages.push('\uD83D\uDCA1 Position exacte non fournie par le navigateur. Verifie crochets/accolades fermants et virgules finales.');
        }

        return messages.join('\n');
    }

    // ========== TIER D — HELPERS UI ==========

    /**
     * Met a jour l'avertissement visuel pour guillemets typographiques.
     * @param {string} raw - Contenu du textarea
     * @param {string} warningBoxId - ID du div conteneur warning
     * @param {string} warningTextId - ID du span texte warning
     */
    function updateImportQuoteWarning(raw, warningBoxId, warningTextId) {
        var warningBox = document.getElementById(warningBoxId);
        var warningText = document.getElementById(warningTextId);
        if (!warningBox || !warningText) return;
        var doubleCount = countMatches(raw, DOUBLE_QUOTES_RE);
        if (doubleCount > 0) {
            warningText.textContent = '\u26A0\uFE0F ' + doubleCount + ' guillemet(s) double(s) typographique(s) detecte(s).';
            warningBox.style.display = 'flex';
        } else {
            warningText.textContent = '';
            warningBox.style.display = 'none';
        }
    }

    /**
     * Lie les evenements paste/input du textarea pour detecter les guillemets.
     * @param {string} inputId - ID du textarea
     * @param {string} warningBoxId - ID du div conteneur warning
     * @param {string} warningTextId - ID du span texte warning
     */
    function bindImportInputGuards(inputId, warningBoxId, warningTextId) {
        var input = document.getElementById(inputId);
        if (!input || input.dataset.guardsBound === '1') return;
        input.dataset.guardsBound = '1';
        input.addEventListener('input', function () {
            updateImportQuoteWarning(input.value || '', warningBoxId, warningTextId);
        });
        input.addEventListener('paste', function () {
            setTimeout(function () { updateImportQuoteWarning(input.value || '', warningBoxId, warningTextId); }, 0);
        });
    }

    /**
     * Handler generique pour le bouton "Nettoyer".
     * @param {string} inputId - ID du textarea
     * @param {string} errorId - ID du div erreurs
     * @param {string} reportId - ID du div rapport
     * @param {string} warningBoxId - ID du div warning
     * @param {string} warningTextId - ID du span warning text
     * @param {object} [options] - Options passees a cleanJsonFull
     */
    function handleCleanButton(inputId, errorId, reportId, warningBoxId, warningTextId, options) {
        var input = document.getElementById(inputId);
        var errorEl = document.getElementById(errorId);
        var report = document.getElementById(reportId);
        if (!input) return;

        var raw = input.value || '';
        if (!raw.trim()) {
            if (errorEl) {
                errorEl.textContent = '\u274C Collez du JSON avant le nettoyage.';
                errorEl.style.display = 'block';
            }
            if (report) { report.style.display = 'none'; report.textContent = ''; }
            return;
        }

        var result = cleanJsonFull(raw, options);
        input.value = result.cleaned;
        updateImportQuoteWarning(result.cleaned, warningBoxId, warningTextId);
        if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }

        if (report) {
            var parts = [];
            if (result.stats.typoDoubleQuotes > 0) parts.push(result.stats.typoDoubleQuotes + ' guillemets doubles typographiques corriges');
            if (result.stats.typoSingleQuotes > 0) parts.push(result.stats.typoSingleQuotes + ' apostrophes typographiques normalisees');
            if (result.stats.trailingCommas > 0) parts.push(result.stats.trailingCommas + ' virgules finales supprimees');
            if (result.stats.nbsp > 0) parts.push(result.stats.nbsp + ' espaces insecables normalises');
            if (result.stats.zeroWidth > 0) parts.push(result.stats.zeroWidth + ' caracteres invisibles supprimes');
            if (parts.length === 0) parts.push('Aucune correction necessaire');
            report.textContent = '\uD83E\uDDF9 ' + parts.join(' \u00B7 ');
            report.style.display = 'block';
        }
    }

    // ========== API PUBLIQUE ==========

    return {
        // Constantes
        DOUBLE_QUOTES_RE: DOUBLE_QUOTES_RE,
        SINGLE_QUOTES_RE: SINGLE_QUOTES_RE,
        ZW_RE: ZW_RE,
        TRAILING_COMMA_RE: TRAILING_COMMA_RE,
        // Tier A
        countMatches: countMatches,
        normalizeJsonQuotes: normalizeJsonQuotes,
        extractBalancedJsonAt: extractBalancedJsonAt,
        extractBalancedJson: extractBalancedJson,
        extractParsableJson: extractParsableJson,
        extractImportJsonCandidate: extractImportJsonCandidate,
        // Tier B
        cleanJsonFull: cleanJsonFull,
        cleanJsonLight: cleanJsonLight,
        // Tier C
        lineColumnFromIndex: lineColumnFromIndex,
        indexFromLineColumn: indexFromLineColumn,
        parseErrorLocation: parseErrorLocation,
        parseErrorContext: parseErrorContext,
        inferJsonStructureIssue: inferJsonStructureIssue,
        getJsonBoundaryError: getJsonBoundaryError,
        buildImportParseErrors: buildImportParseErrors,
        // Tier D
        updateImportQuoteWarning: updateImportQuoteWarning,
        bindImportInputGuards: bindImportInputGuards,
        handleCleanButton: handleCleanButton
    };
})();
window.JsonImportUtils = JsonImportUtils;

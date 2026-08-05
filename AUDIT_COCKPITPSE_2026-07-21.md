# Audit complet — CockpitPSE

**Date :** 2026-07-21
**Périmètre :** l'intégralité du dépôt `Preventionsanteenvironnement/CockpitPSE` (≈ 90 pages HTML, 30 JS, 50 JSON, ~130 000 lignes), et ses liens avec le site élève `mapse.fr` (dépôt `PSE`).
**Méthode :** lecture complète, page par page, regroupée en 6 familles fonctionnelles + vérifications transverses (liens, Firebase, RGPD, git).
**Statut :** document local d'audit. ⚠️ **Ne pas committer tel quel dans le dépôt public** (il décrit la posture de sécurité). À garder en local ou ajouter à un `.gitignore`.

---

## 1. Verdict global

Le cockpit est **fonctionnel et globalement sain**. Le hub `index.html` est solide (5 familles, 13 vues, **zéro lien mort dans le menu** sur 74 cibles), la config Firebase est **cohérente partout** (`projectId: "devoirs-pse"`, un seul « monde »), le flux de correction cœur (`grille.html` → `dossier-classe.html`) est robuste, et le **RGPD est correctement pensé** (les noms d'élèves restent en `localStorage` via `annuaire_local.js`, jamais en base ; `data_eleves.js` ne contient que des codes).

Mais l'audit remonte **3 points urgents** (dont une exposition RGPD réelle en ligne et une régression qui casse 5 activités), une **dette de duplication** notable (plusieurs pages/éditeurs legacy jamais nettoyés), et — pour ta question centrale — une **approche par compétences juste dans son cœur mais rompue de bout en bout**.

| Famille | État | Alerte principale |
|---|---|---|
| Hub & navigation | 🟢 Bon | Doublons/vestiges (dashboard invisible, miroir inerte) |
| Correction / notes / suivi | 🟡 Correct | 5 pages « suivi » concurrentes ; brouillons perdus |
| Éditeurs de contenu | 🟢 Bon | Doublons legacy (eval v1, bac_competences) |
| **Approche par compétences** | 🟡 **Cœur bon, chaîne rompue** | CCF ≠ PSE, PSR déconnecté, C1 manquante |
| Activités live | 🔴 **2 activités familles cassées** | `eleve_collecte.html` tronqué |
| Guides & données (JS) | 🟢 Bon | Collision de fonctions homonymes |

---

## 2. 🔴 Actions urgentes (à traiter en priorité)

### U1 — Noms d'élèves exposés en ligne (RGPD) — `CCF4_Evaluation_Oral-11.html`
- La version **publiée** (dépôt **public**) contient en dur les **nom + prénom réels** de ~17 élèves (2 groupes CAPa).
- Ta **copie de travail locale est déjà anonymisée** (E01, E02…) **mais non commitée/poussée** → le site en ligne montre toujours les vrais noms.
- Les noms restent aussi dans **l'historique git** (`e8f3d43 Publie la grille…`).
- **Action :** committer/pousser l'anonymisation **immédiatement**, puis **purger l'historique** (`git filter-repo` ou réécriture) car le dépôt est public. La sauvegarde `CCF4…SAUVEGARDE_avant_anonymisation_2026-07-15` n'est **pas** suivie par git (locale, non publiée) → OK, mais ajouter un `.gitignore` pour éviter tout commit accidentel.

### U2 — Régression : `PSE/eleve_collecte.html` tronqué (5 activités live cassées)
- Le fichier est passé de **18 464 → 81 octets** au commit `b908152` (dépôt PSE) : il ne reste qu'un `<head>`, plus aucun corps ni script Firestore.
- Casse le **côté élève** de : **Ishikawa, ITAMaMi, Mindmap, PAD, QQOQCP** (les pages `prof_*` projettent un QR vers une page vide).
- **Action :** restaurer depuis une version saine, dans le dépôt **PSE** :
  ```bash
  cd /Users/brahms/Documents/GitHub/PSE
  git checkout 55d66cf -- eleve_collecte.html   # 18 464 o, version saine
  ```
  puis re-vérifier que les modes `?mode=ishikawa|itamami|mindmap|pad|qqoqcp` sont bien gérés, réappliquer le titre voulu sans écraser le corps, committer, pousser.

### U3 — L'« approche par compétences » n'est pas alignée de bout en bout
Réponse directe à ta question. Voir §5 pour le détail. En bref : **le cœur PSE C1–C6 est conforme et cohérent**, mais le maillon **CCF** contient des grilles **agricoles (CAPa)** — pas de la PSE — et le maillon **CAP PSR** est déconnecté du suivi. Trois décisions à prendre (réintégrer C1 côté Bac, clarifier le statut des CCF agricoles, faire remonter les compétences PSR dans le cockpit).

---

## 3. Tableau consolidé des problèmes

### BLOQUANT / CRITIQUE
| # | Fichier | Problème | Correctif |
|---|---|---|---|
| U1 | `CCF4_Evaluation_Oral-11.html` (HEAD + historique) | Noms d'élèves réels publiés (dépôt public) | Committer l'anonymisation + purger l'historique + `.gitignore` |
| U2 | `PSE/eleve_collecte.html` | Tronqué à 81 o → 5 activités live cassées | Restaurer depuis `55d66cf` |
| U3 | `prof_demarche.html:221` | Cible `eleve_demarche.html` **inexistante** (ni PSE ni cockpit) ; en plus le remplacement garde le chemin CockpitPSE au lieu de `/PSE/` | Créer la page élève ou retirer l'activité |

### IMPORTANT
| # | Fichier | Problème | Correctif |
|---|---|---|---|
| I1 | `editeur_bac_competences.html:1030` | **C1 absente** du barème → élève noté sur **5 compétences** au lieu de 6 (l'autre éditeur en a 6). C1 réapparaît dans les commentaires du même fichier → oubli, pas choix. | Réintégrer C1 ou documenter |
| I2 | `data_eleves.js:221` vs `data_modules.js:349` | Deux `getListeClassesPourAffichage` **homonymes** au comportement différent (groupé vs non groupé) → affichage des classes **incohérent selon l'ordre de chargement des scripts** | Renommer/supprimer un doublon ; une seule source |
| I3 | `nettoyage-doublons.html:111` | Accepte **n'importe quel compte Google** puis autorise la **suppression** de docs `resultats/*/suivi` (contraste avec dashboard/index qui filtrent `ennealyon@gmail.com`) | Ajouter le filtre email + vérifier les règles Firestore |
| I4 | `journal-formation-v2-2.html` + `index.html:825` | Résidu partageant la **même clé** `localStorage['jf-mecheri-2122']` que la version complète → risque d'**écrasement** des commentaires. Bouton mal libellé (« réferentiel ») | Supprimer, ou passer en lecture seule + corriger le libellé |
| I5 | `grille.html` (≈1411/2935 vs 2823) | Les brouillons sont **écrits** dans `resultats/{code}/brouillons` mais **jamais relus** → un brouillon (y compris auto-save) est perdu à la réouverture | Lire `brouillons/` en fallback si pas d'`evaluations` |
| I6 | `suivi.html`, `session-suivi.html`, `historique-suivi.html`, `suivi-complet.html`, `seance-fusion.html`, `suivi_participation.html` | **5 pages écrivent `resultats/{code}/suivi`** avec des conventions de `docId` différentes → doublons (d'où l'existence de la page de purge). `session-suivi.html` est en plus **cassée** (lit `e.prenom`/`e.nom` inexistants post-RGPD → « undefined undefined ») | Figer **seance-fusion** comme page unique de saisie ; retirer suivi.html + session-suivi.html du parcours |
| I7 | `editeur_bac_competences.html` ≈ `editeur_eval_competences.html` | **~99 % identiques** (diff ≈ 355 l. sur ~4000). Le premier est hors menu mais toujours vivant | Fusionner en un correcteur avec sélecteur de barème (C1–C6 vs C2–C6) |
| I8 | `editeur_eval.html` (legacy) | Hors menu mais **toujours branché** sur `eval_banque` (schéma identique à v2). L'ancien runner `eleve_eval.html` lit encore `eval_banque` | Bandeau « obsolète » + redirection v2 ; confirmer que plus rien ne publie dans `eval_banque` |
| I9 | `bilans-eleves.html:446` | Lien mort `<a href="devoirs.html">` → **devoirs.html n'existe pas** dans le cockpit | Supprimer ou repointer le lien |
| I10 | PSE vs CAP PSR | **Collision de codes** : « C1 » = « Traiter une information » (PSE) mais aussi « Réceptionner et stocker » (CAP PSR C1–C10) | Préfixer les codes (ex. `PSE-C1` / `PSR-C1`) |
| I11 | `cockpit_psr.html:371` | N'utilise **pas** le référentiel du guide `cap-psr-guide/` : ne suit que des **notes /20** par type, aucun positionnement par compétence/pôle | Faire remonter les compétences/pôles PSR dans le suivi |

### MINEUR
| Fichier | Problème |
|---|---|
| `index.html` (menu) | `dashboard.html` (utile) **jamais lié** depuis le hub ; `PageProf_Exercices.html` et `miroir.html` = **vestiges** (miroir inerte : personne n'écrit `localStorage['cockpit_miroir']`) ; libellé « PageProf » pointe en fait vers l'outil **PAD** (`pageprof.html`), trompeur |
| Firebase (transverse) | `storageBucket` incohérent (`devoirs-pse.appspot.com` vs `.firebasestorage.app`) ; SDK 10.7.1 sur `pageprof.html` vs 10.8.1 ailleurs |
| `PageProf_Exercices.html:137` | Mot de passe `"profpse"` **en clair** côté client (contournable ; données protégées par les règles Firestore) |
| `editeur_quiz.html:1218` | Pas de flag `publie` (sans conséquence dans le flux live actuel, mais incohérent) |
| `json_import_utils.js:301` | Remplacements `True/None`→`true/null` et suppression `//` **globaux**, y compris dans les chaînes → altération silencieuse possible |
| `data_eleves.js:7` | En-tête « 151 élèves » compte le compte test `PROFPSE` (→ 150 élèves + 1 test) ; classe fictive « PROF » apparaît dans certains menus déroulants |
| `recap-notes.html` | `data_modules.js` inclus **deux fois** |
| `data_modules.js:225` | `BAREME_SUIVI.maxPoints:10` figé, jamais utilisé (recalcul dynamique ailleurs) |
| Compétences (transverse) | **Libellés divergents** pour un même code C2/C3 entre `data_modules.js` / éditeurs / variantes CAP-BAC (pas de source unique) ; **barèmes** C2/C4/C5 différents entre les deux éditeurs PSE ; **auto-correction** `data_commentaires_auto.js` limitée à 2 niveaux (I/M) au lieu de 4 (NT/I/A/M) |
| Orphelins (accès direct only) | `scan-eleve.html`, `notes.html`, `sessions_parents.html`, `editeur_carte_mentale.html`, `editeur_resume_pse_cap.html`, `Heuressup.html`, `ecran_bulle.html`, `ecran_zen.html` |

---

## 4. Analyse par famille

### 4.1 Hub & navigation — 🟢
`index.html` = vrai hub, 5 familles (Pédagogie / Évaluation & résultats / Classe / En direct / Outils), 13 vues internes via `showView()`, **zéro lien mort**. `dashboard.html` (consultation élèves + bilan comportement, auth restreinte à `ennealyon@gmail.com`) est **invisible depuis le menu**. `PageProf_Exercices.html` et `miroir.html` sont des vestiges. À nettoyer/réintégrer, pas de code cassé.

### 4.2 Correction, notes & suivi — 🟡
Cœur sain : `grille.html` (transfert via `localStorage['cockpit_transfert']` → `getDoc` copie → écrit `resultats/{code}/evaluations`, verrous anti-double-clic robustes) + `dossier-classe.html` (bulletins via `collectionGroup`). **3 systèmes de notation cohabitent** : le flux copies/evaluations (grille), la banque de compétences (`recap-notes.html` → `eval_banque(_v2)`), et une collection `notes` (`notes.html`). Zone « suivi » **encombrée** (5 pages, voir I6). Fallback non documenté sur une collection racine `devoirs_rendus`. RGPD : rien à signaler.

### 4.3 Éditeurs de contenu — 🟢
7 éditeurs connectés, tous sur `devoirs-pse`, avec flag `publie` (sauf quiz, projeté en live). Migration éval **v1→v2 propre** (le runner `PSE/eleve_eval_v2.html` lit **les deux** banques). `editeur_exercices_budget.html` est un **fork spécialisé légitime** (`type:"budget"`), pas un doublon. Vraie dette : `editeur_eval.html` (legacy branché) et les jumeaux `eval_competences`/`bac_competences`.

### 4.4 Activités live — 🔴
Sur 18 pages `prof_*`, **6 cassées côté élève** : 5 par la troncature de `eleve_collecte.html` (U2), 1 par `eleve_demarche.html` inexistant (U3). Cohérence des collections Firestore **bonne** partout. Les pages `eleve_meteo/nuage/quiz/vraifaux` **présentes dans le cockpit sont des résidus** (le prof route toujours vers `/PSE/`, et ces copies **divergent** du code PSE réellement servi) → à supprimer. `jeux-live/` = mini-plateforme autonome fonctionnelle (Firebase + fallback localStorage).

### 4.5 Guides & données JS — 🟢
`data_modules.js` = référentiel PSE **complet et fidèle** (thèmes A/B/C/D, CAP + Bac Pro par année, `BAC_PRO_REVISION_MAP` cohérent). `data_eleves.js` **RGPD** (150 élèves + 1 test, 19 classes = exactement les clés de `CLASSES_CONFIG`). `export_global.js` = **lecture seule** (aucune écriture Firestore, export JSON anonymisé) → aucun risque d'écrasement. `journal-formation.html` est la version courante ; `journal-formation-v2-2.html` un résidu risqué (I4). Le nom du prof (« Brahim Mecheri ») figure dans les journaux — donnée personnelle du prof, acceptable.

---

## 5. L'approche par compétences (ta question centrale)

**Réponse : solide dans son cœur, mais pas alignée de bout en bout.**

### Ce qui est juste ✅
- **Modèle C1–C6** (`data_modules.js:182`, `window.COMPETENCES_PSE`, variantes CAP/BAC) **conforme au référentiel officiel PSE** : C1 Traiter une information, C2 Appliquer une démarche d'analyse, C3 Expliquer un phénomène, C4 Proposer une solution, C5 Argumenter un choix, C6 Communiquer.
- **Échelle NT / I / A / M** (Non traité / Insuffisant / Acceptable / Maîtrisé) **appliquée uniformément** dans tout le noyau PSE (éditeurs → `grille.html` → banques de commentaires), raccourcis clavier 1→4 inclus.
- **Chaîne interne cohérente** : `data_modules.js` → `data_commentaires_competences.js` / `data_appreciation.js` → éditeurs → `grille.html`.
- Nuance : « Agir face à une situation d'urgence » (SST, secourisme) n'est pas dans C1–C6 — normal (évaluation pratique hors grille écrite), mais donc **non porté** par l'approche compétences du cockpit.

### Ce qui rompt l'alignement ❌
1. **Le maillon CCF n'est pas de la PSE.** `ccf1_e11.html`, `CCF4_Evaluation_Oral-11.html` et `editeur_grille_ccf/` sont des grilles **CAPa agricole** (Jardinier-Paysagiste / Horticulteur ; enseignants ESC/HG ; biologie-écologie), avec leurs **propres échelles** (`-- / - / + / ++` ; `pp / p / m / mm`). **Aucun CCF adossé à C1–C6** dans le périmètre. → Décider : soit ces fichiers relèvent d'une autre casquette (agricole) et n'ont rien à faire ici, soit un CCF PSE est voulu et doit être (re)construit sur C1–C6.
2. **Le CAP PSR est déconnecté.** `cap-psr-guide/` est un excellent référentiel (2 pôles = 2 blocs, compétences C1–C10 officielles, arrêté 29/10/2019), **mais `cockpit_psr.html` l'ignore** : il ne suit que des **notes /20** par type, sans positionnement par compétence/pôle, et **sans échelle de maîtrise** (juste un % de « savoirs traités »).
3. **Deux incohérences internes** fragilisent même le noyau : **C1 manquante** côté `editeur_bac_competences.html` (I1), et **barèmes/libellés non harmonisés** entre les deux éditeurs et `data_modules.js`.

### Échelles de positionnement — hétérogènes
| Système | Échelle |
|---|---|
| Noyau PSE (éditeurs, grille) | **NT / I / A / M** ✅ uniforme |
| CCF « E11 » (CAPa) | `-- / - / + / ++` |
| CCF4 (CAPa biologie) | `pp / p / m / mm` |
| CAP PSR | % de savoirs traités (couverture) |

---

## 6. Plan d'action priorisé

**Cette semaine (urgent)**
1. U1 — Committer/pousser l'anonymisation `CCF4` + purger l'historique + `.gitignore`.
2. U2 — Restaurer `PSE/eleve_collecte.html` (5 activités live).
3. U3 / I3 — Corriger `prof_demarche` (page élève) et durcir `nettoyage-doublons.html` (filtre email).

**Court terme (cohérence compétences — ta priorité)**
4. I1 — Réintégrer C1 dans `editeur_bac_competences.html`.
5. Harmoniser **barèmes + libellés** C1–C6 en **important depuis `data_modules.js`** (source unique) au lieu de les redéfinir en dur.
6. Trancher le statut des **CCF agricoles** (hors PSE ?) et décider s'il faut un CCF PSE sur C1–C6.
7. I11 — Faire remonter le positionnement **compétences/pôles PSR** dans `cockpit_psr.html`.

**Nettoyage de dette (quand tu veux)**
8. I5 — Relire les brouillons dans `grille.html`.
9. I6 — Une seule page de suivi (`seance-fusion`), retirer `suivi.html` + `session-suivi.html`.
10. I4/I7/I8 — Supprimer/fusionner les doublons (`journal-formation-v2-2`, `bac_competences`, `eval.html`, `eleve_*` résiduels du cockpit).
11. Retirer les vestiges/orphelins ou les relier au menu ; corriger le lien mort `devoirs.html` ; uniformiser `storageBucket` et versions du SDK Firebase.

---

*Rapport généré à partir d'une lecture complète du dépôt. Aucun fichier n'a été modifié pendant l'audit.*

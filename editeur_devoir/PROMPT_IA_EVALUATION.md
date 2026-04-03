# PROMPT IA — Générateur d'Évaluation PSE

> Copiez ce prompt dans Claude ou ChatGPT, puis uploadez le PDF du module Foucher souhaité.
> Dites simplement : "Module A3, CAP 2ème année, durée 1h, avec corrigé"

---

## TA MISSION

Tu génères un **JSON compatible avec l'Éditeur PSE v6** pour créer une **évaluation par compétences** en Prévention Santé Environnement (PSE).

L'évaluation produite sera un document Word standardisé avec :
- Un en-tête (nom/prénom/classe/note)
- Des situations professionnelles avec questions par compétences
- Une grille de notation NT/I/A/M par compétence
- Un corrigé avec réponses attendues et indicateurs

---

## PARAMÈTRES

Si l'enseignant ne précise pas tout, demande-lui :

1. **Module(s)** : code et titre (ex: A3 — L'activité physique)
2. **Niveau** : CAP 1ère année | CAP 2ème année | Seconde Bac Pro | Première Bac Pro | Terminale Bac Pro
3. **Durée** : 30min | 45min | 1h | 1h30 | 2h
4. **Corrigé** : oui | non

---

## COMPÉTENCES OFFICIELLES PSE

### CAP

| Code | Intitulé officiel |
|------|-------------------|
| **C1** | Traiter une information |
| **C2** | Appliquer une **méthode** d'analyse dans une situation donnée |
| **C3** | **Mettre en relation** un phénomène physiologique, un enjeu environnemental, une disposition réglementaire, avec une mesure de prévention |
| **C4** | Proposer une solution pour résoudre un problème **lié à la santé, l'environnement ou la consommation** |
| **C5** | Argumenter un choix |
| **C6** | Communiquer à l'écrit et à l'oral avec une syntaxe claire et un vocabulaire adapté |

### Bac Pro

| Code | Intitulé officiel |
|------|-------------------|
| **C1** | Traiter une information |
| **C2** | Appliquer une **démarche** d'analyse dans une situation donnée |
| **C3** | **Expliquer** un phénomène physiologique, un enjeu environnemental, une disposition réglementaire, en lien avec une mesure de prévention |
| **C4** | Proposer une solution pour résoudre un problème |
| **C5** | Argumenter un choix |
| **C6** | Communiquer à l'écrit et à l'oral avec une syntaxe claire et un vocabulaire adapté |

---

## RÈGLE D'OR : FORMULATION DES CONSIGNES

### 1 consigne = 1 seul verbe d'action à l'infinitif

Le verbe d'action détermine la compétence évaluée. Il est **toujours en gras** dans le JSON.

### Verbes par compétence

**C1** : Repérer, identifier, souligner, encadrer, cocher, relever, extraire, trier, classer, sélectionner, comparer, résumer

**C2** : Indiquer (le problème), constater, observer, appliquer, compléter (un schéma/tableau), reporter, relier, distinguer, mettre en œuvre

**C3** : Citer, nommer, définir, décrire, lister, énumérer, expliquer, expliciter, exposer, présenter, illustrer, démontrer, commenter

**C4** : Proposer, suggérer, préconiser, conseiller, trouver, identifier (des solutions), classer (par priorité), choisir

**C5** : Justifier, argumenter, expliquer pourquoi, critiquer, défendre, prouver, démontrer l'intérêt de

**C6** : Évaluation globale sur l'ensemble de la copie (pas de consigne spécifique)

### Format de chaque question

```
[C2] 1.1) **Compléter** le tableau du PAD à partir de la situation.
```

Si plusieurs sous-questions :
```
[C2] 1.4) À partir du DOC B :
    a) **Indiquer** la durée d'un cycle de sommeil.
    b) **Relever** le nombre de cycles pour une nuit de 8 heures.
```

---

## INDICATEURS PAR QUESTION (ESSENTIEL)

Chaque question doit avoir des **indicateurs de réussite spécifiques** qui déterminent le niveau NT/I/A/M.

### Question binaire (NT ou M uniquement)
Pour les questions de restitution simple.
```json
{
  "reponse_attendue": "Le métier de Karim est mécanicien automobile.",
  "explication": "C1 — Relever une information explicite dans le texte.",
  "indicateurs": "M = L'élément attendu est correctement identifié. | NT = Aucune réponse ou réponse erronée."
}
```

### Question à 3 niveaux (NT, I, M)
Pour les questions demandant 2-3 éléments.
```json
{
  "reponse_attendue": "Douleurs dorsales et surpoids.",
  "explication": "C1 — Relever plusieurs informations dans la situation.",
  "indicateurs": "M = Les 2 éléments identifiés. | I = 1 seul élément. | NT = Aucun élément ou hors sujet."
}
```

### Question à 4 niveaux (NT, I, A, M)
Pour les analyses complexes, explications, argumentations.
```json
{
  "reponse_attendue": "Les 4 éléments du PAD sont correctement identifiés avec les relations causales.",
  "explication": "C2 — Application de l'approche par les risques (PAD).",
  "indicateurs": "M = 4 éléments avec relations causales. | A = 3 éléments avec liens OU 4 sans liens. | I = 2 éléments avec liens OU 3 sans. | NT = 0-1 élément ou réponse incohérente."
}
```

### Indicateurs spécifiques par outil d'analyse (C2)

| Outil | NT | I | A | M |
|-------|-----|-----|-----|-----|
| **QQOQCP** | 0-2 parties | 3 parties | 4 parties | 5+ parties |
| **ITaMaMi** | 0-1 partie | 2 parties | 3 parties | 4 parties |
| **5M (Ishikawa)** | 0-2 parties | 3 + conséquence | 4 + conséquence | 5 + conséquence |
| **PAD** | 0-1 élément | 2 avec liens OU 3 sans | 3 avec liens OU 4 sans | Tous avec relations |
| **Arbre des causes** | 0-1 fait | 2 faits sans lien | 3+ faits avec liens partiels | Chaîne causale complète |

---

## STRUCTURE JSON À GÉNÉRER

Le JSON doit être **directement importable** dans l'Éditeur PSE v6 via "Coller du JSON".

```json
[
  {
    "id": "b_eval_01",
    "type": "evaluation",
    "data": {
      "titre": "L'activité physique",
      "module_code": "A3",
      "duree": "1h",
      "bareme": "20",
      "consigne": "Lisez attentivement chaque situation et les documents avant de répondre. Formulez des phrases complètes."
    }
  },
  {
    "id": "b_sep_01",
    "type": "separateur",
    "data": { "style": "titre", "titre": "PARTIE 1 — Approche par les risques" }
  },
  {
    "id": "b_sit_01",
    "type": "situation",
    "data": {
      "texte": "Karim, 18 ans, est en stage dans une entreprise de logistique...",
      "source": ""
    }
  },
  {
    "id": "b_doc_01",
    "type": "document",
    "data": {
      "label": "DOC A",
      "titre": "Les recommandations de l'OMS sur l'activité physique",
      "corps": "L'OMS recommande pour les adultes de 18 à 64 ans...",
      "cadre": true,
      "source": "OMS, 2024"
    }
  },
  {
    "id": "b_qc_01",
    "type": "question_chapeau",
    "data": {
      "numero": "1",
      "texte": "À partir de la situation et du DOC A,",
      "reponse_attendue": "",
      "explication": ""
    }
  },
  {
    "id": "b_sq_01",
    "type": "sous_question",
    "data": {
      "competence": "C1",
      "numero": "1.1",
      "texte": "**Relever** dans la situation le problème de santé de Karim.",
      "points": "1",
      "lignes": 2,
      "style_lignes": "tirets",
      "reponse_attendue": "Karim souffre de douleurs dans le dos et présente un début de surpoids.",
      "explication": "C1 — Relever des informations explicites dans la situation.\nIndicateurs : M = Les 2 éléments identifiés (douleurs + surpoids). | I = 1 seul élément. | NT = Aucun ou hors sujet."
    }
  },
  {
    "id": "b_sq_02",
    "type": "sous_question",
    "data": {
      "competence": "C2",
      "numero": "1.2",
      "texte": "**Compléter** le tableau du Processus d'Apparition d'un Dommage (PAD).",
      "points": "4",
      "lignes": 0,
      "style_lignes": "tirets",
      "reponse_attendue": "Danger : Sédentarité | Situation dangereuse : Karim reste assis toute la journée | Événement déclencheur : Absence de pauses actives | Dommage : Douleurs dorsales, surpoids.",
      "explication": "C2 — Application de l'approche par les risques.\nIndicateurs : M = 4 éléments avec relations causales. | A = 3 éléments avec liens OU 4 sans. | I = 2 avec liens OU 3 sans. | NT = 0-1 élément."
    }
  },
  {
    "id": "b_pad_01",
    "type": "pad",
    "data": {
      "titre": "",
      "situation_dangereuse": "",
      "evenement_dangereux": "",
      "danger": "",
      "operateur": "",
      "dommage": ""
    }
  },
  {
    "id": "b_sq_03",
    "type": "sous_question",
    "data": {
      "competence": "C4",
      "numero": "1.3",
      "texte": "**Proposer** deux mesures de prévention adaptées à la situation de Karim.",
      "points": "2",
      "lignes": 4,
      "style_lignes": "tirets",
      "reponse_attendue": "1. Mesure collective : pauses actives organisées par l'entreprise. 2. Mesure individuelle : pratiquer une activité sportive régulière.",
      "explication": "C4 — Proposer des solutions en distinguant collectif/individuel.\nIndicateurs : M = 2 mesures pertinentes avec distinction du niveau. | A = 2 mesures sans distinction. | I = 1 seule mesure. | NT = Aucune ou inadaptée."
    }
  },
  {
    "id": "b_grille_01",
    "type": "grille_notation",
    "data": {
      "commentaire_prof": ""
    }
  }
]
```

---

## RÈGLES DE GÉNÉRATION STRICTES

### Contenu
1. Situations professionnelles **réalistes** avec personnage (prénom, âge, métier, lieu)
2. Documents d'appui **variés** (tableaux, graphiques, textes réglementaires)
3. Questions qui **progressent** du simple (C1) au complexe (C5) dans chaque partie
4. Le contenu s'appuie sur le **module Foucher fourni** par l'enseignant

### Consignes
5. **Toujours un verbe d'action à l'infinitif en gras** en début de consigne
6. **1 consigne = 1 seul verbe**
7. Le verbe **détermine la compétence** (pas l'inverse)
8. **Pas de question sur la situation problème du cours** (l'évaluation porte sur des situations nouvelles)

### Indicateurs
9. **Chaque question a ses propres indicateurs** dans le champ `explication`
10. Format : `Indicateurs : M = ... | A = ... | I = ... | NT = ...`
11. Questions simples = **binaire** (NT/M)
12. Questions complexes = **4 niveaux** (NT/I/A/M) avec critères mesurables basés sur le comptage d'éléments
13. **C6 toujours en évaluation globale** (pas de question spécifique C6)

### Types d'exercices
14. **Minimum 5 types différents** : combiner question + sous_question + pad + tableau + qcm + vrai_faux + texte_trous + relier + classer + etc.
15. Les blocs exercices Foucher (pad, qqoqcp, itamami, cinq_m, mesures_prev) sont **vides** dans le JSON (l'élève les remplit)
16. Les blocs exercices (qcm, vrai_faux, texte_trous, relier, classer) ont le **contenu rempli** et le **corrigé dans les données**

### Structure
17. Le JSON est un **tableau de blocs** directement importable
18. Commencer par `evaluation` (en-tête)
19. Puis les parties avec `separateur` + `situation` + `document` + questions
20. Finir par `grille_notation`
21. **Barème total = 20 points**
22. **C6 = 2 points** systématiquement

---

## CHECKLIST AVANT LIVRAISON

- [ ] Le JSON est un tableau `[...]` de blocs avec `id`, `type`, `data`
- [ ] Bloc `evaluation` en premier avec module_code, titre, durée, barème, consigne
- [ ] Situations professionnelles réalistes avec personnages
- [ ] Chaque consigne commence par un **verbe d'action à l'infinitif en gras**
- [ ] Chaque sous_question a un champ `competence` (C1-C5)
- [ ] Chaque sous_question a des **indicateurs** dans le champ `explication`
- [ ] Questions binaires (NT/M) pour les questions simples
- [ ] Questions 4 niveaux (NT/I/A/M) pour les analyses complexes
- [ ] Minimum 5 types d'exercices différents
- [ ] Bloc `grille_notation` en dernier
- [ ] Barème total = 20 points, C6 = 2 points
- [ ] Tous les accents sont corrects (é, è, ê, à, ù, ç, etc.)
- [ ] Le JSON est valide et importable dans l'Éditeur PSE v6

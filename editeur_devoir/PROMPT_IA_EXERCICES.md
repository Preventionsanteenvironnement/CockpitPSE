# PROMPT IA — Générateur d'Exercices PSE

> Copiez ce prompt dans Claude ou ChatGPT, puis uploadez le(s) PDF du/des module(s) Foucher souhaité(s).
> Dites simplement : "Exercices modules A2 + A3, CAP 2ème année, difficulté moyen"

---

## TA MISSION

Tu génères un **JSON compatible avec l'Éditeur PSE v6** pour créer une **fiche d'exercices** en Prévention Santé Environnement (PSE).

**Différences avec une évaluation :**
- **Pas de nom/prénom/classe** (c'est un entraînement, pas une note)
- **Pas de grille de notation NT/I/A/M** (pas de barème formel)
- **Peut couvrir plusieurs modules** à la fois
- **La compétence est toujours visible** sur chaque question
- **Le corrigé** est une feuille à part pour que l'enseignant puisse corriger en classe

---

## PARAMÈTRES

Si l'enseignant ne précise pas tout, demande-lui :

1. **Module(s)** : un ou plusieurs codes (ex: A2 + A3, ou C4 seul)
2. **Niveau** : CAP 1ère année | CAP 2ème année | Seconde Bac Pro | Première Bac Pro | Terminale Bac Pro
3. **Difficulté** : facile | moyen | difficile
4. **Nombre d'exercices** : 8-12 (facile) | 12-18 (moyen) | 16-22 (difficile)

---

## COMPÉTENCES OFFICIELLES PSE

### CAP

| Code | Intitulé | Verbes d'action |
|------|----------|-----------------|
| **C1** | Traiter une information | Repérer, identifier, relever, cocher, souligner, extraire, classer, comparer |
| **C2** | Appliquer une **méthode** d'analyse | Indiquer (le problème), compléter (tableau/schéma), appliquer, relier |
| **C3** | **Mettre en relation** un phénomène avec une mesure de prévention | Citer, nommer, définir, décrire, expliquer, associer |
| **C4** | Proposer une solution (santé, environnement, consommation) | Proposer, suggérer, préconiser, conseiller, choisir |
| **C5** | Argumenter un choix | Justifier, argumenter, expliquer pourquoi, défendre |
| **C6** | Communiquer à l'écrit (évaluation globale) | — |

### Bac Pro

| Code | Intitulé | Verbes d'action |
|------|----------|-----------------|
| **C1** | Traiter une information | Idem CAP |
| **C2** | Appliquer une **démarche** d'analyse | Idem CAP mais plus autonome |
| **C3** | **Expliquer** un phénomène | Expliquer, expliciter, démontrer, illustrer, commenter |
| **C4** | Proposer une solution | Idem CAP, périmètre élargi |
| **C5** | Argumenter un choix | Idem CAP, plus fréquent |
| **C6** | Communiquer à l'écrit (évaluation globale) | — |

---

## RÈGLE D'OR : FORMULATION DES CONSIGNES

### 1 consigne = 1 seul verbe d'action à l'infinitif

Le verbe est **toujours en gras** dans le JSON (`**Verbe**`).

**Exemples corrects :**
- `[C1] 1) **Relever** dans le DOC A les deux facteurs de risque.`
- `[C2] 2) **Compléter** le schéma du PAD ci-dessous.`
- `[C3] 3) À partir du DOC B, **expliquer** les effets du bruit sur l'audition.`
- `[C4] 4) **Proposer** deux mesures de prévention adaptées.`
- `[C5] 5) **Justifier** le choix de cette mesure de protection.`

---

## TYPES D'EXERCICES DISPONIBLES

### Exercices Foucher (blocs spéciaux)

| Type de bloc | Description | Compétence typique |
|-------------|------------|-------------------|
| `pad` | Processus d'Apparition du Dommage (schéma à compléter) | C2 |
| `qqoqcp` | Tableau QQOQCP à compléter | C2 |
| `itamami` | Schéma ITaMaMi à compléter | C2 |
| `cinq_m` | Diagramme 5M / Ishikawa à compléter | C2 |
| `mesures_prev` | Tableau des mesures de prévention hiérarchisées | C4 |
| `qcm` | QCM à une ou plusieurs réponses | C1 |
| `vrai_faux` | Vrai/Faux (avec ou sans justification) | C1, C5 |
| `texte_trous` | Texte à trous avec mots à placer | C1, C3 |
| `relier` | Appariement termes-définitions | C1, C3 |
| `classer` | Classer des éléments dans des catégories | C1, C2 |

### Questions classiques

| Type de bloc | Description | Compétence typique |
|-------------|------------|-------------------|
| `question` | Question avec lignes de réponse | Toutes |
| `question_chapeau` + `sous_question` | Question principale + sous-questions | Toutes |

### Règles de variété

- **Minimum 5 types d'exercices différents** par fiche
- **Maximum 3 exercices consécutifs** du même type
- Commencer par des exercices C1 (repérer, identifier)
- Terminer par des exercices C4/C5 (proposer, justifier)
- Les exercices C2 (tableaux, schémas) au cœur de la fiche

---

## NIVEAUX DE DIFFICULTÉ

### Facile
- Compétences C1 + C2 majoritaires
- Exercices guidés : QCM, V/F, texte à trous, appariement
- Vocabulaire fourni, exemples donnés
- 8-12 exercices

### Moyen
- Mix C1 + C2 + C3 + C4
- Combiner blocs Foucher (PAD, QQOQCP) et questions ouvertes
- Quelques rédactions courtes (3-5 lignes)
- 12-18 exercices

### Difficile
- Toutes compétences, C4/C5 dominants
- Analyses complètes, argumentations
- Rédactions plus longues (5-8 lignes)
- 16-22 exercices

---

## STRUCTURE JSON À GÉNÉRER

Le JSON est un **tableau de blocs** directement importable dans l'Éditeur PSE v6 via "Coller du JSON".

```json
[
  {
    "id": "b_exo_01",
    "type": "entete_exercices",
    "data": {
      "titre": "Le sommeil et l'activité physique",
      "niveau": "CAP 2ème année",
      "modules": ["A2", "A3"],
      "notions": "Les cycles du sommeil, les recommandations OMS, la sédentarité, les bienfaits de l'activité physique",
      "consigne": "Répondez aux questions en vous appuyant sur les documents fournis."
    }
  },
  {
    "id": "b_doc_01",
    "type": "document",
    "data": {
      "label": "DOC 1",
      "titre": "Les recommandations de l'OMS",
      "corps": "L'OMS recommande pour les adultes de 18 à 64 ans au moins 150 minutes d'activité physique modérée par semaine...",
      "cadre": true,
      "source": "OMS, 2024"
    }
  },
  {
    "id": "b_q_01",
    "type": "question",
    "data": {
      "competence": "C1",
      "numero": "1",
      "texte": "À partir du DOC 1, **relever** la durée d'activité physique recommandée par semaine.",
      "points": "",
      "lignes": 2,
      "style_lignes": "tirets",
      "reponse_attendue": "150 minutes d'activité physique modérée par semaine (ou 75 minutes d'activité intense).",
      "explication": "C1 — Relever une information chiffrée dans un document."
    }
  },
  {
    "id": "b_vf_01",
    "type": "vrai_faux",
    "data": {
      "numero": "2",
      "competence": "C1",
      "label1": "Vrai",
      "label2": "Faux",
      "items": [
        { "texte": "L'OMS recommande 30 minutes de sport par jour.", "answer": "faux" },
        { "texte": "La sédentarité augmente le risque de maladies cardiovasculaires.", "answer": "vrai" },
        { "texte": "L'activité physique réduit le stress.", "answer": "vrai" }
      ]
    }
  },
  {
    "id": "b_qcm_01",
    "type": "qcm",
    "data": {
      "numero": "3",
      "competence": "C1",
      "titre": "",
      "consigne": "**Cocher** la bonne réponse.",
      "items": [
        { "question": "Quel est le seuil minimum d'activité physique modérée par semaine ?", "options": ["30 min", "75 min", "150 min", "300 min"], "reponse": "150 min" }
      ]
    }
  },
  {
    "id": "b_sit_01",
    "type": "situation",
    "data": {
      "texte": "Karim, 18 ans, travaille comme agent administratif dans une entreprise de logistique. Il passe ses journées assis devant un écran. Depuis quelques semaines, il ressent des douleurs dans le dos et se sent fatigué.",
      "source": ""
    }
  },
  {
    "id": "b_pad_01",
    "type": "pad",
    "data": {
      "titre": "4) [C2] **Compléter** le schéma du PAD à partir de la situation de Karim.",
      "situation_dangereuse": "",
      "evenement_dangereux": "",
      "danger": "",
      "operateur": "",
      "dommage": ""
    }
  },
  {
    "id": "b_q_02",
    "type": "question",
    "data": {
      "competence": "C3",
      "numero": "5",
      "texte": "**Expliquer** les bienfaits de l'activité physique sur la santé de Karim (domaine physique ET mental).",
      "points": "",
      "lignes": 5,
      "style_lignes": "tirets",
      "reponse_attendue": "Physique : renforce le cœur et les muscles, prévient l'obésité, réduit les douleurs dorsales. Mental : réduit le stress, améliore le sommeil, renforce l'estime de soi.",
      "explication": "C3 — Mettre en relation les bienfaits de l'activité physique avec la situation personnelle de Karim."
    }
  },
  {
    "id": "b_q_03",
    "type": "question",
    "data": {
      "competence": "C4",
      "numero": "6",
      "texte": "**Proposer** deux mesures que l'entreprise pourrait mettre en place pour améliorer les conditions de travail de Karim.",
      "points": "",
      "lignes": 4,
      "style_lignes": "tirets",
      "reponse_attendue": "1. Organiser des pauses actives (étirements). 2. Fournir un bureau réglable en hauteur.",
      "explication": "C4 — Proposer des solutions réalistes et adaptées au contexte professionnel."
    }
  }
]
```

---

## RÈGLES DE GÉNÉRATION STRICTES

### Contenu
1. Le contenu s'appuie sur le(s) **module(s) Foucher fourni(s)** par l'enseignant
2. Situations professionnelles **réalistes** avec personnage (prénom, âge, métier)
3. Documents d'appui **variés**
4. Si plusieurs modules : les exercices alternent entre les modules

### Consignes
5. **Toujours un verbe d'action à l'infinitif en gras** (`**Verbe**`)
6. **1 consigne = 1 seul verbe**
7. **La compétence est toujours indiquée** sur chaque question/exercice
8. Pas de question sur la situation problème du cours

### Format exercices
9. **Pas de grille de notation** — c'est un exercice, pas une évaluation
10. **Pas de nom/prénom/classe** — bloc `entete_exercices` au lieu de `evaluation`
11. **Pas de barème formel** — le champ `points` reste vide dans les questions
12. Le **corrigé est dans les champs** `reponse_attendue` et `explication`
13. L'export "Corrigé" de l'éditeur génère automatiquement la feuille de correction

### Blocs Foucher
14. Les blocs d'analyse (pad, qqoqcp, itamami, cinq_m, mesures_prev) sont **vides** — l'élève les remplit
15. Le titre du bloc contient le numéro + compétence + consigne : `"4) [C2] **Compléter** le schéma du PAD."`
16. Le corrigé de ces blocs est dans une question séparée ou dans le bloc lui-même

### Variété
17. **Minimum 5 types différents** d'exercices par fiche
18. **Maximum 3 exercices consécutifs** du même type
19. Commencer par C1, terminer par C4/C5

---

## CHECKLIST AVANT LIVRAISON

- [ ] Le JSON est un tableau `[...]` de blocs avec `id`, `type`, `data`
- [ ] Bloc `entete_exercices` en premier (pas `evaluation`)
- [ ] `modules` contient un tableau de codes : `["A2", "A3"]`
- [ ] Pas de grille_notation, pas de nom/prénom
- [ ] Chaque question/exercice a un champ `competence` visible
- [ ] Chaque consigne commence par un **verbe d'action à l'infinitif en gras**
- [ ] Chaque question a `reponse_attendue` et `explication` pour le corrigé
- [ ] Minimum 5 types d'exercices différents
- [ ] Blocs Foucher (pad, qqoqcp, etc.) sont vides (l'élève remplit)
- [ ] Les accents sont tous corrects (é, è, ê, à, ù, ç, etc.)
- [ ] Le JSON est valide et importable dans l'Éditeur PSE v6

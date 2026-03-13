# Spec fonctionnelle - Editeur d'exercices Budget CAP

## 1. Vision

Creer un **editeur d'exercices dedie au module D2 "Le budget"** pour les CAP, sur le meme principe ergonomique que les autres editeurs du Cockpit :

- entree visible dans `CockpitPSE > Classe en temps reel > Exercices interactifs`
- page dediee `editeur_exercices_budget.html`
- liste des exercices existants
- bouton `Nouvel exercice`
- modal / panneau de creation
- import JSON
- duplication
- publier / depublier
- test cote eleve

Ce nouvel editeur ne gere **que le budget** et propose plusieurs **types d'exercices internes** specialises.

## 2. Contexte pedagogique retenu

Le module Budget doit preparer les eleves a trois niveaux :

1. **Competence isolee**
- reconnaitre revenus / depenses
- distinguer revenus du travail / revenus sociaux
- distinguer depenses incompressibles / courantes / exceptionnelles
- calculer total revenus
- calculer total depenses
- calculer le solde
- identifier le type de budget
- choisir une epargne
- comparer des credits
- calculer le taux d'endettement

2. **Competences combinees**
- classer + calculer + conclure
- choisir une epargne a partir d'un projet
- choisir un credit puis verifier s'il est soutenable

3. **Cas complets**
- une situation unique
- tri des revenus et depenses
- classement des depenses
- calcul des totaux
- calcul du solde
- identification du type de budget
- eventuellement epargne, credit, taux d'endettement

## 3. Pages cibles

### Cote CockpitPSE

- nouvelle entree dans [index.html](/Users/brahms/Documents/GitHub/CockpitPSE/index.html#L746)
- nouvelle page : `editeur_exercices_budget.html`

### Cote PSE eleve

- nouvelle entree dans le bloc CAP du module D2 existant dans [index.html](/Users/brahms/Documents/GitHub/PSE/index.html#L1399)
- nouvelle page eleve dediee, par exemple `budget_cap.html`

Cette page remplace progressivement les anciens exercices D2 eparpilles deja presents dans `PSE` (`CAPbudget1exercice.html`, `CAPbudget2exercice.html`, etc.).

## 4. Proposition de classement cote eleve

Classement recommande dans la future page Budget CAP :

- `Bases du budget`
- `Revenus et depenses`
- `Types de depenses`
- `Calculs du budget`
- `Epargne`
- `Credit`
- `Taux d'endettement`
- `Cas complets`

Filtres secondaires :

- `Facile`
- `Intermediaire`
- `Complet`
- `A refaire`

## 5. Types d'exercices a proposer dans le menu

### Bloc A - Exercices cibles

1. `tri_revenus_depenses`
- mecanique : cliquer / deposer
- objectif : classer chaque element en revenu ou depense

2. `tri_revenus_origine`
- mecanique : cliquer / deposer
- objectif : classer en revenu lie au travail ou revenu social

3. `tri_depenses_types`
- mecanique : cliquer / deposer
- objectif : classer en incompressible, courante, exceptionnelle

4. `tableau_budget`
- mecanique : tableau a completer
- objectif : placer les bons montants ou bons postes dans un budget

5. `calcul_totaux_budget`
- mecanique : saisie numerique
- objectif : calculer total revenus et / ou total depenses

6. `calcul_solde_budget`
- mecanique : saisie numerique
- objectif : calculer le solde a partir des totaux

7. `identifier_type_budget`
- mecanique : QCM ou boutons
- objectif : choisir `deficitaire`, `equilibre`, `excedentaire`

8. `choix_epargne`
- mecanique : QCM / tableau selection
- objectif : choisir le livret pertinent selon age, projet, disponibilite, taux, duree

9. `calcul_epargne_projet`
- mecanique : saisie numerique
- objectif : calculer combien il peut epargner ou en combien de mois

10. `comparaison_credit`
- mecanique : QCM / tableau selection
- objectif : comparer plusieurs offres et choisir la plus pertinente

11. `calcul_taux_endettement`
- mecanique : saisie numerique
- objectif : appliquer la formule du taux d'endettement

12. `decision_endettement`
- mecanique : QCM argumente
- objectif : dire si la personne peut emprunter sans risque, avec prudence, ou non

### Bloc B - Exercices combines

13. `budget_classement_calcul`
- tri revenus / depenses
- tri des depenses
- calcul des totaux
- calcul du solde
- identification du type de budget

14. `epargne_complete`
- lecture d'une situation
- calcul de la marge d'epargne
- choix du type d'epargne
- justification du choix

15. `credit_endettement_complet`
- comparaison d'offres
- choix du credit
- calcul du taux d'endettement
- decision finale

### Bloc C - Cas complets

16. `budget_complet`
- grande situation unique
- enchainement de plusieurs etapes
- preparation directe a l'evaluation

## 6. Structure d'interface du nouvel editeur

## Ecran liste

- recherche
- filtres : sous-theme, type, difficulte, publie / brouillon
- cartes exercice
- actions : `Modifier`, `Dupliquer`, `Publier`, `Depublier`, `Tester`, `Supprimer`

## Ecran creation / edition

Champs communs :

- `Titre`
- `Sous-theme`
- `Type d'exercice`
- `Consigne`
- `Difficulte`
- `Calculatrice integree` : oui / non
- `Explication pedagogique globale`
- `Tags`

Blocs communs de donnees metier :

- `Situation`
- `Profil`
- `Revenus`
- `Depenses`
- `Projet`
- `Epargne`
- `Credits`

Affichage conditionnel selon le `Type d'exercice`.

## 7. Proposition de modele de donnees

Recommandation : **rester dans la collection Firestore existante** `exercices_banque`, mais avec un type dedie.

Envelope recommande :

```json
{
  "type": "budget",
  "budgetType": "budget_complet",
  "titre": "Budget de Lina - cas complet",
  "niveau": "CAP",
  "moduleId": "MD2",
  "categorie": "cas_complets",
  "difficulte": "intermediaire",
  "calculatrice": true,
  "publie": false,
  "contenu": {}
}
```

Avantages :

- pas de seconde banque Firestore a maintenir
- publication / duplication / filtres reutilisables
- page eleve Budget capable de filtrer `type === "budget"`

## 8. Structure JSON commune pour import IA

Tous les imports IA devraient commencer par un tronc commun :

```json
{
  "budgetType": "tri_depenses_types",
  "titre": "Classe les depenses de Nora",
  "consigne": "Glisse chaque depense dans la bonne categorie.",
  "calculatrice": false,
  "sous_theme": "types_depenses",
  "situation": {
    "personnage": "Nora",
    "age": 18,
    "contexte": "Nora vit en studio et commence son CAP."
  },
  "contenu": {}
}
```

Puis `contenu` change selon le type :

- `tri_revenus_depenses` : zones + items
- `tri_depenses_types` : categories + items
- `calcul_solde_budget` : revenus + depenses + reponse attendue
- `choix_epargne` : profil + livrets + bonne reponse + explication
- `budget_complet` : situation + etapes + attendus

## 9. Prompts JSON a prevoir

Il faut une bibliotheque de prompts dedies, comme pour les autres editeurs.

Strategie recommandee :

- 1 prompt maitre `budget_master`
- 1 prompt par `budgetType`

Liste minimale :

- `prompt_budget_tri_revenus_depenses.md`
- `prompt_budget_tri_revenus_origine.md`
- `prompt_budget_tri_depenses_types.md`
- `prompt_budget_tableau.md`
- `prompt_budget_calcul_solde.md`
- `prompt_budget_type_budget.md`
- `prompt_budget_choix_epargne.md`
- `prompt_budget_comparaison_credit.md`
- `prompt_budget_taux_endettement.md`
- `prompt_budget_complet.md`

## 10. Import intelligent attendu

L'import JSON doit :

- detecter automatiquement `budgetType`
- remplir le bon formulaire
- convertir des aliases frequents
- normaliser les cles si l'IA varie un peu
- afficher un message clair si le JSON est incomplet

Exemples d'aliases a accepter :

- `sousType` -> `budgetType`
- `question` -> `consigne`
- `revenus_sociaux` -> `revenusSociaux`
- `depenses_fixes` -> `depensesIncompressibles`

## 11. Calculatrice integree

Exigence fonctionnelle forte :

- calculatrice flottante discrete
- bouton visible uniquement si `calculatrice !== false`
- ouverture / fermeture rapide
- non intrusive sur mobile

Usages principaux :

- total revenus
- total depenses
- solde
- epargne possible
- cout du credit
- taux d'endettement

## 12. Logique de rendu cote eleve

La page `budget_cap.html` devra :

- lister uniquement les exercices `type: budget`, `niveau: CAP`, `moduleId: MD2`, `publie: true`
- proposer un filtre par sous-theme
- afficher une carte differente selon `budgetType`
- injecter la calculatrice si necessaire
- afficher correction + explication pedagogique

## 13. Cas complet prioritaire

Le type le plus important a reussir est `budget_complet`.

Contenu attendu :

- une seule situation
- revenus a classer
- depenses a classer
- calcul total revenus
- calcul total depenses
- calcul solde
- choix du type de budget
- optionnel : suite epargne ou credit

Ce type doit etre pense comme **simulation d'evaluation**.

## 14. Priorites de developpement

### Phase 1

- ajouter l'entree Cockpit
- creer `editeur_exercices_budget.html`
- creer le listing + CRUD + publier / depublier
- creer 4 types de base :
  - `tri_revenus_depenses`
  - `tri_depenses_types`
  - `calcul_solde_budget`
  - `budget_complet`

### Phase 2

- ajouter `choix_epargne`
- ajouter `comparaison_credit`
- ajouter `calcul_taux_endettement`
- ajouter la calculatrice integree

### Phase 3

- bibliotheque de prompts JSON
- import intelligent robuste
- page eleve `budget_cap.html`
- classement final dans `PSE/index.html`

## 15. Decision de conception recommandee

La meilleure architecture n'est pas de multiplier des pages HTML budget isolees comme les anciens `CAPbudget*.html`.

La meilleure architecture est :

- **un editeur Budget unique cote prof**
- **une page Budget unique cote eleve**
- **des sous-types internes**
- **un schema JSON commun**
- **un rendu pilote par `budgetType`**

Cela donne un systeme maintenable, extensible, et coherent avec le Cockpit actuel.

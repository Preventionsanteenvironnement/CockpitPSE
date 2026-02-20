# Prompt-template : Generer un mini-cas D2 "Le budget" (CAP PSE)

> **Mode d'emploi** : Copiez tout le contenu ci-dessous et collez-le dans ChatGPT (ou autre IA). Modifiez la section [PARAMETRES A PERSONNALISER] pour obtenir un scenario different a chaque fois. Le JSON genere sera directement importable dans editeur_eval.html.

---

## DEBUT DU PROMPT A COPIER

Tu es un concepteur d'evaluations pour l'Education nationale francaise. Tu vas creer un mini-cas au format JSON pour le Module D2 "Le budget" du programme de Prevention Sante Environnement (PSE) en CAP.

### PROGRAMME OFFICIEL (Bulletin Officiel - Education Nationale)

Le Module D2 "Le budget" comporte 4 objectifs cibles avec leurs notions cles :

**Objectif 1 — Identifier les categories de recettes et depenses d'un budget**
Notions : Revenus lies au travail, Revenus sociaux, Depense incompressible

**Objectif 2 — Enoncer la principale regle de gestion d'un budget**
Notions : Budget equilibre, Deficitaire, Excedentaire, Equilibre

**Objectif 3 — Expliquer le principe de l'epargne et les criteres de choix**
Notions : Interets, Epargne de precaution

**Objectif 4 — Expliquer les avantages et inconvenients d'un credit a la consommation**
Notions : Mensualites, TAEG, Surendettement, Retractation, Engagement reciproque

### CATEGORIES DE DEPENSES (terminologie du programme)
- **Incompressibles** (charges fixes, obligatoires) : loyer, assurances, credits en cours, transport domicile-travail, factures (eau, electricite)
- **Courantes** (necessaires mais ajustables) : alimentation, telephone, abonnements
- **Occasionnelles** (non essentielles, variables) : loisirs, vetements, sorties, cadeaux

### FORMULES ATTENDUES
- Solde = Total des revenus - Total des depenses
- Taux d'endettement = (Total des mensualites de credits / Total des revenus) x 100
- Seuil de risque : moins de 33% = OK, au-dela de 33% = risque de surendettement
- Nombre de mois d'epargne = Montant du projet / Solde mensuel

### TYPES D'EPARGNE A CONNAITRE
- Livret A : ouverture 10 euros, plafond 22 950 euros, taux 3%, disponibilite immediate, tout age
- Livret jeune : ouverture 10 euros, plafond 1 600 euros, taux minimum 3%, disponibilite immediate, 12-25 ans
- LDDS : ouverture 15 euros, plafond 12 000 euros, taux 3%, disponibilite immediate, majeurs
- PEL : versement initial 225 euros, plafond 61 200 euros, taux 2%, bloque 4 ans, projet immobilier
- LEP : ouverture 30 euros, plafond 10 000 euros, taux 5%, disponibilite immediate, revenus modestes

### COMPETENCES EVALUEES
- C1 : Identifier, reperer (questions simples de reconnaissance)
- C2 : Calculer, appliquer une formule (questions de calcul)
- C3 : Analyser (questions de comprehension)
- C4 : Proposer des solutions (questions ouvertes sur les leviers budgetaires)
- C5 : Argumenter, choisir (questions de choix justifie)

---

### [PARAMETRES A PERSONNALISER]

Modifie les parametres suivants pour chaque nouveau scenario :

- **Prenom du personnage** : [ex: Amira, Lucas, Inaya, Rayan, Jade, Enzo...]
- **Age** : [17-25 ans]
- **Metier/formation** : [ex: apprentie coiffeuse, apprenti boulanger, aide-soignante en formation, stagiaire en restauration...]
- **Situation de logement** : [ex: vit seul(e) dans un studio, partage un appartement, vit chez ses parents...]
- **Salaire net mensuel** : [entre 600 et 1400 euros]
- **Type de revenu social** : [APL, bourse, prime d'activite, allocation...]
- **Montant du revenu social** : [entre 80 et 300 euros]
- **Projet a financer** : [ex: permis de conduire, ordinateur portable, formation complementaire, equipement professionnel...]
- **Cout du projet** : [entre 200 et 1000 euros]
- **Credit existant** : [ex: credit telephone, credit moto, credit mobilier...] avec mensualite et duree restante
- **Nombre de postes de depenses** : [entre 7 et 10 postes]

---

### FORMAT JSON A RESPECTER STRICTEMENT

Le JSON doit avoir cette structure exacte :

```json
{
  "titre": "Mini cas D2 — Le budget de [Prenom] : situation, calculs et choix",
  "bareme": 20,
  "documents": [
    {
      "id": "doc_situation",
      "type": "texte",
      "titre": "Situation de [Prenom]",
      "contenu": "Texte narratif presentant le personnage, sa situation, ses revenus et son projet."
    },
    {
      "id": "doc_rappels",
      "type": "texte",
      "titre": "Rappels utiles",
      "contenu": "Definitions et formules : revenus/depenses, categories de depenses, solde, taux d'endettement, epargne."
    },
    {
      "id": "doc_chiffres",
      "type": "texte",
      "titre": "Budget mensuel de [Prenom]",
      "contenu": "Liste detaillee des revenus et depenses avec montants exacts, plus 2 offres de credit."
    },
    {
      "id": "doc_epargne",
      "type": "texte",
      "titre": "Les types d'epargne",
      "contenu": "Tableau des livrets d'epargne (Livret A, Livret jeune, LDDS, PEL, LEP) avec criteres. Definition de l'epargne de precaution."
    }
  ],
  "questions": [
    {
      "type": "TYPE",
      "consigne": "Texte de la question",
      "reponse": "VALEUR",
      "points": N,
      "competence": "CX",
      "correction": "Reponse detaillee avec calcul si applicable",
      "explication": "Rappel pedagogique de la notion",
      "document_id": "doc_xxx"
    }
  ]
}
```

### TYPES DE QUESTIONS DISPONIBLES

1. **"nombre"** : l'eleve saisit un nombre
   - Champs : `reponse` (nombre), `tolerance` (0 par defaut)

2. **"mot"** : l'eleve saisit un mot
   - Champs : `reponse` (chaine de caracteres, en minuscules sans accent)

3. **"vf"** : vrai ou faux
   - Champs : `reponse` (true ou false)
   - La consigne DOIT commencer par "Determiner si l'affirmation suivante est vraie ou fausse : "

4. **"qcm_multi"** : QCM a choix multiples (plusieurs bonnes reponses possibles)
   - Champs : `choix` (tableau de chaines), `reponse` (tableau d'index des bonnes reponses, base 0)

5. **"ordonner"** : remettre des elements dans l'ordre
   - Champs : `elements` (tableau de chaines DANS L'ORDRE CORRECT)
   - L'application les melangera automatiquement

### CONTRAINTES OBLIGATOIRES

**Structure :**
- Exactement 4 documents (doc_situation, doc_rappels, doc_chiffres, doc_epargne)
- Entre 16 et 20 questions
- Total des points = exactement 20
- Chaque question a 1 ou 2 points (pas plus)

**Couverture des 4 objectifs :**
- Objectif 1 (revenus/depenses) : minimum 3 questions
- Objectif 2 (gestion budget, solde) : minimum 5 questions
- Objectif 3 (epargne) : minimum 2 questions
- Objectif 4 (credit) : minimum 3 questions

**Coherence des calculs (TRES IMPORTANT) :**
- Tous les montants doivent etre des nombres entiers (pas de centimes)
- Le solde doit etre POSITIF (budget excedentaire) mais faible (entre 15 et 80 euros)
- Le taux d'endettement avec le credit existant doit etre INFERIEUR a 33%
- Le taux d'endettement avec credit existant + offre A doit rester INFERIEUR a 33%
- Le nombre de mois d'epargne (projet / solde) doit etre un nombre ENTIER (pas de decimales)
- Le cout total de chaque offre de credit = mensualite x nombre de mois (verifier !)
- L'offre A doit etre moins couteuse que l'offre B (mais mensualites plus elevees)
- VERIFIER chaque calcul avant de finaliser le JSON

**Progression pedagogique des questions :**
1. Identifier les revenus (QCM multi)
2. Calculer le total des revenus (nombre)
3. Identifier les depenses incompressibles (QCM multi)
4. Calculer le total des depenses incompressibles (nombre)
5. Identifier les depenses occasionnelles (QCM multi)
6. Calculer le total de toutes les depenses (nombre)
7. Calculer le solde (nombre)
8. Nommer le type de budget (mot)
9. Calculer le taux d'endettement (nombre, 2pts)
10. V/F sur le seuil de surendettement
11. Calculer les mois d'epargne (nombre)
12. Choisir l'epargne adaptee au profil (QCM multi)
13. V/F sur l'epargne de precaution
14. Calculer le surcout du credit A (nombre)
15. Calculer le nouveau taux d'endettement avec credit A (nombre, 2pts)
16. V/F sur la comparaison des credits
17. Proposer des solutions d'amelioration du budget (QCM multi)
18. Ordonner les etapes de la demarche budgetaire (ordonner)

**Texte :**
- Pas d'accents dans le JSON (utiliser "e" au lieu de "e" accent, "a" au lieu de "a" accent, etc.)
- Pas de caracteres speciaux (€ → "euros")
- Les sauts de ligne dans "contenu" se font avec \n

---

### EXEMPLE COMPLET DE REFERENCE

Voici un exemple complet et valide. Utilise-le comme modele de reference pour la structure, le style des questions, et le niveau de detail attendu. CHANGE le personnage, les chiffres, le metier, le projet et les montants.

```json
{
  "titre": "Mini cas D2 — Le budget de Yanis : situation, calculs et choix",
  "bareme": 20,
  "documents": [
    {
      "id": "doc_situation",
      "type": "texte",
      "titre": "Situation de Yanis",
      "contenu": "Yanis, 18 ans, est apprenti en carrosserie dans un garage automobile. Il vit seul dans un studio et percoit un salaire mensuel net de 760 euros. Il beneficie egalement d'une aide au logement (APL) de 180 euros par mois. Yanis souhaite passer son permis de conduire pour se rendre plus facilement a son travail. Le cout total de la formation au permis B est de 360 euros (tarif reduit par son CFA). Il se demande comment organiser son budget pour atteindre cet objectif."
    },
    {
      "id": "doc_rappels",
      "type": "texte",
      "titre": "Rappels utiles",
      "contenu": "REVENUS ET DEPENSES\nLes revenus (ou recettes) sont les sommes percues chaque mois (salaire, aides, allocations).\nLes depenses sont les sommes payees chaque mois.\n\nCATEGORIES DE DEPENSES\n- Incompressibles (fixes et obligatoires) : loyer, assurance, transport domicile-travail, remboursement de credit\n- Courantes (necessaires mais ajustables) : alimentation, telephone, abonnements\n- Occasionnelles (non essentielles, variables) : loisirs, vetements, sorties\n\nSOLDE MENSUEL\nSolde = Total des revenus - Total des depenses\nSi solde > 0 : budget excedentaire\nSi solde < 0 : budget deficitaire\nSi solde = 0 : budget equilibre\n\nTAUX D'ENDETTEMENT\nTaux d'endettement = (Total des mensualites de credits / Total des revenus) x 100\nResultat en pourcentage, a arrondir a l'entier.\nAu-dela de 33%, on considere un risque de surendettement.\n\nEPARGNE\nL'epargne correspond au solde positif mis de cote chaque mois en vue d'un projet."
    },
    {
      "id": "doc_chiffres",
      "type": "texte",
      "titre": "Budget mensuel de Yanis",
      "contenu": "REVENUS\nSalaire net : 760 euros\nAPL : 180 euros\n\nDEPENSES\nLoyer : 420 euros\nForfait telephone : 25 euros\nTransport (abonnement bus) : 55 euros\nAssurance habitation : 30 euros\nAlimentation : 180 euros\nLoisirs (sorties, sport) : 60 euros\nVetements : 40 euros\nAbonnement streaming : 15 euros\nCredit scooter (mensualite) : 85 euros (reste 6 mois)\n\nOFFRES DE CREDIT POUR LE PERMIS\nOffre A : 80 euros par mois pendant 5 mois (cout total : 400 euros)\nOffre B : 45 euros par mois pendant 9 mois (cout total : 405 euros)"
    },
    {
      "id": "doc_epargne",
      "type": "texte",
      "titre": "Les types d'epargne",
      "contenu": "DIFFERENTS TYPES D'EPARGNE\n\nLivret A : ouverture 10 euros, plafond 22 950 euros, taux 3%, disponibilite immediate, accessible a tout age.\n\nLivret jeune : ouverture 10 euros, plafond 1 600 euros, taux minimum 3%, disponibilite immediate, reserve aux 12-25 ans residant en France.\n\nLDDS (Livret de developpement durable et solidaire) : ouverture 15 euros, plafond 12 000 euros, taux 3%, disponibilite immediate, reserve aux majeurs.\n\nPlan epargne logement (PEL) : versement initial 225 euros minimum, plafond 61 200 euros, taux 2%, montant bloque 4 ans, pour un projet immobilier.\n\nLivret d'epargne populaire (LEP) : ouverture 30 euros, plafond 10 000 euros, taux 5%, disponibilite immediate, reserve aux revenus modestes.\n\nEPARGNE DE PRECAUTION\nL'epargne de precaution est une somme mise de cote pour faire face aux depenses imprevues (panne, reparation, sante). Elle doit etre disponible immediatement."
    }
  ],
  "questions": [
    {
      "type": "qcm_multi",
      "consigne": "Identifier les revenus de Yanis parmi les elements suivants.",
      "choix": ["Salaire net de 760 euros", "Loyer de 420 euros", "APL de 180 euros", "Credit scooter de 85 euros", "Alimentation de 180 euros"],
      "reponse": [0, 2],
      "points": 1,
      "competence": "C1",
      "correction": "Les revenus sont les sommes percues : le salaire net (760 euros) et l'APL (180 euros). Le loyer, le credit et l'alimentation sont des depenses.",
      "explication": "Un revenu est une somme qui entre dans le budget. Une depense est une somme qui sort du budget.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le total des revenus mensuels de Yanis (en euros).",
      "reponse": 940,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Total revenus = Salaire + APL = 760 + 180 = 940 euros.",
      "explication": "On additionne toutes les sommes percues chaque mois.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "qcm_multi",
      "consigne": "Identifier les depenses incompressibles de Yanis parmi les elements suivants.",
      "choix": ["Loyer", "Alimentation", "Transport (bus)", "Loisirs", "Assurance habitation", "Credit scooter"],
      "reponse": [0, 2, 4, 5],
      "points": 1,
      "competence": "C2",
      "correction": "Les depenses incompressibles sont : loyer (420), transport (55), assurance habitation (30) et credit scooter (85). Ce sont des charges fixes et obligatoires.",
      "explication": "Les depenses incompressibles sont celles qu'on ne peut pas supprimer : obligations contractuelles, logement, transport pour le travail, remboursement de credit.",
      "document_id": "doc_rappels"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le total des depenses incompressibles de Yanis (en euros).",
      "reponse": 590,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Incompressibles = Loyer + Transport + Assurance + Credit scooter = 420 + 55 + 30 + 85 = 590 euros.",
      "explication": "On additionne uniquement les depenses fixes et obligatoires.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "qcm_multi",
      "consigne": "Identifier les depenses occasionnelles de Yanis parmi les elements suivants.",
      "choix": ["Alimentation", "Loisirs", "Loyer", "Vetements", "Forfait telephone"],
      "reponse": [1, 3],
      "points": 1,
      "competence": "C1",
      "correction": "Les depenses occasionnelles sont les loisirs (60 euros) et les vetements (40 euros). Ce sont des depenses non essentielles et variables.",
      "explication": "Les depenses occasionnelles peuvent etre reduites ou supprimees sans mettre en danger les besoins fondamentaux.",
      "document_id": "doc_rappels"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le total de toutes les depenses mensuelles de Yanis (en euros).",
      "reponse": 910,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Total depenses = 420 + 25 + 55 + 30 + 180 + 60 + 40 + 15 + 85 = 910 euros.",
      "explication": "On additionne toutes les depenses sans exception, y compris le credit en cours.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le solde mensuel de Yanis (en euros).",
      "reponse": 30,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Solde = Revenus - Depenses = 940 - 910 = 30 euros.",
      "explication": "Le solde represente ce qui reste apres avoir paye toutes les depenses du mois.",
      "document_id": "doc_rappels"
    },
    {
      "type": "mot",
      "consigne": "Nommer en un mot le type de budget de Yanis (son solde est positif).",
      "reponse": "excedentaire",
      "points": 1,
      "competence": "C1",
      "correction": "Le budget de Yanis est excedentaire car son solde est positif (30 euros). Il gagne plus qu'il ne depense.",
      "explication": "Solde positif = excedentaire. Solde negatif = deficitaire. Solde nul = equilibre.",
      "document_id": "doc_rappels"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le taux d'endettement actuel de Yanis (en pourcentage, arrondi a l'entier).",
      "reponse": 9,
      "tolerance": 0,
      "points": 2,
      "competence": "C2",
      "correction": "Taux d'endettement = (85 / 940) x 100 = 9,04 soit 9% (arrondi a l'entier).",
      "explication": "On divise le total des mensualites de credits (ici 85 euros pour le scooter) par le total des revenus (940), puis on multiplie par 100.",
      "document_id": "doc_rappels"
    },
    {
      "type": "vf",
      "consigne": "Determiner si l'affirmation suivante est vraie ou fausse : Le taux d'endettement de Yanis depasse le seuil de risque de surendettement (33%).",
      "reponse": false,
      "points": 1,
      "competence": "C2",
      "correction": "Faux. Son taux d'endettement est de 9%, bien en dessous du seuil de 33%.",
      "explication": "Le seuil de surendettement est fixe a 33%. A 9%, Yanis est loin de cette limite.",
      "document_id": "doc_rappels"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le nombre de mois necessaires a Yanis pour epargner 360 euros (cout du permis) avec son solde mensuel actuel.",
      "reponse": 12,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Nombre de mois = 360 / 30 = 12 mois.",
      "explication": "Son solde est de 30 euros par mois. Pour atteindre 360 euros, il faut 360 divise par 30 = 12 mois d'epargne.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "qcm_multi",
      "consigne": "Identifier le ou les types d'epargne adaptes a Yanis (18 ans, revenus modestes, besoin de disponibilite immediate) parmi les suivants.",
      "choix": ["Livret A", "Plan epargne logement (PEL)", "Livret jeune", "Livret d'epargne populaire (LEP)"],
      "reponse": [0, 2, 3],
      "points": 1,
      "competence": "C5",
      "correction": "Yanis peut choisir le Livret A (accessible a tous, disponible immediatement), le Livret jeune (il a 18 ans, donc moins de 25 ans, disponible immediatement) ou le LEP (revenus modestes, meilleur taux a 5%). Le PEL ne convient pas car l'argent est bloque 4 ans.",
      "explication": "Pour choisir une epargne, on verifie : la disponibilite de l'argent, le taux d'interet, et les conditions d'ouverture (age, revenus).",
      "document_id": "doc_epargne"
    },
    {
      "type": "vf",
      "consigne": "Determiner si l'affirmation suivante est vraie ou fausse : L'epargne de precaution sert a financer des projets de vacances.",
      "reponse": false,
      "points": 1,
      "competence": "C1",
      "correction": "Faux. L'epargne de precaution sert a faire face aux depenses imprevues (panne, reparation, probleme de sante), pas a financer des loisirs ou des vacances.",
      "explication": "L'epargne de precaution est une reserve d'argent pour les coups durs, pas pour les projets personnels.",
      "document_id": "doc_epargne"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le cout supplementaire de l'offre de credit A par rapport au prix comptant du permis (en euros).",
      "reponse": 40,
      "tolerance": 0,
      "points": 1,
      "competence": "C2",
      "correction": "Cout supplementaire offre A = 400 - 360 = 40 euros.",
      "explication": "Le permis coute 360 euros comptant. L'offre A coute 400 euros au total (80 x 5 mois). La difference est le cout du credit.",
      "document_id": "doc_chiffres"
    },
    {
      "type": "nombre",
      "consigne": "Calculer le taux d'endettement de Yanis s'il souscrit l'offre de credit A en plus de son credit scooter (en pourcentage, arrondi a l'entier).",
      "reponse": 18,
      "tolerance": 0,
      "points": 2,
      "competence": "C2",
      "correction": "Nouveau taux = ((85 + 80) / 940) x 100 = (165 / 940) x 100 = 17,55 soit 18% (arrondi a l'entier).",
      "explication": "On additionne toutes les mensualites de credits (scooter 85 + permis 80 = 165 euros), puis on applique la formule du taux d'endettement.",
      "document_id": "doc_rappels"
    },
    {
      "type": "vf",
      "consigne": "Determiner si l'affirmation suivante est vraie ou fausse : L'offre de credit B est moins couteuse au total que l'offre A.",
      "reponse": false,
      "points": 1,
      "competence": "C1",
      "correction": "Faux. L'offre A coute 400 euros au total (80 x 5) contre 405 euros pour l'offre B (45 x 9). L'offre A est moins couteuse.",
      "explication": "Pour comparer deux credits, on calcule le cout total de chacun (mensualite x nombre de mois).",
      "document_id": "doc_chiffres"
    },
    {
      "type": "qcm_multi",
      "consigne": "Choisir les solutions qui permettraient a Yanis de financer son permis plus rapidement sans prendre de credit.",
      "choix": ["Reduire ses depenses de loisirs", "Augmenter son loyer", "Chercher des heures supplementaires", "Supprimer son assurance habitation", "Reduire son budget vetements"],
      "reponse": [0, 2, 4],
      "points": 1,
      "competence": "C4",
      "correction": "Les solutions viables sont : reduire les loisirs (depense occasionnelle), chercher des heures supplementaires (augmenter les revenus) et reduire le budget vetements (depense occasionnelle). On ne peut pas supprimer l'assurance (obligatoire) ni augmenter le loyer.",
      "explication": "Pour ameliorer un budget, on peut agir sur deux leviers : reduire les depenses non essentielles ou augmenter les revenus. Les depenses incompressibles ne doivent pas etre supprimees.",
      "document_id": "doc_rappels"
    },
    {
      "type": "ordonner",
      "consigne": "Ordonner les etapes de la demarche budgetaire, de la premiere a la derniere.",
      "elements": ["Lister tous ses revenus mensuels", "Lister et classer toutes ses depenses", "Calculer le solde mensuel", "Fixer un objectif d'epargne", "Ajuster ses depenses si necessaire"],
      "points": 1,
      "competence": "C2",
      "correction": "L'ordre correct est : 1. Lister les revenus, 2. Lister et classer les depenses, 3. Calculer le solde, 4. Fixer un objectif d'epargne, 5. Ajuster les depenses si necessaire.",
      "explication": "La demarche budgetaire commence toujours par un etat des lieux (revenus puis depenses), puis le calcul du solde permet de savoir si un objectif d'epargne est realisable, et enfin on ajuste.",
      "document_id": null
    }
  ]
}
```

### CHECKLIST FINALE (a verifier avant de fournir le JSON)

- [ ] Le JSON est syntaxiquement valide (pas de virgule manquante, pas de guillemet oublie)
- [ ] Le total des points = exactement 20
- [ ] Le nombre de questions est entre 16 et 20
- [ ] Les 4 objectifs du programme sont couverts
- [ ] Le solde est positif et le budget est excedentaire
- [ ] Le nombre de mois d'epargne est un entier (pas de decimale)
- [ ] Le taux d'endettement actuel < 33%
- [ ] Le taux d'endettement avec offre A < 33%
- [ ] Le cout total offre A < cout total offre B
- [ ] Cout total offre A = mensualite A x nombre de mois A (verifie)
- [ ] Cout total offre B = mensualite B x nombre de mois B (verifie)
- [ ] Total depenses = somme de TOUTES les depenses (y compris credit)
- [ ] Solde = revenus - depenses (verifie)
- [ ] Taux endettement = (credits / revenus) x 100 (verifie, arrondi a l'entier)
- [ ] Tous les montants sont des nombres entiers (pas de centimes)
- [ ] Pas d'accents dans les textes du JSON
- [ ] Le personnage, les chiffres et la situation sont DIFFERENTS de l'exemple de reference

Genere maintenant un mini-cas complet avec les parametres personnalises ci-dessus. Fournis UNIQUEMENT le JSON brut, sans commentaires avant ou apres.

## FIN DU PROMPT A COPIER

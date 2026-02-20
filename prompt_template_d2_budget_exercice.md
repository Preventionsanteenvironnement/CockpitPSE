# Prompt-template : Generer une etude de cas D2 "Le budget" (CAP PSE — Exercice)

> **Mode d'emploi** : Copiez tout le contenu ci-dessous et collez-le dans ChatGPT (ou autre IA). Modifiez la section [PARAMETRES A PERSONNALISER] pour obtenir un scenario different a chaque fois. Le JSON genere sera directement importable dans editeur_exercices.html (type "Etude de cas").

---

## DEBUT DU PROMPT A COPIER

Tu es un concepteur d'exercices pedagogiques pour l'Education nationale francaise. Tu vas creer une etude de cas au format JSON pour le Module D2 "Le budget" du programme de Prevention Sante Environnement (PSE) en CAP.

### PROGRAMME OFFICIEL (Bulletin Officiel — Module D2 "Le budget")

4 objectifs cibles avec leurs notions cles :

**Objectif 1 — Identifier les categories de recettes et depenses d'un budget**
Notions : Revenus lies au travail, Revenus sociaux, Depense incompressible, Depense courante, Depense occasionnelle

**Objectif 2 — Enoncer la principale regle de gestion d'un budget**
Notions : Budget equilibre, Budget deficitaire, Budget excedentaire, Solde mensuel

**Objectif 3 — Expliquer le principe de l'epargne et les criteres de choix**
Notions : Livret A, Livret jeune, LEP, PEL, Interets, Epargne de precaution

**Objectif 4 — Expliquer les avantages et inconvenients d'un credit a la consommation**
Notions : Mensualites, TAEG, Surendettement, Cout total du credit, Taux d'endettement

### CATEGORIES DE DEPENSES (terminologie du programme)
- **Incompressibles** (charges fixes, obligatoires) : loyer, assurances, credits en cours, transport domicile-travail, factures (eau, electricite)
- **Courantes** (necessaires mais ajustables) : alimentation, telephone, abonnements, hygiene
- **Occasionnelles** (non essentielles, variables) : loisirs, vetements, sorties, cadeaux

### FORMULES UTILES
- Solde = Total des revenus - Total des depenses
- Taux d'endettement = (Total mensualites de credits / Total revenus) x 100
- Seuil de surendettement : au-dela de 33%
- Nombre de mois d'epargne = Montant du projet / Solde mensuel
- Cout du credit = Cout total rembourse - Prix comptant

### TYPES D'EPARGNE A CONNAITRE
- Livret A : taux 3%, plafond 22 950 euros, disponible immediatement, tout age
- Livret jeune : taux minimum 3%, plafond 1 600 euros, disponible immediatement, 12-25 ans
- LDDS : taux 3%, plafond 12 000 euros, disponible immediatement, majeurs
- PEL : taux 2%, plafond 61 200 euros, bloque 4 ans, projet immobilier
- LEP : taux 5%, plafond 10 000 euros, disponible immediatement, revenus modestes

---

### [PARAMETRES A PERSONNALISER]

Modifie ces parametres pour chaque nouveau scenario :

- **Prenom** : [ex: Amira, Lucas, Inaya, Rayan, Jade, Enzo, Lina, Killian...]
- **Age** : [17-25 ans]
- **Metier/formation** : [ex: apprentie coiffeuse, apprenti boulanger, aide-soignante, stagiaire en restauration...]
- **Situation de logement** : [ex: vit seul(e) en studio, colocation, vit chez ses parents...]
- **Salaire net mensuel** : [entre 600 et 1400 euros]
- **Aide sociale** : [APL, bourse, prime d'activite...] + montant
- **Projet a financer** : [permis, ordinateur, formation, equipement pro...] + cout
- **Credit existant** : [credit telephone, scooter, mobilier...] + mensualite
- **Nombre de postes de depenses** : [7 a 10]

---

### FORMAT JSON A RESPECTER STRICTEMENT

ATTENTION : Ce JSON est destine a l'editeur d'exercices (type "Etude de cas"), PAS a l'editeur d'evaluations. Le format est different.

```json
{
  "consigne": "Lisez attentivement la situation de [Prenom] puis repondez aux questions.",
  "scenario": "Texte complet du scenario incluant :\n- Presentation du personnage (prenom, age, metier, logement)\n- Ses revenus (salaire + aide sociale)\n- Son projet et son cout\n\nBUDGET MENSUEL :\n\nREVENUS :\n- Salaire net : XXX euros\n- [Aide sociale] : XXX euros\nTotal revenus : XXX euros\n\nDEPENSES :\n- Loyer : XXX euros\n- [Poste 2] : XXX euros\n- [Poste 3] : XXX euros\n- [...]\n- Credit [objet] (mensualite) : XXX euros\nTotal depenses : XXX euros\n\nOFFRES DE CREDIT POUR [LE PROJET] :\n- Offre A : XXX euros/mois pendant X mois (cout total : XXX euros)\n- Offre B : XXX euros/mois pendant X mois (cout total : XXX euros)\n\nTYPES D'EPARGNE DISPONIBLES :\n- Livret A : taux 3%, disponible immediatement, tout age\n- Livret jeune : taux min 3%, disponible immediatement, 12-25 ans\n- LEP : taux 5%, disponible immediatement, revenus modestes\n- PEL : taux 2%, bloque 4 ans, projet immobilier",
  "questions": [
    {
      "question": "Texte de la question",
      "type": "qcm",
      "choix": ["Choix A", "Choix B", "Choix C", "Choix D"],
      "correct": 0
    },
    {
      "question": "Texte de la question",
      "type": "texte",
      "reponse": "Reponse attendue"
    }
  ]
}
```

### TYPES DE QUESTIONS DISPONIBLES

Il n'y a que 2 types possibles :

1. **"qcm"** : Question a choix multiples (une seule bonne reponse)
   - Champs obligatoires : `choix` (tableau de chaines), `correct` (index 0-based de la bonne reponse)
   - ATTENTION : `correct` est un INDEX (0 pour le 1er choix, 1 pour le 2e, etc.)
   - Proposer 3 a 4 choix par question

2. **"texte"** : Reponse libre (l'eleve tape sa reponse)
   - Champ obligatoire : `reponse` (chaine de caracteres avec la reponse attendue)
   - Utiliser pour les calculs, les definitions, les explications courtes
   - La reponse doit etre courte et claire (1 mot, 1 nombre, ou 1 phrase courte)

### CONTRAINTES OBLIGATOIRES

**Structure :**
- Le champ `scenario` contient TOUT le contexte (pas de documents separes)
- Le scenario doit inclure : la situation, le budget complet (revenus + depenses avec montants), les offres de credit, et les types d'epargne
- Entre 8 et 14 questions
- Alterner questions QCM et questions texte pour varier

**Couverture des 4 objectifs du programme :**
- Objectif 1 (revenus/depenses) : minimum 2 questions
- Objectif 2 (gestion budget, solde) : minimum 3 questions
- Objectif 3 (epargne) : minimum 2 questions
- Objectif 4 (credit) : minimum 2 questions

**Progression pedagogique suggeree des questions :**
1. Identifier le total des revenus (texte — calcul)
2. Classer une depense dans sa categorie (qcm)
3. Calculer le total des depenses (texte — calcul)
4. Calculer le solde mensuel (texte — calcul)
5. Qualifier le type de budget (qcm : excedentaire/deficitaire/equilibre)
6. Calculer le taux d'endettement actuel (texte — calcul)
7. Dire si le taux depasse le seuil de 33% (qcm : oui/non + justification)
8. Calculer le nombre de mois pour epargner le projet (texte — calcul)
9. Choisir l'epargne adaptee au profil (qcm)
10. Expliquer a quoi sert l'epargne de precaution (texte)
11. Calculer le surcout du credit A (texte — calcul)
12. Comparer les 2 offres de credit (qcm : laquelle est la moins chere)
13. Proposer une solution pour ameliorer le budget (texte ou qcm)

**Coherence des calculs (TRES IMPORTANT) :**
- Tous les montants doivent etre des nombres entiers (pas de centimes)
- Le solde doit etre POSITIF (budget excedentaire) mais faible (entre 15 et 80 euros)
- Le taux d'endettement avec le credit existant INFERIEUR a 33%
- Le nombre de mois d'epargne doit tomber juste (nombre entier, pas de decimale)
- Le cout total de chaque offre = mensualite x nombre de mois (VERIFIER)
- L'offre A doit etre moins couteuse au total que l'offre B
- VERIFIER chaque calcul avant de generer le JSON

**Texte :**
- Pas d'accents dans le JSON (utiliser "e" au lieu de "e accent", "a" au lieu de "a accent", etc.)
- Pas de caracteres speciaux (pas de symbole euro → ecrire "euros")
- Les sauts de ligne dans le scenario se font avec \n

---

### EXEMPLE COMPLET DE REFERENCE

Voici un exemple complet et valide. Utilise-le comme modele pour la structure et le style. CHANGE le personnage, les chiffres, le metier, le projet et les montants.

```json
{
  "consigne": "Lisez attentivement la situation de Yanis puis repondez aux questions.",
  "scenario": "Yanis, 18 ans, est apprenti en carrosserie dans un garage automobile. Il vit seul dans un studio et percoit un salaire mensuel net de 760 euros. Il beneficie egalement d'une aide au logement (APL) de 180 euros par mois. Yanis souhaite passer son permis de conduire pour se rendre plus facilement a son travail. Le cout total de la formation au permis B est de 360 euros (tarif reduit par son CFA).\n\nBUDGET MENSUEL DE YANIS\n\nREVENUS :\n- Salaire net : 760 euros\n- APL : 180 euros\nTotal revenus : 940 euros\n\nDEPENSES :\n- Loyer : 420 euros\n- Forfait telephone : 25 euros\n- Transport (abonnement bus) : 55 euros\n- Assurance habitation : 30 euros\n- Alimentation : 180 euros\n- Loisirs (sorties, sport) : 60 euros\n- Vetements : 40 euros\n- Abonnement streaming : 15 euros\n- Credit scooter (mensualite) : 85 euros (reste 6 mois)\nTotal depenses : 910 euros\n\nOFFRES DE CREDIT POUR LE PERMIS :\n- Offre A : 80 euros/mois pendant 5 mois (cout total : 400 euros)\n- Offre B : 45 euros/mois pendant 9 mois (cout total : 405 euros)\n\nTYPES D'EPARGNE DISPONIBLES :\n- Livret A : taux 3%, disponible immediatement, accessible a tout age\n- Livret jeune : taux minimum 3%, disponible immediatement, reserve aux 12-25 ans\n- LEP : taux 5%, disponible immediatement, reserve aux revenus modestes\n- PEL : taux 2%, bloque 4 ans, pour un projet immobilier\n\nRAPPELS :\n- Depenses incompressibles = charges fixes obligatoires (loyer, assurance, transport travail, credit)\n- Depenses courantes = necessaires mais ajustables (alimentation, telephone, abonnements)\n- Depenses occasionnelles = non essentielles (loisirs, vetements)\n- Solde = Revenus - Depenses\n- Taux d'endettement = (mensualites credits / revenus) x 100\n- Seuil de surendettement = 33%",
  "questions": [
    {
      "question": "Quel est le total des revenus mensuels de Yanis ?",
      "type": "texte",
      "reponse": "940 euros"
    },
    {
      "question": "Parmi les depenses suivantes, laquelle est une depense incompressible ?",
      "type": "qcm",
      "choix": ["Loisirs (sorties, sport)", "Loyer", "Vetements", "Abonnement streaming"],
      "correct": 1
    },
    {
      "question": "Quel est le total de toutes les depenses mensuelles de Yanis ?",
      "type": "texte",
      "reponse": "910 euros"
    },
    {
      "question": "Quel est le solde mensuel de Yanis (revenus - depenses) ?",
      "type": "texte",
      "reponse": "30 euros"
    },
    {
      "question": "Comment qualifie-t-on le budget de Yanis ?",
      "type": "qcm",
      "choix": ["Budget deficitaire", "Budget equilibre", "Budget excedentaire"],
      "correct": 2
    },
    {
      "question": "Quel est le taux d'endettement actuel de Yanis ? (arrondi a l'entier, en %)",
      "type": "texte",
      "reponse": "9%"
    },
    {
      "question": "Le taux d'endettement de Yanis depasse-t-il le seuil de surendettement de 33% ?",
      "type": "qcm",
      "choix": ["Oui, il depasse 33%", "Non, il est en dessous de 33%"],
      "correct": 1
    },
    {
      "question": "Combien de mois Yanis doit-il epargner pour atteindre 360 euros avec son solde actuel ?",
      "type": "texte",
      "reponse": "12 mois"
    },
    {
      "question": "Quel type d'epargne est le plus adapte a Yanis (18 ans, revenus modestes, besoin de disponibilite immediate) ?",
      "type": "qcm",
      "choix": ["Plan epargne logement (PEL)", "Livret jeune", "Aucune epargne n'est adaptee"],
      "correct": 1
    },
    {
      "question": "A quoi sert l'epargne de precaution ?",
      "type": "qcm",
      "choix": ["A financer un projet de vacances", "A faire face aux depenses imprevues (panne, sante)", "A obtenir un meilleur taux d'interet", "A rembourser un credit"],
      "correct": 1
    },
    {
      "question": "Quel est le cout supplementaire de l'offre de credit A par rapport au prix comptant du permis (360 euros) ?",
      "type": "texte",
      "reponse": "40 euros"
    },
    {
      "question": "Quelle offre de credit est la moins couteuse au total ?",
      "type": "qcm",
      "choix": ["Offre A (400 euros au total)", "Offre B (405 euros au total)", "Les deux coutent le meme prix"],
      "correct": 0
    },
    {
      "question": "Quelle solution permettrait a Yanis d'ameliorer son budget sans prendre de credit ?",
      "type": "qcm",
      "choix": ["Supprimer son assurance habitation", "Reduire ses depenses de loisirs et vetements", "Augmenter son loyer", "Arreter de manger"],
      "correct": 1
    }
  ]
}
```

### CHECKLIST FINALE (a verifier avant de fournir le JSON)

- [ ] Le JSON est syntaxiquement valide
- [ ] Le champ "scenario" contient toute la situation, le budget, les offres de credit et les types d'epargne
- [ ] Il y a entre 8 et 14 questions
- [ ] Chaque question a un "type" qui vaut "qcm" ou "texte" (rien d'autre)
- [ ] Pour les QCM : le champ "correct" est un index 0-based valide (pas superieur au nombre de choix - 1)
- [ ] Pour les texte : le champ "reponse" contient une reponse courte et claire
- [ ] Les 4 objectifs du programme sont couverts (revenus/depenses, solde/budget, epargne, credit)
- [ ] Le solde est positif et le budget est excedentaire
- [ ] Le nombre de mois d'epargne est un entier
- [ ] Le taux d'endettement actuel < 33%
- [ ] Cout total offre A = mensualite x mois (verifie)
- [ ] Cout total offre B = mensualite x mois (verifie)
- [ ] Offre A moins couteuse que offre B
- [ ] Solde = revenus - depenses (verifie)
- [ ] Tous les montants sont des nombres entiers
- [ ] Pas d'accents dans le JSON
- [ ] Le personnage et les chiffres sont DIFFERENTS de l'exemple

Genere maintenant une etude de cas complete avec les parametres personnalises ci-dessus. Fournis UNIQUEMENT le JSON brut, sans commentaires avant ou apres.

## FIN DU PROMPT A COPIER

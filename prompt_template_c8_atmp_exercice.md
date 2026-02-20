# Prompt-template : Generer une etude de cas C8 "AT/MP" (Bac Pro PSE — Exercice)

> **Mode d'emploi** : Copiez tout le contenu ci-dessous et collez-le dans ChatGPT (ou autre IA). Modifiez la section [PARAMETRES A PERSONNALISER] pour obtenir un scenario different a chaque fois. Le JSON genere sera directement importable dans editeur_exercices.html (type "Etude de cas").

---

## DEBUT DU PROMPT A COPIER

Tu es un concepteur d'exercices pedagogiques pour l'Education nationale francaise. Tu vas creer une etude de cas au format JSON pour le Module C8 "Declaration et reparation des accidents du travail (AT) et des maladies professionnelles (MP)" du programme de Prevention Sante Environnement (PSE) en Bac Pro.

### PROGRAMME OFFICIEL (Bulletin Officiel — Module C8)

Objectif : Expliquer les demarches a accomplir pour declarer un accident du travail ou une maladie professionnelle et les reparations prevues par la legislation.

4 axes cibles avec leurs notions cles :

**Axe 1 — Differencier AT et MP**
Notions : Accident du travail (action soudaine provoquant une lesion, au temps et lieu de travail), Accident de trajet, Maladie professionnelle (exposition prolongee, tableaux de MP), 3 conditions de l'AT (fait soudain, lesion corporelle, lien avec le travail)

**Axe 2 — Connaitre les demarches de declaration**
Notions : Delai salarie (24 h pour informer l'employeur), Delai employeur (48 h pour declarer a la CPAM), Delai MP (15 jours pour declarer a la CPAM), Certificat medical initial (CMI), Feuille d'accident du travail, Declaration d'accident du travail (DAT)

**Axe 3 — Expliquer l'indemnisation des victimes**
Notions : Prestations en nature (remboursement soins a 100%), Prestations en especes (indemnites journalieres), Salaire journalier de base, Rente d'incapacite, Rentes aux ayants droit

**Axe 4 — Identifier les responsabilites de l'employeur**
Notions : Responsabilite civile (reparer le prejudice, dommages et interets), Responsabilite penale (sanctionner, amende), Faute inexcusable, Obligation de securite de resultat

### DEFINITIONS CLES (terminologie du programme)

- **Accident du travail (AT)** : accident survenu par le fait ou a l'occasion du travail, quelle qu'en soit la cause. Conditions : fait soudain et violent, lesion corporelle, survenu pendant le temps de travail et sur le lieu de travail.
- **Accident de trajet** : accident survenu pendant le trajet aller-retour entre le domicile et le lieu de travail, ou entre le lieu de travail et le lieu de repas habituel.
- **Maladie professionnelle (MP)** : consequence de l'exposition plus ou moins prolongee a un risque lors de l'exercice habituel de la profession. Reconnue si elle figure dans un tableau de MP de la Securite sociale.
- **Prestations en nature** : prise en charge a 100% des frais medicaux, chirurgicaux, pharmaceutiques, reeducation, transport, protheses.
- **Prestations en especes** : compensations financieres versees a la victime (indemnites journalieres, rente d'incapacite, rentes aux ayants droit en cas de deces).
- **Certificat medical initial (CMI)** : document etabli par le medecin constatant les lesions ; il comporte 4 volets (2 pour la CPAM, 1 pour l'employeur, 1 pour le salarie).
- **Faute inexcusable** : l'employeur avait ou aurait du avoir conscience du danger et n'a pas pris les mesures necessaires. La victime obtient une indemnisation complementaire.

### FORMULES DE CALCUL (TRES IMPORTANT)

- Salaire journalier de base = Salaire brut mensuel / 30,42
- Indemnite journaliere (IJ) du 1er au 28e jour = 60% du salaire journalier de base
- Indemnite journaliere (IJ) a partir du 29e jour = 80% du salaire journalier de base
- Total IJ pour un arret = (IJ 60% x nombre de jours de la periode 1) + (IJ 80% x nombre de jours de la periode 2)

ATTENTION aux arrondis : le salaire journalier peut avoir des centimes. Arrondir les IJ a 2 decimales.

### DELAIS REGLEMENTAIRES

| Qui | Action | Delai |
|-----|--------|-------|
| Salarie victime d'AT | Informer l'employeur | 24 heures |
| Employeur | Declarer l'AT a la CPAM (DAT) | 48 heures |
| Medecin | Etablir le certificat medical initial (CMI) | Le jour de la consultation |
| Salarie victime de MP | Declarer a la CPAM | 15 jours apres cessation du travail ou constat |
| CPAM | Decision de reconnaissance de la MP | 120 jours maximum |
| Salarie (faute inexcusable) | Delai de prescription | 2 ans |

### TABLEAU SIMPLIFIE DES RESPONSABILITES

| Type | But | Sanction | Exemple |
|------|-----|----------|---------|
| Responsabilite civile | Reparer le prejudice subi | Dommages et interets | Indemnisation complementaire |
| Responsabilite penale | Punir l'infraction | Amende, peine de prison | Non-respect des regles de securite |

---

### [PARAMETRES A PERSONNALISER]

Modifie ces parametres pour chaque nouveau scenario :

- **Prenom** : [ex: Julie, Marc, Matheo, Arthur, Camille, Noah, Lina, Rayan...]
- **Age** : [18-30 ans]
- **Metier** : [ex: logisticienne, cuisinier, mecanicien, aide-soignante, electricien, carreleur, coiffeuse...]
- **Lieu de travail** : [ex: entrepot, restaurant, garage, hopital, chantier, salon de coiffure...]
- **Type d'accident ou maladie** : [AT: glissade, chute, coupure, choc electrique, brulure / MP: canal carpien, eczema, surdite, TMS, asthme professionnel...]
- **Lesions** : [ex: fracture de la cheville, entorse du poignet, brulure au bras, contusions multiples...]
- **Duree de l'arret de travail** : [entre 10 et 60 jours — choisir pour que le calcul d'IJ couvre les 2 periodes si > 28 jours, ou seulement la 1re si <= 28 jours]
- **Salaire brut mensuel** : [entre 1500 et 2200 euros — choisir un multiple de 30,42 pour un calcul rond, ou accepter les centimes]
- **Circonstances** : [ex: sol mouille, absence de gants, echafaudage instable, gestes repetitifs, produits chimiques sans protection...]
- **Signalement prealable** : [oui/non — si oui, permet de traiter la faute inexcusable]

---

### FORMAT JSON A RESPECTER STRICTEMENT

ATTENTION : Ce JSON est destine a l'editeur d'exercices (type "Etude de cas"), PAS a l'editeur d'evaluations. Le format est different.

```json
{
  "consigne": "Lisez attentivement la situation de [Prenom] puis repondez aux questions.",
  "scenario": "Texte complet du scenario incluant :\n- Presentation du personnage (prenom, age, metier, lieu de travail)\n- Description de l'accident ou de la maladie (circonstances, lesions)\n- Duree de l'arret de travail prescrit par le medecin\n- Salaire brut mensuel\n- Eventuellement : le risque avait ete signale par le CSE ou les salaries\n\nDOCUMENT 1 — DEMARCHES EN CAS D'AT :\n- Le salarie informe son employeur dans les 24 heures\n- Le salarie consulte un medecin qui etablit un certificat medical initial (CMI)\n- L'employeur declare l'AT a la CPAM dans les 48 heures (DAT)\n- L'employeur remet une feuille d'accident au salarie (dispense d'avance de frais)\n\nDOCUMENT 2 — DEMARCHES EN CAS DE MP :\n- Le salarie declare la MP a la CPAM dans les 15 jours\n- Il joint le CMI et l'attestation de salaire\n- La CPAM dispose de 120 jours pour statuer\n\nDOCUMENT 3 — INDEMNISATION :\n- Prestations en nature : remboursement a 100% des frais medicaux\n- Prestations en especes :\n  - Indemnites journalieres (IJ) : compensent la perte de salaire\n  - Calcul : Salaire journalier = Salaire brut / 30,42\n  - Du 1er au 28e jour : IJ = 60% du salaire journalier\n  - A partir du 29e jour : IJ = 80% du salaire journalier\n  - Rente d'incapacite en cas de sequelles\n  - Rentes aux ayants droit en cas de deces\n\nDOCUMENT 4 — RESPONSABILITES DE L'EMPLOYEUR :\n- Responsabilite civile : reparer le prejudice (dommages et interets)\n- Responsabilite penale : sanctionner l'infraction (amende, prison)\n- Faute inexcusable : l'employeur avait conscience du danger et n'a pas agi. La victime obtient une indemnisation complementaire. Delai de prescription : 2 ans.",
  "questions": [
    {
      "question": "Texte de la question",
      "type": "qcm",
      "choix": ["Choix A", "Choix B", "Choix C", "Choix D"],
      "correct": 0,
      "explication": "Explication pedagogique : pourquoi cette reponse est correcte..."
    },
    {
      "question": "Texte de la question",
      "type": "texte",
      "reponse": "Reponse attendue",
      "explication": "Explication pedagogique : rappel de la notion ou du calcul..."
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
- Le champ `scenario` contient TOUT le contexte (situation + documents de reference)
- Le scenario doit inclure : la situation d'accident/maladie, les documents sur les demarches, l'indemnisation et les responsabilites
- Entre 10 et 14 questions
- Alterner questions QCM et questions texte pour varier

**Couverture des 4 axes du programme :**
- Axe 1 (AT vs MP) : minimum 2 questions
- Axe 2 (declaration) : minimum 3 questions
- Axe 3 (indemnisation + calculs) : minimum 3 questions
- Axe 4 (responsabilites) : minimum 2 questions

**Progression pedagogique suggeree des questions :**
1. Qualifier l'evenement : est-ce un AT, un accident de trajet ou une MP ? (qcm)
2. Justifier : citer les elements qui prouvent que c'est un AT ou une MP (texte)
3. Indiquer le delai dont dispose le salarie pour informer l'employeur (texte ou qcm)
4. Indiquer le delai dont dispose l'employeur pour declarer a la CPAM (texte ou qcm)
5. Nommer le document etabli par le medecin (texte)
6. Expliquer la difference entre prestations en nature et prestations en especes (texte ou qcm)
7. Calculer le salaire journalier de base (texte — calcul)
8. Calculer le montant de l'IJ pour la 1re periode (texte — calcul)
9. Si l'arret > 28 jours : calculer l'IJ pour la 2e periode OU le total des IJ (texte — calcul)
10. Identifier le type de responsabilite engage (qcm : civile ou penale)
11. Expliquer la notion de faute inexcusable (texte ou qcm)
12. Proposer des mesures de prevention pour eviter cet accident a l'avenir (texte ou qcm)

**Coherence des calculs (TRES IMPORTANT) :**
- Salaire journalier = Salaire brut / 30,42 (arrondir a 2 decimales)
- IJ 60% = Salaire journalier x 0,60 (arrondir a 2 decimales)
- IJ 80% = Salaire journalier x 0,80 (arrondir a 2 decimales)
- Si l'arret <= 28 jours : total IJ = IJ 60% x nombre de jours d'arret
- Si l'arret > 28 jours : total IJ = (IJ 60% x 28) + (IJ 80% x (nombre de jours - 28))
- VERIFIER chaque calcul avant de generer le JSON
- Pour simplifier : choisir un salaire brut qui donne un salaire journalier avec peu de decimales (ex: 1 800 euros -> 59,17 euros/jour)

**Explications pedagogiques (TRES IMPORTANT) :**
- Chaque question DOIT avoir un champ "explication" avec une explication claire et pedagogique
- L'explication s'affiche a l'eleve apres correction (qu'il ait bon ou faux) pour l'aider a comprendre
- Pour les calculs : rappeler la formule et le detail du calcul
- Pour les QCM : expliquer pourquoi la bonne reponse est correcte et/ou pourquoi les autres sont fausses
- Pour les definitions : rappeler la definition officielle et les criteres cles
- S'appuyer sur le programme officiel et les manuels scolaires (Foucher, Delagrave)

**Texte :**
- Pas d'accents dans le JSON (utiliser "e" au lieu de "e accent", "a" au lieu de "a accent", etc.)
- Pas de caracteres speciaux (pas de symbole euro -> ecrire "euros")
- Les sauts de ligne dans le scenario se font avec \n

---

### EXEMPLE COMPLET DE REFERENCE

Voici un exemple complet et valide. Utilise-le comme modele pour la structure et le style. CHANGE le personnage, les chiffres, le metier, le type d'accident et les circonstances.

```json
{
  "consigne": "Lisez attentivement la situation de Marc puis repondez aux questions.",
  "scenario": "Marc, 22 ans, est mecanicien dans un garage automobile. Un matin, en reparant un vehicule sur un pont elevateur, il recoit un choc au niveau du genou a cause d'une piece metallique qui s'est detachee. Le medecin des urgences diagnostique une fracture du genou et lui prescrit un arret de travail de 42 jours. Le salaire brut mensuel de Marc est de 1 800 euros. Plusieurs salaries avaient deja signale a l'employeur que le pont elevateur etait defectueux.\n\nDOCUMENT 1 — DEMARCHES EN CAS D'ACCIDENT DU TRAVAIL :\n- Le salarie informe son employeur dans les 24 heures suivant l'accident\n- Le salarie consulte un medecin qui etablit un certificat medical initial (CMI) en 4 volets\n- L'employeur declare l'accident a la CPAM dans les 48 heures (Declaration d'Accident du Travail — DAT)\n- L'employeur remet au salarie une feuille d'accident du travail (dispense d'avance des frais medicaux)\n\nDOCUMENT 2 — DEMARCHES EN CAS DE MALADIE PROFESSIONNELLE :\n- Le salarie declare la maladie professionnelle a la CPAM dans les 15 jours suivant la cessation du travail\n- Il joint le certificat medical initial et l'attestation de salaire\n- La CPAM dispose de 120 jours maximum pour reconnaitre ou non la maladie professionnelle\n\nDOCUMENT 3 — INDEMNISATION DES VICTIMES D'AT/MP :\nPrestations en nature : remboursement a 100% des frais medicaux (consultations, medicaments, chirurgie, reeducation, transport)\nPrestations en especes :\n- Indemnites journalieres (IJ) : compensent la perte de salaire pendant l'arret\n- Calcul du salaire journalier de base = Salaire brut mensuel / 30,42\n- Du 1er au 28e jour d'arret : IJ = 60% du salaire journalier de base\n- A partir du 29e jour d'arret : IJ = 80% du salaire journalier de base\n- Rente d'incapacite permanente en cas de sequelles durables\n- Rentes aux ayants droit en cas de deces\n\nDOCUMENT 4 — RESPONSABILITES DE L'EMPLOYEUR :\n- Responsabilite civile : obligation de reparer le prejudice subi par la victime (versement de dommages et interets)\n- Responsabilite penale : sanction en cas d'infraction aux regles de securite (amende, peine de prison)\n- Faute inexcusable : lorsque l'employeur avait ou aurait du avoir conscience du danger et n'a pas pris les mesures necessaires. La victime obtient une indemnisation complementaire. Delai pour engager la procedure : 2 ans.\n\nRAPPELS :\n- AT = fait soudain survenu par le fait ou a l'occasion du travail, causant une lesion\n- MP = consequence d'une exposition prolongee a un risque professionnel\n- Accident de trajet = accident sur le trajet domicile-travail ou travail-lieu de repas\n- Salaire journalier = Salaire brut / 30,42\n- IJ (jours 1 a 28) = 60% du salaire journalier\n- IJ (a partir du jour 29) = 80% du salaire journalier",
  "questions": [
    {
      "question": "L'evenement subi par Marc est-il un accident du travail, un accident de trajet ou une maladie professionnelle ?",
      "type": "qcm",
      "choix": ["Un accident de trajet", "Un accident du travail", "Une maladie professionnelle"],
      "correct": 1,
      "explication": "C'est un AT car il remplit les 3 conditions : fait soudain (choc), lesion corporelle (fracture), survenu au temps et au lieu de travail."
    },
    {
      "question": "Citez deux elements de la situation qui prouvent qu'il s'agit d'un accident du travail.",
      "type": "texte",
      "reponse": "Le fait est soudain (choc d'une piece metallique) et il s'est produit pendant le temps de travail sur le lieu de travail",
      "explication": "Un AT se definit par 3 criteres : une action soudaine et violente, une lesion corporelle, un lien avec le travail (lieu + temps)."
    },
    {
      "question": "Dans quel delai Marc doit-il informer son employeur de l'accident ?",
      "type": "qcm",
      "choix": ["12 heures", "24 heures", "48 heures", "15 jours"],
      "correct": 1,
      "explication": "Le salarie dispose de 24 heures pour informer son employeur. L'employeur a ensuite 48 heures pour declarer a la CPAM. Le delai de 15 jours concerne la declaration de maladie professionnelle."
    },
    {
      "question": "Dans quel delai l'employeur doit-il declarer l'accident a la CPAM ?",
      "type": "texte",
      "reponse": "48 heures",
      "explication": "L'employeur doit envoyer la Declaration d'Accident du Travail (DAT) a la CPAM dans les 48 heures suivant la connaissance de l'accident."
    },
    {
      "question": "Comment s'appelle le document etabli par le medecin qui constate les lesions de Marc ?",
      "type": "texte",
      "reponse": "Le certificat medical initial (CMI)",
      "explication": "Le CMI (Certificat Medical Initial) comporte 4 volets : 2 pour la CPAM, 1 pour l'employeur, 1 pour le salarie. Il decrit les lesions constatees."
    },
    {
      "question": "Quelle est la difference entre les prestations en nature et les prestations en especes ?",
      "type": "qcm",
      "choix": ["Les prestations en nature sont des remboursements de soins a 100%, les prestations en especes compensent la perte de salaire", "Les prestations en nature sont versees en liquide, les prestations en especes sont des cheques", "Les prestations en nature concernent les MP, les prestations en especes les AT", "Il n'y a aucune difference"],
      "correct": 0,
      "explication": "Prestations en nature = prise en charge des soins a 100% (medecin, pharmacie, reeducation). Prestations en especes = compensation financiere (indemnites journalieres, rente)."
    },
    {
      "question": "Calculez le salaire journalier de base de Marc (salaire brut 1 800 euros / 30,42). Arrondissez a 2 decimales.",
      "type": "texte",
      "reponse": "59,17 euros",
      "explication": "Calcul : 1 800 / 30,42 = 59,17 euros. Le diviseur 30,42 correspond au nombre moyen de jours par mois (365/12)."
    },
    {
      "question": "Calculez le montant de l'indemnite journaliere de Marc durant les 28 premiers jours d'arret (60% du salaire journalier). Arrondissez a 2 decimales.",
      "type": "texte",
      "reponse": "35,50 euros",
      "explication": "Calcul : 59,17 x 60% = 59,17 x 0,60 = 35,50 euros par jour. Du 1er au 28e jour, l'IJ est de 60% du salaire journalier de base."
    },
    {
      "question": "A partir du 29e jour, quel pourcentage du salaire journalier Marc percoit-il en indemnites journalieres ?",
      "type": "qcm",
      "choix": ["50%", "60%", "80%", "100%"],
      "correct": 2,
      "explication": "A partir du 29e jour d'arret, l'IJ passe de 60% a 80% du salaire journalier de base. Cette augmentation compense la duree prolongee de l'arret."
    },
    {
      "question": "Calculez le montant de l'indemnite journaliere de Marc a partir du 29e jour (80% du salaire journalier). Arrondissez a 2 decimales.",
      "type": "texte",
      "reponse": "47,34 euros",
      "explication": "Calcul : 59,17 x 80% = 59,17 x 0,80 = 47,34 euros par jour. Ce montant s'applique du 29e jour jusqu'a la fin de l'arret."
    },
    {
      "question": "Quel type de responsabilite vise a reparer le prejudice subi par la victime en versant des dommages et interets ?",
      "type": "qcm",
      "choix": ["La responsabilite penale", "La responsabilite civile", "La responsabilite administrative"],
      "correct": 1,
      "explication": "La responsabilite civile vise a REPARER (dommages et interets pour la victime). La responsabilite penale vise a PUNIR (amende, prison pour l'employeur)."
    },
    {
      "question": "Pourquoi peut-on parler de faute inexcusable de l'employeur dans cette situation ?",
      "type": "texte",
      "reponse": "Parce que les salaries avaient signale le danger (pont elevateur defectueux) et l'employeur n'a pas pris les mesures necessaires",
      "explication": "La faute inexcusable est reconnue quand l'employeur avait conscience du danger (ici : signalement par les salaries) et n'a pas agi. La victime obtient alors une indemnisation complementaire."
    },
    {
      "question": "Quel est l'interet pour Marc de faire reconnaitre la faute inexcusable de son employeur ?",
      "type": "qcm",
      "choix": ["Obtenir un licenciement de l'employeur", "Obtenir une indemnisation complementaire a celle de la Securite sociale", "Changer de metier", "Reduire son arret de travail"],
      "correct": 1,
      "explication": "La faute inexcusable permet a la victime d'obtenir une indemnisation COMPLEMENTAIRE en plus des prestations normales de la Securite sociale. Le delai pour engager la procedure est de 2 ans."
    },
    {
      "question": "Proposez une mesure de prevention que l'employeur aurait du mettre en place pour eviter cet accident.",
      "type": "texte",
      "reponse": "Faire reparer ou remplacer le pont elevateur defectueux signale par les salaries",
      "explication": "L'employeur a une obligation de securite de resultat. Suite au signalement, il aurait du agir : reparer/remplacer l'equipement, interdire son utilisation, ou mettre en place des mesures de protection."
    }
  ]
}
```

### CHECKLIST FINALE (a verifier avant de fournir le JSON)

- [ ] Le JSON est syntaxiquement valide
- [ ] Le champ "scenario" contient toute la situation, les documents de reference (demarches, indemnisation, responsabilites) et les rappels
- [ ] Il y a entre 10 et 14 questions
- [ ] Chaque question a un "type" qui vaut "qcm" ou "texte" (rien d'autre)
- [ ] Pour les QCM : le champ "correct" est un index 0-based valide (pas superieur au nombre de choix - 1)
- [ ] Pour les texte : le champ "reponse" contient une reponse courte et claire
- [ ] Les 4 axes du programme sont couverts (AT vs MP, declaration, indemnisation, responsabilites)
- [ ] Le salaire journalier = salaire brut / 30,42 (verifie avec calculatrice)
- [ ] IJ 60% = salaire journalier x 0,60 (verifie)
- [ ] IJ 80% = salaire journalier x 0,80 (verifie)
- [ ] Les arrondis sont a 2 decimales
- [ ] Les delais reglementaires sont corrects (24h, 48h, 15 jours, 120 jours, 2 ans)
- [ ] La difference AT / MP / accident de trajet est clairement exploitee
- [ ] Pas d'accents dans le JSON
- [ ] Chaque question a un champ "explication" pedagogique
- [ ] Le personnage et les circonstances sont DIFFERENTS de l'exemple

Genere maintenant une etude de cas complete avec les parametres personnalises ci-dessus. Fournis UNIQUEMENT le JSON brut, sans commentaires avant ou apres.

## FIN DU PROMPT A COPIER

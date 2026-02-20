# Prompt-template : Generer un quiz PSE (diagnostique ou formatif)

> **Mode d'emploi** : Copiez tout le contenu ci-dessous et collez-le dans ChatGPT (ou autre IA). Modifiez la section [PARAMETRES A PERSONNALISER] pour generer un quiz adapte a votre module. Le JSON genere sera directement importable dans l'editeur de quiz via la bibliotheque (Importer JSON > Categorie "Quiz live" > Envoyer vers l'editeur).

---

## DEBUT DU PROMPT A COPIER

Tu es un concepteur de quiz pedagogiques pour l'Education nationale francaise, specialise en Prevention Sante Environnement (PSE). Tu vas creer un quiz au format JSON pour un module du programme PSE.

### CONTEXTE PEDAGOGIQUE

Ce quiz sera utilise dans un editeur de quiz interactif en classe. Il peut servir a deux usages :

**Quiz diagnostique** (debut de module) :
- Objectif : evaluer les representations et connaissances prealables des eleves AVANT d'aborder le cours
- Les questions doivent etre accessibles, sans piege, basees sur le bon sens et la culture generale
- Les eleves n'ont PAS encore etudie le module : eviter les questions trop techniques ou les termes specifiques qu'ils ne connaissent pas encore
- Inclure 2-3 questions qui testent des idees recues ou des confusions frequentes
- Privilegier les questions de type Vrai/Faux et QCM (rapides a repondre)
- 8 a 10 questions maximum (quiz rapide, 5-10 minutes)

**Quiz formatif / bilan** (fin de module) :
- Objectif : verifier ce que les eleves ont retenu et compris APRES le cours
- Les questions doivent cibler les notions cles vues en cours, avec un niveau de precision plus eleve
- Utiliser le vocabulaire technique du programme (les eleves l'ont etudie)
- Equilibrer les 3 types de questions (QCM, Vrai/Faux, Reponse courte)
- On peut inclure 1-2 questions d'application simple (pas de calcul complexe)
- 10 a 12 questions (verification plus complete, 10-15 minutes)

---

### [PARAMETRES A PERSONNALISER]

Modifie ces parametres pour chaque quiz :

- **MODULE** : [Identifiant et titre du module — ex: "C8 — Declaration et reparation des AT/MP", "B5 — Les ressources en energie et le developpement durable", "A2 — Les rythmes biologiques", "MD2 — Le budget", etc.]
- **NIVEAU** : [CAP | Bac Pro Seconde | Bac Pro Premiere | Bac Pro Terminale]
- **TYPE DE QUIZ** : [diagnostique | formatif]
- **NOTIONS CLES DU MODULE** : [Lister ici les 5 a 10 notions essentielles du module que l'eleve doit connaitre. Exemples pour C8 : "accident du travail, maladie professionnelle, CMI, DAT, indemnites journalieres, faute inexcusable, CPAM, delais de declaration". Pour B5 : "energie renouvelable, energie fossile, effet de serre, GES, CO2, DPE, eco-gestes, developpement durable, sobriete energetique". Pour A2 : "sommeil paradoxal, melatonine, rythme circadien, dette de sommeil, cycles du sommeil".]
- **NOMBRE DE QUESTIONS** : [8-10 pour diagnostique, 10-12 pour formatif]

---

### FORMAT JSON A RESPECTER STRICTEMENT

ATTENTION : Ce JSON est destine a l'editeur de quiz (editeur_quiz.html). Il est DIFFERENT du format de l'editeur d'exercices et de l'editeur d'evaluations. Ne pas confondre.

```json
{
  "titre": "Quiz [diagnostique|formatif] — [Code module] [Titre du module]",
  "type": "[diagnostique|formatif]",
  "questions": [
    {
      "type": "qcm",
      "question": "Texte de la question",
      "choices": ["Choix A", "Choix B", "Choix C", "Choix D"],
      "correct": 0
    },
    {
      "type": "vf",
      "question": "Affirmation a evaluer comme vraie ou fausse",
      "correct": true
    },
    {
      "type": "mot",
      "question": "Question dont la reponse est un mot ou une expression courte",
      "reponse": "reponse attendue"
    }
  ]
}
```

### TYPES DE QUESTIONS DISPONIBLES

Il y a exactement 3 types possibles :

1. **"qcm"** : Question a choix multiples (une seule bonne reponse)
   - Champs obligatoires : `choices` (tableau de chaines, 3 ou 4 choix), `correct` (index 0-based de la bonne reponse)
   - ATTENTION : `correct` est un INDEX NUMERIQUE (0 pour le 1er choix, 1 pour le 2e, 2 pour le 3e, etc.)
   - Les distracteurs (mauvaises reponses) doivent etre plausibles mais clairement faux

2. **"vf"** : Vrai ou Faux
   - Champ obligatoire : `correct` — DOIT ETRE UN BOOLEEN : `true` si l'affirmation est vraie, `false` si elle est fausse
   - TRES IMPORTANT : utiliser `true` ou `false` (booleens JSON), JAMAIS "vrai"/"faux" (chaines), JAMAIS 0/1 (nombres)
   - L'affirmation doit etre claire et sans ambiguite
   - Equilibrer les reponses : environ moitie vraies, moitie fausses

3. **"mot"** : Reponse courte (1 a 3 mots)
   - Champ obligatoire : `reponse` (chaine de caracteres avec la reponse attendue)
   - La reponse doit etre courte et univoque (1 mot, 1 sigle, ou 1 expression courte de 2-3 mots max)
   - Eviter les questions dont la reponse peut s'ecrire de multiples facons
   - Privilegier les reponses en un mot ou un sigle (ex: "CPAM", "CMI", "melatonine", "CO2")

### CONTRAINTES OBLIGATOIRES

**Structure JSON :**
- Le champ "titre" doit inclure le type de quiz et le nom du module
- Le champ "type" doit valoir exactement "diagnostique" ou "formatif" (en minuscules)
- Le tableau "questions" contient entre 8 et 12 objets
- Chaque question a un champ "type" qui vaut "qcm", "vf" ou "mot" (rien d'autre)
- PAS de champ "consigne", "scenario", "explication", "competence", "points" ou "bareme" — ce n'est PAS une evaluation, c'est un quiz rapide

**Repartition des types de questions :**
- Quiz diagnostique : environ 40% VF, 40% QCM, 20% mot (favoriser la rapidite)
- Quiz formatif : environ 35% QCM, 35% VF, 30% mot (plus de precision attendue)
- Ne JAMAIS mettre plus de 3 questions du meme type d'affilee — alterner les types

**Regles specifiques selon le type de quiz :**

Si TYPE = diagnostique :
- Questions accessibles, basees sur les representations courantes et le bon sens
- Inclure 2-3 questions qui testent des idees recues ou des confusions frequentes (ex: croire que le nucleaire est une energie fossile, confondre AT et MP, etc.)
- Pas de questions de calcul
- Pas de vocabulaire technique specifique au programme (les eleves ne l'ont pas encore vu)
- Les questions "mot" doivent avoir des reponses de culture generale (pas des termes techniques du cours)
- Les questions doivent permettre de reveler ce que les eleves savent DEJA ou croient savoir

Si TYPE = formatif :
- Questions ciblees sur les notions cles du programme vues en cours
- Les questions "mot" PEUVENT demander des termes techniques specifiques au cours (sigles, definitions)
- On peut inclure 1-2 questions d'application simple (pas de calcul complexe)
- Couvrir l'ensemble des notions cles listees dans les parametres
- Les questions doivent permettre de verifier si l'eleve a retenu et compris les notions cles

**Texte :**
- Pas d'accents dans le JSON (utiliser "e" au lieu de "e accent", "a" au lieu de "a accent", etc.)
- Pas de caracteres speciaux (pas de symbole euro -> ecrire "euros", pas de degre -> ecrire "degres")

---

### EXEMPLE COMPLET N°1 : Quiz diagnostique (debut de module)

Voici un exemple pour le module C8 "AT/MP" en quiz diagnostique. CHANGE le contenu selon le module et le type demandes.

```json
{
  "titre": "Quiz diagnostique — C8 Declaration et reparation des AT/MP",
  "type": "diagnostique",
  "questions": [
    {
      "type": "vf",
      "question": "Un accident du travail est un evenement qui se produit uniquement sur le lieu de travail.",
      "correct": false
    },
    {
      "type": "qcm",
      "question": "Selon vous, qui doit declarer un accident du travail a la Securite sociale ?",
      "choices": ["Le salarie lui-meme", "L'employeur", "Le medecin", "La police"],
      "correct": 1
    },
    {
      "type": "vf",
      "question": "Une maladie professionnelle apparait toujours de maniere soudaine, comme un accident.",
      "correct": false
    },
    {
      "type": "qcm",
      "question": "Que signifie le sigle AT en milieu professionnel ?",
      "choices": ["Arret Temporaire", "Accident du Travail", "Allocation de Transport", "Aide au Travailleur"],
      "correct": 1
    },
    {
      "type": "mot",
      "question": "Comment s'appelle l'organisme qui gere l'assurance maladie en France (sigle en 4 lettres) ?",
      "reponse": "CPAM"
    },
    {
      "type": "vf",
      "question": "Si un salarie se blesse en glissant sur un sol mouille dans son entreprise, c'est un accident du travail.",
      "correct": true
    },
    {
      "type": "qcm",
      "question": "A votre avis, quand un salarie a un accident au travail, ses soins medicaux sont rembourses :",
      "choices": ["A 50%", "A 70%", "A 100%", "Ils ne sont pas rembourses"],
      "correct": 2
    },
    {
      "type": "vf",
      "question": "L'employeur n'a aucune responsabilite legale si un salarie se blesse au travail.",
      "correct": false
    },
    {
      "type": "qcm",
      "question": "A votre avis, que sont les indemnites journalieres ?",
      "choices": ["Des primes de productivite", "Des compensations versees pendant un arret de travail", "Des amendes pour l'employeur", "Des remboursements de frais de transport"],
      "correct": 1
    },
    {
      "type": "vf",
      "question": "Un accident survenu sur le trajet entre le domicile et le lieu de travail peut etre reconnu comme accident du travail.",
      "correct": true
    }
  ]
}
```

### EXEMPLE COMPLET N°2 : Quiz formatif (fin de module)

Voici un exemple pour le meme module C8 "AT/MP" en quiz formatif. Notez la difference de niveau et de precision par rapport au diagnostique.

```json
{
  "titre": "Quiz formatif — C8 Declaration et reparation des AT/MP",
  "type": "formatif",
  "questions": [
    {
      "type": "qcm",
      "question": "Quelles sont les 3 conditions pour qu'un evenement soit reconnu comme accident du travail ?",
      "choices": ["Fait soudain, lesion corporelle, lien avec le travail", "Douleur, arret de travail, visite medicale", "Declaration, temoins, certificat medical", "Negligence, blessure, hospitalisation"],
      "correct": 0
    },
    {
      "type": "vf",
      "question": "Le salarie dispose de 48 heures pour informer son employeur d'un accident du travail.",
      "correct": false
    },
    {
      "type": "mot",
      "question": "Quel est le delai dont dispose le salarie pour informer son employeur d'un AT ?",
      "reponse": "24 heures"
    },
    {
      "type": "qcm",
      "question": "Quel document le medecin etablit-il pour constater les lesions d'un accident du travail ?",
      "choices": ["Un arret de travail", "Un certificat medical initial (CMI)", "Une ordonnance", "Un bon de sortie"],
      "correct": 1
    },
    {
      "type": "vf",
      "question": "Une maladie professionnelle est la consequence d'une exposition prolongee a un risque lie au travail.",
      "correct": true
    },
    {
      "type": "mot",
      "question": "Quel est le delai dont dispose l'employeur pour declarer un AT a la CPAM ?",
      "reponse": "48 heures"
    },
    {
      "type": "qcm",
      "question": "Les prestations en nature dans le cadre d'un AT correspondent a :",
      "choices": ["Des indemnites journalieres", "Le remboursement des soins medicaux a 100%", "Une rente d'incapacite", "Des dommages et interets"],
      "correct": 1
    },
    {
      "type": "vf",
      "question": "A partir du 29e jour d'arret, les indemnites journalieres passent de 60% a 80% du salaire journalier de base.",
      "correct": true
    },
    {
      "type": "qcm",
      "question": "La responsabilite civile de l'employeur vise a :",
      "choices": ["Punir l'employeur par une amende", "Reparer le prejudice subi par la victime", "Licencier le salarie", "Fermer l'entreprise"],
      "correct": 1
    },
    {
      "type": "mot",
      "question": "Comment appelle-t-on la faute de l'employeur qui avait conscience du danger mais n'a pas agi ?",
      "reponse": "faute inexcusable"
    },
    {
      "type": "vf",
      "question": "Le salarie victime d'une maladie professionnelle doit la declarer a la CPAM dans les 15 jours.",
      "correct": true
    },
    {
      "type": "qcm",
      "question": "Quel est le delai de prescription pour engager une action en faute inexcusable ?",
      "choices": ["6 mois", "1 an", "2 ans", "5 ans"],
      "correct": 2
    }
  ]
}
```

### CHECKLIST FINALE (a verifier avant de fournir le JSON)

- [ ] Le JSON est syntaxiquement valide (tester avec un validateur JSON)
- [ ] Le champ "titre" contient le type de quiz ET le nom du module
- [ ] Le champ "type" vaut exactement "diagnostique" ou "formatif" (en minuscules)
- [ ] Il y a entre 8 et 12 questions
- [ ] Chaque question a un "type" qui vaut "qcm", "vf" ou "mot" (rien d'autre)
- [ ] Pour les QCM : "choices" contient 3 ou 4 choix, et "correct" est un index 0-based valide (nombre entier)
- [ ] Pour les VF : "correct" est un BOOLEEN (true ou false), PAS un nombre (0/1), PAS une chaine ("vrai"/"faux")
- [ ] Pour les mot : "reponse" contient une reponse courte (1 a 3 mots maximum)
- [ ] Les types de questions sont bien alternes (pas plus de 3 d'affilee du meme type)
- [ ] Les reponses VF sont equilibrees (environ moitie vraies, moitie fausses)
- [ ] Si diagnostique : questions accessibles, pas de vocabulaire technique du cours
- [ ] Si formatif : questions ciblant les notions cles, vocabulaire technique autorise
- [ ] Pas d'accents dans le JSON
- [ ] PAS de champs "explication", "points", "scenario", "consigne" (format quiz uniquement)
- [ ] Le contenu est DIFFERENT des exemples ci-dessus

Genere maintenant un quiz complet avec les parametres personnalises ci-dessus. Fournis UNIQUEMENT le JSON brut, sans commentaires avant ou apres.

## FIN DU PROMPT A COPIER

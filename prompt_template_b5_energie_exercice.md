# Prompt-template : Generer une etude de cas B5 "Les ressources en energie et le developpement durable" (Bac Pro PSE — Exercice)

> **Mode d'emploi** : Copiez tout le contenu ci-dessous et collez-le dans ChatGPT (ou autre IA). Modifiez la section [PARAMETRES A PERSONNALISER] pour obtenir un scenario different a chaque fois. Le JSON genere sera directement importable dans editeur_exercices.html (type "Etude de cas").

---

## DEBUT DU PROMPT A COPIER

Tu es un concepteur d'exercices pedagogiques pour l'Education nationale francaise. Tu vas creer une etude de cas au format JSON pour le Module B5 "Les ressources en energie et le developpement durable" du programme de Prevention Sante Environnement (PSE) en Bac Pro Terminale.

### PROGRAMME OFFICIEL (Bulletin Officiel — Module B5)

Objectif : Identifier les effets de la production et de la consommation d'energie sur l'environnement et proposer des actions de developpement durable.

4 axes cibles avec leurs notions cles :

**Axe 1 — Identifier les differentes sources d'energie**
Notions : Energies renouvelables (solaire, eolien, hydraulique, biomasse, geothermie), Energies non renouvelables (petrole, charbon, gaz naturel, uranium/nucleaire), Energie fossile, Energie primaire vs energie finale, Mix energetique francais

**Axe 2 — Expliquer les effets de la production et de la consommation d'energie sur l'environnement**
Notions : Effet de serre (naturel vs amplifie), Gaz a effet de serre (GES : CO2, methane, protoxyde d'azote), Rechauffement climatique, Pluies acides, Pollution atmospherique (particules fines, NOx, SO2), Dechets radioactifs, Maree noire, Epuisement des ressources

**Axe 3 — Calculer et analyser l'empreinte carbone / energetique**
Notions : Empreinte carbone (kg de CO2 equivalent), Bilan carbone, Etiquette energie (classes A a G), Diagnostic de performance energetique (DPE), Consommation energetique d'un logement (kWh/m2/an), Facteur d'emission CO2 par source d'energie

**Axe 4 — Proposer des actions de developpement durable au quotidien et en milieu professionnel**
Notions : Les 3 piliers du developpement durable (economique, social, environnemental), Eco-gestes (transport, chauffage, eclairage, alimentation), Transition energetique, Sobriete energetique, Efficacite energetique, Isolation thermique, Mobilite durable, Tri des dechets, Economie circulaire

### DEFINITIONS CLES (terminologie du programme — sources : manuels Foucher et Delagrave)

- **Energie renouvelable** : energie dont la source se regenere naturellement a l'echelle humaine (soleil, vent, eau, chaleur terrestre, biomasse). Elle est theoriquement inepuisable.
- **Energie non renouvelable** : energie dont les reserves sont limitees et s'epuisent au fil de l'exploitation (petrole, charbon, gaz naturel, uranium). Leur formation a pris des millions d'annees.
- **Energie fossile** : energie produite a partir de matieres organiques fossilisees (petrole, charbon, gaz naturel). Leur combustion libere du CO2 et contribue a l'effet de serre.
- **Effet de serre naturel** : phenomene naturel par lequel certains gaz de l'atmosphere (vapeur d'eau, CO2) retiennent une partie de la chaleur du soleil, permettant une temperature moyenne de 15 degres C sur Terre (sans lui : -18 degres C).
- **Effet de serre amplifie** : augmentation de l'effet de serre due aux activites humaines (combustion d'energies fossiles, industrie, elevage, deforestation) qui liberent des GES supplementaires, provoquant le rechauffement climatique.
- **Gaz a effet de serre (GES)** : gaz qui retiennent la chaleur dans l'atmosphere. Principaux GES d'origine humaine : dioxyde de carbone (CO2 — combustion), methane (CH4 — elevage, dechets), protoxyde d'azote (N2O — agriculture).
- **Rechauffement climatique** : augmentation de la temperature moyenne de la Terre due a l'amplification de l'effet de serre par les activites humaines. Consequences : fonte des glaces, montee des eaux, evenements meteorologiques extremes, perte de biodiversite.
- **Empreinte carbone** : quantite totale de GES emis directement ou indirectement par une personne, une entreprise ou un produit, exprimee en kg ou tonnes de CO2 equivalent.
- **Mix energetique** : repartition des differentes sources d'energie utilisees dans un pays pour couvrir ses besoins. En France : environ 70% nucleaire pour l'electricite, mais le mix energetique total inclut aussi le petrole (transports), le gaz (chauffage) et les renouvelables.
- **Developpement durable** : mode de developpement qui repond aux besoins du present sans compromettre la capacite des generations futures a repondre aux leurs (rapport Brundtland, 1987). Repose sur 3 piliers : economique, social, environnemental.
- **Transition energetique** : passage progressif d'un systeme energetique base sur les energies fossiles vers un systeme base sur les energies renouvelables et la sobriete energetique.
- **DPE (Diagnostic de Performance Energetique)** : document qui evalue la consommation d'energie d'un logement et son impact en termes d'emissions de GES. Classe de A (tres performant, < 70 kWh/m2/an) a G (tres mauvais, > 420 kWh/m2/an).
- **Sobriete energetique** : reduction volontaire de la consommation d'energie par des changements de comportement (baisser le chauffage, eteindre les appareils, limiter les trajets).
- **Efficacite energetique** : utiliser moins d'energie pour le meme service rendu grace a des technologies performantes (isolation, LED, appareils classe A, moteurs a haut rendement).

### DONNEES DE REFERENCE (sources : manuels Foucher et Delagrave Bac Pro Tle)

**Facteurs d'emission CO2 par source d'energie (pour la production d'electricite) :**
| Source | Emissions CO2 (g/kWh) |
|--------|----------------------|
| Charbon | 820 |
| Gaz naturel | 490 |
| Petrole | 650 |
| Nucleaire | 12 |
| Eolien | 11 |
| Solaire photovoltaique | 45 |
| Hydraulique | 24 |
| Biomasse | 230 |

**Classes DPE pour les logements :**
| Classe | Consommation (kWh/m2/an) | Qualification |
|--------|--------------------------|---------------|
| A | < 70 | Tres performant |
| B | 70 a 110 | Performant |
| C | 110 a 180 | Assez performant |
| D | 180 a 250 | Moyen |
| E | 250 a 330 | Peu performant |
| F | 330 a 420 | Tres peu performant |
| G | > 420 | Passoire thermique |

**Eco-gestes en milieu professionnel (exemples du programme) :**
- Eteindre les lumieres et les ecrans en quittant une piece
- Baisser le chauffage (1 degre C en moins = 7% d'economie)
- Privilegier le covoiturage ou les transports en commun
- Limiter l'utilisation de la climatisation
- Trier les dechets sur le lieu de travail
- Utiliser des equipements basse consommation (LED, appareils classe A)
- Reduire la consommation de papier (impression recto-verso, dematerialisation)
- Isoler les locaux (fenetres double vitrage, isolation des combles)

---

### [PARAMETRES A PERSONNALISER]

Modifie ces parametres pour chaque nouveau scenario :

- **Prenom** : [ex: Lina, Noah, Camille, Rayan, Jade, Matheo, Inaya, Killian...]
- **Age** : [18-25 ans]
- **Metier/formation** : [ex: apprentie coiffeuse, apprenti mecanicien, aide-soignante, employe de restauration, agent logistique, electricien...]
- **Lieu de travail** : [ex: salon de coiffure, garage automobile, EHPAD, restaurant, entrepot, chantier...]
- **Type de logement** : [ex: studio, T2, appartement en colocation, maison ancienne...]
- **Classe DPE du logement** : [D, E, F ou G — choisir une classe mediocre pour que l'exercice ait du sens]
- **Surface du logement** : [entre 20 et 60 m2]
- **Mode de chauffage** : [ex: radiateurs electriques, chaudiere gaz, convecteurs anciens...]
- **Moyen de transport** : [ex: voiture essence, scooter, bus, velo, covoiturage...]
- **Distance domicile-travail** : [entre 5 et 30 km]
- **Problematique environnementale du lieu de travail** : [ex: lumiere allumee en permanence, chauffage excessif, pas de tri des dechets, vehicules polluants, suremballage, gaspillage alimentaire...]

---

### FORMAT JSON A RESPECTER STRICTEMENT

ATTENTION : Ce JSON est destine a l'editeur d'exercices (type "Etude de cas"), PAS a l'editeur d'evaluations. Le format est different.

```json
{
  "consigne": "Lisez attentivement la situation de [Prenom] puis repondez aux questions.",
  "scenario": "Texte complet du scenario incluant :\n- Presentation du personnage (prenom, age, metier, lieu de travail, logement)\n- Description de son mode de vie energetique (chauffage, transport, habitudes)\n- Problematique observee (facture elevee, logement mal isole, mauvaises pratiques au travail...)\n\nDOCUMENT 1 — LES SOURCES D'ENERGIE :\nEnergies non renouvelables : petrole, charbon, gaz naturel (energies fossiles), uranium (nucleaire)\n- Reserves limitees, epuisement progressif\n- Combustion des fossiles = emission de CO2 et GES\nEnergies renouvelables : solaire, eolien, hydraulique, biomasse, geothermie\n- Se regenerent naturellement, theoriquement inepuisables\n- Faibles emissions de GES\n\nDOCUMENT 2 — L'EFFET DE SERRE ET LE RECHAUFFEMENT CLIMATIQUE :\n- Effet de serre naturel : phenomene indispensable a la vie (temperature moyenne 15 degres C au lieu de -18 degres C)\n- Effet de serre amplifie : les activites humaines (combustion fossile, industrie, elevage, deforestation) augmentent les GES\n- Principaux GES : CO2 (combustion), methane (elevage/dechets), protoxyde d'azote (agriculture)\n- Consequences : rechauffement climatique, fonte des glaces, montee des eaux, evenements extremes\n\nDOCUMENT 3 — DPE ET CONSOMMATION ENERGETIQUE DU LOGEMENT :\n[Inclure le DPE du logement du personnage avec sa classe et sa consommation en kWh/m2/an]\nClasses DPE : A (< 70) — B (70-110) — C (110-180) — D (180-250) — E (250-330) — F (330-420) — G (> 420 kWh/m2/an)\n- Consommation annuelle du logement = consommation kWh/m2/an x surface\n\nDOCUMENT 4 — FACTEURS D'EMISSION CO2 :\n| Source | g CO2/kWh |\n| Charbon | 820 |\n| Gaz naturel | 490 |\n| Petrole | 650 |\n| Nucleaire | 12 |\n| Eolien | 11 |\n| Solaire | 45 |\n| Hydraulique | 24 |\n\nDOCUMENT 5 — ECO-GESTES ET DEVELOPPEMENT DURABLE :\n- Les 3 piliers du developpement durable : economique, social, environnemental\n- Sobriete energetique : reduire sa consommation par ses comportements\n- Efficacite energetique : memes services avec moins d'energie (isolation, LED, appareils classe A)\n- 1 degre C de moins au chauffage = 7% d'economie d'energie\n- Eco-gestes au travail : eteindre lumieres et ecrans, baisser le chauffage, trier les dechets, limiter impressions, covoiturage\n\nRAPPELS :\n- Consommation annuelle logement = kWh/m2/an x surface (m2)\n- Emissions CO2 logement = consommation annuelle (kWh) x facteur d'emission (g CO2/kWh)\n- Pour convertir en kg : diviser par 1000\n- Economie apres reduction = consommation x pourcentage d'economie",
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
- Le scenario doit inclure : la situation du personnage, les documents sur les sources d'energie, l'effet de serre, le DPE, les facteurs d'emission et les eco-gestes
- Entre 10 et 14 questions
- Alterner questions QCM et questions texte pour varier

**Couverture des 4 axes du programme :**
- Axe 1 (sources d'energie) : minimum 2 questions
- Axe 2 (effets sur l'environnement) : minimum 3 questions
- Axe 3 (calculs empreinte/consommation) : minimum 3 questions
- Axe 4 (eco-gestes / developpement durable) : minimum 2 questions

**Progression pedagogique suggeree des questions :**
1. Identifier le type d'energie utilisee par le personnage : renouvelable ou non renouvelable ? (qcm)
2. Citer les 3 principales energies fossiles (texte)
3. Expliquer la difference entre effet de serre naturel et effet de serre amplifie (texte ou qcm)
4. Identifier le principal GES produit par la combustion d'energies fossiles (qcm)
5. Nommer 2 consequences du rechauffement climatique (texte)
6. Lire le DPE du logement et indiquer sa classe energetique (qcm)
7. Calculer la consommation energetique annuelle du logement (texte — calcul : kWh/m2/an x surface)
8. Calculer les emissions de CO2 annuelles du logement (texte — calcul : consommation x facteur d'emission)
9. Calculer l'economie d'energie si le personnage baisse le chauffage de X degres (texte — calcul)
10. Citer les 3 piliers du developpement durable (texte)
11. Proposer 2 eco-gestes que le personnage peut adopter au travail (texte ou qcm)
12. Distinguer sobriete energetique et efficacite energetique (qcm)
13. Proposer une solution pour ameliorer le DPE du logement (texte ou qcm)

**Coherence des calculs (TRES IMPORTANT) :**
- Consommation annuelle = kWh/m2/an x surface en m2 (choisir des valeurs qui donnent un resultat rond)
- Emissions CO2 = consommation annuelle x facteur d'emission (arrondir a l'entier en kg)
- Pour les calculs de pourcentage : 1 degre en moins = 7% d'economie, 2 degres = 14%, etc.
- VERIFIER chaque calcul avant de generer le JSON
- Choisir une surface et une consommation/m2 qui donnent un calcul simple (ex: 30 m2 x 300 kWh/m2/an = 9 000 kWh/an)

**Explications pedagogiques (TRES IMPORTANT) :**
- Chaque question DOIT avoir un champ "explication" avec une explication claire et pedagogique
- L'explication s'affiche a l'eleve apres correction (qu'il ait bon ou faux) pour l'aider a comprendre
- Pour les calculs : rappeler la formule et le detail du calcul
- Pour les QCM : expliquer pourquoi la bonne reponse est correcte et/ou pourquoi les autres sont fausses
- Pour les definitions : rappeler la definition officielle et les criteres cles
- S'appuyer sur le programme officiel et les manuels scolaires (Foucher, Delagrave)

**Texte :**
- Pas d'accents dans le JSON (utiliser "e" au lieu de "e accent", "a" au lieu de "a accent", etc.)
- Pas de caracteres speciaux (pas de symbole euro -> ecrire "euros", pas de degre -> ecrire "degres C")
- Les sauts de ligne dans le scenario se font avec \n

---

### EXEMPLE COMPLET DE REFERENCE

Voici un exemple complet et valide. Utilise-le comme modele pour la structure et le style. CHANGE le personnage, les chiffres, le metier, le logement et les circonstances.

```json
{
  "consigne": "Lisez attentivement la situation de Lina puis repondez aux questions.",
  "scenario": "Lina, 19 ans, est apprentie coiffeuse dans un salon de coiffure a Toulouse. Elle vit seule dans un studio de 25 m2 chauffe par des convecteurs electriques anciens. Son logement est classe E au DPE (consommation de 300 kWh/m2/an). Lina se rend au travail en voiture essence (trajet de 12 km aller). Au salon de coiffure, elle a remarque que les seche-cheveux et les appareils restent souvent branches et en veille toute la nuit, que le chauffage est regle a 24 degres C et que les dechets (emballages de produits, aluminium) ne sont pas tries. Sa derniere facture d'electricite etait de 1 200 euros pour l'annee, ce qu'elle trouve tres eleve.\n\nDOCUMENT 1 — LES SOURCES D'ENERGIE :\nEnergies non renouvelables :\n- Petrole, charbon, gaz naturel = energies fossiles (formees en millions d'annees, reserves limitees)\n- Uranium = energie nucleaire (non fossile mais non renouvelable)\n- Leur exploitation produit des dechets et/ou des gaz a effet de serre (GES)\nEnergies renouvelables :\n- Solaire, eolien, hydraulique, biomasse, geothermie\n- Se regenerent naturellement a l'echelle humaine\n- Faibles emissions de GES lors de la production\n\nDOCUMENT 2 — L'EFFET DE SERRE ET LE RECHAUFFEMENT CLIMATIQUE :\n- Effet de serre naturel : des gaz (vapeur d'eau, CO2) retiennent une partie de la chaleur du soleil. Sans lui la temperature moyenne serait de -18 degres C au lieu de +15 degres C.\n- Effet de serre amplifie : les activites humaines (combustion d'energies fossiles, industrie, elevage, deforestation) augmentent la concentration de GES dans l'atmosphere.\n- Principaux GES d'origine humaine : CO2 (combustion), methane CH4 (elevage, dechets), protoxyde d'azote N2O (agriculture).\n- Consequences du rechauffement : fonte des glaciers, montee du niveau des mers, evenements meteorologiques extremes (canicules, tempetes), perte de biodiversite.\n\nDOCUMENT 3 — DPE DU LOGEMENT DE LINA :\nClasse energetique : E\nConsommation : 300 kWh/m2/an\nSurface : 25 m2\nMode de chauffage : convecteurs electriques anciens\nEchelle DPE : A (< 70) — B (70-110) — C (110-180) — D (180-250) — E (250-330) — F (330-420) — G (> 420 kWh/m2/an)\n\nDOCUMENT 4 — FACTEURS D'EMISSION CO2 PAR SOURCE D'ENERGIE :\n| Source | Emissions (g CO2/kWh) |\n| Charbon | 820 |\n| Gaz naturel | 490 |\n| Petrole | 650 |\n| Nucleaire | 12 |\n| Eolien | 11 |\n| Solaire | 45 |\n| Hydraulique | 24 |\nNota : en France, l'electricite du reseau provient a environ 70% du nucleaire. Le facteur d'emission moyen de l'electricite francaise est d'environ 50 g CO2/kWh.\n\nDOCUMENT 5 — ECO-GESTES ET DEVELOPPEMENT DURABLE :\nLes 3 piliers du developpement durable : economique (viable), social (equitable), environnemental (vivable).\nSobriete energetique : reduire volontairement sa consommation par des changements de comportement.\nEfficacite energetique : obtenir le meme service avec moins d'energie grace a de meilleures technologies.\nExemples d'eco-gestes :\n- Baisser le chauffage : 1 degre C en moins = 7% d'economie d'energie\n- Eteindre les appareils en veille\n- Utiliser des ampoules LED (5 fois moins d'energie qu'une ampoule classique)\n- Privilegier les transports en commun ou le covoiturage\n- Trier les dechets et recycler sur le lieu de travail\n- Isoler son logement (double vitrage, isolation des murs et combles)\n\nRAPPELS :\n- Consommation annuelle logement = kWh/m2/an x surface (m2)\n- Emissions CO2 logement = consommation annuelle (kWh) x facteur d'emission (g CO2/kWh)\n- Pour convertir les g en kg : diviser par 1 000\n- Economie avec baisse de chauffage : consommation x (nombre de degres x 7%)",
  "questions": [
    {
      "question": "Le chauffage electrique de Lina utilise l'electricite du reseau. En France, quelle est la principale source de production d'electricite ?",
      "type": "qcm",
      "choix": ["Le charbon", "Le gaz naturel", "L'energie nucleaire", "L'energie eolienne"],
      "correct": 2,
      "explication": "En France, environ 70% de l'electricite est produite par les centrales nucleaires (uranium). Le charbon et le gaz sont des sources fossiles peu utilisees en France pour l'electricite. L'eolien progresse mais reste minoritaire."
    },
    {
      "question": "L'energie nucleaire est-elle une energie renouvelable ou non renouvelable ? Justifiez.",
      "type": "texte",
      "reponse": "Non renouvelable car l'uranium est present en quantite limitee sur Terre et ne se regenere pas a l'echelle humaine",
      "explication": "L'uranium est un minerai dont les reserves sont limitees (quelques dizaines a centaines d'annees selon la consommation). Ce n'est pas une energie fossile (il ne provient pas de matieres organiques), mais il est non renouvelable."
    },
    {
      "question": "Citez les trois principales energies fossiles.",
      "type": "texte",
      "reponse": "Le petrole, le charbon et le gaz naturel",
      "explication": "Les energies fossiles proviennent de la decomposition de matieres organiques sur des millions d'annees. Les trois principales sont le petrole (transport), le charbon (electricite) et le gaz naturel (chauffage, electricite). Leur combustion emet du CO2."
    },
    {
      "question": "Quelle est la difference entre l'effet de serre naturel et l'effet de serre amplifie ?",
      "type": "qcm",
      "choix": ["L'effet de serre naturel est provoque par l'homme, l'amplifie est naturel", "L'effet de serre naturel permet la vie sur Terre, l'amplifie est du aux activites humaines qui augmentent les GES", "Il n'y a aucune difference", "L'effet de serre amplifie refroidit la Terre"],
      "correct": 1,
      "explication": "L'effet de serre naturel est indispensable (temperature de 15 degres C au lieu de -18 degres C). L'effet de serre amplifie est cause par les activites humaines (combustion fossile, industrie, elevage) qui liberent des GES supplementaires, provoquant le rechauffement climatique."
    },
    {
      "question": "Quel est le principal gaz a effet de serre emis lors de la combustion d'energies fossiles ?",
      "type": "qcm",
      "choix": ["Le methane (CH4)", "Le dioxyde de carbone (CO2)", "L'ozone (O3)", "La vapeur d'eau"],
      "correct": 1,
      "explication": "Le CO2 (dioxyde de carbone) est le principal GES emis par la combustion du petrole, du charbon et du gaz naturel. Le methane provient surtout de l'elevage et des dechets. La vapeur d'eau est un GES naturel."
    },
    {
      "question": "Citez deux consequences du rechauffement climatique.",
      "type": "texte",
      "reponse": "La fonte des glaciers et la montee du niveau des mers (ou : evenements meteorologiques extremes, perte de biodiversite)",
      "explication": "Le rechauffement climatique entraine : la fonte des glaces (banquise, glaciers), la montee du niveau des mers, des evenements extremes plus frequents (canicules, tempetes, inondations) et une perte de biodiversite."
    },
    {
      "question": "D'apres le DPE, quelle est la classe energetique du logement de Lina ?",
      "type": "qcm",
      "choix": ["Classe C — assez performant", "Classe D — moyen", "Classe E — peu performant", "Classe G — passoire thermique"],
      "correct": 2,
      "explication": "Avec une consommation de 300 kWh/m2/an, le logement de Lina est classe E (250 a 330 kWh/m2/an), qualifie de 'peu performant'. Un logement performant (classe A ou B) consomme moins de 110 kWh/m2/an."
    },
    {
      "question": "Calculez la consommation energetique annuelle du logement de Lina (en kWh/an).",
      "type": "texte",
      "reponse": "7 500 kWh/an",
      "explication": "Consommation annuelle = kWh/m2/an x surface = 300 x 25 = 7 500 kWh/an. Ce chiffre est eleve pour un studio de 25 m2, ce qui s'explique par la mauvaise isolation (classe E) et les convecteurs anciens."
    },
    {
      "question": "En utilisant le facteur d'emission moyen de l'electricite francaise (50 g CO2/kWh), calculez les emissions de CO2 annuelles du logement de Lina (en kg).",
      "type": "texte",
      "reponse": "375 kg de CO2",
      "explication": "Emissions = consommation x facteur = 7 500 kWh x 50 g/kWh = 375 000 g = 375 kg de CO2 par an. Si Lina se chauffait au gaz (490 g/kWh), ses emissions seraient de 3 675 kg, soit 10 fois plus."
    },
    {
      "question": "Si Lina baisse son chauffage de 2 degres C, quelle economie d'energie realisera-t-elle en pourcentage et en kWh ?",
      "type": "texte",
      "reponse": "14% d'economie soit 1 050 kWh par an",
      "explication": "Regle : 1 degre en moins = 7% d'economie. Donc 2 degres = 2 x 7% = 14%. Economie = 7 500 x 14% = 7 500 x 0,14 = 1 050 kWh par an. C'est un eco-geste simple et tres efficace."
    },
    {
      "question": "Quels sont les 3 piliers du developpement durable ?",
      "type": "texte",
      "reponse": "Economique, social et environnemental",
      "explication": "Le developpement durable repose sur 3 piliers indissociables : economique (croissance viable), social (equitable pour tous) et environnemental (preservation des ressources). Il vise a repondre aux besoins du present sans compromettre ceux des generations futures."
    },
    {
      "question": "Quelle est la difference entre sobriete energetique et efficacite energetique ?",
      "type": "qcm",
      "choix": ["Sobriete = reduire sa consommation par son comportement ; Efficacite = meme service avec moins d'energie grace a la technologie", "Sobriete = utiliser plus d'energie renouvelable ; Efficacite = utiliser moins d'energie fossile", "Ce sont deux termes synonymes", "Sobriete = isoler son logement ; Efficacite = baisser le chauffage"],
      "correct": 0,
      "explication": "La sobriete, c'est changer ses habitudes (eteindre la lumiere, baisser le chauffage). L'efficacite, c'est utiliser des technologies performantes (LED au lieu d'ampoules classiques, isolation, appareils classe A). Les deux sont complementaires."
    },
    {
      "question": "Proposez deux eco-gestes que Lina pourrait suggerer a son employeur pour reduire la consommation d'energie au salon de coiffure.",
      "type": "texte",
      "reponse": "Eteindre et debrancher les appareils (seche-cheveux) le soir au lieu de les laisser en veille, et baisser le chauffage de 24 a 20 degres C",
      "explication": "Les appareils en veille consomment inutilement de l'electricite. Baisser le chauffage de 24 a 20 degres (4 degres) permettrait 28% d'economie (4 x 7%). On pourrait aussi trier les dechets (emballages, aluminium) et utiliser des ampoules LED."
    },
    {
      "question": "Quelle solution permettrait d'ameliorer la classe DPE du logement de Lina a long terme ?",
      "type": "qcm",
      "choix": ["Laisser les fenetres ouvertes pour aerer", "Remplacer les convecteurs anciens et isoler le logement (double vitrage, isolation des murs)", "Augmenter la temperature du chauffage", "Utiliser un seche-linge"],
      "correct": 1,
      "explication": "Pour ameliorer le DPE, il faut investir dans l'efficacite energetique : remplacer les convecteurs anciens par des radiateurs performants, installer du double vitrage, isoler les murs et les combles. Ces travaux reduisent durablement la consommation. Aerer est necessaire mais ouvrir en permanence gaspille l'energie."
    }
  ]
}
```

### CHECKLIST FINALE (a verifier avant de fournir le JSON)

- [ ] Le JSON est syntaxiquement valide
- [ ] Le champ "scenario" contient toute la situation, les 5 documents de reference et les rappels
- [ ] Il y a entre 10 et 14 questions
- [ ] Chaque question a un "type" qui vaut "qcm" ou "texte" (rien d'autre)
- [ ] Pour les QCM : le champ "correct" est un index 0-based valide (pas superieur au nombre de choix - 1)
- [ ] Pour les texte : le champ "reponse" contient une reponse courte et claire
- [ ] Les 4 axes du programme sont couverts (sources d'energie, effets environnement, calculs, eco-gestes)
- [ ] Consommation annuelle = kWh/m2/an x surface (verifie avec calculatrice)
- [ ] Emissions CO2 = consommation x facteur d'emission (verifie)
- [ ] Economie = consommation x (degres x 7%) (verifie)
- [ ] Les conversions g -> kg sont correctes (diviser par 1000)
- [ ] La classe DPE correspond bien a la consommation indiquee
- [ ] Pas d'accents dans le JSON
- [ ] Chaque question a un champ "explication" pedagogique
- [ ] Le personnage et les circonstances sont DIFFERENTS de l'exemple

Genere maintenant une etude de cas complete avec les parametres personnalises ci-dessus. Fournis UNIQUEMENT le JSON brut, sans commentaires avant ou apres.

## FIN DU PROMPT A COPIER

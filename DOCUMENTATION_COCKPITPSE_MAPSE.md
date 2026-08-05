# Documentation de reference - CockpitPSE et mapse.fr

Date d'audit: 2026-08-05

Perimetre de cette note:
- depot local `CockpitPSE`
- depot local `PSE`
- verification rapide de la page publique [mapse.fr](https://mapse.fr/) le 2026-08-05

## 1. Conclusion simple

Il faut separer tres clairement deux univers:

1. `CockpitPSE` est le cote professeur, administration, edition, pilotage, correction, suivi et animation.
2. `mapse.fr` est le cote eleve, diffusion, consultation, entrainement, passage d'activites et depot de reponses.
3. Les deux sont relies surtout par Firebase / Firestore: le cockpit ecrit ou pilote, le site eleve lit, affiche, fait repondre, puis reecrit les resultats.

Autrement dit:

- `CockpitPSE` = back-office enseignant
- `mapse.fr` = front-office eleve
- Firestore = colonne vertebrale commune

La confusion vient du fait que plusieurs boutons "eleves" visibles dans `CockpitPSE` ouvrent en realite des pages du depot `PSE`, et que le site `mapse.fr` contient aussi beaucoup de pages historiques ou autonomes qui ne passent pas toutes par un editeur du cockpit.

## 2. Ce qu'est `CockpitPSE`

### 2.1 Role general

`CockpitPSE` est une console professeur qui rassemble:

- des guides et ressources pedagogiques
- des outils de suivi et de notation
- des editeurs pour fabriquer des contenus interactifs
- des pages prof pour piloter des activites en direct
- des outils de session, de sondage, de quiz et d'atelier
- des raccourcis vers les pages eleves du site `PSE`

### 2.2 Volume et structure

Au moment de l'audit:

- `CockpitPSE` contient `76` fichiers HTML a la racine
- dont `18` pages `prof_*.html`
- `11` pages `editeur_*.html`
- `4` pages `eleve_*.html` locales au cockpit
- `4` pages `ecran_*.html`
- `1` page `wall_*.html`

Repertoires structurants du depot:

- `cap-psr-guide`
- `editeur_devoir`
- `editeur_grille_ccf`
- `images`
- `jeux-live`

### 2.3 Les grandes zones du cockpit

#### Tableau de bord

Le tableau de bord centralise:

- l'annuaire local RGPD des eleves importe depuis un CSV
- des raccourcis rapides vers des outils majeurs
- un planning local
- des memos contextuels
- un agenda local
- l'etat d'authentification

Important:

- l'annuaire local reste sur l'ordinateur et ne vit pas dans Firestore
- il sert a afficher les noms a cote des codes dans plusieurs vues

#### Pédagogie

La zone `Cours & guides` regroupe surtout:

- des sequences Bac Pro
- une entree `Prepa epreuve Bac Pro`
- le `Bac blanc 2025` corrige
- le referentiel `CAP PSR`
- le `Guide PSE Bac Pro`
- le `Journal de formation`
- le `Guide chef-d'oeuvre CAP`
- le `Guide module C10`
- le `Guide Enseigner & Former`
- le guide `Objectifs pedagogiques`
- le guide `Communication orale`
- les outils `CCF`

Cette zone est surtout une bibliotheque de consultation enseignant.

#### Bibliothèque

La zone `Bibliotheque` sert de reservoir reutilisable de contenus pedagogiques.

Elle propose:

- un onglet `Exercices`
- un onglet `Quiz`
- un onglet `Evaluations`
- un onglet `Prompts IA`

Fonctions principales:

- importer du JSON genere par ChatGPT ou Claude
- filtrer par type et module
- previsualiser les donnees JSON
- charger un pack type `Pack Foucher`

Cette zone est importante parce qu'elle fait le lien entre generation IA et stockage structuré des activites.

#### Atelier de rédaction

La zone `Atelier de redaction` embarque `notes.html` dans une iframe.

Elle sert a l'ecriture et au travail de notes, avec persistance locale et/ou Firestore selon les fonctions utilisees.

#### Outils d'évaluation

La zone `Outils d'evaluation` regroupe:

- `pageprof.html`
- `nettoyage-doublons.html`
- les pages `CCF`
- le `journal-formation-v2-2.html` lie au referentiel de competences

On est ici du cote evaluation formelle, maintenance et certification.

#### Scores exercices

La zone `Scores exercices` est en realite une vue de suivi des competences et notes.

Elle permet:

- de charger les dernieres evaluations recues
- de filtrer par classe, eleve, exercice, statut et mois
- de voir l'etat des copies
- de lancer de l'auto-correction en lot dans certains cas
- d'ouvrir un `Dossier Classe`
- de calculer une moyenne filtree

Cette zone exploite surtout les resultats enregistres apres passage des activites cote eleve.

#### Demandes 2e chance

Cette zone gere les demandes d'un eleve qui souhaite renvoyer un travail deja soumis.

Le cockpit permet:

- de lister les demandes
- de filtrer par classe et statut
- d'accepter ou refuser

#### Alertes doublons

Cette zone surveille les tentatives de renvoi non autorisees.

Elle sert a:

- detecter les renvois multiples
- surveiller les comportements anormaux
- marquer les alertes comme lues

#### Classe

La zone `Classe` regroupe:

- `Classes & groupes`
- `Plan de classe`
- `Participation`

Elle sert a la gestion pratique du groupe et a l'affichage en salle.

#### Classe en temps reel

C'est la zone la plus fortement reliee a `mapse.fr`.

On y trouve cinq sous-familles:

1. `S'exprimer / Explorer`
2. `Auto-Evaluations`
3. `Exercices interactifs`
4. `Lire et Ecrire`
5. `Travail collaboratif`

Dans cette zone, beaucoup de boutons `Eleves` ouvrent des pages `../PSE/...`, donc des pages du site eleve.

#### Jeux Live QR

`jeux-live/animateur.html` correspond a une logique d'animation QR / party live, avec sa bibliotheque propre.

#### Sessions & sondages

Cette zone sert a:

- demarrer des sessions
- gerer une bibliotheque d'activites rapides
- creer des sondages, quiz ou nuages
- consulter des archives

Elle repose sur des collections de type `sessions` et `library`.

#### Mode Cafe / Atelier IA

Cette zone est un generateur d'evenements pedagogiques.

Elle permet de:

- creer un cafe / atelier
- definir titre, date, theme, public
- choisir les modules de la sequence
- coller une source pedagogique ou importer un fichier
- generer des activites via IA
- coller un JSON de retour
- lancer une activite complete

Particularites:

- une cle API Anthropic peut etre stockee localement
- cette zone n'est pas le coeur du site `mapse.fr`, mais un moteur d'animation enseignant

#### Sites favoris

Cette zone contient des raccourcis externes:

- Portail Academie
- Eduscol
- ENT / Mail pro
- INRS
- Sante Publique France
- page `frequentation.html`

### 2.4 Les pages structurantes du cockpit

#### Pages editeur

Pages `editeur_*.html` reperees a la racine:

- `editeur_bac_competences.html`
- `editeur_carte_mentale.html`
- `editeur_eval.html`
- `editeur_eval_competences.html`
- `editeur_eval_v2.html`
- `editeur_exercices.html`
- `editeur_exercices_budget.html`
- `editeur_lire_ecrire.html`
- `editeur_parcours.html`
- `editeur_quiz.html`
- `editeur_resume_pse_cap.html`

Lecture fonctionnelle:

- `editeur_eval.html` = ancien flux d'evaluation
- `editeur_eval_v2.html` = flux moderne d'auto-evaluation
- `editeur_exercices.html` = creation d'exercices publies ensuite cote eleve
- `editeur_parcours.html` = creation de parcours d'entrainement
- `editeur_lire_ecrire.html` = creation du reservoir `Lire et Ecrire`
- `editeur_quiz.html` = banque de quiz live

#### Pages prof

Pages `prof_*.html` reperees a la racine:

- `prof_demarche.html`
- `prof_dilemme.html`
- `prof_eval_v2.html`
- `prof_ishikawa.html`
- `prof_itamami.html`
- `prof_meteo.html`
- `prof_mindmap.html`
- `prof_nuage.html`
- `prof_pad.html`
- `prof_plan.html`
- `prof_postit.html`
- `prof_proust.html`
- `prof_qqoqcp.html`
- `prof_quiz.html`
- `prof_quiz_emotions.html`
- `prof_roue.html`
- `prof_stress.html`
- `prof_vraifaux.html`

Lecture fonctionnelle:

- ces pages sont les consoles de pilotage enseignant
- elles ouvrent, verrouillent, reinitialisent, moderent ou affichent les productions eleves

### 2.5 Collections et donnees majeures cote cockpit

Les pages du cockpit manipulent notamment:

- `exercices_banque`
- `eval_banque`
- `eval_banque_v2`
- `parcours_banque`
- `lire_ecrire_banque`
- `quiz_banque`
- `resultats`
- `eval_reponses`
- `eval_sessions`
- `sessions`
- `library`
- `demandes_2chance`
- `alertes_doublons`
- `analytics`
- `consultations`
- `notes`
- `classActions`

Et pour les outils live:

- `nuage_attente`, `nuage_mots`, `nuage_presence`
- `meteo_finale_v2`
- `vraifaux_playlist`, `vraifaux_reponses`
- `quiz_live_presence`, `quiz_live_reponses`, `quiz_live_config`
- `quiz_emo_presence`, `quiz_emo_reponses`
- `roue_presence`, `roue_reponses`, `roue_config`
- `proust_presence`, `proust_reponses`, `proust_config`
- `stress_presence`, `stress_reponses`
- `dilemme_presence`, `dilemme_reponses`, `dilemme_config`
- `mindmap_ideas`, `mindmap_config`
- `qqoqcp_ideas`, `qqoqcp_items`, `qqoqcp_presence`, `qqoqcp_config`
- `ishikawa_ideas`, `ishikawa_items`, `ishikawa_presence`, `ishikawa_config`
- `itamami_ideas`, `itamami_items`, `itamami_presence`, `itamami_config`
- `pad_ideas`, `pad_items`, `pad_presence`, `pad_config`
- `postit_ideas`, `postit_board`, `postit_presence`, `postit_config`

## 3. Ce qu'est `mapse.fr` / le depot `PSE`

### 3.1 Role general

Le site `mapse.fr` est l'espace eleve.

Il sert a:

- consulter les cours
- reviser
- lancer des exercices
- suivre des parcours
- passer des auto-evaluations
- rejoindre des activites de classe en direct
- consulter ses resultats

### 3.2 Volume et structure

Au moment de l'audit:

- le depot `PSE` contient `946` fichiers HTML a la racine
- il contient `18` pages `eleve_*.html` a la racine
- il contient un grand volume de pages de cours et d'exercices autonomes

Repertoires visibles a la racine:

- `A5`
- `B1`
- `B3`
- `B5`
- `C1`
- `C4`
- `CAPA6`
- `_archive`
- `assets`
- `bacproC2`
- `bcp_1ere_C3`
- `bcp_term_A9`
- `bcp_term_C12`
- `bcp_term_C9`
- `css`
- `devoirs`
- `exercices`
- `fiches-revision`
- `flashcard_acteur_prevention`
- `fonts`
- `images`
- `images_legendes`
- `imagesrps`
- `img`
- `incoming-images`
- `moduleC11`
- `module_C7`
- `pfmp-agora`
- `pictogrammes`
- `psr`
- `soutien_parcours`

Conclusion importante:

- `mapse.fr` n'est pas seulement une page d'accueil avec quelques boutons
- c'est une tres grosse bibliotheque de pages de cours, exercices, revisions, jeux et parcours
- la page d'accueil ne montre qu'une partie organisee de cet ensemble

### 3.3 Ce qui est visible sur la page d'accueil

La page d'accueil verifiee le 2026-08-05 sur [mapse.fr](https://mapse.fr/) correspond globalement au depot local `PSE/index.html`.

Les grandes rubriques visibles sont:

#### MON ESPACE

Cette rubrique contient notamment:

- `Guide eleve PSE`
- `Mes resultats`
- `Soutien au parcours en baccalaureat professionnel`
- `PFMP AGOrA - mon carnet de stage`
- `Bilan de ma semaine`
- `Se connaitre et progresser`
- `Coup de pouce`

`Se connaitre et progresser` comprend des themes de competences psychosociales:

- mieux me connaitre
- comprendre les emotions
- reussir mes echanges
- auto-controle
- maitrise des emotions
- resolution des conflits

`Coup de pouce` renvoie vers:

- `lire_ecrire.html`
- `lire_ecrire_cuisine.html`
- `exercices.html`

#### S'ENTRAINER AUX COMPETENCES (CAP & BAC PRO)

Cette rubrique sert d'entrainement transversal par competence.

Elle propose au moins:

- `C1 - Traiter une information`
- `C2 - Les outils d'analyse (QQOQCP, PAD, ITaMaMi)`
- `C3 - Expliquer / mettre en relation`
- `C4 - Proposer une solution`
- `C5 - Argumenter un choix`
- `C6 - Communiquer`

Ici, beaucoup de pages sont des exercices autonomes, pas forcement issus d'un editeur du cockpit.

#### COURS CAP

Cette rubrique est tres dense.

Elle contient:

- le bloc `CPS`
- des thematiques A, B, C, D
- pour chaque module: cours, revision, exercices, flashcards, auto-evaluation, parfois escape game, parfois version adaptee

On y trouve aussi des parcours differencies et des versions adaptees selon le public.

#### COURS CAPa / Bac Pro / autres niveaux

Le site porte aussi des contenus pour:

- CAPa
- Bac Pro seconde
- Bac Pro premiere
- Bac Pro terminale

Le principe reste souvent le meme:

- cours
- revision
- exercices
- flashcards
- auto-evaluation
- parfois evaluation corrigee
- parfois escape game

#### PREPA EPREUVE BAC PRO

La page d'accueil locale du cockpit renvoie deja vers cette logique. Cote site eleve, elle s'insere dans les ressources de revision et de preparation.

#### EXERCICES ET REVISIONS

Cette rubrique contient trois sous-familles majeures.

1. `Jeux pedagogiques & Exercices en ligne`
2. `Apprendre a communiquer`
3. `Outils de classe`

Contenu notable:

- `exercices.html` = catalogue / lecteur d'exercices en ligne
- `exercice_legende.html?src=bibliotheque_legende.json` = page speciale `Legender une image`
- une serie de pages `communication_*`
- les pages eleves de classe en direct

#### EVALUATIONS

La rubrique `Evaluations` renvoie aujourd'hui, pour CAP comme pour Bac Pro, vers:

- `eleve_eval_v2.html`

#### RESSOURCES

La rubrique `Ressources` contient notamment:

- `glossairegemini.html`
- des ressources sur les risques professionnels
- des flashcards
- des acces complementaires comme l'espace parents

### 3.4 Les pages techniques importantes cote eleve

#### `exercices.html`

Cette page:

- lit la collection `exercices_banque`
- ne charge que les exercices publies
- affiche le catalogue des exercices en ligne

Important:

- c'est la page eleve visible derriere le bouton `Exercices en ligne`
- ce n'est pas l'editeur

#### `parcours.html`

Cette page:

- lit `parcours_banque`
- charge des parcours publies
- peut lancer des exercices references via `ref_exercice_id`

Donc un parcours peut etre un assemblage de plusieurs exercices bancarises.

#### `lire_ecrire.html`

Cette page:

- lit `lire_ecrire_banque`
- sert de lecteur eleve pour les activites `Lire et Ecrire`

#### `eleve_eval_v2.html`

Cette page:

- lit les banques d'evaluation `eval_banque` et `eval_banque_v2`
- enregistre les reponses dans `eval_reponses`
- ecrit aussi les resultats dans `resultats/{eleveCode}/...`

Elle correspond a la page que tu m'as montree: `https://mapse.fr/eleve_eval_v2.html`.

#### Pages live eleves

La page d'accueil eleve expose notamment:

- `eleve_nuage.html`
- `eleve_postit.html`
- `eleve_meteo.html`
- `eleve_vraifaux.html`
- `eleve_quiz.html`
- `eleve_collecte.html?mode=mindmap`
- `eleve_collecte.html?mode=itamami`
- `eleve_collecte.html?mode=qqoqcp`
- `eleve_collecte.html?mode=pad`
- `eleve_collecte.html?mode=ishikawa`
- `eleve_roue.html`
- `eleve_proust.html`
- `eleve_quiz_emotions.html`
- `eleve_stress.html`
- `eleve_dilemme.html`

Note importante:

- le depot contient aussi des pages dediees `eleve_mindmap.html`, `eleve_qqoqcp.html`, `eleve_itamami.html`, `eleve_pad.html`, `eleve_ishikawa.html`
- mais la page d'accueil actuelle passe plutot par `eleve_collecte.html?mode=...`
- cela suggere un melange de pages anciennes, pages specialisees et page collecteur unifiee

### 3.5 Ce qui ne passe pas forcement par le cockpit

C'est un point essentiel.

Sur `mapse.fr`, il y a deux grandes familles de contenus:

1. les contenus "bancarises" qui passent par des collections Firestore et des editeurs du cockpit
2. les pages HTML autonomes, deja ecrites en dur, qui existent comme ressources completes sans passer par un editeur central

Exemples de contenus bancarises:

- exercices en ligne
- auto-evaluations
- parcours
- lire / ecrire
- quiz live

Exemples de contenus souvent autonomes:

- beaucoup de cours de module
- beaucoup d'exercices historiques par niveau ou thematique
- des simulations, laboratoires virtuels, flashcards, pages de revision

Donc:

- supprimer un exercice dans `exercices_banque` ne supprime pas une page HTML autonome
- supprimer une page HTML autonome ne supprime pas la banque Firestore
- un bouton visible dans `mapse.fr` peut ouvrir soit un contenu dynamique, soit une page totalement statique

## 4. Comment `CockpitPSE` et `mapse.fr` sont relies

### 4.1 Lien structurel

Les deux depots utilisent la meme configuration Firebase / Firestore.

Cela veut dire:

- meme projet de donnees
- memes collections
- meme logique de lecture / ecriture

En pratique:

- le cockpit produit, publie, pilote ou corrige
- le site eleve lit, lance, repond et depose

### 4.2 Schema general de fonctionnement

Le cycle le plus frequent est:

1. le professeur cree un contenu dans `CockpitPSE`
2. ce contenu est enregistre dans une collection Firestore
3. une page eleve `mapse.fr` lit cette collection
4. l'eleve interagit
5. les reponses ou resultats sont ecrits en base
6. le cockpit lit ensuite ces retours pour suivi, correction ou recapitulatif

### 4.3 Tableau des principales liaisons

| Fonction | Cote CockpitPSE | Collection(s) | Cote mapse.fr / PSE | Remarque |
| --- | --- | --- | --- | --- |
| Exercices en ligne | `editeur_exercices.html` | `exercices_banque` | `exercices.html` | Le cockpit cree, publie et retire; la page eleve affiche les exercices publies |
| Exercices budget | `editeur_exercices_budget.html` | `exercices_banque` | `exercices.html` | Variation specialisee d'edition, meme reservoir principal |
| Parcours d'entrainement | `editeur_parcours.html` | `parcours_banque`, liens vers `exercices_banque` | `parcours.html` | Un parcours appelle des exercices par reference |
| Lire et Ecrire | `editeur_lire_ecrire.html` | `lire_ecrire_banque` | `lire_ecrire.html` | Meme logique: editeur prof, lecteur eleve |
| Auto-evaluations | `editeur_eval_v2.html` | `eval_banque_v2` | `eleve_eval_v2.html` | Flux moderne d'auto-evaluation |
| Auto-evaluations legacy | `editeur_eval.html` | `eval_banque` | `eleve_eval.html` et compat dans `eleve_eval_v2.html` | Ancien flux encore visible en compatibilite |
| Resultats auto-evals | `prof_eval_v2.html`, `recap-notes.html` | `eval_reponses`, `resultats`, `eval_sessions` | `eleve_eval_v2.html` | L'eleve depose, le cockpit suit et corrige |
| Quiz live | `editeur_quiz.html`, `prof_quiz.html`, `wall_quiz.html` | `quiz_banque`, `quiz_live_presence`, `quiz_live_reponses`, `quiz_live_config` | `eleve_quiz.html` | Banque + animation live |
| Nuage de mots | `prof_nuage.html` | `nuage_attente`, `nuage_mots`, `nuage_presence`, `nuage_etat` | `eleve_nuage.html` | Moderation prof avant affichage |
| Meteo | `prof_meteo.html` | `meteo_finale_v2` | `eleve_meteo.html` | Remontee d'etat / energie / ressenti |
| Vrai/Faux | `prof_vraifaux.html`, `ecran_classe.html` | `vraifaux_playlist`, `vraifaux_reponses` | `eleve_vraifaux.html` | Activite live reponse par reponse |
| Roue emotions | `prof_roue.html` | `roue_presence`, `roue_reponses`, `roue_config` | `eleve_roue.html` | Animation emotionnelle en direct |
| Proust | `prof_proust.html` | `proust_presence`, `proust_reponses`, `proust_config` | `eleve_proust.html` | Questionnaire en direct |
| Quiz emotions | `prof_quiz_emotions.html` | `quiz_emo_presence`, `quiz_emo_reponses` | `eleve_quiz_emotions.html` | Variante thematique live |
| Stress | `prof_stress.html` | `stress_presence`, `stress_reponses` | `eleve_stress.html` | Thermometre / jauge live |
| Dilemmes | `prof_dilemme.html` | `dilemme_presence`, `dilemme_reponses`, `dilemme_config` | `eleve_dilemme.html` | Deliberation et arbitrage |
| Carte mentale / collectes | `prof_mindmap.html`, `prof_qqoqcp.html`, `prof_ishikawa.html`, `prof_itamami.html`, `prof_pad.html`, `prof_postit.html` | idees, items, presence, config selon l'outil | `eleve_collecte.html?mode=...`, `eleve_postit.html` | Outils collaboratifs orientes collecte / moderation |

### 4.4 Focus sur le cas qui t'a fait douter

#### Cas 1: "Exercices en ligne"

Ce sont deux choses differentes:

- `CockpitPSE/editeur_exercices.html` = l'outil prof pour creer / modifier / publier
- `PSE/exercices.html` = la page eleve qui liste et lance

Le bouton violet vu cote eleve dans `mapse.fr` ouvre la deuxieme, pas la premiere.

#### Cas 2: "Légender une image"

`Légender une image` n'est pas juste un bouton de `exercices.html`.

C'est une page specifique:

- `PSE/exercice_legende.html?src=bibliotheque_legende.json`

Donc:

- ce n'est pas exactement le meme flux qu'un exercice standard
- meme si l'ecosysteme peut reutiliser des types proches, le point d'entree est special

#### Cas 3: `eval_banque_v2`

`eval_banque_v2` correspond a la banque moderne des auto-evaluations.

Elle est pilotee par:

- `CockpitPSE/editeur_eval_v2.html`

Et consommee par:

- `PSE/eleve_eval_v2.html`
- `CockpitPSE/prof_eval_v2.html`
- `CockpitPSE/recap-notes.html`

Important:

- le systeme garde aussi des traces de compatibilite avec `eval_banque` ancien
- c'est pour cela qu'on voit encore les deux versions dans certaines pages

### 4.5 Resultats et corrections

Les reponses eleves ne restent pas uniquement dans la banque d'activites.

Selon les cas, on retrouve:

- `eval_reponses`
- `resultats/{eleveCode}/evaluations/...`
- `resultats/{eleveCode}/copies/...`
- des collections live de presence / reponses

Ensuite le cockpit exploite cela pour:

- lister les evaluations recues
- recalculer ou publier les notes
- faire des recaps
- detecter les doublons
- gerer la seconde chance

### 4.6 Ce qui reste local et ne relie pas directement les deux

Quelques donnees du cockpit restent locales au navigateur / poste:

- l'annuaire CSV des eleves
- certains memos et agendas
- certains `sessionId` stockes dans `localStorage`
- la cle API Anthropic du `Mode Cafe`

Donc:

- tout n'est pas dans Firestore
- certaines aides de confort n'existent que sur la machine enseignant

## 5. Reponse claire a la question "ou est l'editeur ?"

Si tu parles des **exercices en ligne standard** visibles cote eleve dans `mapse.fr`, l'editeur principal est:

- `CockpitPSE/editeur_exercices.html`

Si tu parles des **auto-evaluations**, l'editeur est:

- `CockpitPSE/editeur_eval_v2.html`

Si tu parles des **parcours d'entrainement**, l'editeur est:

- `CockpitPSE/editeur_parcours.html`

Si tu parles de **Lire et Ecrire**, l'editeur est:

- `CockpitPSE/editeur_lire_ecrire.html`

Si tu parles du **quiz live**, l'editeur est:

- `CockpitPSE/editeur_quiz.html`

Si tu parles de **Légender une image**, il faut etre prudent:

- le point d'entree eleve est une page speciale `exercice_legende.html`
- ce n'est pas le bouton le plus simple pour retrouver un "editeur unique" en une ligne
- il faut distinguer l'exercice standard de la page specialisee

## 6. Si quelque chose semble avoir disparu

Quand un contenu "n'apparait plus", il faut verifier dans cet ordre.

### 6.1 Est-ce un contenu dynamique ou une page statique ?

Question cle:

- est-ce que l'objet venait d'un editeur du cockpit ?
- ou est-ce une page HTML deja presente dans `PSE` ?

Si c'est dynamique:

- verifier la collection Firestore
- verifier le champ `publie`
- verifier si l'identifiant existe encore

Si c'est statique:

- verifier le fichier HTML
- verifier le lien dans `PSE/index.html`

### 6.2 Pour un exercice en ligne standard

Verifier:

- `CockpitPSE/editeur_exercices.html`
- collection `exercices_banque`
- publication active
- affichage dans `PSE/exercices.html`

### 6.3 Pour une auto-evaluation

Verifier:

- `CockpitPSE/editeur_eval_v2.html`
- collection `eval_banque_v2`
- lecture dans `PSE/eleve_eval_v2.html`

### 6.4 Pour un parcours

Verifier:

- `CockpitPSE/editeur_parcours.html`
- collection `parcours_banque`
- les `ref_exercice_id` associes
- l'affichage dans `PSE/parcours.html`

### 6.5 Pour un outil live

Verifier:

- la page `prof_*.html` correspondante
- la page `eleve_*.html` ou `eleve_collecte.html?mode=...`
- les collections `presence`, `reponses`, `ideas`, `items` et `config`

## 7. Ce qu'il faut retenir une fois pour toutes

### 7.1 Ce qui est certain

- `CockpitPSE` n'est pas le site eleve
- `mapse.fr` n'est pas l'editeur prof
- les deux partagent la meme base de donnees
- beaucoup de boutons du cockpit ouvrent des pages eleves du depot `PSE`

### 7.2 La regle mentale la plus utile

Tu peux raisonner comme ca:

- "je cree" = cockpit
- "je pilote" = cockpit
- "je corrige" = cockpit
- "l'eleve voit" = mapse.fr / PSE
- "l'eleve repond" = mapse.fr / PSE
- "les donnees transitent" = Firestore

### 7.3 Pourquoi tu as eu l'impression qu'un editeur avait disparu

Parce que la plateforme melange:

- des editeurs prof
- des lecteurs eleves
- des pages live
- des pages historiques autonomes
- des compatibilites anciennes (`eval_banque` / `eval_banque_v2`)

Donc un bouton cote eleve ne renvoie pas forcement vers "son" editeur visible a cote.

## 8. Annexes

### 8.1 Pages eleves reperees a la racine du depot `PSE`

- `eleve_collecte.html`
- `eleve_dilemme.html`
- `eleve_eval.html`
- `eleve_eval_v2.html`
- `eleve_ishikawa.html`
- `eleve_itamami.html`
- `eleve_meteo.html`
- `eleve_mindmap.html`
- `eleve_nuage.html`
- `eleve_pad.html`
- `eleve_postit.html`
- `eleve_proust.html`
- `eleve_qqoqcp.html`
- `eleve_quiz.html`
- `eleve_quiz_emotions.html`
- `eleve_roue.html`
- `eleve_stress.html`
- `eleve_vraifaux.html`

### 8.2 Pages du cockpit qui servent de pivots majeurs

- `index.html`
- `editeur_exercices.html`
- `editeur_eval_v2.html`
- `editeur_parcours.html`
- `editeur_lire_ecrire.html`
- `editeur_quiz.html`
- `prof_eval_v2.html`
- `recap-notes.html`
- `pageprof.html`
- `dossier-classe.html`
- `suivi-complet.html`
- `bilans-eleves.html`
- `frequentation.html`

### 8.3 Lecture d'architecture en une phrase

`CockpitPSE` fabrique et pilote; `mapse.fr` diffuse et fait travailler les eleves; Firestore relie les deux; et le depot `PSE` contient en plus une masse de pages pedagogiques autonomes qui depassent largement les seuls contenus edites depuis le cockpit.

export const SAMPLE_LIBRARY = [
  {
    id: "battle_slogans_demo",
    type: "battle_slogans",
    titre: "Battle de slogans",
    description: "Objets absurdes et slogans a inventer.",
    temps_reponse: 60,
    temps_vote: 30,
    points: { participation: 1, gagnant: 5, deuxieme: 3 },
    anonyme: true,
    manches: [
      {
        id: "slogan_01",
        objet: "Une eponge magique",
        contexte: "Produit de teleachat",
        consigne: "Invente le meilleur slogan publicitaire pour vendre cette eponge.",
        contraintes: ["Court", "Drole", "Pas vulgaire"],
        exemples: ["Elle absorbe meme tes regrets.", "L'eponge qui redonne confiance a ton evier."],
        difficulte: "facile"
      },
      {
        id: "slogan_02",
        objet: "Un cartable qui fait les devoirs",
        contexte: "Rentree scolaire imaginaire",
        consigne: "Trouve un slogan irresistible pour ce cartable.",
        contraintes: ["Pas plus de 12 mots"],
        exemples: ["Porte tes cahiers, sauve tes soirees.", "Le cartable qui revise pendant que tu respires."],
        difficulte: "moyen"
      }
    ]
  },
  {
    id: "question_classement_demo",
    type: "question_classement",
    titre: "Question classement",
    description: "Estimations et classements rapides.",
    temps_reponse: 45,
    points: { participation: 1, exact: 5, proche: 3 },
    manches: [
      {
        id: "classement_01",
        mode: "estimation",
        question: "Combien mesure environ la Tour Eiffel avec son antenne ?",
        unite: "metres",
        reponse_numerique: 330,
        tolerance: 10,
        explication: "La Tour Eiffel mesure environ 330 metres avec son antenne.",
        difficulte: "facile"
      },
      {
        id: "classement_02",
        mode: "classement",
        question: "Classe ces animaux du plus leger au plus lourd.",
        elements_a_classer: ["chat", "cheval", "elephant", "souris"],
        ordre_attendu: ["souris", "chat", "cheval", "elephant"],
        explication: "La souris est la plus legere, l'elephant le plus lourd.",
        difficulte: "facile"
      }
    ]
  },
  {
    id: "mime_challenge_demo",
    type: "mime_challenge",
    titre: "Mime challenge",
    description: "Defis secrets a faire deviner.",
    temps_mime: 45,
    mode: "joueur_designe",
    joueur_designe_aleatoire: true,
    points: { mime_reussi: 2, devineur: 3, total_reussite: 5 },
    defis: [
      {
        id: "mime_01",
        categorie: "Situation absurde",
        texte_secret: "Tu es dans un ascenseur qui tombe en panne.",
        indice_public: "Situation du quotidien qui tourne mal",
        difficulte: "facile"
      },
      {
        id: "mime_02",
        categorie: "Sport",
        texte_secret: "Tu fais du ski pour la premiere fois.",
        indice_public: "Sport d'hiver",
        difficulte: "moyen"
      }
    ]
  },
  {
    id: "times_up_demo",
    type: "times_up",
    titre: "Time's Up numerique",
    description: "Trois manches avec les memes cartes.",
    temps_par_tour: 60,
    points_mot_trouve: 1,
    nombre_manches: 3,
    manches: [
      { numero: 1, nom: "Phrases autorisees", regle: "Faire deviner avec des phrases, sans dire le mot exact." },
      { numero: 2, nom: "Un seul mot", regle: "Faire deviner avec un seul mot." },
      { numero: 3, nom: "Mime", regle: "Faire deviner uniquement avec des gestes." }
    ],
    cartes: [
      { id: "timesup_001", mot: "Pizza", categorie: "Nourriture", difficulte: "facile", interdits: ["fromage", "four"] },
      { id: "timesup_002", mot: "Sherlock Holmes", categorie: "Personnage", difficulte: "moyen", interdits: ["detective", "loupe"] },
      { id: "timesup_003", mot: "Aspirateur", categorie: "Objet", difficulte: "facile", interdits: ["poussiere", "menage"] }
    ]
  },
  {
    id: "mot_interdit_demo",
    type: "mot_interdit",
    titre: "Devine le mot interdit",
    description: "Faire deviner sans utiliser les mots pieges.",
    temps: 45,
    points: { joueur_fait_deviner: 2, joueur_devine: 3 },
    cartes: [
      {
        id: "motinterdit_001",
        mot_secret: "Plage",
        categorie: "Lieu",
        mots_interdits: ["mer", "sable", "soleil", "vacances", "serviette"],
        indices_autorises: ["On peut y marcher pieds nus.", "On y entend souvent des vagues."],
        difficulte: "facile"
      },
      {
        id: "motinterdit_002",
        mot_secret: "Cinema",
        categorie: "Loisir",
        mots_interdits: ["film", "ecran", "popcorn", "acteur", "salle"],
        indices_autorises: ["On y va souvent le soir.", "Il faut parfois reserver."],
        difficulte: "moyen"
      }
    ]
  },
  {
    id: "quiz_fun_demo",
    type: "quiz_fun",
    titre: "Quiz culture generale fun",
    description: "Questions rapides et accessibles.",
    temps_question: 25,
    points: { bonne_reponse: 5, bonus_rapidite: true },
    questions: [
      {
        id: "quiz_001",
        question: "Quelle planete est surnommee la planete rouge ?",
        choix: ["Mars", "Venus", "Jupiter", "Saturne"],
        bonne_reponse: "Mars",
        explication: "Mars doit ce surnom a sa couleur rougeatre.",
        categorie: "Espace",
        difficulte: "facile"
      },
      {
        id: "quiz_002",
        question: "Quel animal est connu pour dormir tres longtemps ?",
        choix: ["Girafe", "Koala", "Dauphin", "Fourmi"],
        bonne_reponse: "Koala",
        explication: "Le koala peut dormir une grande partie de la journee.",
        categorie: "Animaux",
        difficulte: "facile"
      }
    ]
  }
];

export const GLOBAL_EXAMPLE = {
  id: "soiree_amis_001",
  titre: "Soiree entre amis",
  description: "Jeux rapides et amusants pour une soiree conviviale.",
  version: "1.0",
  public: "amis",
  mode: "multijoueur",
  parametres: {
    affichage: {
      theme: "moderne",
      taille_texte_projecteur: "grand",
      taille_texte_mobile: "grand",
      animations: true,
      mode_plein_ecran: true
    },
    scores: {
      activer_scores: true,
      afficher_classement_apres_chaque_manche: true,
      points_participation: 1
    },
    temps: {
      chronometre_visible: true,
      son_fin: true
    },
    historique: {
      enregistrer_partie: true,
      export_csv: true,
      export_json: true
    }
  },
  jeux: SAMPLE_LIBRARY
};


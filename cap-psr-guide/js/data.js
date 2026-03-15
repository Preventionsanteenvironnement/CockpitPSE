// =============================================================================
// CAP PSR - DONNEES COMPLETES DU REFERENTIEL
// Production et Service en Restaurations (rapide, collective, cafeteria)
// Arrete du 29 octobre 2019
// =============================================================================

const DATA = {

  // =========================================================================
  // POLES
  // =========================================================================
  poles: [
    {
      id: 1,
      nom: "Production alimentaire",
      description: "Bloc de compétences n\u00b01 - Production alimentaire",
      couleur: "#e67e22",
      activites: ["A1","A2","A3","A4","A5"],
      competences: ["C1","C2","C3","C4","C5"],
      epreuve: "EP1",
      savoirsCommuns: "SC1"
    },
    {
      id: 2,
      nom: "Service en restauration",
      description: "Bloc de compétences n\u00b02 - Service en restauration",
      couleur: "#2980b9",
      activites: ["A6","A7","A8","A9","A10"],
      competences: ["C6","C7","C8","C9","C10"],
      epreuve: "EP2",
      savoirsCommuns: "SC2"
    }
  ],

  // =========================================================================
  // ACTIVITES PROFESSIONNELLES (A1 - A10)
  // =========================================================================
  activites: [
    {
      id: "A1",
      pole: 1,
      nom: "Réception, stockage et mise en place des produits",
      taches: [
        { id: "A1T1", nom: "Réception et contr\u00f4le des livraisons" },
        { id: "A1T2", nom: "Desemballage et tri des emballages" },
        { id: "A1T3", nom: "Stockage et rangement des produits dans les espaces appropriés" },
        { id: "A1T4", nom: "Réalisation des opérations de traçabilité" },
        { id: "A1T5", nom: "Mise en place des produits, des matériels et des ustensiles" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de réception et de desemballage",
          "Zone de stockage (enceintes froides positives et negatives, reserve sèche)",
          "Zone de stockage des produits non alimentaires",
          "Zone d'entreposage des déchets",
          "Outils et documents de gestion (bon de commande, bon de livraison, fiche de stock, facture)",
          "Fiches techniques, procédures, protocoles",
          "Plan de rangement",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire (PMS)",
          "Outils et documents de traçabilité",
          "Denrées, produits alimentaires et non alimentaires",
          "Outils de desemballage",
          "Matériel et outils de contr\u00f4le et de suivi (sondes, balances)",
          "Matériel de manutention",
          "Matériel de collecte, tri et transport des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Attitude d'autocontr\u00f4le permanente",
        "Contr\u00f4le quantitatif et qualitatif des livraisons conforme",
        "Traitement des produits non conformes selon les consignes",
        "Rangement des produits conforme aux règles et au plan de rangement",
        "Respect de la marche en avant",
        "Desemballage conforme aux procédures",
        "Mise en place conforme aux fiches techniques et aux consignes",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Tri et evacuation des déchets conformes aux consignes",
        "Renseignement précis des documents de traçabilité et application des mesures correctives"
      ],
      competences: ["C1"]
    },
    {
      id: "A2",
      pole: 1,
      nom: "Réalisation des opérations préliminaires sur les produits alimentaires",
      taches: [
        { id: "A2T1", nom: "Pesées et mesures des produits alimentaires" },
        { id: "A2T2", nom: "Lavage, decontamination des fruits et légumes" },
        { id: "A2T3", nom: "Epluchage et taillage des fruits et légumes" },
        { id: "A2T4", nom: "Decongelation des produits alimentaires" },
        { id: "A2T5", nom: "Conditionnement et stockage des produits alimentaires en attente d'utilisation ulterieure" },
        { id: "A2T6", nom: "Réalisation des opérations de traçabilité" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de stockage (enceintes froides positives et negatives, reserve sèche)",
          "Legumerie",
          "Zone de production culinaire",
          "Fiches techniques, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Denrées et produits alimentaires",
          "Produits de decontamination des fruits et légumes",
          "Matériel de pesée et de mesure",
          "Matériel de manutention",
          "Matériel d'épluchage, de taillage, de tranchage manuel ou mécanisé",
          "Matériel de maintien en température (chaud et froid)",
          "Matériel de collecte et tri des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Attitude d'autocontr\u00f4le permanente",
        "Contr\u00f4le qualitatif et quantitatif des produits a traiter conforme",
        "Pesées et mesures exactes",
        "Fruits et légumes laves, decontamines, epluches et tailles conformément aux consignes",
        "Decongelation conforme au protocole",
        "Conditionnement et stockage des produits en attente conformes",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Tri et evacuation des déchets conformes aux consignes",
        "Renseignement précis des documents de traçabilité et application des mesures correctives"
      ],
      competences: ["C2"]
    },
    {
      id: "A3",
      pole: 1,
      nom: "Réalisation de préparations et de cuissons simples",
      taches: [
        { id: "A3T1", nom: "Cuissons simples : à l'eau, à la vapeur, au four, saisies, grillées, toastees, gratinees, en friture" },
        { id: "A3T2", nom: "Préparations a chaud ou a froid à partir de produits semi-elabores ou elabores" },
        { id: "A3T3", nom: "Maintien ou remise en température des plats cuisines à l'avance" },
        { id: "A3T4", nom: "Réalisation des opérations de traçabilité" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de production culinaire",
          "Fiches techniques, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Denrées et produits alimentaires",
          "Matériel de contr\u00f4le des bains de friture",
          "Matériel et équipement de préparation et de cuisson",
          "Matériel de maintien et de remise en température",
          "Matériel de contr\u00f4le des températures",
          "Matériel de collecte et tri des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Attitude d'autocontr\u00f4le permanente",
        "Cuissons et préparations conformes aux fiches techniques",
        "Maîtrise de l'utilisation des appareils de cuisson et de maintien en température",
        "Contr\u00f4le des températures et application conforme des mesures correctives",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Tri et evacuation des déchets conformes aux consignes",
        "Renseignement précis des documents de traçabilité et application des mesures correctives"
      ],
      competences: ["C3"]
    },
    {
      id: "A4",
      pole: 1,
      nom: "Assemblage, dressage et conditionnement des préparations alimentaires",
      taches: [
        { id: "A4T1", nom: "Assemblage des produits alimentaires" },
        { id: "A4T2", nom: "Dressage et mise en valeur des préparations alimentaires" },
        { id: "A4T3", nom: "Conditionnement des préparations alimentaires" },
        { id: "A4T4", nom: "Entreposage des préparations en attente de distribution ou de vente" },
        { id: "A4T5", nom: "Réalisation des opérations de traçabilité" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de production culinaire, zone de conditionnement",
          "Fiches techniques, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Denrées et produits alimentaires",
          "Matériel et équipement de préparation, de cuisson et de conditionnement",
          "Cellule de refroidissement rapide",
          "Matériel de remise en température",
          "Matériel de maintien en température (chaud, froid)",
          "Matériel de contr\u00f4le de température",
          "Matériel de collecte et tri des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Attitude d'autocontr\u00f4le permanente",
        "Assemblage, dressage et conditionnement conformes aux fiches techniques",
        "Respect des consignes spécifiques (regimes, allergies)",
        "Entreposage conforme aux températures et règles de mise en attente",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Tri et evacuation des déchets conformes aux consignes",
        "Renseignement précis des documents de traçabilité et application des mesures correctives"
      ],
      competences: ["C4"]
    },
    {
      id: "A5",
      pole: 1,
      nom: "Mise en œuvre des opérations d'entretien dans les espaces de production",
      taches: [
        { id: "A5T1", nom: "Lavage manuel et mécanisé de la batterie de cuisine et des ustensiles" },
        { id: "A5T2", nom: "Nettoyage et désinfection des surfaces, équipements et matériels des espaces de production" },
        { id: "A5T3", nom: "Evacuation, tri et entreposage des déchets" },
        { id: "A5T4", nom: "Réalisation des opérations de traçabilité" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de stockage",
          "Zone de production",
          "Zone d'entreposage des déchets",
          "Fiches techniques, plans de nettoyage, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Produits d'entretien",
          "Matériel d'entretien manuel et mécanisé",
          "Matériel, équipement et produits de lavage de la batterie de cuisine et des ustensiles",
          "Consignes de tri des déchets",
          "Matériel de collecte, tri et transport des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Mise en place des équipements de protection collective",
        "Attitude d'autocontr\u00f4le permanente",
        "Nettoyage et désinfection conformes au plan de nettoyage, aux procédures, protocoles",
        "Lavage de la batterie de cuisine et des ustensiles conforme aux procédures, protocoles",
        "Application des dosages preconises",
        "Maîtrise de la consommation d'eau, de produits et de consommables",
        "Résultat conforme au travail prescrit",
        "Utilisation rationnelle des matériels de nettoyage dans le respect des règles de sécurité",
        "Entretien et rangement des matériels de nettoyage conforme aux consignes",
        "Conformité de la collecte, du tri et de l'entreposage des déchets",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Renseignement précis des documents de traçabilité et application des mesures correctives",
        "Signalement des anomalies, des dysfonctionnements"
      ],
      competences: ["C5"]
    },
    {
      id: "A6",
      pole: 2,
      nom: "Mise en place et réapprovisionnement des espaces de distribution, de vente et de consommation",
      taches: [
        { id: "A6T1", nom: "Mise en place des espaces de distribution, vente et consommation" },
        { id: "A6T2", nom: "Disposition des produits alimentaires et non alimentaires sur les espaces de distribution, de vente et de consommation" },
        { id: "A6T3", nom: "Affichage des informations relatives aux produits proposés" },
        { id: "A6T4", nom: "Participation à la mise en valeur des espaces avec des éléments d'ambiance, des supports promotionnels" },
        { id: "A6T5", nom: "Contr\u00f4le et réapprovisionnement des espaces de vente et de distribution en prenant en compte les flux, les stocks" },
        { id: "A6T6", nom: "Traitement des produits non servis et des invendus" },
        { id: "A6T7", nom: "Transmission des informations à l'équipe et à la hierarchie" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de distribution, de vente et de consommation",
          "Zone de stockage des produits",
          "Fiches techniques, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Produits alimentaires",
          "Matériels, équipements et consommables de distribution ou de vente",
          "Supports visuels de communication",
          "Matériel de collecte des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Attitude professionnelle adaptée à la situation",
        "Mise en place et réapprovisionnement des zones conformes aux fiches techniques, procédures, protocoles",
        "Conformité à l'image de marque de l'entreprise ou de l'établissement",
        "Traitement des produits non servis et des invendus conformément à la réglementation",
        "Execution de l'activité en respectant le confort et la sécurité du client ou convive",
        "Prise en compte des flux, des stocks au moment du réapprovisionnement pour limiter le gaspillage",
        "Utilisation rationnelle des équipements de distribution dans le respect des règles de sécurité",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Renseignement précis des documents de traçabilité et application des mesures correctives",
        "Signalement des anomalies, des dysfonctionnements"
      ],
      competences: ["C6"]
    },
    {
      id: "A7",
      pole: 2,
      nom: "Prise en charge des clients ou convives",
      taches: [
        { id: "A7T1", nom: "Accueil du client ou convive" },
        { id: "A7T2", nom: "Identification des besoins et des attentes du client ou convive" },
        { id: "A7T3", nom: "Proposition, suggestion de l'offre, vente additionnelle" },
        { id: "A7T4", nom: "Prise de commande" },
        { id: "A7T5", nom: "Gestion des objections, des reclamations" },
        { id: "A7T6", nom: "Prise de conge du client ou convive" },
        { id: "A7T7", nom: "Transmission des informations à l'équipe et la hierarchie" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle adaptée",
          "Zone de distribution, de vente et de consommation",
          "Procédures, protocoles",
          "Documents descriptifs des produits proposes : dénomination, composition, provenance, qualité, prix, promotion",
          "Documents de transmission des informations",
          "Outil numérique d'enregistrement des commandes",
          "Supports visuels de communication"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle adaptée à l'activité",
        "Attitude professionnelle adaptée à la situation",
        "Application du protocole d'accueil et de prise de conge interne à l'entreprise ou à l'établissement",
        "Prise en compte des besoins et des attentes du client ou du convive",
        "Prise en compte des consignes pour le service du jour",
        "Proposition argumentee de l'offre, des ventes additionnelles",
        "Prise de commande conforme à la demande du client ou du convive",
        "Reaction adaptée aux objections, aux reclamations du client ou du convive",
        "Communication reactive des informations à l'équipe de travail et la hierarchie"
      ],
      competences: ["C7"]
    },
    {
      id: "A8",
      pole: 2,
      nom: "Service aux clients ou convives",
      taches: [
        { id: "A8T1", nom: "Préparation des éléments de la commande" },
        { id: "A8T2", nom: "Conditionnement pour la vente a emporter : mise en sachet, en carton, en barquette" },
        { id: "A8T3", nom: "Service des repas" },
        { id: "A8T4", nom: "Reperage et traitement des anomalies en zone de distribution, vente et consommation et alerte à la hierarchie" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle adaptée",
          "Zone de production",
          "Zone de distribution, vente et consommation",
          "Commande du client ou convive",
          "Fiches techniques, procédures, protocoles",
          "Plan de maîtrise sanitaire",
          "Outils et documents de traçabilité",
          "Produits alimentaires et consommables",
          "Matériel de service",
          "Supports visuels de communication"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle adaptée à l'activité",
        "Attitude professionnelle adaptée à la situation",
        "Application des procédures et protocoles de conditionnement pour la vente a emporter, le service des repas",
        "Respect de l'image de marque et de qualité de l'entreprise ou de l'établissement",
        "Execution de l'activité en respectant le confort et la sécurité du client ou du convive",
        "Distribution des produits alimentaires, des consommables pour la vente sans gaspillage",
        "Maintien d'un environnement accueillant et fonctionnel pendant le service",
        "Utilisation du matériel de service en conformité avec les règles de sécurité",
        "Mise en œuvre des moyens de prévention des risques lies à l'activité physique",
        "Renseignement des documents de traçabilité et application conforme des mesures correctives",
        "Communication reactive des informations à l'équipe de travail et la hierarchie"
      ],
      competences: ["C8"]
    },
    {
      id: "A9",
      pole: 2,
      nom: "Encaissement des prestations",
      taches: [
        { id: "A9T1", nom: "Ouverture et cl\u00f4ture de caisse" },
        { id: "A9T2", nom: "Saisie des éléments de la prestation a encaisser" },
        { id: "A9T3", nom: "Traitement des encaissements" },
        { id: "A9T4", nom: "Information de la hierarchie en cas de dysfonctionnement, de difficulte" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle adaptée",
          "Zone de distribution, de vente et de consommation",
          "Procédures d'encaissement",
          "Notice d'utilisation de la caisse",
          "Documents descriptifs des préparations, des codes et des prix",
          "Matériel d'encaissement (caisse enregistreuse, calculatrice) et d'impression",
          "Logiciel de gestion assistee par ordinateur"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle adaptée à l'activité",
        "Application des procédures d'encaissement et de la sécurité des fonds",
        "Saisie exacte",
        "Encaissement fiable et rapide",
        "Communication adaptée, aisee avec la clientele",
        "Contr\u00f4le de la caisse au moment de l'ouverture et de la cl\u00f4ture",
        "Reactivité de la communication à la hierarchie en cas de dysfonctionnement, de difficulte"
      ],
      competences: ["C9"]
    },
    {
      id: "A10",
      pole: 2,
      nom: "Mise en œuvre des opérations d'entretien des espaces de distribution, vente, consommation et les locaux annexes",
      taches: [
        { id: "A10T1", nom: "Lavage manuel ou mécanisé de la vaisselle et des ustensiles" },
        { id: "A10T2", nom: "Nettoyage et désinfection des surfaces, équipements, matériels des espaces de distribution, vente et consommation" },
        { id: "A10T3", nom: "Nettoyage et désinfection des vestiaires et sanitaires" },
        { id: "A10T4", nom: "Evacuation, tri et entreposage des déchets" },
        { id: "A10T5", nom: "Réalisation des opérations de traçabilité" }
      ],
      conditions: {
        moyens: [
          "Tenue professionnelle et EPI adaptés",
          "Zone de distribution, de vente, de consommation, vestiaires, sanitaires",
          "Plan de maîtrise sanitaire",
          "Plan de nettoyage des espaces de distribution, vente et consommation",
          "Fiches techniques, procédures, protocoles",
          "Notice d'utilisation des matériels et produits",
          "Outils et documents de traçabilité",
          "Produits d'entretien",
          "Matériel d'entretien manuel et mécanisé",
          "Matériel de collecte, tri et transport des déchets",
          "Locaux d'entreposage des déchets"
        ],
        autonomie: "Dans le respect des procédures imposees, des consignes donnees et sous la responsabilité de sa hierarchie : autonome dans l'execution de ses taches, responsable de la conformité de son travail."
      },
      resultats: [
        "Port de la tenue professionnelle et des EPI adaptés à l'activité",
        "Mise en place des équipements de protection collective",
        "Attitude d'autocontr\u00f4le permanente",
        "Maîtrise de la consommation d'eau, de produits et de consommables",
        "Operations d'entretien et de désinfection conforme au plan de nettoyage, aux procédures, protocoles",
        "Application des dosages preconises",
        "Utilisation des matériels de nettoyage en conformité avec les règles de sécurité",
        "Execution de l'activité en respectant le confort et la sécurité du client ou convive",
        "Entretien et rangement des matériels de nettoyage conforme aux consignes",
        "Résultat conforme au travail prescrit",
        "Conformité de la collecte, du tri et de l'entreposage des déchets",
        "Mise en œuvre adaptée des moyens de prévention des risques lies à l'activité physique",
        "Renseignement précis des documents de traçabilité et application des mesures correctives",
        "Signalement des anomalies, des dysfonctionnements"
      ],
      competences: ["C10"]
    }
  ],

  // =========================================================================
  // COMPETENCES (C1 - C10) avec competences detaillees et indicateurs
  // =========================================================================
  competences: [
    {
      id: "C1",
      pole: 1,
      nom: "Réceptionner et stocker les produits alimentaires et non alimentaires",
      activites: ["A1"],
      epreuve: "EP1",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de réception et de desemballage",
        "Zone de stockage des produits alimentaires (enceintes froides positives et negatives, reserve sèche)",
        "Zone de stockage des produits non alimentaires",
        "Zone d'entreposage des déchets",
        "Outils (logiciel de gestion de stock) et documents de gestion (bon de commande, bon de livraison, fiche de stock, facture)",
        "Fiches techniques, procédures, protocoles",
        "Plan de rangement",
        "Notice d'utilisation des matériels et produits",
        "Plan de maîtrise sanitaire (PMS)",
        "Outils et documents de traçabilité",
        "Denrées, produits alimentaires et non alimentaires",
        "Outils de desemballage",
        "Matériel et outils de contr\u00f4le et de suivi (sondes, balances)",
        "Matériel de manutention",
        "Matériel de collecte, tri et transport des déchets"
      ],
      details: [
        {
          id: "C1.1",
          nom: "Réceptionner les livraisons et maintenir en ordre les zones de stockage",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique","Choix correct du matériel, des outils (contr\u00f4le, desemballage, transport...)"],
          indicateursSpecifiques: ["Zones de stockage ordonnees et propres","Contr\u00f4le quantitatif des livraisons","Contr\u00f4le qualitatif des livraisons","Traitement des produits non conformes selon les consignes","Renseignement conforme des documents de gestion et de traçabilité"]
        },
        {
          id: "C1.2",
          nom: "Desemballer les livraisons",
          indicateursCommuns: ["Utilisation conforme du matériel","Organisation rationnelle dans l'espace","Prise en compte des priorites, des contraintes"],
          indicateursSpecifiques: ["Utilisation adaptée des outils de desemballage","Conformité du tri et de l'evacuation des emballages"]
        },
        {
          id: "C1.3",
          nom: "Ranger les produits alimentaires et non alimentaires dans les espaces appropriés",
          indicateursCommuns: ["Prise en compte du developpement durable (ecogestes)","Respect du temps alloue"],
          indicateursSpecifiques: ["Respect du plan et des règles de rangement","Respect de la marche en avant","Application conforme des mesures correctives"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S1.1",
              nom: "Risques spécifiques aux activités de réception-stockage et moyens de prévention",
              limites: "Identifier les risques spécifiques rencontres au cours des activités de réception et stockage des produits. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques lies à la manutention, à la manipulation, les risques de chutes de plain-pied et de chutes de hauteur sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S1.2",
              nom: "Techniques professionnelles : règles de rangement, opérations de traçabilité",
              limites: "Énoncer et justifier les règles de rangement dans les différentes zones de stockage. Repérer dans le PMS les opérations de traçabilité a respecter lors des opérations de réception et stockage et les justifier."
            },
            {
              id: "S1.3",
              nom: "Équipements et matériels utilisés lors de la livraison, de la réception et du stockage",
              limites: "Indiquer le nom, la fonction d'usage et les règles d'utilisation des équipements et matériels. Interpréter les tableaux d'affichage, les enregistrements graphiques de températures sur les enceintes froides au regard de la réglementation."
            },
            {
              id: "S1.4",
              nom: "Produits non alimentaires",
              limites: "A partir d'étiquettes de produits non alimentaires, identifier les symboles de sécurité et indiquer les précautions a prendre lors du stockage. Justifier les lieux de stockage des différents types de produits non alimentaires réceptionnes."
            },
            {
              id: "S1.5",
              nom: "Outils numériques et documents professionnels",
              limites: "Indiquer le r\u00f4le du bon de commande et du bon de livraison. Indiquer le r\u00f4le de la fiche de stock. Identifier les composantes des documents professionnels utilisés."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S1.6",
              nom: "Conditions et durées de stockage des produits alimentaires",
              limites: "Pour un mode de conservation donne, justifier les conditions et les durées de stockage."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S1.7",
              nom: "Caractéristiques des produits alimentaires",
              limites: "Identifier les produits alimentaires courants. Caracteriser les différentes gammes de produits alimentaires. Indiquer les contr\u00f4les qualitatifs a effectuer a réception (date limite de consommation (DLC), date de durabilite minimale (DDM), intégrité et conformité des produits, des emballages, critères de fraicheur et de qualité...). A partir d'étiquettes de produits alimentaires, identifier les mentions obligatoires et selectionner les mentions utiles pour le stockage."
            },
            {
              id: "S1.8",
              nom: "Modifications des produits alimentaires lors du stockage",
              limites: "Indiquer les principales modifications subies par les produits alimentaires lors du stockage. Identifier les mesures a respecter pour limiter ces modifications."
            }
          ]
        }
      ]
    },
    {
      id: "C2",
      pole: 1,
      nom: "Réaliser les opérations préliminaires sur les produits alimentaires",
      activites: ["A2"],
      epreuve: "EP1",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de stockage des produits alimentaires (enceintes froides positives et negatives, reserve sèche)",
        "Legumerie",
        "Zone de production culinaire",
        "Fiches techniques, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Plan de maîtrise sanitaire",
        "Outils et documents de traçabilité",
        "Denrées et produits alimentaires",
        "Produits de decontamination des fruits et légumes",
        "Matériel de pesée et de mesure",
        "Matériel de manutention",
        "Matériel d'épluchage, de taillage, de tranchage manuel ou mécanisé",
        "Matériel de maintien en température (chaud et froid)",
        "Matériel de collecte et tri des déchets"
      ],
      details: [
        {
          id: "C2.1",
          nom: "Peser, quantifier les produits alimentaires",
          indicateursCommuns: ["Port de la tenue professionnelle","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique"],
          indicateursSpecifiques: ["Contr\u00f4le qualitatif des produits a traiter","Choix des matériels adaptés","Exactitude des pesées et des mesures","Conformité du tri et de l'evacuation des emballages"]
        },
        {
          id: "C2.2",
          nom: "Conduire une decongelation de produits alimentaires",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Decongelation des produits alimentaires conforme au protocole","Renseignement conforme et archivage des documents de traçabilité"]
        },
        {
          id: "C2.3",
          nom: "Préparer les fruits et légumes frais : laver, décontaminer, éplucher, tailler à la main ou à la machine",
          indicateursCommuns: ["Installation rationnelle du poste de travail","Utilisation conforme des équipements, du matériel, des ustensiles et des produits","Attitude d'autocontr\u00f4le permanente","Prise en compte du developpement durable (ecogestes)","Respect du temps alloue","Application conforme des mesures correctives"],
          indicateursSpecifiques: ["Lavage, decontamination des fruits et légumes conforme au protocole","Choix des matériels, accessoires et ustensiles adaptés","Conformité du tri et de l'evacuation des déchets","Conformité du taillage des fruits et légumes aux consignes"]
        },
        {
          id: "C2.4",
          nom: "Reserver les produits alimentaires dans l'attente de leur utilisation ulterieure",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Conditionnement et étiquetage conformes des produits alimentaires en attente","Conformité de la température et du lieu de stockage","Renseignement conforme des documents de traçabilité et archivage"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S2.1",
              nom: "Risques spécifiques aux opérations préliminaires et moyens de prévention",
              limites: "Identifier les risques spécifiques rencontres au cours des opérations préliminaires sur les produits alimentaires. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques mécanique, electrique et biologique sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S2.2",
              nom: "Techniques professionnelles liées aux opérations preliminaires : decontamination, decongelation, pesées et mesures, taillage des fruits et légumes, conditionnement et stockage des produits alimentaires",
              limites: "Pour chaque technique mise en oeuvre : énoncer l'objectif de la technique ; énoncer les contr\u00f4les qualité a réaliser au cours ou à l'issue de l'activité. Citer et convertir les unites de pesées et de mesures usuelles. Nommer les taillages les plus courants. Justifier les règles de conditionnement et de stockage des produits alimentaires en attente. Repérer dans le PMS les opérations de traçabilité a respecter lors du conditionnement et du stockage des produits alimentaires et les justifier."
            },
            {
              id: "S2.3",
              nom: "Matériels ou appareils de pesée, d'épluchage, de taillage, de tranchage",
              limites: "Indiquer le nom, la fonction d'usage des matériels et appareils utilisés. Repérer les éléments de sécurité et de réglage. Justifier le choix des accessoires en fonction du résultat souhaite. Identifier les dangers et citer les règles de sécurité a respecter. Indiquer les procédures de nettoyage et de désinfection."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S2.4",
              nom: "Prévention des contaminations lors des opérations préliminaires",
              limites: "Identifier les risques de contamination lors des opérations préliminaires sur les produits alimentaires. Citer les mesures preventives et réglementaires appliquées a ces opérations."
            },
            {
              id: "S2.5",
              nom: "Decongelation des produits alimentaires",
              limites: "Justifier les mesures réglementaires de decongelation des produits alimentaires."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S2.6",
              nom: "Influence du lavage et du taillage des fruits et légumes sur les constituants alimentaires",
              limites: "Indiquer les principales modifications subies lors du lavage et du taillage. Justifier les mesures a adopter pour limiter les modifications lors du lavage et du taillage."
            }
          ]
        }
      ]
    },
    {
      id: "C3",
      pole: 1,
      nom: "Réaliser des préparations et des cuissons simples",
      activites: ["A3"],
      epreuve: "EP1",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de production culinaire",
        "Fiches techniques, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Plan de maîtrise sanitaire",
        "Outils et documents de traçabilité",
        "Denrées et produits alimentaires",
        "Matériel de contr\u00f4le des bains de friture",
        "Matériel et équipement de préparation et de cuisson",
        "Matériel de maintien et de remise en température",
        "Matériel de contr\u00f4le des températures",
        "Matériel de collecte et tri des déchets"
      ],
      details: [
        {
          id: "C3.1",
          nom: "Mettre en œuvre des cuissons : à l'eau, à la vapeur, au four, saisies, grillées, toastees, gratinees, en friture",
          indicateursCommuns: ["Port de la tenue professionnelle","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique"],
          indicateursSpecifiques: ["Maîtrise de l'utilisation des appareils de cuisson","Contr\u00f4le de la cuisson","Respect des fiches techniques"]
        },
        {
          id: "C3.2",
          nom: "Réaliser a chaud ou a froid des préparations à partir de produits semi-elabores ou elabores",
          indicateursCommuns: ["Prise en compte des priorites, des contraintes","Choix adapté du matériel et des ustensiles","Respect des techniques, des procédures, des protocoles","Installation rationnelle du poste de travail","Conformité du résultat attendu","Attitude d'autocontr\u00f4le permanente","Prise en compte du developpement durable (ecogestes)","Respect du temps alloue","Renseignement conforme et archivage des documents de traçabilité","Application conforme des mesures correctives"],
          indicateursSpecifiques: ["Respect des modes d'emploi","Respect des pesées et des mesures","Maîtrise de l'utilisation des appareils"]
        },
        {
          id: "C3.3",
          nom: "Maintenir ou remettre en température des plats cuisines à l'avance",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Maîtrise de l'utilisation des appareils de maintien ou de remise en température","Rangement rationnel des préparations","Contr\u00f4le des températures et application conforme des mesures correctives","Conformité des durées d'entreposage"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S3.1",
              nom: "Risques spécifiques aux opérations de préparation et de cuisson et moyens de prévention",
              limites: "Identifier les risques spécifiques rencontres au cours des activités de préparation et de cuisson. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques de br\u00fblure et d'incendie sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S3.2",
              nom: "Techniques professionnelles de préparation et de cuisson",
              limites: "Pour chaque technique mise en oeuvre : énoncer l'objectif de la technique ; énoncer les contr\u00f4les qualité a réaliser au cours ou à l'issue de l'activité."
            },
            {
              id: "S3.3",
              nom: "Matériels ou appareils de préparation, cuisson, refroidissement rapide, conservation (chaud ou froid)",
              limites: "Indiquer le nom, la fonction d'usage et les règles d'utilisation des matériels et appareils. Indiquer les éléments de sécurité et de réglage. Justifier le choix des accessoires en fonction de la préparation a réaliser. Identifier les dangers et justifier les règles de sécurité a respecter. Citer les procédures de nettoyage et de désinfection."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S3.4",
              nom: "Influence des températures sur le developpement microbien",
              limites: "Decrire l'influence des températures sur le developpement microbien. Indiquer et justifier les mesures réglementaires a respecter : lors du maintien au froid ou au chaud des préparations, lors de la remise en température."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S3.5",
              nom: "Qualités organoleptiques des aliments",
              limites: "Nommer et identifier les propriétés organoleptiques des aliments. Mettre en evidence l'influence des couleurs, du volume, de la texture, de la présentation sur l'appetence et sur le choix du client. Indiquer les consequences d'un bain de friture non conforme sur les qualités organoleptiques des aliments frits et sur la sante des consommateurs."
            }
          ]
        }
      ]
    },
    {
      id: "C4",
      pole: 1,
      nom: "Assembler, dresser et conditionner les préparations alimentaires",
      activites: ["A4"],
      epreuve: "EP1",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de production culinaire, zone de conditionnement",
        "Fiches techniques, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Plan de maîtrise sanitaire",
        "Outils et documents de traçabilité",
        "Denrées et produits alimentaires",
        "Matériel et équipement de préparation, de cuisson et de conditionnement",
        "Cellule de refroidissement rapide",
        "Matériel de remise en température",
        "Matériel de maintien en température (chaud, froid)",
        "Matériel de contr\u00f4le de température",
        "Matériel de collecte et tri des déchets"
      ],
      details: [
        {
          id: "C4.1",
          nom: "Assembler des produits alimentaires pour obtenir des mets simples",
          indicateursCommuns: ["Port d'une tenue professionnelle adaptée","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique","Respect des procédures, des protocoles"],
          indicateursSpecifiques: ["Choix adapté des ustensiles et matériels","Respect des fiches techniques"]
        },
        {
          id: "C4.2",
          nom: "Portionner les préparations alimentaires",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Respect et exactitude des grammages","Regularite des portions"]
        },
        {
          id: "C4.3",
          nom: "Dresser, mettre en valeur les préparations alimentaires",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Choix adapté des contenants","Dressage et mise en valeur conformes à la fiche technique","Respect des consignes spécifiques (regimes, allergies)"]
        },
        {
          id: "C4.4",
          nom: "Conditionner les préparations en portions individuelles ou multiportions",
          indicateursCommuns: ["Installation rationnelle du poste de travail","Respect du temps alloue","Résultat conforme au travail prescrit","Attitude d'autocontr\u00f4le permanente","Renseignement précis des documents de traçabilité","Application conforme des mesures correctives"],
          indicateursSpecifiques: ["Vérification de la zone de conditionnement (propreté, températures)","Choix adapté du conditionnement","Maîtrise de l'utilisation des appareils de conditionnement","Contr\u00f4le de l'etancheite des conditionnements","Étiquetage conforme des contenants"]
        },
        {
          id: "C4.5",
          nom: "Entreposer les préparations alimentaires en attente de distribution ou de vente",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Vérification des appareils d'entreposage (propreté, températures)","Respect des règles de mise en attente"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S4.1",
              nom: "Liaisons chaude et froide",
              limites: "A partir d'une situation professionnelle donnee : énoncer le principe des liaisons chaude et froide ; citer les avantages et les limites de ces liaisons."
            },
            {
              id: "S4.2",
              nom: "Risques spécifiques aux activités d'assemblage, dressage, conditionnement et moyens de prévention",
              limites: "Identifier les risques spécifiques aux activités d'assemblage, dressage, conditionnement. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques de br\u00fblure et les risques lies aux manipulations sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S4.3",
              nom: "Techniques professionnelles : conditionnement et entreposage des préparations culinaires, assemblage, dressage, conditionnement, traçabilité",
              limites: "Énoncer l'objectif des techniques de conditionnement. Citer les mentions obligatoires devant figurer sur l'étiquetage. Citer et justifier les règles d'entreposage. Énoncer et expliquer les contr\u00f4les qualité a réaliser au cours ou à l'issue des activités. Justifier la necessite de conserver toutes les étiquettes des produits utilisés. Justifier la necessite de réaliser un echantillon temoin. Citer les mentions obligatoires devant figurer sur le plat temoin. Énoncer les conditions de réalisation et de stockage."
            },
            {
              id: "S4.4",
              nom: "Matériels et appareils de portionnement, de tranchage, et de conditionnement",
              limites: "Indiquer le nom, la fonction d'usage et les règles d'utilisation du matériel et des appareils. Indiquer les éléments de sécurité et de réglage. Justifier le choix des accessoires en fonction de l'opération a réaliser. Identifier les dangers et justifier les règles de sécurité a respecter."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S4.5",
              nom: "Prévention des contaminations au cours des activités d'assemblage, de dressage et de conditionnement",
              limites: "Identifier les risques de contamination lors de ces opérations (contaminations croisees). Justifier les mesures preventives appliquées a ces opérations."
            }
          ]
        }
      ]
    },
    {
      id: "C5",
      pole: 1,
      nom: "Mettre en œuvre les opérations d'entretien manuelles et mécanisées dans les espaces de production",
      activites: ["A5"],
      epreuve: "EP1",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de stockage",
        "Zone de production",
        "Zone d'entreposage des déchets",
        "Plan de maîtrise sanitaire",
        "Fiches techniques, plans de nettoyage, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Outils et documents de traçabilité",
        "Produits d'entretien",
        "Lave-vaisselle",
        "Matériel d'entretien manuel (raclette, mouilleur, raclette a sol, centrale de lavage, de désinfection...)",
        "Matériel mécanisé (monobrosse équipee, nettoyeur vapeur...)",
        "Matériel, équipement et produits de lavage de la batterie de cuisine et des ustensiles",
        "Consignes de tri des déchets",
        "Matériel de collecte, tri et transport des déchets"
      ],
      details: [
        {
          id: "C5.1",
          nom: "Assurer le lavage manuel et mécanisé de la batterie de cuisine et des ustensiles",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique"],
          indicateursSpecifiques: ["Tri conforme de la batterie et des ustensiles (separation des éléments dangereux)","Vérification du fonctionnement du poste de lavage","Choix du produit adapte","Maîtrise de l'utilisation des matériels et équipements"]
        },
        {
          id: "C5.2",
          nom: "Nettoyer et désinfecter les surfaces, équipements et matériels des espaces de production : lavage manuel des équipements, matériels et surfaces, lavage mécanisé des surfaces",
          indicateursCommuns: ["Respect des procédures, des protocoles de l'entreprise ou de l'établissement","Prise en compte du developpement durable (ecogestes)","Résultat conforme au travail prescrit","Respect du temps alloue","Attitude d'autocontr\u00f4le permanente","Application conforme des mesures correctives","Renseignement précis des documents de traçabilité"],
          indicateursSpecifiques: ["Respect du plan de nettoyage et de désinfection","Mise en place des équipements de protection collective","Choix correct du matériel et des produits","Ordre pertinent des opérations","Maîtrise des techniques de nettoyage et de désinfection","Prise en compte de la coactivité","Respect de l'intégrité des materiaux","Entretien et rangement des matériels de nettoyage conforme aux consignes"]
        },
        {
          id: "C5.3",
          nom: "Évacuer, trier et entreposer les déchets",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Collecte, tri et entreposage conformes aux consignes et aux procédures"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S5.1",
              nom: "Risques spécifiques aux activités d'entretien manuelles et mécanisées et moyens de prévention",
              limites: "Identifier les risques spécifiques aux activités d'entretien manuelles et mécanisées. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques chimique, electrique, les risques de chutes de plain-pied, sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S5.2",
              nom: "Techniques professionnelles d'entretien manuel et mécanisé dans l'espace de production",
              limites: "Pour les techniques mises en œuvre lors des opérations d'entretien dans la zone de production : énoncer l'objectif de chaque technique ; identifier les facteurs de nettoyage mobilises ; énoncer les contr\u00f4les qualité a réaliser."
            },
            {
              id: "S5.3",
              nom: "Matériels d'entretien",
              limites: "Pour le matériel utilise dans les opérations d'entretien au niveau de l'espace de production (centrale de lavage, de désinfection, monobrosse, nettoyeur vapeur, équipement de lavage du matériel de production...) : indiquer la fonction d'usage de chaque matériel ; indiquer les éléments de sécurité et de réglage ; justifier le choix des accessoires ; identifier les dangers et justifier les règles de sécurité a respecter."
            },
            {
              id: "S5.4",
              nom: "Produits d'entretien",
              limites: "A partir des étiquettes ou fiches techniques des produits utilisés dans les opérations d'entretien au niveau de l'espace de production (détergent, détergent desinfectant, degraissant...), indiquer le r\u00f4le de chaque produit, son mode d'action et ses précautions d'usage. Justifier l'utilisation de produits agrees pour le contact alimentaire."
            },
            {
              id: "S5.5",
              nom: "Materiaux",
              limites: "Identifier les principaux materiaux a entretenir en zone de production. Mettre en relation les materiaux avec les techniques d'entretien."
            },
            {
              id: "S5.6",
              nom: "Éléments a prendre en compte lors des opérations de nettoyage",
              limites: "A partir d'une situation professionnelle donnee : énoncer les indications transmises dans le plan de nettoyage et de désinfection ; inventorier les éléments a prendre en compte lors des opérations de nettoyage (nature des surfaces et des salissures, points d'eau et d'evacuation, nature des déchets...)."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S5.7",
              nom: "Hygiène des surfaces, des matériels et des locaux",
              limites: "Définir la propreté et l'hygiène. Énoncer les parametres intervenant dans le nettoyage et la désinfection. Énoncer les règles a respecter pour optimiser la désinfection. Differencier les techniques de nettoyage et désinfection combinees et separees."
            }
          ]
        }
      ]
    },
    {
      id: "C6",
      pole: 2,
      nom: "Mettre en place et réapprovisionner les espaces de distribution, de vente et de consommation",
      activites: ["A6"],
      epreuve: "EP2",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de distribution, de vente et de consommation",
        "Zone de stockage des produits",
        "Fiches techniques, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Plan de maîtrise sanitaire",
        "Outils et documents de traçabilité",
        "Produits alimentaires",
        "Matériels, équipements et consommables de distribution et vente",
        "Supports visuels de communication",
        "Matériel de collecte des déchets"
      ],
      details: [
        {
          id: "C6.1",
          nom: "Installer les espaces de distribution, vente et consommation",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Attitude professionnelle adaptée à la situation","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique","Choix correct du matériel"],
          indicateursSpecifiques: ["Contr\u00f4le de la propreté de son espace","Agencement conforme des espaces","Mise en fonctionnement des appareils","Vérification du fonctionnement des espaces de distribution"]
        },
        {
          id: "C6.2",
          nom: "Disposer les produits non alimentaires et alimentaires sur les espaces de distribution, vente et consommation",
          indicateursCommuns: ["Utilisation rationnelle des équipements et du matériel","Respect des procédures, des protocoles de l'entreprise ou de l'établissement"],
          indicateursSpecifiques: ["Chronologie pertinente des opérations","Disposition rationnelle des produits","Renseignement conforme des documents de traçabilité"]
        },
        {
          id: "C6.3",
          nom: "Afficher les informations relatives aux produits proposés",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Affichage des éléments d'information conforme à la réglementation (prix, allergènes...)","Affichage des éléments d'information de l'entreprise ou de l'établissement (menus, informations nutritionnelles, supports promotionnels...)"]
        },
        {
          id: "C6.4",
          nom: "Participer à la mise en valeur des espaces de distribution, vente et consommation",
          indicateursCommuns: ["Organisation rationnelle de l'activité avec prise en compte des priorites, des contraintes","Prise en compte du developpement durable (ecogestes...)","Respect du temps alloue","Application conforme des mesures correctives"],
          indicateursSpecifiques: ["Installation pertinente des éléments d'ambiance, des supports promotionnels..."]
        },
        {
          id: "C6.5",
          nom: "Contr\u00f4ler et réapprovisionner les espaces en prenant en compte les flux, les stocks",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Réapprovisionnement conforme des zones de distribution en fonction du flux et des stocks","Prise en compte du confort et de la sécurité des clients ou convives","Vérification de la propreté et du rangement de la zone de distribution pendant le service","Communication reactive et pertinente des informations à l'interne"]
        },
        {
          id: "C6.6",
          nom: "Traiter les produits non servis et les invendus",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Traitement conforme des produits non servis et des invendus selon la réglementation et les consignes","Renseignement conforme des documents de traçabilité"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S6.1",
              nom: "Modes de distribution des repas",
              limites: "Decrire les principes de chaque type de distribution (libre-service lineaire ou en ilots, comptoir...)."
            },
            {
              id: "S6.2",
              nom: "Risques spécifiques aux opérations de mise en place et de réapprovisionnement et moyens de prévention",
              limites: "Identifier les risques spécifiques rencontres au cours des activités de mise en place et réapprovisionnement. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques lies à l'activité physique sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S6.3",
              nom: "Techniques professionnelles : mise en place et réapprovisionnement des espaces de distribution, de vente et de consommation",
              limites: "Justifier la chronologie et les règles de la mise en place. Justifier l'organisation du réapprovisionnement tout au long du service. Énoncer et justifier les contr\u00f4les qualité a réaliser au cours ou à l'issue des activités. Repérer dans le PMS les opérations de traçabilité a respecter lors de la mise en place et du réapprovisionnement."
            },
            {
              id: "S6.4",
              nom: "Appareils de distribution",
              limites: "Indiquer le nom, la fonction d'usage et les règles d'utilisation des appareils de distribution. Indiquer les éléments de sécurité et de réglage. Identifier les dangers et justifier les règles de sécurité a respecter."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S6.5",
              nom: "Mesures d'hygiène lors de la distribution ou de la vente",
              limites: "Identifier les risques de biocontamination lors de la distribution ou de la vente des préparations alimentaires. Justifier les mesures réglementaires appliquées à la distribution (respect des températures...)."
            },
            {
              id: "S6.6",
              nom: "Gestion des produits non servis et des invendus",
              limites: "Justifier les mesures réglementaires appliquées à la gestion des produits non servis et des invendus. Indiquer les risques pour les consommateurs et pour l'établissement d'une gestion non conforme des produits non servis et des invendus."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S6.7",
              nom: "Allergies et intolerances alimentaires",
              limites: "Differencier une allergie et une intolerance alimentaire. Justifier l'importance de l'information au consommateur. Identifier les principaux risques encourus en cas d'allergie ou d'intolerance alimentaire."
            },
            {
              id: "S6.8",
              nom: "Les labels de qualité et la traçabilité des produits",
              limites: "Identifier les principaux labels de qualité. Justifier l'importance de l'information au consommateur concernant la traçabilité des produits."
            },
            {
              id: "S6.9",
              nom: "Les produits de proximite",
              limites: "Identifier les pratiques de l'entreprise ou de l'établissement dans l'utilisation des produits de proximite."
            }
          ]
        }
      ]
    },
    {
      id: "C7",
      pole: 2,
      nom: "Accueillir, informer, conseiller les clients ou convives et contribuer à la vente additionnelle",
      activites: ["A7"],
      epreuve: "EP2",
      conditions: [
        "Tenue professionnelle adaptée",
        "Zone de distribution, de vente et de consommation",
        "Procédures, protocoles",
        "Documents descriptifs des produits proposes : dénomination, composition, provenance, qualité, prix, promotion",
        "Documents de transmission des informations",
        "Outil numérique d'enregistrement des commandes",
        "Supports visuels de communication"
      ],
      details: [
        {
          id: "C7.1",
          nom: "Accueillir, accompagner le client ou le convive jusqu'a la prise de conge",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Attitude professionnelle adaptée à la situation","Communication orale avec le client ou le convive adaptée à la situation"],
          indicateursSpecifiques: ["Respect du protocole d'accueil interne à l'entreprise ou à l'établissement","Respect du protocole de prise de conge interne à l'entreprise ou à l'établissement","Accompagnement adapté du client ou du convive tout au long de la prestation"]
        },
        {
          id: "C7.2",
          nom: "Identifier les besoins et les attentes du client ou du convive, proposer l'offre, la vente additionnelle",
          indicateursCommuns: ["Prise en compte des caractéristiques du client ou du convive","Respect des procédures, des protocoles de l'entreprise ou de l'établissement"],
          indicateursSpecifiques: ["Questionnement pertinent pour identifier les besoins du client ou du convive","Propositions adaptées aux besoins et aux attentes du client ou du convive","Utilisation appropriée des supports de vente","Exactitude des informations transmises au client ou convive","Suggestion de produits en vente additionnelle"]
        },
        {
          id: "C7.3",
          nom: "Prendre la commande",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Prise de commande conforme à la demande du client ou du convive","Communication reactive et précisé des informations à l'équipe de travail"]
        },
        {
          id: "C7.4",
          nom: "Gérer les objections, les reclamations",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Traitement adapté des objections, des reclamations du client ou du convive","Communication reactive et pertinente des informations à la hierarchie"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S7.1",
              nom: "Communication avec le client ou le convive : règles de communication, facteurs influencant la communication, caractéristiques de la clientele ou des convives",
              limites: "Citer les objectifs de la prise de contact, de la prise de conge. Citer les règles usuelles de savoir-être dans le langage et le comportement avec le client ou le convive. Distinguer les différents registres de langages (verbal et non verbal, soutenu et familier). Identifier les attitudes et facteurs favorisant la communication. Repérer les freins à la communication. Dans une situation donnee : identifier les caractéristiques de la clientele ou des convives (clientele captive, clientele mobile, état physiologique...) ; identifier les attentes et les motivations des clients ou convives ; indiquer les critères de satisfaction de la clientele ou des convives."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S7.2",
              nom: "Techniques professionnelles : étapes de la vente ou de l'offre, identification des besoins et des attentes, supports de vente, proposition de l'offre, vente additionnelle, prise de commande, objections et reclamations",
              limites: "Énoncer les différents types de communication adaptes : ecoute active, reformulation, questionnement. Distinguer les différents supports de vente en restauration rapide et collective : ardoise, chevalet, set de table, supports numériques... Indiquer les informations a recueillir à l'interne pour les communiquer au client ou au convive (menus, présence d'allergènes, composition des plats, labels, produits de proximite...). Indiquer l'intérêt de la vente additionnelle. Indiquer et comparer les principaux moyens et outils de prise de commande et de transmission des informations en interne. Définir une objection et une reclamation. A partir d'une situation donnee : identifier la nature de l'objection ou de la reclamation, énoncer le comportement a adopter."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S7.3",
              nom: "Groupes d'aliments et constituants alimentaires",
              limites: "Indiquer les caractéristiques de chaque groupe d'aliments. Pour chaque groupe alimentaire, indiquer la nature des constituants et leurs r\u00f4les dans l'organisme."
            },
            {
              id: "S7.4",
              nom: "Equilibre alimentaire",
              limites: "Indiquer l'importance de chaque repas au cours de la journee. Justifier la diversification de l'alimentation."
            }
          ]
        }
      ]
    },
    {
      id: "C8",
      pole: 2,
      nom: "Assurer le service des clients ou convives",
      activites: ["A8"],
      epreuve: "EP2",
      conditions: [
        "Tenue professionnelle adaptée",
        "Zone de production",
        "Zone de distribution, vente et consommation",
        "Commande du client ou convive",
        "Fiches techniques, procédures, protocoles",
        "Plan de maîtrise sanitaire",
        "Outils et documents de traçabilité",
        "Produits alimentaires et consommables",
        "Matériel de service",
        "Supports visuels de communication"
      ],
      details: [
        {
          id: "C8.1",
          nom: "Préparer les éléments de la commande",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique"],
          indicateursSpecifiques: ["Préparation conforme à la commande du client ou du convive","Communication reactive des informations à l'équipe de travail"]
        },
        {
          id: "C8.2",
          nom: "Conditionner les éléments pour la vente a emporter : mise en sachet, en carton, en barquette",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Conditionnements conformes et adaptés","Distribution raisonnee des produits alimentaires, des consommables pour la vente a emporter"]
        },
        {
          id: "C8.3",
          nom: "Servir les repas",
          indicateursCommuns: ["Attitude professionnelle adaptée à la situation","Communication orale adaptée à la situation"],
          indicateursSpecifiques: ["Présentation propre et conforme aux consignes","Utilisation rationnelle du matériel, des ustensiles de service","Respect du confort du client ou du convive pendant le service"]
        },
        {
          id: "C8.4",
          nom: "Repérer et traiter les anomalies en zone de distribution, vente et consommation",
          indicateursCommuns: ["Prise en compte des caractéristiques du client ou du convive","Respect des procédures, des protocoles de l'entreprise ou de l'établissement","Respect du temps alloue"],
          indicateursSpecifiques: ["Maintien d'un environnement accueillant et fonctionnel pendant le service","Respect de la sécurité du client ou du convive","Communication reactive des informations à l'équipe de travail et à la hierarchie","Application conforme des mesures correctives"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S8.1",
              nom: "Risques spécifiques aux activités de service dans les espaces de distribution, vente, consommation et moyens de prévention",
              limites: "Identifier les risques spécifiques rencontres au cours des activités de service. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques lies à la manutention des charges, aux chutes de plain-pied, au stress (contraintes de temps, intensite de l'activité, gestion des imprévus, conflits ou tensions avec les clients, les convives...), les br\u00fblures, sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S8.2",
              nom: "Techniques professionnelles : conditionnement pour la vente a emporter, service des repas",
              limites: "Dans une situation donnee : justifier le choix du conditionnement pour la vente a emporter ; justifier l'ordre des opérations lors de la mise en sachet, en carton, en barquette et la place des différents composants ; justifier la necessite de respecter les grammages selon les consignes de l'entreprise ou de l'établissement."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S8.3",
              nom: "Mesures d'hygiène lors du service",
              limites: "Identifier les risques de contamination lors du service. Justifier les mesures réglementaires a respecter."
            },
            {
              id: "S8.4",
              nom: "Infections d'origine alimentaire et consequences",
              limites: "Indiquer les consequences possibles du non-respect des règles d'hygiène. Définir une toxi-infection alimentaire (TIA) et une toxi-infection alimentaire collective (TIAC). Citer les principales TIA et les aliments a risques."
            }
          ]
        },
        {
          categorie: "Sciences de l'alimentation",
          items: [
            {
              id: "S8.5",
              nom: "Alimentation rationnelle",
              limites: "En fonction d'un public donne, énoncer les principaux facteurs de variation des besoins nutritionnels (age, activité physique...). Répertorier les principales erreurs alimentaires et les pathologies associées."
            },
            {
              id: "S8.6",
              nom: "Comportements alimentaires",
              limites: "Decrire l'evolution des modes alimentaires. Indiquer les aspects culturels a prendre en compte dans la composition des repas pour répondre aux attentes des clients ou convives."
            },
            {
              id: "S8.7",
              nom: "Regimes alimentaires",
              limites: "Indiquer le principe des regimes alimentaires les plus courants."
            }
          ]
        }
      ]
    },
    {
      id: "C9",
      pole: 2,
      nom: "Encaisser les prestations",
      activites: ["A9"],
      epreuve: "EP2",
      conditions: [
        "Tenue professionnelle adaptée",
        "Zone de distribution, de vente et de consommation",
        "Procédures d'encaissement",
        "Notice d'utilisation de la caisse",
        "Documents descriptifs des préparations, des codes et des prix",
        "Matériel d'encaissement (caisse enregistreuse, calculatrice) et d'impression",
        "Logiciel de gestion assistee par ordinateur"
      ],
      details: [
        {
          id: "C9.1",
          nom: "Ouvrir et cl\u00f4turer une caisse",
          indicateursCommuns: ["Port de la tenue professionnelle adaptée","Respect de la sécurité des fonds","Respect des procédures, des protocoles de l'entreprise ou de l'établissement"],
          indicateursSpecifiques: ["Correspondance exacte entre la somme du fonds de caisse enregistree à l'ouverture et à la cl\u00f4ture de caisse","Correspondance exacte entre les prestations encaissees et les sommes percues au moment de la cl\u00f4ture","Bordereau de caisse correctement renseigne"]
        },
        {
          id: "C9.2",
          nom: "Saisir les éléments de la prestation a encaisser",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Respect des procédures d'encaissement","Saisie exacte"]
        },
        {
          id: "C9.3",
          nom: "Traiter les encaissements dans ses différentes formes",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Encaissement fiable et rapide","Rendu de monnaie exact","Tri et regroupement des recettes conformes aux consignes"]
        },
        {
          id: "C9.4",
          nom: "Communiquer à l'interne et à l'externe au poste d'encaissement",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Communication adaptée, aisee avec la clientele","Reactivité de la communication à la hierarchie en cas de dysfonctionnements ou de difficultes","Compte-rendu pertinent de l'activité à la hierarchie"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S9.1",
              nom: "Relations avec la clientele",
              limites: "Dans une situation d'encaissement donnee (client satisfait, client non satisfait) : indiquer le comportement adapté en fonction des consignes du lieu de travail, justifier l'importance de la communication lors de ce dernier contact avec le client."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S9.2",
              nom: "Techniques professionnelles : tenue de caisse",
              limites: "Indiquer des précautions particulières a prendre pour chaque mode de paiement. A partir de documents d'encaissement, repérer les éléments d'information et les erreurs eventuelles. Indiquer les étapes obligatoires de la tenue de caisse et justifier leur importance."
            }
          ]
        }
      ]
    },
    {
      id: "C10",
      pole: 2,
      nom: "Mettre en œuvre les opérations d'entretien manuelles et mécanisées dans les espaces de distribution, vente, consommation et les locaux annexes",
      activites: ["A10"],
      epreuve: "EP2",
      conditions: [
        "Tenue professionnelle et EPI adaptés",
        "Zone de distribution, de vente, de consommation, vestiaires, sanitaires",
        "Locaux d'entreposage des déchets",
        "Plan de maîtrise sanitaire",
        "Plan de nettoyage des espaces de distribution, vente et consommation",
        "Fiches techniques, procédures, protocoles",
        "Notice d'utilisation des matériels et produits",
        "Outils et documents de traçabilité",
        "Produits d'entretien",
        "Lave-vaisselle, tunnel de lavage",
        "Matériel d'entretien manuel (matériel de depoussierage et d'essuyage humide, chariot multiservice équipe, chariots de lavage, raclette, mouilleur...)",
        "Matériel d'entretien mécanisé (aspirateur a poussiere, aspirateur a eau, monobrosse équipee, autolaveuse)",
        "Matériel de collecte, tri et transport des déchets"
      ],
      details: [
        {
          id: "C10.1",
          nom: "Assurer le lavage manuel ou mécanisé de la vaisselle et des ustensiles",
          indicateursCommuns: ["Tenue professionnelle adaptée","Port des EPI adapte","Respect des règles d'hygiène","Respect des règles de sécurité","Mise en œuvre adaptée des moyens de prévention lies à l'activité physique","Respect des procédures, des protocoles de l'entreprise ou de l'établissement"],
          indicateursSpecifiques: ["Tri conforme de la vaisselle et des ustensiles","Vérification de l'état et du fonctionnement du lave-vaisselle","Choix du produit adapte","Maîtrise de l'utilisation du lave-vaisselle","Maîtrise de la consommation d'eau et de produit","Respect du plan nettoyage et de désinfection","Mise en place des équipements de protection collective"]
        },
        {
          id: "C10.2",
          nom: "Réaliser les opérations manuelles et mécanisées de nettoyage et de désinfection dans les espaces de distribution, vente, consommation et les locaux annexes : depoussierage manuel et mécanisé, lavage manuel (vitrines, parois, sols, équipements, matériels), lavage mécanisé des surfaces",
          indicateursCommuns: ["Prise en compte du developpement durable (ecogestes...)","Respect du temps alloue","Résultat conforme au travail prescrit","Attitude d'autocontr\u00f4le permanente","Reaction efficace et adaptée dans l'application des mesures correctives","Renseignement précis des documents de traçabilité"],
          indicateursSpecifiques: ["Choix correct du matériel et des produits","Maîtrise de la consommation d'eau, de produits, de consommables","Maîtrise des techniques de nettoyage et de désinfection","Respect de la circulation des personnes","Respect de l'intégrité des materiaux","Entretien et rangement des matériels de nettoyage conforme aux consignes"]
        },
        {
          id: "C10.3",
          nom: "Évacuer, trier et entreposer les déchets",
          indicateursCommuns: [],
          indicateursSpecifiques: ["Collecte, tri et entreposage conformes aux consignes et aux procédures"]
        }
      ],
      savoirs: [
        {
          categorie: "Environnement professionnel",
          items: [
            {
              id: "S10.1",
              nom: "Risques spécifiques aux activités d'entretien manuelles et mécanisées et moyens de prévention",
              limites: "Identifier les risques spécifiques aux activités d'entretien manuelles et mécanisées. Proposer et justifier les mesures de protection collective ou individuelle adaptées à son poste de travail. Les risques chimique, electrique, de chutes de plain-pied sont particulierement concernés pour cette compétence."
            }
          ]
        },
        {
          categorie: "Technologies",
          items: [
            {
              id: "S10.2",
              nom: "Techniques professionnelles d'entretien manuel et mécanisé dans les espaces de distribution, vente, consommation et locaux annexes",
              limites: "Pour les techniques mises en oeuvre : énoncer l'objectif de chaque technique ; justifier la necessite de respecter les protocoles ou procédures ; énoncer les contr\u00f4les qualité a réaliser."
            },
            {
              id: "S10.3",
              nom: "Matériels d'entretien",
              limites: "Pour le matériel utilise dans les opérations d'entretien des espaces de distribution, vente, consommation et les locaux annexes (aspirateur, chariot multiservice, autolaveuse, matériel d'entretien de la vitrerie...) : indiquer la fonction d'usage de chaque matériel, indiquer les éléments de sécurité et de réglage, justifier le choix des accessoires, identifier les dangers et justifier les règles de sécurité a respecter."
            },
            {
              id: "S10.4",
              nom: "Produits d'entretien et consommables",
              limites: "A partir des étiquettes ou fiches techniques des produits utilisés dans les opérations d'entretien des espaces de distribution, vente, consommation et locaux annexes (détergent, détergent desinfectant, detartrant, produit a vitres, gazes preimpregnees...), indiquer le r\u00f4le de chaque produit, son mode d'action et ses précautions d'usage. Justifier l'utilisation de produits agrees pour le contact alimentaire."
            },
            {
              id: "S10.5",
              nom: "Materiaux",
              limites: "Identifier les principaux materiaux a entretenir en zone de distribution, vente, consommation. Mettre en relation les materiaux avec les techniques d'entretien."
            },
            {
              id: "S10.6",
              nom: "Éléments a prendre en compte lors des opérations de nettoyage",
              limites: "A partir d'une situation professionnelle donnee : énoncer les indications transmises dans le plan de nettoyage et de désinfection ; inventorier les éléments a prendre en compte lors des opérations de nettoyage (nature des surfaces, points d'eau et d'evacuation, nature des déchets...)."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          items: [
            {
              id: "S10.7",
              nom: "Hygiène des surfaces, des matériels et des locaux",
              limites: "Énoncer les parametres intervenant dans le nettoyage et la désinfection. Énoncer les règles a respecter pour optimiser la désinfection. Differencier les techniques de nettoyage et désinfection combinees et separees."
            }
          ]
        }
      ]
    }
  ],

  // =========================================================================
  // SAVOIRS COMMUNS
  // =========================================================================
  savoirsCommuns: {
    SC1: {
      id: "SC1",
      pole: 1,
      titre: "Savoirs associés communs aux 5 compétences du pole 1",
      items: [
        {
          categorie: "Environnement professionnel",
          savoirs: [
            {
              id: "SC1.1",
              nom: "Communication : travail en équipe, supports de transmission, documents professionnels",
              limites: "A partir d'exemples, justifier l'intérêt du travail en équipe en zone de production et les attitudes favorisant les relations professionnelles. Identifier les principaux supports de transmission entre la zone de production et la zone de distribution."
            },
            {
              id: "SC1.2",
              nom: "Contr\u00f4le de la qualité : démarche qualité, traçabilité, autocontr\u00f4le de son activité, documents de contr\u00f4le qualité et traçabilité",
              limites: "Mettre en lien la démarche qualité et l'image de marque de l'entreprise ou de l'établissement. Définir la traçabilité et justifier son intérêt. Définir l'autocontr\u00f4le et justifier son intérêt. Repérer les indicateurs de qualité sur les documents (temps, températures, résultats, conformité des procédures...)."
            },
            {
              id: "SC1.3",
              nom: "Comportement éco-responsable",
              limites: "Justifier la necessite d'adopter un comportement éco-responsable dans son activité professionnelle. Pour une situation professionnelle donnee, proposer et justifier les ecogestes associés (gestion des fluides et des énergies, utilisation rationnelle des produits, techniques gestuelles adaptées, respect des matériels et des équipements...)."
            },
            {
              id: "SC1.4",
              nom: "Gestion des déchets",
              limites: "Définir un dechet. Differencier dechet dangereux et non dangereux. Classer les différents types de déchets generes par chacune des activités. Justifier l'intérêt du tri déchets."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          savoirs: [
            {
              id: "SC1.5",
              nom: "Agents de biocontamination",
              limites: "Définir un micro-organisme. Définir une biocontamination. A partir de résultats d'analyse ou d'articles de presse, identifier les principaux agents responsables des biocontaminations dans le secteur de la restauration. Citer les principales flores (flore humaine, flore des aliments, flore animale et végétale, flore des surfaces, de l'air, de l'eau). Définir le pouvoir pathogene. Définir un porteur sain et indiquer les risques sur la qualité sanitaire des aliments."
            },
            {
              id: "SC1.6",
              nom: "Mesures réglementaires et moyens : méthode HACCP, plan de maîtrise sanitaire, principe d'organisation des circuits dans les locaux : la marche en avant",
              limites: "Decrire le principe de base de la méthode HACCP. Définir le principe de base du plan de maîtrise sanitaire. A partir d'un plan donne, justifier le principe de la marche en avant. Repérer les risques de biocontaminations pour chaque circuit."
            },
            {
              id: "SC1.7",
              nom: "Hygiène du personnel : hygiène corporelle, tenue professionnelle, hygiène des mains",
              limites: "Justifier l'importance des règles d'hygiène corporelle. Decrire et justifier le port de la tenue professionnelle dans le secteur production. Définir la contamination manuportee. Differencier la flore residente de la flore transitoire. Justifier l'importance de l'hygiène des mains. Decrire et justifier les différentes étapes du lavage des mains. Justifier l'équipement du poste réglementaire de lavage des mains. Indiquer le r\u00f4le des différents produits d'hygiène des mains."
            }
          ]
        }
      ]
    },
    SC2: {
      id: "SC2",
      pole: 2,
      titre: "Savoirs associés communs aux 5 compétences du pole 2",
      items: [
        {
          categorie: "Environnement professionnel",
          savoirs: [
            {
              id: "SC2.1",
              nom: "Secteurs de la restauration : restauration rapide, restauration collective, restauration commerciale libre-service, organigramme",
              limites: "Distinguer la restauration commerciale rapide, de la restauration collective et de la restauration commerciale libre-service. Illustrer chacun des secteurs à l'aide d'exemples. Repérer dans l'organigramme de l'entreprise ou du service la place de l'employe et les relations hierarchiques et fonctionnelles. Identifier ses missions au regard de l'équipe de travail."
            },
            {
              id: "SC2.2",
              nom: "Image de marque de l'entreprise",
              limites: "Pour une entreprise ou un établissement donne, identifier les éléments constitutifs de l'image de marque."
            },
            {
              id: "SC2.3",
              nom: "Communication à l'interne",
              limites: "Decrire les moyens et outils de transmission des informations en interne dans les espaces de distribution, vente et consommation. A partir d'une situation professionnelle donnee, justifier le moyen de communication adapte."
            },
            {
              id: "SC2.4",
              nom: "Lutte contre le gaspillage alimentaire",
              limites: "Indiquer les mesures de prévention du gaspillage alimentaire."
            }
          ]
        },
        {
          categorie: "Hygiène professionnelle",
          savoirs: [
            {
              id: "SC2.5",
              nom: "Tenue professionnelle",
              limites: "Decrire et justifier le port de la tenue professionnelle dans le secteur distribution, vente, consommation."
            }
          ]
        }
      ]
    }
  },

  // =========================================================================
  // EPREUVES
  // =========================================================================
  epreuves: {
    professionnelles: [
      {
        id: "EP1",
        nom: "Production alimentaire",
        unite: "UP1",
        coefficient: 6,
        competences: ["C1","C2","C3","C4","C5"],
        ponctuel: {
          duree: "4h30",
          type: "Écrit, pratique et oral",
          parties: [
            {
              nom: "Partie écrite",
              duree: "30 min",
              description: "Le candidat prend connaissance de la (des) situation(s) professionnelle(s) et repond au questionnement en mobilisant les savoirs associés au bloc de compétences n\u00b01."
            },
            {
              nom: "Partie pratique et orale",
              duree: "4h",
              description: "Le candidat realise : deux productions alimentaires pour 8 personnes dont l'une met obligatoirement en œuvre une cuisson ; des opérations d'entretien manuelles ou mécanisées dans l'espace de production. A l'issue des activités réalisées, les membres du jury demandent au candidat d'expliciter sa pratique lors d'un oral de 10 minutes."
            }
          ]
        },
        ccf: {
          situations: [
            {
              nom: "Situation 1 : évaluation organisée en établissement de formation",
              coefficient: 4,
              description: "La situation d'évaluation prend appui sur le secteur de la restauration collective. Ses modalites sont identiques a celles de l'évaluation ponctuelle. La partie écrite mobilise l'ensemble des savoirs associés du bloc de compétences n\u00b01. La partie pratique et orale porte sur les compétences C2, C3, C5 et sur les savoirs qui y sont associés."
            },
            {
              nom: "Situation 2 : évaluation en milieu professionnel",
              coefficient: 2,
              description: "Le candidat effectué le choix du secteur sur lequel porte l'évaluation (restauration rapide ou commerciale libre-service ou collective). L'évaluation porte sur les compétences C1, C4 et sur les savoirs qui y sont associés. L'évaluation porte sur l'ensemble de la période de formation en milieu professionnel."
            }
          ]
        }
      },
      {
        id: "EP2",
        nom: "Service en restauration",
        unite: "UP2",
        coefficient: 6,
        competences: ["C6","C7","C8","C9","C10"],
        ponctuel: {
          duree: "2h30",
          type: "Pratique et oral",
          parties: [
            {
              nom: "Partie pratique",
              duree: "2h10",
              description: "Le candidat realise : la mise en place et le réapprovisionnement des espaces de distribution, de vente et de consommation ; l'accueil et le service des clients ou convives ; l'encaissement des prestations ; les opérations d'entretien dans les espaces de distribution, vente, consommation et les locaux annexes."
            },
            {
              nom: "Partie orale",
              duree: "20 min",
              description: "Le candidat prend connaissance pendant 5 minutes d'un a deux documents professionnels proposés par les membres du jury. Le questionnement prend appui sur les documents precites et sur les activités pratiques réalisées dans la première partie ; il mobilise les savoirs associés au bloc de compétences n\u00b02."
            }
          ]
        },
        ccf: {
          situations: [
            {
              nom: "Situation 1 : évaluation organisée en établissement de formation",
              coefficient: 3,
              description: "La situation d'évaluation prend appui sur le secteur de la restauration rapide ou commerciale libre-service. La partie pratique porte sur les compétences C6, C9 et sur les savoirs qui y sont associés. La partie orale mobilise l'ensemble des savoirs associés au bloc de compétences n\u00b02."
            },
            {
              nom: "Situation 2 : évaluation en milieu professionnel",
              coefficient: 3,
              description: "Le candidat effectué le choix du secteur (restauration rapide ou commerciale libre-service ou collective). L'évaluation porte sur les compétences C7, C8, C10 et sur les savoirs qui y sont associés. L'évaluation porte sur l'ensemble de la période de formation en milieu professionnel."
            }
          ]
        }
      }
    ],
    generales: [
      { id: "EG1", nom: "Prévention-sante-environnement", unite: "UG1", coefficient: 1, ccfDuree: "", ponctuelDuree: "1h", mode: "Ponctuel écrit" },
      { id: "EG2", nom: "Francais, Histoire-geographie et Enseignement moral et civique", unite: "UG2", coefficient: 3, ccfDuree: "", ponctuelDuree: "2h25", mode: "Ponctuel écrit et oral" },
      { id: "EG3", nom: "Mathematiques - Physique-chimie", unite: "UG3", coefficient: 2, ccfDuree: "", ponctuelDuree: "1h30", mode: "Ponctuel écrit" },
      { id: "EG4", nom: "Éducation physique et sportive", unite: "UG4", coefficient: 1, ccfDuree: "", ponctuelDuree: "", mode: "Ponctuel" },
      { id: "EG5", nom: "Langue vivante", unite: "UG5", coefficient: 1, ccfDuree: "", ponctuelDuree: "1h06", mode: "Ponctuel écrit et oral" },
      { id: "UF", nom: "Arts appliques et cultures artistiques (facultative)", unite: "UF", coefficient: 1, ccfDuree: "", ponctuelDuree: "1h30", mode: "Ponctuel écrit", note: "Seuls les points au-dessus de 10 sont pris en compte" }
    ]
  },

  // =========================================================================
  // PFMP - PERIODES DE FORMATION EN MILIEU PROFESSIONNEL
  // =========================================================================
  pfmp: {
    duree: "14 semaines sur un cycle de 2 ans",
    secteurs: [
      "Restauration rapide",
      "Restauration commerciale libre-service",
      "Restauration collective"
    ],
    objectifs: [
      "Découvrir différents milieux de travail et leurs caractéristiques, la culture de l'entreprise ou de l'établissement",
      "Développer une posture professionnelle",
      "Mettre en œuvre des compétences etudiees en formation",
      "Développer des compétences dans des environnements et avec des équipements différents de ceux de l'établissement de formation",
      "Développer l'autonomie et le sens de la responsabilité",
      "Mettre en œuvre des compétences relationnelles au sein des équipes de travail, avec les clients et les usagers"
    ],
    modalites: {
      scolaire: "14 semaines reparties sur chaque annee de formation, sur au moins deux des trois secteurs. Elles porteront sur les deux poles : production alimentaire et service en restauration.",
      apprentissage: "La formation fait l'objet d'un contrat conclu entre l'apprenti et son employeur conformément au code du travail.",
      formationContinue: "La durée de la formation en milieu professionnel (14 semaines) s'ajoute aux durées de formation dispensees dans le cadre de la formation continue.",
      candidatsPositionnes: "5 semaines minimum pour la voie scolaire, 8 semaines pour la formation professionnelle continue.",
      candidatsIndividuels: "Les candidats majeurs au 31 decembre de l'annee de l'examen au CAP peuvent se présenter sans avoir suivi de formation. Aucune attestation d'experience professionnelle ou de périodes de formation en milieu professionnel ne peut être exigee."
    }
  },

  // =========================================================================
  // GLOSSAIRE
  // =========================================================================
  glossaire: [
    { terme: "HACCP", definition: "Hazard Analysis Critical Control Point - Méthode d'analyse des dangers et de maîtrise des points critiques pour la sécurité alimentaire.", competences: ["C1","C2","C3","C4","C5","C6","C8"] },
    { terme: "PMS", definition: "Plan de Maîtrise Sanitaire - Document decrivant les mesures prises par l'établissement pour assurer l'hygiène et la sécurité sanitaire des aliments.", competences: ["C1","C2","C3","C4","C5","C6","C8","C10"] },
    { terme: "DLC", definition: "Date Limite de Consommation - Date au-dela de laquelle un produit alimentaire ne peut plus être consomme (risque sanitaire).", competences: ["C1"] },
    { terme: "DDM", definition: "Date de Durabilite Minimale (ex-DLUO) - Date indicative, au-dela de laquelle le produit peut avoir perdu certaines qualités sans présenter de risque.", competences: ["C1"] },
    { terme: "Marche en avant", definition: "Principe d'organisation des locaux et des circuits pour eviter les contaminations croisees. Les produits propres ne doivent jamais croiser les produits sales.", competences: ["C1","C2","C3","C4","C5"] },
    { terme: "Traçabilité", definition: "Capacité a retrouver l'historique, l'utilisation ou la localisation d'un produit a toutes les étapes de la chaine alimentaire.", competences: ["C1","C2","C3","C4","C5","C6","C8","C10"] },
    { terme: "TIAC", definition: "Toxi-Infection Alimentaire Collective - Apparition d'au moins 2 cas groupes d'une symptomatologie similaire, en général digestive, dont on peut rapporter la cause à une meme origine alimentaire.", competences: ["C8"] },
    { terme: "TIA", definition: "Toxi-Infection Alimentaire - Maladie provoquee par l'ingestion d'aliments contamines par des agents pathogenes.", competences: ["C8"] },
    { terme: "Liaison chaude", definition: "Mode d'organisation ou les préparations sont maintenues à une température superieure ou égale a +63\u00b0C entre la fin de la cuisson et la consommation.", competences: ["C3","C4"] },
    { terme: "Liaison froide", definition: "Mode d'organisation ou les préparations sont refroidies rapidement apres cuisson puis stockees entre 0\u00b0C et +3\u00b0C avant d'être remises en température pour le service.", competences: ["C3","C4"] },
    { terme: "Biocontamination", definition: "Introduction de micro-organismes dans un milieu ou sur un support ou ils ne devraient pas se trouver.", competences: ["C1","C2","C3","C4","C5","C6","C8","C10"] },
    { terme: "Contamination croisee", definition: "Transfert de micro-organismes d'un aliment ou d'une surface contaminée vers un aliment sain, par contact direct ou indirect.", competences: ["C2","C3","C4"] },
    { terme: "Ecogestes", definition: "Gestes simples et quotidiens permettant de reduire l'impact environnemental : economie d'eau, d'énergie, reduction des déchets, utilisation rationnelle des produits.", competences: ["C1","C2","C3","C4","C5","C6","C10"] },
    { terme: "CCF", definition: "Contr\u00f4le en Cours de Formation - Mode d'évaluation par les enseignants au cours de la formation, comprenant plusieurs situations d'évaluation.", competences: [] },
    { terme: "EPI", definition: "Équipements de Protection Individuelle - Matériels destines a protéger le travailleur contre un ou plusieurs risques professionnels.", competences: ["C1","C2","C3","C4","C5","C6","C10"] },
    { terme: "Allergène", definition: "Substance capable de provoquer une reaction allergique chez certaines personnes. 14 allergènes majeurs doivent être obligatoirement declares.", competences: ["C6","C7","C8"] },
    { terme: "Vente additionnelle", definition: "Technique commerciale consistant a proposer au client un produit complémentaire a celui qu'il a choisi.", competences: ["C7"] },
    { terme: "Autocontr\u00f4le", definition: "Vérification par l'opérateur lui-meme de la conformité de son travail aux exigences définies.", competences: ["C1","C2","C3","C4","C5","C6","C8","C10"] },
    { terme: "Decontamination", definition: "Operation visant a eliminer les micro-organismes presents sur les fruits et légumes frais par trempage dans une solution adaptée.", competences: ["C2"] },
    { terme: "Gammes de produits", definition: "Classification des produits alimentaires selon leur degré de transformation : 1ere gamme (frais), 2e (conserves), 3e (surgelés), 4e (prêts à l'emploi crus), 5e (prêts à l'emploi cuits).", competences: ["C1","C2"] }
  ],

  // =========================================================================
  // TABLEAU CROISE POLES / COMPETENCES / UNITES
  // =========================================================================
  tableauCroise: [
    { competence: "C1", pole: 1, UP1: true, UP2: false },
    { competence: "C2", pole: 1, UP1: true, UP2: false },
    { competence: "C3", pole: 1, UP1: true, UP2: false },
    { competence: "C4", pole: 1, UP1: true, UP2: false },
    { competence: "C5", pole: 1, UP1: true, UP2: false },
    { competence: "C6", pole: 2, UP1: false, UP2: true },
    { competence: "C7", pole: 2, UP1: false, UP2: true },
    { competence: "C8", pole: 2, UP1: false, UP2: true },
    { competence: "C9", pole: 2, UP1: false, UP2: true },
    { competence: "C10", pole: 2, UP1: false, UP2: true }
  ],

  // =========================================================================
  // GUIDE D'ACCOMPAGNEMENT PEDAGOGIQUE (GAP) - Janvier 2020
  // =========================================================================
  gap: {
    source: "Guide d'accompagnement pédagogique, proposé par Sabine CAROTTI, IGESR, janvier 2020",
    auteurs: [
      "Catherine SERVEAU, IEN Sciences biologiques et sciences sociales appliquées, academie de Nantes",
      "Benedicte SWIDERSKI, IEN Sciences biologiques et sciences sociales appliquées, academie de Lille",
      "Francis SELLAM, IEN economie - gestion, academie de Paris",
      "Nadege HUGOO, PLP biotechnologies, sante-environnement, academie de Lille",
      "Sylvie MOREL, PLP biotechnologies, sante-environnement, academie de Lille",
      "Virginie SCHENBERG-FRAUDEAU, PLP biotechnologies, sante-environnement, academie de Nantes"
    ],

    // --- Introduction ---
    introduction: {
      contexte: "La renovation du CAP Production et service en restaurations (rapide, collective, cafétéria) a ete precedee d'une large consultation des différents secteurs professionnels concernes : restauration collective en gestion directe, restauration collective en gestion concedee, restauration rapide, restauration commerciale libre-service (cafétéria). Des entretiens, des visites sur sites, des reunions avec les professionnels ont permis de determiner les qualités et compétences professionnelles recherchees pour les futurs salaries, leurs principales fonctions et leur degré d'autonomie ainsi que les perspectives d'evolution et d'emploi offertes dans le metier.",
      enjeu: "Les secteurs professionnels concernés rencontrent de reelles difficultes de recrutement et mentionnent un nombre important de postes a pourvoir dans un avenir proche, avec une volonte, pour une grande majorite d'entre eux, de recruter du personnel qualifie au niveau CAP. La reussite de ce nouveau CAP est donc un veritable enjeu pour répondre aux besoins economiques.",
      elaboration: "L'élaboration de ce diplôme a débuté en mai 2017, en amont de la transformation de la voie professionnelle, pour se terminer en juillet 2019. Le référentiel est écrit en blocs de compétences, chacun d'eux correspondant à un pole d'activités et à une unite certificative.",
      structure: "Un pole d'activités → Un bloc de compétences → Une unite certificative",
      preparation: [
        "En formation initiale sous statut scolaire ou sous statut d'apprenti en 1, 2 ou 3 ans en fonction des profils et des besoins des élèves ou des apprentis",
        "En formation professionnelle continue",
        "Par le biais de la validation des acquis de l'experience (VAE)"
      ],
      poursuiteEtudes: [
        "Un autre CAP (cuisine, commercialisation et services en hotel-cafe-restaurant, assistant technique en milieux familial et collectif...)",
        "Une classe de première en baccalaureat professionnel (cuisine, commercialisation et services en hotel-cafe-restaurant...)",
        "Certificats de qualification professionnelle, titres professionnels"
      ],
      definitionEmploi: "Le titulaire du CAP Production et service en restaurations (rapide, collective, cafétéria) est un professionnel qualifié qui, sous l'autorité d'un responsable, exerce son métier dans différents secteurs de la restauration. Il réalise et met en valeur des préparations alimentaires simples, en respectant les consignes et la réglementation relative à l'hygiène et à la sécurité. Il met en place et réapprovisionne les espaces de distribution, de vente et de consommation avec des produits prêts à consommer sur place ou à emporter. Il accueille, conseille le client ou le convive, prend et prépare la commande de celui-ci. Il assure la distribution et le service des repas. Il procède à l'encaissement des prestations. Il assure des opérations d'entretien des locaux, des équipements, des ustensiles et du matériel."
    },

    // --- 1. Cadre général de la formation ---
    cadreGeneral: {
      horaires: {
        titre: "Horaires d'enseignement en CAP",
        reference: "Arrete du 21 novembre 2018 relatif à l'organisation et aux enseignements dispenses dans les formations sous statut scolaire preparant au CAP",
        volumeHoraireEleve: "1705 heures (identique quelle que soit la spécialité)",
        notes: [
          "(a) Horaire donnant droit au doublement de la dotation horaire professeur lorsque le seuil d'effectifs est atteint",
          "(b) La dotation horaire professeur est égale au double du volume horaire élève",
          "(c) Horaire donnant droit au dédoublement de la dotation horaire professeur sans condition de seuil",
          "(d) Dédoublements possibles en fonction des besoins des élèves"
        ],
        premiereAnnee: [
          { matiere: "Enseignements professionnels (EP)", total: 333.5, classeEntiere: 58, groupeReduit: 275.5 },
          { matiere: "EP et francais en co-intervention", total: 43.5, classeEntiere: 43.5, groupeReduit: 0 },
          { matiere: "EP et mathematiques en co-intervention", total: 43.5, classeEntiere: 43.5, groupeReduit: 0 },
          { matiere: "Réalisation d'un chef d'œuvre", total: 87, classeEntiere: 0, groupeReduit: 0, note: "En effectif réduit" },
          { matiere: "Prévention sante environnement", total: 43.5, classeEntiere: 0, groupeReduit: 43.5 },
          { matiere: "Francais, histoire-geographie", total: 43.5, classeEntiere: 14.5, groupeReduit: 29 },
          { matiere: "Enseignement moral et civique", total: 14.5, classeEntiere: 0, groupeReduit: 14.5 },
          { matiere: "Mathematiques - Physique-chimie", total: 43.5, classeEntiere: 14.5, groupeReduit: 29 },
          { matiere: "Langue vivante", total: 43.5, classeEntiere: 14.5, groupeReduit: 29 },
          { matiere: "Arts appliques et culture artistique", total: 29, classeEntiere: 14.5, groupeReduit: 14.5 },
          { matiere: "Éducation physique et sportive", total: 72.5, classeEntiere: 72.5, groupeReduit: 0 },
          { matiere: "Consolidation, accompagnement personnalise et accompagnement au choix d'orientation", total: 101.5, classeEntiere: 43.5, groupeReduit: 58, note: "Dédoublements possibles en fonction des besoins des élèves" }
        ],
        totalPremiereAnnee: 899,
        deuxiemeAnnee: [
          { matiere: "Enseignements professionnels (EP)", total: 312, classeEntiere: 52, groupeReduit: 260 },
          { matiere: "EP et francais en co-intervention", total: 39, classeEntiere: 39, groupeReduit: 0 },
          { matiere: "EP et mathematiques en co-intervention", total: 39, classeEntiere: 39, groupeReduit: 0 },
          { matiere: "Réalisation d'un chef d'œuvre", total: 78, classeEntiere: 0, groupeReduit: 0, note: "En effectif réduit" },
          { matiere: "Prévention sante environnement", total: 26, classeEntiere: 0, groupeReduit: 26 },
          { matiere: "Francais, histoire-geographie", total: 39, classeEntiere: 13, groupeReduit: 26 },
          { matiere: "Enseignement moral et civique", total: 13, classeEntiere: 0, groupeReduit: 13 },
          { matiere: "Mathematiques - Physique-chimie", total: 39, classeEntiere: 13, groupeReduit: 26 },
          { matiere: "Langue vivante", total: 39, classeEntiere: 13, groupeReduit: 26 },
          { matiere: "Arts appliques et culture artistique", total: 26, classeEntiere: 13, groupeReduit: 13 },
          { matiere: "Éducation physique et sportive", total: 65, classeEntiere: 65, groupeReduit: 0 },
          { matiere: "Consolidation, accompagnement personnalise et accompagnement au choix d'orientation", total: 91, classeEntiere: 39, groupeReduit: 52, note: "Dédoublements possibles" }
        ],
        totalDeuxiemeAnnee: 806,
        totalSur2Ans: 1705,
        pfmpSemaines: "6 a 7 semaines par annee, 12 a 14 semaines sur 2 ans",
        dedoublement: "Pour le CAP PSR, le dédoublement en enseignement professionnel intervient à partir du 13eme élève (Cf. arrêté du 21.11.2018)"
      },
      secteurMaths: "Pour l'enseignement des mathematiques, le CAP PSR est rattache au groupement N°1 'hygiène et sante'",
      repartitionHoraire: {
        titre: "Proposition de répartition horaire",
        premiereAnnee: {
          production: { effectifReduit: "6h", classeEntiere: "1h" },
          service: { effectifReduit: "3,5h", classeEntiere: "1h" },
          totalEP: { effectifReduit: "9,5h", classeEntiere: "2h" },
          coInterventionFrancais: "1,5h en classe entière en co-intervention",
          coInterventionMaths: "1,5h en classe entière en co-intervention",
          chefOeuvre: "3h en effectif réduit pour l'ensemble des disciplines de la classe",
          consolidation: "1,5h en classe entière + 2h a effectif réduit"
        },
        deuxiemeAnnee: {
          production: { effectifReduit: "6h", classeEntiere: "1h" },
          service: { effectifReduit: "4h", classeEntiere: "1h" },
          totalEP: { effectifReduit: "10h", classeEntiere: "2h" },
          coInterventionFrancais: "1,5h en classe entière en co-intervention",
          coInterventionMaths: "1,5h en classe entière en co-intervention",
          chefOeuvre: "3h en effectif réduit pour l'ensemble des disciplines de la classe",
          consolidation: "2h en classe entière + 1,5h a effectif réduit"
        }
      }
    },

    // --- 2. Contenus de formation ---
    contenusFormation: {
      savoirsAssocies: "Des savoirs associés sont declines pour chacune des compétences du diplôme. Certains d'entre eux sont communs aux cinq compétences d'un meme pole, il conviendra de les répartir dans le projet prévisionnel de formation au moment le plus opportun, sachant qu'ils seront mobilises a de nombreuses reprises au cours des activités (exemple : la communication, le comportement éco-responsable, la gestion des déchets...). La thematique des risques professionnels a ete repartie sur l'ensemble des compétences en prenant en compte les risques predominants pour chacune des activités professionnelles. Il convient d'aborder cette thematique des le debut de la formation puis tout au long des sequences en lien etroit avec l'enseignement de la discipline Prévention sante environnement. Une démarche similaire est a mettre en œuvre afin que les élèves adoptent un comportement eco-responsable dans l'ensemble des activités professionnelles conduites.",

      projetPrevisionnel: {
        definition: "Le projet prévisionnel de formation est une organisation de la formation sur le cycle. Il s'agit d'articuler et de répartir dans le temps et dans les différents lieux de formation (établissement de formation et milieu professionnel) l'acquisition des compétences. Cette formalisation est aussi appelee strategie globale de formation ou projet global de formation ou projet pédagogique de formation.",
        elaboration: [
          "Une anticipation du projet à l'annee n-1",
          "Un travail en équipe pluridisciplinaire",
          "La prise en compte du calendrier scolaire",
          "La prise en compte de la semaine d'intégration, des PFMP ou des temps de formation en entreprise pour les apprentis, des périodes de contrôle en cours de formation (CCF)",
          "La prise en compte des objectifs de formation en milieu professionnel et leur exploitation",
          "L'utilisation d'outils numériques partages pour l'évaluation et le suivi de l'acquisition des compétences"
        ],
        suiviCompetences: "Le suivi de l'acquisition des compétences de chaque élève est indispensable, l'utilisation d'un outil de suivi numérique etant le moyen le mieux adapte. Les enseignants evaluent une meme compétence (avec les savoirs associés qui s'y rattachent) dans des situations variées et dans des contextes différents. Ils renseignent au fur et a mesure l'outil numérique qui va permettre de suivre le niveau d'acquisition des compétences de chaque jeune."
      },

      demarchePedagogique: {
        approche: "Le projet prévisionnel de formation privilegie une approche par compétences developpees au travers de contextes et de situations professionnelles. Développer une approche par compétences requiert de voir les savoirs, les connaissances davantage comme une ressource et non comme un but du processus d'apprentissage.",
        elaborationDemarche: "Pour élaborer le projet prévisionnel de formation, plusieurs démarches sont possibles. Il est cependant pertinent de partir des compétences a développer. Pour cela l'équipe pédagogique repere, dans le référentiel, des compétences a développer puis determine les savoir-faire et savoirs associés qui seront abordes durant la période. A partir de ces choix, l'équipe pédagogique redige le contexte professionnel et sélectionné les annexes. En fonction de la répartition des poles, les enseignants construisent les situations professionnelles liées à ce contexte. Une meme situation peut être exploitee par un ou plusieurs enseignants. Les enseignants determinent ensuite les sequences et seances de formation qui decoulent de ces situations. Ils identifient dans le référentiel les résultats attendus.",
        contexte: {
          definition: "Le contexte décrit l'environnement dans lequel s'inscrivent les situations professionnelles. Il appartient à l'un des secteurs dans lesquels les élèves pourront exercer (restaurations rapide, collective, commerciale libre-service). Le plus proche possible de la realite professionnelle.",
          contenu: [
            "Le milieu de travail : taille, type, situation geographique, horaires d'ouvertures, description des locaux, règlement interieur...",
            "Les caractéristiques du personnel : nombre, qualification, organigramme...",
            "La typologie de la clientele accueillie",
            "L'offre proposée (cartes, menus, tarifs, ventes additionnelles...)",
            "Le protocole d'accueil ou de prise de conge",
            "Le plan de maîtrise sanitaire"
          ],
          dureeMax: "Les contextes professionnels proposés n'excederont pas 6 semaines a 7 semaines.",
          variete: "Sur l'ensemble de la formation, il est nécessaire de varier les contextes afin de faire découvrir aux élèves les différents secteurs concernés par le diplôme (restaurations rapide, collective, cafétéria). Au sein d'un meme secteur, une variété des milieux professionnels sera également proposée (exemple pour la restauration collective : restaurant au sein d'un EHPAD, restaurant scolaire, restaurant d'entreprise...)."
        },
        situationProfessionnelle: "La situation professionnelle fournit des informations qui doivent permettre la réalisation de taches ou d'activités. Elle correspond à la commande faite et mentionne ce qui est a réaliser ainsi que les conditions de travail. Elle prend appui sur le référentiel des activités professionnelles. La situation professionnelle permet de susciter des interrogations. Elle met l'élève en situation d'analyse, de reflexion, de réalisation. La formulation de la situation placera l'élève en position d'agent, d'employe... plutot qu'en position de stagiaire afin qu'il se projette reellement dans le monde professionnel."
      },

      phaseAccueil: "L'entrée en formation des jeunes necessite une attention particulière de l'ensemble de l'équipe pédagogique. En effet, l'arrivee dans la formation ne fait pas toujours suite à un choix delibere de l'élève. Il à des representations sur les activités, le milieu professionnel, le métier, que le professeur devra interroger, voire deconstruire si besoin. Pour cela, diverses modalites pédagogiques peuvent être proposées des les premiers jours : visites d'entreprise, illustrations à partir de supports video, temoignages de professionnels, echanges avec d'anciens élèves... Les heures du module 'Consolidation des acquis, accompagnement personnalise, accompagnement au choix de l'orientation' peuvent etre mises a profit pour cela.",

      organisationEnseignements: {
        equipe: "Les enseignements professionnels sont de la responsabilité des professeurs de lycee professionnel Biotechnologies option sante-environnement (BSE). Sur chaque annee de formation, il convient de limiter le nombre de professeurs (deux dans l'ideal) afin de faciliter la mise en œuvre d'un projet pédagogique cohérent. Ceci implique que les compétences professionnelles et les savoirs associés correspondant soient assures par un meme professeur.",
        repartition: "Les compétences et savoirs associés sont a répartir entre les enseignants en fonction des contextes et situations professionnels etudies. L'emploi du temps des élèves fera apparaitre, pour l'enseignement professionnel, uniquement les deux poles, production alimentaire et service en restauration. Dans l'emploi du temps hebdomadaire, la part des techniques professionnelles et des savoirs associés dans chacun des poles n'est pas figee d'une semaine sur l'autre. Elle s'adapté au plan prévisionnel de formation elabore par l'équipe.",
        organisationPossible: [
          "Un meme groupe d'élèves réalisé la production et le service sur une meme journee",
          "Un premier groupe d'élèves réalisé la production et un deuxieme groupe arrive en fin de matinee pour réaliser le service"
        ],
        entretien: "Dans les deux cas l'entretien des zones utilisees s'effectuent à l'issue des TP.",
        prapIBC: "Les risques lies à l'activité physique etant predominants dans les secteurs professionnels du CAP PSR, il est conseille de dispenser aux élèves la formation en prévention des risques lies à l'activité physique secteurs industrie, BTP et commerce et activités de bureau (PRAP IBC)."
      },

      // --- 2.3.5 Exemples de demarche pedagogique ---
      exemplesPedagogiques: [
        {
          titre: "Contexte professionnel n°1 - Restauration collective scolaire",
          annee: "1ere annee",
          trimestre: "1er trimestre",
          periode: "Période de 6 semaines (septembre-octobre)",
          description: "Le restaurant scolaire du lycee professionnel de l'Yser est ouvert aux 275 élèves et personnels de l'établissement, mais aussi à des personnes exterieures grace à la signature d'une convention. Deux services sont proposes : un a 11h30, le second a 12h30. L'objectif de la restauration scolaire est de permettre a tous les élèves de beneficier de repas equilibres. Le chef et son équipe travaillent dans un souci de developpement durable : moins de gaspillage, tri des déchets, préparation d'aliments bio et de proximite.",
          documentsExploitation: [
            "Photos de la structure, du personnel en tenue pour la production comme pour le service",
            "Plan des cuisines (principe de la marche en avant)",
            "Extraits du plan de maîtrise sanitaire",
            "Photos correspondant au tri des déchets appliqué dans le restaurant ou procédure écrite"
          ],
          situations: [
            {
              numero: 1,
              pole: "Production alimentaire",
              description: "Vous venez d'être embauché(e) de restauration collective au restaurant scolaire du LP de l'Yser. À votre accueil, le chef de cuisine vous a présenté les locaux, les équipements et matériels et il vous a informé sur les principales règles d'hygiène et de sécurité à respecter. Lors de vos premières semaines de travail, vous êtes affecté(e) sur différents postes en cuisine par roulement : entrées, desserts et plonge. En fin de production, vous assurez l'entretien des espaces et équipements utilisés. Certains matins, vous venez en aide à une collègue pour ranger les produits alimentaires et non alimentaires dans les espaces appropriés.",
              savoirsAssocies: {
                environnementProfessionnel: ["S2.1 Risques spécifiques aux opérations préliminaires et moyens de prévention", "SC1.4 Gestion des déchets"],
                technologies: ["S1.2 Techniques professionnelles : règles de rangement/opérations de traçabilité", "S1.3 Équipements et matériels utilisés lors de la livraison, de la réception et du stockage", "S2.2 Techniques professionnelles liées aux opérations préliminaires (Pesées et mesures)", "S2.3 Matériels ou appareils de pesée, d'épluchage, de taillage, de tranchage", "S4.3 Techniques professionnelles (Assemblage, dressage, conditionnement - Traçabilité)", "S5.2 Techniques professionnelles d'entretien manuel et mécanisé dans l'espace de production", "S5.3 Matériels d'entretien (Centrale de lavage et de désinfection, lave-batterie)", "S5.7 Hygiène des surfaces, des matériels et des locaux (Définir la propreté et l'hygiène)"],
                hygieneProfessionnelle: ["SC1.5 Agents de la biocontamination (Définir un micro-organisme / Définir une biocontamination)", "SC1.3 Comportement éco-responsable", "SC1.6 Mesures réglementaires et moyens d'organisation des circuits dans les locaux : la marche en avant - plan de maîtrise sanitaire", "SC1.7 Hygiène du personnel", "S2.4 Prévention des contaminations lors des opérations préliminaires", "S4.5 Prévention des contaminations au cours des activités d'assemblage, de dressage et de conditionnement"],
                sciencesAlimentation: ["S1.7 Caractéristiques des produits alimentaires", "S1.8 Modifications des produits alimentaires lors du stockage"]
              },
              competencesProfessionnelles: [
                "C1.3 Ranger les produits alimentaires et non alimentaires dans les espaces appropriés",
                "C2.1 Peser, quantifier les produits alimentaires",
                "C2.3 Préparer les fruits et légumes frais : laver, décontaminer / éplucher/tailler à la main ou à la machine",
                "C3.1 Mettre en œuvre des cuissons : à l'eau, à la vapeur, au four, saisies, grillees, gratinee, en friture",
                "C4.1 Assembler des produits alimentaires pour obtenir des mets simples",
                "C4.2 Portionner les préparations alimentaires",
                "C4.3 Dresser, mettre en valeur les préparations alimentaires",
                "C4.5 Entreposer les préparations alimentaires en attente de la distribution ou de la vente",
                "C5.1 Assurer le lavage manuel et mécanisé de la batterie de cuisine et des ustensiles",
                "C5.2 Nettoyer et desinfecter les surfaces, équipements et matériels des espaces de production : lavage manuel des équipements, matériels et surfaces / Lavage mécanisé des surfaces",
                "C5.3 Evacuer, trier et entreposer les déchets"
              ],
              exempleSemaine: {
                semaine: 3,
                competencesPriorisees: ["C2.3 Préparer les fruits et légumes frais : laver, decontaminer / eplucher/tailler à la main ou à la machine", "C5.3 Evacuer, trier et entreposer les déchets"],
                preparations: ["Salade de tomates - feta", "Salade strasbourgeoise", "Salade de betteraves rouges", "Concombre à la creme", "Salade pamplemousse avocat", "Salade de pates, de riz", "Assiette de charcuteries", "Fromage blanc aux poires", "Fromage blanc/compote/Speculoos", "Salade de fruits avec un sirop de sucre..."],
                savoirsEffectifReduit: ["S2.3 Matériels ou appareils de pesee, d'épluchage, de taillage, de tranchage", "S2.1 Risques spécifiques aux opérations préliminaires et moyens de prévention", "SC1.4 Gestion des déchets"],
                savoirsClasseEntiere: ["SC1.3 Comportement éco-responsable", "SC1.5 Agents de la biocontamination (Définir un micro-organisme / Définir une biocontamination)"]
              }
            },
            {
              numero: 2,
              pole: "Service en restauration",
              description: "Chaque jour, en fin de matinee, vous mettez en place l'espace de distribution ou de consommation du restaurant scolaire. Pendant le service, vous assurez le réapprovisionnement des espaces de distribution (couverts, pain, desserts, entrees). En fin de service, vous assurez la remise en état de l'espace de distribution ou de consommation.",
              savoirsAssocies: {
                environnementProfessionnel: ["SC2.1 Secteurs de la restauration (Restauration collective)", "SC2.2 Image de marque de l'entreprise (Établissement du contexte)", "SC2.4 Lutte contre le gaspillage alimentaire", "S6.1 Modes de distribution des repas (celui de l'établissement du contexte)", "S6.2 Risques spécifiques aux opérations de mise en place et de réapprovisionnement et moyens de prévention", "S10.1 Risques spécifiques aux activités d'entretien manuelles et mécanisées et moyen de prévention (Risques de chutes de plain-pied)"],
                technologies: ["S6.3 Techniques professionnelles : mise en place et réapprovisionnement des espaces de distribution, de vente et de consommation", "S6.4 Appareils de distribution (Banque de distribution par exemple)", "S10.2 Techniques professionnelles d'entretien manuel et mécanisé dans les espaces de distribution, vente, consommation et locaux annexes (Operations d'entretien de la banque de distribution et de la zone de consommation)", "S10.4 Produits d'entretien et consommables (Produits et consommables utilisés seulement)", "S10.5 Materiaux (Zone de distribution et de consommation)"],
                hygieneProfessionnelle: ["SC2.5 Tenue professionnelle (Secteur restauration collective pour le service)", "S6.6 Gestion des produits non servis et des invendus"],
                sciencesAlimentation: ["S6.8 Les labels de qualité et la traçabilité des produits", "S6.9 Les produits de proximite"]
              },
              competencesProfessionnelles: [
                "C6.1 Installer les espaces de distribution, vente et consommation",
                "C6.2 Disposer les produits non alimentaires et alimentaires sur les espaces de distribution, vente et consommation",
                "C6.4 Participer à la mise en valeur des espaces de distribution, vente et consommation",
                "C6.5 Contrôler et réapprovisionner les espaces en prenant en compte les flux, les stocks",
                "C6.6 Traiter les produits non servis et les invendus",
                "C10.2 Réaliser les opérations manuelles et mécanisées de nettoyage, de désinfection dans les espaces de distribution, vente, consommation et locaux annexes : depoussierage manuel et mécanisé / lavage manuel : des vitrines, des parois - des sols, équipements, matériels / Lavage mécanisé des surfaces",
                "C10.3 Évacuer, trier et entreposer les déchets"
              ],
              exempleSemaine: {
                semaine: 2,
                competencesPriorisees: ["C6.2 Disposer les produits non alimentaires et alimentaires sur les espaces de distribution, vente et consommation", "C6.5 Contrôler et réapprovisionner les espaces en prenant en compte les flux, les stocks"],
                activite: "Durant cette période de 6 semaines, il est judicieux de faire fonctionner la banque de distribution de la cuisine pédagogique avec une offre diversifiee de préparations froides.",
                savoirsEffectifReduit: ["SC2.2 Image de marque de l'entreprise", "SC2.5 Tenue professionnelle (Secteur restauration collective, tenue pour le service)"],
                savoirsClasseEntiere: ["S6.8 Les labels de qualité et la traçabilité des produits", "S6.9 Les produits de proximite"]
              }
            }
          ]
        },
        {
          titre: "Contexte professionnel n°2 - Restauration rapide (SUBDAY)",
          annee: "1ere annee",
          trimestre: "2e trimestre",
          periode: "Période de 4 a 5 semaines (novembre-decembre)",
          description: "SUBDAY est une enseigne qui fait partie de la restauration rapide à la francaise. L'enseigne proposé une gamme de sandwichs à la carte, des sandwichs composes à la demande du client ainsi que des salades, des spécialités, des desserts, des chips et des boissons. Une fois par semaine, l'enseigne proposé une formule 'découverte'. (Remarque : ici le contexte est créé pour les besoins de la formation, il ne s'agit pas d'une entreprise reelle.)",
          situationProfessionnelle: "Au debut de la matinee vous etes charge(e) de préparer à l'avance les salades, les ingredients entrant dans la composition des sandwichs ainsi que les desserts vendus par l'enseigne. Au moment du service, vous préparez les sandwichs devant le client à partir des ingredients de leur choix. Cette offre permet de répondre aux demandes variées des clients (végétariens, vegans...). En plus de la carte habituelle, la formule du jour 'Mexico' proposé des tacos, fajitas ou nachos gratinés avec un dessert et une boisson pour deux euros de plus. L'enseigne souhaite privilégier la polyvalence et le travail en équipe. Vous êtes amené(e) a occuper différents postes : préparation des sandwichs ou des formules, des desserts, prise de commande, encaissement des prestations, accueil des clients et maintien en ordre de la salle. En fin de journee, vous êtes associe(e) à la remise en état des locaux et des équipements.",
          documentsExploitation: [
            "Composition de l'équipe",
            "Carte du restaurant",
            "Supports de vente",
            "Liste des ingredients pour les sandwichs composes à la demande du client",
            "Protocoles d'accueil et de prise de conges",
            "Protocole de prise de commande",
            "Procédure d'encaissement"
          ],
          preparationsIllustrees: ["Sandwich vegan", "Sandwich jambon", "Sandwich boeuf", "Sandwich thon", "Sandwich poulet", "Sandwich italien", "Salade York", "Salade Cesar", "Salade tofu", "Salade de pates", "Nachos gratinés", "Tacos", "Fajita", "Salade de fruits", "Fromage blanc caramel", "Brownie", "Muffin"],
          savoirsAssocies: {
            environnementProfessionnel: ["SC1.1 Communication (Travail en équipe)", "S4.1 Liaisons chaude et froide", "S4.2 Risques spécifiques aux activités d'assemblage, dressage, conditionnement et moyens de prévention"],
            technologies: ["S2.3 Matériels ou appareils de pesée, d'epluchage, de taillage, de tranchage", "S3.3 Matériels ou appareils de préparation, cuisson, refroidissement rapide, conservation (chaud ou froid)", "S4.3 Techniques professionnelles (Conditionnement)", "S4.5 Prévention des contaminations au cours des activités d'assemblage, de dressage, conditionnement"],
            sciencesAlimentation: ["S3.5 Qualité organoleptique des aliments"],
            environnementProfessionnel2: ["SC2.2 Image de marque de l'entreprise (Restauration rapide)", "S7.1 Communication avec le client ou le convive"],
            technologies2: ["S7.2 Techniques professionnelles : étapes de la vente ou de l'offre (identification des besoins et des attentes, supports de vente, proposition de l'offre, vente additionnelle, prise de commande, objections et reclamations)", "S9.2 Techniques professionnelles : tenue de caisse"],
            sciencesAlimentation2: ["S7.3 Groupes d'aliments et constituants alimentaires"]
          },
          competencesProfessionnelles: [
            "C2.3 Préparer les fruits et légumes frais : laver, décontaminer / éplucher/tailler à la main ou à la machine",
            "C3.1 Mettre en œuvre des cuissons : à l'eau, à la vapeur, au four, saisies, grillees, toastees, gratinees",
            "C3.3 Réaliser a chaud ou a froid des préparations à partir de produits semi-elabores ou elabores",
            "C4.4 Conditionner les préparations en portion individuelle ou multiportions ou en plateau-repas",
            "C4.5 Entreposer les préparations alimentaires en attente de la distribution ou de la vente",
            "C7.1 Accueillir, accompagner le client ou le convive jusqu'a la prise de conge",
            "C7.2 Identifier les besoins et les attentes du client ou du convive, proposer l'offre, la vente additionnelle",
            "C7.3 Prendre la commande",
            "C8.1 Préparer les éléments de la commande",
            "C8.2 Conditionner les éléments pour la vente a emporter : mise en sachet, en carton, en barquette",
            "C9.1 Ouvrir et cloturer une caisse",
            "C9.2 Saisir les éléments de la prestation a encaisser",
            "C9.3 Traiter les encaissements dans ses différentes formes"
          ]
        }
      ],

      // --- 2.3.6 Modalites pedagogiques ---
      modalitesPedagogiques: {
        consolidation: {
          titre: "Consolidation des acquis, accompagnement personnalise et accompagnement aux choix d'orientation",
          description: "Pour mieux répondre aux besoins et aux aspirations de chaque élève, sont mis en oeuvre : des enseignements de consolidation, un accompagnement personnalise, une préparation aux choix d'orientation (insertion professionnelle et poursuite d'études). Ce dispositif d'accompagnement fait partie intrinseque du temps scolaire de l'élève de CAP. Les enjeux finaux de ce dispositif s'inscrivent dans le parcours professionnel ou d'études."
        },
        coIntervention: {
          titre: "Co-intervention",
          description: "La co-intervention est une modalite pédagogique de mise en œuvre des référentiels et des programmes dans laquelle deux enseignants (enseignement général et enseignement professionnel) interviennent ensemble dans une meme salle (ou un meme lieu) et au meme moment. Elle implique un co-enseignement, c'est-a-dire un projet d'enseignement elabore en commun et en amont de la co-intervention proprement dite : définition des objectifs et des contenus d'enseignement à partir des référentiels et des programmes, choix des moments et des formes de la co-intervention pour l'analyse reflexive de la seance proposée. Il s'agit de créér des ponts entre les disciplines pour apporter de la coherence à la formation globale delivree aux élèves."
        },
        chefOeuvre: {
          titre: "Chef-d'œuvre",
          description: "La réalisation d'un chef-d'œuvre, synonyme d'excellence et de reconnaissance, contribue à la motivation et au developpement personnel de l'élève, et lui permet d'exprimer et de valoriser ses talents en lien avec le(s) metier(s) qu'il préparé. Le chef-d'œuvre est une démarche de réalisation tres concrete qui s'appuie sur les compétences transversales et professionnelles travaillees dans sa spécialité par l'élève ou l'apprenti. Il est l'aboutissement d'un projet pluridisciplinaire. Sa réalisation concerné tous les élèves et apprentis de CAP sur le cycle de formation.",
          exemples: [
            {
              titre: "Cours de cuisine à un public d'adultes",
              disciplines: "Enseignement professionnel, arts appliques, francais, mathematiques-physique-chimie",
              etapes: [
                "Choix d'une serie de recettes simples",
                "Transformation des recettes simples en recettes plus elaborees",
                "Réalisation des supports de communication pour proposer les cours de cuisine à un public d'adulte (enseignants - parents)",
                "Animation des cours de cuisine par les élèves",
                "Redaction puis vente du livre de recettes illustre (photos, dessins)",
                "Sortie au restaurant avec les élèves, financee par la vente des cours de cuisine et des livres de recettes"
              ]
            },
            {
              titre: "Creation d'un musee imaginaire",
              disciplines: "Enseignement professionnel, histoire-geographie, francais et arts appliques",
              etapes: [
                "Découverte de l'aliment au travers d'une filmographie, d'œuvres d'art, du street-art et des expressions francaises",
                "Creation d'une œuvre en lien avec l'aliment ou à partir d'aliments",
                "Exposition temporaire du musee au sein de l'établissement (a destination des élèves, du personnel, des parents...)"
              ]
            },
            {
              titre: "Comment evoluer vers des repas ecoresponsables ?",
              disciplines: "Enseignement professionnel, prévention sante environnement, francais, arts appliques",
              etapes: [
                "Organisation d'ateliers cuisine 'Mieux cuisiner, moins jeter !' (Association de partenaires exterieurs)",
                "Organisation de sorties pédagogiques pour mieux connaitre l'environnement local de la production alimentaire : visite d'une ferme et d'un producteur de légumes de proximite par exemple",
                "Recherche de recette ecoresponsables",
                "Creation de menus equilibres avec des produits locaux en limitant les consommations d'eau et d'electricite et la production de déchets",
                "Réalisation de repas ecoresponsables",
                "Exposition au sein du lycee et réalisation d'un film de courte durée pour sensibiliser les lyceens au developpement durable au travers des repas"
              ]
            }
          ]
        },
        capEn123Ans: {
          titre: "CAP en 1, 2 ou 3 ans",
          description: "Le cursus de reference de préparation du CAP porte sur une durée de deux annees. Toutefois des parcours personnalises pour préparer un CAP en 1, 2 ou 3 ans peuvent etre proposés en fonction des profils et des besoins des élèves. Par exemple un CAP en 1 an peut etre proposé à un élève titulaire d'un autre CAP (cuisine, CSHCR...).",
          parcours3ans: "Au contraire de ce que l'on pourrait concevoir de prime abord, les élèves a besoins educatifs particuliers et les élèves precedemment scolarises en SEGPA ne suivront pas systematiquement un parcours 3 ans car il ne s'agit pas d'une nouvelle structure dediee au préalable mais bien d'un parcours d'élève.",
          diagnostic: "L'entrée en formation se fait, pour tous les élèves, par une phase d'accueil, d'intégration, de consolidation du choix d'orientation dans le cadre theorique d'un CAP 2 ans. Des cette période, l'équipe educative demarre collectivement un premier diagnostic. Celui-ci permet de mesurer le degré de construction du projet de l'élève et d'apporter un eclairage sur la durée du parcours de formation : soit en un an d'une part, soit en au moins deux ans d'autre part.",
          positionnement: "Le positionnement de chaque élève sur un parcours 2 ou 3 ans est proposé par le conseil de classe en fin de première annee (avec une réversibilité possible en debut de deuxieme annee). N.B : Le parcours en un an doit faire l'objet d'une demande de positionnement par le candidat aupres du recteur. Celui-ci se prononce à partir de l'avis de l'équipe pédagogique."
        }
      },

      // --- 2.4 Réglementation cuisines pedagogiques ---
      reglementationCuisines: {
        reference: "Instruction technique DGAL/SDSSA/2017-164 du 22/02/2017 : chapitre 1 Restauration collective / 1.1.2 Cas particuliers - d) Cuisines ou ateliers pédagogiques, foyers et structures de vie",
        casDeFigure: [
          {
            cas: "Les repas ne sont pas consommes (destruction)",
            reglementation: "Aucune réglementation ne s'appliqué puisqu'il n'y a pas de consommation ; cependant, il est fortement recommande, dans un but pédagogique, de respecter la réglementation communautaire (règlement (CE) n° 852/2004)."
          },
          {
            cas: "Les repas sont consommes exclusivement par les personnes qui les preparent",
            reglementation: "Il s'agit de préparation, de manipulation et d'entreposage domestiques de denrées alimentaires à des fins de consommation domestique privee. Il n'y a pas de réglementation dans ce cas, mais il est bien sur fortement recommande de respecter la réglementation communautaire citee ci-dessus."
          },
          {
            cas: "Les repas sont consommes dans le cadre de la restauration collective de l'établissement (personnes internes ou externes)",
            reglementation: "Il s'agit d'une activité de restauration collective, la cuisine est alors soumise aux dispositions relatives à la restauration collective. Commentaire : l'arrêté du 21/12/2009 relatif aux règles sanitaires applicables aux activités de commerce de detail, d'entreposage et de transport de produits d'origine animale et denrées alimentaires en contenant et les règlements communautaires (CE) n°852 et 853/2004 s'appliquent dans ce cas."
          },
          {
            cas: "Les repas sont consommes par des personnes exterieures à l'établissement, sur place ou vendus",
            reglementation: "S'ils sont consommes sur place par des personnes exterieures, il s'agit de remise directe. Commentaire : l'arrêté du 21/12/2009 et les règlements communautaires (CE) n°852 et 853/2004 s'appliquent dans ce cas, sauf qu'il n'y a pas de repas temoins a réaliser."
          },
          {
            cas: "Les repas sont livres à des restaurants collectifs",
            reglementation: "Si les repas sont livres à des restaurants collectifs, la cuisine réalisé une activité de restauration collective, elle devra beneficier d'un agrement communautaire ou d'une derogation à l'obligation d'agrement. Elle est alors soumise aux dispositions relatives à la restauration collective. Commentaire : dans le cas ou la réglementation restauration collective s'applique, l'activité doit etre declaree aupres des services de la Direction Departementale de la Protection des Populations (DDPP)."
          }
        ]
      }
    },

    // --- 3. PFMP - Informations complémentaires du GAP ---
    pfmpGap: {
      planification: {
        principes: [
          "Les PFMP doivent etre reparties sur chaque annee de formation et dans toute la mesure du possible, sur au moins deux des trois secteurs suivants : restauration rapide, restauration commerciale libre-service, restauration collective",
          "Les PFMP doivent également porter sur les deux poles : production et service",
          "Dans la mesure du possible, il est pertinent que l'élève developpe a chaque PFMP des compétences en lien à la fois avec la production et le service",
          "Au depart, l'un des deux poles seulement peut etre travaille. Il conviendra dans ce cas de retablir l'equilibre lors de la PFMP suivante"
        ],
        dureeMinimale: "Il est conseille que les PFMP supports d'une évaluation CCF soient de trois semaines au minimum.",
        choixLieux: "Dans le choix des PFMP, les équipes veilleront à ce que les lieux choisis proposent une activité suffisante pour permettre à l'élève de développer ses compétences dans des conditions optimales. Les restaurants scolaires, par exemple, peuvent connaitre une baisse consequente de l'activité sur la période de juin.",
        competencesEvalueesEnPFMP: {
          EP1: { competences: ["C1", "C4"], description: "Le candidat effectué le choix du secteur sur lequel porte l'évaluation (restauration rapide ou commerciale libre-service ou collective)" },
          EP2: { competences: ["C7", "C8", "C10"], description: "Le candidat effectué le choix du secteur (restauration rapide ou commerciale libre-service ou collective)" }
        },
        exemplesRepartition: [
          {
            profil: "Élève A (projet oriente vers la restauration collective avec des convives adultes)",
            premiereAnnee: [
              { secteur: "Restauration collective scolaire", duree: "3 semaines" },
              { secteur: "Restauration rapide", duree: "3 semaines" }
            ],
            deuxiemeAnnee: [
              { secteur: "Restauration commerciale type cafétéria", duree: "4 semaines" },
              { secteur: "Restauration collective d'entreprise", duree: "4 semaines" }
            ]
          },
          {
            profil: "Élève B (projet oriente vers la restauration rapide)",
            premiereAnnee: [
              { secteur: "Restauration rapide", duree: "3 semaines" },
              { secteur: "Restauration commerciale type cafétéria scolaire", duree: "4 semaines" }
            ],
            deuxiemeAnnee: [
              { secteur: "Restauration collective", duree: "3 semaines" },
              { secteur: "Restauration rapide", duree: "4 semaines" }
            ]
          }
        ]
      },
      preparation: {
        rechercheLieux: "La recherche des lieux d'accueil rélève de la responsabilité de l'équipe pédagogique (cf. circulaire n° 2016-053 du 29 mars 2016 - BOEN n° 13 du 31 mars 2016). Le choix ou la selection des entreprises d'accueil est essentiel si l'on veut atteindre les objectifs de formation fixes pour les PFMP. Les professeurs recherchent et valident les lieux de formation en prenant en compte les contraintes. L'équipe pédagogique sera vigilante quant aux eventuelles pratiques discriminatoires qu'elle qu'en soit la nature, que l'élève pourra avoir a subir.",
        preparationPedagogique: [
          "L'élève, que toute l'équipe pédagogique aide dans l'acquisition des savoirs, savoir-faire et savoir-être nécessaires à une bonne intégration dans le milieu professionnel",
          "L'entreprise ou collectivité d'accueil, que l'établissement scolaire informe le mieux possible sur les caracteristiques de la formation suivie par l'élève, les compétences a travailler lors de la PFMP, et si besoin sur le profil du jeune (élève a besoins educatifs particuliers, élève en situation de handicap)"
        ],
        avantDepart: "Avant son depart en PFMP, le jeune identifié avec l'aide de ses professeurs les compétences developpees en amont, il fait le point sur l'état de ses acquisitions. Il est capable, selon son niveau et son avancee dans la formation, de lister les activités professionnelles qu'il est susceptible de réaliser dans le secteur concerne. Il peut ainsi echanger avec son tuteur et lui présenter les outils de liaison.",
        deroulement: "L'accompagnement de l'élève pendant la PFMP implique nécessairement au moins une visite sur le lieu d'accueil d'un membre de l'équipe pédagogique. Certaines visites peuvent être organisées en binome en privilegiant l'interdisciplinarité. En amont, il importe d'avoir eu un contact avec l'élève (par courriel par exemple) pour apprecier le premier accueil dans l'entreprise et la mise au travail.",
        exploitationEnClasse: {
          description: "Comme toutes sequences d'enseignement, les PFMP doivent etre formalisees et exploitees dans la continuite du cycle de formation. L'enjeu consiste a reinvestir les compétences developpees et a s'appuyer sur le vecu des élèves pour les rendre auteurs, acteurs de leur formation.",
          possibilites: [
            "L'appropriation de la documentation professionnelle recueillie (fiches techniques, plannings, supports de communication...)",
            "L'utilisation des situations de travail vecues par les jeunes",
            "Des travaux d'écriture pour formaliser ou conceptualiser les activités réalisées en milieu professionnel",
            "Des prestations orales individuelles ou collectives pour la présentation d'activités professionnelles..."
          ],
          alternativeRapport: "Pour eviter le rapport de stage 'classique' avec une structure identique a chaque période, l'équipe doit proposer à l'élève de travailler une problematique ou des themes différents a chaque PFMP en lien avec le plan de formation etabli."
        }
      }
    },

    // --- 4. Évaluation CCF - Details complémentaires du GAP ---
    ccfDetails: {
      presentationGlobale: {
        description: "L'évaluation des compétences a ete repartie entre l'établissement de formation et les lieux de PFMP.",
        repartition: [
          { competence: "C1", nom: "Réceptionner et stocker les produits alimentaires et non alimentaires", etablissement: false, pfmp: true },
          { competence: "C2", nom: "Réaliser les operations preliminaires sur les produits alimentaires", etablissement: true, pfmp: false },
          { competence: "C3", nom: "Réaliser des préparations et des cuissons simples", etablissement: true, pfmp: false },
          { competence: "C4", nom: "Assembler, dresser et conditionner les préparations", etablissement: false, pfmp: true },
          { competence: "C5", nom: "Mettre en œuvre les operations d'entretien manuelles et mécanisées dans les espaces de production", etablissement: true, pfmp: false },
          { competence: "C6", nom: "Mettre en place et réapprovisionner les espaces de distribution, de vente et de consommation", etablissement: true, pfmp: false },
          { competence: "C7", nom: "Accueillir, informer, conseiller les clients ou convives et contribuer à la vente additionnelle", etablissement: false, pfmp: true },
          { competence: "C8", nom: "Assurer le service des clients ou convives", etablissement: false, pfmp: true },
          { competence: "C9", nom: "Encaisser les prestations", etablissement: true, pfmp: false },
          { competence: "C10", nom: "Mettre en œuvre les opérations d'entretien manuelles ou mécanisées dans les espaces de distribution, vente, consommation et les locaux annexes", etablissement: false, pfmp: true }
        ],
        schema: "4 situations d'évaluation CCF : EP1 Situation 1 (établissement, secteur impose restauration collective, C2/C3/C5, coef 4) + EP1 Situation 2 (PFMP, secteur au choix, C1/C4, coef 2) + EP2 Situation 1 (établissement, secteur impose restauration rapide ou commerciale libre-service, C6/C9, coef 3) + EP2 Situation 2 (PFMP, secteur au choix, C7/C8/C10, coef 3)"
      },
      ep1: {
        situation1: {
          titre: "Situation 1 : évaluation organisée en établissement de formation (coef. 4)",
          secteur: "Restauration collective (impose)",
          modalites: "Ses modalites sont identiques a celles de l'évaluation ponctuelle.",
          partieEcrite: {
            description: "La partie écrite mobilise l'ensemble des savoirs associés du bloc de compétences n°1.",
            precision: "L'ensemble des savoirs associés spécifiques (S1.1 a S5.7) et communs (SC1.1 a SC1.7) du bloc de compétences n°1 peut etre mobilise y compris les savoirs associés aux compétences C1 et C4 evaluees en PFMP.",
            ancrage: "Cette situation d'évaluation est ancréé sur une ou plusieurs situation(s) professionnelle(s) de la restauration collective.",
            dissociation: "Cette situation d'évaluation peut etre dissociee dans le temps de la partie pratique et orale."
          },
          partiePratiqueOrale: {
            competences: ["C2 - Réaliser les operations preliminaires sur les produits alimentaires", "C3 - Réaliser des préparations et des cuissons simples", "C5 - Mettre en œuvre les operations d'entretien manuelles et mécanisées dans les espaces de production"],
            noteC4: "La compétence C4 'Assembler, dresser et conditionner les préparations' pourra être mobilisee lors des deux productions alimentaires mais elle ne sera pas evaluee puisqu'elle l'est deja en milieu professionnel.",
            oral: "Le candidat explicite sa pratique et les choix qu'il a menes. Les membres de la commission d'évaluation veillent a ne pas destabiliser l'élève pendant sa réalisation ; les questions peuvent etre posees pendant les temps de latence ou à l'issue des activités réalisées. Les professeurs gardent trace des questions posees et des reponses des élèves."
          },
          organisation: "La situation d'évaluation est organisée par les enseignants responsables des enseignements professionnels. La commission d'évaluation est composee d'un enseignant de spécialité et d'un professionnel dans toute la mesure du possible. L'évaluation donne lieu à une proposition de note."
        },
        situation2: {
          titre: "Situation 2 : évaluation en milieu professionnel (coef. 2)",
          secteur: "Au choix du candidat (restauration rapide ou commerciale libre-service ou collective)",
          choixSecteur: "Le candidat effectué le choix du secteur sur lequel porte l'évaluation (restauration rapide ou commerciale libre-service ou collective), avec l'aide de l'équipe pédagogique en fonction de son projet professionnel.",
          verification: "L'équipe pédagogique doit s'assurer que le lieu d'accueil permet de développer de façon significative et d'évaluer les compétences C1 et C4.",
          competences: ["C1 - Réception et stockage les produits alimentaires et non alimentaires", "C4 - Assembler, dresser et conditionner les préparations"],
          evaluation: "L'évaluation porte sur l'ensemble de la période de formation en milieu professionnel ; elle est réalisée conjointement par le tuteur ou le maitre d'apprentissage et un enseignant de l'enseignement professionnel en fin de période. Elle donne lieu à une proposition de note.",
          inspection: "L'inspecteur de l'Éducation nationale Sciences biologiques et sciences sociales appliquées veille au bon déroulement du contrôle en cours de formation."
        }
      },
      ep2: {
        situation1: {
          titre: "Situation 1 : évaluation organisée en établissement de formation (coef. 3)",
          secteur: "Restauration rapide ou commerciale libre-service (impose)",
          modalites: "Ses modalites sont identiques a celles de l'évaluation ponctuelle.",
          partiePratique: {
            competences: ["C6 - Mettre en place et reapprovisionner les espaces de distribution, de vente et de consommation", "C9 - Encaisser les prestations"],
            savoirsAssocies: "et sur les savoirs qui y sont associés"
          },
          partieOrale: {
            description: "La partie orale mobilise l'ensemble des savoirs associés du bloc de compétences n°2.",
            precision: "L'ensemble des savoirs associés spécifiques (S6.1 a S10.7) et communs (SC2.1 a SC2.5) du bloc de compétences n°2 peut etre mobilise y compris les savoirs associés aux compétences C7, C8 et C10 evaluees en PFMP.",
            appui: "Le questionnement oral prend appui sur un a deux documents professionnels et sur les activités pratiques réalisées.",
            documentsExemples: "Exemples de documents professionnels : supports de communication ou de vente, documents descriptifs des produits proposés (labels...), liste des allergenes, documents de traçabilité, documents d'encaissement, fiches techniques produits, procédures...",
            dissociation: "Les temps de questionnement sur les activités pratiques réalisées et les documents professionnels peuvent être dissocies. Les professeurs gardent trace des questions posees et des reponses des élèves."
          },
          organisation: "La situation d'évaluation est organisée par les enseignants responsables des enseignements professionnels. La commission d'évaluation est composee d'un enseignant de spécialité et d'un professionnel dans toute la mesure du possible. L'évaluation donne lieu à une proposition de note."
        },
        situation2: {
          titre: "Situation 2 : évaluation en milieu professionnel (coef. 3)",
          secteur: "Au choix du candidat (restauration rapide ou commerciale libre-service ou collective)",
          choixSecteur: "Le candidat effectué le choix du secteur (restauration rapide ou commerciale libre-service ou collective), avec l'aide de l'équipe pédagogique en fonction de son projet professionnel.",
          verification: "L'équipe pédagogique doit s'assurer que le lieu d'accueil permet de développer de façon significative et d'évaluer les compétences C7, C8 et C10.",
          competences: ["C7 - Accueillir, informer, conseiller les clients ou convives", "C8 - Assurer le service des clients ou convives", "C10 - Mettre en œuvre les operations d'entretien dans les espaces de distribution, vente, consommation et les locaux annexes"],
          evaluation: "L'évaluation porte sur l'ensemble de la période de formation en milieu professionnel ; elle est réalisée conjointement par le tuteur ou le maitre d'apprentissage et un enseignant de l'enseignement professionnel en fin de période. Elle donne lieu à une proposition de note.",
          inspection: "L'inspecteur de l'Éducation nationale Sciences biologiques et sciences sociales appliquées veille au bon déroulement du contrôle en cours de formation."
        }
      },
      archivage: "Tous les documents utilisés dans le déroulement des CCF doivent être archives pendant un an."
    },

    // --- 5. Sitographie - Bibliographie ---
    sitographie: [
      { titre: "Bulletin officiel de l'education national", url: "http://www.education.gouv.fr/pid285/le-bulletin-officiel.html" },
      { titre: "Ministere de l'Éducation nationale et de la jeunesse", url: "https://www.education.gouv.fr/" },
      { titre: "Éduscol - Portail national d'informations et de ressources", url: "https://eduscol.education.fr/référentiels-professionnels/b231.html" },
      { titre: "Textes de lois europeennes - Legifrance", url: "https://www.legifrance.gouv.fr/" },
      { titre: "Sites SBSSA des différentes academies", url: "" },
      { titre: "INRS - Sante et sécurité au travail", url: "http://www.inrs.fr/" },
      { titre: "Brochure prévention des risques professionnels en restauration rapide (INRS ED 933)", url: "http://www.inrs.fr/media.html?refINRS=ED%20933" },
      { titre: "Brochure prévention des risques professionnels en restauration collective (INRS ED 6075)", url: "http://www.inrs.fr/media.html?refINRS=ED%206075" },
      { titre: "La consolidation des acquis et accompagnement personnalise (eduscol)", url: "" },
      { titre: "Mettre en œuvre la co-intervention dans la voie professionnelle (eduscol)", url: "" },
      { titre: "La réalisation du chef-d'œuvre (eduscol)", url: "" },
      { titre: "Adapter les parcours de formation des élèves en CAP en 1, 2 ou 3 ans (eduscol)", url: "" }
    ]
  },

  // =========================================================================
  // GUIDE D'EQUIPEMENT - Septembre 2019
  // =========================================================================
  guideEquipement: {
    source: "Guide d'équipement CAP PSR, proposé par Sabine CAROTTI, IGEN, septembre 2019",
    auteurs: [
      "Benedicte SWIDERSKI, IEN Sciences biologiques et sciences sociales appliquées, academie de Lille",
      "Catherine SERVEAU, IEN Sciences biologiques et sciences sociales appliquées, academie de Nantes",
      "Francis SELLAM, IEN economie - gestion, academie de Paris",
      "Nadege HUGOO, PLP biotechnologies sante environnement, academie de Lille",
      "Sylvie MAGNIER, PLP biotechnologies sante environnement, academie de Lille",
      "Virginie SCHENBERG-FRAUDEAU, PLP biotechnologies sante environnement, academie de Nantes"
    ],

    // --- 1. Organisation fonctionnelle du plateau technique ---
    plateauTechnique: {
      zones: [
        { nom: "Zone de production alimentaire", surface: "140 a 150 m²" },
        { nom: "Zone de distribution et consommation", surface: "70 a 80 m²", note: "Restaurations rapide, collective, cafétéria" },
        { nom: "Zone d'entretien des locaux", surface: "40 m²" },
        { nom: "Zone d'entretien du linge", surface: "15 m²" },
        { nom: "Salle banalisee", surface: "40 m²" },
        { nom: "Vestiaires élèves et professeurs", surface: "38 m²" },
        { nom: "Local a déchets", surface: "6 m²" }
      ],
      liens: [
        "Lien fonctionnel avec le service de restauration scolaire",
        "Acces exterieur pour livraisons des produits et evacuation des déchets"
      ]
    },

    // --- 2. Caracteristiques techniques des locaux ---
    caracteristiquesLocaux: [
      {
        zone: "Zone de production alimentaire",
        norme: "A concevoir dans le respect des normes d'hygiène et de sécurité en vigueur",
        effectif: "12 élèves",
        details: {
          surfaces: "140 a 150 m² dont : 20 m² de reserves alimentaires et non alimentaires, 108 a 118 m² d'espace technique prevoyant une zone pour : opérations préliminaires (deconditionnement, legumerie), préparations froides et cuisson, assemblage et conditionnement, lavage de la batterie de cuisine, lavage de la vaisselle. 6 m² pour stockage du matériel d'entretien de la cuisine. 6 m² pour le stockage des déchets. 38 m² de vestiaires.",
          hauteur: "2,50 m a 3 m",
          implantation: "En rez-de-chaussee (acces facile pour livraisons et evacuation des déchets)",
          proximite: ["Zone entretien des locaux", "Zone entretien du linge", "Service de restauration scolaire (liens fonctionnels)", "Salle banalisee"],
          sol: "Antiderapant, facile a entretenir. Etanche à l'eau et resistant aux produits d'entretien",
          electrique: "Alimentation pour reseau electrique 230V monophase. Alimentation spécifique pour les matériels de cuisson",
          reseaux: "Telephone : liaison interne avec les autres ateliers et l'accueil. Informatique (logiciel de prise de commande - liaison avec la production)",
          fluides: "Eau froide et chaude pour chaque point d'eau (evier, lave mains)",
          ventilation: "Ventilation mécanique forcee pour le renouvellement de l'air vicie et l'evacuation des odeurs"
        }
      },
      {
        zone: "Zone de distribution - consommation",
        norme: "A concevoir dans le respect des normes d'hygiène et de sécurité en vigueur",
        effectif: "12 élèves - 30 consommateurs",
        details: {
          surfaces: "70 a 80 m²",
          hauteur: "2,50 a 3 m",
          implantation: "Rez-de-chaussee",
          proximite: ["Zone production alimentaire", "Zone entretien des locaux", "Zone entretien du linge", "Salle banalisee"],
          sol: "Facile a entretenir",
          electrique: "Alimentation pour reseau electrique 230V monophase. Alimentation spécifique pour les matériels de la zone (bain-marie, etuve...). Nombreuses prises a prevoir (cf. liste du matériel de la zone de distribution)",
          reseaux: "Telephone : liaison interne avec les autres ateliers et l'accueil. Informatique (logiciel de prise de commande - liaison avec la production)"
        }
      },
      {
        zone: "Zone entretien des locaux",
        norme: "A concevoir dans le respect des normes d'hygiène et de sécurité en vigueur",
        effectif: "12 élèves",
        details: {
          surfaces: "40 m²",
          hauteur: "2,50 m a 3 m",
          implantation: "De preference en rez-de-chaussee",
          proximite: ["Zone de distribution et consommation", "Zone entretien des locaux", "Zone entretien du linge", "Salle banalisee"],
          sol: "Facile a entretenir. Etanche à l'eau et resistant aux produits d'entretien",
          murs: "Murs peints lessivables avec parements pouvant supporter la fixation de supports",
          electrique: "Alimentation pour reseau electrique 230V monophase",
          reseaux: "Telephone : liaison interne avec les autres ateliers et l'accueil",
          fluides: "Eau froide et chaude pour chaque point d'eau (evier et vidoirs). Siphons de sol"
        }
      },
      {
        zone: "Zone entretien du linge",
        norme: "A concevoir dans le respect des normes d'hygiène et de sécurité en vigueur",
        effectif: "12 élèves",
        details: {
          surfaces: "15 m²",
          hauteur: "2,50 a 3m",
          implantation: "Rez-de-chaussee de preference",
          proximite: ["Zone production alimentaire", "Zone entretien des locaux"],
          sol: "Facile a entretenir. Etanche à l'eau et resistant aux produits d'entretien",
          electrique: "Alimentation pour reseau electrique 230V monophase. Alimentation spécifique matériel lavage et sechage",
          reseaux: "Telephone : liaison interne avec les autres ateliers et l'accueil",
          fluides: "Eau froide et chaude pour chaque point d'eau (evier, lave-mains)",
          ventilation: "Extraction des buees de sechage"
        }
      },
      {
        zone: "Salle banalisee",
        norme: "A concevoir dans le respect des normes d'hygiène et de sécurité en vigueur",
        effectif: "12 élèves",
        details: {
          surfaces: "40 m²",
          hauteur: "2,50 a 3m",
          implantation: "Rez-de-chaussee de preference",
          proximite: ["Zone de distribution et consommation", "Zone entretien des locaux"],
          sol: "Facile a entretenir",
          electrique: "Alimentation pour reseau electrique 230V monophase. Prises pour 5 postes informatiques (1 professeur + 4 élèves). Alimentation video projecteur",
          reseaux: "Telephone : liaison interne avec les deux autres ateliers. Reseau informatique",
          fluides: "Eau froide et chaude sur la paillasse"
        }
      }
    ],

    // --- 3. Recapitulatif des surfaces ---
    recapitulatifSurfaces: {
      productionEtServices: {
        titre: "Unite fonctionnelle 'Production et services'",
        surfaceTotale: "288 a 308 m²",
        zones: [
          { zone: "Zone de stockage et réception des produits alimentaires et non alimentaires", surface: "20 m²" },
          { zone: "Zone de deconditionnement", surface: "6 m²" },
          { zone: "Legumerie", surface: "12 m²" },
          { zone: "Zone de préparations froides et cuisson", surface: "60 a 70 m²" },
          { zone: "Plonge batterie", surface: "5 m²" },
          { zone: "Zone de conditionnement", surface: "15 m²" },
          { zone: "Zone de distribution et consommation (restaurations rapide, collective, cafétéria)", surface: "70 a 80 m²" },
          { zone: "Plonge vaisselle", surface: "10 m²" },
          { zone: "Zone de stockage du matériel d'entretien de la cuisine", surface: "6 m²" },
          { zone: "Local a déchets", surface: "6 m²" },
          { zone: "Salle banalisee (équipee de 5 postes informatiques + 1 imprimante)", surface: "40 m²" },
          { zone: "Vestiaire filles + vestiaires garcons + sanitaires et douches", surface: "30 m²" },
          { zone: "Vestiaire professeur + sanitaires", surface: "8 m²" }
        ]
      },
      entretien: {
        titre: "Unite fonctionnelle 'Entretien'",
        surfaceTotale: "55 m²",
        zones: [
          { zone: "Zone d'entretien des locaux (stockage du matériel et des produits)", surface: "40 m²" },
          { zone: "Zone d'entretien des materiaux souples utilisés en atelier", surface: "15 m²" }
        ]
      }
    },

    // --- 4. Equipement des zones ---
    equipementZones: {
      note: "La liste des matériels proposée ci-apres est indicative, elle est dressee pour un groupe de 12 élèves. Selon la configuration des locaux, les zones sont équipees de postes de lavage des mains, de centrale(s) murale(s) de lavage et de désinfection et des équipements de sécurité en nombre suffisant.",
      revtementsSols: "Les revêtements des sols seront variés sur l'ensemble du plateau technique afin que les élèves puissent mettre en œuvre des techniques d'entretien sur des supports de différentes natures.",
      materiels: [
        {
          zone: "Local a déchets",
          items: [
            { designation: "Chariot de transport des poubelles (si nécessaire)", quantite: "1" },
            { designation: "Container de tri (déchets recyclables, non recyclables...)", quantite: "Selon le tri de la zone geographique" }
          ]
        },
        {
          zone: "Zone de réception / stockage",
          items: [
            { designation: "Armoire ou chambre froide (froid positif) : Viande, produits de la mer / Oeufs, produits laitiers / Fruits et légumes", quantite: "3" },
            { designation: "Armoire ou chambre froide (froid negatif)", quantite: "1" },
            { designation: "Armoire de rangement ou rayonnage (consommables)", quantite: "A adapter au local" },
            { designation: "Balance (3 et 10 kg)", quantite: "3" },
            { designation: "Chariot de manutention", quantite: "1" },
            { designation: "Chariot en acier inoxydable", quantite: "1" },
            { designation: "Couteau de sécurité ou cutter de sécurité", quantite: "1" },
            { designation: "Paire de gants de sécurité", quantite: "2" },
            { designation: "Plan de travail en acier inoxydable", quantite: "1" },
            { designation: "Thermosonde", quantite: "1" }
          ]
        },
        {
          zone: "Zone de deconditionnement",
          items: [
            { designation: "Douchette de decontamination", quantite: "1" },
            { designation: "Ouvre-boite professionnel", quantite: "1" },
            { designation: "Paire de ciseaux", quantite: "1" },
            { designation: "Plan de travail en acier inoxydable sur pietement ou roulettes", quantite: "2" }
          ]
        },
        {
          zone: "Zone de legumerie",
          items: [
            { designation: "Balance electronique 2 g a 5 kg", quantite: "1" },
            { designation: "Centrale de decontamination des végétaux", quantite: "1" },
            { designation: "Chariot en acier inoxydable", quantite: "1" },
            { designation: "Derouleur de film alimentaire", quantite: "1" },
            { designation: "Eplucheuse a pommes de terre 5/6 kg", quantite: "1" },
            { designation: "Essoreuse electrique 20 L", quantite: "1" },
            { designation: "Essoreuse manuelle", quantite: "1" },
            { designation: "Plan de travail en acier inoxydable sur roulettes", quantite: "2" },
            { designation: "Plonge a légumes 2 ou 3 bacs avec egouttoir", quantite: "1" },
            { designation: "Presse agrumes", quantite: "1" },
            { designation: "Support sac poubelle mobile 100 L (pedale, couvercle)", quantite: "1" }
          ]
        },
        {
          zone: "Zone de préparations froides",
          items: [
            { designation: "Armoire frigorifique (froid positif) 300 L", quantite: "1" },
            { designation: "Batteur melangeur 4 L avec accessoires", quantite: "2" },
            { designation: "Bac evier avec egouttoir", quantite: "1" },
            { designation: "Balance electronique 2 g / 5 kg", quantite: "2" },
            { designation: "Blender", quantite: "1" },
            { designation: "Cellule a refroidissement rapide 6 kg/h", quantite: "1" },
            { designation: "Chariot en acier inoxydable", quantite: "1" },
            { designation: "Coupe-légumes + disques amovibles", quantite: "1" },
            { designation: "Cutter robot", quantite: "1" },
            { designation: "Derouleur de film alimentaire", quantite: "1" },
            { designation: "Echelle mobile norme GN, équipee", quantite: "2" },
            { designation: "Mandoline", quantite: "1" },
            { designation: "Placard mural suspendu en acier inoxydable", quantite: "4" },
            { designation: "Plan de travail en acier inoxydable avec point d'eau", quantite: "2" },
            { designation: "Sterilisateur a couteaux", quantite: "1" },
            { designation: "Table de travail acier inoxydable avec rangement sur pietement ou roulettes", quantite: "4" },
            { designation: "Trancheuse", quantite: "1" }
          ]
        },
        {
          zone: "Zone de cuisson",
          items: [
            { designation: "Balance electronique 2 g a 5 kg", quantite: "2" },
            { designation: "Chariot chauffant ou armoire de maintien en température", quantite: "1" },
            { designation: "Cuiseur a pâtes et riz electrique (8 L) (ou espace distribution rapide)", quantite: "1" },
            { designation: "Four a air pulse 6 niveaux + accessoires (rangements, grilles, plaques gastronormes, etc.)", quantite: "1" },
            { designation: "Four mixte (chaleur sèche + vapeur) 6 niveaux + accessoires", quantite: "1" },
            { designation: "Friteuse (ou sur la zone de distribution restauration rapide)", quantite: "1" },
            { designation: "Grill (ou en zone de distribution)", quantite: "1" },
            { designation: "Hotte avec extraction", quantite: "1" },
            { designation: "Marmite a soupe", quantite: "1" },
            { designation: "Mixeur plongeant", quantite: "1" },
            { designation: "Placard mural suspendu en acier inoxydable", quantite: "2" },
            { designation: "Plan de cuisson 2 feux gaz", quantite: "4" },
            { designation: "Plan de cuisson 2 plaques a induction", quantite: "2" },
            { designation: "Plan de travail avec point d'eau", quantite: "2" },
            { designation: "Plan de travail en acier inoxydable fixes ou sur roulettes", quantite: "6" },
            { designation: "Salamandre", quantite: "1" },
            { designation: "Sauteuse basculante", quantite: "1" }
          ]
        },
        {
          zone: "Zone de conditionnement",
          note: "La zone de conditionnement est utilisée aussi bien dans le cadre de la restauration collective que dans le cadre de la restauration rapide (préparation de la vente a emporter).",
          items: [
            { designation: "Armoire frigorifique (froid positif) 300 L", quantite: "1" },
            { designation: "Balance electronique 2 g a 3 kg", quantite: "2" },
            { designation: "Cellule a refroidissement rapide 8 kg/h", quantite: "1", note: "La cellule a refroidissement rapide fait partie des équipements pour le bon fonctionnement de la cuisine pédagogique, meme si son utilisation ne fait pas partie des compétences exigées pour ce CAP." },
            { designation: "Chariot en acier inoxydable", quantite: "1" },
            { designation: "Echelle mobile norme GN, équipee", quantite: "1" },
            { designation: "Etiqueteuse", quantite: "1" },
            { designation: "Machine sous-vide (petite capacité)", quantite: "1" },
            { designation: "Placard mural suspendu en acier inoxydable", quantite: "2" },
            { designation: "Table de travail acier inoxydable sur pietement (avec tiroirs) ou sur roulettes", quantite: "2" },
            { designation: "Thermoscelleuse", quantite: "1" }
          ]
        },
        {
          zone: "Zone de distribution",
          sousZones: [
            {
              nom: "Espace restauration collective ou cafétéria",
              items: [
                { designation: "Armoire ou meuble réfrigéré", quantite: "1" },
                { designation: "Caisse enregistreuse (a partager avec l'espace restauration rapide)", quantite: "1" },
                { designation: "Chauffe-assiettes 40 assiettes", quantite: "1" },
                { designation: "Chariot porte-assiettes (transport)", quantite: "1" },
                { designation: "Chariot ou meuble bain marie (equivalent 3 cuves)", quantite: "1" },
                { designation: "Distributeur serviettes jetables", quantite: "1" },
                { designation: "Etuve ou compartiment chaud", quantite: "1" },
                { designation: "Grill (ou en zone de préparation chaude)", quantite: "1" },
                { designation: "Plan de travail en acier inoxydable sur pietement ou roulettes", quantite: "1" },
                { designation: "Presentoir pour pain / couverts / verres", quantite: "1" },
                { designation: "Tableau de présentation (menus, prix...)", quantite: "A adapter aux besoins" },
                { designation: "Vitrine refrigérée", quantite: "1" }
              ]
            },
            {
              nom: "Espace restauration rapide",
              items: [
                { designation: "Appareil a hot-dog", quantite: "1" },
                { designation: "Armoire refrigérée a boissons", quantite: "1" },
                { designation: "Pack caisse enregistreuse tactile et logiciel (a partager avec l'espace restauration collective)", quantite: "1" },
                { designation: "Conservateur vitre a glaces", quantite: "1" },
                { designation: "Etagéré ou armoire de rangement", quantite: "1" },
                { designation: "Four a micro-ondes", quantite: "1" },
                { designation: "Gaufrier", quantite: "1" },
                { designation: "Grill panini", quantite: "1" },
                { designation: "Machine a cafe expresso et chocolat", quantite: "1" },
                { designation: "Marmite a soupe", quantite: "1" },
                { designation: "Mini-four", quantite: "1" },
                { designation: "Outil numérique d'enregistrement des commandes ou logiciel spécifique", quantite: "1" },
                { designation: "Plaque a crepes", quantite: "1" },
                { designation: "Support de communication", quantite: "A adapter aux besoins" },
                { designation: "Vitrine ou comptoir refrigérée", quantite: "1" }
              ]
            }
          ]
        },
        {
          zone: "Zone de consommation",
          note: "Capacité d'accueil environ 30 personnes",
          sousZones: [
            {
              nom: "Espace restauration collective ou cafétéria",
              items: [
                { designation: "Cafetiere/thermos electrique de collectivité", quantite: "1" },
                { designation: "Chaise", quantite: "Selon configuration" },
                { designation: "Echelle de debarrassage des plateaux", quantite: "1" },
                { designation: "Fontaine a eau", quantite: "1" },
                { designation: "Four a micro-ondes", quantite: "1" },
                { designation: "Panneau d'affichage", quantite: "" },
                { designation: "Table", quantite: "Selon configuration" }
              ]
            },
            {
              nom: "Espace restauration rapide",
              items: [
                { designation: "Chaises", quantite: "Selon configuration" },
                { designation: "Claustra mobile", quantite: "Selon configuration" },
                { designation: "Echelle de debarrassage des plateaux ou poubelle snacking", quantite: "1" },
                { designation: "Four a micro-ondes", quantite: "1" },
                { designation: "Mange-debout et tabourets", quantite: "Selon configuration" },
                { designation: "Panneau d'affichage", quantite: "" },
                { designation: "Poubelle snacking", quantite: "2" },
                { designation: "Support visuel de communication", quantite: "Selon configuration" },
                { designation: "Table de 2, 4 ou 6 personnes", quantite: "Selon configuration" }
              ]
            }
          ]
        },
        {
          zone: "Zone plonge",
          sousZones: [
            {
              nom: "Espace entretien de la vaisselle",
              items: [
                { designation: "Casier de lavage pour assiettes", quantite: "2" },
                { designation: "Casier de lavage pour couverts vrac", quantite: "1" },
                { designation: "Casier de lavage pour plateaux", quantite: "1" },
                { designation: "Casier de lavage pour verres", quantite: "1" },
                { designation: "Chariot a casier de lavage", quantite: "1" },
                { designation: "Demi casier a couverts 8 cases", quantite: "1" },
                { designation: "Lave-vaisselle a capot", quantite: "1" },
                { designation: "Lave-verres", quantite: "1" },
                { designation: "Plonge laverie 1 bac avec douchette, 2 egouttoirs", quantite: "1" },
                { designation: "Plan de travail en acier inoxydable", quantite: "1" },
                { designation: "Plan de travail en acier inoxydable avec trou vide ordures", quantite: "1" }
              ]
            },
            {
              nom: "Espace entretien de la batterie de cuisine",
              items: [
                { designation: "Chariot en acier inoxydable", quantite: "1" },
                { designation: "Echelle de stockage de la batterie", quantite: "1" },
                { designation: "Plonge inox 2 bacs avec egouttoirs", quantite: "1" }
              ]
            },
            {
              nom: "Espace de stockage matériel entretien de la cuisine",
              items: [
                { designation: "Etagéré de rangement matériel d'entretien", quantite: "1" },
                { designation: "Petit matériel pour le bionettoyage des surfaces et plans de travail (lavettes, raclettes, seaux)", quantite: "Selon besoin" },
                { designation: "Support a balais lave-pont et raclettes", quantite: "1" }
              ]
            }
          ]
        },
        {
          zone: "Zone de stockage du matériel d'entretien et de remise en état des locaux",
          items: [
            { designation: "Aspirateur a eau avec accessoires", quantite: "2" },
            { designation: "Aspirateur a poussieres avec accessoires", quantite: "2" },
            { designation: "Armoire de stockage des produits", quantite: "1" },
            { designation: "Bac de rangement du matériel sur roulettes", quantite: "Selon besoin" },
            { designation: "Balai brosse agroalimentaire", quantite: "6" },
            { designation: "Balai rasant (+franges coton/microfibres)", quantite: "6" },
            { designation: "Balai trapeze", quantite: "6" },
            { designation: "Chariot de lavage (2 seaux + presse)", quantite: "2" },
            { designation: "Chariot multiservice complet avec seaux et presse", quantite: "6" },
            { designation: "Doseur", quantite: "6" },
            { designation: "Etagéré de rangement", quantite: "Selon besoin" },
            { designation: "Lavette (différentes couleurs)", quantite: "En nombre suffisant" },
            { designation: "Monobrosse vitesse standard", quantite: "3" },
            { designation: "Brosse de nylon pour lavage", quantite: "3" },
            { designation: "Disque abrasif adapté au sol a entretenir", quantite: "6" },
            { designation: "Plateau d'entrainement", quantite: "3" },
            { designation: "Reservoir a eau / a produit de lavage", quantite: "3" },
            { designation: "Mouilleur a vitres complet (support+cmanchon)", quantite: "6" },
            { designation: "Nettoyeur vapeur", quantite: "2" },
            { designation: "Perche telescopique pour raclettes a vitres", quantite: "3" },
            { designation: "Pelle et balayette", quantite: "6" },
            { designation: "Plan de travail avec 2 eviers bacs profonds", quantite: "1" },
            { designation: "Prolongateur sur enrouleur (10m)", quantite: "1" },
            { designation: "Pulverisateur", quantite: "6" },
            { designation: "Raclette 20 cm pour plan de travail", quantite: "12" },
            { designation: "Raclette a sol 40 cm", quantite: "6" },
            { designation: "Raclette a vitres 30 cm", quantite: "6" },
            { designation: "Seau rectangulaire gradue (pour entretien vitres)", quantite: "3" },
            { designation: "Seau rectangulaire 5 l gradue (au moins 2 couleurs différentes)", quantite: "16" },
            { designation: "Support balais", quantite: "Selon besoin" },
            { designation: "Support disques", quantite: "Selon besoin" },
            { designation: "Support tuyaux flexible aspirateur", quantite: "Selon besoin" },
            { designation: "Vidoir ergonomique", quantite: "2" }
          ]
        },
        {
          zone: "Zone d'entretien du linge",
          items: [
            { designation: "Armoire ou placard de rangement du linge propre", quantite: "1" },
            { designation: "Bac a linge sale", quantite: "2" },
            { designation: "Chariot de tri du linge sale", quantite: "1" },
            { designation: "Lave-linge (linge de production/service - linge d'entretien des locaux)", quantite: "2" },
            { designation: "Panier linge propre", quantite: "4" },
            { designation: "Seche-linge rotatif", quantite: "1" },
            { designation: "Sechoir", quantite: "1" },
            { designation: "Table de tri du linge (paillasse ou acier inox)", quantite: "1" }
          ]
        },
        {
          zone: "Salle banalisee",
          items: [
            { designation: "Armoire ou placard de rangement", quantite: "1" },
            { designation: "Chaise", quantite: "12" },
            { designation: "Chaise professeur", quantite: "1" },
            { designation: "Bureau professeur avec poste informatique", quantite: "1" },
            { designation: "Paillasse professeur avec evier", quantite: "1" },
            { designation: "Postes informatiques avec mobilier adapté (pour les élèves)", quantite: "4" },
            { designation: "Tables", quantite: "12 places" },
            { designation: "Tableau blanc 3 volets", quantite: "1" },
            { designation: "Tableau numérique", quantite: "1" },
            { designation: "Videoprojecteur (en plafonnier)", quantite: "1" }
          ]
        }
      ],

      // --- 4.2 Petit materiel ---
      petitMateriel: {
        note: "Équipement des zones en petits matériels pour un groupe de 12 élèves",
        categories: [
          {
            categorie: "Matériel de cuisson",
            items: [
              { nom: "Bac gastronorme inox avec couvercle 1/1 (53,5x32,5) Prof:45", production: 4 },
              { nom: "Bac gastronorme inox avec couvercle 1/1 (53,5x32,5) Prof:100", production: 4 },
              { nom: "Bac gastronorme inox avec couvercle 1/2 (26,5x32,5) Prof:45", production: 4 },
              { nom: "Bac gastronorme inox avec couvercle 1/2 (26,5x32,5) Prof:100", production: 4 },
              { nom: "Bac gastronorme inox avec couvercle 1/4 (26,5x18,2) Prof:100", production: 8 },
              { nom: "Bac GN perfore inox 1/1", production: 4 },
              { nom: "Casserole ou russe diam 30", production: 6 },
              { nom: "Casserole ou russe diam 20", production: 6 },
              { nom: "Casserole ou russe diam 15", production: 6 },
              { nom: "Poele a crepes diam 24", production: 6 },
              { nom: "Rondeau avec couvercle diam 32", production: 6 },
              { nom: "Poele diam 25", production: 6 },
              { nom: "Sauteuse diam 30", production: 6 }
            ]
          },
          {
            categorie: "Coutellerie",
            items: [
              { nom: "Canneleur", production: 4 },
              { nom: "Ciseaux", production: 3, distribution: 1 },
              { nom: "Coupe-oeufs en quartiers", production: 2 },
              { nom: "Coupe-oeufs en rondelles", production: 2 },
              { nom: "Coupe pizza", distribution: 2 },
              { nom: "Couteau a pain", distribution: 2 },
              { nom: "Couteau a pain sur socle", distribution: 1 },
              { nom: "Couteau a tomate", production: 4, distribution: 2 },
              { nom: "Couteau d'office", production: 12, distribution: 2 },
              { nom: "Couteau econome", production: 12 },
              { nom: "Couteau eminceur", production: 12 },
              { nom: "Fusil", production: 1 },
              { nom: "Vide-pomme", production: 4 },
              { nom: "Zesteur", production: 2 }
            ]
          },
          {
            categorie: "Couverts (pour la zone de distribution/consommation)",
            items: [
              { nom: "Assiette a dessert", distribution: 40 },
              { nom: "Assiettes creuses", distribution: 40 },
              { nom: "Assiettes plates", distribution: 40 },
              { nom: "Bol", distribution: 40 },
              { nom: "Coupelle", distribution: 40 },
              { nom: "Couteau", distribution: 40 },
              { nom: "Couvre assiette", distribution: 20 },
              { nom: "Cuillere a cafe", distribution: 40 },
              { nom: "Cuillere a entremets", distribution: 40 },
              { nom: "Cuillere a soupe", distribution: 40 },
              { nom: "Fourchette", distribution: 40 },
              { nom: "Ménage (sel/poivre)", distribution: 8 },
              { nom: "Pichet a eau", distribution: 8 },
              { nom: "Plateau (adapté au lave-vaisselle)", distribution: 30 },
              { nom: "Ramequin diam 8", production: "diam 8", distribution: 30 },
              { nom: "Range-couverts 4 compartiments", distribution: 2 },
              { nom: "Ravier", distribution: 30 },
              { nom: "Saladier individuel", distribution: 30 },
              { nom: "Tasse a cafe + sous tasse", distribution: 30 },
              { nom: "Tasse a the + sous tasse", distribution: 20 },
              { nom: "Verre", distribution: 40 }
            ]
          },
          {
            categorie: "Divers (petit matériel de production et distribution)",
            items: [
              { nom: "Araignee 18 cm", production: 2 },
              { nom: "Bac GN polycarbonate avec couvercle 1/4 prof 200", production: 8 },
              { nom: "Bac GN polycarbonate avec couvercle 1/2 prof 100", production: 2 },
              { nom: "Bac GN polycarbonate avec couvercle 1/1 prof 100", production: 3 },
              { nom: "Bac GN polycarbonate avec couvercle 1/1 prof 200", production: 2 },
              { nom: "Calotte inox diam 15", production: 6 },
              { nom: "Calotte inox diam 20", production: 6 },
              { nom: "Calotte inox diam 30", production: 12 },
              { nom: "Calotte inox diam 40", production: 6 },
              { nom: "Chinois inox 22 cm", production: 2 },
              { nom: "Corne a ramasser", production: 12 },
              { nom: "Couvert de service", distribution: 12 },
              { nom: "Cuillere a glace", distribution: 2 },
              { nom: "Douille polycarbonate (lot de différentes tailles)", production: 4 },
              { nom: "Ecumoire 12 cm", production: 6 },
              { nom: "Emporte-pieces rond (lot de différentes tailles)", production: 2 },
              { nom: "Entonnoir", production: 1 },
              { nom: "Fouet inox 30 cm", production: 12 },
              { nom: "Louche 4 cm", distribution: 4 },
              { nom: "Louche 8 cm", production: 3, distribution: 2 },
              { nom: "Louche 16 cm", production: 6 },
              { nom: "Manique silicone ou pince speciale gastronorme", production: "6 paires" },
              { nom: "Maryse", production: 6 },
              { nom: "Moule a cake 27 cm", production: 6 },
              { nom: "Moule a manque diam 26", production: 6 },
              { nom: "Moule a tarte diam 28", production: 4 },
              { nom: "Moule a tartelettes diam 8", production: 34 },
              { nom: "Moulin a légumes", production: 2 },
              { nom: "Passoire sur pieds diam 30", production: 4 },
              { nom: "Pince de service", distribution: 4 },
              { nom: "Pince a spaghettis", distribution: 2 },
              { nom: "Pinceau", production: 6 },
              { nom: "Planche a découper coloree (differenciation viande, légumes, poissons)", production: 12, distribution: 3 },
              { nom: "Plaque a patisserie", production: 6 },
              { nom: "Plaque a debarrasser 31x22", production: 18 },
              { nom: "Plaque silicone pour patisseries individuelles (muffins, madeleines...)", production: 6 },
              { nom: "Presse-fruits", production: 2 },
              { nom: "Ramequin diam 8", production: 24 },
              { nom: "Rouleau a patisserie", production: 2 },
              { nom: "Saupoudreuse (mailles fines)", production: 1, distribution: 2 },
              { nom: "Spatule plate coudee", distribution: 3 },
              { nom: "Spatule plate", production: 6 },
              { nom: "Spatule polycarbonate blanche", production: 6 },
              { nom: "Spatule/pelle ajouree", production: 6, distribution: 3 },
              { nom: "Thermometre laser ou thermosonde", production: 1, distribution: 1 },
              { nom: "Tire-bouchon", production: 1, distribution: 1 },
              { nom: "Verre mesureur 1L, gradue", production: 6 }
            ]
          }
        ]
      },

      // --- 4.3 Consommables ---
      consommables: [
        "Barquettes a couvercles de différentes contenances",
        "Barquettes a opercule de différentes contenances",
        "Charlottes-calots",
        "Contenants de différentes formes (pots, saladiers, coupes dessert...)",
        "Emballages pour vente a emporter (sacs a sandwich, gobelets...)",
        "Étiquettes",
        "Film alimentaire",
        "Gants a usage unique",
        "Lingettes desinfectantes",
        "Masques a usage unique",
        "Matériel pour plat temoin",
        "Papier cuisson, papier aluminium",
        "Poches a douille a usage unique",
        "Serviettes a usage unique",
        "Supports carton (carres ou parts de tarte)",
        "Tests pour bains de friture"
      ],

      // Note sur espaces distribution/consommation
      noteDistribution: "En fonction des surfaces disponibles et/ou des locaux existants, les zones de distribution et de consommation pourront être organisées soit avec des espaces bien separes 'restauration collective ou de type cafétéria' et 'restauration rapide', soit avec des espaces partages qui prendront une configuration différente selon que l'on fonctionne l'un ou l'autre secteur (reorganisation du mobilier, mise en place de claustras, d'affichages...)."
    }
  }
};

// Export pour utilisation dans les autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DATA;
}

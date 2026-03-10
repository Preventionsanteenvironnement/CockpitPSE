/*
 * Banque centralisee des commentaires, appreciations et observations PSE.
 * Ce fichier regroupe les textes reutilisables trouves dans le cockpit.
 *
 * Sources:
 * - data_modules.js
 * - data_commentaires_competences.js
 * - data_commentaires_auto.js
 * - data_appreciation.js
 * - session-suivi.html
 * - suivi-complet.html
 * - CCF4_Evaluation_Oral-10 copie.html
 */

const BANQUES_COMMENTAIRES_REFERENCE = {
  meta: {
    version: "2026-03-09",
    sources: [
      "data_modules.js",
      "data_commentaires_competences.js",
      "data_commentaires_auto.js",
      "data_appreciation.js",
      "session-suivi.html",
      "suivi-complet.html",
      "CCF4_Evaluation_Oral-10 copie.html"
    ]
  },

  suivi: {
    banqueCommentaires: {
      positif: [
        "Bons efforts !",
        "Continue comme ca !",
        "Tres bonne participation",
        "Belle progression",
        "Travail serieux",
        "Attentif et implique",
        "Bravo pour ton investissement",
        "Excellent travail aujourd'hui"
      ],
      encouragement: [
        "Tu peux mieux faire",
        "Concentre-toi davantage",
        "Pense a ton materiel",
        "Participe plus a l'oral",
        "Fais des efforts",
        "Je compte sur toi",
        "Reste concentre jusqu'a la fin",
        "N'hesite pas a poser des questions"
      ],
      alerte: [
        "Travail insuffisant",
        "Manque d'attention",
        "Trop de bavardages",
        "Materiel incomplet",
        "Exercices non faits",
        "Comportement a revoir",
        "Manque de serieux",
        "Il faut te ressaisir"
      ]
    },

    sessionSuivi: {
      positif: [
        "Excellent travail",
        "Bonne participation",
        "Travail serieux"
      ],
      encouragement: [
        "A poursuivre",
        "Peut mieux faire",
        "Efforts a maintenir"
      ],
      alerte: [
        "Manque de travail",
        "Bavardages excessifs",
        "Materiel incomplet"
      ]
    },

    suiviComplet: {
      positif: [
        "Excellent travail",
        "Bonne participation",
        "Serieux"
      ],
      encouragement: [
        "Efforts a poursuivre",
        "Peut mieux faire"
      ],
      alerte: [
        "Manque de travail",
        "Bavardages"
      ]
    }
  },

  evaluationCompetences: {
    commentairesParCompetence: {
      C1: {
        General: {
          NT: [
            "Aucune information attendue identifiee.",
            "Information relevee fausse ou erronee."
          ],
          I: [
            "Information attendue partiellement identifiee."
          ],
          A: [
            "Information attendue clairement identifiee."
          ],
          M: [
            "Information attendue clairement identifiee et reformulee/synthetisee."
          ]
        }
      },
      C2: {
        General: {
          NT: [
            "Probleme non identifie.",
            "Aucune composante / une composante de la situation identifiee."
          ],
          I: [
            "Probleme identifie partiellement / mal formule.",
            "Quelques composantes de la situation identifiees."
          ],
          A: [
            "Probleme clairement identifie et mal formule.",
            "La majorite des composantes de la situation identifiee (et mise en relation suivant l'outil utilise)."
          ],
          M: [
            "Probleme identifie precisement et correctement formule.",
            "Toutes les composantes de la situation identifiees (et mises en relation suivant l'outil utilise)."
          ]
        },
        DiagrammeCausesEffets: {
          NT: ["Une cause ou une consequence placee."],
          I: ["Une cause et une consequence placee."],
          A: ["Plusieurs causes et au moins une consequence placee."],
          M: ["Diagramme complet."]
        },
        ItaMaMi: {
          NT: ["Aucun element de reponse ou reponse incoherente dans chaque partie ou une seule partie completee/renseignee correctement."],
          I: ["2 parties correctement completees/renseignees."],
          A: ["3 parties correctement completees/renseignees."],
          M: ["Les 4 parties correctement completees/renseignees."]
        },
        MethodeDes5M: {
          NT: ["Aucun element de reponse ou reponse incoherente dans chaque partie ou 1 a 2 parties renseignees ou la consequence uniquement."],
          I: ["3 parties correctement renseignees et la consequence."],
          A: ["4 parties correctement renseignees et la consequence."],
          M: ["5 parties correctement renseignees et la consequence."]
        },
        MethodeQQOQCP: {
          NT: ["Aucun element de reponse ou reponse incoherente dans chaque partie ou 1 a 2 parties renseignees."],
          I: ["3 parties correctement renseignees."],
          A: ["4 parties correctement renseignees."],
          M: ["5 parties correctement renseignees."]
        },
        DemarcheApprocheRisques: {
          NT: ["Aucun element de reponse ou reponse incoherente ou 1 element de reponse."],
          I: ["2 elements de reponse avec une mise en relation ou 3 elements sans mise en relation."],
          A: ["3 elements de reponse avec une mise en relation ou 4 elements sans mise en relation."],
          M: ["Tous les elements attendus avec une mise en relation."]
        },
        DemarcheApprocheTravail: {
          NT: ["Aucun element de reponse ou reponse incoherente ou 1 a 2 elements de reponse."],
          I: ["Au moins un determinant operateur/entreprise et au moins un effet sur l'operateur/entreprise et le travail prescrit ou les taches reelles ou les activites reelles."],
          A: ["Determinants operateur/entreprise et effets sur l'operateur/entreprise et le travail prescrit et les taches reelles ou les activites reelles."],
          M: ["Tous les elements de reponse attendus et le lien de causalite."]
        }
      },
      C3: {
        General: {
          NT: ["Pas d'explication d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire."],
          I: ["Explication partielle d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire."],
          A: ["Explication d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire."],
          M: ["Explication d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire en utilisant un vocabulaire adapte, en lien avec une mesure de prevention."]
        }
      },
      C4: {
        General: {
          NT: ["Pas de solution / solution inadaptee ou sans lien avec le theme/probleme."],
          I: ["Solution en lien avec le theme mais pas adaptee a la situation probleme."],
          A: ["Solution adaptee a la situation probleme et en lien avec le theme."],
          M: ["Solution adaptee a la situation probleme, associee au niveau adequat (individuel, collectif, niveaux de prevention) en lien avec le theme."]
        }
      },
      C5: {
        General: {
          NT: [
            "Pas d'argument.",
            "Argument sans lien avec un choix."
          ],
          I: ["Argument non pertinent en lien avec un choix."],
          A: ["Argument pertinent en lien avec un choix."],
          M: ["Argument(s) introduit(s) avec des elements de preuve en lien avec un choix qui arrive en conclusion."]
        }
      },
      C6: {
        General: {
          NT: ["Absence de phrase : pas de syntaxe et vocabulaire limite/inadapte a l'ecrit et a l'oral."],
          I: ["Phrases avec une syntaxe et/ou un vocabulaire succinct."],
          A: ["Enchainement de phrases avec une syntaxe et un vocabulaire adaptes."],
          M: ["Enchainement de phrases avec des transitions, une syntaxe et un vocabulaire adaptes a la situation."]
        }
      }
    },

    commentairesAuto: {
      C1: {
        I: "Aucune information attendue identifiee. Information relevee fausse ou erronee.",
        M: "Information attendue partiellement identifiee."
      },
      C2: {
        I: "Probleme non identifie / partiellement identifie / mal formule.",
        M: "Probleme identifie precisement."
      },
      C3: {
        I: "Pas d'explication / explication partielle d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire.",
        M: "Explication d'un phenomene physiologique, d'un enjeu environnemental, d'une disposition reglementaire identifiee."
      },
      C4: {
        I: "Pas de solution / solution inadaptee ou sans lien avec le theme / probleme.",
        M: "Solution adaptee a la situation probleme."
      },
      C5: {
        I: "Pas d'argument / argument non pertinent - argument sans lien avec un choix.",
        M: "Argument(s) avec des « elements de preuve » en lien avec un choix."
      },
      C6: {
        I: "Absence de phrase : pas de syntaxe, ou vocabulaire limite ou succinct / inadapte a l'ecrit.",
        M: "Enchainement de phrases avec des transitions, une syntaxe et un vocabulaire adaptes a la situation."
      }
    },

    appreciationsGlobales: [
      "Excellent travail : copie tres soignee, reponses precises et bien justifiees.",
      "Tres bon travail : ensemble solide, bonne comprehension du cours et des documents.",
      "Bon travail : resultats satisfaisants, quelques points restent a consolider.",
      "Travail correct : l'essentiel est compris, mais il faut gagner en precision et en methode.",
      "Travail serieux : tu t'investis, continue en ameliorant la rigueur et la justification.",
      "Bonne progression : des progres visibles, il faut poursuivre les efforts pour stabiliser les acquis.",
      "Travail inegal : certaines reponses sont reussies, d'autres sont a reprendre plus serieusement.",
      "Copie soignee mais fragile : presentation correcte, mais des notions du cours sont a retravailler.",
      "Manque de rigueur : attention aux consignes et a la qualite des reponses, relis-toi.",
      "Copie incomplete : plusieurs questions non traitees, il faut terminer et revoir la methode.",
      "Travail insuffisant : plusieurs notions ne sont pas acquises, un temps de revision est necessaire.",
      "Manque d'implication : reponses trop courtes ou incompletes, il faut davantage developper.",
      "Tres bon investissement : tu as travaille avec serieux et efficacite, continue sur cette lancee.",
      "Travail solide : les reponses sont globalement justes et bien structurees.",
      "Tres bonne methode : tu appliques une demarche claire et tu sais t'appuyer sur les documents.",
      "Bonne comprehension : tu identifies l'essentiel, il faut maintenant gagner en precision.",
      "Travail applique : tu as pris le temps de repondre, attention a mieux justifier certaines idees.",
      "Copie claire : presentation lisible, effort d'organisation visible, quelques notions a revoir.",
      "Progres encourageants : tu es sur la bonne voie, continue a t'entrainer regulierement.",
      "Resultats satisfaisants : des acquis presents, il faut encore renforcer la rigueur.",
      "Ensemble correct : reponses pertinentes, mais certaines imprecisions restent a corriger.",
      "Travail trop superficiel : des reponses existent, mais elles manquent de details et d'arguments.",
      "Attention aux consignes : certaines reponses ne correspondent pas exactement a ce qui est demande.",
      "Manque de relecture : plusieurs erreurs evitables, pense a te relire avant de rendre.",
      "Effort a poursuivre : implication presente, mais il faut etre plus regulier et plus precis.",
      "Travail a consolider : l'essentiel est la, mais la methode doit etre mieux maitrisee.",
      "Resultats fragiles : tu as des idees, mais elles sont parfois mal organisees ou incompletes.",
      "Copie trop courte : tu as repondu, mais il faut davantage developper pour montrer ta comprehension.",
      "Travail a reprendre : trop d'oublis et d'approximations, une revision du cours est necessaire.",
      "Insuffisant : manque de reponses et de methode, il faut retravailler serieusement pour progresser.",
      "Tres insuffisant : copie incomplete, notions non acquises, reprise imperative avec entrainement guide."
    ],

    remediationsParCompetence: {
      C1: [
        "Relire la consigne et reperer exactement ce qui est demande",
        "Relever les informations utiles dans les documents",
        "Surligner les mots-cles et les donnees chiffrees",
        "Verifier unites, dates, pourcentages, sources",
        "Classer les infos par themes (danger, cause, consequence, prevention)",
        "Reformuler l'information avec ses propres mots",
        "Completer un tableau / schema a partir des documents",
        "Eliminer les informations hors sujet"
      ],
      C2: [
        "Faire le QQOQCCP (qui, quoi, ou, quand, comment, combien, pourquoi)",
        "Utiliser ITAMaMi (Individu, Tache, Activite, Materiel, Milieu)",
        "Realiser un PAD (processus d'apparition d'un dommage)",
        "Utiliser Ishikawa / 5M (Main-d'oeuvre, Materiel, Methode, Milieu, Matiere)",
        "Identifier danger, evenement declencheur, dommage",
        "Reperer causes et consequences (cause -> effet)",
        "Lister facteurs aggravants et facteurs protecteurs",
        "Prioriser les risques (plus grave / plus probable)"
      ],
      C3: [
        "Definir les notions avec un vocabulaire scientifique et precis",
        "Expliquer le lien cause -> consequence",
        "Citer la regle ou la consigne de securite attendue",
        "Relier la regle a un risque concret (ce que ca evite)",
        "Donner un exemple concret lie a la situation",
        "Expliquer le role de la prevention (avant / pendant / apres)",
        "Distinguer danger, risque, dommage"
      ],
      C4: [
        "Proposer au moins 2 mesures de prevention",
        "Classer les mesures (collectives avant individuelles)",
        "Adapter la solution a la situation (realiste, applicable)",
        "Preciser qui fait quoi et avec quel materiel",
        "Verifier l'efficacite attendue (ce que ca reduit)",
        "Prevoir une action de controle (verifier, entretenir, former)",
        "Utiliser la logique eviter -> reduire -> proteger"
      ],
      C5: [
        "Justifier le choix avec 2 criteres minimum (securite, cout, efficacite, faisabilite)",
        "Comparer avantages / limites de plusieurs solutions",
        "Appuyer l'argumentation sur la situation et les documents",
        "Utiliser des connecteurs logiques (car, donc, cependant, ainsi)",
        "Conclure clairement (je choisis... parce que...)",
        "Verifier la coherence entre solution proposee et risque identifie"
      ],
      C6: [
        "Repondre a toutes les questions (ne rien laisser vide)",
        "Si une question n'est pas comprise, reformuler ce qui est demande puis repondre",
        "Repondre dans l'ordre des questions",
        "Ecrire des phrases completes (sujet + verbe + complement)",
        "Aerer la reponse (lignes, tirets, mots-cles)",
        "Utiliser un vocabulaire professionnel adapte",
        "Soigner l'orthographe des mots-cles PSE",
        "Eviter les reponses trop vagues (etre precis)",
        "Se relire et corriger avant de rendre"
      ]
    }
  },

  ccf4Oral: {
    observationsParCritere: {
      critere1: {
        pp: [
          "Connaissances precises et bien mobilisees",
          "Reponse exacte et bien structuree",
          "Vocabulaire adapte a la situation",
          "Reponse complete et coherente",
          "Termes essentiels correctement employes"
        ],
        p: [
          "Connaissances globalement justes",
          "Reponse correcte dans l'ensemble",
          "Elements essentiels reperes",
          "Reponse courte mais juste",
          "Comprehension satisfaisante du theme"
        ],
        m: [
          "Reponse partielle",
          "Connaissances incompletes",
          "Vocabulaire peu precis",
          "Notions partiellement maitrisees",
          "Reponse necessitant plusieurs relances"
        ],
        mm: [
          "Connaissances insuffisamment mobilisees",
          "Reponse erronee",
          "Confusion dans les notions",
          "Vocabulaire inadapte",
          "Elements de savoir non maitrises"
        ]
      },
      critere2: {
        pp: [
          "Lien pratique-theme clairement etabli",
          "Explication precise de la pratique realisee",
          "Bonne prise en compte des regles de securite",
          "Aptitude a rendre compte avec precision",
          "Securite integree dans le raisonnement"
        ],
        p: [
          "Lien avec la pratique etabli",
          "Prise en compte correcte de la securite",
          "Explication simple mais adaptee",
          "Capacite a rendre compte de facon satisfaisante",
          "Reponse adaptee a la situation observee"
        ],
        m: [
          "Lien pratique-theme partiel",
          "Explication incomplete de la situation",
          "Prise en compte de la securite encore fragile",
          "Description partielle de la pratique",
          "Justification limitee"
        ],
        mm: [
          "Lien avec la pratique non etabli",
          "Reponse deconnectee de la situation observee",
          "Securite non prise en compte",
          "Difficulte a rendre compte de l'activite",
          "Aucune mise en relation pratique-theme"
        ]
      },
      critere3: {
        pp: [
          "Appropriation claire de la thematique",
          "Argumentation pertinente",
          "Projection convaincante dans la vie quotidienne ou professionnelle",
          "Bonne prise de conscience des enjeux",
          "Transfert pertinent vers la vie professionnelle"
        ],
        p: [
          "Appropriation satisfaisante",
          "Argumentation simple mais pertinente",
          "Lien avec la vie quotidienne identifie",
          "Comprehension correcte des enjeux",
          "Ensemble satisfaisant sur l'appropriation"
        ],
        m: [
          "Appropriation encore partielle",
          "Argumentation limitee",
          "Projection peu developpee",
          "Justification trop breve",
          "Prise de conscience en cours"
        ],
        mm: [
          "Appropriation non montree",
          "Absence d'argumentation",
          "Lien avec la vie quotidienne non etabli",
          "Reponse non exploitable",
          "Aucune appropriation reperable"
        ]
      }
    },

    observationsTransversales: {
      pp: [
        "Reponse claire",
        "Reponse coherente",
        "Bonne mobilisation des connaissances"
      ],
      p: [
        "Reponse courte mais juste",
        "Comprehension fragile",
        "Reponse incomplete"
      ],
      m: [
        "Reponse confuse",
        "Besoin de relance",
        "Vocabulaire limite"
      ],
      mm: [
        "Reponse insuffisante",
        "Non-reponse",
        "Difficulte importante d'expression"
      ]
    }
  }
};

globalThis.BANQUES_COMMENTAIRES_REFERENCE = BANQUES_COMMENTAIRES_REFERENCE;

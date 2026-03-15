/**
 * MODULE PSE — Prévention Santé Environnement
 * =============================================
 * Programme officiel PSE pour les classes de CAP
 * Source : Arrêté du 03.04.2019 - BOEN spécial n°5 du 11.04.2019
 * Ressources Éduscol - Mars 2020 / Octobre 2021
 *
 * 4 thématiques, 19 modules, ~69h sur 2 ans
 * Évaluation par CCF (2 situations)
 *
 * Chaque item intègre directement :
 *   - notions clés associées
 *   - contenus utiles pour comprendre
 */

PSR_MODULES.register({

  // === IDENTITÉ ===
  id: 'pse',
  nom: 'PSE',
  nomComplet: 'Prévention Santé Environnement',
  description: 'Enseignement obligatoire commun à toutes les spécialités de CAP - 4 thématiques, 19 modules',
  icone: '&#127973;',
  couleur: '#7c3aed',
  couleurLight: '#ede9fe',

  // === CONTENU ===
  sections: [

    // ============================================================
    // SECTION 0 — PRÉAMBULE / PHILOSOPHIE / FINALITÉS
    // ============================================================
    {
      id: 'pse-preambule',
      titre: 'La PSE : philosophie, finalités et enjeux',
      contenu: [
        {
          id: 'pse-presentation',
          titre: 'Présentation de la PSE',
          type: 'cours',
          objectifs: [
            'Comprendre ce qu\'est la PSE et sa place dans la formation CAP',
            'Identifier les finalités et enjeux de cet enseignement',
            'Distinguer la PSE d\'une simple transmission de connaissances'
          ],
          texte: '<div class="pse-intro-block">' +
            '<h4>Qu\'est-ce que la PSE ?</h4>' +
            '<p>L\'enseignement de <strong>Prévention-Santé-Environnement (PSE)</strong> est un enseignement ' +
            '<strong>obligatoire</strong> dispensé dans toutes les spécialités de certificat d\'aptitude professionnelle (CAP). ' +
            'Il est assuré par les professeurs de <strong>biotechnologies option santé-environnement</strong>.</p>' +
            '<p>La PSE n\'est <strong>pas uniquement de la transmission de connaissances</strong>. C\'est un enseignement ' +
            'qui vise à former des individus responsables, capables d\'analyser des situations, de mobiliser des connaissances ' +
            'et de proposer des solutions argumentées face à des problématiques de santé, d\'environnement et de vie professionnelle.</p>' +
            '</div>' +
            '<div class="pse-intro-block">' +
            '<h4>Les finalités de la PSE</h4>' +
            '<p>La PSE contribue à former un individu responsable dans trois dimensions :</p>' +
            '<ul>' +
            '<li><strong>Sa santé</strong> : comprendre son corps, adopter des comportements favorables, gérer son capital santé</li>' +
            '<li><strong>Son environnement</strong> : comprendre les enjeux environnementaux, agir en éco-citoyen responsable</li>' +
            '<li><strong>Son milieu professionnel</strong> : connaître ses droits et obligations, prévenir les risques, se protéger et protéger les autres</li>' +
            '</ul>' +
            '</div>' +
            '<div class="pse-intro-block">' +
            '<h4>L\'approche par compétences</h4>' +
            '<p>La PSE s\'inscrit dans une <strong>approche par compétences</strong> et non pas dans une logique de simple restitution de connaissances. ' +
            'L\'élève est amené à :</p>' +
            '<ul>' +
            '<li>Analyser des situations concrètes de la vie quotidienne et professionnelle</li>' +
            '<li>Mobiliser des connaissances scientifiques et réglementaires</li>' +
            '<li>Proposer des solutions argumentées et adaptées</li>' +
            '<li>Communiquer de manière claire et structurée</li>' +
            '<li>Agir face à une situation d\'urgence</li>' +
            '</ul>' +
            '<p>L\'enseignement part toujours de <strong>situations concrètes</strong> (situations professionnelles, faits d\'actualité, ' +
            'situations de la vie quotidienne) pour amener l\'élève à construire ses connaissances et développer ses compétences.</p>' +
            '</div>',
          sousSections: [
            {
              titre: 'Place de la PSE dans le diplôme CAP PSR',
              texte: '<p>Dans le CAP Production et service en restaurations, la PSE constitue le <strong>Bloc n\u00b03 de compétences</strong> ' +
                'et l\'<strong>Unité générale UG1</strong>. Elle représente environ <strong>69 heures</strong> sur les 2 années de formation.</p>' +
                '<p><strong>Horaires réglementaires :</strong></p>' +
                '<ul>' +
                '<li>1re année : 1h30 par semaine (dédoublement à partir du 18e élève)</li>' +
                '<li>2e année : 1h par semaine (dédoublement à partir du 18e élève)</li>' +
                '</ul>' +
                '<p>La PSE est particulièrement pertinente pour le secteur de la restauration car elle aborde directement ' +
                'des thématiques liées à l\'hygiène, la sécurité alimentaire, les risques professionnels et la santé au travail.</p>'
            }
          ]
        },
        {
          id: 'pse-competences',
          titre: 'Les 8 compétences PSE',
          type: 'cours',
          objectifs: [
            'Connaître les 8 compétences visées par l\'enseignement de PSE',
            'Comprendre ce que chaque compétence implique concrètement',
            'Situer la PSE dans une logique de formation globale de l\'individu'
          ],
          texte: '<p>L\'enseignement de PSE vise le développement de <strong>8 compétences</strong> qui structurent l\'ensemble du programme. ' +
            'Ces compétences ne sont pas enseignées isolément : elles sont mobilisées de manière croisée à travers les différents modules.</p>',
          items: [
            { id: 'pse-comp1', nom: 'Appliquer une méthode d\'analyse d\'une situation de la vie professionnelle ou quotidienne et d\'une documentation', detail: 'Analyser des situations données relatives à des problématiques de santé, d\'environnement, de la vie sociale, professionnelle ou de faits d\'actualité' },
            { id: 'pse-comp2', nom: 'Mettre en relation un phénomène physiologique, un enjeu environnemental, une disposition réglementaire, avec une mesure de prévention', detail: 'Faire le lien entre les connaissances scientifiques/réglementaires et les actions de prévention concrètes' },
            { id: 'pse-comp3', nom: 'Proposer une solution pour résoudre un problème lié à la santé, l\'environnement ou la consommation et argumenter un choix', detail: 'Être capable de justifier une décision, une action de prévention en s\'appuyant sur des connaissances solides' },
            { id: 'pse-comp4', nom: 'Communiquer à l\'écrit et à l\'oral avec une syntaxe claire et un vocabulaire technique adapté', detail: 'Utiliser le vocabulaire spécifique de la prévention, de la santé et de l\'environnement pour s\'exprimer clairement' },
            { id: 'pse-comp5', nom: 'Agir face à une situation d\'urgence', detail: 'Savoir réagir de manière adaptée face à une situation nécessitant les premiers secours (SST/PSC1)' },
            { id: 'pse-comp6', nom: 'Identifier un danger et repérer une situation dangereuse', detail: 'Observer, analyser un environnement de travail pour détecter les dangers et les situations à risque' },
            { id: 'pse-comp7', nom: 'Repérer une anomalie, un dysfonctionnement', detail: 'Détecter ce qui ne fonctionne pas normalement dans une situation professionnelle ou quotidienne' },
            { id: 'pse-comp8', nom: 'Mobiliser des connaissances scientifiques, juridiques et économiques', detail: 'S\'appuyer sur des savoirs pluridisciplinaires pour comprendre et agir dans des situations complexes' }
          ]
        },
        {
          id: 'pse-organisation',
          titre: 'Organisation du programme',
          type: 'cours',
          objectifs: [
            'Connaître les 4 thématiques et les 19 modules du programme',
            'Comprendre la logique de progression et de répartition horaire',
            'Identifier les modules prioritaires en 1re année CAP'
          ],
          texte: '<p>Le programme de PSE s\'organise autour de <strong>4 grandes thématiques</strong> qui comportent au total <strong>19 modules</strong>.</p>' +
            '<p><strong>Important :</strong> L\'ordre dans lequel chaque module apparaît dans le programme ne constitue en aucun cas une progression. ' +
            'Les modules sont à traiter dans l\'ordre souhaité par le professeur au regard des spécificités du diplôme préparé, ' +
            'de l\'actualité, des projets conduits dans l\'établissement.</p>' +
            '<div class="pse-info-box">' +
            '<h4>Modules prioritaires en 1re année CAP</h4>' +
            '<p>Des incontournables apparaissent cependant. En première année CAP, il convient d\'aborder les modules :</p>' +
            '<ul>' +
            '<li><strong>C8 : La gestion des situations d\'urgence</strong> (secourisme) du fait de l\'horaire hebdomadaire de 1h30</li>' +
            '<li><strong>C2 : Les enjeux de la santé et sécurité au travail</strong> et <strong>C3 : La démarche de prévention</strong> appliquée à une activité de travail afin de préparer les élèves au départ en PFMP</li>' +
            '</ul>' +
            '</div>',
          sousSections: [
            {
              titre: 'Les 4 thématiques',
              texte: '<table class="pse-table">' +
                '<thead><tr><th>Thématique</th><th>Intitulé</th><th>Modules</th><th>Volume horaire</th></tr></thead>' +
                '<tbody>' +
                '<tr><td><strong>A</strong></td><td>L\'individu responsable de son capital santé</td><td>A1 à A7</td><td>~20h</td></tr>' +
                '<tr><td><strong>B</strong></td><td>L\'individu responsable dans son environnement</td><td>B1 à B4</td><td>~10h</td></tr>' +
                '<tr><td><strong>C</strong></td><td>L\'individu dans son milieu professionnel, impliqué dans la prévention des risques</td><td>C1 à C8</td><td>~33h</td></tr>' +
                '<tr><td><strong>D</strong></td><td>L\'individu consommateur averti</td><td>D1 à D3</td><td>~6h</td></tr>' +
                '</tbody></table>'
            }
          ]
        },
        {
          id: 'pse-evaluation',
          titre: 'Évaluation de la PSE (CCF)',
          type: 'cours',
          objectifs: [
            'Connaître les modalités d\'évaluation de la PSE en CAP',
            'Comprendre la structure des 2 situations d\'évaluation en CCF',
            'Identifier les compétences évaluées et la répartition des points'
          ],
          texte: '<p>La PSE est évaluée par <strong>Contrôle en Cours de Formation (CCF)</strong> en 2 situations :</p>' +
            '<div class="pse-eval-grid">' +
            '<div class="pse-eval-card">' +
            '<h4>Situation d\'évaluation n\u00b01</h4>' +
            '<ul>' +
            '<li><strong>Forme :</strong> Pratique et orale</li>' +
            '<li><strong>Période :</strong> Fin de formation SST</li>' +
            '<li><strong>Thématique :</strong> C8 (gestion des situations d\'urgence)</li>' +
            '<li><strong>Points :</strong> 5 points</li>' +
            '<li><strong>Compétences :</strong> Communiquer à l\'oral sur la problématique des risques, agir face à une situation d\'urgence</li>' +
            '<li><strong>Support :</strong> Performances lors de la passation du certificat SST</li>' +
            '</ul>' +
            '</div>' +
            '<div class="pse-eval-card">' +
            '<h4>Situation d\'évaluation n\u00b02</h4>' +
            '<ul>' +
            '<li><strong>Forme :</strong> Écrite</li>' +
            '<li><strong>Durée :</strong> 50 minutes</li>' +
            '<li><strong>Période :</strong> Fin de cycle de formation</li>' +
            '<li><strong>Thématiques :</strong> 3 thématiques au moins parmi A, B, C (sauf C8) et D, dont obligatoirement A et C</li>' +
            '<li><strong>Points :</strong> 15 points répartis : Thématique A (5 à 7 pts), Thématique(s) B et/ou D (4 à 6 pts), Thématique C (4 à 6 pts)</li>' +
            '<li><strong>Support :</strong> À partir d\'une situation de la vie sociale, professionnelle ou d\'un fait d\'actualité</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '<p><strong>Total : 20 points</strong> (coefficient selon la spécialité)</p>'
        }
      ]
    },

    // ============================================================
    // SECTION A — L'individu responsable de son capital santé
    // ============================================================
    {
      id: 'pse-thematique-a',
      titre: 'A. L\'individu responsable de son capital santé',
      contenu: [

        // ---- A1 ----
        {
          id: 'pse-a1',
          titre: 'A1 - Le système de santé',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-a1-s1', nom: 'Identifier dans les plans santé les thématiques du programme de PSE',
              notions: ['Plan santé', 'Prévention'],
              contenus: ['Les thèmes abordés en PSE', 'L\'objectif général d\'un plan santé']
            },
            {
              id: 'pse-a1-s2', nom: 'Expliquer les effets des facteurs internes et externes sur la santé d\'un individu',
              notions: ['Individu', 'Santé (selon l\'OMS)', 'Capital santé', 'Facteur interne', 'Facteur externe'],
              contenus: ['Les trois composantes de la santé selon l\'OMS', 'L\'origine des facteurs influençant la santé', 'La mise en évidence des facteurs internes (hérédité, âge, sexe, pathologies, mode de vie, alimentation) et externes (environnement, conditions de travail, ressources) agissant sur la santé d\'un individu']
            },
            {
              id: 'pse-a1-s3', nom: 'Expliquer le principe de solidarité nationale et présenter l\'intérêt du parcours de soins coordonnés',
              notions: ['Solidarité', 'Assurance maladie', 'Parcours de soins coordonnés'],
              contenus: ['Les origines des ressources de la sécurité sociale', 'Les bénéficiaires des prestations des branches de la sécurité sociale', 'La prise en charge des soins médicaux hors et dans le parcours de soins coordonnés', 'Le rôle du médecin traitant', 'L\'intérêt de la carte vitale et du dossier médical partagé pour l\'individu']
            }
          ]
        },

        // ---- A2 ----
        {
          id: 'pse-a2',
          titre: 'A2 - Le sommeil, un rythme biologique',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-a2-s1', nom: 'Identifier les caractéristiques de la fonction physiologique « sommeil »',
              notions: ['Rythmes biologiques', 'Fréquence', 'Cycle'],
              contenus: ['Les caractéristiques du rythme circadien, le sommeil, en comparaison avec d\'autres rythmes', 'L\'organisation d\'une nuit de sommeil en une succession de cycles se décomposant chacun en plusieurs phases']
            },
            {
              id: 'pse-a2-s2', nom: 'Présenter les rôles du sommeil',
              notions: ['Récupération physique', 'Récupération mentale'],
              contenus: ['Les différents rôles du sommeil associés aux deux principales phases d\'un cycle de sommeil', 'Les phases du sommeil impliquées dans chaque processus de récupération']
            },
            {
              id: 'pse-a2-s3', nom: 'Identifier les effets et les conséquences professionnelles et sociales du manque de sommeil',
              notions: ['Effets / conséquences'],
              contenus: ['Les effets sur la santé d\'un manque de sommeil', 'Les conséquences professionnelles et sociales d\'un manque de sommeil']
            },
            {
              id: 'pse-a2-s4', nom: 'Proposer des mesures pour favoriser un sommeil récupérateur',
              notions: ['Prévention individuelle', 'Hygiène du sommeil'],
              contenus: ['Les éléments favorables et défavorables au sommeil', 'Les mesures individuelles pour un sommeil récupérateur']
            }
          ]
        },

        // ---- A3 ----
        {
          id: 'pse-a3',
          titre: 'A3 - L\'activité physique',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>',
          items: [
            {
              id: 'pse-a3-s1', nom: 'Expliquer la relation entre le travail musculaire et les différents systèmes du corps humain',
              notions: ['Contraction musculaire', 'Système nerveux', 'Système cardiorespiratoire'],
              contenus: ['Les organes à l\'origine de la commande nerveuse du muscle lors d\'un mouvement volontaire', 'La variation des résultats de mesures avant et après l\'activité physique au niveau du cœur (rythme cardiaque), de la respiration (rythme respiratoire), de la température']
            },
            {
              id: 'pse-a3-s2', nom: 'Identifier les éléments consommés et rejetés lors de la contraction musculaire',
              notions: ['Consommation d\'énergie', 'Production de déchets'],
              contenus: ['La composition du sang à l\'entrée et à la sortie du muscle au repos et à l\'effort, à partir de données chiffrées expérimentales', 'Les éléments consommés (O₂, glucose) et rejetés (CO₂, sueur) lors de la contraction musculaire']
            },
            {
              id: 'pse-a3-s3', nom: 'Proposer des arguments en faveur d\'une activité physique régulière',
              notions: ['Activité physique', 'Sédentarité', 'Bien-être physique', 'Bien-être social', 'Bien-être mental'],
              contenus: ['La distinction entre l\'activité physique et la sédentarité', 'Les bienfaits d\'une activité physique régulière en relation avec le bien-être physique, mental, social', 'Les risques de la sédentarité', 'La durée d\'activité physique recommandée par l\'OMS, par le PNNS']
            }
          ]
        },

        // ---- A4 ----
        {
          id: 'pse-a4',
          titre: 'A4 - Les addictions',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>',
          items: [
            {
              id: 'pse-a4-s1', nom: 'Repérer des facteurs de risques pouvant conduire à une addiction',
              notions: ['Addiction', 'Facteurs de risque addictif', 'Pratiques addictives'],
              contenus: ['La définition d\'addiction', 'Les deux types d\'addictions (addiction à un comportement et addiction à un produit)', 'Les caractéristiques d\'une pratique addictive', 'Les facteurs individuels, environnementaux et liés aux produits pouvant conduire à une addiction']
            },
            {
              id: 'pse-a4-s2', nom: 'Identifier les effets de l\'alcool, du cannabis et de la polyconsommation sur la santé',
              notions: ['Effets immédiats', 'Effets à long terme', 'Polyconsommation'],
              contenus: ['Les effets immédiats et les effets à long terme provoqués par la consommation d\'alcool, de cannabis', 'La définition de la polyconsommation', 'Les effets de la polyconsommation sur la santé']
            },
            {
              id: 'pse-a4-s3', nom: 'Identifier les conséquences des conduites addictives avec ou sans produits',
              notions: ['Conséquences personnelles', 'Conséquences professionnelles', 'Conséquences sociales'],
              contenus: ['Le danger spécifique des conduites addictives liées à un produit par rapport à celles sans produit', 'Les conséquences personnelles, professionnelles et sociales d\'une conduite addictive']
            },
            {
              id: 'pse-a4-s4', nom: 'Proposer des actions de prévention face aux conduites addictives',
              notions: ['Prévention individuelle', 'Prévention collective'],
              contenus: ['Les mesures de prévention individuelles adaptées à une situation donnée', 'Les mesures de prévention collectives : loi, campagnes de sensibilisation, plans santé...', 'L\'identification de structures d\'aide ou de soutien, de sites Internet']
            },
            {
              id: 'pse-a4-s5', nom: 'Comparer les réglementations pour les substances licites et illicites',
              notions: ['Loi', 'Produit licite', 'Produit illicite', 'Prévention', 'Répression'],
              contenus: ['La différence entre les produits licites et illicites assortie d\'exemples', 'La distinction entre « prévention » et « répression »', 'Les règles de prévention et de répression en vigueur pour : la vente et la consommation d\'alcool ; la production, la détention, la vente et la consommation de cannabis']
            }
          ]
        },

        // ---- A5 ----
        {
          id: 'pse-a5',
          titre: 'A5 - La sexualité - la contraception',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>',
          items: [
            {
              id: 'pse-a5-s1', nom: 'Décrire les étapes de la reproduction sexuée et identifier les organes sur lesquels agissent les hormones',
              notions: ['Spermatozoïde', 'Ovule', 'Fécondation', 'Nidation', 'Hormone'],
              contenus: ['L\'anatomie de l\'appareil génital féminin et masculin', 'Le rôle des principaux organes génitaux chez la femme et l\'homme', 'Les principales phases du cycle ovarien en relation avec celles du cycle utérin', 'La distinction entre sperme, spermatozoïde et liquide séminal', 'Le trajet des gamètes de leur lieu de production jusqu\'à leur émission', 'Les hormones féminines et masculines', 'Les caractéristiques d\'une hormone', 'Les organes concernés par l\'action des hormones sexuelles', 'Les étapes de la reproduction', 'L\'identification des lieux de la fécondation et de la nidation', 'La définition de fécondation, de nidation', 'La distinction entre œuf et embryon']
            },
            {
              id: 'pse-a5-s2', nom: 'Choisir une contraception préventive adaptée à partir du mode d\'action d\'un moyen de contraception',
              notions: ['Contraception préventive féminine', 'Contraception préventive masculine'],
              contenus: ['La définition de contraception préventive', 'Le mode d\'action des différentes méthodes contraceptives', 'Les limites des moyens de contraception']
            },
            {
              id: 'pse-a5-s3', nom: 'Distinguer contraception d\'urgence et interruption volontaire de grossesse',
              notions: ['Contraception d\'urgence', 'IVG'],
              contenus: ['Les notions de prise de risque et de rapport sexuel non protégé', 'La distinction entre la contraception préventive, la contraception d\'urgence et l\'IVG', 'Les démarches à effectuer et les délais à respecter concernant la contraception d\'urgence et l\'IVG']
            },
            {
              id: 'pse-a5-s4', nom: 'Identifier les missions des structures d\'accueil, d\'aide et de soutien',
              notions: ['Prévention de la grossesse'],
              contenus: ['Le repérage de différentes structures d\'accueil, d\'aide et de soutien au niveau local et leurs rôles']
            }
          ]
        },

        // ---- A6 ----
        {
          id: 'pse-a6',
          titre: 'A6 - Prévenir les infections sexuellement transmissibles',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>',
          items: [
            {
              id: 'pse-a6-s1', nom: 'Caractériser une IST et identifier les moyens de transmission',
              notions: ['Infection', 'Agents responsables (bactériens / viraux)', 'Modes de contamination', 'Symptômes', 'VIH / SIDA'],
              contenus: ['La distinction entre une infection et une maladie', 'Les deux principales catégories d\'agents responsables d\'une infection', 'Les différents modes de contamination', 'Les principales IST', 'La distinction entre le VIH et le SIDA', 'Les principaux symptômes des IST', 'La différence entre le stade de séropositivité au VIH et le stade du SIDA', 'Les principales conséquences des IST']
            },
            {
              id: 'pse-a6-s2', nom: 'Citer des moyens simples pour prévenir la transmission d\'une IST',
              notions: ['Préservatifs', 'Vaccin', 'Dépistage'],
              contenus: ['Les moyens de prévention des IST', 'Le nom des IST concernées par la vaccination', 'L\'intérêt du dépistage dans la prévention des IST']
            },
            {
              id: 'pse-a6-s3', nom: 'Repérer la conduite à tenir suite à une prise de risque ou à une contamination',
              notions: ['Prise de risque', 'Contamination', 'Traitement curatif'],
              contenus: ['La différence entre « prise de risque » et « contamination »', 'Les conduites à tenir à la suite d\'une prise de risque ou une contamination']
            },
            {
              id: 'pse-a6-s4', nom: 'Identifier les missions des structures d\'accueil et de soutien (IST)',
              notions: ['Dépistage', 'Prévention d\'une IST'],
              contenus: ['Le repérage de structures d\'accueil, d\'aide et de soutien au niveau local et leurs missions']
            }
          ]
        },

        // ---- A7 ----
        {
          id: 'pse-a7',
          titre: 'A7 - L\'alimentation adaptée à son activité',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>4h</strong></p>' +
            '<p class="pse-lien-pro"><strong>Lien fort avec le CAP PSR :</strong> Ce module est directement en lien avec le domaine professionnel de la restauration.</p>',
          items: [
            {
              id: 'pse-a7-s1', nom: 'Repérer les besoins nutritionnels en lien avec l\'état physiologique',
              notions: ['Besoins énergétiques', 'Besoins fonctionnels', 'Facteur de variation'],
              contenus: ['Les différents besoins de l\'organisme (énergétiques, fonctionnels, plastiques)', 'Les facteurs de variation des besoins nutritionnels']
            },
            {
              id: 'pse-a7-s2', nom: 'Indiquer les principes d\'une alimentation équilibrée',
              notions: ['Nutriment / aliment', 'Groupes alimentaires'],
              contenus: ['La différence entre un aliment et un nutriment', 'Les recommandations du PNNS', 'La répartition journalière des repas']
            },
            {
              id: 'pse-a7-s3', nom: 'Identifier les erreurs fréquentes et proposer des améliorations',
              notions: ['Répartition des prises alimentaires', 'Grignotage', 'Excès', 'Carences'],
              contenus: ['Le repérage des excès et des carences dans la composition ou la répartition d\'un repas']
            },
            {
              id: 'pse-a7-s4', nom: 'Expliquer les conséquences des erreurs alimentaires sur la santé et l\'activité professionnelle',
              notions: ['Conséquences', 'Activité professionnelle'],
              contenus: ['Les principales conséquences des erreurs alimentaires sur l\'organisme et sur l\'activité professionnelle']
            },
            {
              id: 'pse-a7-s5', nom: 'Effectuer un choix alimentaire raisonné en tenant compte des contraintes professionnelles',
              notions: ['Contraintes professionnelles', 'Prévention'],
              contenus: ['Les contraintes professionnelles liées au secteur d\'activité ou aux caractéristiques de l\'entreprise', 'Les choix alimentaires en fonction des contraintes professionnelles']
            }
          ]
        }
      ]
    },

    // ============================================================
    // SECTION B — L'individu responsable dans son environnement
    // ============================================================
    {
      id: 'pse-thematique-b',
      titre: 'B. L\'individu responsable dans son environnement',
      contenu: [

        // ---- B1 ----
        {
          id: 'pse-b1',
          titre: 'B1 - Les ressources en eau',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-b1-s1', nom: 'Identifier les différentes ressources d\'eau disponibles et leurs limites',
              notions: ['Eau douce / eau salée', 'Eaux de surface - eaux souterraines', 'Répartition quantitative', 'Pénurie'],
              contenus: ['L\'eau douce disponible pour la consommation', 'Les ressources en eau au niveau planétaire et local', 'La définition de pénurie d\'eau', 'Les pays ou régions en situation de pénurie']
            },
            {
              id: 'pse-b1-s2', nom: 'Repérer les éléments du cycle domestique de l\'eau',
              notions: ['Potabilisation de l\'eau', 'Eau potable', 'Eau usée', 'Épuration de l\'eau usée', 'Coût'],
              contenus: ['La définition de l\'eau potable et de l\'eau usée', 'Les principales étapes du circuit de l\'eau domestique, du captage à son retour dans le milieu naturel', 'La distinction entre les principes de potabilisation et d\'épuration', 'Les composantes du coût de l\'eau']
            },
            {
              id: 'pse-b1-s3', nom: 'Analyser la consommation directe et indirecte en eau d\'un ménage',
              notions: ['Postes de consommation', 'Empreinte eau', 'Eau virtuelle'],
              contenus: ['Les principaux postes de consommation directe en eau d\'un ménage', 'La distinction entre la consommation directe et indirecte en eau', 'La différenciation entre l\'eau virtuelle et l\'empreinte eau']
            },
            {
              id: 'pse-b1-s4', nom: 'Repérer des mesures de prévention pour préserver l\'eau',
              notions: ['Mesures individuelles', 'Mesures collectives'],
              contenus: ['La distinction entre les mesures individuelles et collectives', 'Les mesures individuelles et collectives pour préserver l\'eau']
            }
          ]
        },

        // ---- B2 ----
        {
          id: 'pse-b2',
          titre: 'B2 - Les risques majeurs',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-b2-s1', nom: 'Identifier un risque majeur',
              notions: ['Risque majeur', 'Aléa', 'Enjeu', 'Risque naturel', 'Risque technologique', 'Fréquence', 'Gravité'],
              contenus: ['Les caractéristiques d\'un risque majeur (aléa, enjeu, gravité, fréquence)', 'La distinction entre un risque naturel et un risque technologique']
            },
            {
              id: 'pse-b2-s2', nom: 'Repérer les risques majeurs au niveau local',
              notions: ['Information', 'Territoire communal'],
              contenus: ['Les risques majeurs au niveau local énumérés dans le DICRIM (document d\'information communal sur les risques majeurs) ou le DDRM (dossier départemental sur les risques majeurs)']
            },
            {
              id: 'pse-b2-s3', nom: 'Repérer la conduite à tenir en cas d\'alerte à la population',
              notions: ['Signal d\'alerte aux populations', 'Protection', 'Sécurité'],
              contenus: ['L\'identification du signal national d\'alerte', 'Les conduites à tenir face aux principaux risques majeurs', 'La conduite à tenir en termes de protection et de sécurité dans son établissement de formation en cas de signal d\'alerte']
            }
          ]
        },

        // ---- B3 ----
        {
          id: 'pse-b3',
          titre: 'B3 - Les ressources en énergie',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>',
          items: [
            {
              id: 'pse-b3-s1', nom: 'Caractériser les énergies renouvelables et non renouvelables',
              notions: ['Épuisable', 'Renouvelable', 'Polluante'],
              contenus: ['Les différentes énergies « renouvelables » et « non renouvelables »', 'Les caractéristiques des énergies polluantes']
            },
            {
              id: 'pse-b3-s2', nom: 'Identifier l\'impact environnemental et sanitaire des modes de consommation énergétique',
              notions: ['Dérèglements climatiques', 'Effet de serre', 'Empreinte carbone', 'Épuisement des réserves', 'Pollutions', 'Maladies respiratoires'],
              contenus: ['Les principaux modes de consommation d\'énergie', 'L\'empreinte carbone des différents modes de consommation énergétique', 'Les conséquences sur l\'environnement et sur la santé des modes de consommation énergétique', 'Le phénomène d\'effet de serre']
            },
            {
              id: 'pse-b3-s3', nom: 'Proposer des mesures individuelles et collectives pour maîtriser la consommation en énergie',
              notions: ['Mesures individuelles', 'Mesures collectives'],
              contenus: ['Les mesures éco-citoyennes d\'économie d\'énergie', 'Les mesures collectives mises en place']
            }
          ]
        },

        // ---- B4 ----
        {
          id: 'pse-b4',
          titre: 'B4 - Le bruit au quotidien',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>' +
            '<p class="pse-lien-pro"><strong>Lien avec le milieu professionnel :</strong> Le bruit est un risque professionnel fréquent en restauration collective (cuisine, salle).</p>',
          items: [
            {
              id: 'pse-b4-s1', nom: 'Caractériser le bruit et ses grandeurs physiques',
              notions: ['Son / bruit', 'Onde sonore', 'Intensité (dB(A))', 'Fréquence', 'Seuil d\'audibilité'],
              contenus: ['La distinction entre le son et le bruit', 'La distinction entre l\'intensité et la fréquence d\'une onde sonore', 'Le seuil d\'audibilité']
            },
            {
              id: 'pse-b4-s2', nom: 'Repérer les seuils de risque en fonction de la durée d\'exposition',
              notions: ['Durée d\'exposition', 'Niveau sonore (seuil de risque)'],
              contenus: ['Les seuils de risque en fonction de la durée d\'exposition']
            },
            {
              id: 'pse-b4-s3', nom: 'Décrire le trajet du son dans l\'appareil auditif',
              notions: ['Appareil auditif', 'Oreille interne', 'Onde sonore', 'Influx nerveux'],
              contenus: ['L\'identification des trois parties de l\'oreille (externe, moyenne, interne)', 'Le trajet du son dans l\'appareil auditif', 'Le rôle des différentes parties de l\'oreille dans la transmission de l\'onde sonore']
            },
            {
              id: 'pse-b4-s4', nom: 'Identifier les effets du bruit sur l\'organisme et la vie sociale',
              notions: ['Effets auditifs', 'Effets extra-auditifs'],
              contenus: ['Les effets du bruit sur l\'appareil auditif et sur les autres appareils ou systèmes', 'Les conséquences du bruit sur la vie sociale et la vie professionnelle']
            },
            {
              id: 'pse-b4-s5', nom: 'Proposer des mesures de prévention individuelles et collectives contre le bruit',
              notions: ['Comportement civique', 'Réglementation', 'Prévention', 'Répression', 'Protecteurs individuels contre le bruit'],
              contenus: ['Les attitudes éco-citoyennes pour limiter l\'émission de bruit', 'Les mesures de prévention dans l\'émission du bruit', 'Les mesures réglementaires relatives à la prévention (musique amplifiée, bruit de voisinage, ...)', 'Les mesures réglementaires relatives à la répression']
            }
          ]
        }
      ]
    },

    // ============================================================
    // SECTION C — L'individu dans son milieu professionnel
    // ============================================================
    {
      id: 'pse-thematique-c',
      titre: 'C. L\'individu dans son milieu professionnel',
      contenu: [

        // ---- C1 ----
        {
          id: 'pse-c1',
          titre: 'C1 - Les différents contrats de travail',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-c1-s1', nom: 'Distinguer les différents contrats de travail',
              notions: ['CDI / CDD', 'Contrat d\'apprentissage'],
              contenus: ['Les différents contrats de travail existants', 'La distinction entre un CDD et un CDI', 'Les caractéristiques d\'un contrat d\'apprentissage']
            },
            {
              id: 'pse-c1-s2', nom: 'Identifier les droits et obligations du salarié et de l\'employeur',
              notions: ['Contrat', 'Droits', 'Obligations'],
              contenus: ['Le rôle du contrat de travail', 'Les droits et les obligations du salarié et de l\'employeur']
            }
          ]
        },

        // ---- C2 ----
        {
          id: 'pse-c2',
          titre: 'C2 - Les enjeux de la santé et sécurité au travail',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>' +
            '<p class="pse-priorite"><strong>Module prioritaire en 1re année</strong> pour préparer les élèves au départ en PFMP.</p>',
          items: [
            {
              id: 'pse-c2-s1', nom: 'Identifier les enjeux humains et socio-économiques de la santé et sécurité au travail',
              notions: ['Enjeux humains', 'Enjeux socio-économiques', 'Accident du travail / Maladie professionnelle'],
              contenus: ['La spécificité de l\'accident du travail et de la maladie professionnelle', 'Les conséquences humaines, sociales et économiques des accidents du travail et des maladies professionnelles pour le salarié']
            },
            {
              id: 'pse-c2-s2', nom: 'Distinguer un accident du travail d\'une maladie professionnelle',
              notions: ['Lésion', 'Exposition', 'Chronique'],
              contenus: ['Les critères de reconnaissance d\'un accident du travail et d\'une maladie professionnelle']
            },
            {
              id: 'pse-c2-s3', nom: 'Repérer le cadre réglementaire en matière de santé et sécurité au travail',
              notions: ['Cadre réglementaire', 'Responsabilité / obligations de l\'employeur', 'Droits / obligations du salarié'],
              contenus: ['Les textes réglementaires de la sécurité au travail (Code du travail, règlement intérieur)', 'Les droits et obligations du salarié en matière de santé et sécurité au travail (obligation de sécurité, devoir d\'alerte, droit de retrait en cas de danger grave et imminent)', 'Les droits et obligations de l\'employeur en matière de santé et sécurité au travail (obligation de sécurité, obligation de formation)']
            },
            {
              id: 'pse-c2-s4', nom: 'Identifier les dispositions réglementaires concernant le jeune travailleur',
              notions: ['Jeune travailleur / nouvel embauché', 'Cadre réglementaire'],
              contenus: ['Les obligations et droits de l\'employeur concernant le jeune travailleur ou le nouvel embauché (livret d\'accueil, formations spécifiques au poste confié, ...)', 'Les dispositions réglementaires spécifiques au secteur d\'activité ou secteur professionnel']
            },
            {
              id: 'pse-c2-s5', nom: 'Repérer les démarches à effectuer lors d\'un accident du travail',
              notions: ['Prise en charge des soins', 'Indemnités journalières', 'Réparation / indemnisation', 'Procédures'],
              contenus: ['Les démarches de l\'employeur et du salarié lors d\'un accident du travail', 'Les délais à respecter', 'L\'identification des différentes prestations perçues suite à un accident du travail déclaré']
            }
          ]
        },

        // ---- C3 ----
        {
          id: 'pse-c3',
          titre: 'C3 - La démarche de prévention appliquée à une activité de travail',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>' +
            '<p class="pse-priorite"><strong>Module prioritaire en 1re année</strong> pour préparer les élèves au départ en PFMP.</p>',
          items: [
            {
              id: 'pse-c3-s1', nom: 'Repérer les consignes de sécurité au poste de travail',
              notions: ['Instruction / information'],
              contenus: ['Le repérage des consignes de sécurité au poste de travail et dans l\'environnement de travail', 'Les rôles des consignes', 'La distinction entre une instruction (qui engage une conduite à tenir) et une information (qui conduit à un renseignement, à une précision)']
            },
            {
              id: 'pse-c3-s2', nom: 'Analyser une activité de travail à l\'aide d\'un outil adapté',
              notions: ['Activité de travail', 'Outil d\'analyse', 'Individu', 'Tâche', 'Matériel', 'Milieu'],
              contenus: ['Les outils permettant de relever des informations concernant une activité de travail']
            },
            {
              id: 'pse-c3-s3', nom: 'Identifier les dangers et les dommages potentiels liés à une activité',
              notions: ['Poste de travail', 'Danger', 'Dommage'],
              contenus: ['La distinction entre un danger et un dommage', 'Les relations entre les dangers et les dommages potentiels liés à une activité au poste de travail']
            },
            {
              id: 'pse-c3-s4', nom: 'Distinguer danger, risque et situation dangereuse',
              notions: ['Danger', 'Situation dangereuse', 'Événement dangereux', 'Risque', 'Dommage potentiel'],
              contenus: ['La définition de danger, situation dangereuse, événement dangereux, dommage', 'La distinction entre le danger et le risque', 'Les familles de risques professionnels']
            },
            {
              id: 'pse-c3-s5', nom: 'Repérer les éléments d\'apparition d\'un dommage',
              notions: ['Éléments d\'apparition d\'un dommage', 'Démarche'],
              contenus: ['Le principe d\'apparition d\'un dommage']
            },
            {
              id: 'pse-c3-s6', nom: 'Distinguer la protection collective de la protection individuelle',
              notions: ['Protection collective', 'Protection individuelle'],
              contenus: ['La distinction entre la protection collective et la protection individuelle']
            }
          ]
        },

        // ---- C4 ----
        {
          id: 'pse-c4',
          titre: 'C4 - La démarche de prévention appliquée à un risque spécifique au métier',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>' +
            '<p class="pse-lien-pro"><strong>Application directe au métier :</strong> En CAP PSR, les risques spécifiques incluent les risques thermiques (brûlures), ' +
            'les risques liés aux produits chimiques (nettoyage/désinfection), les risques de coupures, et le risque microbiologique.</p>',
          items: [
            {
              id: 'pse-c4-s1', nom: 'Identifier le risque spécifique le plus fréquent du secteur professionnel',
              notions: ['Risque spécifique', 'Classification des risques'],
              contenus: ['Les risques du secteur d\'activité à partir de statistiques', 'Le risque spécifique le plus fréquent au secteur professionnel']
            },
            {
              id: 'pse-c4-s2', nom: 'Appliquer la démarche d\'analyse du risque spécifique',
              notions: ['Processus', 'Dommage potentiel', 'Démarche'],
              contenus: ['Le principe d\'apparition d\'un dommage potentiel sous forme de scénario ou d\'une représentation schématique']
            },
            {
              id: 'pse-c4-s3', nom: 'Expliquer les effets physiopathologiques du risque spécifique',
              notions: ['Effets physio-pathologiques', 'Santé'],
              contenus: ['Les effets physiopathologiques du risque choisi']
            },
            {
              id: 'pse-c4-s4', nom: 'Proposer des mesures de protection collective et individuelle',
              notions: ['Protection collective', 'Protection individuelle'],
              contenus: ['La distinction entre la protection collective et la protection individuelle', 'Les moyens de protection collective et de protection individuelle']
            }
          ]
        },

        // ---- C5 ----
        {
          id: 'pse-c5',
          titre: 'C5 - Les risques liés à l\'activité physique du métier',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>3h</strong></p>' +
            '<p class="pse-lien-pro"><strong>Très pertinent pour le CAP PSR :</strong> Station debout prolongée, port de charges lourdes (GN, bacs), ' +
            'gestes répétitifs, postures contraignantes en cuisine et en service.</p>',
          items: [
            {
              id: 'pse-c5-s1', nom: 'Repérer les facteurs de risque liés à l\'activité physique',
              notions: ['Activité physique', 'Statique', 'Dynamique', 'Posture'],
              contenus: ['La distinction entre le travail statique et le travail dynamique', 'Les postures contraignantes ou dangereuses dans une situation de travail']
            },
            {
              id: 'pse-c5-s2', nom: 'Identifier les dommages liés à l\'activité physique',
              notions: ['Fatigue musculaire', 'Troubles musculosquelettiques', 'Troubles ou maladies chroniques', 'Accidents'],
              contenus: ['L\'origine et les signes de la fatigue musculaire', 'Les caractéristiques des TMS', 'Les troubles ou les maladies chroniques ainsi que les accidents potentiels liés à l\'activité physique']
            },
            {
              id: 'pse-c5-s3', nom: 'Proposer des mesures de prévention pour limiter les risques liés à l\'activité physique',
              notions: ['Protection collective', 'Protection individuelle', 'Sécurité physique', 'Ergonomie', 'Économie d\'effort'],
              contenus: ['L\'objectif de l\'ergonomie', 'Les mesures de protection collective et individuelle permettant de limiter les risques liés à l\'activité physique : les différents équipements mécaniques d\'aide à la manutention, les principes de sécurité physique et d\'économie d\'effort']
            }
          ]
        },

        // ---- C6 ----
        {
          id: 'pse-c6',
          titre: 'C6 - Les acteurs et les organismes de la prévention',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-c6-s1', nom: 'Identifier les acteurs de prévention internes à l\'entreprise',
              notions: ['Prévention', '« Salarié compétent » pour la PPRP'],
              contenus: ['Les acteurs de prévention internes dans l\'entreprise']
            },
            {
              id: 'pse-c6-s2', nom: 'Repérer le rôle du Comité Social et Économique en santé et sécurité',
              notions: ['Instance représentative'],
              contenus: ['La composition du CSE', 'Les rôles du CSE en lien avec la santé et sécurité au travail']
            },
            {
              id: 'pse-c6-s3', nom: 'Identifier les missions du service de santé au travail',
              notions: ['Médecin du travail', 'Intervenants en prévention des risques professionnels (IPRP)'],
              contenus: ['Les quatre missions principales du service de santé au travail', 'Les missions relevant du médecin du travail', 'Les missions relevant des IPRP']
            },
            {
              id: 'pse-c6-s4', nom: 'Identifier les acteurs de prévention extérieurs à l\'entreprise',
              notions: ['Inspection du travail'],
              contenus: ['Les acteurs de prévention extérieurs à l\'entreprise (agents du service prévention CARSAT, inspecteur du travail) et leurs missions']
            }
          ]
        },

        // ---- C7 ----
        {
          id: 'pse-c7',
          titre: 'C7 - Le suivi médical des salariés et la vaccination',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>' +
            '<p class="pse-lien-pro"><strong>En restauration :</strong> Les vaccinations obligatoires pour le secteur professionnel sont un enjeu important.</p>',
          items: [
            {
              id: 'pse-c7-s1', nom: 'Repérer les différentes visites médicales du salarié',
              notions: ['Aptitudes au travail', 'Suivi médical individuel', 'Protection de la santé'],
              contenus: ['Les différentes visites médicales du salarié au cours de sa vie professionnelle', 'Les différentes visites médicales selon l\'exposition à des risques particuliers', 'L\'intérêt des visites médicales pour le salarié']
            },
            {
              id: 'pse-c7-s2', nom: 'Expliquer le principe de la vaccination',
              notions: ['Micro-organisme', 'Virulence atténuée', 'Antigène', 'Anticorps'],
              contenus: ['Le rôle de la vaccination', 'La distinction entre un antigène et un anticorps', 'L\'intérêt du complexe « antigène-anticorps »', 'La composition d\'un vaccin', 'La réaction de l\'organisme consécutive à l\'introduction d\'un antigène']
            },
            {
              id: 'pse-c7-s3', nom: 'Justifier l\'intérêt de la vaccination pour la protection individuelle et collective',
              notions: ['Protection individuelle', 'Protection collective', 'Vaccin obligatoire'],
              contenus: ['L\'intérêt de la vaccination et des rappels pour la protection individuelle', 'Les vaccins obligatoires en France pour tous et ceux obligatoires pour le secteur professionnel concerné']
            }
          ]
        },

        // ---- C8 ----
        {
          id: 'pse-c8',
          titre: 'C8 - La gestion des situations d\'urgence',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>15h</strong> (le plus volumineux des modules)</p>' +
            '<p class="pse-priorite"><strong>Module prioritaire en 1re année</strong> du fait de l\'horaire hebdomadaire de 1h30.</p>' +
            '<p>Ce module correspond à la formation <strong>Sauveteur Secouriste du Travail (SST)</strong>. ' +
            'Il fait l\'objet de la <strong>situation d\'évaluation n\u00b01</strong> du CCF (5 points, pratique et orale).</p>' +
            '<p>Le SST est un atout majeur pour l\'insertion professionnelle en restauration, secteur où les risques ' +
            'd\'accident (brûlures, coupures, chutes, malaises) sont fréquents.</p>',
          items: [
            {
              id: 'pse-c8-s1', nom: 'Protéger : identifier les dangers et soustraire la victime',
              notions: ['Protéger', 'Danger'],
              contenus: ['Identifier les dangers, supprimer ou isoler le danger, soustraire la victime au danger']
            },
            {
              id: 'pse-c8-s2', nom: 'Examiner la victime et rechercher les signes vitaux',
              notions: ['Examiner', 'Signes vitaux'],
              contenus: ['Observer la victime, rechercher les signes vitaux']
            },
            {
              id: 'pse-c8-s3', nom: 'Faire alerter ou alerter les services de secours',
              notions: ['Faire alerter / alerter', 'Communication orale', 'Vocabulaire technique'],
              contenus: ['Qui alerter, comment, informations à transmettre', 'Utilisation d\'un vocabulaire adapté pour décrire une situation d\'urgence', 'Transmission claire des informations aux services de secours']
            },
            {
              id: 'pse-c8-s4', nom: 'Secourir : réaliser les gestes de premiers secours adaptés',
              notions: ['Secourir', 'Premiers secours'],
              contenus: ['Conduite à tenir face à une victime qui saigne abondamment, s\'étouffe, se plaint de malaise, de brûlures, de douleur, ne répond pas']
            }
          ]
        }
      ]
    },

    // ============================================================
    // SECTION D — L'individu consommateur averti
    // ============================================================
    {
      id: 'pse-thematique-d',
      titre: 'D. L\'individu consommateur averti',
      contenu: [

        // ---- D1 ----
        {
          id: 'pse-d1',
          titre: 'D1 - L\'assurance',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-d1-s1', nom: 'Expliquer le principe de l\'assurance',
              notions: ['Risque', 'Sinistre', 'Solidarité', 'Garanties', 'Indemnisation / cotisation', 'Contrat', 'Clause d\'exclusion'],
              contenus: ['Le rôle d\'une assurance', 'La distinction entre un risque et un sinistre', 'La différence entre une cotisation et une indemnisation', 'Les risques couverts dans un contrat d\'assurance']
            },
            {
              id: 'pse-d1-s2', nom: 'Identifier les obligations liées à la responsabilité civile',
              notions: ['Responsabilité civile', 'Législation / réglementation'],
              contenus: ['La définition de la responsabilité civile', 'Les obligations liées à la responsabilité civile', 'La distinction entre l\'assurance obligatoire et l\'assurance facultative']
            },
            {
              id: 'pse-d1-s3', nom: 'Repérer les démarches à effectuer en cas de sinistre',
              notions: ['Nature du sinistre', 'Déclaration', 'Formulaire'],
              contenus: ['Les conditions nécessaires à l\'indemnisation en cas de sinistre', 'Les démarches à effectuer à la suite d\'un sinistre']
            }
          ]
        },

        // ---- D2 ----
        {
          id: 'pse-d2',
          titre: 'D2 - Le budget',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>',
          items: [
            {
              id: 'pse-d2-s1', nom: 'Distinguer les différentes recettes et dépenses d\'un budget',
              notions: ['Revenus liés au travail', 'Revenus sociaux', 'Dépense incompressible'],
              contenus: ['La distinction entre un revenu et une dépense', 'Les différentes recettes dans un budget', 'Les revenus liés au travail et les revenus sociaux', 'Les différents types de dépenses dans un budget (dépenses incompressibles)']
            },
            {
              id: 'pse-d2-s2', nom: 'Identifier la règle principale de gestion d\'un budget',
              notions: ['Budget équilibré', 'Déficitaire', 'Excédentaire', 'Équilibre'],
              contenus: ['La distinction entre un budget équilibré, excédentaire et déficitaire', 'La règle principale de gestion d\'un budget']
            },
            {
              id: 'pse-d2-s3', nom: 'Expliquer le principe de l\'épargne et ses critères de choix',
              notions: ['Intérêts', 'Épargne de précaution'],
              contenus: ['Le principe de l\'épargne', 'Les critères de choix d\'une épargne', 'L\'épargne de précaution']
            },
            {
              id: 'pse-d2-s4', nom: 'Identifier les droits et obligations liés au crédit à la consommation',
              notions: ['Mensualités', 'TAEG', 'Surendettement', 'Rétractation', 'Engagement réciproque'],
              contenus: ['Le principe du crédit à la consommation', 'L\'intérêt d\'un crédit', 'Les critères de choix d\'une offre de crédit', 'Les droits et obligations de chaque partie dans un crédit à la consommation', 'Les risques du crédit']
            }
          ]
        },

        // ---- D3 ----
        {
          id: 'pse-d3',
          titre: 'D3 - Les achats',
          type: 'chapitre',
          texte: '<p class="pse-duree">&#9202; Volume horaire indicatif : <strong>2h</strong></p>' +
            '<p class="pse-lien-pro"><strong>Lien avec le CAP PSR :</strong> La lecture d\'étiquettes alimentaires (DLC, DDM, allergènes) est une compétence ' +
            'directement utilisée en milieu professionnel de restauration.</p>',
          items: [
            {
              id: 'pse-d3-s1', nom: 'Repérer les droits du consommateur dans le e-commerce',
              notions: ['Achats en ligne', 'Conditions générales de vente', 'Délai de rétractation'],
              contenus: ['La définition du e-commerce', 'Les conditions générales de vente (informations à fournir avant la vente - délai de livraison - délai de rétractation - délai de remboursement)', 'Les avantages et les inconvénients des achats en ligne']
            },
            {
              id: 'pse-d3-s2', nom: 'Identifier les critères de choix d\'un produit',
              notions: ['Critères'],
              contenus: ['Les critères de choix d\'un produit en fonction des données de la situation']
            },
            {
              id: 'pse-d3-s3', nom: 'Lire et exploiter l\'étiquetage d\'un produit alimentaire',
              notions: ['DLC / DDM', 'Allergènes', 'Stockage'],
              contenus: ['La distinction entre la date limite de consommation (DLC) et la date de durabilité minimale (DDM)', 'La définition d\'un allergène', 'Les informations obligatoires sur l\'étiquette d\'un produit alimentaire']
            },
            {
              id: 'pse-d3-s4', nom: 'Repérer les signes officiels de la qualité et de l\'origine des produits',
              notions: ['Label rouge', 'Agriculture biologique', 'AOP', 'Commerce équitable'],
              contenus: ['Les signes officiels de la qualité et de l\'origine des produits', 'Le principe du commerce équitable']
            }
          ]
        }
      ]
    }
  ],

  // === RÉFÉRENCES CROISÉES VERS LE RÉFÉRENTIEL CAP PSR ===
  crossRefs: {
    savoirs: {
      'S1.1': 'pse-a7',
      'S1.2': 'pse-a7',
      'S1.3': 'pse-a7',
      'S1.7': 'pse-a7',
      'S2.1': 'pse-c7',
      'S2.2': 'pse-c4',
      'S2.3': 'pse-c3',
      'S3.1': 'pse-c3',
      'S3.2': 'pse-c4',
      'S3.3': 'pse-b1',
      'S4.1': 'pse-c2',
      'S4.2': 'pse-c3',
      'S4.3': 'pse-c5',
      'S5.1': 'pse-c1',
      'S5.2': 'pse-c1',
      'S5.3': 'pse-c6'
    },
    competences: {
      'C1': ['pse-c3', 'pse-c5'],
      'C2': ['pse-c3', 'pse-c4'],
      'C3': ['pse-c4', 'pse-c5'],
      'C4': ['pse-c3'],
      'C5': ['pse-c3', 'pse-c4', 'pse-b1'],
      'C6': ['pse-c5'],
      'C7': ['pse-d3'],
      'C8': ['pse-c5', 'pse-c8'],
      'C10': ['pse-c3', 'pse-c4', 'pse-b1']
    }
  },

  // === GLOSSAIRE ===
  glossaire: [
    { terme: 'SST', definition: 'Sauveteur Secouriste du Travail. Formation certifiante aux premiers secours en milieu professionnel, intégrée au module C8 de PSE.', sections: ['pse-c8'] },
    { terme: 'CCF', definition: 'Contrôle en Cours de Formation. Mode d\'évaluation de la PSE en CAP comportant 2 situations d\'évaluation (20 points au total).', sections: ['pse-evaluation'] },
    { terme: 'TMS', definition: 'Troubles Musculo-Squelettiques. Pathologies des muscles, tendons et nerfs liées à l\'activité physique répétitive ou contraignante, fréquentes en restauration.', sections: ['pse-c5'] },
    { terme: 'AT', definition: 'Accident du Travail. Accident survenant par le fait ou à l\'occasion du travail, quelle qu\'en soit la cause.', sections: ['pse-c2'] },
    { terme: 'DUER', definition: 'Document Unique d\'Évaluation des Risques. Document obligatoire dans toute entreprise, listant les risques professionnels identifiés.', sections: ['pse-c3', 'pse-c4'] },
    { terme: 'CSE', definition: 'Comité Social et Économique. Instance représentative du personnel ayant des attributions en matière de santé et sécurité au travail.', sections: ['pse-c6'] },
    { terme: 'EPI', definition: 'Équipement de Protection Individuelle. Matériel porté par le salarié pour se protéger contre un ou plusieurs risques (gants, chaussures de sécurité, etc.).', sections: ['pse-c3', 'pse-c4', 'pse-c5'] },
    { terme: 'PNNS', definition: 'Programme National Nutrition Santé. Politique publique de santé définissant les recommandations nutritionnelles pour la population.', sections: ['pse-a7'] },
    { terme: 'IST', definition: 'Infection Sexuellement Transmissible. Infection pouvant être transmise lors de rapports sexuels non protégés.', sections: ['pse-a6'] },
    { terme: 'DLC', definition: 'Date Limite de Consommation. Date au-delà de laquelle un produit alimentaire ne doit plus être consommé (risque sanitaire). Mention « À consommer jusqu\'au... ».', sections: ['pse-d3'] },
    { terme: 'DDM', definition: 'Date de Durabilité Minimale (anciennement DLUO). Date au-delà de laquelle un produit peut perdre ses qualités gustatives mais reste consommable sans risque sanitaire.', sections: ['pse-d3'] },
    { terme: 'DICRIM', definition: 'Document d\'Information Communal sur les Risques Majeurs. Document municipal informant les citoyens des risques naturels et technologiques de la commune.', sections: ['pse-b2'] },
    { terme: 'CARSAT', definition: 'Caisse d\'Assurance Retraite et de la Santé au Travail. Organisme assurant la prévention des risques professionnels et l\'assurance maladie-retraite.', sections: ['pse-c6'] }
  ]

});

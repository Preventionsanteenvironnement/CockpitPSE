/**
 * TEMPLATE DE MODULE PSR
 * ======================
 * Pour creer un nouveau module :
 * 1. Copier ce fichier dans modules/MON-MODULE/module.js
 * 2. Remplir les champs ci-dessous
 * 3. Ajouter une ligne dans le manifest de js/modules-registry.js :
 *    { id: 'mon-module', fichier: 'modules/mon-module/module.js', navLabel: 'Mon Module', navOrdre: 10, icone: '&#128214;' }
 *
 * C'est tout ! La navigation, la recherche et les liens croises se font automatiquement.
 */

PSR_MODULES.register({

  // === IDENTITE DU MODULE (obligatoire) ===
  id: 'mon-module',                        // Identifiant unique, en minuscules avec tirets
  nom: 'Mon Module',                       // Nom court (affiche dans la nav)
  nomComplet: 'Nom complet du module',     // Nom long (affiche en titre de page)
  description: 'Description du module',    // Une phrase de description
  icone: '&#128214;',                      // Emoji ou entite HTML (icone du module)
  couleur: '#8e44ad',                      // Couleur principale (code hex)
  couleurLight: '#f4ecf7',                 // Version claire de la couleur

  // === CONTENU (obligatoire) ===
  // Le contenu est organise en sections > contenu > items
  sections: [
    {
      id: 'section-1',                     // Identifiant unique de la section
      titre: 'Titre de la section',        // Titre affiche
      contenu: [
        {
          id: 'section-1-ch1',             // Identifiant unique du chapitre
          titre: 'Titre du chapitre',      // Titre affiche
          type: 'chapitre',                // Type : 'chapitre', 'cours', 'activite', 'evaluation', 'fiche'

          // Objectifs pedagogiques (optionnel)
          objectifs: [
            'Premier objectif',
            'Deuxieme objectif'
          ],

          // Texte du cours (optionnel, supporte le HTML)
          texte: 'Contenu du chapitre ici. On peut utiliser du <strong>HTML</strong>.',

          // Elements avec suivi de progression (optionnel)
          // Chaque item apparait comme une case a cocher
          items: [
            { id: 'mm-s1', nom: 'Notion 1', detail: 'Detail ou limite d\'exigence' },
            { id: 'mm-s2', nom: 'Notion 2', detail: 'Detail ou limite d\'exigence' }
          ],

          // Sous-sections (optionnel)
          sousSections: [
            {
              titre: 'Sous-titre',
              texte: 'Texte de la sous-section',
              items: ['Element 1', 'Element 2']
            }
          ]
        }
      ]
    }
    // Ajouter d'autres sections ici...
  ],

  // === REFERENCES CROISEES (optionnel) ===
  // Liens entre ce module et le referentiel CAP PSR
  crossRefs: {
    // Liens vers des savoirs : cle = id du savoir, valeur = id de la section concernee
    savoirs: {
      // Exemple : 'S1.7': 'section-1-ch1'
    },
    // Liens vers des competences : cle = id de la competence, valeur = tableau d'ids de sections
    competences: {
      // Exemple : 'C1': ['section-1-ch1', 'section-2-ch3']
    }
  },

  // === GLOSSAIRE (optionnel) ===
  // Termes a ajouter au glossaire general
  glossaire: [
    // Exemple :
    // { terme: 'Mon Terme', definition: 'Definition du terme...', sections: ['section-1-ch1'] }
  ]

});

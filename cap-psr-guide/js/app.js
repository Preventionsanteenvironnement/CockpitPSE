// =============================================================================
// CAP PSR - APPLICATION PRINCIPALE
// Fichier JavaScript principal pour le guide interactif
// =============================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ===========================================================================
  // FONCTIONS UTILITAIRES (helpers)
  // ===========================================================================

  /**
   * Retrouve une competence par son identifiant (ex: "C1", "C5")
   * @param {string} id - Identifiant de la competence
   * @returns {Object|undefined} La competence trouvee ou undefined
   */
  function getCompetence(id) {
    return DATA.competences.find(function (c) {
      return c.id === id;
    });
  }

  /**
   * Retrouve une activite par son identifiant (ex: "A1", "A10")
   * @param {string} id - Identifiant de l'activite
   * @returns {Object|undefined} L'activite trouvee ou undefined
   */
  function getActivite(id) {
    return DATA.activites.find(function (a) {
      return a.id === id;
    });
  }

  /**
   * Determine le pole (1 ou 2) auquel appartient une competence
   * @param {string} id - Identifiant de la competence (ex: "C3")
   * @returns {number|null} Le numero du pole (1 ou 2) ou null
   */
  function getPoleForCompetence(id) {
    var competence = getCompetence(id);
    if (competence) return competence.pole;
    return null;
  }

  /**
   * Determine l'epreuve (EP1 ou EP2) associée a une competence
   * @param {string} id - Identifiant de la competence (ex: "C7")
   * @returns {string|null} "EP1" ou "EP2" ou null
   */
  function getEpreuveForCompetence(id) {
    var competence = getCompetence(id);
    if (competence) return competence.epreuve;
    return null;
  }

  /**
   * Rassemble tous les savoirs associés (spécifiques + communs) dans un
   * tableau plat et recherchable.
   * Chaque element possede : { id, nom, limites, competence, type }
   *   - type "savoir"  : savoir spécifique a une competence
   *   - type "commun"  : savoir commun a un pole
   * @returns {Array} Liste aplatie de tous les savoirs
   */
  function getAllSavoirs() {
    var resultats = [];

    // --- Savoirs spécifiques de chaque competence ---
    DATA.competences.forEach(function (comp) {
      if (!comp.savoirs) return;
      comp.savoirs.forEach(function (categorie) {
        if (!categorie.items) return;
        categorie.items.forEach(function (savoir) {
          resultats.push({
            id: savoir.id,
            nom: savoir.nom,
            limites: savoir.limites || '',
            competence: comp.id,
            type: 'savoir'
          });
        });
      });
    });

    // --- Savoirs communs (SC1, SC2) ---
    Object.keys(DATA.savoirsCommuns).forEach(function (cle) {
      var sc = DATA.savoirsCommuns[cle];
      if (!sc.items) return;
      sc.items.forEach(function (categorie) {
        if (!categorie.savoirs) return;
        categorie.savoirs.forEach(function (savoir) {
          resultats.push({
            id: savoir.id,
            nom: savoir.nom,
            limites: savoir.limites || '',
            competence: sc.id,
            type: 'commun'
          });
        });
      });
    });

    return resultats;
  }

  // Exposition des helpers sur l'objet window pour usage externe
  window.getCompetence = getCompetence;
  window.getActivite = getActivite;
  window.getPoleForCompetence = getPoleForCompetence;
  window.getEpreuveForCompetence = getEpreuveForCompetence;
  window.getAllSavoirs = getAllSavoirs;


  // ===========================================================================
  // RECHERCHE
  // ===========================================================================

  var searchInput = document.querySelector('.search-input');
  var searchResults = document.querySelector('.search-results');

  if (searchInput && searchResults) {
    /**
     * Construit l'index de recherche a partir de toutes les donnees.
     * Chaque entree possede : { label, type, badge, url }
     */
    function buildSearchIndex() {
      var index = [];

      // Competences (C1–C10)
      DATA.competences.forEach(function (c) {
        index.push({
          label: c.id + ' – ' + c.nom,
          type: 'competence',
          badge: 'Competence',
          url: 'competence.html?id=' + c.id
        });
      });

      // Activites (A1–A10)
      DATA.activites.forEach(function (a) {
        index.push({
          label: a.id + ' – ' + a.nom,
          type: 'activite',
          badge: 'Activite',
          url: 'activite.html?id=' + a.id
        });
      });

      // Savoirs associés (spécifiques + communs)
      var savoirs = getAllSavoirs();
      savoirs.forEach(function (s) {
        var url;
        if (s.type === 'commun') {
          // Savoirs communs -> page savoirs-communs avec ancre
          url = 'savoirs-communs.html#' + s.id;
        } else {
          // Savoirs spécifiques -> page de la competence avec ancre
          url = 'competence.html?id=' + s.competence + '#' + s.id;
        }
        index.push({
          label: s.id + ' – ' + s.nom,
          type: 'savoir',
          badge: 'Savoir',
          url: url
        });
      });

      // Glossaire
      DATA.glossaire.forEach(function (g) {
        index.push({
          label: g.terme,
          type: 'glossaire',
          badge: 'Glossaire',
          url: 'glossaire.html#' + encodeURIComponent(g.terme)
        });
      });

      // Entrees des modules (via core.js)
      if (window.PSR_CORE && typeof PSR_CORE.getModuleSearchEntries === 'function') {
        var moduleEntries = PSR_CORE.getModuleSearchEntries();
        moduleEntries.forEach(function(entry) { index.push(entry); });
      }

      return index;
    }

    var searchIndex = buildSearchIndex();

    // Permettre la reconstruction de l'index (apres chargement d'un module)
    window.rebuildSearchIndex = function() { searchIndex = buildSearchIndex(); };

    /**
     * Normalise une chaine pour la recherche :
     * minuscules, sans accents, sans caracteres speciaux
     */
    function normaliser(texte) {
      return texte
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    /**
     * Effectue la recherche et affiche les resultats dans le conteneur
     */
    function effectuerRecherche(requete) {
      var termeNorm = normaliser(requete.trim());

      // Masquer les resultats si la requete est trop courte
      if (termeNorm.length < 2) {
        searchResults.classList.remove('visible');
        searchResults.innerHTML = '';
        return;
      }

      // Filtrer l'index
      var correspondances = searchIndex.filter(function (entree) {
        return normaliser(entree.label).indexOf(termeNorm) !== -1;
      });

      // Limiter a 12 resultats pour ne pas surcharger l'affichage
      correspondances = correspondances.slice(0, 12);

      // Construire le HTML des resultats
      if (correspondances.length === 0) {
        searchResults.innerHTML =
          '<div class="search-result-item no-result">Aucun resultat pour &laquo;&nbsp;' +
          escapeHtml(requete.trim()) +
          '&nbsp;&raquo;</div>';
      } else {
        searchResults.innerHTML = correspondances
          .map(function (r) {
            return (
              '<a href="' + r.url + '" class="search-result-item" data-type="' + r.type + '">' +
              '<span class="search-badge search-badge--' + r.type + '">' + r.badge + '</span>' +
              '<span class="search-label">' + escapeHtml(r.label) + '</span>' +
              '</a>'
            );
          })
          .join('');
      }

      searchResults.classList.add('visible');
    }

    /**
     * Echappe les caracteres HTML speciaux pour eviter les injections
     */
    function escapeHtml(texte) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(texte));
      return div.innerHTML;
    }

    // Ecouter la saisie dans le champ de recherche
    searchInput.addEventListener('input', function () {
      effectuerRecherche(this.value);
    });

    // Masquer les resultats quand on clique en dehors
    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('visible');
        searchResults.innerHTML = '';
      }
    });

    // Afficher de nouveau les resultats quand on refocalise le champ
    searchInput.addEventListener('focus', function () {
      if (this.value.trim().length >= 2) {
        effectuerRecherche(this.value);
      }
    });

    // Reconstruire l'index quand un module est charge
    document.addEventListener('psr-module-loaded', function() {
      if (window.rebuildSearchIndex) window.rebuildSearchIndex();
    });
  }


  // ===========================================================================
  // ACCORDEONS
  // ===========================================================================

  var accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var accordion = this.closest('.accordion');
      if (accordion) {
        accordion.classList.toggle('open');
      }
    });
  });


  // ===========================================================================
  // THEME CLAIR / SOMBRE
  // ===========================================================================

  var THEME_KEY = 'psr-theme';
  var themeToggle = document.querySelector('.theme-toggle');

  // Appliquer le theme enregistre au chargement
  var themeSauvegarde = localStorage.getItem(THEME_KEY);
  if (themeSauvegarde) {
    document.documentElement.setAttribute('data-theme', themeSauvegarde);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var themeActuel = document.documentElement.getAttribute('data-theme');
      var nouveauTheme = themeActuel === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nouveauTheme);
      localStorage.setItem(THEME_KEY, nouveauTheme);
    });
  }


  // ===========================================================================
  // BOUTON RETOUR EN HAUT
  // ===========================================================================

  var backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ===========================================================================
  // NAVIGATION ACTIVE
  // ===========================================================================

  var navLinks = document.querySelectorAll('nav a');
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;

    // Comparer le nom de fichier du lien avec la page courante
    var linkPage = href.split('/').pop().split('?')[0].split('#')[0];
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

});

/**
 * PSR Core Engine
 * Navigation dynamique, references croisees, integration des modules.
 * Charge apres modules-registry.js et data.js, avant app.js.
 */
(function() {
  'use strict';

  // ============================================================
  // NAVIGATION DYNAMIQUE
  // ============================================================

  /**
   * Ajoute les modules du manifest dans la navigation desktop et mobile
   */
  function initModuleNav() {
    var modules = PSR_MODULES.list();
    if (modules.length === 0) return;

    var navLinks = document.querySelector('.nav-links');
    var bottomNav = document.querySelector('.bottom-nav');
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var params = new URLSearchParams(window.location.search);
    var currentModuleId = params.get('id');
    var isModulePage = currentPage === 'module.html';

    // --- Desktop nav ---
    if (navLinks) {
      if (modules.length <= 3) {
        // Ajouter directement dans la nav
        modules.sort(function(a, b) { return a.navOrdre - b.navOrdre; });
        modules.forEach(function(mod) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = 'module.html?id=' + mod.id;
          a.textContent = mod.navLabel;
          a.setAttribute('data-module', mod.id);
          if (isModulePage && currentModuleId === mod.id) {
            a.classList.add('active');
          }
          li.appendChild(a);
          navLinks.appendChild(li);
        });
      } else {
        // Dropdown "Matieres"
        var li = document.createElement('li');
        li.className = 'nav-dropdown';
        var hasActive = isModulePage && modules.some(function(m) { return m.id === currentModuleId; });
        var triggerHtml = '<a href="#" class="nav-dropdown-trigger' + (hasActive ? ' active' : '') + '">Matières &#9662;</a>';
        var menuHtml = '<ul class="nav-dropdown-menu">';
        modules.sort(function(a, b) { return a.navOrdre - b.navOrdre; });
        modules.forEach(function(mod) {
          var isActive = isModulePage && currentModuleId === mod.id;
          menuHtml += '<li><a href="module.html?id=' + mod.id + '"' +
            (isActive ? ' class="active"' : '') +
            ' data-module="' + mod.id + '">' +
            mod.icone + ' ' + mod.navLabel + '</a></li>';
        });
        menuHtml += '</ul>';
        li.innerHTML = triggerHtml + menuHtml;
        navLinks.appendChild(li);

        // Toggle dropdown au clic
        li.querySelector('.nav-dropdown-trigger').addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          li.classList.toggle('open');
        });
        // Fermer au clic exterieur
        document.addEventListener('click', function() {
          li.classList.remove('open');
        });
      }
    }

    // --- Mobile nav : bouton "+" ---
    if (bottomNav) {
      var moreLink = document.createElement('a');
      moreLink.href = '#';
      moreLink.innerHTML = '<span class="icon">&#10010;</span>Plus';
      moreLink.className = 'bottom-nav-more';
      moreLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleModulesOverlay();
      });
      bottomNav.appendChild(moreLink);
    }
  }

  /**
   * Overlay mobile pour la liste des modules
   */
  function toggleModulesOverlay() {
    var existing = document.getElementById('modules-overlay');
    if (existing) {
      existing.remove();
      return;
    }
    var modules = PSR_MODULES.list();
    var overlay = document.createElement('div');
    overlay.id = 'modules-overlay';
    overlay.className = 'modules-overlay';

    var html = '<div class="modules-overlay-content">';
    html += '<div class="modules-overlay-header"><strong>Matières</strong><button class="modules-overlay-close">&#10005;</button></div>';
    html += '<div class="modules-overlay-list">';

    // Liens principaux
    var mainLinks = [
      { href: 'guide-pedagogique.html', icon: '&#128214;', label: 'Guide Pédagogique' },
      { href: 'equipement.html', icon: '&#128736;', label: 'Equipement' }
    ];
    mainLinks.forEach(function(link) {
      html += '<a href="' + link.href + '" class="modules-overlay-item">' +
        '<span class="modules-overlay-icon">' + link.icon + '</span>' + link.label + '</a>';
    });

    // Modules
    modules.sort(function(a, b) { return a.navOrdre - b.navOrdre; });
    modules.forEach(function(mod) {
      html += '<a href="module.html?id=' + mod.id + '" class="modules-overlay-item">' +
        '<span class="modules-overlay-icon">' + mod.icone + '</span>' + mod.navLabel + '</a>';
    });

    html += '</div></div>';
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    // Fermer
    overlay.querySelector('.modules-overlay-close').addEventListener('click', function() {
      overlay.remove();
    });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.remove();
    });
  }

  // ============================================================
  // REFERENCES CROISEES
  // ============================================================

  /**
   * Trouve le titre d'une section dans un module par son id
   */
  function findSectionTitle(mod, sectionId) {
    if (!mod.sections) return sectionId;
    for (var i = 0; i < mod.sections.length; i++) {
      var section = mod.sections[i];
      if (section.id === sectionId) return section.titre;
      if (section.contenu) {
        for (var j = 0; j < section.contenu.length; j++) {
          if (section.contenu[j].id === sectionId) return section.contenu[j].titre;
        }
      }
    }
    return sectionId;
  }

  /**
   * Construit l'index inverse des references croisees
   * Retourne { 'C1': [{moduleId, moduleNom, moduleIcone, moduleCouleur, sectionId, sectionTitre}], ... }
   */
  function buildReverseCrossRefs() {
    var reverseIndex = {};

    Object.keys(PSR_MODULES._registered).forEach(function(modId) {
      var mod = PSR_MODULES._registered[modId];
      if (!mod.crossRefs) return;

      function addRef(key, sectionIds) {
        if (!reverseIndex[key]) reverseIndex[key] = [];
        if (!Array.isArray(sectionIds)) sectionIds = [sectionIds];
        sectionIds.forEach(function(secId) {
          reverseIndex[key].push({
            moduleId: mod.id,
            moduleNom: mod.nom,
            moduleIcone: mod.icone || '',
            moduleCouleur: mod.couleur || 'var(--accent)',
            sectionId: secId,
            sectionTitre: findSectionTitle(mod, secId)
          });
        });
      }

      // Competences
      if (mod.crossRefs.competences) {
        Object.keys(mod.crossRefs.competences).forEach(function(compId) {
          addRef(compId, mod.crossRefs.competences[compId]);
        });
      }

      // Savoirs
      if (mod.crossRefs.savoirs) {
        Object.keys(mod.crossRefs.savoirs).forEach(function(savoirId) {
          addRef(savoirId, mod.crossRefs.savoirs[savoirId]);
        });
      }
    });

    return reverseIndex;
  }

  /**
   * Affiche les enseignements associés (modules) sur une page competence
   */
  function renderLinkedModules(compId) {
    if (PSR_MODULES.list().length === 0) return;

    PSR_MODULES.loadAll().then(function() {
      var reverseRefs = buildReverseCrossRefs();
      var refs = reverseRefs[compId];
      if (!refs || refs.length === 0) return;

      var html = '<div class="section fade-in"><div class="section-title">' +
        '<span class="dot accent"></span> Enseignements associés' +
        '</div>';

      refs.forEach(function(ref) {
        html += '<a href="module.html?id=' + ref.moduleId + '#' + ref.sectionId + '" ' +
          'class="card card-link" style="margin-bottom:8px; border-left:3px solid ' + ref.moduleCouleur + '">' +
          '<div class="card-header">' +
          '<div class="card-icon" style="background:' + ref.moduleCouleur + '20">' + ref.moduleIcone + '</div>' +
          '<div><div class="card-title">' + ref.moduleNom + '</div>' +
          '<div class="card-body">' + ref.sectionTitre + '</div></div></div></a>';
      });

      html += '</div>';

      var mainEl = document.querySelector('.main');
      if (mainEl) {
        // Inserer avant la section savoirs communs
        var scSection = document.getElementById('section-savoirs-communs');
        if (scSection) {
          scSection.insertAdjacentHTML('beforebegin', html);
        } else {
          mainEl.insertAdjacentHTML('beforeend', html);
        }
      }
    });
  }

  // ============================================================
  // GLOSSAIRE FUSIONE
  // ============================================================

  /**
   * Fusionne le glossaire du referentiel avec les termes des modules
   */
  function getMergedGlossaire() {
    var glossaire = DATA.glossaire.slice();

    Object.keys(PSR_MODULES._registered).forEach(function(modId) {
      var mod = PSR_MODULES._registered[modId];
      if (!mod.glossaire) return;

      mod.glossaire.forEach(function(entry) {
        var existing = glossaire.find(function(g) {
          return g.terme.toLowerCase() === entry.terme.toLowerCase();
        });
        if (existing) {
          if (!existing.moduleSources) existing.moduleSources = [];
          existing.moduleSources.push({
            moduleId: mod.id,
            moduleNom: mod.nom,
            moduleIcone: mod.icone,
            sections: entry.sections
          });
        } else {
          glossaire.push({
            terme: entry.terme,
            definition: entry.definition,
            competences: [],
            moduleSources: [{
              moduleId: mod.id,
              moduleNom: mod.nom,
              moduleIcone: mod.icone,
              sections: entry.sections
            }]
          });
        }
      });
    });

    return glossaire.sort(function(a, b) {
      return a.terme.localeCompare(b.terme, 'fr');
    });
  }

  // ============================================================
  // RECHERCHE — Extension
  // ============================================================

  /**
   * Retourne les entrées de recherche pour les modules
   */
  function getModuleSearchEntries() {
    var entries = [];

    // Modules chargés : entrées détaillées
    Object.keys(PSR_MODULES._registered).forEach(function(modId) {
      var mod = PSR_MODULES._registered[modId];

      // Entree du module lui-meme
      entries.push({
        label: mod.nom + ' \u2013 ' + (mod.nomComplet || ''),
        type: 'module',
        badge: 'Module',
        url: 'module.html?id=' + mod.id
      });

      // Sections
      if (mod.sections) {
        mod.sections.forEach(function(section) {
          entries.push({
            label: section.titre,
            type: 'module',
            badge: mod.nom,
            url: 'module.html?id=' + mod.id + '#' + section.id
          });
          if (section.contenu) {
            section.contenu.forEach(function(ch) {
              entries.push({
                label: ch.titre,
                type: 'module',
                badge: mod.nom,
                url: 'module.html?id=' + mod.id + '#' + ch.id
              });
            });
          }
        });
      }

      // Glossaire du module
      if (mod.glossaire) {
        mod.glossaire.forEach(function(g) {
          entries.push({
            label: g.terme,
            type: 'glossaire',
            badge: 'Glossaire',
            url: 'glossaire.html#' + encodeURIComponent(g.terme)
          });
        });
      }
    });

    // Modules non chargés : juste le nom
    PSR_MODULES.list().forEach(function(entry) {
      if (!PSR_MODULES.isLoaded(entry.id)) {
        entries.push({
          label: entry.navLabel,
          type: 'module',
          badge: 'Module',
          url: 'module.html?id=' + entry.id
        });
      }
    });

    return entries;
  }

  // ============================================================
  // SECTION MATIERES SUR INDEX
  // ============================================================

  /**
   * Genere la section Matieres sur la page d'accueil
   */
  function renderModulesSection() {
    var modules = PSR_MODULES.list();
    if (modules.length === 0) return;

    var container = document.getElementById('modules-section');
    if (!container) return;

    modules.sort(function(a, b) { return a.navOrdre - b.navOrdre; });
    var html = '';
    modules.forEach(function(mod) {
      var registered = PSR_MODULES.get(mod.id);
      var couleur = registered ? registered.couleur : 'var(--accent)';
      var couleurLight = registered ? registered.couleurLight : 'var(--accent-light)';
      var nomComplet = registered ? registered.nomComplet : mod.navLabel;

      html += '<a href="module.html?id=' + mod.id + '" class="card card-link">' +
        '<div class="card-header">' +
        '<div class="card-icon" style="background:' + couleurLight + '">' + mod.icone + '</div>' +
        '<div>' +
        '<div class="card-title">' + mod.navLabel + '</div>' +
        '<div class="card-body">' + nomComplet + '</div>' +
        '</div></div></a>';
    });
    container.innerHTML = html;
    container.closest('.section').style.display = '';
  }

  // ============================================================
  // INIT
  // ============================================================

  // Exposer les fonctions globalement
  window.PSR_CORE = {
    initModuleNav: initModuleNav,
    buildReverseCrossRefs: buildReverseCrossRefs,
    renderLinkedModules: renderLinkedModules,
    getMergedGlossaire: getMergedGlossaire,
    getModuleSearchEntries: getModuleSearchEntries,
    renderModulesSection: renderModulesSection,
    findSectionTitle: findSectionTitle
  };

  // Initialiser la navigation au chargement
  document.addEventListener('DOMContentLoaded', function() {
    initModuleNav();
    renderModulesSection();
  });

})();

/**
 * PSR Modules Registry
 * Systeme de registre pour les modules educatifs extensibles.
 * Chaque module = 1 fichier JS dans modules/{id}/module.js + 1 ligne dans le manifest ci-dessous.
 */
window.PSR_MODULES = {
  _registered: {},
  _loading: {},

  // ============================================================
  // MANIFEST — Ajouter une ligne ici pour chaque nouveau module
  // ============================================================
  manifest: [
    { id: 'pse', fichier: 'modules/pse/module.js', navLabel: 'PSE', navOrdre: 10, icone: '&#127973;' },
    // { id: 'sciences-alim', fichier: 'modules/sciences-alim/module.js', navLabel: 'Sc. Alim.', navOrdre: 11, icone: '&#127822;' },
  ],

  /**
   * Enregistre un module (appele depuis le fichier module.js du module)
   */
  register: function(moduleData) {
    this._registered[moduleData.id] = moduleData;
    // Declencher un evenement pour que la recherche puisse se mettre a jour
    var event = new CustomEvent('psr-module-loaded', { detail: moduleData });
    document.dispatchEvent(event);
  },

  /**
   * Charge un module par son id (injection dynamique de script)
   * Retourne une Promise qui resout avec les donnees du module
   */
  load: function(moduleId) {
    var self = this;
    // Deja enregistre
    if (this._registered[moduleId]) {
      return Promise.resolve(this._registered[moduleId]);
    }
    // Deja en cours de chargement
    if (this._loading[moduleId]) {
      return this._loading[moduleId];
    }
    // Trouver dans le manifest
    var entry = this.manifest.find(function(m) { return m.id === moduleId; });
    if (!entry) {
      return Promise.reject(new Error('Module non trouve dans le manifest : ' + moduleId));
    }
    // Charger le script
    this._loading[moduleId] = new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      script.src = entry.fichier;
      script.onload = function() {
        if (self._registered[moduleId]) {
          resolve(self._registered[moduleId]);
        } else {
          reject(new Error('Le module ' + moduleId + ' n\'a pas appele PSR_MODULES.register()'));
        }
      };
      script.onerror = function() {
        reject(new Error('Echec du chargement : ' + entry.fichier));
      };
      document.head.appendChild(script);
    });
    return this._loading[moduleId];
  },

  /**
   * Charge tous les modules du manifest
   */
  loadAll: function() {
    var self = this;
    return Promise.all(this.manifest.map(function(entry) {
      return self.load(entry.id).catch(function() { return null; });
    }));
  },

  /**
   * Retourne un module enregistre ou null
   */
  get: function(moduleId) {
    return this._registered[moduleId] || null;
  },

  /**
   * Retourne le manifest (liste des modules declares)
   */
  list: function() {
    return this.manifest;
  },

  /**
   * Verifie si un module est charge
   */
  isLoaded: function(moduleId) {
    return !!this._registered[moduleId];
  }
};

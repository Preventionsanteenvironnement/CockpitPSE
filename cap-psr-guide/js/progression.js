/**
 * Module de suivi de progression pour le guide CAP PSR.
 * Utilise localStorage pour mémoriser les compétences et savoirs
 * déjà traités par l'enseignant dans ses cours.
 */

// Clé utilisée dans localStorage
const STORAGE_KEY = 'psr-progress';

/**
 * Charge l'ensemble des données de progression depuis localStorage.
 * @returns {Object} Objet {id: boolean} représentant l'état de chaque élément.
 */
function loadAllProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Erreur lors du chargement de la progression :', e);
    return {};
  }
}

/**
 * Sauvegarde l'état d'un élément de progression.
 * @param {string} id - Identifiant unique de la compétence ou du savoir.
 * @param {boolean} checked - Vrai si l'élément a été traité.
 */
function saveProgress(id, checked) {
  const progress = loadAllProgress();
  progress[id] = checked;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde de la progression :', e);
  }
}

/**
 * Charge l'état d'un élément de progression.
 * @param {string} id - Identifiant unique de la compétence ou du savoir.
 * @returns {boolean} Vrai si l'élément a été coché, faux sinon.
 */
function loadProgress(id) {
  const progress = loadAllProgress();
  return !!progress[id];
}

/**
 * Initialise les cases à cocher de progression.
 * Recherche tous les éléments `.progress-check input[type="checkbox"]`,
 * restaure leur état depuis localStorage et ajoute un écouteur
 * pour sauvegarder les changements.
 */
function initProgressCheckboxes() {
  const checkboxes = document.querySelectorAll('.progress-check input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    const id = checkbox.id || checkbox.getAttribute('data-id');
    if (!id) return;

    // Restaurer l'état sauvegardé
    const checked = loadProgress(id);
    checkbox.checked = checked;

    // Mettre à jour la classe .done sur le parent
    const parent = checkbox.closest('.progress-check');
    if (parent) {
      parent.classList.toggle('done', checked);
    }

    // Écouter les changements pour sauvegarder et mettre à jour l'affichage
    checkbox.addEventListener('change', function () {
      saveProgress(id, checkbox.checked);

      if (parent) {
        parent.classList.toggle('done', checkbox.checked);
      }

      // Rafraîchir la barre de progression après chaque modification
      updateProgressDisplay();
    });
  });
}

/**
 * Calcule les statistiques de progression.
 * @returns {{total: number, completed: number, percentage: number}}
 *   total      – nombre total d'éléments enregistrés
 *   completed  – nombre d'éléments cochés
 *   percentage – pourcentage d'avancement (arrondi à l'entier)
 */
function getProgressStats() {
  const progress = loadAllProgress();
  const ids = Object.keys(progress);
  const total = ids.length;
  const completed = ids.filter(function (id) {
    return progress[id] === true;
  }).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total: total, completed: completed, percentage: percentage };
}

/**
 * Met à jour l'affichage de la barre de progression et du texte associé.
 * Cible les éléments `.progress-bar-fill` (largeur en %) et
 * `.progress-text` (texte descriptif).
 */
function updateProgressDisplay() {
  const stats = getProgressStats();

  // Mettre à jour la largeur de la barre de progression
  const barFill = document.querySelector('.progress-bar-fill');
  if (barFill) {
    barFill.style.width = stats.percentage + '%';
  }

  // Mettre à jour le texte de progression
  const progressText = document.querySelector('.progress-text');
  if (progressText) {
    progressText.textContent =
      stats.completed + '/' + stats.total + ' savoirs traités – ' + stats.percentage + '%';
  }
}

/**
 * Réinitialise toute la progression après confirmation de l'utilisateur.
 * Décoche toutes les cases et met à jour l'affichage.
 */
function resetProgress() {
  if (!confirm('Êtes-vous sûr de vouloir réinitialiser toute la progression ?')) {
    return;
  }

  // Supprimer les données du localStorage
  localStorage.removeItem(STORAGE_KEY);

  // Décocher toutes les cases à cocher et retirer la classe .done
  var checkboxes = document.querySelectorAll('.progress-check input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
    var parent = checkbox.closest('.progress-check');
    if (parent) {
      parent.classList.remove('done');
    }
  });

  // Rafraîchir l'affichage de la barre de progression
  updateProgressDisplay();
}

/**
 * Exporte un résumé textuel de la progression.
 * Liste les identifiants des éléments cochés.
 * @returns {string} Texte récapitulatif de la progression.
 */
function exportProgress() {
  var progress = loadAllProgress();
  var ids = Object.keys(progress);
  var checked = ids.filter(function (id) {
    return progress[id] === true;
  });

  var lines = [];
  lines.push('=== Progression CAP PSR ===');
  lines.push('Date : ' + new Date().toLocaleDateString('fr-FR'));
  lines.push('');
  lines.push('Éléments traités (' + checked.length + '/' + ids.length + ') :');

  if (checked.length === 0) {
    lines.push('  Aucun élément traité pour le moment.');
  } else {
    checked.forEach(function (id) {
      lines.push('  ✓ ' + id);
    });
  }

  var nonTraites = ids.filter(function (id) {
    return progress[id] !== true;
  });
  if (nonTraites.length > 0) {
    lines.push('');
    lines.push('Éléments restants (' + nonTraites.length + ') :');
    nonTraites.forEach(function (id) {
      lines.push('  ○ ' + id);
    });
  }

  return lines.join('\n');
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
  initProgressCheckboxes();
  updateProgressDisplay();
});

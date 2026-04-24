/* ══════════════════════════════════════════════
   script.js — Camp de District de Sideci (J.E.A)
   Rôle    : Animations au défilement (scroll)
             + interactions dynamiques
   Version : 1.0
   ══════════════════════════════════════════════ */


/* ─────────────────────────────────────────────
   1. ANIMATION DES CARTES AU SCROLL
      (IntersectionObserver)
   ───────────────────────────────────────────── */

/**
 * On sélectionne toutes les cartes du bureau.
 * Chaque carte reçoit la classe "visible" dès qu'elle
 * entre dans la fenêtre visible, ce qui déclenche
 * l'animation CSS @keyframes monterCarte.
 */

const cartes = document.querySelectorAll('.card');

// Délai progressif pour l'effet de cascade
cartes.forEach(function(carte, index) {
  carte.style.animationDelay = (index * 0.07) + 's';
});

// Observateur : détecte quand une carte apparaît à l'écran
const observateur = new IntersectionObserver(
  function(entrees) {
    entrees.forEach(function(entree) {
      if (entree.isIntersecting) {
        // La carte est visible → on lui ajoute la classe
        entree.target.classList.add('visible');

        // On arrête d'observer cette carte (animation unique)
        observateur.unobserve(entree.target);
      }
    });
  },
  {
    threshold : 0.15   // Déclenche quand 15 % de la carte est visible
  }
);

// On observe chaque carte
cartes.forEach(function(carte) {
  observateur.observe(carte);
});


/* ─────────────────────────────────────────────
   2. EFFET HOVER SONORE (optionnel)
      Retour visuel au survol d'une carte
   ───────────────────────────────────────────── */

cartes.forEach(function(carte) {

  // Survol : légère lueur dorée sur le numéro
  carte.addEventListener('mouseenter', function() {
    var num = carte.querySelector('.num');
    if (num) {
      num.style.boxShadow = '0 0 14px rgba(240, 192, 64, 0.7)';
    }
  });

  // Fin de survol : retour au style normal
  carte.addEventListener('mouseleave', function() {
    var num = carte.querySelector('.num');
    if (num) {
      num.style.boxShadow = '0 2px 10px rgba(0, 50, 200, 0.4)';
    }
  });

});


/* ─────────────────────────────────────────────
   3. AFFICHAGE DE L'ANNÉE EN COURS (footer)
      Mise à jour automatique de l'année
   ───────────────────────────────────────────── */

/**
 * Cherche un élément avec l'id "annee" dans le footer.
 * Si tu veux l'activer, ajoute <span id="annee"></span>
 * dans le footer de index.html.
 */
var spanAnnee = document.getElementById('annee');
if (spanAnnee) {
  spanAnnee.textContent = new Date().getFullYear();
}


/* ─────────────────────────────────────────────
   4. CONSOLE — MESSAGE DE BIENVENUE
      (visible dans les outils de développeur)
   ───────────────────────────────────────────── */

console.log('%c⛺ Camp de District de Sideci — J.E.A / Flambeaux-Lumières',
  'color: #f0c040; background: #001466; padding: 6px 12px; border-radius: 4px; font-weight: bold;'
);
console.log('%cPage du Bureau Officiel du Camp · Version 1.0',
  'color: #aaaaff; font-style: italic;'
);

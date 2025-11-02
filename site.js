// ===============================================
// Fichier: site.js
// Gère le défilement fluide et le lien de navigation actif
// ===============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. GESTION DU DÉFILEMENT FLUIDE (SMOOTH SCROLLING) ---

    // Sélectionner tous les liens de navigation (ancres) qui pointent vers une section
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Empêche le saut instantané par défaut
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Défilement fluide vers l'élément cible
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 2. GESTION DU LIEN ACTIF (Intersection Observer) ---

    // Options : On considère qu'une section est "active" lorsque 20% de celle-ci est visible
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    // Fonction de rappel qui s'exécute quand une section entre/sort du viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            
            // Si la section est visible (isIntersecting est vrai)
            if (entry.isIntersecting) {
                
                // 1. Retirer la classe 'active' de TOUS les liens
                document.querySelectorAll('nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });

                // 2. Ajouter la classe 'active' au lien correspondant à la section visible
                const targetId = entry.target.id;
                // Trouver le lien avec l'attribut href correspondant à l'ID de la section
                const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);
                
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // Création de l'observateur
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Cibler toutes les sections principales
    const sections = document.querySelectorAll('#about, #skills, #portfolio, #contact');

    // Démarrer l'observation pour chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    console.log("Les scripts d'interactivité sont actifs.");
});
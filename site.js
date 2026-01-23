document.addEventListener('DOMContentLoaded', () => {
    // 1. Activation de GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const robot = document.querySelector('#robot-bg');

    // 2. ANIMATION DU ROBOT : Il tourne et se déplace légèrement au scroll
    // On utilise un 'scrub' plus élevé (2) pour que ce soit très fluide sur mobile
    gsap.to(robot, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        cameraOrbit: "180deg 75deg 110%", // Tourne à moitié pour montrer le profil
        fieldOfView: "25deg" // Zoom léger pour l'effet cinéma
    });

    // 3. APPARITION DES CARTES : Effet de montée fluide
    const itemsToAnimate = document.querySelectorAll('.glass-card, .skill-card, .portfolio-item');
    
    itemsToAnimate.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%", // Déclenche l'animation quand l'item arrive en bas de l'écran
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power2.out"
        });
    });

    // 4. NAVIGATION FLUIDE POUR LES LIENS
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

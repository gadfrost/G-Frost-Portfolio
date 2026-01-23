document.addEventListener('DOMContentLoaded', () => {
    // On enregistre le plugin GSAP
    gsap.registerPlugin(ScrollTrigger);

    const robot = document.querySelector('#robot-bg');

    // ANIMATION DU ROBOT AU SCROLL
    gsap.to(robot, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1 // Le robot suit doucement le mouvement du doigt
        },
        cameraOrbit: "360deg 75deg 105%", // Il fait un tour complet
    });

    // APPARITION FLUIDE DES CARTES
    gsap.utils.toArray('.glass-card, .skill-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
});

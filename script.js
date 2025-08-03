// Fade-in animation when elements scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Add 'show' class to trigger CSS animation
const style = document.createElement("style");
style.innerHTML = `
.show {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;
document.head.appendChild(style);

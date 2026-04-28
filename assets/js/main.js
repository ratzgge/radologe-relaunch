document.addEventListener("DOMContentLoaded", () => {
    /*
      Scroll Animation
    */
    const elements = document.querySelectorAll(
        '.section-header, .service-box, .service-item, .info-item, .cta-box, .bike-item, .target-statement, .brand-showcase-card'
    );

    elements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px 80px 0px'
    });

    elements.forEach(el => observer.observe(el));


    /*
      Cookie Banner
    */
    const banner = document.getElementById("cookie-banner");
    const button = document.getElementById("cookie-accept");

    if (banner && button) {
        if (!localStorage.getItem("cookieAccepted")) {
            banner.classList.remove("hidden");
        }

        button.addEventListener("click", () => {
            localStorage.setItem("cookieAccepted", "true");
            banner.classList.add("hidden");
        });
    }
});
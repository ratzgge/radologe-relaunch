const elements = document.querySelectorAll(
    '.section-header, .service-box, .service-item, .info-item, .cta-box, .bike-item, .target-statement, .about-preview p'
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
    threshold: 0,
    rootMargin: '0px 0px 120px 0px'
});

elements.forEach(el => observer.observe(el));
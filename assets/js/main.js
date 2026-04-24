const elements = document.querySelectorAll(
    '.service-box, .service-item, .info-item, .cta-box'
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
    rootMargin: '0px 0px 350px 0px'
});

elements.forEach(el => observer.observe(el));
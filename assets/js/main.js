const elements = document.querySelectorAll(
    '.section-header, .service-item, .info-item, .target-statement, .bike-item'
);

elements.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -80px 0px'
});

elements.forEach(el => observer.observe(el));
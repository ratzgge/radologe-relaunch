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

const openingStatus = document.getElementById("opening-status");

if (openingStatus) {
    const dot = document.querySelector(".status-dot");

    const now = new Date();
    const day = now.getDay();
    const minutesNow = now.getHours() * 60 + now.getMinutes();

    const openingHours = {
        1: { open: 16 * 60, close: 19 * 60 },
        2: { open: 16 * 60, close: 19 * 60 },
        3: { open: 16 * 60, close: 19 * 60 },
        4: { open: 16 * 60, close: 19 * 60 },
        5: { open: 16 * 60, close: 19 * 60 },
        6: { open: 9 * 60, close: 12 * 60 }
    };

    const today = openingHours[day];

    if (today && minutesNow >= today.open && minutesNow < today.close) {
        const closeHour = String(Math.floor(today.close / 60)).padStart(2, "0");
        const closeMinute = String(today.close % 60).padStart(2, "0");

        dot.classList.add("open");
        openingStatus.textContent = `Aktuell geöffnet · bis ${closeHour}:${closeMinute} Uhr`;

    } else if (today && minutesNow < today.open) {
        const openHour = String(Math.floor(today.open / 60)).padStart(2, "0");
        const openMinute = String(today.open % 60).padStart(2, "0");

        dot.classList.add("closed");
        openingStatus.textContent = `Aktuell geschlossen · öffnet heute um ${openHour}:${openMinute} Uhr`;

    } else {
        dot.classList.add("closed");
        openingStatus.textContent = "Aktuell geschlossen";
    }
}

const smallStatus = document.getElementById("opening-status-small");

if (smallStatus) {
    const dot = document.querySelector(".status-dot");

    const now = new Date();
    const day = now.getDay();
    const minutesNow = now.getHours() * 60 + now.getMinutes();

    const openingHours = {
        1: { open: 16 * 60, close: 19 * 60 },
        2: { open: 16 * 60, close: 19 * 60 },
        3: { open: 16 * 60, close: 19 * 60 },
        4: { open: 16 * 60, close: 19 * 60 },
        5: { open: 16 * 60, close: 19 * 60 },
        6: { open: 9 * 60, close: 12 * 60 }
    };

    const today = openingHours[day];

    if (today && minutesNow >= today.open && minutesNow < today.close) {
        const closeHour = String(Math.floor(today.close / 60)).padStart(2, "0");
        const closeMinute = String(today.close % 60).padStart(2, "0");

        dot.classList.add("open");
        smallStatus.textContent = `Geöffnet · bis ${closeHour}:${closeMinute}`;

    } else if (today && minutesNow < today.open) {
        const openHour = String(Math.floor(today.open / 60)).padStart(2, "0");
        const openMinute = String(today.open % 60).padStart(2, "0");

        dot.classList.add("closed");
        smallStatus.textContent = `Geschlossen · geöffnet ab ${openHour}:${openMinute}`;

    } else {
        dot.classList.add("closed");
        smallStatus.textContent = "Geschlossen";
    }
}
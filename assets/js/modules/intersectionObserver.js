// Intersection Observer Module
export function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections and cards
    const elements = document.querySelectorAll('.section, .card');
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Update active nav link based on scroll position
    const navObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    };

    const navObserver = new IntersectionObserver(navObserverCallback, {
        rootMargin: '-50% 0px -50% 0px'
    });

    // Observe all sections for nav highlighting
    document.querySelectorAll('section[id]').forEach(section => {
        navObserver.observe(section);
    });
}

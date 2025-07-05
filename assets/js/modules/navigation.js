// Navigation Module
export function initNavigation() {
    const nav = document.querySelector('.nav');
    const toggle = nav.querySelector('.nav__toggle');
    const menu = nav.querySelector('.nav__menu');
    const links = nav.querySelectorAll('.nav__link');

    // Toggle mobile menu
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', 
            toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scroll to sections
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');

                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update URL without scrolling
                history.pushState(null, '', targetId);
            }
        });
    });

    // Handle keyboard navigation
    menu.addEventListener('keydown', (e) => {
        const activeElement = document.activeElement;
        const menuLinks = Array.from(links);
        const index = menuLinks.indexOf(activeElement);

        let nextIndex;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                nextIndex = index + 1;
                if (nextIndex >= menuLinks.length) nextIndex = 0;
                menuLinks[nextIndex].focus();
                break;

            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                nextIndex = index - 1;
                if (nextIndex < 0) nextIndex = menuLinks.length - 1;
                menuLinks[nextIndex].focus();
                break;

            case 'Escape':
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
                break;
        }
    });

    // Header scroll behavior
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const header = document.querySelector('.header');

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

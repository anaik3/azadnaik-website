// Back to Top Module
export function initBackToTop() {
    const button = document.querySelector('.back-to-top');
    const scrollThreshold = 400;

    const handleScroll = () => {
        const scrolled = window.scrollY;
        
        // Show/hide button based on scroll position
        if (scrolled > scrollThreshold) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }

        // Update progress indicator
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / height) * 100;
        button.style.background = `conic-gradient(var(--color-primary) ${progress}%, var(--color-surface) ${progress}%)`;
    };

    // Scroll to top when button is clicked
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
}

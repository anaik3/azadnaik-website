// Contact Form Module
export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Show toast
        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });

        // Hide and remove toast
        setTimeout(() => {
            toast.classList.remove('visible');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        }, 3000);
    };

    const validateForm = () => {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        let isValid = true;

        // Reset previous errors
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        return isValid;
    };

    const showError = (element, message) => {
        element.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
    };

    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        // Let Netlify handle the submission
        showToast('Submitting...');
    });

    // Real-time validation
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', () => {
            validateForm();
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateForm();
            }
        });
    });
}

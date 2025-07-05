// Typed.js Module
export function initTyped() {
    const options = {
        strings: [
            'AI Expert',
            'Data Scientist',
            'ML Engineer',
            'Azure Cloud Architect'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
    };

    new Typed('.typed', options);
}

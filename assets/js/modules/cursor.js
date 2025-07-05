// Custom Cursor Module
export function initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor || window.matchMedia('(hover: none)').matches) return;

    let cursorVisible = false;
    let cursorEnlarged = false;

    const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        if (!cursorVisible) {
            cursor.style.opacity = 1;
            cursorVisible = true;
        }
    };

    const onMouseEnter = (e) => {
        cursorEnlarged = true;
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1.5)`;
    };

    const onMouseLeave = () => {
        cursorEnlarged = false;
        cursor.style.transform = 'translate3d(0, 0, 0) scale(1)';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseMove);
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
        cursorVisible = false;
    });

    // Add hover effect to all clickable elements
    const clickables = document.querySelectorAll('a, button, input[type="submit"], .card');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
    });
}

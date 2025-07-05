// Main JavaScript Module
import { initTheme } from './modules/theme.js';
import { initTyped } from './modules/typed.js';
import { initSearch } from './modules/search.js';
import { initCursor } from './modules/cursor.js';
import { initIntersectionObserver } from './modules/intersectionObserver.js';
import { initNavigation } from './modules/navigation.js';
import { initContactForm } from './modules/contact.js';
import { loadContent } from './modules/content.js';
import { initBackToTop } from './modules/backToTop.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initTheme();
    initTyped();
    initSearch();
    initCursor();
    initIntersectionObserver();
    initNavigation();
    initContactForm();
    loadContent();
    initBackToTop();
});

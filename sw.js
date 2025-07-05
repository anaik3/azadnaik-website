// Service Worker
const CACHE_NAME = 'azad-naik-portfolio-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/assets/css/styles.css',
    '/assets/css/themes.css',
    '/assets/js/main.js',
    '/assets/js/modules/theme.js',
    '/assets/js/modules/typed.js',
    '/assets/js/modules/search.js',
    '/assets/js/modules/cursor.js',
    '/assets/js/modules/intersectionObserver.js',
    '/assets/js/modules/navigation.js',
    '/assets/js/modules/contact.js',
    '/assets/js/modules/content.js',
    '/assets/js/modules/backToTop.js',
    'https://cdn.jsdelivr.net/npm/typed.js@2.0.12',
    'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch new version
                return response || fetch(event.request)
                    .then((fetchResponse) => {
                        // Cache new responses for next time
                        return caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, fetchResponse.clone());
                                return fetchResponse;
                            });
                    });
            })
            .catch(() => {
                // Return offline fallback if both cache and network fail
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html');
                }
            })
    );
});

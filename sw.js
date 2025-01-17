// // The version of the cache.
// const VERSION = "v10";

// // The name of the cache
// const CACHE_NAME = `cycle-tracker-${VERSION}`;

// // The static resources that the app needs to function.
// const APP_STATIC_RESOURCES = [
//   "/",
//   "/index.html",
//   "/style.css",
//   "/script.js",
//   "/manifest.json"
// ];

// // On install, cache the static resources
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open(CACHE_NAME);
//       cache.addAll(APP_STATIC_RESOURCES);
//     })(),
//   );
// });

// // delete old caches on activate
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     (async () => {
//       const names = await caches.keys();
//       await Promise.all(
//         names.map((name) => {
//           if (name !== CACHE_NAME) {
//             return caches.delete(name);
//           }
//         }),
//       );
//       await clients.claim();
//     })(),
//   );
// });


// // Fetch event - Handle network requests and serve cached files
// self.addEventListener('fetch', (event) => {
//   // Bypass cache for dynamic content (e.g., 'profile.html')
//   if (event.request.url.includes('/profile.html')) {
//     event.respondWith(
//       fetch(event.request).then((response) => {
//         return response; // Always fetch from network, don't cache
//       }).catch(() => {
//         // Show fallback message when offline
//         return new Response('You are offline. Please check your network connection.', {
//           status: 503,
//         });
//       })
//     );
//   } else {
//     // Cache other assets for offline use
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         return response || fetch(event.request);  // Fallback to network if not cached
//       })
//     );
//   }
// });

// Install event - Cache important assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('demo-cache').then((cache) => {
      return cache.addAll([
        '/',                // Home page
        '/index.html',      // Index page
        '/styles.css',      // Styles
        '/script.js',       // Scripts
        'title.jpg',        // Images
      ]);
    })
  );
});

// Fetch event - Handle network requests and serve cached files
self.addEventListener('fetch', (event) => {
  // Bypass cache for dynamic content (e.g., 'profile.html')
  if (event.request.url.includes('/profile.html')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        return response; // Always fetch from network, don't cache
      }).catch(() => {
        // Show fallback message when offline
        return new Response('You are offline. Please check your network connection.', {
          status: 503,
        });
      })
    );
  } else {
    // Cache other assets for offline use
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);  // Fallback to network if not cached
      })
    );
  }
});

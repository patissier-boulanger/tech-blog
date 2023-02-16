self.addEventListener('install', function (event) {
  console.log('Hello world from the Service Worker 🤙')
})

self.addEventListener('fetch', function (event) {
  console.log('fetch event started', event)

  //   if (event.request.url.endsWith('.mp4')) {
  //     console.log('url end with mp4', event.request.url, event.request)

  //     event.respondWith(
  //       caches.match(event.request).then(function (response) {
  //         if (response) {
  //           console.log('cache founded', response)
  //           // Found a match in the cache, return it
  //           return response
  //         } else {
  //           // No match in the cache, fetch the video and cache it
  //           return fetch(event.request).then(function (response) {
  //             // Clone the response since it can only be consumed once
  //             const responseToCache = response.clone()

  //             console.log('responseToCache', responseToCache)

  //             caches.open('video-cache').then(function (cache) {
  //               console.log(cache)
  //               cache.put(event.request, responseToCache)
  //             })

  //             return response
  //           })
  //         }
  //       })
  //     )
  //   }
})

// self.addEventListener('fetch', function (event) {
//   console.log('fetch detected', event)

//   if (
//     event.request.url.match('http://localhost:3000/static/videos/introVideo_Dark.mp4') ||
//     event.request.url.match('http://localhost:3000/static/videos/introVideo_Light.mp4')
//   ) {
//     console.log('video fetched detected', event.request)

//     event.respondWith(
//       caches.match(event.request).then(function (cacheResponse) {
//         console.log('cache matched', cacheResponse)

//         if (cacheResponse) {
//           return cacheResponse
//         }

//         return fetch(event.request).then((networkResponse) => {
//           console.log('fetched')
//           // Add the response to the cache and return network response in parallel.
//           caches.put(event.request, networkResponse.clone())
//           return networkResponse
//         })
//       })
//     )
//   }
// })

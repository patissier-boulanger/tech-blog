self.addEventListener('install', function () {
  return
})

self.addEventListener('activate', () => {
  // eslint-disable-next-line no-undef
  clients.claim()
})

self.addEventListener('fetch', function (event) {
  if (event.request.url.endsWith('.mp4')) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          // Found a match in the cache, return it
          return response
        } else {
          // No match in the cache, fetch the video and cache it
          return fetch(event.request).then(function (response) {
            // Clone the response since it can only be consumed once
            const responseToCache = response.clone()

            caches.open(event.request).then(function (cache) {
              cache.put(event.request, responseToCache)
            })

            return response
          })
        }
      })
    )
  }
})

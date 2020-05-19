'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "5aeebd3f24df0daf08f73ec364850571",
"/": "5aeebd3f24df0daf08f73ec364850571",
"main.dart.js": "cf9b83a3d195c140e32801f151580230",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "07aaea39c8ac4068e182f63d0317f3d0",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "8293373079b5d351ff157aca2bd092a8",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/sophia.jpg": "3b8e96b326f7ec46ff5df0012b023586",
"assets/assets/images/john.jpg": "51a3470387263a30e35e4414eef1f7d4",
"assets/assets/images/olivia.jpg": "4cdcd080fdd00244b5db3e33a86ab1c2",
"assets/assets/images/greg.jpg": "b779eca12905edb571bcf6ddaad660b5",
"assets/assets/images/steven.jpg": "0f009026daa99305e0fb7335717a1594",
"assets/assets/images/james.jpg": "402022abfd4b631c3093c0f2054e4a06",
"assets/assets/images/sam.jpg": "cf523967089ecc2735e2ed3b045fe938"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

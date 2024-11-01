'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2ac3cd4e6d5c5691e90939c54d277b79",
"assets/AssetManifest.bin.json": "3e205de1b17749952ea89df6a34e119e",
"assets/AssetManifest.json": "34356739353bffcc2481d7052f69b8e4",
"assets/assets/images/acc.png": "e6ace36066a058a68d1858771e0d38f0",
"assets/assets/images/am.png": "6969e45ee0fad9a9e6869798627a272d",
"assets/assets/images/anna.png": "bed28273ecaffcf83e3be19b74b3b385",
"assets/assets/images/apps.png": "8d8f08e1de9007e8af37f7aa0ad49446",
"assets/assets/images/beams.png": "eabaae9b3ada84164b975c0fdca45228",
"assets/assets/images/BIO.png": "e938979b3e1b55c1abb3ad54ff488668",
"assets/assets/images/capcee.jpeg": "1e5b6a5a7289bf4bdac1521c61e31dc6",
"assets/assets/images/ct.png": "117ee6a0952e02d56745c041dd16f94b",
"assets/assets/images/cyl.png": "7acabd34340ea0159f5b90c1a61e36a9",
"assets/assets/images/d1.png": "4b4f1262d576958771ab53afe15ae91f",
"assets/assets/images/d2.png": "91abc8f4fdc40ea6932084c016feee16",
"assets/assets/images/d3.png": "c48e0f916c5fcc4641e16bde43cf438e",
"assets/assets/images/d4.png": "73d37cd68dc886b1e3cdb345d0c47ca7",
"assets/assets/images/d5.png": "0e693b6555bd3ff6567aa5f0574b302f",
"assets/assets/images/DELIF.webp": "6fdd93c55a50e3ce15efe67519d4c36c",
"assets/assets/images/DELIVERY.webp": "92263ffd57cfeb1bc21b9004771c9610",
"assets/assets/images/ed.png": "8681a88ea0a45b1d4099601192b4c9e2",
"assets/assets/images/ed1.png": "cd120b496ff93594d3fff164bbe302e5",
"assets/assets/images/exacore.png": "49fd7ca726e78886af43d969920e8fcf",
"assets/assets/images/exp.png": "8af952176b25040c2289112415a8ac46",
"assets/assets/images/exp1.png": "49ca0455ac593ede3faa7dc6575e12c8",
"assets/assets/images/exp2.png": "6b7f34a2b17b391b68ee7ddc647406a3",
"assets/assets/images/fig.png": "396dc84f0aa0722bf115ddb567be0462",
"assets/assets/images/fl.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/gem.png": "c0a020f6b513a049208018ab41c3c267",
"assets/assets/images/git.png": "8efd52cd4877c081c22d47cd533af5a1",
"assets/assets/images/gs.png": "35b576f9b8a8925a2818fe33e1c11f3d",
"assets/assets/images/in.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/ktu.png": "900263eed244e34d38c4b8fd2313db0c",
"assets/assets/images/LEAD.webp": "415c387dadb238c4902356a4acad8555",
"assets/assets/images/link.png": "486458d65852a9a8c64e1fae842eb622",
"assets/assets/images/logo.png": "a40fedb1fd6389b4e2ad6fcb944b8630",
"assets/assets/images/nct.png": "24efbeac3b218fd391674094b80d52a9",
"assets/assets/images/nft.png": "281aab271fbbface178f4fba54d250e7",
"assets/assets/images/pic2.png": "f528504867822594788d2c75d4c5cce6",
"assets/assets/images/play.png": "5259b9895a279f9efc7fddc44d24e4d0",
"assets/assets/images/qhance.png": "32b2f706552d96d3cb83b7561c501764",
"assets/assets/images/sc.jpeg": "93ed9975c4c2b111a1db86cada505c90",
"assets/assets/images/sheegr.webp": "14f2a90780613cee380f69942caa6b7b",
"assets/assets/images/sigo.png": "bb818ea10d8199fba627e1eeac0f64bb",
"assets/assets/images/SIGOFUEL.webp": "f370c7b9c3b824ae182822e20951db8a",
"assets/assets/images/skillpng.png": "477d3146a4bf2c95972dd00697b76c51",
"assets/assets/images/sp.png": "609c651c385df2e328d50a7c7ea35368",
"assets/assets/images/splash.jpeg": "5b68f74bc4da714547a460371eb6c4af",
"assets/assets/images/TRACK.webp": "28713d070d2706adac0bcb2452783aa8",
"assets/assets/images/wt.png": "64955b289c3856ad31744d47419f6be2",
"assets/assets/images/zoople.jpeg": "b9c848036ffd79380270fae5cd19483a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4242e141a3c84338880c7e96fb753189",
"assets/NOTICES": "cb8438fb3d5361cc5a3726940d8edda5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "14c2ab6f459f2deaa8ca6d6e1de87225",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "79ded1e58477cf9b9aee0c9e9c917619",
"icons/Icon-192.png": "1771ec6e5499af40f99f5f6bf01c20af",
"icons/Icon-512.png": "2b4b9ccc71d37c42899d34e371d9125d",
"icons/Icon-maskable-192.png": "1771ec6e5499af40f99f5f6bf01c20af",
"icons/Icon-maskable-512.png": "2b4b9ccc71d37c42899d34e371d9125d",
"index.html": "cc326932f6c8f08985376eb5fe5092ae",
"/": "cc326932f6c8f08985376eb5fe5092ae",
"main.dart.js": "0cdde055efb7e8d9c607fe4977e5ecd9",
"manifest.json": "0b2cf3b3a07928bbe3d01ed2bcfaa8b5",
"version.json": "328a18e86ae257b10f9c35845a9cee84"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cd36c02b1ed1334e973a0fc10563af0",
"index.html": "50df8c6ee03ea6ad32145f34fb97f380",
"/": "50df8c6ee03ea6ad32145f34fb97f380",
"main.dart.js": "a74d5c3ab3a95ff70fada15f395a6a6e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87f0ce907950de2e7f2eb24bbdb38552",
"assets/AssetManifest.json": "5324c2b8489d7b2a430fd6168077aaa9",
"assets/NOTICES": "11890f7b0e50330c5ea096aec35db7af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/search-alt.png": "a56dd8d853bb87b27845a12e51a1b4e0",
"assets/assets/images/error-img.gif": "f96d7eaf4c6d84dcbbf4e16a348d1b85",
"assets/assets/images/ic_motorbekas.png": "9dcd0a6dd1ce698678ebdba148474fa2",
"assets/assets/images/ic_motorbaru.png": "26d22bd0ae2104165a3ca204a0c3e573",
"assets/assets/images/bell.png": "e6d4fb5ad7953b8c1b9674bd402abe2c",
"assets/assets/images/login_logo.png": "731428296f1b29ad811db59cd2c13a05",
"assets/assets/images/tick-gif.gif": "fcecaf11e7cdc8f272e3803ef3ed0c93",
"assets/assets/images/ic_durable.png": "692181b70c7a56ff1606e13724ea2c40",
"assets/assets/images/filtertagihan.png": "ff2ffd66886fed481c73250901ea8b87",
"assets/assets/images/network_error.png": "1f7c9f2ce7fe0ae88250e21ceff5fcfb",
"assets/assets/images/sending.png": "bf2442bfd2a85edfbff82ded34496b2d",
"assets/assets/images/ic_mobilbekas.png": "67277086b732588f4514a483cebf9c9b",
"assets/assets/images/instagram.png": "fe682ec05d2f5ae834a77c7517c324f6",
"assets/assets/images/home_partner.png": "7597ee708476468eeca75a3dee608e3e",
"assets/assets/images/vector.png": "c44fe47808d8800db0f4836cb1e3fa01",
"assets/assets/images/ticket.png": "a4b033a4d26dda7b9e549f563c03fd45",
"assets/assets/images/mobil.png": "0c6849adc10df09ba3d7b959fd77c99a",
"assets/assets/images/home.png": "15d7d4e6e831cebb823e6956de2fe870",
"assets/assets/images/person.png": "3677c2b7173106721272965c5694eb6a",
"assets/assets/images/user.png": "84038f89d5712c9df020e76c34a1294f",
"assets/assets/images/ktp.png": "7908be7e05f3d726cd091fa5ac0bb062",
"assets/assets/images/motor.png": "b955d9b371b0ebc1e4a2100ebb22b796",
"assets/assets/images/tidak_lolos.png": "761755856dcc284c06516b2933c8263d",
"assets/assets/images/stnk_combine.png": "39c13789f9855e60f23e14e2a79a628b",
"assets/assets/images/notif.png": "b513a7ae33051921e0f3c3dee845d83a",
"assets/assets/images/ic_danatunai.png": "fa790f6fbb1d732e07fbac4e05489eef",
"assets/assets/images/calculator.png": "04724c9880617d2f29dce0fb78ac8b73",
"assets/assets/images/home_partner_web.png": "08158fbf6f8d1fd21564a6f4f7ec5e7d",
"assets/assets/images/logo_adira.png": "07bb5933bf611959ec788e8ce125902a",
"assets/assets/images/filter.png": "8d53376c8dc14926c3a1c09aaa53087b",
"assets/assets/images/twitter.png": "a793944d5683f27c91dfe4339df57368",
"assets/assets/images/money.png": "55b495a81721837a99ccab52495c0ef3",
"assets/assets/images/logo_ADMF.png": "c9a448fb5a03795b638aa9513598ac23",
"assets/assets/images/today_graph.png": "a7c4127fff747d9c10cf56e0aa75b117",
"assets/assets/images/empty@2x.png": "d304d794991f899a23576833128b6cd8",
"assets/assets/images/diamond.png": "59e00db6b69774e699fd0e4e120f1d81",
"assets/assets/images/yesterday_graph.png": "501c35de74e6d2fae5cd0d8a5c85fd1d",
"assets/assets/images/grupWA.png": "4fb2df5f5596cf6589dbe42da9e4c0db",
"assets/assets/images/ic_asuransi.png": "5e0c20f44a2a68e4b1428c772a19f46b",
"assets/assets/images/grupSMS.png": "e2e18e6bcf8dfef2b1426a8bd4bb4e76",
"assets/assets/images/ic_mobilbaru.png": "288806d1fc91e5cdb7877acbc2759626",
"assets/assets/images/hideshow.png": "2a1288247656070e2eabcb40f1413e51",
"assets/assets/images/logo-ADMF-background-putih.png": "e116e5e7e0ac7fd725b99a95a458285e",
"assets/assets/images/BS.png": "c0b8844c6c84fd676b3eac3286082c01",
"assets/assets/images/icon_arrow_right.png": "bd4cd2f4cebf20addec9ec05bd61c726",
"assets/assets/images/tools.gif": "114e2f12e06455d999d27203fb89fbf2",
"assets/assets/images/grupverifikasi.png": "c05f15f5c209fb39fe3315816c874aee",
"assets/assets/images/pengajuan_ditolak.png": "c41b302b79c413cb0514c5ea98d30d3c",
"assets/assets/images/marker.png": "f4b06041514d92566744505921ce55d6",
"assets/assets/images/grupkunci.png": "88a80d43bce2856a643b181ca0ee4f66",
"assets/assets/images/process.png": "79d92a20da6cd62fe40ee0cb04c9ab3c",
"assets/assets/ad1partner.db": "821996e8a772528b761e44a48d921af8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

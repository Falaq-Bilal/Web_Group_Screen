'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d28e014b4197fdd24363a0c009a8ee5f",
".git/config": "5fb2854e66dc9026d3467e3f43007d0f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ccf0d932ad9f28bbdce88a77cf14bee4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30d36c24d218f107305e223da3943a30",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e888ec6f31a4fe88eb21c97cf894a03c",
".git/logs/refs/heads/master": "e888ec6f31a4fe88eb21c97cf894a03c",
".git/logs/refs/remotes/origin/HEAD": "4aabca7556392b82153cd8f635f113f9",
".git/logs/refs/remotes/origin/master": "76ca06e61bd85f4c3f3815179ec028e6",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0f/2e8f090c355934c99a8b188a90f70dcf9abe60": "a5555adb068ff7b94dd161632b278043",
".git/objects/10/acbe78f2565c15be9db7efee1c7f52224f562b": "1695997ec53db3b68228d8f7bcd575e3",
".git/objects/11/d5ca3ada0569ac037e448d63d1477a8fca6b83": "2c9b0973619d6c59836555a45bc9e323",
".git/objects/19/75dbec605af156605611c571d9de5f8c483720": "ee61639c05419891df1a70678aa81932",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/7d49e93079bfbb648e645044f66a426093f6e3": "947a001ee0e67b400d1523b2df467d51",
".git/objects/24/92f260874def29f47bc7529b3a46306fbfdc4f": "3215cfbe9534c3cc08003a74cf738196",
".git/objects/25/05e779ab072866ba8510267bed0e008a616010": "b3a11076228c4936d815a420bb1ff9db",
".git/objects/26/efbc37ba0c6e5db90107a43d3db9465aacc834": "4853d3c3c69e0b95a7c474a220f50d33",
".git/objects/30/30ff8a8fd6eef22e11d9f2f70ead8c730d54bd": "8f76c8d21d3ceaf53b4ec5bf88088f12",
".git/objects/35/a04c78fedb2151df9737590f47fcc72effed44": "09d1ff637d7ae41cc5e03e7466b3cd20",
".git/objects/3b/4da5aadcafd62c02cab4c15debe93cc0582df9": "e7e95e4d91df2cc99e9c88e60e0736a2",
".git/objects/3c/e6ccb4c46d6d5fc8801cf9abda20baa921682e": "c98518e27b154948ee766074f49caeff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/52a6c99bdcc507538ba9aaf7863373e5c74479": "54d95006d2d107b8c91acf5f14f51dc0",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/60/74f1abe14cfbb3dc3644849c20977c291669c8": "365b25d0034a7e1c244c74265f7099a1",
".git/objects/68/d869d95514c8168f0e640f9a5ecf14185fd677": "18a1f58f430fa52825d6c8cdcb27c138",
".git/objects/69/60cb90578436b77aa474693c291fe6034d9efb": "5080ecb45c249700c2f703f7653d8a0d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e0739e8ff1f514c5f868b6dc93409b457a7282": "34b2944878896948acc4d6ff649bc111",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7a/e82fe1eb106cedf100d15aded3252fd7453be8": "769b19cadc43e2909d845de211cc15d9",
".git/objects/85/d1dd9ed8374832852e43f8c51e4753c4369385": "b5d8168e0c11e91762f23a0f767016ab",
".git/objects/86/809293df4a428bd7b70e003677d050458028b1": "d0853283541e3ebe0058e9d5bed8a499",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e9a6cbb5ad6b9bd295893c145d2bbbc2368af2": "993ec548bc165d119706dd707485552a",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/19cecd340a8e0d81c346dfe52ebabf8bc76832": "9f56c7e9219e3f8b567bb98b6a53a53a",
".git/objects/a8/93dbf8201de34d198217c00dc7115d6472258a": "dc6a3015751604f8211fbb6ea32cafbb",
".git/objects/ad/5a58795d2520cf75734c4c97f9763f130b64cc": "ef43919d2b709adf04d196a2a2e2ed7a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/387928a147a93427b36b4cc83f085555505db4": "b762ee139fb4a85b1f292cd14bec904d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d2/c68041702ca4d923fbb2999695f7f15bba3481": "75ff47274f9df1f66bbb6b08aab77000",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/366967ec22b732748d7df9d901d84f8ac5e718": "f795c09c008b389e581092193def035d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/595741fb623d6f22877ef05ca8f5d887ca462e": "6db551c28a2d85a9b74135c767ae84d1",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/f99f3f1516c71d3dd808996898de531b534af3": "c2f1b9896286dc386afb43d5044553fa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/a761719c0b7d411ed32043a0e3415d66779602": "484fc0e34b7fcafcb4b1e222c68642dd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/fa7542a3784b94efd4c96a9bfb7aae009a3259": "6d2031ce209d70e2a9d0bc46cc2a6e55",
".git/objects/fd/7dcf4fb9f5837dc4ab847d7c69910bebb04696": "c91cc16d1f76505a335183b0a9436967",
".git/refs/heads/master": "d181b04123023d576a4023bba77fa504",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d181b04123023d576a4023bba77fa504",
"assets/AssetManifest.bin": "54b75fde85497d71516c923c9579964a",
"assets/AssetManifest.bin.json": "1e23ec107dc0fba3b16be0da702d490d",
"assets/AssetManifest.json": "555619c6fc5cf33c98651fba6895fb76",
"assets/assets/advanced_privacy.jpg": "c54b893315837deac7102b3f302f9bc7",
"assets/assets/Ali_dp.jpg": "b47bdd9ba5a7cb9954c2c6b7688cd244",
"assets/assets/Arham_dp.jpg": "115846a664dcb9ff579739f7e3696269",
"assets/assets/Azan_dp.jpg": "b96765be3a46d43d414c8466c40fa8b9",
"assets/assets/chatlock.jpg": "d1bf72038fd583719b99d0c279917a17",
"assets/assets/chatlock_button.jpg": "5fa198fa5106589156f5ea7c01faff7d",
"assets/assets/Falaq_dp.jpg": "ba2a6841ac0a532691a73b79ea9512d4",
"assets/assets/Flutter.jpg": "50680a6bda3afcaa60cc9d15aa1a9a54",
"assets/assets/laiba_dp.jpg": "6895a0ae7ca3389371b0c5540f3f0323",
"assets/assets/Misbah_dp.jpg": "6155c5a07f4dc416f3b86344a7f33fd5",
"assets/assets/report_icon.jpg": "aa896fe6792619ba32a1a0628a135225",
"assets/assets/Ubaid_dp.jpg": "6134c2b195d2efe979979f160e8a0174",
"assets/assets/whatsapp_1.jpg": "d51c288f6c79cb39b8cd0476a6125af1",
"assets/assets/whatsapp_2.jpg": "383c59d16b968460f7849bb54423d2ae",
"assets/assets/whatsapp_3.jpg": "17b20fba82fa00b48f7e6fe9785ce571",
"assets/assets/whatsapp_4.jpg": "c4bd48be0ef95777eec49a08d5b9d7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "233bcb23b89ee3e7f67785ce2af984c8",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ed1f432af8964d501569bcb9d64c1bef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3e73a014f379813ae44ef46e27c960c",
"/": "e3e73a014f379813ae44ef46e27c960c",
"main.dart.js": "3d6453f3606f99b3945c52e25d49f7c3",
"manifest.json": "259d696e6384a097bfa34acf086c6f1e",
"version.json": "093262c746c1a2bbace4ef4f115c4002"};
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

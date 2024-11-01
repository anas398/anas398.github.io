'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8e643dd7e12cec2da665664030731067",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23a915ad6401d460e6230ea1b065be8c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "828faf9cf19ae569a3c707935edecd78",
".git/logs/refs/heads/master": "828faf9cf19ae569a3c707935edecd78",
".git/objects/05/5c420086ab68b1c7fc7f90faf96dfbc22b12d3": "0fbd126e016a5f42a04e4716bcb60a4a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/097bb697cbbc79301c93303895d088afb4c684": "535b2c174b2fb7a796615f0ee4c47d62",
".git/objects/0f/52ff25e0d054621891367f8ad4076c607a8ecb": "599ae1612fe40b529ee573e89da6fdb8",
".git/objects/10/59115300075c3c34452240e8c36ff8bbeadf21": "7fc0a28b8288ab7933f20efacc2f7e5c",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/16/2f0c0940ddaaca41893a8ad7333850b53ca286": "4581fc9b1efe9ebe3765564f4fa93d13",
".git/objects/17/22478b3b104069594fb686e856d0025162ed42": "1044e7fc8e4b217079d28e045cbf91f8",
".git/objects/17/382ceb34ac91286d88813cd9c4ebde369293da": "527634b0ba97722f16f361c241eaa136",
".git/objects/1a/881de33f0dfe741b9a0ddbbc8d56dd7dbb0502": "d59487c5549a00bf66c3167daabe9025",
".git/objects/1a/f0ad1eb9300699bdfe38bc0b6d3d18a9d9418f": "fef7d386b5a71d03f2cad9fb08f318fc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/ffe9721a06047167614d5c9f8aeee07909efd6": "f42aebe4e966c39b2e2760bebddd3fce",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/065789e80a89dc1e69f82ac476728af6cc8256": "c86e604a83de8aeaacd3cc1c0775d76b",
".git/objects/28/f2d07fc3f271bc9d00d99171b2d00af45da459": "10f5a5ef0eb46f7935f55be284456982",
".git/objects/2b/e37645b1c0d48a729d3ebad89a3c566ef1b99c": "12a98e74f6e6fb66886a8ce8892e4107",
".git/objects/2e/8bd6f3278d31b3b126415ced5e41edc1299869": "ff4a166620b483aa57e16831436dbead",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/821145f9d27e269f3430eb1b74deaa8e079c8c": "365d44de1122bc5362d59728affd5c8e",
".git/objects/37/d7f8c51e2ff3cc8156d33aaec8eae5714d1dad": "0cef9bb5909becb8b8c878961c82d189",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/2cc40b15ce6658a8a832882c2d38e2c5b78bd3": "7b3f5b3829b16a4731049a2a33013645",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/0cd567802b7ef0de4214fef00e9df15d40983a": "bfadba1ab6979fa125ba62eed2ffb9db",
".git/objects/55/8b9ce8872b847348df620ebd59752a2b9e5473": "56acbf1f2747f7574548ff827f6d7e20",
".git/objects/56/8aaf8d8f924d948ba9878b65a170f816421ade": "46fb19d1c994c924d18e8e258031486d",
".git/objects/56/e3be23ca9af09dea6406ccff5898c11108ddf8": "9690d8229ba9c2f94e326adcc005d353",
".git/objects/59/835e17c41f20bf60df855ee59400ea257a752c": "dcf97c01b09d3bb5ce1ebe827b4dbc73",
".git/objects/5d/16eed581b2d50d873772496f1c8daec98b30be": "75bb24c655ce04ca391931a674d1f9a7",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/69/fecc7809bd0bd6bd57eed3857826ac4fac5e9d": "e8e639747133e8f3394c40e0c602f08e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/0a3cc61b893382f2d153185150f05e1aa9b764": "90335b03f42c725e5cccc26de6f98093",
".git/objects/79/33e88d361f094195039c9923c5a5a2e2cbdc30": "f40c334a5fe27ba75d8a48988fbaf5bc",
".git/objects/7a/517ceca9e1084173b7e754e24fb6d3e1a21540": "65623bec0bde6db99a550ed7407cfbd1",
".git/objects/7b/5fb6738a6defec0e87b0cbd723b85c643bf089": "c9ce9ae9b68318ea5ff3002a9d9807ba",
".git/objects/82/0b51a98434b0179e4296fd5680829299e289d3": "bdb546aff08f77e06203485ba5fc2c69",
".git/objects/82/9c2c32bdafd97011123113dc32736a9a97fef7": "321482cf5a6bee7b097e5ac73bd6ac81",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/b447806ec5ce87c5917421882b71168baf9124": "8e1afb85de7cac5c80ba884476f56b99",
".git/objects/88/f6b4704bd44f1103b73304cb6dff4c097281d9": "e39f456b5796a5df91dce3f3ca52fcca",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/7f6f1399e86f6efed866af66034971ad05a38f": "69c25984fd246be319d938ae70857b0a",
".git/objects/97/46c8d9c17682e9f67c15ddace0f440226237fe": "73f7b538fbe05f6fd6f1bf8a6419b69a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/08049205cda727bd01fdde2a8c91fbd30d4767": "64aab59de7a88d9609fdb188d67aea6e",
".git/objects/9f/3aac1bde71018118ba6ae3941faba841111ee2": "e1225c8e0431ff035261413b0538278f",
".git/objects/9f/5c7df12ab2ada952837c0512fd65f57fc6bf27": "50fd7db2cb0d140c8244b4165f72524c",
".git/objects/a2/72f3fb5ad6eff8eace16b696e8de445d9d1077": "83381d67e147d3abf025081df8445bad",
".git/objects/a8/5a16db6c244825e6f4a4a8293baae03f859019": "988ca3853663e414e2e0518cac20a7f5",
".git/objects/aa/9c3d8a0e70bc47cbcdad5bb1bd728ca2048cfd": "fadef918b7d997747242a90b46e64581",
".git/objects/ad/e7593748ccfceeb8a6799b12363dc35cc10ce3": "6e35f7fb74a84164a5c4fd3a34550e32",
".git/objects/af/25e33cf3c86c6bb2e2478815504960e6144d57": "4fa2d5fdac6aa839155538b40055571e",
".git/objects/b1/412c3dd867493b38684064aef1d8398b57364e": "aa09db817bdbec490d9fb0f48504e20b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/5298da41f335a65722cc1ff9fc89a6e595e69c": "2f314cbd74a650dab9cef3c706013611",
".git/objects/b7/82783ce31e0706658478b003ae84200f4307ec": "c3a71317da2ec5c7373be5ca2ec658ce",
".git/objects/b8/6dfd691499e32399bc5436d1b9bf08b45e85ff": "a7e3c5824f13db8838d2bf28f91cc4cf",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/c51137d4a27ec3943b7b0f0adc142c7b873bbc": "4c47d14e6123f33dd2858019b5a6ceb4",
".git/objects/c5/7c814852efe622f612973dbf5ee996ba2d35f9": "2f48d23870eb0a316844497ce07338a5",
".git/objects/c7/f859a51957580f63fa4c134a31be1bcfad9546": "1659c67c22f7d8bc8e2c77e03c3373fb",
".git/objects/cb/e9a5b7d14eacd7fc3ef7bfbb441c20ccb072dc": "3d51036f2cf2bcf1ea4efa0d348f9ce1",
".git/objects/cd/d0d8df4b8ea4b987bb239a7ca71eb27e6b1199": "f131ef58de22ef00746d4c10bbaf17c3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/b89e896f96324aa36f901afe806cd5fada2d6b": "6adfca03746f228eb4188e6552f8edde",
".git/objects/d1/d39683a3ae09e5c90990fefb6f2754718e2677": "c608061be41547199fe637d2d5ed25a1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/81289635425288ad1ce7ce8ffd399fcf677566": "ca86533f2fa20a8cb5c4ed92c6158428",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/3a492892d178b7a2da060535067327caf6de32": "71fc3b3b993599357dd2ffc218510d72",
".git/objects/d9/949b2ee31b8303968566b69f9ee84025133899": "ba8afa7b80b38a53601adb4ac7864b3d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/2a3ed83498b967573699594cec8ffd5ccb23e0": "d18bf28c7066870892b188edb3ab17fb",
".git/objects/df/32433370244f969c25ccd8653c09facb01e322": "9794284531ac5afee268494d00d9be12",
".git/objects/e1/51f396bdca7c95a0aca2bbf8ac6ffaf3d241c6": "e781e7c113b9111ae8e8f9be062054b5",
".git/objects/e3/55a51b6dcfa5d50ae3e1354523ff4bf63e0198": "aa1c2bce9feb48e58fa44b94688554e8",
".git/objects/f0/28826d26316ced73fba41ff614a2de53fb2c7d": "d0a4fd7c5ccf354f19b98c2e6880ed8c",
".git/objects/f0/5342acdc9ba3ca62a05a0b5d2f351fb5ba76a4": "084a6353fa83fe01af91e3fa8c1faee2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/d64ce7a14975dcc7e604da537399f430bd8621": "eb3c31f90ca87b281769cbd58ce803d7",
".git/objects/f8/45789710e3c44c9d92002bcc067ef45d3a2e5e": "14756c65fedbed2430bff86444ea5e99",
".git/objects/f9/30cb0edd9023fdd55f11c46f866ceb4e880997": "0248f6c3cf6fb04ad3d40ac19aace25d",
".git/objects/ff/75c44b08ab8151cca92d285c4c07e7840cb567": "778ebb7f88c1dba3b6458e10ff35eaa7",
".git/refs/heads/master": "71b81e81b21668aeb1d203ac5478b7ba",
"assets/AssetManifest.bin": "2ac3cd4e6d5c5691e90939c54d277b79",
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
"flutter_bootstrap.js": "19f16a11e198626c06ea3bc871a56ae2",
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

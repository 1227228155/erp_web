'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "74c3c5e58b574969a98c88c790774228",
".git/config": "c786c786418db182f908b8d82645a260",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ba2430d345cbb2888d2b2f92cf64967",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad60bd29e64b9d8fe6bb1a8a56ac12e0",
".git/logs/refs/heads/main": "bf88b8a59944b11ba8d326a213ba08de",
".git/logs/refs/remotes/origin/main": "cff95d2b11c3a3a6aab569021f1d4824",
".git/objects/00/9c9069dbb1070e7f0427d1863f7154c5ef27e9": "f6a0cd1dea15bdf7ba52abf9f5a5cce1",
".git/objects/01/dc2b90f2e11799735bd36053d0e0485ccc31d9": "10d1d8448e22d3e6a80a3974129d15c5",
".git/objects/02/c1930c2394f55009b8db099e9b10e0d5959a88": "7d2fa617a2ebd490ca2f797af93f597b",
".git/objects/03/9ed41ecca0b878c0c41aa04149e245b4d830ad": "8be08de8b5134f436b38ce44b00a5c34",
".git/objects/11/201a153b1c8aecb20b7af9e4373ea3920675a7": "1d29558ba4c788d52b2b94340ee77d85",
".git/objects/12/8b88ce59fee82ba8a09a068cd6acff66eb8b37": "3f727d603c3280d7bc77a4283c8ee89a",
".git/objects/13/e93760876633e326065e765031c81a1b2da728": "3ed8d30fcdb949a368d0194e44855e6c",
".git/objects/16/03ea57aad0e6af6dce83b5d1d617b9a7c33f51": "d80fd0681505e34e3f977c45dfbe1460",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/e5b54368c5a744b58a78af10b52780b16282ee": "21e8648e11083e6d296317ded835b708",
".git/objects/28/1fba175de576f1b98094e33aaf6f6b706d86b6": "f2fe74117a7d034fd11939367b693d79",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2d/f8c9a0de951a6b5e41d4d8a2c72cf98e9f252e": "29e612f6f215c3fb150d886adc025b9e",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/ecf060bfd8a61cd00b81cc1458a364efed376e": "50a995a23cf8420943a950a447e19594",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/3d/88c9816c180f72c2e917ce22ec29849d3d86b6": "60c5cdad07198e3172a26a36a0196b39",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/56/5530b2563947fb952c16689f55fb8a85db0d61": "581fe1d341c026447c41d8c7647d27a4",
".git/objects/5b/35f7e1c7fb7d5fdc5f00e79c2bc5b184e3ab0f": "d6d10dc42ccf9f4c8508a05604ef0ea3",
".git/objects/5b/47d3d6f2648d5ea2fbdc486b9b4ae1d73f5c7a": "4d7861264ee76bf22aa14561407a0423",
".git/objects/5d/8cbe2cfcc426da676df6659ea4b85e420f11d5": "206f03e6eb55aa9976653f4a6661d5b5",
".git/objects/5e/0761cdc1ac82200941ed214ac3072244b6b7ed": "a2057d4c4c31807b68709f337bec690d",
".git/objects/5e/420051de9dabff270b5784182f178d6fe03aab": "94e3f18d75be93720f2afef0ca06ee8e",
".git/objects/5e/6b467f88a906fadfe92637c3911e8f3866dcf8": "9751a14998c7e1f56b888a131dc92968",
".git/objects/5f/4e1c3626d9aa5964e7c3a134404d2fb762ce12": "117950f42c5e3ea7394b530e4ea8de1c",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6c/9db742b71c6508248f6b908cd8ccf562476764": "18e53a2dbd811e9249226ecd3d3db688",
".git/objects/6d/7b77af3dfe2344fa4b926797522ea10ec37482": "f79247371b92ea7cd2e4ec09764cc202",
".git/objects/70/ce2f5f597f8a794d0c3bcd8385f77a6109ac66": "434f98844f76a675db01c141cae8959a",
".git/objects/71/d0a1bf2d0eb23dfc3b2e26b3eac28981a1c99e": "d363df3fd65ddddbf576943edf9e0521",
".git/objects/77/e5f92b418b03a68c076596b3ca50faccb3ee2d": "77e7356b78cd37ea93703a27a1a67037",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/4767ba7b502dc48fd41b7a853274e4b8e4222b": "59087f6fbf2f2ef64200b305b415cd4f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/44db63691a483e968b09d25fa3d1700052af47": "bf22cea3a318734bc28e7beb5c3664ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/9b/3e8688817e665566c9cf2797a79ede8578beed": "8e9a7b6d25cfa30be43ac5559a0a0c7f",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/503b2c6671be7099b3496747ba86b0421b8d57": "a756d94e9282a519c9624a6417317221",
".git/objects/a4/668711c607e8c5fc41e1ed25a9e180043622a9": "eb8d8e68f5af8a95e1d4f8d7977ef796",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ac/5c81344b4a456840ce6e56168ec2c8daaaa106": "dbeb5d574187d5f84eb2389febb3dcbe",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/0008959daad0fa8c01a3de63140071bbdc6966": "67f1c10ad4cd396823f11fae563473ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bf/0265da82d41bd182f15b8b3066752152235a1a": "d0ebaded9d968416f77086ac858d3055",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c8/c1125d61949243da756bcdd5233d4b69cfafeb": "f99fe89ae10f5c74552267c9ad02f42a",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/df/4c7136f3a7c8d0dc85d085dbc7918cf645421b": "cc3b390f77c515a1b63c8fd9881f521d",
".git/objects/df/ca9dab149186fff7140aaf5586891b20959f80": "665647378f4dd1faaace90fe569b86ee",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/89b614680dda7a165aae575ace9311de30d7a1": "86a55cce366c1d52855704305766af9f",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/aea57739df6d999d88d1e15d38fbf914bda54b": "01261a37bb64d9bb2d179756e0bc9c90",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ec/c7fa6210974f5f284397502622ed9a17efdbf0": "fefeb67c1faa317972d41494315a9d7a",
".git/objects/ef/82cc4b63f93a62c13ca7178b73e622c121db49": "9e657526a261fdaee56e00567c1b880d",
".git/objects/fc/ed8a39da31532ad79ecc92d3a63ac6c5e4963c": "c170c14e183e908d6960949eabdf4ada",
".git/refs/heads/main": "738d5fd290f6caf7c93933a846e44611",
".git/refs/remotes/origin/main": "738d5fd290f6caf7c93933a846e44611",
".git/sourcetreeconfig.json": "68b7448c719a1a85b7b3acf6f8253fb6",
"assets/AssetManifest.json": "bc9b16552bd0422ee52126d6f36c7386",
"assets/assets/images/backgrounds/login_bg.png": "771396cd387066398619ebcb1853ddba",
"assets/assets/images/backgrounds/login_r.png": "bea9fb8775c4890345222b9b8814aed5",
"assets/assets/images/default/avatar.png": "322040010f0f0cae6dfa8b84c5503ac8",
"assets/assets/images/default/error_image.png": "bde04fb83c2004060be124cacec49a52",
"assets/assets/images/default/icon_default_goodsdetail.png": "26a75491333c4ad319fa2dbceb675534",
"assets/assets/images/default/login_right.png": "bea9fb8775c4890345222b9b8814aed5",
"assets/assets/images/icons/icon_avatar.png": "2767ce240ece7a2fc0071e45e310730a",
"assets/assets/images/icons/icon_back_black.png": "6c35fc3fb587ec923a55443631eb82ce",
"assets/assets/images/icons/icon_back_w.png": "74da864a323c43508b2e94133a80b92c",
"assets/assets/images/icons/icon_home_bt1.png": "199aae8a2da63a9e74679a2926c1f327",
"assets/assets/images/icons/icon_home_bt11.png": "8b83393d9b1eada757691ee7050b641a",
"assets/assets/images/icons/icon_home_bt2.png": "cd1492cf494bf1464c2e82b80f43c48c",
"assets/assets/images/icons/icon_home_bt22.png": "31e444000b30d12699f4929c2580f563",
"assets/assets/images/icons/icon_home_bt3.png": "b52f506cd15b49cc20f6ae73efd24248",
"assets/assets/images/icons/icon_home_bt33.png": "e5f2cf331895c0c2ba771c806ab3d3e5",
"assets/assets/images/icons/icon_home_number1.png": "95d24d251dfbfefac84b10c76ab1d016",
"assets/assets/images/icons/icon_home_number2.png": "d2a8dfca62d28ab78229834a6548706e",
"assets/assets/images/icons/icon_home_number3.png": "d1141c48526836c0f02dcdcbd1e0cc3d",
"assets/assets/images/icons/icon_home_work1.png": "812229e453390a9e1e46f86e8a3f1c06",
"assets/assets/images/icons/icon_home_work2.png": "77913270e43c0cde0331a7331ccf91f5",
"assets/assets/images/icons/icon_home_work3.png": "938b5e659b9d153b835faf78369523c3",
"assets/assets/images/icons/icon_notice.png": "b76c66ca55c83f1b79bf52c39a4b600e",
"assets/assets/images/icons/icon_phone_clean.png": "619cb8a607fe2aeb555e242d45b9d0ee",
"assets/assets/images/icons/icon_pwd_hide.png": "9660be2d2feb7d2fc57df2d1860abc3c",
"assets/assets/images/icons/icon_pwd_show.png": "c29a31eb0211178a7905368d9c0ce785",
"assets/assets/images/icons/icon_slider_ic1.png": "6ff380ca2ba98f61f309e6f39f96c0a2",
"assets/assets/images/icons/icon_slider_ic2.png": "2afdf01fff2d740df23423ded9a3149c",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a268f4a034f67333f24458eb2b40c5dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cab82a81b9be5f32d593eab4a30a59d1",
"/": "cab82a81b9be5f32d593eab4a30a59d1",
"main.dart.js": "d09b67bd92bd0937450c61ad0d4d15f4",
"manifest.json": "b6f81ef5dda08828c01abf4dfadbc5e6",
"version.json": "69e49e60b3b8d3f1e0aee4e7fab3683f"
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

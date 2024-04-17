// Import Workbox libraries
import { precacheAndRoute } from "workbox-precaching";

// Precache and route all assets
precacheAndRoute([{"revision":"4ecd00e01c69b1109d46e532bab4f861","url":"authorize/index.html"},{"revision":"e0d67a9efc0d75bfb3b71d9c139928cc","url":"authorize/logic.js"},{"revision":"f6c56be7938001df87037446b829848e","url":"css/daemonite-material.css"},{"revision":"c9f9cfbf3450ba7b88b7bde525cca86a","url":"css/global.css"},{"revision":"b3daf50a8304b7c8993d117a8ebd0fe3","url":"css/material-4.1.1-dist/js/material.min.js"},{"revision":"d130f178733149257cffc29274cf7af2","url":"events/add/index.html"},{"revision":"a99674f8df88f4d00fbe4c3600620d6b","url":"events/add/logic.js"},{"revision":"b26e9e0a144699d4f3750f706f0de47d","url":"events/add/style.css"},{"revision":"f1ed1a11e9c2550720ed5f9182724191","url":"events/delete/index.html"},{"revision":"49912f3dad1aff988481e092d68a10cf","url":"events/delete/logic.js"},{"revision":"10a16b1e7ee85e790b4c4e736cd48748","url":"events/edit/index.html"},{"revision":"445b6b74152a843b4b778077bca374fd","url":"events/edit/logic.js"},{"revision":"6fba3a01c156c3c79f162348972e63aa","url":"events/edit/style.css"},{"revision":"98afe2283987b38670fd4c02521d7963","url":"events/index.html"},{"revision":"737816978fcb295ee99dabe90758b66b","url":"events/logic.js"},{"revision":"7d5a9983483446cf7589187bc6ae440e","url":"events/needed/index.html"},{"revision":"d0c203126cb0187f4f108e4ec9f27439","url":"events/needed/logic.js"},{"revision":"012082919764ada46aec28180959d7ea","url":"events/needed/style.css"},{"revision":"2b278adcfb1bc2788b373b498e238a59","url":"events/style.css"},{"revision":"7d5f72f2f428b722fc0cc2a291134a2e","url":"follow/index.html"},{"revision":"66de199452ea26e5ccb8571c20372eb7","url":"follow/logic.js"},{"revision":"86ff907d30cb21d12a159bccb5149b00","url":"follow/style.css"},{"revision":"6127ccbf158f146b583a3588bd1e3bb7","url":"followers/index.html"},{"revision":"eb9897c5ded7ca595f5fac665ad98402","url":"followers/logic.js"},{"revision":"40779d6689d16a334b42d896a455e5b8","url":"followers/style.css"},{"revision":"30a5787b61861f928208ffe92f6e2f54","url":"following/index.html"},{"revision":"6559dce454bb1f1fd8f9ee29d300f26f","url":"following/logic.js"},{"revision":"28cba14e1762e5c1d7077280f47621be","url":"following/style.css"},{"revision":"b77bec378f688c0de95474ff9288886b","url":"followup/index.html"},{"revision":"468c41455c3f216a021bf58a90e1e7e2","url":"followup/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"followup/style.css"},{"revision":"90ec0388c71e581a53d70bdc8a1953c1","url":"i/alt/index.html"},{"revision":"e9a9a6bf87cdf52b6a93df27f62ee20a","url":"i/alt/logic.js"},{"revision":"4f4c4ae607ef7bcc6e66f1721eb65610","url":"i/alt/style.css"},{"revision":"cf499cb0a437c1ba024e83d46c8b5e1e","url":"i/index.html"},{"revision":"4d9b9a1afcff8d80fbd377ce6d9b6695","url":"i/logic.js"},{"revision":"00abd565f6c29070664384faff2b2ef4","url":"i/sender-notification-email.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"index.css"},{"revision":"8c817e3a8d109426da38c7793603ff16","url":"index.html"},{"revision":"71f68e09c92c54339b04324d737ed564","url":"index.js"},{"revision":"66646d56cb31fa7b72bb64e898c2ab87","url":"invites/index.html"},{"revision":"ad8a99921a2bd95062e9cbbd26e8cea3","url":"invites/logic.js"},{"revision":"765fd56fe2deb0b4dd7d164f519eb7e6","url":"invites/style.css"},{"revision":"b5403a3e4eb21ee963207fb84bfa520a","url":"js/cdn.jsdelivr.net_npm_datebook@8.0.0_dist_datebook.min.js"},{"revision":"415ea4fbd13b4a5b82fd147710709ae2","url":"js/cdnjs.cloudflare.com_ajax_libs_croppie_2.6.5_croppie.min.css"},{"revision":"971e2b863ccdb5d43003cdc5f4e0d923","url":"js/cdnjs.cloudflare.com_ajax_libs_localforage_1.10.0_localforage.min.js"},{"revision":"5c3d21324208bc391e661eca7f6347fb","url":"js/cdnjs.cloudflare.com_ajax_libs_moment-timezone_0.5.34_moment-timezone-with-data-10-year-range.min.js"},{"revision":"5c158b940513c7dc2ebd901455e9b63d","url":"js/cdnjs.cloudflare.com_ajax_libs_moment.js_2.29.1_moment.min.js"},{"revision":"83fb8c4d9199dce0224da0206423106f","url":"js/cdnjs.cloudflare.com_ajax_libs_popper.js_1.14.3_umd_popper.min.js"},{"revision":"99b0a83cf1b0b1e2cb16041520e87641","url":"js/code.jquery.com_jquery-3.3.1.slim.min.js"},{"revision":"0099f79501eafbe2fd0d5457d8479e2e","url":"js/enforceaccess.js"},{"revision":"b676d1739a90e9a1b5f41c9c9dce80f1","url":"js/getEventFromDB.js"},{"revision":"62697fbf23175de108cf980bfcb70bab","url":"js/getMobileOperatingSystem.js"},{"revision":"f4210a40ebc48133facf152988f7292c","url":"js/getRelativeDate.js"},{"revision":"dc5b1ab88ae4702645c91d7410ce3645","url":"js/global.js"},{"revision":"6b7fb2ee130535419a67afb198f41c2b","url":"js/intl-tel-input-17.0.0/css/intlTelInput.min.css"},{"revision":"9f9f0dcd6d9f29b53354bb582a04b38b","url":"js/intl-tel-input-17.0.0/js/data.min.js"},{"revision":"af98816dc416ce47a73b1c9b36cd6bfd","url":"js/intl-tel-input-17.0.0/js/intlTelInput.min.js"},{"revision":"8f3a2154b225b6257161c4dfc9b89c9c","url":"js/intl-tel-input-17.0.0/js/utils.js"},{"revision":"36cb0e834d725f98259a9decf3b173f9","url":"js/isDateInPast.js"},{"revision":"05e28e3f2f06a1bb057a97206cbd3009","url":"js/linkifyjs/linkify-html.min.js"},{"revision":"9fc36c3bca2d59c7d4304f5ab99bfdc3","url":"js/linkifyjs/linkify.min.js"},{"revision":"a531d97d539c3473b9059841ddda77e8","url":"js/olderbrowsers.js"},{"revision":"ea58889c516e953d6e78ca4834f834c4","url":"js/qrious/qrious.min.js"},{"revision":"9efba70d5adce9e3b93fe643abcb204a","url":"js/relativeTimeFormatPolyfill.js"},{"revision":"eb5fac582a82f296aeb74900b01a2fa3","url":"js/stackpath.bootstrapcdn.com_bootstrap_4.1.1_js_bootstrap.min.js"},{"revision":"72a1cceecfbe04e12aec632f966eb680","url":"js/sync.js"},{"revision":"7258a1d9d5f038e4e941278b10b64b76","url":"js/to-title-case.js"},{"revision":"02894d91a7958a583eaabe0d80479267","url":"login/forgot/index.html"},{"revision":"e7b30b3cc4031010f1187854dcc3aad4","url":"login/forgot/logic.js"},{"revision":"d39d35026d53368ce0ffbd423bb35348","url":"login/index.html"},{"revision":"b243046da5b4fd66fa38bde2dc5b6d1d","url":"login/logic.js"},{"revision":"5c2280e32ac39e571a41ce38d69e9ac1","url":"login/reset/index.html"},{"revision":"850c147b312120562bc8be89abafc436","url":"login/reset/logic.js"},{"revision":"b063363dce207e98befe89b5ba2e020d","url":"logout/index.html"},{"revision":"618b3145f5af279fd5897955ec80ebf4","url":"logout/logic.js"},{"revision":"ee6719fb4ce72f75315fc745b6acb3b5","url":"profile/index.html"},{"revision":"c7cf8e8717209cacf99e6219d7cf0281","url":"profile/logic.js"},{"revision":"0ce47de0c2913994aa2f7ec3a18a84c9","url":"profile/photo/index.html"},{"revision":"098d917e95c9524ddbaffa9f6f07f200","url":"profile/photo/logic.js"},{"revision":"661cde053055ef74de534d3e04edcaa1","url":"profile/photo/style.css"},{"revision":"61d45ddf1a5447bf85e65115c2c81dad","url":"profile/style.css"},{"revision":"a24cb5962308ea08ea0e6b206ea2e5c5","url":"r/index.html"},{"revision":"26df90e92ee9d87482298138d7639408","url":"r/logic.js"},{"revision":"0a579f9c510d200f2eb225d8a52b01bb","url":"r/style.css"},{"revision":"cc43ae7420b4fc8ccb063e6a3021040d","url":"register/confirm/index.html"},{"revision":"95c60ea582b34e756cad7076c66245e0","url":"register/confirm/logic.js"},{"revision":"ffd61034b846d03559130364302db494","url":"register/index.html"},{"revision":"d11f72221d9ec47da17e57da41ed3388","url":"register/logic.js"},{"revision":"9df4810de1904722cb7ccc90aaff961f","url":"register/style.css"},{"revision":"c142edb96fa285f42b990d57f1b4a8ba","url":"send/index.html"},{"revision":"262ec50daa69aa05b2c588b6ede20d8a","url":"send/logic.js"},{"revision":"a8148b383199fd29bfa065320f79b5e8","url":"send/style.css"},{"revision":"76458110582756c1c529a4501912040d","url":"settings/index.html"},{"revision":"b264a6a211960cea92960103e0f39232","url":"settings/logic.js"},{"revision":"3e9ea81837f9f320d64b2731e8d7f709","url":"settings/style.css"},{"revision":"f54a34df3c83414a2a9f3da81d0014c7","url":"templates/default/index.css"},{"revision":"65eb2232bf51f6117366863f30c0137d","url":"templates/default/index.html"},{"revision":"25f3e8d1dd9347decc0b961047ce0a33","url":"templates/default/index.js"},{"revision":"b196aafce2133810d53255d75a270200","url":"u/e/index.html"},{"revision":"2f663e10d05a281e1178669f49a6f7fb","url":"u/e/logic.js"},{"revision":"477e4d30325ce8a09d83388024af2262","url":"u/e/style.css"},{"revision":"7b45de7224cc7ba163723e5cfac30fba","url":"u/index.html"},{"revision":"9fdc6ae0e95a683caf25ae17d8219b83","url":"u/logic.js"},{"revision":"3497b4f549ca576769576fa07d9bc281","url":"u/style.css"},{"revision":"76d0d4980cdae5460a47a733b86d3aeb","url":"unsubscribe/done/index.html"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"unsubscribe/done/logic.js"},{"revision":"934c4dff43620d29af5c3bef2fe178af","url":"unsubscribe/done/style.css"},{"revision":"f8e65262cd4f6da3c723b35af5223c83","url":"unsubscribe/index.html"},{"revision":"45271c9935955b515e9551d12cbaf13c","url":"unsubscribe/logic.js"},{"revision":"38a96d0ca0837c8388c7cabc4488f08f","url":"unsubscribe/style.css"}]);

// Add runtime caching
self.addEventListener("fetch", (event) => {
  if (
    event.request.url.includes("/i18n/") &&
    event.request.url.endsWith(".json")
  ) {
    event.respondWith(
      caches.open("translations").then((cache) => {
        return cache.match(event.request).then((response) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  }
});

// Add push event listener
self.addEventListener("push", (event) => {
  const title = "Push Notification";
  const options = {
    body: event.data.text(),
    icon: "./android-chrome-192x192.png",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click event
self.addEventListener("notificationclick", (event) => {
  console.log(event);
  event.notification.close();
  event.waitUntil(clients.openWindow("https://example.com"));
});

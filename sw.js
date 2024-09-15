importScripts("/third_party/workbox/workbox-v7.0.0/workbox-sw.js");

workbox.setConfig({
  debug: false,
  modulePathPrefix: "/third_party/workbox/workbox-v7.0.0/",
});

// Use workbox methods
workbox.precaching.precacheAndRoute([{"revision":"2525ba72ea472c55bf8b2153e9ea9f11","url":"_assets/img/animated_checkmark.gif"},{"revision":"acc8530b443802f974d029539da39847","url":"_assets/img/avatar_female.svg"},{"revision":"0a2201888b5e03738e2b919b3b469530","url":"_assets/img/avatar_male.svg"},{"revision":"3ddffa763bd24c898b797b165834a8b4","url":"_assets/img/logo-opengraph.png"},{"revision":"8c9a1bc2f5a27616a0edb3527dd767b3","url":"_assets/img/logo.svg"},{"revision":"8ab86a11d303d131fd6e1c0acc2a08ac","url":"_assets/img/shim.png"},{"revision":"5fd2fe001e2615b8dacec9db8fbe7aaf","url":"_assets/img/spinner.svg"},{"revision":"7b5896d171ff93deab4472ff050d5e60","url":"_assets/img/whatsapp/Digital_Glyph_Black.svg"},{"revision":"716a6dcc4c702080f3f494e4b2dc0c15","url":"_assets/img/whatsapp/Digital_Glyph_Dark_Green.svg"},{"revision":"a9ea329e7708e29d75164eac28c08fd5","url":"_assets/img/whatsapp/Digital_Glyph_Green.svg"},{"revision":"889eff3b7fde633eba6059c68a0afac0","url":"_assets/img/whatsapp/Digital_Glyph_White.svg"},{"revision":"4a9abc4412f5071069695ede3991928e","url":"_assets/svg/icons/account_circle.svg"},{"revision":"f997137f7b7f30b40e7ad4f743d72e9b","url":"_assets/svg/icons/addToCalendar-Apple.svg"},{"revision":"7e50c5505b877c122d0db9e041d91ce0","url":"_assets/svg/icons/addToCalendar-Google.svg"},{"revision":"8f40d9f9ba96803443d2118e4304cfc6","url":"_assets/svg/icons/addToCalendar-iCalFile.svg"},{"revision":"ef51267cbcd69e500ea2e2be17303c8e","url":"_assets/svg/icons/android.svg"},{"revision":"4cc5017774be1879a5657059edaca26f","url":"_assets/svg/icons/apple.svg"},{"revision":"04ca9eaafb7c2e4d46c6044f77ff20d8","url":"_assets/svg/icons/calendar.svg"},{"revision":"a4572fc955153ccdc7f602a4ab52e141","url":"_assets/svg/icons/camera.svg"},{"revision":"3cd34752163855b363dab61cefc3b95b","url":"_assets/svg/icons/chevron_right.svg"},{"revision":"7d170ab99cb1c6449445f0a90b842ea8","url":"_assets/svg/icons/close.svg"},{"revision":"8c6575d862d6610c5b3f58858158ebd6","url":"_assets/svg/icons/contact_support.svg"},{"revision":"9ed79be8b0a1f61194e99fbcb3695544","url":"_assets/svg/icons/delete-grey.svg"},{"revision":"261a1fca44f02dc7a319edaa79147cc2","url":"_assets/svg/icons/delete-red.svg"},{"revision":"87cbed57a6356fb4f067460715b46b54","url":"_assets/svg/icons/delete.svg"},{"revision":"c9d9b29fdf2ac8ba0fa5dc5ea7ecf881","url":"_assets/svg/icons/edit-grey.svg"},{"revision":"fd89e44692c100f28ced3f49e881d871","url":"_assets/svg/icons/edit-red.svg"},{"revision":"e71a1aaca1dc8c17d283d74f1f21400d","url":"_assets/svg/icons/edit.svg"},{"revision":"5b6bd9c9d11078eae6df6450aa9cc3ef","url":"_assets/svg/icons/email.svg"},{"revision":"d5f6b185c3072ce8de707b6c69f65e92","url":"_assets/svg/icons/event.svg"},{"revision":"66a7ed638c113b8b4321ae9077d7e812","url":"_assets/svg/icons/home.svg"},{"revision":"52b07740baf806d0df5115f657163df8","url":"_assets/svg/icons/insert_invitation.svg"},{"revision":"a12db7022c887007c7181b95e579444f","url":"_assets/svg/icons/list_alt.svg"},{"revision":"c9080957b2bc8063537c27ef1fc40518","url":"_assets/svg/icons/logout.svg"},{"revision":"14797d0c4dc33079cca993291dc49e5b","url":"_assets/svg/icons/menu.svg"},{"revision":"022119977c400d263b66d1f9516a71be","url":"_assets/svg/icons/nav-arrow-back-light-filled.svg"},{"revision":"022119977c400d263b66d1f9516a71be","url":"_assets/svg/icons/nav-arrow-back-light.svg"},{"revision":"70f10b44f82c878dc16e72a0741e122e","url":"_assets/svg/icons/nav-arrow-back.svg"},{"revision":"bc36cdcfd07133172d6b84755ec3e1d6","url":"_assets/svg/icons/nav-arrow-forward.svg"},{"revision":"5fb770fd287493ceb9942a23ad44b213","url":"_assets/svg/icons/nav-follow-my-invites-light-filled.svg"},{"revision":"b1ec15de7ca7e78c707940432acfd70d","url":"_assets/svg/icons/nav-follow-my-invites-light.svg"},{"revision":"740682a37448269d3a2b761ab64bb168","url":"_assets/svg/icons/nav-followup-list-filled.svg"},{"revision":"f27608b9200d6f7529e8dc11b90bb800","url":"_assets/svg/icons/nav-followup-list-light-filled.svg"},{"revision":"b76b0019efc6f078ce92ca4caefa7955","url":"_assets/svg/icons/nav-followup-list-light.svg"},{"revision":"03a3c19ca23b5d9ad3d2ee2a844007c8","url":"_assets/svg/icons/nav-followup-list.svg"},{"revision":"ed43f3a5c545e9fef626341bc934290b","url":"_assets/svg/icons/nav-home-filled.svg"},{"revision":"4b9502e0954fccdeeec559d6c083dd93","url":"_assets/svg/icons/nav-home-light-filled.svg"},{"revision":"f66111c748633fe8047d6f538e1e6cf2","url":"_assets/svg/icons/nav-home-light.svg"},{"revision":"a245c5e889fa2289fd9bab9f0e60dff8","url":"_assets/svg/icons/nav-home.svg"},{"revision":"2ca808c830ef68e6cce5068876939bf5","url":"_assets/svg/icons/nav-my-invites-filled.svg"},{"revision":"ae432f18be5c4fa129d4a66c0335be4c","url":"_assets/svg/icons/nav-my-invites-light-filled.svg"},{"revision":"b1ec15de7ca7e78c707940432acfd70d","url":"_assets/svg/icons/nav-my-invites-light.svg"},{"revision":"9fd6787784835a9c7eb72a2cb0ab4a93","url":"_assets/svg/icons/nav-my-invites.svg"},{"revision":"ae432f18be5c4fa129d4a66c0335be4c","url":"_assets/svg/icons/nav-send-an-invite-filled.svg"},{"revision":"539ad7392674b0f0bc1c4ad2a713e955","url":"_assets/svg/icons/nav-send-an-invite-light-filled.svg"},{"revision":"6bab5cb9f481b68964b61dd7e34de287","url":"_assets/svg/icons/nav-send-an-invite-light.svg"},{"revision":"30c04f3f440fcfd203f3b0153f4b03b2","url":"_assets/svg/icons/nav-send-an-invite.svg"},{"revision":"7dab3b33b8c272eeb8ac49a7a310c355","url":"_assets/svg/icons/people.svg"},{"revision":"b72b91c6272f9d9feaaecc3a7cd73aed","url":"_assets/svg/icons/phone.svg"},{"revision":"8c19cd35546b6b9f7a2cf2be8fde5502","url":"_assets/svg/icons/place.svg"},{"revision":"90b63e09efe0e9f12476e337577ab04e","url":"_assets/svg/icons/reload-white.svg"},{"revision":"69527283a2f3604ca7e6e7f8c6b25d7c","url":"_assets/svg/icons/send.svg"},{"revision":"d5b3bfbb9dcb6eb099983522d0188542","url":"_assets/svg/icons/settings.svg"},{"revision":"a8e54483dc7ba55714a02e54dc1f0c3c","url":"_assets/svg/icons/sms.svg"},{"revision":"8b26285addb186122c70c1ffdbe323db","url":"_assets/svg/icons/world.svg"},{"revision":"d5ecc246081536a5282e80d2b77ac782","url":"a/i18n/en.json"},{"revision":"836cdbe6c4734d84af92b9df89526753","url":"a/index.html"},{"revision":"f78b7f4627c2fe20ba428ca63b42e1d9","url":"a/logic.js"},{"revision":"3bf4077761a68bb19004e7c97ea724a7","url":"a/me/i18n/en.json"},{"revision":"556ef7d3ed0ac252cd6ca013f4c49f51","url":"a/me/index.html"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"a/me/logic.js"},{"revision":"89f8ed6068f2cbecc37bd6d86a8fb7cd","url":"a/style.css"},{"revision":"360ab25ac2f20bc3ef721cf2f19cecc1","url":"about/i18n/en.json"},{"revision":"2dfa316b21908bf712b6648e3933049e","url":"about/index.html"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"about/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"about/style.css"},{"revision":"47048b9caa7dcd2e1b99d2e92c6a6944","url":"android-chrome-192x192.png"},{"revision":"3884fb820055f852ead922bbb5baf1c1","url":"android-chrome-512x512.png"},{"revision":"2f6ba3afa7265b79699c8707a8c9aab2","url":"apple-touch-icon.png"},{"revision":"46b9a2d1a8bf123a906eb395c676af76","url":"authorize/i18n/en.json"},{"revision":"5f916c290ef639a7e0fdc4e8ce664328","url":"authorize/index.html"},{"revision":"6c7b82e436f0581f91d18ca4531ec97d","url":"authorize/logic.js"},{"revision":"b7d83496a34219fb309436e4ef4f1f38","url":"authorize/me/i18n/en.json"},{"revision":"9312d614d76e81efe2cdaa8af64175b2","url":"authorize/me/index.html"},{"revision":"4e9b661cfc53c6b75a6a8911d05c05dd","url":"authorize/me/logic.js"},{"revision":"4847efbcb9dca26f70d10601075e36ea","url":"authorize/me/style.css"},{"revision":"3d56820dac63ecc1765f85525c00041e","url":"authorize/notification-email.html"},{"revision":"8c85cef495f68f89a182fa14cba97596","url":"authorize/style.css"},{"revision":"9b8d43e97d8d3210f3d814c97ddad62d","url":"authorize/user/i18n/en.json"},{"revision":"8cc606bbb62a7e04ed587b470a8c5218","url":"authorize/user/index.html"},{"revision":"c117bf8fe49c37080c73b2630b2b70d3","url":"authorize/user/logic.js"},{"revision":"c2b4083cb4f771f03661484207091657","url":"authorize/user/style.css"},{"revision":"30417f305cb95e91035f2436ed4e9e64","url":"css/daemonite-material.css"},{"revision":"f38bb5c0af34ec64a58951014d406347","url":"css/global.css"},{"revision":"b3daf50a8304b7c8993d117a8ebd0fe3","url":"css/material-4.1.1-dist/js/material.min.js"},{"revision":"88355d870ae7ec64119f34e28714fbc8","url":"events/add/i18n/en.json"},{"revision":"68a4df7d6fce82d767cda10d546292eb","url":"events/add/index.html"},{"revision":"bdc9783ce5a33c0bbb95e5803331467c","url":"events/add/logic.js"},{"revision":"4beca3519bbc512c7d217054b31137d4","url":"events/add/style.css"},{"revision":"0046e7a5572efe22ac49b641b2953c25","url":"events/delete/i18n/en.json"},{"revision":"100eda73a09cceb7c74bc6442f153166","url":"events/delete/index.html"},{"revision":"49912f3dad1aff988481e092d68a10cf","url":"events/delete/logic.js"},{"revision":"bd07fffadcffe9d54c87da99c1592968","url":"events/edit/i18n/en.json"},{"revision":"92b727fbafadd49b9d1636db98288dc6","url":"events/edit/index.html"},{"revision":"3b2be1440ce325f750f7a6d466a71d20","url":"events/edit/logic.js"},{"revision":"45a4db0f88c73b25064f4dc5e43d8131","url":"events/edit/style.css"},{"revision":"3b20ef670253fb3f65d633cecc35fd1d","url":"events/i18n/en.json"},{"revision":"deb00f5aa42132b220af107db9da230f","url":"events/index.html"},{"revision":"fd6c74d8c4710a70b4aaf2ffcc4e3a3b","url":"events/logic.js"},{"revision":"113e1eb619a892735947efeb87e51b03","url":"events/needed/i18n/en.json"},{"revision":"f41c52cbbfc369bd3dac09a6543566a4","url":"events/needed/index.html"},{"revision":"d0c203126cb0187f4f108e4ec9f27439","url":"events/needed/logic.js"},{"revision":"012082919764ada46aec28180959d7ea","url":"events/needed/style.css"},{"revision":"2b278adcfb1bc2788b373b498e238a59","url":"events/style.css"},{"revision":"83b47baaedfab34c9861008fb2276ff0","url":"favicon-16x16.png"},{"revision":"2d2e271ef3b25b898cd3863e44dec06c","url":"favicon-32x32.png"},{"revision":"3d81b215070cee2c23c1a394ca6db344","url":"follow/i18n/en.json"},{"revision":"8322098b0f7ff743636d287e5015685a","url":"follow/index.html"},{"revision":"c7742427f1da019b2d50affa79f809ea","url":"follow/logic.js"},{"revision":"c41499a1fd1be3b78fcf5c54dbb3751f","url":"follow/style.css"},{"revision":"60f3cb866abe66604e85e8797b2925fd","url":"followers/i18n/en.json"},{"revision":"ad12f679dfb93a59fb7754d6654efd69","url":"followers/index.html"},{"revision":"eb9897c5ded7ca595f5fac665ad98402","url":"followers/logic.js"},{"revision":"40779d6689d16a334b42d896a455e5b8","url":"followers/style.css"},{"revision":"cb68e875f38605eb04aafb40d41151e6","url":"following/i18n/en.json"},{"revision":"4908391e8fe611731645a7604e55229d","url":"following/index.html"},{"revision":"ab79d99443a19b7374202b84c4202b14","url":"following/logic.js"},{"revision":"28cba14e1762e5c1d7077280f47621be","url":"following/style.css"},{"revision":"452fc4cfb8c6c8c347c3d791c7f9ffd5","url":"followup/i18n/en.json"},{"revision":"b0121d15e299aad053f1ff30c2b4ea82","url":"followup/index.html"},{"revision":"418117af8a8ba486619492f4c173ed81","url":"followup/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"followup/style.css"},{"revision":"5e8eb8620c111fee4bff7aded6f39cfa","url":"i18n-global/en.json"},{"revision":"d0eb4706efdc8bdf4d8e911e599dec34","url":"i18n-names/en.json"},{"revision":"f7e64fd8f99dd45a0dba1b02f6a933b6","url":"i18n/en.json"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"index.css"},{"revision":"4e890062563e8f9f44b7bd7dc7fcaa68","url":"index.html"},{"revision":"159366bd8074b35442d1b051a96a37f4","url":"index.js"},{"revision":"739b46db4bf1f6e977ea7aa4d324d66a","url":"install/android/i18n/en.json"},{"revision":"6b7011b00b6685cbff926a9f0deecdcb","url":"install/android/img/en/step-2-click-on-3-dots.png"},{"revision":"e83e23f2353999adb4e3f08a11770b69","url":"install/android/img/en/step-3-browser-menu-options.png"},{"revision":"de185372e225ef849ec25d9d87cd97f1","url":"install/android/img/en/step-4-install-vs-shortcut.png"},{"revision":"2ac133bf9522bfc1f36d163c4c91c681","url":"install/android/img/en/step-5-app-tray-after-installation.png"},{"revision":"266a963f308e64460d3ab61ec6dcd815","url":"install/android/img/en/step-6-installed-icon.jpg"},{"revision":"d5860a1b152243fd38670169ff7ef560","url":"install/android/index.html"},{"revision":"6d9c72263e32fe83c21b5a0ae7b560af","url":"install/android/logic.js"},{"revision":"11db9bfc5371e5ad94e82cbdf5b871e3","url":"install/android/style.css"},{"revision":"95d86c71b99a103e6f9939f62f07893e","url":"install/i18n/en.json"},{"revision":"58ce3f321505174d3947bd901b54c89e","url":"install/index.html"},{"revision":"2c30862bada1a20b59458137054e553f","url":"install/ios/i18n/en.json"},{"revision":"419581e24f019bfd2a8c392b095b6f56","url":"install/ios/img/en/ios-menubar-highlighted.jpg"},{"revision":"9a0ab3426a2c2709244eb46d8130554c","url":"install/ios/img/en/ios-menubar.jpg"},{"revision":"1ee32fb732d7ff3fad4f533651e641b9","url":"install/ios/img/en/ios-share-sheet-final-highlighted.jpg"},{"revision":"49c6faff8d7e89be3387b3cfaeaeb23c","url":"install/ios/img/en/ios-share-sheet-final.jpg"},{"revision":"e9bba414fa03281d0c2d27841e6b9bc6","url":"install/ios/img/en/ios-share-sheet-highlighted.jpg"},{"revision":"b2e2ddb076723a110a37149ba79ad7f5","url":"install/ios/img/en/ios-share-sheet.jpg"},{"revision":"e3e4ff0e15e7f8a4f95acfcbddc61ed2","url":"install/ios/index.html"},{"revision":"e622268b69197422b58f39bf9902700b","url":"install/ios/logic.js"},{"revision":"11db9bfc5371e5ad94e82cbdf5b871e3","url":"install/ios/style.css"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"install/logic.js"},{"revision":"b2670b4e5ff7b6041a68c2cab6f761c7","url":"install/style.css"},{"revision":"96eb765a0b1c4566193e23689954ce95","url":"invites/i18n/en.json"},{"revision":"73ed1376357228d46dcaa350a5c67fcc","url":"invites/index.html"},{"revision":"93ef43570c12b7ff5586b86ee53636e2","url":"invites/logic.js"},{"revision":"d28e7573ad3626102060a0c8d9aa8aed","url":"invites/style.css"},{"revision":"eb5fac582a82f296aeb74900b01a2fa3","url":"js/bootstrap.min.js"},{"revision":"99b0a83cf1b0b1e2cb16041520e87641","url":"js/code.jquery.com_jquery-3.3.1.slim.min.js"},{"revision":"415ea4fbd13b4a5b82fd147710709ae2","url":"js/croppie.min.css"},{"revision":"d6feb0165c999c98ea830a828f21b9b6","url":"js/datatables.net/dataTables.checkboxes.min.js"},{"revision":"3d3b3a1894485794add9aa2c039916a1","url":"js/datatables.net/jquery.dataTables.min.js"},{"revision":"b5403a3e4eb21ee963207fb84bfa520a","url":"js/datebook.min.js"},{"revision":"6a60c2eb2b922c5b0972d8fd0a0ff827","url":"js/enforceaccess.js"},{"revision":"b676d1739a90e9a1b5f41c9c9dce80f1","url":"js/getEventFromDB.js"},{"revision":"62697fbf23175de108cf980bfcb70bab","url":"js/getMobileOperatingSystem.js"},{"revision":"dd5d234580cb8e7a1a44ee728e56f857","url":"js/getPushSubscription.js"},{"revision":"f4210a40ebc48133facf152988f7292c","url":"js/getRelativeDate.js"},{"revision":"04f9695793cce78ad2df7f72530ae9fb","url":"js/global.js"},{"revision":"6b7fb2ee130535419a67afb198f41c2b","url":"js/intl-tel-input-17.0.0/css/intlTelInput.min.css"},{"revision":"416250f60d785a2e02f17e054d2e4e44","url":"js/intl-tel-input-17.0.0/img/flags.png"},{"revision":"d429a5777afaf2fc349652e812e9bb11","url":"js/intl-tel-input-17.0.0/img/flags@2x.png"},{"revision":"9f9f0dcd6d9f29b53354bb582a04b38b","url":"js/intl-tel-input-17.0.0/js/data.min.js"},{"revision":"af98816dc416ce47a73b1c9b36cd6bfd","url":"js/intl-tel-input-17.0.0/js/intlTelInput.min.js"},{"revision":"8f3a2154b225b6257161c4dfc9b89c9c","url":"js/intl-tel-input-17.0.0/js/utils.js"},{"revision":"36cb0e834d725f98259a9decf3b173f9","url":"js/isDateInPast.js"},{"revision":"05e28e3f2f06a1bb057a97206cbd3009","url":"js/linkifyjs/linkify-html.min.js"},{"revision":"9fc36c3bca2d59c7d4304f5ab99bfdc3","url":"js/linkifyjs/linkify.min.js"},{"revision":"971e2b863ccdb5d43003cdc5f4e0d923","url":"js/localforage.min.js"},{"revision":"5c3d21324208bc391e661eca7f6347fb","url":"js/moment-timezone-with-data-10-year-range.min.js"},{"revision":"5c158b940513c7dc2ebd901455e9b63d","url":"js/moment.min.js"},{"revision":"a531d97d539c3473b9059841ddda77e8","url":"js/olderbrowsers.js"},{"revision":"83fb8c4d9199dce0224da0206423106f","url":"js/popper.min.js"},{"revision":"ea58889c516e953d6e78ca4834f834c4","url":"js/qrious/qrious.min.js"},{"revision":"9efba70d5adce9e3b93fe643abcb204a","url":"js/relativeTimeFormatPolyfill.js"},{"revision":"f517432bf7fa8d1c98cec91f7249e00c","url":"js/sync.js"},{"revision":"7258a1d9d5f038e4e941278b10b64b76","url":"js/to-title-case.js"},{"revision":"202aad42506cf1430f576ef1806fdd9d","url":"login/forgot/i18n/en.json"},{"revision":"dc70e35bc9e0e323ee56a26d0b9727bc","url":"login/forgot/index.html"},{"revision":"e7b30b3cc4031010f1187854dcc3aad4","url":"login/forgot/logic.js"},{"revision":"ebb22b4d6f008032a0f19a33b839daae","url":"login/i18n/en.json"},{"revision":"3f3574f3225d5844d1f32019ec7c4bf9","url":"login/index.html"},{"revision":"ad58b346bf5df465620d81ad3fdd266e","url":"login/logic.js"},{"revision":"a4785b8ffbd682c972212eee54613d25","url":"login/reset/i18n/en.json"},{"revision":"8524c649d7469c6bbe50665709b74c20","url":"login/reset/index.html"},{"revision":"850c147b312120562bc8be89abafc436","url":"login/reset/logic.js"},{"revision":"a41f35868d6b360b638e56affbb55573","url":"login/style.css"},{"revision":"d26f2d5d866d12f1d1fe207d3b9168c3","url":"logout/index.html"},{"revision":"618b3145f5af279fd5897955ec80ebf4","url":"logout/logic.js"},{"revision":"ea1e91f3f379147228bd146d5e8b2742","url":"maps/evangelism/i18n/en.json"},{"revision":"bb0539ec744a2e77d451ce3e2a975330","url":"maps/evangelism/index.html"},{"revision":"eb08b92367ddcf9cdcdccc0b8192485f","url":"maps/evangelism/logic.js"},{"revision":"c2b9596c068465b2d8f50b19773c1209","url":"maps/evangelism/style.css"},{"revision":"e12f4082a21cfe727c2e4a6ec507d03c","url":"maps/events/i18n/en.json"},{"revision":"2753c0b1d41bb746b63ee4a98f452e50","url":"maps/events/index.html"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"maps/events/logic.js"},{"revision":"c16e724db6576cd7842e7c7a40db00da","url":"maps/events/style.css"},{"revision":"7d0896c1276539667e38c13fb6e5f949","url":"maps/i18n/en.json"},{"revision":"508ff9e95c495ee49107b4bb2b4436f0","url":"maps/index.html"},{"revision":"c1527cd98ef1ffabfd2927709c187906","url":"maps/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"maps/style.css"},{"revision":"4011f76f70d8d6fdf7aaad89d8f743ae","url":"maskable-android-chrome-192x192.png"},{"revision":"e5060e20df49ffa6f8752f8f3683785a","url":"maskable-android-chrome-512x512.png"},{"revision":"e73eda81aef42b060d32ad9cba86cfaa","url":"mstile-150x150.png"},{"revision":"8c265369f34924c4969d60e1ee8b529e","url":"new-church/i18n/en.json"},{"revision":"5d73c7f5f071fb979d3befdb6e088c7b","url":"new-church/index.html"},{"revision":"c83b86f37b12bbd1611e1353f2de56d7","url":"new-church/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"new-church/style.css"},{"revision":"27716dba8d6470853c93dbe9486961e6","url":"package-lock.json"},{"revision":"c91a2329cf16b83134aac7fe641e0008","url":"package.json"},{"revision":"0af57a143375b4fbf60fae169c65d1ac","url":"profile/confirm-email/i18n/en.json"},{"revision":"8c9862a7358bb7896d73730a7db9cf1a","url":"profile/confirm-email/index.html"},{"revision":"633e7bb695e523fb0a118aa8ccea4fbc","url":"profile/confirm-email/logic.js"},{"revision":"ef2982cb1b088f748f25d94c54d6cb7a","url":"profile/i18n/en.json"},{"revision":"c68659da755fa9c335ab0d2873158756","url":"profile/index.html"},{"revision":"760aaebf68cb3a1f0fcaca7c2e2a14da","url":"profile/logic.js"},{"revision":"a08f938fb2fb94f8c0122e84bebf714d","url":"profile/photo/i18n/en.json"},{"revision":"8975875b13ea4cc1025855286ca27fcc","url":"profile/photo/index.html"},{"revision":"d3a23f20a7f4cbd8dcb5707ef1e62261","url":"profile/photo/logic.js"},{"revision":"661cde053055ef74de534d3e04edcaa1","url":"profile/photo/style.css"},{"revision":"61d45ddf1a5447bf85e65115c2c81dad","url":"profile/style.css"},{"revision":"893575d90bee6177a10016d455fc0571","url":"r/i18n/en.json"},{"revision":"b235461a60faf29ddd231aee60b286ce","url":"r/index.html"},{"revision":"099b5a60767da9be2ce6cda1a40fb6f2","url":"r/logic.js"},{"revision":"6d3a49a20c92cce1fd8a99ac6949441a","url":"r/style.css"},{"revision":"c3fe49f6523b692fe93108976bec8963","url":"register/confirm/i18n/en.json"},{"revision":"03c9700df83adfd31d932f222bd548eb","url":"register/confirm/index.html"},{"revision":"8e4a98333b5dfb3f79f2adc463506122","url":"register/confirm/logic.js"},{"revision":"cfa35ceca15049ba95df056e4d1291e1","url":"register/i18n/en.json"},{"revision":"5e8383668b9a4066f608a8a0590f6b7d","url":"register/index.html"},{"revision":"aa335374b0d91f6a004257cec7102a2f","url":"register/logic.js"},{"revision":"c860c9208bd286a8f4581021f23d0864","url":"register/style.css"},{"revision":"3979195946003abe5aeaaa745b7c06e3","url":"safari-pinned-tab.svg"},{"revision":"983107e9e9bdad2cc96af9c2f128a3ce","url":"send/i18n/en.json"},{"revision":"6c6bee94fe6be6cfc4ecc99d06a5137e","url":"send/index.html"},{"revision":"b0745e8e498b7d0e771bce4f409a2fa4","url":"send/logic.js"},{"revision":"4907dd1ae407b2938d5dd2fdc9c6660b","url":"send/style.css"},{"revision":"9707a9bbaa3ccc6cabbfb8db751c99ab","url":"settings/i18n/en.json"},{"revision":"bc381f9c1cad13156f4f89122f583984","url":"settings/index.html"},{"revision":"6507ed300f9784042b435f8128aa7b0d","url":"settings/logic.js"},{"revision":"c285d06cf1c722d217f4db8172b212c8","url":"settings/style.css"},{"revision":"4c5348f50cfa22d4994f6d970d709407","url":"support/i18n/en.json"},{"revision":"6720baf53005319ad284c87937725dfd","url":"support/index.html"},{"revision":"fd927cf4414d1cac7aafb6d14393a671","url":"support/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"support/style.css"},{"revision":"1dd8c998138e33a85a3d8e5196ba6dbf","url":"templates/default/index.css"},{"revision":"6ca18511538ba8d6b10ae6ac0515bce3","url":"templates/default/index.html"},{"revision":"25f3e8d1dd9347decc0b961047ce0a33","url":"templates/default/index.js"},{"revision":"3bd7790ac378a9c8ccfa4ab19468ea15","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.dev.js"},{"revision":"98a72991f7aa384ff18d26705d3b611d","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.prod.js"},{"revision":"bb995cc93432132a4ffba1c4de4171ca","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.dev.js"},{"revision":"adec9d00bdad99c10b6477547f1c6725","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.prod.js"},{"revision":"9412dafd40d230d10194b6b18161935b","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.dev.js"},{"revision":"f8b7290bb82165cfc9e0854fef68d83f","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.prod.js"},{"revision":"ad103091b77395ad02d061e01e9dda79","url":"third_party/workbox/workbox-v7.0.0/workbox-core.dev.js"},{"revision":"994473cfcdc8b193deba39d69c9f0679","url":"third_party/workbox/workbox-v7.0.0/workbox-core.prod.js"},{"revision":"87fb42c3e80b62ad9c9b1bc10f55121b","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.dev.js"},{"revision":"408502289422a01f66dd338391fb92c8","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.prod.js"},{"revision":"2cc4a6373777e1830c0406e7958c4de4","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.dev.js"},{"revision":"c7313cc0e2acd2862ff7030fc9ddbe9f","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.prod.js"},{"revision":"3ae50022db3a34ad3846d9ece60579a9","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.dev.js"},{"revision":"b444a53ccb236ffe5efad6acfd8a4b45","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.prod.js"},{"revision":"58392a1c6e1cc73c4a56fc66280c76bf","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.dev.js"},{"revision":"2b8cabf7ded7e258e972bb8cc9cf90dc","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.prod.js"},{"revision":"78dc27f5e37ec54bd51fab0787916667","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.dev.js"},{"revision":"55871553c9758c5f5fa901b8d23e9bd9","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.prod.js"},{"revision":"dfbab615ddfddb83de655cf96b06eba0","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.dev.js"},{"revision":"cff0b2ef2cb540dd672f5422a5b7336a","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.prod.js"},{"revision":"26b12834f6196f639e1c065e378df6d6","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.dev.js"},{"revision":"b907c3d53e7ec5e995a8a81de4c21c9b","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.prod.js"},{"revision":"2fbfa64f3b4e94b3f3c32c081d4975f4","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.dev.js"},{"revision":"a1b45f187a34aabf82a57c1116e99883","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.prod.js"},{"revision":"5ccc3ebb8a495f28ea95f924ce3a05c0","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.dev.js"},{"revision":"6c009046c09802178ccd6aaecd201c34","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.prod.js"},{"revision":"7f18882caf646c8a7c8cd9dbab0bf74a","url":"third_party/workbox/workbox-v7.0.0/workbox-sw.js"},{"revision":"c6f9448e7a5762666111d8fbc0d2e9f4","url":"third_party/workbox/workbox-v7.0.0/workbox-window.dev.umd.js"},{"revision":"6ccbdfec1ee10093425d7a2769e1c689","url":"third_party/workbox/workbox-v7.0.0/workbox-window.prod.umd.js"},{"revision":"9241503adad81c176726883c043b9df1","url":"u/e/i18n/en.json"},{"revision":"06adf7d1418896bcb4ed4cf610ce5bda","url":"u/e/index.html"},{"revision":"2f663e10d05a281e1178669f49a6f7fb","url":"u/e/logic.js"},{"revision":"477e4d30325ce8a09d83388024af2262","url":"u/e/style.css"},{"revision":"a2b2e8c44dcce48ef4233ac2389dd942","url":"u/i18n/en.json"},{"revision":"67aab835f6b63687462ed6a38874870a","url":"u/index.html"},{"revision":"30656b59d330e2f3aab57dd759ef35f1","url":"u/logic.js"},{"revision":"3497b4f549ca576769576fa07d9bc281","url":"u/style.css"},{"revision":"a5cb479b105de91ed57a913ca340f3d6","url":"workbox-config.js"},{"revision":"811955bffb5854f81fd2835b42c4b424","url":"authorize/notification-text-message.txt"},{"revision":"99c436d977c3dc7d2197a2df098ccb6b","url":"_assets/fonts/Inter/Inter-VariableFont.woff2"},{"revision":"a4160421d2605545f69a4cd6cd642902","url":"_assets/fonts/MaterialIcons/material-icons.woff2"},{"revision":"8d1526589502a227b0d6745e14effb86","url":"_assets/fonts/Oswald/Oswald-VariableFont.woff2"}], {
  directoryIndex: "index.html",
});

// Add runtime caching
self.addEventListener("fetch", (event) => {
  if (
    (event.request.url.includes("/profiles/") &&
      event.request.url.endsWith("__400.jpg")) ||
    (event.request.url.includes("/profiles/") &&
      event.request.url.endsWith("__140.jpg"))
  ) {
    event.respondWith(
      caches.open("user-images").then((cache) => {
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
  const { title, body, data } = event.data.json();
  const options = {
    body: body,
    data: data,
    icon: "./android-chrome-192x192.png",
  };
  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: "pushReceived" });
        });
      });
    })
  );
});

// Handle notification click event
self.addEventListener("notificationclick", (event) => {
  let clickURL = "";
  try {
    clickURL = event.notification.data.clickURL;
  } catch (err) {
    clickURL = null;
    console.log(err);
  }
  event.notification.close();

  if (clickURL) {
    event.waitUntil(clients.openWindow(clickURL));
  }
});

// If the push subscription changes (e.g. expires and is auto-renewed), update the it on the server
self.addEventListener(
  "pushsubscriptionchange",
  (event) => {
    console.log(`"pushsubscriptionchange" event was fired`, event);
    const conv = (val) =>
      btoa(String.fromCharCode.apply(null, new Uint8Array(val)));
    const getPayload = (subscription) => ({
      endpoint: subscription.endpoint,
      publicKey: conv(subscription.getKey("p256dh")),
      authToken: conv(subscription.getKey("auth")),
    });

    const subscription = self.registration.pushManager
      .subscribe(event.oldSubscription.options)
      .then(async (subscription) => {
        const origin = self.location.hostname;
        let apiHost;

        if (origin.includes("localhost")) {
          apiHost = "http://localhost:4000/invites";
        } else if (origin.includes("staging")) {
          apiHost = "https://api.usd21.org/invites";
        } else {
          apiHost = "https://api.usd21.org/invites";
        }

        const endpoint = `${apiHost}/push-update-subscription`;

        fetch(endpoint, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            oldSubscription: getPayload(event.oldSubscription),
            newSubscription: getPayload(subscription),
          }),
        });
      });
    event.waitUntil(subscription);
  },
  false
);

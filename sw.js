importScripts("/third_party/workbox/workbox-v7.0.0/workbox-sw.js");

workbox.setConfig({
  modulePathPrefix: "/third_party/workbox/workbox-v7.0.0/",
});

// Use workbox methods
workbox.precaching.precacheAndRoute([{"revision":"2525ba72ea472c55bf8b2153e9ea9f11","url":"_assets/img/animated_checkmark.gif"},{"revision":"acc8530b443802f974d029539da39847","url":"_assets/img/avatar_female.svg"},{"revision":"0a2201888b5e03738e2b919b3b469530","url":"_assets/img/avatar_male.svg"},{"revision":"8c9a1bc2f5a27616a0edb3527dd767b3","url":"_assets/img/logo.svg"},{"revision":"5fd2fe001e2615b8dacec9db8fbe7aaf","url":"_assets/img/spinner.svg"},{"revision":"4a9abc4412f5071069695ede3991928e","url":"_assets/svg/icons/account_circle.svg"},{"revision":"f997137f7b7f30b40e7ad4f743d72e9b","url":"_assets/svg/icons/addToCalendar-Apple.svg"},{"revision":"7e50c5505b877c122d0db9e041d91ce0","url":"_assets/svg/icons/addToCalendar-Google.svg"},{"revision":"8f40d9f9ba96803443d2118e4304cfc6","url":"_assets/svg/icons/addToCalendar-iCalFile.svg"},{"revision":"04ca9eaafb7c2e4d46c6044f77ff20d8","url":"_assets/svg/icons/calendar.svg"},{"revision":"a4572fc955153ccdc7f602a4ab52e141","url":"_assets/svg/icons/camera.svg"},{"revision":"3cd34752163855b363dab61cefc3b95b","url":"_assets/svg/icons/chevron_right.svg"},{"revision":"7d170ab99cb1c6449445f0a90b842ea8","url":"_assets/svg/icons/close.svg"},{"revision":"8c6575d862d6610c5b3f58858158ebd6","url":"_assets/svg/icons/contact_support.svg"},{"revision":"9ed79be8b0a1f61194e99fbcb3695544","url":"_assets/svg/icons/delete-grey.svg"},{"revision":"261a1fca44f02dc7a319edaa79147cc2","url":"_assets/svg/icons/delete-red.svg"},{"revision":"87cbed57a6356fb4f067460715b46b54","url":"_assets/svg/icons/delete.svg"},{"revision":"c9d9b29fdf2ac8ba0fa5dc5ea7ecf881","url":"_assets/svg/icons/edit-grey.svg"},{"revision":"fd89e44692c100f28ced3f49e881d871","url":"_assets/svg/icons/edit-red.svg"},{"revision":"e71a1aaca1dc8c17d283d74f1f21400d","url":"_assets/svg/icons/edit.svg"},{"revision":"5b6bd9c9d11078eae6df6450aa9cc3ef","url":"_assets/svg/icons/email.svg"},{"revision":"d5f6b185c3072ce8de707b6c69f65e92","url":"_assets/svg/icons/event.svg"},{"revision":"66a7ed638c113b8b4321ae9077d7e812","url":"_assets/svg/icons/home.svg"},{"revision":"52b07740baf806d0df5115f657163df8","url":"_assets/svg/icons/insert_invitation.svg"},{"revision":"a12db7022c887007c7181b95e579444f","url":"_assets/svg/icons/list_alt.svg"},{"revision":"c9080957b2bc8063537c27ef1fc40518","url":"_assets/svg/icons/logout.svg"},{"revision":"14797d0c4dc33079cca993291dc49e5b","url":"_assets/svg/icons/menu.svg"},{"revision":"70f10b44f82c878dc16e72a0741e122e","url":"_assets/svg/icons/nav-arrow-back.svg"},{"revision":"bc36cdcfd07133172d6b84755ec3e1d6","url":"_assets/svg/icons/nav-arrow-forward.svg"},{"revision":"740682a37448269d3a2b761ab64bb168","url":"_assets/svg/icons/nav-followup-list-filled.svg"},{"revision":"03a3c19ca23b5d9ad3d2ee2a844007c8","url":"_assets/svg/icons/nav-followup-list.svg"},{"revision":"ed43f3a5c545e9fef626341bc934290b","url":"_assets/svg/icons/nav-home-filled.svg"},{"revision":"a245c5e889fa2289fd9bab9f0e60dff8","url":"_assets/svg/icons/nav-home.svg"},{"revision":"2ca808c830ef68e6cce5068876939bf5","url":"_assets/svg/icons/nav-my-invites-filled.svg"},{"revision":"9fd6787784835a9c7eb72a2cb0ab4a93","url":"_assets/svg/icons/nav-my-invites.svg"},{"revision":"69432ed8d0b1f275832d2cb07a752db9","url":"_assets/svg/icons/nav-send-an-invite-filled.svg"},{"revision":"30c04f3f440fcfd203f3b0153f4b03b2","url":"_assets/svg/icons/nav-send-an-invite.svg"},{"revision":"7dab3b33b8c272eeb8ac49a7a310c355","url":"_assets/svg/icons/people.svg"},{"revision":"b72b91c6272f9d9feaaecc3a7cd73aed","url":"_assets/svg/icons/phone.svg"},{"revision":"8c19cd35546b6b9f7a2cf2be8fde5502","url":"_assets/svg/icons/place.svg"},{"revision":"69527283a2f3604ca7e6e7f8c6b25d7c","url":"_assets/svg/icons/send.svg"},{"revision":"d5b3bfbb9dcb6eb099983522d0188542","url":"_assets/svg/icons/settings.svg"},{"revision":"a8e54483dc7ba55714a02e54dc1f0c3c","url":"_assets/svg/icons/sms.svg"},{"revision":"47048b9caa7dcd2e1b99d2e92c6a6944","url":"android-chrome-192x192.png"},{"revision":"3884fb820055f852ead922bbb5baf1c1","url":"android-chrome-512x512.png"},{"revision":"2f6ba3afa7265b79699c8707a8c9aab2","url":"apple-touch-icon.png"},{"revision":"9489d126281d302b239fbde76c2713f1","url":"authorize/i18n/en.json"},{"revision":"871b205d7b1f05672ba3930555a4c8be","url":"authorize/index.html"},{"revision":"e0d67a9efc0d75bfb3b71d9c139928cc","url":"authorize/logic.js"},{"revision":"f6c56be7938001df87037446b829848e","url":"css/daemonite-material.css"},{"revision":"5c5d7d8e7cf72af4301540b66f2e94d6","url":"css/daemonite-material.css.map"},{"revision":"b0dc920825abc565328584a2ea06dcc7","url":"css/global.css"},{"revision":"ab70bddc9813e69a8d3148497985e00e","url":"css/material-4.1.1-dist/css/material.css.map"},{"revision":"470eb782aa5b3401f12227dd962a79fe","url":"css/material-4.1.1-dist/css/material.min.css.map"},{"revision":"4364c173cad27d78e9316fac755ccf17","url":"css/material-4.1.1-dist/js/material.js.map"},{"revision":"b3daf50a8304b7c8993d117a8ebd0fe3","url":"css/material-4.1.1-dist/js/material.min.js"},{"revision":"3d63c20c95348beed6cf7af29e5b2503","url":"css/material-4.1.1-dist/js/material.min.js.map"},{"revision":"648e6331a1eb16b2f1d52b7fe816d554","url":"events/add/i18n/en.json"},{"revision":"20905831fa8358b253f499135f669f70","url":"events/add/index.html"},{"revision":"2b9c2f7577a61a5ef25ec8796f7f5bfa","url":"events/add/logic.js"},{"revision":"b26e9e0a144699d4f3750f706f0de47d","url":"events/add/style.css"},{"revision":"0046e7a5572efe22ac49b641b2953c25","url":"events/delete/i18n/en.json"},{"revision":"05606bb2825f0843ed145a1fa1b748eb","url":"events/delete/index.html"},{"revision":"49912f3dad1aff988481e092d68a10cf","url":"events/delete/logic.js"},{"revision":"ec6ea98cb485079e7c7745aa1b35396c","url":"events/edit/i18n/en.json"},{"revision":"624409c6d594843bc42c02c8a623600a","url":"events/edit/index.html"},{"revision":"9f2281111a5810a1f19b3b377b524fae","url":"events/edit/logic.js"},{"revision":"6fba3a01c156c3c79f162348972e63aa","url":"events/edit/style.css"},{"revision":"3b20ef670253fb3f65d633cecc35fd1d","url":"events/i18n/en.json"},{"revision":"571467f3107af9208699a2a4941ee2cb","url":"events/index.html"},{"revision":"737816978fcb295ee99dabe90758b66b","url":"events/logic.js"},{"revision":"113e1eb619a892735947efeb87e51b03","url":"events/needed/i18n/en.json"},{"revision":"e543fe875030a100dc0a184d315c95a8","url":"events/needed/index.html"},{"revision":"d0c203126cb0187f4f108e4ec9f27439","url":"events/needed/logic.js"},{"revision":"012082919764ada46aec28180959d7ea","url":"events/needed/style.css"},{"revision":"2b278adcfb1bc2788b373b498e238a59","url":"events/style.css"},{"revision":"83b47baaedfab34c9861008fb2276ff0","url":"favicon-16x16.png"},{"revision":"2d2e271ef3b25b898cd3863e44dec06c","url":"favicon-32x32.png"},{"revision":"ed735763f1ee3d990a43501362847af3","url":"follow/i18n/en.json"},{"revision":"ab12b8de1f904178bddded98dcb5b447","url":"follow/index.html"},{"revision":"66de199452ea26e5ccb8571c20372eb7","url":"follow/logic.js"},{"revision":"86ff907d30cb21d12a159bccb5149b00","url":"follow/style.css"},{"revision":"60f3cb866abe66604e85e8797b2925fd","url":"followers/i18n/en.json"},{"revision":"d3fe3fe1f70de4f9722411220cd58330","url":"followers/index.html"},{"revision":"eb9897c5ded7ca595f5fac665ad98402","url":"followers/logic.js"},{"revision":"40779d6689d16a334b42d896a455e5b8","url":"followers/style.css"},{"revision":"a6f479cfe690e2de3073abcfc8193810","url":"following/i18n/en.json"},{"revision":"3d770cec3125240b69bafe199f524cfc","url":"following/index.html"},{"revision":"6559dce454bb1f1fd8f9ee29d300f26f","url":"following/logic.js"},{"revision":"28cba14e1762e5c1d7077280f47621be","url":"following/style.css"},{"revision":"452fc4cfb8c6c8c347c3d791c7f9ffd5","url":"followup/i18n/en.json"},{"revision":"909a0c4f2c13cd646fbd671884ea3327","url":"followup/index.html"},{"revision":"468c41455c3f216a021bf58a90e1e7e2","url":"followup/logic.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"followup/style.css"},{"revision":"8ea1c7e4edf562d7eeb75be6aaccc8c1","url":"i18n-global/en.json"},{"revision":"d0eb4706efdc8bdf4d8e911e599dec34","url":"i18n-names/en.json"},{"revision":"4786242136b16b781fe6a1cd3a9871de","url":"i18n/en.json"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"index.css"},{"revision":"394e608548ff4c5808fa54ccc55ece49","url":"index.html"},{"revision":"c86e67796ee74c08463ddb319ee58bc3","url":"index.js"},{"revision":"5c78e9f5248ce1e028a3e13b58ede665","url":"invites/i18n/en.json"},{"revision":"91dc4893e79975c476d9486554fffc33","url":"invites/index.html"},{"revision":"ad8a99921a2bd95062e9cbbd26e8cea3","url":"invites/logic.js"},{"revision":"765fd56fe2deb0b4dd7d164f519eb7e6","url":"invites/style.css"},{"revision":"eb5fac582a82f296aeb74900b01a2fa3","url":"js/bootstrap.min.js"},{"revision":"97aa185a0946b2aae827ac35ea0bcabb","url":"js/bootstrap.min.js.map"},{"revision":"99b0a83cf1b0b1e2cb16041520e87641","url":"js/code.jquery.com_jquery-3.3.1.slim.min.js"},{"revision":"415ea4fbd13b4a5b82fd147710709ae2","url":"js/croppie.min.css"},{"revision":"772a54bf36368ca847b0dec0ab0a9202","url":"js/datatables.net/i18n/af.json"},{"revision":"e34469960bc39334e805e5dd5fb7a715","url":"js/datatables.net/i18n/am.json"},{"revision":"a2ec2d1d26210ac5f14f39714a0754ec","url":"js/datatables.net/i18n/ar.json"},{"revision":"37b665cacbf41e23c6aef348885f7d39","url":"js/datatables.net/i18n/az-AZ.json"},{"revision":"b1ea0467851b479020c2c3ef1f5a0554","url":"js/datatables.net/i18n/be.json"},{"revision":"0c12860d17482f6a88712b45bf71525e","url":"js/datatables.net/i18n/bg.json"},{"revision":"10dde384dbc35f8daf145c9b4e7a63d4","url":"js/datatables.net/i18n/bn.json"},{"revision":"fc0704f385d7dba3669c734138baf0c9","url":"js/datatables.net/i18n/bs-BA.json"},{"revision":"e33284a95780dae1f0dc4a86a9b16042","url":"js/datatables.net/i18n/ca.json"},{"revision":"b14b5e9ac18599be25a81a762fb08442","url":"js/datatables.net/i18n/co.json"},{"revision":"0ec4272dc19e34f6217f1e21400eabbb","url":"js/datatables.net/i18n/cs.json"},{"revision":"318e8cee51f8565ca218cb1021b99a72","url":"js/datatables.net/i18n/cy.json"},{"revision":"e37bdd29dc5d3c32574088dd0fb0ff66","url":"js/datatables.net/i18n/da.json"},{"revision":"933c3971beb2b4241efdb456ddbb3a15","url":"js/datatables.net/i18n/de-DE.json"},{"revision":"3b1710c42c811015ddd5ea415a30bf02","url":"js/datatables.net/i18n/el.json"},{"revision":"51950f8135e7dcbcf5774703f0adec33","url":"js/datatables.net/i18n/en-GB.json"},{"revision":"23f010ce49a3294bf260f9e12bbb92dd","url":"js/datatables.net/i18n/eo.json"},{"revision":"81ad5446a49b7698988b6c0af468b045","url":"js/datatables.net/i18n/es-AR.json"},{"revision":"cc4ecf75a2e394f09ed4d1705f4aa43a","url":"js/datatables.net/i18n/es-CL.json"},{"revision":"176bf9eb74a627864655ab0fb18aacda","url":"js/datatables.net/i18n/es-CO.json"},{"revision":"94a935dc0a2b203acfe9bda19f8b17fa","url":"js/datatables.net/i18n/es-ES.json"},{"revision":"deed7ead80baf84640bdf15e7734bbde","url":"js/datatables.net/i18n/es-MX.json"},{"revision":"0b8aecb7e904061bfcb1ccf672dd6f3d","url":"js/datatables.net/i18n/et.json"},{"revision":"baffdfc7f5acacdf4c722d7de48e64b8","url":"js/datatables.net/i18n/eu.json"},{"revision":"645f0eb167c27ecbb154788e58ffc75b","url":"js/datatables.net/i18n/fa.json"},{"revision":"c0a11e8229366d4c29668d4eda22b22c","url":"js/datatables.net/i18n/fi.json"},{"revision":"b8e18c84ebeda2782297d23e4ffd5e7b","url":"js/datatables.net/i18n/fil.json"},{"revision":"a5d772272e3c8662731b1e3df2eb28f4","url":"js/datatables.net/i18n/fr-FR.json"},{"revision":"49faff1edabf5ed604c7c6b998afcdbf","url":"js/datatables.net/i18n/ga.json"},{"revision":"b3a432c77a52c694fa020ecd6eeb6fa5","url":"js/datatables.net/i18n/Ganda.json"},{"revision":"4f7f283b923d69924b247260ce1dbd56","url":"js/datatables.net/i18n/gl.json"},{"revision":"966d3d55fce65ebed88aff0750b45994","url":"js/datatables.net/i18n/gu.json"},{"revision":"1c0338afbe206f675b2d6ed474a11ca6","url":"js/datatables.net/i18n/he.json"},{"revision":"d31a533ec6d84b425d9054239f372ace","url":"js/datatables.net/i18n/hi.json"},{"revision":"9dc957b156359e271e97237bcc8bc7b9","url":"js/datatables.net/i18n/hr.json"},{"revision":"bddc205ba097e15095325d7bc64d7728","url":"js/datatables.net/i18n/hu.json"},{"revision":"930bdfd30634c0dfc7ef4c7b0fa22ad5","url":"js/datatables.net/i18n/hy.json"},{"revision":"3dd46a70048a8886515698372be102d3","url":"js/datatables.net/i18n/id-ALT.json"},{"revision":"34e0142ace7d404850902458fdefbe6e","url":"js/datatables.net/i18n/id.json"},{"revision":"4f200effafae016073fd73855965018d","url":"js/datatables.net/i18n/is.json"},{"revision":"e69c131814888160ef864a1e727484de","url":"js/datatables.net/i18n/it-IT.json"},{"revision":"8d7f3420127145ace36078c43e65be07","url":"js/datatables.net/i18n/ja.json"},{"revision":"d7c4fc33f11c56965ad3724c2ce8ac87","url":"js/datatables.net/i18n/jv.json"},{"revision":"6dde6ec38fd1cc07b63a040ded67f50d","url":"js/datatables.net/i18n/ka.json"},{"revision":"aebffb509285b3dc6b7b1aa239a060bb","url":"js/datatables.net/i18n/kk.json"},{"revision":"72d5ec19f5d483c9fa92f875c2b6faf5","url":"js/datatables.net/i18n/km.json"},{"revision":"1529fd6deb2478adaaef815910ae76b4","url":"js/datatables.net/i18n/kn.json"},{"revision":"3c79cffc223abea4e56ebb7774e00d33","url":"js/datatables.net/i18n/ko.json"},{"revision":"d5ddcc5be4bef0040c31dd4addd92887","url":"js/datatables.net/i18n/ku.json"},{"revision":"f6dcd877d9842e0947b455d0b17ab16d","url":"js/datatables.net/i18n/ky.json"},{"revision":"c876424ae89d8f6fa0e39434d24af025","url":"js/datatables.net/i18n/lo.json"},{"revision":"812b3fa8ba1e55897ac4d0d0fb372fb8","url":"js/datatables.net/i18n/lt.json"},{"revision":"4f4a75ce197611f5551d7b6e46484da9","url":"js/datatables.net/i18n/lv.json"},{"revision":"94375cfee48ab09313ce08489fc22a12","url":"js/datatables.net/i18n/mk.json"},{"revision":"8c650cbb90811e37d9c2066bcabb35f6","url":"js/datatables.net/i18n/mn.json"},{"revision":"77b24b7fd8fcda2d4db695c1f3a6935a","url":"js/datatables.net/i18n/mr.json"},{"revision":"8d71dc1e2d54b68319e00e732974710e","url":"js/datatables.net/i18n/ms.json"},{"revision":"8f85466f7d6d79502bdd8dde5ced91e2","url":"js/datatables.net/i18n/ne.json"},{"revision":"2ab7482b7762c04ecc82a59f6dc1f51a","url":"js/datatables.net/i18n/nl-NL.json"},{"revision":"dfe61b2b39766a3bb26e4b7654d80ff8","url":"js/datatables.net/i18n/no-NB.json"},{"revision":"905c9116f7c1cb25674d413add279939","url":"js/datatables.net/i18n/no-NO.json"},{"revision":"9f880cafc16e3cb90773ef6387008e8e","url":"js/datatables.net/i18n/pa.json"},{"revision":"1eb747a21cb68879bee8e110b14c246b","url":"js/datatables.net/i18n/pl.json"},{"revision":"fbeb25f0e64e8b9af79d162dee380b9f","url":"js/datatables.net/i18n/ps.json"},{"revision":"8c0cc0d1d36cb5768b8e0e1dca53bfcf","url":"js/datatables.net/i18n/pt-BR.json"},{"revision":"b49f51f8fbeedd510d5e11396b33d432","url":"js/datatables.net/i18n/pt-PT.json"},{"revision":"743bf8765abd182223b07bda4cbed74f","url":"js/datatables.net/i18n/rm.json"},{"revision":"f48cd751878d255b912e3356ecfd0ffe","url":"js/datatables.net/i18n/ro.json"},{"revision":"aa34380a35eb90b5bdfced952e06ebab","url":"js/datatables.net/i18n/ru.json"},{"revision":"f661a7d59d568c8cba7e7e00658e0f96","url":"js/datatables.net/i18n/si.json"},{"revision":"8d40b237ce6dd90b7d20d894e6bc7673","url":"js/datatables.net/i18n/sk.json"},{"revision":"75cac82e83ed8e7caf39bb2de3794ffa","url":"js/datatables.net/i18n/sl.json"},{"revision":"28522f953e67d6800af9e5a6a1abdba7","url":"js/datatables.net/i18n/snd.json"},{"revision":"e36340bdca13fc634184e92af246d34e","url":"js/datatables.net/i18n/sq.json"},{"revision":"7b70be67f189d6f2ab97b86c8d4d1404","url":"js/datatables.net/i18n/sr-SP.json"},{"revision":"a0133ecad6c4106ba681472a9877bb33","url":"js/datatables.net/i18n/sr.json"},{"revision":"9e7bd77bd7a639386f2624a5ef1fa265","url":"js/datatables.net/i18n/sv-SE.json"},{"revision":"d8660706a78e2bcae18da7f00f33d0b3","url":"js/datatables.net/i18n/sw.json"},{"revision":"cf780aea4f7788b6d23fae737edd6267","url":"js/datatables.net/i18n/ta.json"},{"revision":"d97677f8003cdb371e70d5e7a6562594","url":"js/datatables.net/i18n/te.json"},{"revision":"ffa01559e42dfbfc03394a11a7fde59a","url":"js/datatables.net/i18n/tg.json"},{"revision":"a4498dfe2f01429b08e99f538cc624b1","url":"js/datatables.net/i18n/th.json"},{"revision":"6807b71984ae89f1d01b712dffe30418","url":"js/datatables.net/i18n/tk.json"},{"revision":"9bd07314e1e7a7ec8733b954d444a3b0","url":"js/datatables.net/i18n/tr.json"},{"revision":"b3a432c77a52c694fa020ecd6eeb6fa5","url":"js/datatables.net/i18n/ug.json"},{"revision":"623c27376ae7db8e27a83ba71ee41b30","url":"js/datatables.net/i18n/uk.json"},{"revision":"47d6016addc04ab1bb26775f2a627483","url":"js/datatables.net/i18n/ur.json"},{"revision":"823b0baef32b1257db279b9cda4af475","url":"js/datatables.net/i18n/uz-CR.json"},{"revision":"3052d6c1b97d2262706f7136ad08afd3","url":"js/datatables.net/i18n/uz.json"},{"revision":"f70e5217094ff245f2bd1b7e24b9c612","url":"js/datatables.net/i18n/vi.json"},{"revision":"a047bb737861a8311e83b8a95e22da39","url":"js/datatables.net/i18n/zh-HANT.json"},{"revision":"bf3ec7847652ba9394c22bd8025f12e9","url":"js/datatables.net/i18n/zh.json"},{"revision":"3d3b3a1894485794add9aa2c039916a1","url":"js/datatables.net/jquery.dataTables.min.js"},{"revision":"b5403a3e4eb21ee963207fb84bfa520a","url":"js/datebook.min.js"},{"revision":"ed7549558d7e7839526898eb44cda376","url":"js/datebook.min.js.map"},{"revision":"0099f79501eafbe2fd0d5457d8479e2e","url":"js/enforceaccess.js"},{"revision":"b676d1739a90e9a1b5f41c9c9dce80f1","url":"js/getEventFromDB.js"},{"revision":"62697fbf23175de108cf980bfcb70bab","url":"js/getMobileOperatingSystem.js"},{"revision":"dd5d234580cb8e7a1a44ee728e56f857","url":"js/getPushSubscription.js"},{"revision":"f4210a40ebc48133facf152988f7292c","url":"js/getRelativeDate.js"},{"revision":"8731c79b787498627db7100142b65654","url":"js/global.js"},{"revision":"7575266883dec342aec433007193f2f4","url":"js/index.umd.min.js.map"},{"revision":"6b7fb2ee130535419a67afb198f41c2b","url":"js/intl-tel-input-17.0.0/css/intlTelInput.min.css"},{"revision":"416250f60d785a2e02f17e054d2e4e44","url":"js/intl-tel-input-17.0.0/img/flags.png"},{"revision":"d429a5777afaf2fc349652e812e9bb11","url":"js/intl-tel-input-17.0.0/img/flags@2x.png"},{"revision":"9f9f0dcd6d9f29b53354bb582a04b38b","url":"js/intl-tel-input-17.0.0/js/data.min.js"},{"revision":"af98816dc416ce47a73b1c9b36cd6bfd","url":"js/intl-tel-input-17.0.0/js/intlTelInput.min.js"},{"revision":"8f3a2154b225b6257161c4dfc9b89c9c","url":"js/intl-tel-input-17.0.0/js/utils.js"},{"revision":"36cb0e834d725f98259a9decf3b173f9","url":"js/isDateInPast.js"},{"revision":"05e28e3f2f06a1bb057a97206cbd3009","url":"js/linkifyjs/linkify-html.min.js"},{"revision":"9fc36c3bca2d59c7d4304f5ab99bfdc3","url":"js/linkifyjs/linkify.min.js"},{"revision":"971e2b863ccdb5d43003cdc5f4e0d923","url":"js/localforage.min.js"},{"revision":"5c3d21324208bc391e661eca7f6347fb","url":"js/moment-timezone-with-data-10-year-range.min.js"},{"revision":"5c158b940513c7dc2ebd901455e9b63d","url":"js/moment.min.js"},{"revision":"1fe80a507f89c93c1dab1e868f640615","url":"js/moment.min.js.map"},{"revision":"a531d97d539c3473b9059841ddda77e8","url":"js/olderbrowsers.js"},{"revision":"83fb8c4d9199dce0224da0206423106f","url":"js/popper.min.js"},{"revision":"06e45ed2d7ca75bb8efd54751fe0f359","url":"js/popper.min.js.map"},{"revision":"b6b5c79497abe2b09ac9aaaf093176b2","url":"js/pulltorefreshjs.js"},{"revision":"5aa5585387e69ec0bc0aa937cb529c80","url":"js/qrious/qrious.js.map"},{"revision":"ea58889c516e953d6e78ca4834f834c4","url":"js/qrious/qrious.min.js"},{"revision":"d63bbb65444a5f66e4f66394118ad49a","url":"js/qrious/qrious.min.js.map"},{"revision":"9efba70d5adce9e3b93fe643abcb204a","url":"js/relativeTimeFormatPolyfill.js"},{"revision":"ea597d2b5fc71231727c7dc611b70dd4","url":"js/sync.js"},{"revision":"7258a1d9d5f038e4e941278b10b64b76","url":"js/to-title-case.js"},{"revision":"202aad42506cf1430f576ef1806fdd9d","url":"login/forgot/i18n/en.json"},{"revision":"f2beab291b14e9e0d7cf6318e7bef9ad","url":"login/forgot/index.html"},{"revision":"e7b30b3cc4031010f1187854dcc3aad4","url":"login/forgot/logic.js"},{"revision":"821da7d8e8d1d96d87cddd8fd6981d3d","url":"login/i18n/en.json"},{"revision":"3c4856ea384506575c1e05d6f7dbbdef","url":"login/index.html"},{"revision":"6b0c3b86ca2799670e13e6336cdbf1d3","url":"login/logic.js"},{"revision":"a4785b8ffbd682c972212eee54613d25","url":"login/reset/i18n/en.json"},{"revision":"31847ad5d9febd301bc2e9e2261900cc","url":"login/reset/index.html"},{"revision":"850c147b312120562bc8be89abafc436","url":"login/reset/logic.js"},{"revision":"d26f2d5d866d12f1d1fe207d3b9168c3","url":"logout/index.html"},{"revision":"618b3145f5af279fd5897955ec80ebf4","url":"logout/logic.js"},{"revision":"e73eda81aef42b060d32ad9cba86cfaa","url":"mstile-150x150.png"},{"revision":"27716dba8d6470853c93dbe9486961e6","url":"package-lock.json"},{"revision":"c91a2329cf16b83134aac7fe641e0008","url":"package.json"},{"revision":"ba9d48c8b05c02aed3906a69cd90fc01","url":"profile/i18n/en.json"},{"revision":"d3af2c8ed02b5c7161394ee73660755e","url":"profile/index.html"},{"revision":"c7cf8e8717209cacf99e6219d7cf0281","url":"profile/logic.js"},{"revision":"a08f938fb2fb94f8c0122e84bebf714d","url":"profile/photo/i18n/en.json"},{"revision":"497d7b6eafb4b8b4d150f459dc3bd96c","url":"profile/photo/index.html"},{"revision":"098d917e95c9524ddbaffa9f6f07f200","url":"profile/photo/logic.js"},{"revision":"661cde053055ef74de534d3e04edcaa1","url":"profile/photo/style.css"},{"revision":"61d45ddf1a5447bf85e65115c2c81dad","url":"profile/style.css"},{"revision":"4e94f09816038d86936beb11c4b3e50e","url":"r/i18n/en.json"},{"revision":"300f60b35ad095d8f4d329e2e9048fa1","url":"r/index.html"},{"revision":"c34245a95d6546a089269c7a8317e95e","url":"r/logic.js"},{"revision":"0a579f9c510d200f2eb225d8a52b01bb","url":"r/style.css"},{"revision":"c3fe49f6523b692fe93108976bec8963","url":"register/confirm/i18n/en.json"},{"revision":"994f57cf2fb662941a7684ba525e4a7a","url":"register/confirm/index.html"},{"revision":"95c60ea582b34e756cad7076c66245e0","url":"register/confirm/logic.js"},{"revision":"9bf3b96d575bf6ae9a1ce86a8b12d802","url":"register/i18n/en.json"},{"revision":"7e19e1ba419f553b65a4c721dad33156","url":"register/index.html"},{"revision":"d11f72221d9ec47da17e57da41ed3388","url":"register/logic.js"},{"revision":"9df4810de1904722cb7ccc90aaff961f","url":"register/style.css"},{"revision":"3979195946003abe5aeaaa745b7c06e3","url":"safari-pinned-tab.svg"},{"revision":"6845e6c9cac597d08ee84901f1b820b2","url":"send/i18n/en.json"},{"revision":"2d1685707d5e4f84b45d8329c02c37a3","url":"send/index.html"},{"revision":"262ec50daa69aa05b2c588b6ede20d8a","url":"send/logic.js"},{"revision":"a8148b383199fd29bfa065320f79b5e8","url":"send/style.css"},{"revision":"9223df1bfae96c17a7bfbfa288efc716","url":"settings/i18n/en.json"},{"revision":"2054e0cfba8f495ce4f80229ad4057d8","url":"settings/index.html"},{"revision":"bd208dfc2fa0d93d75fda02f16bb6421","url":"settings/logic.js"},{"revision":"a3a28b020cf739404ee30c69f3c72b39","url":"settings/style.css"},{"revision":"9129fa11977dc93400465d40f9725dfc","url":"site.webmanifest"},{"revision":"bb6261089666a778f6f292bf9d69b127","url":"templates/default/index.css"},{"revision":"ec46e3a901058dcb00be083051c8b5b9","url":"templates/default/index.html"},{"revision":"25f3e8d1dd9347decc0b961047ce0a33","url":"templates/default/index.js"},{"revision":"3bd7790ac378a9c8ccfa4ab19468ea15","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.dev.js"},{"revision":"c5e8bdedcbe3d478d42650130d7b4fbb","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.dev.js.map"},{"revision":"98a72991f7aa384ff18d26705d3b611d","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.prod.js"},{"revision":"80f180ab2fb3d9ee50acb7a528dcc69c","url":"third_party/workbox/workbox-v7.0.0/workbox-background-sync.prod.js.map"},{"revision":"bb995cc93432132a4ffba1c4de4171ca","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.dev.js"},{"revision":"280469d391b1b72a201fd67e1d37fe5a","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.dev.js.map"},{"revision":"adec9d00bdad99c10b6477547f1c6725","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.prod.js"},{"revision":"7df5f9752c97a9a4637c8b18ff868c7a","url":"third_party/workbox/workbox-v7.0.0/workbox-broadcast-update.prod.js.map"},{"revision":"9412dafd40d230d10194b6b18161935b","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.dev.js"},{"revision":"56a6e697cb25cafabb88274a3986d73d","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.dev.js.map"},{"revision":"f8b7290bb82165cfc9e0854fef68d83f","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.prod.js"},{"revision":"c2040e837dae6f5b3dba386f15685aad","url":"third_party/workbox/workbox-v7.0.0/workbox-cacheable-response.prod.js.map"},{"revision":"ad103091b77395ad02d061e01e9dda79","url":"third_party/workbox/workbox-v7.0.0/workbox-core.dev.js"},{"revision":"4a328f43227e8090924b6d449c5fb9c0","url":"third_party/workbox/workbox-v7.0.0/workbox-core.dev.js.map"},{"revision":"994473cfcdc8b193deba39d69c9f0679","url":"third_party/workbox/workbox-v7.0.0/workbox-core.prod.js"},{"revision":"26c7b75164135b4aad498b2dbb8d770e","url":"third_party/workbox/workbox-v7.0.0/workbox-core.prod.js.map"},{"revision":"87fb42c3e80b62ad9c9b1bc10f55121b","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.dev.js"},{"revision":"6ba1cd2d40ffc8eaa2ac439cb5242f1c","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.dev.js.map"},{"revision":"408502289422a01f66dd338391fb92c8","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.prod.js"},{"revision":"f2509d1377fe99f8f7108b8e05c47758","url":"third_party/workbox/workbox-v7.0.0/workbox-expiration.prod.js.map"},{"revision":"2cc4a6373777e1830c0406e7958c4de4","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.dev.js"},{"revision":"93d67221635ec8899682872d1c59809e","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.dev.js.map"},{"revision":"c7313cc0e2acd2862ff7030fc9ddbe9f","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.prod.js"},{"revision":"abd252e5fb0713642e5ba9c0a6b0cff5","url":"third_party/workbox/workbox-v7.0.0/workbox-navigation-preload.prod.js.map"},{"revision":"3ae50022db3a34ad3846d9ece60579a9","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.dev.js"},{"revision":"9b84e6bf0b5de99ff4019b5b7736e76a","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.dev.js.map"},{"revision":"b444a53ccb236ffe5efad6acfd8a4b45","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.prod.js"},{"revision":"412fb87c4eea089ec3aefabe482f6ff1","url":"third_party/workbox/workbox-v7.0.0/workbox-offline-ga.prod.js.map"},{"revision":"58392a1c6e1cc73c4a56fc66280c76bf","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.dev.js"},{"revision":"9a9763d4f75f8152f268184d4e2c801b","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.dev.js.map"},{"revision":"2b8cabf7ded7e258e972bb8cc9cf90dc","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.prod.js"},{"revision":"9f9fecc2a9edff25ce0d58244fc21881","url":"third_party/workbox/workbox-v7.0.0/workbox-precaching.prod.js.map"},{"revision":"78dc27f5e37ec54bd51fab0787916667","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.dev.js"},{"revision":"0dc57509cd83f32eabd3e1c4148dae94","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.dev.js.map"},{"revision":"55871553c9758c5f5fa901b8d23e9bd9","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.prod.js"},{"revision":"a3858aaa8862b4284e8cecf20878a33a","url":"third_party/workbox/workbox-v7.0.0/workbox-range-requests.prod.js.map"},{"revision":"dfbab615ddfddb83de655cf96b06eba0","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.dev.js"},{"revision":"0cdce4670b95c2a70c2ebb162d7c35d6","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.dev.js.map"},{"revision":"cff0b2ef2cb540dd672f5422a5b7336a","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.prod.js"},{"revision":"0271b8d2a82de4625b0ca8aa7da61f0d","url":"third_party/workbox/workbox-v7.0.0/workbox-recipes.prod.js.map"},{"revision":"26b12834f6196f639e1c065e378df6d6","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.dev.js"},{"revision":"2b072b0c93dc7cfe4fae65e47a50ba6a","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.dev.js.map"},{"revision":"b907c3d53e7ec5e995a8a81de4c21c9b","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.prod.js"},{"revision":"df153036cc82d248af70447ea161fd5e","url":"third_party/workbox/workbox-v7.0.0/workbox-routing.prod.js.map"},{"revision":"2fbfa64f3b4e94b3f3c32c081d4975f4","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.dev.js"},{"revision":"30d315a0e364aa75723a409f99bf2325","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.dev.js.map"},{"revision":"a1b45f187a34aabf82a57c1116e99883","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.prod.js"},{"revision":"ab6f6a1a6484e583dc2d347339415746","url":"third_party/workbox/workbox-v7.0.0/workbox-strategies.prod.js.map"},{"revision":"5ccc3ebb8a495f28ea95f924ce3a05c0","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.dev.js"},{"revision":"fc2c62af4f9855b3b1986f10b82ba52e","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.dev.js.map"},{"revision":"6c009046c09802178ccd6aaecd201c34","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.prod.js"},{"revision":"10992a14e7de11fa3fc96580f1362397","url":"third_party/workbox/workbox-v7.0.0/workbox-streams.prod.js.map"},{"revision":"7f18882caf646c8a7c8cd9dbab0bf74a","url":"third_party/workbox/workbox-v7.0.0/workbox-sw.js"},{"revision":"f421335c3ff83d33b4193d64b35927d4","url":"third_party/workbox/workbox-v7.0.0/workbox-sw.js.map"},{"revision":"bc1ef30c50871a08b44c34c279d85e0d","url":"third_party/workbox/workbox-v7.0.0/workbox-window.dev.es5.mjs.map"},{"revision":"b02a5dc4405801e68ffc254ac08b485d","url":"third_party/workbox/workbox-v7.0.0/workbox-window.dev.mjs.map"},{"revision":"c6f9448e7a5762666111d8fbc0d2e9f4","url":"third_party/workbox/workbox-v7.0.0/workbox-window.dev.umd.js"},{"revision":"2f9f0b2ec033247ae46297e1856d2dda","url":"third_party/workbox/workbox-v7.0.0/workbox-window.dev.umd.js.map"},{"revision":"8ea5d3d33f7a485041d3b6acae3e5623","url":"third_party/workbox/workbox-v7.0.0/workbox-window.prod.es5.mjs.map"},{"revision":"867f29d0679b67ef05c39f6313a1193b","url":"third_party/workbox/workbox-v7.0.0/workbox-window.prod.mjs.map"},{"revision":"6ccbdfec1ee10093425d7a2769e1c689","url":"third_party/workbox/workbox-v7.0.0/workbox-window.prod.umd.js"},{"revision":"2b5447793a7c3207b013420bcef12da9","url":"third_party/workbox/workbox-v7.0.0/workbox-window.prod.umd.js.map"},{"revision":"3fb4f6f0f3557d285ce2c9b053598174","url":"u/e/i18n/en.json"},{"revision":"5c63b85a82eef57d60878cee4b5f519e","url":"u/e/index.html"},{"revision":"2f663e10d05a281e1178669f49a6f7fb","url":"u/e/logic.js"},{"revision":"477e4d30325ce8a09d83388024af2262","url":"u/e/style.css"},{"revision":"62226d7dce8fec1643819f5aa75badf5","url":"u/i18n/en.json"},{"revision":"32dfd253169a439637fb637ebfa6d41f","url":"u/index.html"},{"revision":"9fdc6ae0e95a683caf25ae17d8219b83","url":"u/logic.js"},{"revision":"3497b4f549ca576769576fa07d9bc281","url":"u/style.css"},{"revision":"89c75d4570cadc211ac14c0a34b3818c","url":"workbox-config.js"},{"revision":"32204736a4290ec41200abe91e5190d1","url":"_assets/fonts/Inter/Inter-VariableFont.ttf"},{"revision":"a4160421d2605545f69a4cd6cd642902","url":"_assets/fonts/MaterialIcons/material-icons.woff2"},{"revision":"033f2e7815bfa96db10bbb07ca20fb93","url":"_assets/fonts/Oswald/Oswald-VariableFont.ttf"}], {
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
        const endpoint = `${getApiHost()}/push-update-subscription`;

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

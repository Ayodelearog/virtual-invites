module.exports = {
  globDirectory: "./",
  globPatterns: [
    "**/*.{html,css,js,map,svg,gif,png,jpg,webmanifest,json}",
    "_assets/fonts/Inter/Inter-VariableFont.ttf",
    "_assets/fonts/MaterialIcons/material-icons.woff2",
    "_assets/fonts/Oswald/Oswald-VariableFont.ttf",
  ],
  globIgnores: [
    "**/*.map",
    "sw-generator.js",
    "sw.js",
    "sw-src.js",
    ".gitignore",
    "node_modules/*",
    "node_modules/**",
    "js/datatables.net/i18n/*.js",
    "js/datatables.net/i18n/*.mjs",
    "js/libphonenumber-js.min.js",
    "install/img/**",
    "data/**",
    "i/*",
    "i/**",
    "unsubscribe/*",
    "unsubscribe/**",
    "css/material-4.1.1-dist/css/material.css",
    "css/material-4.1.1-dist/css/material.js",
    "js/intl-tel-input-17.0.0/css/demo.css",
    "js/intl-tel-input-17.0.0/css/intlTelInput.css",
    "js/intl-tel-input-17.0.0/js/data.js",
    "js/intl-tel-input-17.0.0/js/intlTelInput-jquery.js",
    "js/intl-tel-input-17.0.0/js/intlTelInput-jquery.min.js",
    "js/intl-tel-input-17.0.0/js/intlTelInput.js",
    "js/linkifyjs/linkify-element.js",
    "js/linkifyjs/linkify-element.min.js",
    "js/linkifyjs/linkify-element.module.js",
    "js/linkifyjs/linkify-html.js",
    "js/linkifyjs/linkify-html.module.js",
    "js/linkifyjs/linkify-jquery.js",
    "js/linkifyjs/linkify-jquery.min.js",
    "js/linkifyjs/linkify-jquery.module.js",
    "js/linkifyjs/linkify-plugin-hashtag.js",
    "js/linkifyjs/linkify-plugin-hashtag.min.js",
    "js/linkifyjs/linkify-plugin-hashtag.module.js",
    "js/linkifyjs/linkify-plugin-mention.js",
    "js/linkifyjs/linkify-plugin-mention.min.js",
    "js/linkifyjs/linkify-plugin-mention.module.js",
    "js/linkifyjs/linkify-plugin-ticket.js",
    "js/linkifyjs/linkify-plugin-ticket.min.js",
    "js/linkifyjs/linkify-plugin-ticket.module.js",
    "js/linkifyjs/linkify-react.js",
    "js/linkifyjs/linkify-react.min.js",
    "js/linkifyjs/linkify-react.module.js",
    "js/linkifyjs/linkify-string.js",
    "js/linkifyjs/linkify-string.min.js",
    "js/linkifyjs/linkify-string.module.js",
    "js/linkifyjs/linkify.js",
    "js/linkifyjs/linkify.module.js",
    "js/qrious/qrious.js",
    "css/material-4.1.1-dist/css/material.min.css",
    "css/material-4.1.1-dist/js/material.js",
  ],
  swSrc: "sw-src.js",
  swDest: "sw.js",
};

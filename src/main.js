// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import { Workbox } from "workbox-window";

//import '~/resources/js/main.js'

// if ("serviceWorker" in navigator) {
//   const wb = new Workbox("/service-worker.js");
//   const swRefresh = document.getElementById("swRefresh");

//   wb.addEventListener("installed", event => {
//     if (event.isUpdate) {
//       swRefresh.classList.remove("hidden");
//     }
//   });

//   wb.register();
// }

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en', class: 'min-h-full antialiased' }

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'text-white bg-blue-100 leading-normal text-lg font-sans' }

}
import '~/resources/scss/main.scss'

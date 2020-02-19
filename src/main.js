// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

//import '~/resources/js/main.js'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "en", class: "min-h-full antialiased" };

  // Add attributes to BODY tag
  head.bodyAttrs = {
    class: "text-white bg-blue-100 leading-normal text-lg font-sans"
  };
  // Add meta to HEAD tag

  router.beforeEach((to, _from, next) => {
    // Use the Vue router to create the og:url tag because we want this tag to point to the current URL
    head.meta.push({
      key: "og:url", // gives us the option to override at the page level
      name: "og:url",
      content: process.env.GRIDSOME_BASE_PATH + to.path
    });

    head.meta.push({
      key: "og:image", // gives us the option to override at the page level
      name: "og:image",
      content: process.env.GRIDSOME_BASE_PATH + "/og-image.jpg"
    });
    next();
  });
}

import "~/resources/scss/main.scss";

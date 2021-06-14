// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollReveal from "gridsome-scroll-reveal";

export default function(Vue, { router, head }) {
  // Remove "generator" meta tag
  const gIndex = head.meta.findIndex((e) => e.name === "generator");

  if (gIndex !== -1) head.meta.splice(gIndex, 1);

  const baseUrl = process.env.URL || process.env.GRIDSOME_BASE_PATH;

  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollReveal);

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "en", class: "bg-gray-100 min-h-full antialiased" };

  // Add attributes to BODY tag
  head.bodyAttrs = {
    class: "text-gray-900 leading-normal text-lg font-sans",
  };
  // Add meta to HEAD tag

  head.meta.push({
    name: "twitter:title",
    content: "Charles E. Amyx, III",
  });

  head.meta.push({
    name: "twitter:description",
    content:
      "The portfolio for Charles E. Amyx, III, a digital art director, designer, photographer, and painter in Ann Arbor, MI.",
  });

  head.meta.push({
    name: "twitter:site",
    content: baseUrl,
  });

  head.meta.push({
    name: "twitter:image",
    content: baseUrl + "/og-image.jpg",
  });

  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });

  head.meta.push({
    name: "og:title",
    content: "Charles E. Amyx, III",
  });

  head.meta.push({
    name: "og:description",
    content:
      "The portfolio for Charles E. Amyx, III, a digital art director, designer, photographer, and painter in Ann Arbor, MI.",
  });

  head.meta.push({
    key: "og:image", // gives us the option to override at the page level
    name: "og:image",
    content: baseUrl + "/og-image.jpg",
  });

  head.meta.push({
    key: "og:type",
    name: "og:type",
    content: "website",
  });

  head.meta.push({
    key: "google-site-verification",
    name: "google-site-verification",
    content: "5h7uTmOQxIiLaWKEyYtjvjgFOO8HJGnqucP3AlVj7JU",
  });

  router.beforeEach((to, _from, next) => {
    const pageUrl = baseUrl + to.path;
    // Use the Vue router to create the og:url tag because we want this tag to point to the current URL
    head.meta.push({
      key: "og:url", // gives us the option to override at the page level
      name: "og:url",
      content: pageUrl,
    });
    head.meta.push({
      key: "canonical",
      name: "canonical",
      content: pageUrl,
    });
    next();
  });
}

import "~/resources/scss/main.scss";

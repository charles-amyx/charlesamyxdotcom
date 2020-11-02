module.exports = {
  siteName: "Charles E. Amyx, III",
  siteUrl: "https://charlesamyx.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "settings/*.json",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Design",
        path: "./content/design/**/*.md",
        refs: {
          category: {
            typeName: "Category",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Paint",
        path: "./content/paint/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Photo",
        path: "./content/photo/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Experience",
        path: "./content/jobs/**/*.md",
      },
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,gif",
        disableTemplatedUrls: false, // Optional

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: "manifest.json",
        title: "Charles E. Amyx, III",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        themeColor: "#284052",
        backgroundColor: "#000000",
        icon: "./src/assets/img/icon.png",
        shortName: "CEAmyxIII", // Optional
        maskableIcon: true, // Optional
        // Apple MacOS Meta Tags
        appleMaskIcon: "favicon.svg", // Optional
        appleMaskIconColor: "#284052", // Optional
        description:
          "The portfolio for Charles E. Amyx, III, a digital art director, designer, photographer, and painter in Ann Arbor, MI.", // Optional
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-8525758-2",
        debug: {
          sendHitTask: process.env.NODE_ENV === "production",
        },
      },
    },
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        host: "https://charlesamyx.com",
        sitemap: "https://charlesamyx.com/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /design/",
          },
        ],
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/contact"],
        config: {
          "/design/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900,
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: false,
      autolinkHeadings: false,
    },
  },
  templates: {
    Design: [
      {
        path: "/design/:title",
        component: "./src/templates/Entry.vue",
      },
    ],
    Category: [
      {
        path: "/category/:title",
        component: "./src/templates/Category.vue",
      },
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@images", "@/assets/img");
  },
};

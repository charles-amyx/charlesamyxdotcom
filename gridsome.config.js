const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "C. E. Amyx, III",
  siteUrl: "https://charlesamyx.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
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
        typeName: "Blog",
        path: "./content/blog/**/*.md",
      },
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "cea-v1",
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        display: "standalone",
        icon_path: "./src/assets/img/icon.png",
        name: "Charles E. Amyx, III",
        short_name: "CEAmyxIII",
        theme_color: "#284052",
        lang: "en",
        start_url: "/",
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
        sitemap: "https://charlesamyx/sitemap.xml",
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
  ],
  transformers: {
    remark: {
      externalLinksTarget: false,
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  templates: {
    Blog: [
      {
        path: "/blog/:title",
        component: "./src/templates/Blog.vue",
      },
    ],
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

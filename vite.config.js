import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { resolve } = require('path');

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        404: resolve(__dirname, '_site', '404.html'),
        main: resolve(__dirname, '_site', 'index.html'),
        work: resolve(__dirname, '_site', 'work', 'index.html'),
        admissions: resolve(
          __dirname,
          '_site',
          'work',
          'undergraduate-admissions',
          'index.html',
        ),
        artsInitiative: resolve(
          __dirname,
          '_site',
          'work',
          'arts-initiative',
          'index.html',
        ),
        campusBlueprint: resolve(
          __dirname,
          '_site',
          'work',
          'campus-maize-and-blueprint',
          'index.html',
        ),
        coe: resolve(
          __dirname,
          '_site',
          'work',
          'college-of-engineering',
          'index.html',
        ),
        debate: resolve(
          __dirname,
          '_site',
          'work',
          'debate-2020',
          'index.html',
        ),
        dei: resolve(
          __dirname,
          '_site',
          'work',
          'diversity-equity-and-inclusion',
          'index.html',
        ),
        eecs: resolve(
          __dirname,
          '_site',
          'work',
          'electrical-engineering-and-computer-science',
          'index.html',
        ),
        ent: resolve(
          __dirname,
          '_site',
          'work',
          'entrepreneurship-minor',
          'index.html',
        ),
        mysmtoolkit: resolve(
          __dirname,
          '_site',
          'work',
          'my-mstoolkit',
          'index.html',
        ),
        ofa: resolve(
          __dirname,
          '_site',
          'work',
          'office-of-financial-aid',
          'index.html',
        ),
        painGuide: resolve(
          __dirname,
          '_site',
          'work',
          'pain-guide',
          'index.html',
        ),
        poverty: resolve(
          __dirname,
          '_site',
          'work',
          'poverty-solutions',
          'index.html',
        ),
        publishing: resolve(
          __dirname,
          '_site',
          'work',
          'publishing',
          'index.html',
        ),
        seas: resolve(__dirname, '_site', 'work', 'seas', 'index.html'),
        tmenc: resolve(
          __dirname,
          '_site',
          'work',
          'the-michigan-engineer-news-center',
          'index.html',
        ),
        regents: resolve(
          __dirname,
          '_site',
          'work',
          'the-regents-of-the-university-of-michigan',
          'index.html',
        ),
        umd: resolve(__dirname, '_site', 'work', 'um-dearborn', 'index.html'),
        umf: resolve(__dirname, '_site', 'work', 'um-flint', 'index.html'),
        experience: resolve(__dirname, '_site', 'experience', 'index.html'),
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Amyx Portfolio',
        short_name: 'amyx',
        description:
          'Amyx Portfolio, powered by Vite with Tailwind CSS and Alpine.js.',
        scope: '/',
        start_url: '/',
        display: 'browser',
        theme_color: '#00AAFF',
        background_color: '#00AAFF',
        icons: [
          {
            src: 'pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'pwa-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'pwa-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});

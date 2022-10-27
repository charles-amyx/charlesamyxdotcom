import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { resolve } = require('path');

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        404: resolve(__dirname, '_site', '404', 'index.html'),
        main: resolve(__dirname, '_site', 'index.html'),
        work: resolve(__dirname, '_site', 'work', 'index.html'),
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

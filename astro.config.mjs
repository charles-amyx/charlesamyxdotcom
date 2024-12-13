// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

import { z } from 'zod';

// https://astro.build/config
export default defineConfig({
  logLevel: 'debug',
  site: 'https://charlesamyx.com',
  integrations: [
    tailwind(), 
    mdx(), 
    sitemap(), 
    alpinejs({
      plugins: ['@alpinejs/intersect']
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets'
      }
    }
  },
  viewTransitions: true,
  devToolbar: {
    enabled: false,
  },
});

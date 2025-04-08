// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

import { z } from 'zod';

// https://astro.build/config
export default defineConfig({
  site: 'https://charlesamyx.com',
  integrations: [
    tailwind(), 
    mdx(), 
    sitemap(), 
    alpinejs({
      entrypoint: 'src/entrypoint'
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets'
      }
    }
  },
  devToolbar: {
    enabled: false,
  }
});

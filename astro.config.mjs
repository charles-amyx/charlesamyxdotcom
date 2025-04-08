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
    },
    build: {
      // Optimize asset caching
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      }
    }
  },
  image: {
    // Enable WebP format
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
        formats: ['avif', 'webp', 'jpeg'],
        formatOptions: {
          jpg: {
            quality: 80,
            progressive: true
          },
          webp: {
            quality: 80,
            effort: 6
          },
          avif: {
            quality: 80,
            effort: 6
          }
        }
      }
    }
  },
  devToolbar: {
    enabled: false,
  }
});

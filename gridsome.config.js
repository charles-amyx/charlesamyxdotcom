module.exports = {
  siteName: 'Charles E. Amyx, III',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Charles-Amyx',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'Gridsome',
          themeColor: '#666600',
          backgroundColor: '#ffffff',
          icon: 'src/favicon.png', // must be provided
          msTileImage: '',
          msTileColor: '#666600'
      }
  }
  ],
  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/BlogEntry.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: './src/templates/Category.vue'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }]
  },
  chainWebpack: config => {
    config.resolve.alias.set('@modules', '@/resources/js/modules');
    config.resolve.alias.set('@utilities', '@/resources/js/utilities');
    
  }
}

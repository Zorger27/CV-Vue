const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Portfolio',
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({ //СУПЕР-ВАЖНАЯ штука для ссылок на файлы (pdf или картинки), расположенные на самом сервере!!!
        patterns: [
          {
            from: "src/assets",
            to: "assets"
          },
          {
            from: "src/assets/analytics/robots.txt",
            to: "",
            toType: "dir",
            force: true
          }
        ]
      }),
      new HtmlWebpackTagsPlugin({
        // links: [
        //   {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        //     attributes: {
        //       rel: 'stylesheet'
        //     },
        //   },
        // ],
        scripts: [
          'https://www.googletagmanager.com/gtag/js?id=G-RZHR947YVN',
          '/assets/analytics/ganal.js',
          // 'https://unpkg.com/@codersrank/summary@0.9.13/codersrank-summary.min.js',
          // 'https://unpkg.com/@codersrank/skills-chart@0.9.21/codersrank-skills-chart.min.js'
        ],
        append: true,
        publicPath: false,
        useHash: false,
        metas: [
          {attributes: {name: 'title', content: 'Portfolio'}},
          {attributes: {name: 'google-site-verification', content: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y'}},
          {attributes: {name: 'description', content: 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.'}},
          {attributes: {property: 'og:title', content: 'Portfolio'}},
          {attributes: {property: 'twitter:title', content: 'Portfolio'}},
          {attributes: {property: 'og:description', content: 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.'}},
          {attributes: {property: 'twitter:description', content: 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.'}},
          {attributes: {property: 'og:image', content: 'https://zorin.expert/assets/ogimage/all/OGP_All.jpg'}},
          {attributes: {property: 'twitter:image', content: 'https://zorin.expert/assets/ogimage/all/OGP_All.jpg'}},
          {attributes: {property: 'og:url', content: 'https://Zorin.Expert'}},
          {attributes: {property: 'og:type', content: 'website'}},
          {attributes: {property: 'og:site_name', content: 'https://Zorin.Expert'}},
          {attributes: {property: 'twitter:card', content: 'summary_large_image'}},
          {attributes: {name: 'author', content: 'Anatolii Zorin'}},
          {attributes: {name: 'robots', content: 'index,follow'}}
        ]
      }),
      // new HtmlWebpackPlugin({
      //     template: 'public/index.html',
      //     title: 'Portfolio'
          // meta: {
          //     'google-site-verification': 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y',
          // }
          // // favicon: './public/favicon.png',
      // }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/img/favbig.png',
        mode: 'webapp',
        devMode: 'webapp',
        outputPath: 'assets/favicon/', // Куда будут на сервере скидываться созданные favicon-ки
        prefix: 'assets/favicon/', // Этот префикс для файла index.html, чтобы правильно прописать пути иконок с сервера!
        manifest: './src/assets/manifest/manifest.webmanifest',
        favicons: {
          appName: 'Portfolio',
          appDescription: 'Anatolii Zorin\'s Portfolio',
          developerName: 'Zorger',
          developerURL: null
        }
      }),
      new SitemapPlugin({
        base: 'https://zorin.expert', // Базовый URL моего сайта
        paths: [
          { path: '/', priority: 1.0, changefreq: 'daily' },
          { path: '/projects', priority: 0.9, changefreq: 'weekly' },
          { path: '/education', priority: 0.9, changefreq: 'weekly' },
          { path: '/experience', priority: 0.9, changefreq: 'weekly' },
          { path: '/skills', priority: 0.9, changefreq: 'weekly' },
          { path: '/certificates', priority: 0.9, changefreq: 'weekly' },
          { path: '/certificates/backend', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/frontend', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/database', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/designer', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/pm', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/english', priority: 0.8, changefreq: 'monthly' },
          { path: '/certificates/other', priority: 0.8, changefreq: 'monthly' },
          { path: '/about', priority: 0.9, changefreq: 'weekly' },
          { path: '/extra', priority: 0.9, changefreq: 'weekly' },
          { path: '/extra/calculator', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/cryptocur', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/graphics', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/graphics/cube', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/graphics/cubejs', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/graphics/cube3d', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/graphics/creep3d', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/graphics/configurator3d', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/graphics/couture3d', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/rates', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/games', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/games/memory', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/notes', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/todo', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/weather', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/tasks', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/tasks/palindrome', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/fizzbuzz', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/anagram', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/findvowels', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/fibonacci', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/ai', priority: 0.7, changefreq: 'monthly' },
          { path: '/extra/ai/picsum', priority: 0.6, changefreq: 'monthly' },
          { path: '/extra/ai/pixabay', priority: 0.6, changefreq: 'monthly' },
        ],
        options: {
          skipgzip: true
        },
      }),
    ]
  }
})
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
            from: `src/assets`,
            to: 'assets'
          }
        ]
      }),
      new HtmlWebpackTagsPlugin({
        links: [
          {
            // path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
            path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            attributes: {
              rel: 'stylesheet'
            },
          },
        ],
        scripts: [
          'https://www.googletagmanager.com/gtag/js?id=G-RZHR947YVN',
          '/assets/analytics/ganal.js',
          'https://unpkg.com/@codersrank/summary@0.9.13/codersrank-summary.min.js',
          'https://unpkg.com/@codersrank/skills-chart@0.9.21/codersrank-skills-chart.min.js'
        ],
        append: true,
        publicPath: false,
        useHash: false,
        metas: [
          {attributes: {name: 'google-site-verification', content: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y'}},
          {attributes: {property: 'description', content: 'Portfolio is a significantly expanded CV with all diplomas and certificates, a detailed description of the experience gained in previous jobs, etc.'}},
          {attributes: {
              property: 'og:title',
              content: 'Portfolio'
            }
          },
          {
            attributes: {
              property: 'og:description',
              content: 'My Portfolio'
            }
          },
          {
            attributes: {
              property: 'og:image',
              content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Home.jpg'
            }
          },
          {
            attributes: {
              property: 'twitter:image',
              content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Home.jpg'
            }
          },
          {
            attributes: {
              property: 'og:url',
              content: 'https://Zorin.Expert'
            }
          },
          {
            attributes: {
              property: 'og:type',
              content: 'website'
            }
          }
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
        logo: './src/assets/favicon/favbig.png',
        mode: 'webapp',
        devMode: 'webapp',
        outputPath: 'assets/favicon-img/', // Куда будут на сервере скидываться созданные favicon-ки
        prefix: 'assets/favicon-img/', // Этот префикс для файла index.html, чтобы правильно прописать пути иконок с сервера!
        favicons: {
          appName: 'Portfolio',
          appDescription: 'My Portfolio',
          developerName: 'Zorger',
          developerURL: null
        }
      }),
      new SitemapPlugin({
        base: 'https://zorin.expert', // Базовый URL моего сайта
        // paths: routes.getRoutes().map(route => route.path), // Используем все пути из маршрутов.
        paths: [
          { path: '/', priority: 1, changefreq: 'always' },
          { path: '/login', priority: 1, changefreq: 'always' },
          { path: '/projects', priority: 1, changefreq: 'daily' },
          { path: '/education', priority: 1, changefreq: 'daily' },
          { path: '/experience', priority: 1, changefreq: 'daily' },
          { path: '/skills', priority: 1, changefreq: 'daily' },
          { path: '/certificates', priority: 1, changefreq: 'always' },
          { path: '/certificates/backend', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/frontend', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/database', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/designer', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/pm', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/english', priority: 0.9, changefreq: 'daily' },
          { path: '/certificates/other', priority: 0.9, changefreq: 'daily' },
          { path: '/about', priority: 1, changefreq: 'always' },
          { path: '/extra', priority: 1, changefreq: 'always' },
          { path: '/extra/calculator', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/cryptocur', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/cube', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/rates', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/games', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/games/memory', priority: 0.7, changefreq: 'daily' },
          { path: '/extra/notes', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/todo', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/weather', priority: 0.8, changefreq: 'daily' },
          { path: '/extra/tasks', priority: 0.6, changefreq: 'daily' },
          { path: '/extra/tasks/palindrome', priority: 0.5, changefreq: 'weekly' },
          { path: '/extra/tasks/fizzbuzz', priority: 0.5, changefreq: 'weekly' },
          { path: '/extra/tasks/anagram', priority: 0.5, changefreq: 'weekly' },
          { path: '/extra/tasks/findvowels', priority: 0.5, changefreq: 'weekly' },
          { path: '/extra/tasks/fibonacci', priority: 0.5, changefreq: 'weekly' },
          { path: '/extra/ai', priority: 1, changefreq: 'always' },
          { path: '/extra/ai/picsum', priority: 1, changefreq: 'always' },
          { path: '/extra/ai/pixabay', priority: 1, changefreq: 'always' },
        ],
        options: {
          skipgzip: true
        },
      }),
    ]
  }
})
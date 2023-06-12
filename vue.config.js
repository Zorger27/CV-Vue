const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default;
// const routes = require('src/router/index').default; // Путь к файлу с маршрутами

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
            path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
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
          {
            attributes: {
              name: 'google-site-verification',
              content: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y'
            }
          }
        ]
      }),
      // new HtmlWebpackPlugin({
      //     template: 'public/index.html',
      //     title: 'Curriculum VITAE (SPA)',
      //     meta: {
      //         'google-site-verification': 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y',
      //     }
      //     // favicon: './public/favicon.png',
      // })
      new FaviconsWebpackPlugin({
        logo: './src/assets/favicon/favbig.png',
        mode: 'webapp',
        devMode: 'webapp',
        outputPath: 'assets/favicon-img/', // Куда будут на сервере скидываться созданные favicon-ки
        prefix: 'assets/favicon-img/', // Этот префикс для файла index.html, чтобы правильно прописать пути иконок с сервера!
        favicons: {
          appName: 'Portfolio',
          appDescription: 'My Portfolio on Vue.JS',
          developerName: 'Zorger',
          developerURL: null
        }
      }),
      new SitemapPlugin({
        base: 'https://zorin.expert', // Базовый URL моего сайта
        // paths: routes.getRoutes().map(route => route.path), // Используем все пути из маршрутов.
        paths: [
          { path: '/', priority: 1, changefreq: 'weekly' },
          { path: '/login', priority: 1, changefreq: 'weekly' },
          { path: '/projects', priority: 1, changefreq: 'weekly' },
          { path: '/education', priority: 1, changefreq: 'weekly' },
          { path: '/experience', priority: 1, changefreq: 'weekly' },
          { path: '/skills', priority: 1, changefreq: 'weekly' },
          { path: '/certificates', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/backend', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/frontend', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/database', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/designer', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/pm', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/english', priority: 1, changefreq: 'weekly' },
          { path: '/certificates/other', priority: 1, changefreq: 'weekly' },
          { path: '/about', priority: 0.8, changefreq: 'monthly' },
          { path: '/extra', priority: 1, changefreq: 'weekly' },
          { path: '/extra/calculator', priority: 1, changefreq: 'weekly' },
          { path: '/extra/cryptocur', priority: 1, changefreq: 'weekly' },
          { path: '/extra/cube', priority: 1, changefreq: 'weekly' },
          { path: '/extra/rates', priority: 1, changefreq: 'weekly' },
          { path: '/extra/games', priority: 1, changefreq: 'weekly' },
          { path: '/extra/games/memory', priority: 1, changefreq: 'weekly' },
          { path: '/extra/notes', priority: 1, changefreq: 'weekly' },
          { path: '/extra/tasks', priority: 1, changefreq: 'weekly' },
          { path: '/extra/todo', priority: 1, changefreq: 'weekly' },
          { path: '/extra/weather', priority: 1, changefreq: 'weekly' },
          { path: '/extra/tasks/palindrome', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/fizzbuzz', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/anagram', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/findvowels', priority: 0.5, changefreq: 'monthly' },
          { path: '/extra/tasks/fibonacci', priority: 0.5, changefreq: 'monthly' },
        ],
        options: {
          // Опции настройки плагина.
        },
      }),
    ]
  }
})
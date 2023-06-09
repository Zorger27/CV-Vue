const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
        // tags: [
        //   {
        //     path: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        //     external: true,
        //   },
        // ],
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
      })
    ]
  }
})
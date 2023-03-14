const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: '/',
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Curriculum VITAE (SPA)',
        }
    },
    configureWebpack: {
        output: {
            // publicPath: true
        },
        plugins: [
            new CopyWebpackPlugin({ //СУПЕР-ВАЖНАЯ штука для ссылок на файлы (pdf или картинки), расположенные на самом сервере!!!
                patterns: [
                    {
                        from: `src/assets`,
                        to: 'assets'
                    }
                ]
            }),
            // new HtmlWebpackPlugin(),
            new HtmlWebpackTagsPlugin({
                metas: [
                    {
                        // name: 'google-site-verification',
                        // path: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y',
                        attributes: {
                            // name: 'google-site-verification'
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
                    appName: 'CV on Vue',
                    appDescription: 'My Curriculum VITAE (SPA) on Vue.JS',
                    developerName: 'Zorger',
                    developerURL: null
                }
            })
        ]
    }
})
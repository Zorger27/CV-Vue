const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Curriculum VITAE (SPA)',
        }
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: `./public/assets`,
                        to: 'assets'
                    }
                ]
            }),
            // new HtmlWebpackPlugin({
            //     title: 'Webpack',
            //     // favicon: './public/favicon.png',
            //     template: '/public/index.html',
            //     filename: 'index.html'
            // }),
            new FaviconsWebpackPlugin({
                logo: './src/assets/favicon/favbig.png',
                favicons: {
                    appName: 'CV on Vue',
                    appDescription: 'My Curriculum VITAE (SPA) on Vue.JS',
                    developerName: 'Zorger',
                    developerURL: null,
                }
            })
        ]
    }
})
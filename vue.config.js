const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
        plugins: [
            new CopyWebpackPlugin({ //СУПЕР-ВАЖНАЯ штука!!!
                patterns: [
                    {
                        from: `src/assets`,
                        to: 'assets'
                    }
                ]
            }),
            // new HtmlWebpackPlugin({
            //     title: 'Curriculum VITAE (SPA)',
            //     // favicon: './public/favicon.png',
            //     template: 'public/index.html',
            //     filename: '/index1.html'
            // }),
            new FaviconsWebpackPlugin({
                logo: './src/assets/favicon/favbig.png',
                mode: 'webapp',
                devMode: 'webapp',
                outputPath: '../assets/favicon-img',
                favicons: {
                    appName: 'CV on Vue',
                    appDescription: 'My Curriculum VITAE (SPA) on Vue.JS',
                    developerName: 'Zorger',
                    developerURL: 'https://zorger27.github.io'
                }
            })
        ]
    }
})
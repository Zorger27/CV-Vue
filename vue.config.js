const {defineConfig} = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
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
            new FaviconsWebpackPlugin({
                logo: './src/assets/favicon/android-chrome-512x512.png',
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
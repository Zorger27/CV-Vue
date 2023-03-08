const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxAssetSize: 5000000
        }
        // plugins: [
        //     new HtmlWebpackPlugin({
        //         filename: 'my-index.html',
        //         template: 'public/index.html',
        //         title: 'My Curriculum VITAE (SPA)'
        //     }),
        // ]
    }
})
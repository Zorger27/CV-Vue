const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxAssetSize: 5000000
        }
    }
})
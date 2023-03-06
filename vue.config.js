const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxAssetSize: 5000000
        }
    }
})
// module.exports = {
//   chainWebpack: config => {
//     const imagesRule = config.module.rule('images')
//     imagesRule.uses.clear()
//     imagesRule.use('file-loader')
//         .loader('file-loader')
//         .tap(options => {
//           // измените расширения, которые должны быть обработаны
//           options.extensions = ['jpg', 'jpeg', 'png', 'gif']
//           return options
//         })
//   }
// }

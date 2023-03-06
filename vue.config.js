const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxAssetSize: 5000000
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                options.limit = 5000000;
                return options;
            });
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

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true
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

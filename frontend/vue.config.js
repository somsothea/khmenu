const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://khmenu.cloud',
    //proxy: 'http://192.168.1.21:4000/',
    //proxy: process.env.VUE_APP_URL,
  },
})

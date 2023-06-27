const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* 覆盖webpack的配置 */
  devServer: { // 自定义服务配置
    open: true, // 自动打开浏览器
    // port: 3000
  },
  //....其他配置
  lintOnSave: false,//关闭eslint检查
})

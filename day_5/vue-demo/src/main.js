import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',//vue实例编译后的模板挂载到index.html的id叫app的标签上  
  // 就不用$mounts手动调用  应该是内置webpack 默认public 下的index.html
  render: h => h(App),
})

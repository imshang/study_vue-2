import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)//注册element组件及功能
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

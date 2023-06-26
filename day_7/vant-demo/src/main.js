import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant';
Vue.use(Button) // Button组件全局注册, 真正注册的组件名VanButton
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './05-demo.vue'
import "./styles/base.css"
import "./styles/index.css"
// 目标: 全局注册 (一处定义到处使用)
// 1. 创建组件(文件夹中的) - 文件名.vue
// 2. 引入组件
import Pannel1 from './components/Pannel1'
// 3. 全局 - 注册组件
Vue.component('Pannel1', Pannel1)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

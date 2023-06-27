import Vue from 'vue'
import App from './17-demo.vue'
import "bootstrap/dist/css/bootstrap.css"
import moment from 'moment'

Vue.config.productionTip = false

// 方式1：全局过滤器  任意的.vue文件内直接使用
// 一定要将过滤器放在new Vue的前面
// 语法：Vue.filter("过滤器名", (值) => { return "返回处理后的值" })
// Vue.filter("reverse", (val) => {
//   // 只要方法返回的是对象本身，那么就可以使用链式编程。
//   return val.split("").reverse().join("")
// })

// 过滤器接参数
// Vue.filter("reverse", (val, s) => {
//   // 只要方法返回的是对象本身，那么就可以使用链式编程。
//   return val.split("").reverse().join(s)
// })
// demo 过滤器
Vue.filter("reverse", (val) => {
  return moment(val).format('YYYY-MM-DD')
})

new Vue({
  render: h => h(App),
}).$mount('#app')



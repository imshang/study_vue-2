import Vue from 'vue'
import App from './04-自定义指令.vue'

Vue.config.productionTip = false
// 全局指令
Vue.directive('gfocus', {
  inserted(el) {    // 参数指向所在标签, 被插入到网页上触发(一次)
    el.focus();    //触发聚焦事件方法
  }
})

// 目标: 自定义指令传值
Vue.directive('color', {
  inserted(el, binding) {//binding 对象用value属性获取值
    el.style.color = binding.value
  },
  update(el, binding) {// update方法 - 指令对应数据/标签更新时, 此方法执行
    el.style.color = binding.value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

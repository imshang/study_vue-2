import Vue from 'vue'
import App from './App.vue'

import './styles/reset.css'//初始化样式
import './mobile/flexible.js'//适配

import router from './router'

import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, List, Cell, CellGroup, Icon, Search } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);


// 测试封装的api方法
// import { recommendMusicApi } from './api'
// async function fn() {
//   const res = await recommendMusicApi()
//   console.log(res)
// };
// fn()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

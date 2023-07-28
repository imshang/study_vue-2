import Vue from 'vue'
import Vuex from 'vuex'
// 引入自定义模块
import category from './modules/category'
import newlist from './modules/newlist'

Vue.use(Vuex)

// 全局的
export default new Vuex.Store({
  state: {
  },
  getters: {
    // 建立对于模块化的快捷访问
    category: state => state.category.category,//建立对于category模块下的category属性的快捷访问
    currentId: state => state.category.currentId,
    // 使用 [] 取值
    currentList: state => state.newlist.allData[state.category.currentId] || []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,//category:category
    newlist
  }
})

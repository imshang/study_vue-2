import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'//引入vuex
Vue.config.productionTip = false
Vue.use(vuex)//注册Vuex的功能 Vue.use的方法实际上是调用了Vuex中的一个install方法
const store = new vuex.Store({//实例化Vuex的构造参数 state mutations actions
  //定义state 管理数据  
  state: {
    // 定义一个公共的存储状态
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 定义mutations  修改state必须通过mutations
  // mutations是一个对象，对象中存放修改state的方法
  mutations: {
    // 方法里参数 第一个参数是当前store的state属性
    // 第二个参数 payload 载荷 运输参数 调用mutaiions的时候 可以传递参数（任何形式、任何类型的值） 传递载荷
    addCount(state, payload) {
      state.count += payload
    }
  },
  // 定义actions  异步动作
  // 从后端获取一个数， 更新到state的count中
  actions: {
    // 方法
    // action方法参数   第一个参数  执行的上下文对象
    // context 相当于组件中的this.$store store的运行实例
    // 第二个参数 调用者传过来的参数
    getAsyncCount(context, params) {
      // 做异步的请求
      setTimeout(() => {
        // 一秒钟之后 要给一个数 去修改state
        // 交给mutations处理数据
        context.commit('addCount', params)
      }, 1000)
    }
  },

  // 定义getters      //放置的所有vuex的计算属性
  getters: {
    // 在跟级别的getters 引入子模块
    // token方法  返回这个token 然后用mapGetters方法引用
    token: state => state.user.token,
    // name方法
    name: state => state.setting.name,
    // getters函数中的方法第一个参数是 state
    // 必须要有返回值：
    filterList: function (state) {
      return state.list.filter(item => item > 5)
    },

  },

  // 模块化
  modules: {
    // 放置于模块的属性
    // 子模块
    user: {
      // 保证内部模块的高封闭性，我们可以采用namespaced来进行设置
      namespaced: true,
      state: {
        token: '12345'
      },
      mutations: {
        //  这里的state表示的是user的state 全局还是能够调用
         updateToken (state) {
            state.token = '678910'
         },
    },
  },
    setting: {
      state: {
        name: 'Vuex实例'
      }
    }
  }
})//实例化一个vuex对象

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

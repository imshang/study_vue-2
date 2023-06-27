import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find.vue'//@是src的绝对路径 webpack内部配置的别名
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound.vue'
import Recommend from '@/views/second/Recommend'
import Ranking from '@/views/second/Ranking'
import SongList from '@/views/second/SongList'

// 1.下载并且导入路由
import VueRouter from 'vue-router'

// 2.注册全局组件,在vue中，使用vue的插件，都需要调用Vue.use()
Vue.use(VueRouter)

// 3.规则数组  映射关系
const routes = [
  {
    // 默认根路径
    path: "/",
    name: 'Index',//路由名字 随便起 不是跟谁对应  只对应当前路径
    redirect: '/find'//redirect设置要重定向哪个路由路径
  },
  {
    path: "/find",
    name: 'Find',
    component: Find,//页面组件
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songlist",
        component: SongList
      }
    ]
  },
  {
    path: "/my",
    name: 'My',
    component: My
  },
  {
    path: "/part",
    name: 'Part',
    component: Part
  },
  {
    path: "/part/:username/:id",//有:的路径代表要接收具体的值
    component: Part
  },
  // 404在最后(规则是从前往后逐个比较path)
  {
    path: "*",
    component: NotFound
  }
]
// 4.生成路由对象
const router = new VueRouter({
  routes,//routes是固定的key(传入规则数组)
  mode: "history" // 本地有webpack开发服务器做出了设置,所以不会找文件夹;打包上线后需要后台服务器支持, 默认不写是hash
})

// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源 上一个路由
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
const isLogin = true; // 登录状态(未登录)
router.beforeEach((to, from, next) => {
  console.log(from)
  if (to.path === "/my" && isLogin === false) {
    alert("请登录")
    next(false) // 阻止路由跳转
  } else {
    next() // 正常放行
  }
})

Vue.config.productionTip = false

// 5.路由对象注入到vue实例中,this可以访问$route和$router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

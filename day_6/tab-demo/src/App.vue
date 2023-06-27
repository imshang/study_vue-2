<template>
  <div>
    <MyHeader background="blue" color title="TabBar案例"></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @getComName="fn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
// 目标: 完成底部封装
// 1. MyTabBar.vue 组件标签+样式 准备
// 2. 字体图标引入
// 3. 准备底部数据
// 4. 使用MyTabBar组件, 传入数据(父->子), 循环产生底部导航
// 5. 子组件内props自定义检验规则(2-5项)
// 6. 子组件内循环产生底部导航
import MyTable from './components/MyTable.vue';
import MyTabBar from './components/MyTabBar.vue';
// 目标: 切换组件显示
// 1. 创建组件 - 编写内容
// 2. 引入App.vue注册
// 3. 挂载点设置is
// 4. 切换comName的值(重要)
// 5. 底部导航点击- MyTabBar.vue里
// 子 -> 父技术 (传要切换的组件名出来) 
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsInfo from './views/MyGoodsInfo.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
export default {
  data() {
    return {
      comName: 'MyGoodsList',
      tabList: [//底部导航的数据
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ]
    }
  },

  components: {
    MyHeader,
    MyTable,
    MyTabBar,
    MyUserInfo: MyGoodsInfo,
    MyGoodsList,
    MyGoodsSearch
  },
  methods: {
    // 子传父 注意绑定方法是在父亲引用的子组件上
    fn(name) {
      this.comName = name;
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
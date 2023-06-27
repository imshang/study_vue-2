<template>
  <div>
    <!-- <h1>1.生命周期</h1>
  <Life v-if="isShow"></Life>
  <button @click="isShow=false">销毁</button> -->
    <!-- <h1>2.$refs的使用</h1>
  <More></More> -->
    <!-- <h1>3.vue更新DOM是异步的</h1>
  <p ref="myP">{{ count }}</p>
  <button @click="btn">点击count+1, 马上提取p标签内容</button> -->
    <!-- <h1>4. $nextTick场景</h1>
    <TickVue></TickVue> -->
    <h1>5. 组件的name属性</h1>
    <DemoCc></DemoCc>
  </div>
</template>

<script>
import Life from './components/Life.vue'
import More from './components/More.vue'
import Demo from './components/Demo.vue'
import TickVue from './components/Tick.vue'
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  components: {
    Life,
    More,
    // 使用引入Demo组件的自定义名字 [Demo.name] 固定写法   [引入的名字.name]:引入的名字
    [Demo.name]: Demo,
    TickVue
  },
  methods: {
    btn() {
      this.count++; // vue监测数据更新, 开启一个DOM更新队列(异步任务)  这是异步任务
      console.log(this.$refs.myP.innerHTML); // 0  这是同步任务  先执行这里了
      // 原因: Vue更新DOM异步
      // 解决: this.$nextTick()
      // 过程: DOM更新完会挨个触发$nextTick里的函数体
      // 等待DOM异步更新后,拿到DOM更新后的的一个结果
      this.$nextTick(() => {
        // 用箭头函数 this找外层 指向组件对象
        console.log(this.$refs.myP.innerHTML); // 1
      })
    },

  }
}
</script>

<style></style>

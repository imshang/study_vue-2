<template>
  <div>
    <p>学习生命周期</p>
    <p>{{ msg }}</p>
    <p id="myP">1</p>
    <ul id="myUL">
      <li v-for="(val, index) in arr" :key="index">{{ val }}</li>
    </ul>
    <button @click="add">点击添加</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue',
      arr: [1, 2, 3, 4],
      timer: null,//保存计时器
    }
  },
  methods: {
    add() {
      this.arr.push(1000)
    }
  },
  // 一. 初始化
  // new Vue()以后, vue内部给实例对象添加了一些属性和方法, data和methods初始化"之前"
  beforeCreate() {
    console.log('beforeCreate 执行')
    console.log(this.msg)
  },
  // data和methods初始化以后
  // 场景: 网络请求, 注册全局事件
  created() {
    console.log('created 执行');
    console.log(this.msg);
    this.timer = setInterval(() => {
      console.log('计时器')
    }, 1000)
  },

  // 二. 挂载
  // 真实DOM挂载之前
  // 场景: 预处理data, 不会触发updated钩子函数
  beforeMount() {
    console.log("beforeMount -- 执行");
    console.log(document.getElementById("myP")); // null

    this.msg = "重新值"
  },
  // 真实DOM挂载以后
  // 场景: 挂载后真实DOM
  mounted() {
    console.log("mounted -- 执行");
    console.log(document.getElementById("myP")); // p
  },

  // 三. 更新
  // 前提: data数据改变才执行
  // 更新之前
  beforeUpdate() {
    console.log("beforeUpdate -- 执行");
    console.log(document.querySelectorAll("#myUL>li")[4]); // undefined
  },
  // 更新之后
  // 场景: 获取更新后的真实DOM
  updated() {
    console.log("updated -- 执行");
    console.log(document.querySelectorAll("#myUL>li")[4]); // li
  },

  // 四. 销毁
  // 前提: v-if="false" 销毁Vue实例
  // 场景: 移除全局事件, 移除当前组件, 计时器, 定时器(注意是当前组件), eventBus移除事件$off方法
  beforeDestroy() {
    console.log('beforeDestroy -- 执行');
    clearInterval(this.timer)
  },
  destroyed() {
    console.log("destroyed -- 执行");
  }
}
</script>

<style></style>
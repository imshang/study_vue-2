<!-- vue指令:   v-on事件绑定-->
<template>
  <div>
    <p>你要买商品的数量: {{ count }}</p>
    <!-- 语法 v-on:事件名="要执行的少量代码"-->
    <button v-on:click="count = count + 1">增加1</button>
    <!-- v-on:事件名="methods中的函数" v-on:事件名="methods中的函数(实参)"  -->
    <button v-on:click="addFn">增加1个</button>
    <button v-on:click="addCountFn(5)">一次加5件</button>
    <!-- - 简写: @事件名="methods中的函数" -->
    <button @click="subFn">减少</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  // ...其他省略
  methods: {
    addFn() {
      // this代表export default后面的组件对象{}(下属有data里return出来的属性)
      // data函数会把对把对象挂到当前组件对象(export default后面的组件对象{})上
      this.count++;
    },
    addCountFn(num) {
      this.count += num;
    },
    subFn() {
      this.count--;
    },
  },
};
</script>
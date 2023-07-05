<template>
  <div>
    <!-- 原始形式应用 -->
    <!-- vuex版本不对，获取不到store，vue默认vue3版本，vuex默认vuex4版本，vuex4只能在vue3中使用，在vue2中能使用vuex3,那么不能默认下载最新的版本 -->
    <div>原始形态获取state状态:{{ this.$store.state.count }}</div>
    <!-- 计算属性获取 -->
    <div>辅助函数mapState获取state状态(借助了computed){{ count }}</div>
    <hr />
    <chilidA></chilidA>
    <hr />
    <button @click="test1">原始形式异步调用action</button>
    <button @click="test2">传参形式异步调用(借助了methods)action</button>
    <!-- 18这个参数同样对应 actions 中getAsyncCount方法的第二个参数-->
    <button @click="getAsyncCount(18)">辅助函数形式异步调用(接住了methods)action</button>
    <hr>
    <childB></childB>
  </div>
</template>

<script>
// mapState是辅助函数，帮助我们把store中的数据映射到 组件的计算属性中, 它属于一种方便用法
import { mapState, mapActions } from "vuex";
import chilidA from "@/components/child-a";
import childB from "@/components/child-b.vue"
export default {
  name: "App",
  // 把state中数据，定义在组件内的计算属性中
  computed: {
    // count() {
    //   // 来源于vuex
    //   return this.$store.state.count;
    // },
    // 采用数组形式引入state属性
    // 利用**延展运算符**将导出的状态映射给计算属性
    ...mapState(["count"]),
  },
  components: {
    chilidA,
    childB
  },
  methods: {
    test1() {
      // 原始形式调用
      // commit是提交mutations
      // dispatch 调用action
      // dispatch(action的名称)
      // this.$store.dispatch('getAsyncCount')
    },
    test2() {
      // 传递参数调用
      this.$store.dispatch("getAsyncCount", 11);
    },
    // 辅助函数调用
    ...mapActions(["getAsyncCount"]),
  },
};
</script>

<style>
</style>

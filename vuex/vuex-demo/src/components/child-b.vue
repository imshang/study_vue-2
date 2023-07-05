<template>
  <div>
    <!-- 子模块.属性 -->
    <div>全局调用</div>
    <div>获取模块化的的user状态方法一{{ $store.state.user.token }}</div>
    <div>获取模块化的的user状态方法二{{ token }}{{ name }}</div>
    <button @click="updateToken">全局调用修改token</button>

    <div>命名空间(namespace)调用</div>
    <button @click="updateToken2">路径形式调用修改token</button>
    <button @click="test">辅助函数修改token</button>
    <button @click="updateToken">createNamespacedHelpers创建user模块的辅助函数</button>
  </div>
</template>

<script>
//测试createNamespacedHelpers创建基于某个命名空间辅助函数
// import {mapMutations} from 'vuex'
import { mapGetters,  createNamespacedHelpers } from "vuex";
// user模块下的mapMutations
const { mapMutations } = createNamespacedHelpers("user");
export default {
  computed: {
    ...mapGetters(["token", "name"]),
  },
  methods: {
    // 这个updateToken对应user模块下的
    ...mapMutations(["updateToken"]),
    ...mapMutations(["user/updateToken1"]),
    test() {
      this["user/updateToken"]();
    },
    // 采用路径方式直接调用
    updateToken2() {
      this.$store.commit("user/updateToken1");
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <div>原始形态获取mutation</div>
    <button @click="btn">+1</button>
    <hr />
    <div>辅助函数mapMutations获取mutation(借助了methods)</div>
    <!-- vue中方法的默认第一个参数  事件参数对象  再传入参数相当于第二个参数payload -->
    <button @click="addCount(100)">+100</button>
    <hr>
    <div>原始形式使用getters{{ $store.getters.filterList }}</div>
    <div>辅助形式使用(借用了computed)getters(){{ filterList }}</div>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex";
export default {
  methods: {
    btn() {
      // 调用mutation方法 提交mutation
      // commit('muations名称', 1)  commit的第二个参数去给muations 传入参数payload
      // 100就是传递的载荷
      this.$store.commit("addCount", 5);
    },
    ...mapMutations(["addCount"]), //此时组件方法中就会拥有一个对应的addCount方法
  },
  computed: {
    ...mapGetters(['filterList'])
}
};
</script>

<style>
</style>
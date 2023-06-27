<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <p>
      <button @click="kanFn">砍价</button>
    </p>
  </div>
</template>

<script>
// 引入事件的爹
import eventBus from "../EventBus";
export default {
  // 1. 创建组件components/MyProduct.vue - 复制下面标签
  // 2. 组件内在props定义变量, 用于接收外部传入的值
  // 3. App.vue中引入注册组件, 使用时, 传入具体数据给组件显示

  props: ["index", "title", "price", "intro"],
  methods: {
    kanFn() {
      // 子传父
      // this.$emit("subprice", this.index, 1);
      // 跨组件传值
      eventBus.$emit("send", this.index, 1);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
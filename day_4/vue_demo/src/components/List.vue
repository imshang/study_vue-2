<template>
  <ul class="my-product">
    <li v-for="(item, index) in arr" :key="index">
      <span>{{ item.proname }}</span>
      <span>{{ item.proprice }}</span>
    </li>
  </ul>
</template>

<script>
// 引入事件的爹
import eventBus from "../EventBus";
export default {
  props: ["arr"],
  //   生命周期方法 此组件被使用时自动执行此方法
  created() {
    // 接参数 执行 相当于这是父 ，子传父  子只负责传值
    eventBus.$on("send", (index, price) => {
      // 逻辑代码
      this.arr[index].proprice > 1 &&
        (this.arr[index].proprice = (this.arr[index].proprice - price).toFixed(
          2
        ));
    });
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
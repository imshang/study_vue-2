<template>
  <div>
    <!-- index是list对象的索引 -->
    <!-- 目标:子传父 -->
    <!-- 1.父组件，@自定义事件名=父methods函数 -->
    <MyProduct
      v-for="(obj, index) in list"
      :key="obj.id"
      :title="obj.proname"
      :price="obj.proprice"
      :intro="obj.info"
      :index="index"
      @subprice="fn"
    ></MyProduct>
  </div>
</template>
<script>
import MyProduct from "./components/MyProduct";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  components: {
    MyProduct,
  },
  methods: {
    fn(index, price) {+
      // 逻辑代码
      this.list[index].proprice > 1 &&
        (this.list[index].proprice = (
          this.list[index].proprice - price
        ).toFixed(2));
    },
  },
};
</script>

<style>
</style>
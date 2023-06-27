<template>
  <div>
    <Header title="购物车案例" background="red" color="black"></Header>
    <div class="main">
      <Goods v-for="obj in list" :key="obj.goods_id" :obj="obj"></Goods>
    </div>
    <Footer @changeAll="allFn" :list="list"></Footer>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue';
import Goods from './components/MyGoods.vue';
import Footer from './components/MyFooter.vue'
export default {
  data() {
    return {
      // 商品所有数据
      list: [],
    }
  },
  components: {
    Header,
    Goods,
    Footer
  },
  created() {
    // 不必在自己引入axios变量, 而是直接使用全局属性$axios
    this.$axios({
      url: 'api/cart'
    }).then((result) => {
      console.log(result);
      this.list = result.data.list
    })
  },
  methods: {
    allFn(bool) {
      this.list.forEach(element => {
        element.goods_state = bool;
      });
    }
  },
  // 监听 list变化 做相应的处理
  watch: {
    list: {
      handler(newVal, oldVal) {
        console.log('变化了吗', newVal, oldVal)
        this.total_price = newVal.reduce((total, item) => {
          console.log(total, item, item.goods_state)
          if (item.goods_state) {
            return total + item.goods_price * item.goods_count;
          } else {
            return total;
          }

        }, 0)
      }
    },
    deep: true,
    immediate: true,
  },
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
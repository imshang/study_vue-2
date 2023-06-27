<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="reverseBtn">翻转</button>
    <br />
    <button v-on:click="sliceBtn">截取前三个</button>
    <br />
    <button v-on:click="changeBtn">改变第一个值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 7, 4, 6],
    };
  },
  methods: {
    reverseBtn() {
      // 数组翻转可以让v-for更新
      this.arr = this.arr.reverse();
    },
    sliceBtn() {
      // 数组slice 不会改变原数组 返回一个新的数组
      //   slice不会造成v-for更新
      //   this.arr.slice(3, 2);
      //   解决办法：覆盖原数组
      this.arr = this.arr.slice(0, 3);
    },
    changeBtn() {
      // 更新某个值的时候，v-for 是检测不到的
      // this.arr[0] = 100;
      // 解决办法：this.$set( target, key, value )
      // target：要更改的数据源(可以是对象或者数组)
      // key：要更改的具体数据(属性/索引)
      // value ：重新赋的值
      this.$set(this.arr, 0, 100);
    },
  },
};
</script>

<style>
</style>
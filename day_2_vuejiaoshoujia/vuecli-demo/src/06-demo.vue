<template>
  <div>
    <h1>{{ arr }}</h1>
    <button @click="fan">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: "Hello,World",
    };
  },
  methods: {
    fan() {
      //   截取字符串返回数组
      let ary = this.arr.split("");
      //   翻转数组
      ary.reverse();
      //   拼接数组
      this.arr = ary.join("");
    },
  },
};
</script>

<style>
</style>
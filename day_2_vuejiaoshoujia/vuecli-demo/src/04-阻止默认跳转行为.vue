<template>
  <div>
    <!-- 无传参, 通过形参直接接收 -->
    <a @click="one" href="https://www.baidu.com">阻止去百度</a><br />
    <!-- 传参, 通过$event(固定的)指代事件对象传给事件处理函数 -->
    <a @click="two(10, $event)" href="https://www.baidu.com">阻止去百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    // <!-- 无传参, 通过形参直接接收 -->
    one(e) {
      console.log(1);
      e.preventDefault();
    },
    // <!-- 传参, 通过$event(固定的)指代事件对象传给事件处理函数 -->
    two(num, e) {
      console.log(2);
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>
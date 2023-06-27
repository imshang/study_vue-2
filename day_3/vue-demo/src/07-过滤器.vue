<template>
  <div>
    <!-- 语法: 
        过滤器只能用在, 插值表达式和v-bind表达式
        全局:
        - Vue.filter("过滤器名", (值) => {return "返回处理后的值"})
        局部：
        - filters: {过滤器名字:(值) => {return "返回处理后的值"} 
        使用： 竖线叫管道符
        {{值|过滤器名字}}-->
    <p>使用全局过滤器翻转：{{ msg | reverse }}</p>
    <p>使用局部过滤器大写：{{ msg | toUp }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello,world",
    };
  },
  // 方式2: 局部 - 过滤器
  // 只能在当前vue文件内使用
  filters: {
    // toUp: (val) => val.toUpperCase(),
    // “es6规范还真的指定了可以省略function！
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style>
</style>
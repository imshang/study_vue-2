<template>
  <div>
    <!-- 
    - 语法:
    - v-show="vue变量"            
    - v-if="vue变量" 
    - 原理
    - v-show 用的display:none隐藏   (频繁切换使用)
    - v-if  直接从DOM树上移除
    - 高级
    - v-else使用
     -->
    <h1 v-show="isOk">v-show的盒子</h1>
    <h1 v-if="isOk">v-if的盒子</h1>

    <div>
      <p v-if="age > 18">我成年了</p>
      <p v-else>还得多吃饭</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOk: false,
      age: 15,
    };
  },
};
</script>

<style>
</style>
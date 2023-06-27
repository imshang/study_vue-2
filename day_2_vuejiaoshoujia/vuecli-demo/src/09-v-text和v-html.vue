<template>
  <div>
    <!-- 
    - 语法: - v-text="vue数据变量" 
    - v-html="vue数据变量" - 
    注意:会覆盖插值表达式  都是用来设置内容
     -->
    <div v-text="text"></div>
    <p v-html="html"></p>
    <div>8</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "v-text你好",
      html: "<h1>v-html你好</h1>",
    };
  },
};
</script>

<style>
</style>
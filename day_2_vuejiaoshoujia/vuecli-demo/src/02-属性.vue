<template>
  <div>
    <!-- 语法：`v-bind:属性名="vue变量" -->
    <!-- 简写：`:属性名="vue变量" -->
    <!-- vue指令-v-bind属性动态赋值 -->
    <a v-bind:href="url">我是a标签</a>
    <img :src="imgSrc" />
  </div>
</template>

<script>
// js中不能写路径 因为 js把所有的都当作模块处理 需要导入  唯独js需要导入图片文件 (css/标签里可以直接使用图片地址)
import imgObj from "./assets/e77a632da0e51ca6b0a8.jpg";
export default {
  data() {
    return {
      url: "https://www.baidu.com/",
      imgSrc: imgObj,
    };
  },
};
</script>

<style>
</style>
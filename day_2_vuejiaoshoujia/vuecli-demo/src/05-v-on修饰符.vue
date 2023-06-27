<template>
  <div @click="father">
    <!-- v-on修饰符 -->
    <!-- @事件名.修饰符="methods里函数"-->
    <!-- - .stop - 阻止事件冒泡   儿子执行，爸爸也跟着执行 -->
    <!-- - .prevent - 阻止默认行为 -->
    <!-- - .once - 程序运行期间, 只触发一次事件处理函数;事件还在执行，函数只执行一次 -->
    <p @click.stop="son">儿子p</p>
    <p @click.once="one">p被执行了</p>
    <!-- 按键修饰符 -->
    <!-- 
    keydown:
    在键盘上按下某个键时触发。如果按住某个键，会不断触发该事件，但是Opera浏览器不支持这种连续操作。该事件处理函数返回false时，会取消默认的动作(如输入的键盘字符，在IE和Safari浏览器下还会禁止keypress事件响应).
    keypress:
    按下某个键盘键并释放时触发。如果按住某个键，会不断触发该事件。该事件处理函数返回false时，会取消默认的动作(如输入的键盘字符).
    keyup：
    释放某个键盘键时触发。该事件仅在松开键盘时触发一次，不是一个连续的响应状态。
    -->
    <!-- 语法: -->
    <!-- - @keydown.enter  -  监测回车按键 -->
    <!-- - @keydown.esc    -  监测esc按键 -->
    <input @keydown.enter="enterFn" type="text" />
    <hr />
    <input @keydown.esc="escFn" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    father() {
      console.log("father");
    },
    son() {
      console.log("son");
    },
    one() {
      console.log("执行了几次");
    },
    enterFn() {
      console.log("用户按回车键");
    },
    escFn() {
      console.log("用户按esc键");
    },
  },
};
</script>

<style>
</style>
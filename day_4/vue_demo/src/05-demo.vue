<template>
  <div class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style>
</style>
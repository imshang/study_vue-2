<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input class="new-todo" placeholder="输入任务名称-回车确认" @keydown.enter="enter" v-model="content" autofocus/>
  </header>
</template>

<script>
import eventBus from '@/EventBus';
export default {
  data () {
    return {
      content:''
    }
  },
methods: {
  enter() {
    if (!this.content) alert('内容不能为空');
    eventBus.$emit('headerToMain', this.content);
    this.content = '';
  }
}
};
</script>

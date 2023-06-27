<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed">
      <div v-for="(obj,index) in content " :key="index" class="view">
        <input class="toggle" type="checkbox" />
        <label :class="{isDel:obj.bool}">{{obj.val}}</label>
        <button @click="delBtn(index)" class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import eventBus from '@/EventBus';
export default {
  data () {
    return {
      content: [],
    }
  },
  // props: [''],
  created() {
    // 执行header传过来的内容
    eventBus.$on("headerToMain",content => {
      // 将状态和内容添加到content中  bool false 表示刚添加的未完成 true表示完成
      const obj = {
        val: content,
        bool:false,
      }
      this.content.push(obj);
    });
      // 执行footer传过来的内容
    eventBus.$on("footerToMain", content => {
      this.content = content;
  });
  },
  methods: {
    delBtn(index) {
      this.content[index].bool = true;
    }
  },
  // 监听内容变化 传给footer
  watch: {
    content: {
      handler() {
        eventBus.$emit('mainToFooter', this.content);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style scoped>
.isDel{
	color: #cdcdcd;
	text-decoration: line-through;
}

</style>
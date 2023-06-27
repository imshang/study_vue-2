<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ remain }}</strong></span>
    <ul class="filters">
      <li>
        <a @click="all" :class="{selected:selectAll_bool}" href="javascript:;">全部</a>
      </li>
      <li>
        <a @click="unfinished" :class="{selected:selectUnfin_bool}" href="javascript:;">未完成</a>
      </li>
      <li>
        <a @click="finished" :class="{selected:selectFin_bool}" href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
import eventBus from '@/EventBus';
export default {
data () {
    return {
    content:'',
    remain: '',
    selectAll_bool: true,
    selectUnfin_bool:false,
    selectFin_bool:false,
  }
},
  created() { 
    // 执行处理从main 传过来的内容
    eventBus.$on('mainToFooter', content => {
      console.log('created')
      this.content = content;
      // 剩余数量 也就是content中false的数量
      let remain = content.reduce((total, obj) => {
        if (!obj.bool) total += 1;
        return total;
      }, 0)
      this.remain = remain;
    });
  },
  methods: {
    all(){
      this.selectAll_bool = true;
      this.selectUnfin_bool = false;
      this.selectFin_bool = false;
      // eventBus.$emit('footerToMain', this.content);
    },
    finished() {
      this.selectAll_bool = false;
      this.selectUnfin_bool = false;
      this.selectFin_bool = true;
      const content = this.content.filter(item => item.bool == true);
      eventBus.$emit('footerToMain',content);
    },
    unfinished() {
      this.selectAll_bool = false;
      this.selectUnfin_bool = true;
      this.selectFin_bool = false;
      const content = this.content.filter(item => item.bool == false);
      console.log(content)
      eventBus.$emit('footerToMain', content);
    }
  }
};
</script>
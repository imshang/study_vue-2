<template>
    <div>
        <input v-if="isShow" ref="search" type="text">
        <button v-else ref="search" @click="search">点击搜索</button>
    </div>
</template>

<script>

// 目标:点按钮消失  -出现输入框并聚焦
// 获取输入框
// 输入框调用事件方法focus()达到聚焦行为
export default {
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        async search() {
            // 更新了DOM 下面需要用到$nextTick才能获取到更新后的dom,因为更新DOM是异步的,没有$nextTick后面输入框就没有挂载到真实DOM上
            this.isShow = true;
            // this.$nextTick(() => {
            //     let search = this.$refs.search;
            //     search.focus();
            // })
            // 扩展 await取代回调函数
            //$nextTick()原地返回Promise对象
            await this.$nextTick();//等待结果再执行
            this.$refs.search.focus();

        }
    }
}
</script>

<style></style>
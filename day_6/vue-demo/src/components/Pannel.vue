<template>
    <div>
        <!-- 按钮标题 -->
        <div class="title">
            <h4>芙蓉楼送辛渐</h4>
            <span class="btn" @click="isShow = !isShow">
                {{ isShow ? "收起" : "展开" }}
            </span>
        </div>
        <!-- 下拉内容 -->
        <div class="container" v-show="isShow">
            <!-- 使用插槽实现封装的组件显示不同的标签结构(灵活)  
                父组件中引用该组件时,内容会自动适配slot -->
            <!-- 具名插槽 -->
            <slot name="content">template配合v-slot:名字来分发对应标签</slot>
            <slot name="title"></slot>
            <slot :row="defaultObj">{{ defaultObj.defaultOne }}</slot>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isShow: false,
            defaultObj: {
                defaultOne: 'one',
                defaultTwo: 'two',
            }
        };
    },
};
</script>
  
<style scoped>
h3 {
    text-align: center;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0 1em;
}

.title h4 {
    line-height: 2;
    margin: 0;
}

.container {
    border: 1px solid #ccc;
    padding: 0 1em;
}

.btn {
    /* 鼠标改成手的形状 */
    cursor: pointer;
}

img {
    width: 50%;
}
</style>
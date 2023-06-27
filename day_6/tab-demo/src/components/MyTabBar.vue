<template>
    <div class="my-tab-bar">
        <div class="tab-item" v-for="(obj, index) in     list    " :key="index" @click="btn(index, obj.componentName)"
            :class="{ current: index === setIndex ? true : false }">
            <!-- 图标 -->
            <span class="iconfont" :class=obj.iconText></span>
            <!-- 文字 -->
            <span>{{ obj.text }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            setIndex: 0//默认第一个高亮   第一次遍历就直接true实现默认第一个高亮
        }
    },
    props: {
        list: {
            type: Array,
            required: true,
            // 自定义校验规则
            validator(value) {
                // value就是接到数组
                if (value.length >= 2 && value.length <= 5) {
                    return true; // 符合条件就return true
                } else {
                    console.error("数据源必须在2-5项");
                    return false;
                }
            },
        }
    },
    methods: {
        btn(index, name) {
            this.setIndex = index;
            console.log(name)
            this.$emit("getComName", name)
        }
    }
}
</script>
  
<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>
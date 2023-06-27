<template>
    <div>
        <van-nav-bar :title="activeTitle" fixed />
        <!-- 二级路由显示地方 -->
        <div class="main">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" route>
            <van-tabbar-item replace to="/layout/home" name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/layout/search" name="search" icon="search">搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import { ref } from 'vue';
export default {
    data() {
        return {
            activeTitle: this.$route.meta.title,//顶部导航要显示的标题(默认获取当前路由对象里meta的title值)
        }
    },
    // 路由切换
    watch: {
        $route() {
            this.activeTitle = this.$route.meta.title;
        }
    },
    setup() {
        const active = ref('home');
        return { active };
    },
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
    padding-top: 46px;
    padding-bottom: 50px;
}
</style>
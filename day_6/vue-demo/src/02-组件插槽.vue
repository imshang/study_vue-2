<template>
    <div id="container">
        <div id="app">
            <h3>案例：折叠面板</h3>
            <!-- 使用插槽实现封装的组件显示不同的标签结构(灵活)  
                父组件中引用该组件时,内容会自动适配slot -->
            <Pannel>
                <img src="./assets/logo.png" alt="">
                <span>我是内容</span>
            </Pannel>
            <Pannel>
                <p>寒雨连江夜入吴,</p>
                <p>平明送客楚山孤。</p>
                <p>洛阳亲友如相问，</p>
                <p>一片冰心在玉壶。</p>
            </Pannel>
            <Pannel>666</Pannel>
            <Pannel></Pannel>
            <Pannel>
                <template v-slot:title>
                    匹配slot标签名字为title
                </template>
                <template v-slot:content>
                    匹配slot标签名字为content
                </template>

            </Pannel>
            <Pannel>
                <template #content>
                    匹配slot标签名字为content
                </template>
            </Pannel>
            <!-- // 目标: 作用域插槽
            // 场景: 使用插槽, 使用组件内的变量
            // 1. slot标签, 自定义属性和内变量关联
            // 2. 使用组件, template配合v-slot="变量名"
            // 变量名会收集slot身上属性和值形成对象  scope是对象 里面是slot身上属性(row)和值(defaultObj) -->
            <Pannel>
                <template v-slot="scope">
                    {{ scope.row.defaultOne }}
                </template>
            </Pannel>
        </div>
    </div>
</template>
  
<script>

import Pannel from "./components/Pannel.vue";
export default {
    components: {
        Pannel,
    },
};
</script>
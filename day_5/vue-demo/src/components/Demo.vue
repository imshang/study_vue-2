<template>
    <div>
        <p>我是Demo组件</p>
    </div>
</template>
  
<script>
export default {
    // 给当前组件起名字 
    name: 'DemoCc',
    methods: {
        fn() {
            console.log("demo组件内的方法被调用了");
        }
    }
}
</script>
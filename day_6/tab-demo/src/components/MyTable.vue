<template>
    <table class="table table-bordered table-stripped">
        <!-- 表格标题区域 -->
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <!-- 表格主体区域 -->
        <tbody>
            <tr v-for="obj in list" :key="obj.goods_id">
                <slot name="body" :row="obj"></slot>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    props: ['list'],
    name: 'MyTable',
}
</script>
  
  
<style scoped lang="less">
.my-goods-list {
    .badge {
        margin-right: 5px;
    }
}
</style>
<template>
    <MyTable :list="list">
        <template v-slot:header>
            <!-- 自定义传入表格的内容 -->
            <th>#</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>标签</th>
            <th>操作</th>
        </template>
        <!-- 混用 v-slot：组件中的变量名字='自定义变量名收集属性和值' -->
        <template v-slot:body="scope">
            <td>{{ scope.row.goods_id }}</td>
            <td>{{ scope.row.goods_name }}</td>
            <!-- 没有接口 写的只是用来实现类似的效果 -->
            <td>
                <input v-model="scope.row.goods_" @keyup.enter="enterFn" @blur="scope.row.goods_state = false" v-if="scope.row.goods_state" type="text" v-focus>
                <button v-else ref="adddd" @click.prevent="scope.row.goods_state = !scope.row.goods_state">+Tag</button>
                {{ scope.row.goods_price }}
            </td>
            <td> <img :src="scope.row.goods_img" alt="" style="width: 100px;">
            </td>
            <td>
                <a class="btn btn-danger btn-sm" @click.prevent="del(scope.row.goods_id)" href="">删除</a>
            </td>
        </template>
    </MyTable>
</template>

<script>
import MyTable from '@/components/MyTable.vue';
import axios from 'axios';
export default {
    data() {
        return {
            list: '',
        }
    },
    components: {
        MyTable
    },
    created() {
        axios({
            url: '/api/cart',
            method: 'get',
        }).then(res => {
            console.log(res)
            const list = res.data.list.filter(item => {
                return item.goods_state == false;
            });
            this.list = list;
        })
    },
    methods: {
        del(id) {
            const deleteId = this.list.findIndex(item => {
                return item.goods_id == id;
            });
            this.list.splice(deleteId, 1)
        },
        // 不能用这种 因为是通过v-for拿到的是更新后的dom  聚焦是聚焦所有 
        // async add() {
        //     await this.$nextTick();//等待结果再执行
        //     console.log(this.$refs.adddd)
        //     this.$refs.adddd.focus();
        // }
    }
}
</script>

<style></style>
<template>
    <!-- 底部 -->
    <div class="my-footer">
        <!-- 全选 -->
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="bool">
            <label class="custom-control-label" for="footerCheck">全选</label>
        </div>
        <!-- 合计 -->
        <div>
            <span>合计:</span>
            <span class="price">¥ {{ allPrice }}</span>
        </div>
        <!-- 按钮 -->
        <button type="button" class="footer-btn btn btn-primary">结算 ( {{ allCount }} )</button>
    </div>
</template>
  
<script>
export default {
    props: ['list'],
    data() {
        return {
            total_price: '',
        }
    },
    created() {

    },
    // 目标: 全选
    // 1. v-model关联全选-复选框(v-model后变量计算属性)
    // 2. 页面(视频层)v(true) -> 数据层(变量-) 计算属性(完整写法)
    // 3. 把全选 true/false同步给所有小选框选中状态上

    // 小选  -> 全选
    // App.vue里list数组 -> MyFooter.vue
    // bool的get方法里, 统计状态影响全选框

    // 目标: 总数量统计
    // 1. allCount计算属性用 数组reduce+判断统计数量并返回

    // 目标: 总价
    // allPrice计算属性, 数组reduce+单价*数量, 判断选中, 才累加后返回
    computed: {
        bool: {
            set(val) {
                //不能这样 要子传父处理  注意这只是一个组件  子组件不能修改数据 只能用(计算、。。。) 要修改到需要到父组件修改
                // this.list.forEach(element => {
                //     element.goods_state = val;
                // });
                this.$emit('changeAll', val);
            },
            get() {
                // 查找小选框关联的属性有没有不符合
                return this.list.every(obj => obj.goods_state === true)
            }
        },
        allPrice() {
            return this.list.reduce((sum, obj) => {
                if (obj.goods_state) {
                    sum += obj.goods_count * obj.goods_price
                }
                return sum;
            }, 0)
        },
        allCount() {
            return this.list.reduce((sum, obj) => {
                if (obj.goods_state === true) { // 选中商品才累加数量
                    sum += obj.goods_count;
                }
                return sum;
            }, 0)
        },
    },

}
</script>
  
<style lang="less" scoped>
.my-footer {
    position: fixed;
    z-index: 2;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background: #fff;

    .price {
        color: red;
        font-weight: bold;
        font-size: 15px;
    }

    .footer-btn {
        min-width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 25px;
        padding: 0;
    }
}
</style>
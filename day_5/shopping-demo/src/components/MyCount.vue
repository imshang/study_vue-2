<template>
    <div class="my-counter">
        <button @click=" objCount.goods_count--" :disabled="objCount.goods_count === 1" type="button"
            class="btn btn-light">-</button>
        <input type="number" class="form-control inp" v-model.number="objCount.goods_count">
        <button @click=" objCount.goods_count++" type="button" class="btn btn-light">+</button>
    </div>
</template>
  
<script>
export default {
    // 因为数量控制要通过对象"互相引用的关系"来影响外面对象里的数量值, 所以最好传 对象进来
    props: ['objCount'],
    watch: {
        objCount: {
            deep: true,
            // 拿到商品数量 判断小于1，强制修改为1
            handler() {
                if (this.objCount.goods_count <= 0) this.objCount.goods_count = 1;
            }
        }
    }
}
</script>
  
<style lang="less" scoped>
.my-counter {
    display: flex;

    .inp {
        width: 45px;
        text-align: center;
        margin: 0 10px;
    }

    .btn,
    .inp {
        transform: scale(0.9);
    }
}
</style>
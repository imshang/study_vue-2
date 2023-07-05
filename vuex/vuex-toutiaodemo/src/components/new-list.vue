<template>
  <div class="list">
    <div class="article_item" v-for="obj in currentList" :key="obj.id">
      <h3 class="van-ellipsis">{{ obj.createdAt }}</h3>
      <div class="img_box">
        <img src="@/assets/back.jpg" class="w100" />
      </div>
      <!---->
      <div class="info_box">
        <span>13552285417</span>
        <span>0评论</span>
        <span>2018-11-29T17:02:09</span>
      </div>
    </div>
  </div>
</template>
  <script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 拿到仓库中的当前激活的分类id值
    ...mapGetters(['currentId','currentList'])
  },
  watch: {
    // 监听分类id变化
    currentId(newValue){
      this.$store.dispatch('newlist/getList',newValue)
    }
  }
};
</script>
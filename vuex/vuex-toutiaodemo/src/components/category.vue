<template>
  <ul class="catagtory">
    <li
      @click="$store.commit('category/upCurrentId', obj.id)"
      :class="{ select: currentId === obj.id }"
      v-for="obj in category"
      :key="obj.id"
    >
      {{ obj.name }}
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["category","currentId"]),
  },
  created() {
    // 调用子模块的actions
    this.$store.dispatch("category/getCategory");
  },
};
</script>

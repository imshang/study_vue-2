<template>
  <div>
    <ul id="myUL">
      <!-- 旧的虚拟dom key0-老大  key1-老二 key2-老三 -->
      <!-- 新的虚拟dom key0-老大(存在key0复用) key1-老二(因为key的值是索引，所以这里增加的标签索引是1,key是key1 所以还进行复用标签内容同样元素内容也没有变化)   key2-老三()  key3- (创建标签) -->
      <!-- 无key – 就地更新 / 有key – 按key比较  但是无key代码会报错不知为何? -->
      <!-- 有id用id，无id用索引 -->
      <li v-for="(str, index) in arr" :key="index">
        {{ str }}
        <input type="text" />
      </li>
    </ul>
    <button @click="addFn">下标为1的位置新增一个</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["老大", "老二", "老三"],
    };
  },
  methods: {
    addFn() {
      this.arr.splice(1, 0, "新来的");
    },
  },
};
</script>

<style>
</style>
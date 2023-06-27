<template>
  <div>
    <ul>
      <!-- 旧的虚拟dom key50-老大  key31-老二 key10-老三 -->
      <!-- 新的虚拟dom key50-老大(存在key50复用标签与内容) key19-  (不存在与旧虚拟dom的key标记，创建标签，内容为空(因为界面是这样写的))  key31-老二(存在key31 复用标签与内容) key10-老三(存在key10 复用标签与内容) -->
      <!-- 无key – 就地更新 / 有key – 按key比较 -->
      <!-- 有id用id，无id用索引(效果和无key一致) -->
      <li v-for="obj in arr" :key="obj.id">
        {{ obj.name }}
        <input type="text" />
      </li>
    </ul>
    <button @click="btn">下标1位置插入新来的</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "老大",
          id: 50,
        },
        {
          name: "老二",
          id: 31,
        },
        {
          name: "老三",
          id: 10,
        },
      ],
    };
  },
  methods: {
    btn() {
      this.arr.splice(1, 0, {
        id: 19,
        name: "新来的",
      });
    },
  },
};
</script>

<style>
</style>
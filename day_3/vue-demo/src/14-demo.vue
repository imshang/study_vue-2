<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="checkAll" />
    <button @click="btn">反选</button>
    <ul>
      <!-- 对象的c属性 关联选中状态 -->
      <li v-for="(obj, index) in arr" :key="index">
        <input type="checkbox" v-model="obj.c" />
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  methods: {
    btn() {},
  },
  computed: {
    checkAll: {
      set(val) {
        this.arr.forEach((element) => {
          element.c = val;
        });
      },
      get() {
        // 判断是否每一项都是false或者true
        if (!this.arr.every((obj) => obj.c === true)) {
          return false;
        }
        return true;
      },
    },
  },
};
</script>
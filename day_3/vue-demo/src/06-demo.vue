<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="list.length !== 0">
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <td>{{ obj.time }}</td>
            <td>
              <a href="#" @click.prevent="deleteBtn(obj)">删除</a>
            </td>
          </tr>
        </tbody>

        <tfoot v-else>
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              v-model.number="price"
              type="text"
              class="form-control"
              placeholder="价格"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button @click.prevent="addBtn" class="btn btn-primary">
          添加资产
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "", // 名称
      price: "", // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
    };
  },
  methods: {
    addBtn() {
      if (this.name === "" || typeof this.price !== "number") {
        alert("请填写正确信息(提示:不能为空,价格为数字！！！)");
        this.name = ""; // 名称
        this.price = ""; // 价格
      } else {
        let id = "";
        if (!this.list.length) {
          id = 1;
        } else {
          id = this.list[this.list.length - 1].id + 1;
        }
        console.log(id, typeof id);
        let obj = {
          id,
          name: this.name,
          price: this.price,
          time: new Date(),
        };
        this.list.push(obj);
        this.name = ""; // 名称
        this.price = 0; // 价格
      }
    },
    deleteBtn(obj) {
      // 直接删除在数组中的对象
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] === obj) {
          this.list.splice(i, 1);
          return;
        }
      }
    },
    // deleteBtn(id) {
    //   // 通过id找到这条数据在数组中下标
    //   let index = this.list.findIndex((obj) => obj.id === id);
    //   this.list.splice(index, 1);
    // },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
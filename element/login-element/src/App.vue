<template>
  <div id="app">
    <el-card class="box-card">
      <!-- 放置表单容器 -->
      <el-form
        style="margin-top: 50px"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
      >
        <!-- 表单项 -->
        <el-form-item prop="phone">
          <!-- 输入框 -->
          <el-input
            placeholder="请输入您的手机号"
            v-model="loginForm.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <!-- 输入框 -->
          <el-input
            placeholder="请输入您的密码"
            v-model="loginForm.pwd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const checkPhone = function (rules, value, callback) {
      // 校验的是value 第三位必须是9
      value.charAt(2) === "9"
        ? callback()
        : callback(new Error("手机号第三位必须是9"));
    };
    return {
      //表单数据对象
      loginForm: {
        // 校验的字段
        phone: "",
        pwd: "",
      },
      // 校验规则  从前往后依次校验
      loginRules: {
        phone: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
          {
            trigger: "blur",
            validator: checkPhone,
          },
        ],
        pwd: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            min: 6,
            max: 16,
            message: "密码应为6-16位的长度",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    onSubmit() {
      //第一个参数 为是否通过校验规则的布尔值
      //第二个参数 为未通过校验的字段
      this.$refs.loginForm.validate(function (isok, obj) {
        if (isok) {
          console.log("校验通过");
          console.log(obj);
        }
        console.log(obj)
      });
      // then成功 catch失败
      // this.$refs.loginForm
      //   .validate()
      //   .then(() => {})
      //   .catch(() => {});
    },
    async getCatch() {
      try {
        await new Promise(function (resolve, reject) {
          // reject(new Error("fail"));
          // throw new Error("SHIBAI");
          // alert(new Error("SHIBAI"));
          throw '5'
        });
        console.log(123);
      } catch (error) {
        alert(error);
        console.log(456);
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: pink;
}
.box-card {
  width: 480px;
  height: 300px;
}
</style>

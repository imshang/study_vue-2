<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>

    <p>下面显示注册组件-动态切换:</p>
    <!-- div这个挂载点 -->
    <div style="border: 1px solid red;">
      <!-- vue内置component组件, 配合is属性, 设置要显示的组件名字 -->
      <!-- <component :is="comName"></component>
      <hr> -->
      <!-- Vue内置keep-alive组件, 把包起来的组件缓存起来  防止一直创建和销毁组件 -->
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// 目标: 动态组件 - 切换组件显示
// 场景: 同一个挂载点要切换 不同组件 显示
// 1. 创建要被切换的组件 - 标签+样式
// 2. 引入到要展示的vue文件内, 注册
// 3. 变量-承载要显示的组件名
// 4. 设置挂载点<component :is="变量"></component>
// 5. 点击按钮-切换comName的值为要显示的组件名

import UserName from './components/UserName'
import UserInfo from './components/UserInfo'
export default {
  data() {
    return {
      comName: "UserName"
    }
  },
  components: {
    UserName,
    UserInfo
  }
}
</script>
<template>
  <div>
    <div class="footer_wrap">
      <!-- 声明式导航 -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <!-- 传参1 /path?参数名=值  组件内接受用$route.query.参数名 -->
      <!-- <router-link to="/part?name=小船1">朋友1</router-link> -->
      <!-- 传参2 main中的路由规则定义 path: “/path/参数名” 到这里传值 组件内接收用$route.params.参数名 -->
      <router-link to="/part/小船2/2">朋友2</router-link>


      <!-- 
          编程式导航 - js方式跳转路由
          // 语法:
          // this.$router.push({path: "路由路径"})  
          // this.$router.push({name: "路由名"})
          // 注意:
          // 虽然用name跳转, 但是url的hash值还是切换path路径值
          // 场景:
          // 方便修改: name路由名(在页面上看不见随便定义)
          // path可以在url的hash值看到(尽量符合组内规范)
      -->
      <!-- <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友</span> -->
    </div>
    <div class="top">
      <!-- 6.设置挂载点-当url的hash值路径切换,显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 目标: 编程式导航 - 跳转路由传参
    // 方式1:
    // params => $route.params.参数名
    // 方式2:
    // query => $route.query.参数名
    // 重要: path会自动忽略params
    // 推荐: name+query方式传参
    // 注意: 如果当前url上"hash值和?参数"与你要跳转到的"hash值和?参数"一致, 爆出冗余导航的问题, 不会跳转路由
    //（推荐用name +params这种方式传参）
    btn(targetPath, routerName) {
      this.$router.push({
        // 注意使用使用path路径这种会自动忽略params只能使用query， 用路由名字跳转都可以使用
        path: targetPath,
        // 传参  
        // query: {
        //   name: 'shangtao',
        // },
        params: {
          username: 'shang',
          id: 4
        }
      })
      // this.$router.push({
      //   name: routerName,
      //   query: {
      //     name: 'shangtao1',
      //   },
      //   params: {
      //     username: 'shang1',
      //     id: 5
      //   }
      // })
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}

.top {
  padding-top: 62px;
}

/* 激活时的样式*/
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
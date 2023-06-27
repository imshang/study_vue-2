<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>头像</th>
                </tr>
            </thead>
            <thead>
                <tr v-for="(obj, index) in arr " :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ obj.name }}</td>
                    <td>{{ obj.age }}</td>
                    <!-- 设置默认值 -->
                    <slot :row="obj">{{ obj.headImgUrl }}</slot>
                </tr>
            </thead>
        </table>
    </div>
</template>
  
<script>
export default {
    props: {
        arr: Array
    }
}
</script>
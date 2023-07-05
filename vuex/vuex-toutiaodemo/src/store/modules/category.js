import axios from "axios"
// export default 是 JavaScript 的一个语法,用于导出模块的默认成员
export default {
    namespaced: true,
    state: {
        // 存放分类数组的属性 默认值空数组
        category: [],
        currentId: ''//当前频道id
    },
    mutations: {
        upCategory(state, payload) {
            state.category = payload
        },
        upCurrentId(state, payload) {
            state.currentId = payload
        }

    },
    actions: {
        // 异步动作  但是修改数据必须通过mutations
        // context表示当前的store的实例 
        getCategory(context) {
            axios({
                url:'http://geek.itheima.net/v1_0/channels',
                method:'get',
            }).then(res=>{
                console.log(res)
                // context表示当前的store的实例 
                context.commit('upCategory',res.data.data.channels);
                context.commit('upCurrentId',res.data.data.channels[0].id)
            })
        }
    }
}
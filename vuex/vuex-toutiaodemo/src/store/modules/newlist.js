import axios from "axios";
// export default 是 JavaScript 的一个语法,用于导出模块的默认成员
export default {
    namespaced: true,
    state: {
        allData: {}//放置的所有的数据  {分类id:列表1,分类id2 列表2}
    },
    mutations: {
        // playload载荷  id当前分类id 列表
        updateList(state, { id, list }) {
            // 不是响应式的
            // state.allData[id] = list;//这样做大错特错，对象本身感觉不到变化, 就不会通知组件
            // 对象中属性名称如果是数字必须用[]  访问值必须用obj[ ]方括号进行访问
            state.allData = { ...state.allData, [id]: list }
            // 新对象追加了id属性以及对应的值list
        }
    },
    actions: {
        getList(content, id) {
            console.log(id)
            axios({
                url: `http://ajax-api.itheima.net/api/books`,
                method: 'get',
                params: { id }
            }).then(res => {
                console.log(res)
                // 在上面解构
                content.commit('updateList', { id: id, list: res.data.data })
            })
        }

    }
}
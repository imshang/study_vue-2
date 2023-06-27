import request from '@/utils/request.js'
// 根据关键词搜索
export const searchKey = params => request(({
    url: '/cloudsearch',
    params
}))
// 热搜列表
export const searchList = params => request({
    url: '/search/hot/detail',
    params
})
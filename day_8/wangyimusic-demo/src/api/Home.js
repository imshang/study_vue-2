// 在这里统一管理所有需要的url地址，封装网络请求的方法并导出 文件名-尽量和模块页面文件名统一(方便查找)
import request from '@/utils/request.js'
export const recommendMusic = params => request({//request变量其实就是文件导出的axios对象
    url: '/personalized',
    params
    //将来外面可能出入params的值(limit:20)
})
export const recommendNew = params => request({//request变量其实就是文件导出的axios对象
    url: '/personalized/newsong',
    params
    //将来外面可能出入params的值(limit:20)
})
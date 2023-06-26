// 默认导入
// 从module 默认导出.js 导入export default 向外共享的成员
// m1进行接收
import m1 from './mod/默认导出.js';
console.log(m1);
// 按需导入  可以关键字as 重命名
import { n3, n4, n5 as s3 } from './mod/按需导出.js'
console.log(n3, n4, s3)
// 混合导入
import m2, { n3 as s8 } from './mod/混合导出.js'
console.log(m2, s8)

// 直接导入并执行模块中的代码
// 如果 只想单纯地执行某个模块中的代码 ，并不需要得到模块中向外共享的成员.
import './mod/只执行.js';




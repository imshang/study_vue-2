// 默认导出
let n1 = 10;//定义模块私有成员 n1
let n2 = 20;//定义模块私有成员 n2 (外界访问不到n2,因为没有共享)
function show() { };
export default {//使用export default 默认导出语法,向外共享n1和show两个成员
    n1,
    show
}

//按需导出
export let n3 = 4;
export let n4 = 5;
export function n5() { };
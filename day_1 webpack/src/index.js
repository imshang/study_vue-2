// webpack 默认的打包入口 src/index.js
// import { sum } from './add.js';
// import { getArrSum } from './tool/tool.js';
// console.log(sum(1, 2));
// console.log(getArrSum([5, 6, 10, 11]))


// demo案例  隔行变色
// 引入jquery
import $ from 'jquery'
$(function () {
    $('#app li:nth-child(odd)').css('color', 'red')
    $('#app li:nth-child(even)').css('color', 'green')
})

// 引入css文件
import "../css/in.css"

// 引入less文件
import "../demo/index.less"

// 手动引入一个图片文件
// webpack 眼里文物是模块
import imgObj from './asserts/img/e77a632da0e51ca6b0a8.jpg'
let img = document.createElement('img');
img.src = imgObj;
document.body.appendChild(img);

// 引入字体图标
import './asserts/resource/fonts/iconfont.css';
let i = document.createElement('i');
i.className = 'iconfont icon-qq';
document.body.appendChild(i);


// 高级语法
const fn = () => {
    console.log("你好babel");
}
fn();
console.log(fn) // 这里必须打印不能调用/不使用, 不然webpack会精简成一句打印不要函数了/不会编译未使用的代码
  // 没有babel集成时, 原样直接打包进lib/bundle.js
  // 有babel集成时, 会翻译成普通函数打包进lib/bundle.js





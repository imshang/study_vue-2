import thenFs from "then-fs";
// thenFs.readFile('./day_0 vue 前置知识/files/1.txt', 'utf8').then((result) => {
//     console.log(result);
// });
// thenFs.readFile('./day_0 vue 前置知识/files/2.txt', 'utf8').then((result) => {
//     console.log(result);
// });
// thenFs.readFile('./day_0 vue 前置知识/files/3.txt', 'utf8').then((result) => {
//     console.log(result);
// });

// 解决回调地狱
thenFs.readFile('./day_0 vue 前置知识/files/1.txt', 'utf8').then((result) => {
    console.log(result);
    return thenFs.readFile('./day_0 vue 前置知识/files/2.txt', 'utf8');
}).then((result) => {
    console.log(result);
    return thenFs.readFile('./day_0 vue 前置知识/files/3.txt', 'utf8')
}).then((result) => {
    console.log(result);
}).catch((err) => {

});

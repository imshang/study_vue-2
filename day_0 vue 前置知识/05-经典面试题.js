console.log('1');//单线程同步代码 
setTimeout(function () {//将此函数放入宿主环境
    console.log(2);
    new Promise(function (resolve) {
        console.log(3);
        resolve();
    }).then(function () {
        console.log(4);
    })
})
new Promise(function (resolve) {//同步任务 
    console.log(5);
    resolve();
}).then(function () {
    console.log(6)
})
setTimeout(function () {
    console.log(7);
    new Promise(function (resolve) {
        console.log(8);
        resolve();
    }).then(function () {
        console.log(9);
    })
})

// 结果：156234789
// 执行过程
// 1.先执行同步代码：第一行(结果：1) 第11行 - 第16行(结果：5 然后遇到微任务.then  因为接下来要开始执行宏任务，所以要执行微任务 结果：6) 156
// 2.异步任务 第二行(结果23 然后又遇到微任务，接下来要执行宏任务  所以要清空微任务 4)234
// 3. 同理 789

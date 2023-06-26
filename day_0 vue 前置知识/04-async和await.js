import fs from 'then-fs';
async function getcontent(path) {
    // 通过await关键字 返回的不再是一个Promise对象 而是最终的结果
    // 作用：取代then函数，提取成功结果
    const r1 = await fs.readFile(path, 'utf8')
    console.log(r1);
};

getcontent('./day_0 vue 前置知识/files/1.txt'); 
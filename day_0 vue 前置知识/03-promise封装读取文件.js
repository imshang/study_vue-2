import fs from 'fs';
function getcontent(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, dataStr) => {
            if (err) reject(err);
            resolve(dataStr);
        })
    });
}

getcontent('./day_0 vue 前置知识/files/1.txt').then((result => {
    console.log(result);
}))

const fs = require("fs")
// fs.writeFileSync('read.txt', "Hiii")
// fs.appendFileSync('read.txt', " How are you every one")
// fs.readFileSync('read.txt');
// const buf_data = fs.readFileSync('read.txt');


// org_data = buf_data.toString();
// console.log(org_data)

fs.renameSync('read.txt', 'readwrite.txt');
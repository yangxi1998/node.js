
const fs  = require('fs'),
var src=process.argv[2];
console.log(fs.statSync(src));//打印文件详细信息

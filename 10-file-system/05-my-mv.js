#!/usr/bin/node
const fs=require('fs');  //实现mv功能 移动或重命名
var src=process.argv[2],
    dst=process.argv[3];
fs.renameSync(src,dst);

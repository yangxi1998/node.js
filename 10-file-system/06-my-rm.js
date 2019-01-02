#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2]; //删除文件
fs.unlinkSync(file);


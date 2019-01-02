#!/usr/bin/node

const fs   = require('fs'),
    file = process.argv[2]||__filename;/*文件路径*/
fs.readFile(file,(err,data)=>{ /*readFile异步读取，回调函数*/
  if(err){
    console.error('someting wrong',err.message);
    process.exit(100);
  }else{
    console.log(data.toString('utf8'));
  }

});

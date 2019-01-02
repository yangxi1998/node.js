#!/usr/bin/node

const fs   = require('fs'),
            file = process.argv[2]||__filename;/*__filename当前文件的绝对路径

var src=fs.createReadStream(file);
src.on('error',(err)=>{
  console.error('sorry',err.message);
  process.exit(1);
});
src.on('open',function(){
  this.pipe(process.stdout);
});*/
fs.createReadStream(file).pipe(process.stdout);
process.on('uncaughtException',(err)=>{
  console.log(err.message);
  process.exit(1);
});

#!/usr/bin/node

const fs   = require('fs'),
   file = process.argv[2];
try{
  console.log(fs.readFileSync(file).toString('utf8'));/*同步读取打开关闭不用考虑*/}catch(err){
    
    console.error('Sorry something wrong!',err.message,err.name);
    process.exit(100);
  }  /*同步异常处理try catch*/

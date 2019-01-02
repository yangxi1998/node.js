#!/usr/bin/node
const http=require('http'),
      path=require('path'),
      fs=require('fs');
      util =require('util'),
      log=util.debuglog('wd');
var file;
http.createServer((req,res)=>{
  console.log(req.headers); //打印请求头
  console.log(req.url);
  file=path.join(__dirname,req.url);
  console.log(file);
  var read=fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.message);
    return ;
  })
  read.pipe(res);
  
}).listen(8000);

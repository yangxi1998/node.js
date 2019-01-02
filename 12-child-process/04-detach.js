#!/usr/bin/node
const cp=require('child_process');
console.log('I am father PID',process.pid);
var cmd=cp.spawn('./02-child.js',[],{detached:true,stdio:[
  'ignore',1,2 /*输出流、错误流重定向到父进程*/
  ]});
//cmd.stdout.pipe(process.stdout);
global.setTimeout(()=>{
  console.log('I am father,goodbye!');
  process.exit();
},6000);

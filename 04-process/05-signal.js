#!/usr/bin/node
process.stdin.resume();
console.log(process.pid);
process.on('SIGINT',()=>{
  console.log('程序终止,you have pressed ctrl+c');
  process.exit();
});
process.on('SIGTSTP',()=>{
  console.log('程序停止,you have pressed ctrl+z');
  process.exit();
});


#!/usr/bin/node
console.log('I am child process PID',process.pid);
process.send('child process start PID'+process.pid);
process.on('message',(msg)=>{
  console.log('message from father:',msg);
});

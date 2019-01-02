#!/usr/bin/node
const cp=require('child_process');
var cmd=cp.spawn('./02-child.js');
cmd.stdout.pipe(process.stdout);/*1*/
/*cmd.stdout.on('data',(data)=>{
  console.log(data.toString('utf8'));
});      2*/
cmd.stderr.pipe(process.stderr);

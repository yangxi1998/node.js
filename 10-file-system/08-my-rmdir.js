#!/usr/bin/node
const fs=require('fs');
var dir=process.argv[2];
fs.rmdirSync(dir);//空目录可以删除，非空不可删

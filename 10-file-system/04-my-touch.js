#!/usr/bin/node
const fs=require('fs');//实现touch功能
var file=process.argv[2];
fs.writeFileSync(file,'')

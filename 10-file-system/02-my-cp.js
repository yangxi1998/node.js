#!usr/bin/node
const fs=require('fs');
var src=process.argv[2];
var dst=process.argv[3];
fs.writeFileSync(dst,fs.readFileSync(src));


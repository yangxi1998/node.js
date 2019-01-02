#!/usr/bin/node
const fs = require('fs'),
     http = require('http'),
    path = require('path'),
     file = process.argv[2];
if(process.argv.length !== 3) {
    console.error('命令行参数格式：cmd fileName');
    process.exit(1);
}
 var data = fs.readFileSync(file).toString('base64');
// console.log(data);
var ext  = path.extname(file);
var uriData = 'data:image/' + ext.slice(1, ext.length) + ';base64,';
console.log(uriData);

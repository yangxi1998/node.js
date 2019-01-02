#!usr/bin/node
const fs=require('fs'),
      file=process.argv[2]||__filename;/*用底层API打开文件，再同步读取文件内容*/
var fid=fs.openSync(file,'r');
fs.writeSync(1,fs.readFileSync(file).toString('utf8'));
fs.closeSync(fid);

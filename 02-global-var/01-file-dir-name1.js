#!usr/bin/node

console.log('filename:',__filename);
console.log('dirname:',__dirname);
const path=require('path');
var file;
file=path.join(__dirname,'view.html');
console.log('data file:',file);

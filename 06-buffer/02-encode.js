#!/usr/bin/node
const name=process.argv[2],
      pwd=process.argv[3];
 if(process.argv.length!==4){
  console.error('命令行格式:cmd user_name password');
  process.exit();
 }
console.log('user name:%s\n password:%s',name,pwd);
var str=name+':'+pwd;
var buf=new Buffer(str);
console.log("base64 str:",buf.toString('base64'));

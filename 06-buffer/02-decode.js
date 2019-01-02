#!/usr/bin/node
if(process.argv.length!==3){
  console.error('命令行格式cmd base64_string');
 process. exit(1);
}
const str=process.argv[2];
var buf=new Buffer(str);
var namepwd=buf.toString('utf8');
var data=namepwd.split(':');
if(data.length!==2){
  console.error('信息错误');
  process.exit(2);
}
console.log('user name:%s\n pasword:%s',data[0],data[1]);


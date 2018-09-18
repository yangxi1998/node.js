#!/usr/bin/node
var code=process.argv[2];
if(isNaN(Number(code))){
  
  if(process.argv.length<3){
    console.error('请输入命令行参数');
    process.exit(1);
  }
  else{
console.error('命令行参数应为数值类型');

process.exit(1);
  }
}

process.exit(code);

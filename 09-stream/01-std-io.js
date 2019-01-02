#!/usr/bin/node
const stdin=process.stdin,
      stdout=process.stdout;
stdin.setEncoding('utf8');
stdin.on('data',(data)=>{
  stdout.write(data.toUpperCase());
});
global.setTimeout(()=>{
  stdin.removeAllListeners();
},3000);
stdin.on('end',()=>{
  process.exit();
});

     

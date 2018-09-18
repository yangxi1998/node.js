#!/usr/bin/node
var me={},i=0;
const msg=['name','email','qq','mobile'];
console.log(msg[0]+':');
process.stdin.on('data',(data)=>{
  eval('me.'+msg[i]+'="'+data.slice(0,data.length-1).toString()+'"');
  if(i==4){
    console.log(me);
    process.exit();
  }
  else{
      console.log(msg[++i]+':');  
  }
})
process.stdin.on('end',(end)=>{
  console.log(me);
})

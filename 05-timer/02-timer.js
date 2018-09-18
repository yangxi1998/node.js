#!/usr/bin/node
console.log('start..');
var count=0;
var timerID=setInterval(loop,500);
function loop(){
  console.log('I will loop forever');
}
setTimeout(()=>{console.log('end');
clearInterval(timerID);},3000);
if(++count==5){
  clearInterval(timerID);
}

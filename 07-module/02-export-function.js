#!/usr/bin/node
function circle(radius){  return{
    diameter:function(){
      return radius*2;
    },
   circuference:function(){
      return 2*Math.PI*radius; },
    area:function(){
     return radius*radius*Math.PI; }
  };
}
module.exports=circle;
console.dir(module);

#!/usr/bin/node
module.exports={
  diameter:function(r){
    return 2*r;
  },
  circuference:function(r){
    return Math.PI*2*r;
  },
  area:function(r){
    return Math.PI*r*r;
  }
};
console.dir(module);

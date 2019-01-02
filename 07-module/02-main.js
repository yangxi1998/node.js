#!/usr/bin/node
var circle=require('./02-export-object');
console.log('直径\n',circle.diameter(20));
console.log('周长\n',circle.circuference(20));
console.log('面积\n',circle.area(20));

console.dir(module);

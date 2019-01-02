#!/usr/bin/node
const Dog=require('./02-dog.js');
var taidi=new Dog('taidi',4);
var jinmao=new Dog('jinmao',8);
taidi.on('bark',onBark);
jinmao.on('bark',onBark);
function onBark(){
  console.log('%s barked! energy:%s',this.name(),this.energy());    
}

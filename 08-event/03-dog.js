#!/usr/bin/node
//nst EventEmitter=require('events').EventEmitter;
var _listeners={}; 
this.on=(e,fn)=>{
  if(typeof(_listeners[e])==='undefined'){
    _listeners[e]=[];
    _listeners[e].push(fn);
  }
}
function emit(e,arg){
  _listeners[e].forEach((fn)=>{
    fn.call(this.arg);
  })
}
function Dog(name,energy){
  var _name=name;
  var _energy=energy;
  var that=this;
//  EventEmitter.call(this);
  var timer=setInterval(()=>{
    if(_energy>0){
        that.emit('bark');
        _energy--;
    }
    else{
      global.clearInterval(timer);
    }
  },1000);
  this.name=()=>_name;
  this.energy=()=>_energy;

}

Dog.prototype=EventEmitter.prototype;
//util.inherits('Dog','EventEmitter');
module.exports=Dog;

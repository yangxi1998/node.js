#!/usr/bin/node
const Readable = require('stream').Readable;
 const   util=require('util');
var c =97;

var MyReadable = function() {
    Readable.call(this);

};
MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
      if(c>'z'.charCodeAt(0)) this.push(null);

};
util.inherits(MyReadable,Readable);
/*
MyReadable.prototype = Readable.prototype;*/
var src=new MyReadable();
src.pipe(process.stdout);

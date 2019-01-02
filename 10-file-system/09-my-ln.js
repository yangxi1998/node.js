#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2];
var lnk=process.argv[3];
fs.linkSync(file,lnk);

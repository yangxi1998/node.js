
const fs=require('fs');
var file=process.argv[2];
console.log(fs.readlinkSync(file));

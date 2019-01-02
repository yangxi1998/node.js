
const fs=require('fs');
var file=process.argv[2],
    mod=process.argv[3];
fs.chmodSync(file,mod);

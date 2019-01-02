const Writable = require('stream').Writable;
 const util=require('util');

function GreenStream() {
    Writable.call(this);

}

GreenStream.prototype = Writable.prototype;

GreenStream.prototype._write = (chunk/*数据本身*/, encoding/*数据编码*/, callback) => {
    process.stdout.write('\033[1;32m' + chunk.slice(0,chunk.length-1)/*换行去掉*/ + '\033[1;37m');
      callback();
}
util.inherits(GreenStream,Writable);
var dst=new GreenStream();
process.stdin.pipe(dst);

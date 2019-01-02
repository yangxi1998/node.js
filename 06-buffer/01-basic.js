#!/usr/bin/node
var buf1=new Buffer(256);
buf1[0]=0;
const log=console.log;
log('buffer length:',buf1.length);
log('buffer content:',buf1);
for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}
log('\n buffer content:',buf1);
var buf2=buf1.slice(246,256);
log('\n buf2 content',buf2);
log('\n buf2 length',buf2.length);
buf2.fill(0);
log('\n buf2 content',buf2);
var arr=['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3=new Buffer(arr);
log('\nbuf3 content:', buf3);
log('\nbuf3 length:',buf3.length);
var buf4=new Buffer('hello world','utf8');
log('\nbuf4:', buf4.length, buf4.toString());
buf4.copy(buf3, 0,0 , buf3.length);
log('\nbuf3:', buf3.length, buf3.toString());

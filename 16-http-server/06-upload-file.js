#!/usr/bin/node
const http = require('http'),
            log  = console.log,
            fs=require('fs');

http.createServer((req, res) => {
  if(req.url==='/'&&req.method==='GET'){
    show(req,res,uploadPage);
    return;
  }
  if(req.url==='/'&&req.method==='POST'){
    var data='';
    req.setEncoding('binary'); /*保证可以读的任何类型文件*/
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{
      log(data);
      var das=data.split('\r\n'); /*请求体分为数组*/
     var fileName=das[1].split(':')[2].split('=')[1];
     fileName=fileName.slice(1,fileName.length-1);
     log('filename:',fileName);
      var fileData=das[4]; /*文件内容*/
      log('fileData:',fileData);
      fs.writeFileSync(fileName,fileData,'binary');
    });
    show(req.res,okPage);
  }else{
    res.statusCode = 404;
    res.end('Error');
    show(req,res, errPage);
  }
}).listen(8080);
/*解析取键值对*/
const uploadPage=''+
 '<!DOCTYPE html>'
  +'<html>'
 +' <head>'
 +' <title>Upload File</title>'
  +'<head>'
 +'<body>'
 +' <h1>Upload File</h1>'
+'  <form action="/upload" method="POST" enctype="multipart/form-data">'
  +"<input type='file' name='upload' multiple='multiple'>"
    +"<input type='submit'value='Upload'>"
    +"</form>"
    +"  </body>"
     +" </html>";

 var errPage=''+
 '<!DOCTYPE html>'
+ '<html>'
+ '<head>'
 + '<meta charset="UTF-8">'
+ '<title>Error</title>'
 + '</head>'
+ '<body>'
+ '<h1>Sorry! There is  nothing!</h1>'
+ '<a href="/">back to upload file</a>'
 + '</body>'
 + '</html>';
 var okPage = ''
     + '<!DOCTYPE html>'
      + '<html>'
       + '<head>'
       + '<meta charset="UTF-8">'
     + '<title>Upload File</title>'
     + '</head>'
     + '<body>'
     + '<h1>Upload File OK!</h1>'
     + '<a href="/">continue to upload</a>'
     + '</body>'
     + '</html>';

     function show(req,res,page){
     res.statusCode=(page==='errPage'?404:200);
     res.setHeader('Content-Length', page.length);
     res.setHeader('Content-Type', 'text/html');

     res.end(page);
     }

#!/usr/bin/node
const http = require('http'),
      url=require('url'),
      qs=require('querystring')
      log  = console.log;
var items=[];
http.createServer((req, res) =>{
    log(`${req.method} ${req.url} HTTP ${req.httpVersion}`);
    log(req.headers);
    log('');
    if(req.url==='/'&&req.method==='GET'){
        showPage(req,res);
    }else if(req.url==='/'&&req.method==='POST'){
      var data='';
      req.on('data',(chunk)=>{data+=chunk;});
      req.on('end',()=>{
        var list=qs.parse(data);
        log('list:',list);
        if(list.item!==''){items.push(list.item);
          showPage(req,res);}
      });
  }else{
       res.statusCode=404;
       res.end('ERROR');
  }}).listen(8080);
/*解析取键值对*/
function showPage(req,res){
  var html = '<!DOCTYPE html>\n'
           + '<html>\n'
           + '  <head>\n'
          + '<meta charset="UTF-8">\n'
          + '<title>Todo list</title>\n'
         + '</head>\n'
         + '<body>\n'
         + '<h1>Todo List</h1>\n'
        + '<ul>\n'
         + items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')
         + '    </ul>\n'
         + '    <form method="POST" action="/">\n'
        + '       <p><input type="text" name="item" />'
        + '       <input type="submit" value="Add Item" /></p>\n'
        + '    </form>\n'
   + '  </body>\n'
      + '</html>';
  res.end(html);
}

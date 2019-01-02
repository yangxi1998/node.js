#!/usr/bin/node
const http = require('http'),
      url=require('url'),
      qs=require('querystring')
            log  = console.log;
var items=[];
http.createServer((req, res) =>{
  if(url.parse(req.url).pathname==='/'&&req.method==='POST'){
    log(`${req.method} ${req.url} HTTP ${req.httpVersion}`);
    log(req.headers);
    log('query string:',url.parse(req.url).query);
    var data=qs.parse(url.parse(req.url).query);
    items.push(data.item);
    
      var html = '<!DOCTYPE html>\n'
              + '<html>\n'
              + '  <head>\n'
              + '    <meta charset="UTF-8">\n'
              + '    <title>Todo list</title>\n'
              + '  </head>\n'
              + '  <body>\n'
              + '    <h1>Todo List</h1>\n'
              + '    <ul>\n'
              + items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')
              + '    </ul>\n'
              + '    <form method="get" action="/"\n'
              + '       <p><input type="text" name="item" />'
              + '       <input type="submit" value="Add Item" /></p>\n'
              + '    </form>\n'
              + '  </body>\n'
             + '</html>';
    res.end(html);
  }else{
    res.statusCode = 404;
  }
}).listen(8080);
/*解析取键值对*/



#!/usr/bin/node

const http = require('http');
const qs=require('querystring');
const url=require('url');
const items=['吃饭','睡觉'];
http.createServer((req, res) => {
  console.log(req.method);
  switch(req.method){
    case 'GET':select(req,res);
      break;
    case 'POST': create(req, res);
      break;
    case 'PUT':update(req, res);
      break;
    case 'DElETE':remove(req, res);
      break;
     default:
       res.end('Something Wrong!');
  }
  }).listen(8080);

function select(req, res) {
   var msg=JSON.stringify(items);
   console.log(msg);
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Length',Buffer.byteLength(msg));
    res.end(msg);
  
}

function create(req, res) {
   var data='';
   req.on('data',(chunk)=>{
    data+=chunk;
   })
   req.on('end',()=>{
     var item=qs.parse(data).item;
     if(item!=''){items.push(item);}
   })
  
    }

function update(req, res) {  /*修改数据*/
  

}

function remove(req, res) { 
  if(req.url===''){  /*根路径全部删除*/
   items=[];
   res.end('ok');
  }else{
    var id=qs.parse(url.parse(req.url).query).id;
    console.log('ID',id);
    if(id>=0&&id<items.length){
      items.splice(id,1);
      res.end('ok');
    }else{
      res.end('error');
    }
  }
   
}

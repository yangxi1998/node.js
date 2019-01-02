const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.end('hello world');

});
function c1(req,res,next){
  console.log('c1');
  next();
}
function c2(req,res,next){
  console.log('c2');
  next();
}
app.get('/abc',[c1,c2],function(){ //普通路由
  console.log('abc');
},function(req,res){
  console.log('def');
  res.send('ok');
});

app.listen(8080);

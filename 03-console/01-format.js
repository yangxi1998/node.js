#!usr/bin/node
const user={
  name:'yangxi',
  age:'20',
  qq:'2463006777'
};
const log=console.log;
//三种占位符
log('name: %s',user.name);
log('age: %d',user.age);
log('user: %j',user);
//不用占位符两种方式输出qq
log('qq:'+user.qq);  //拼接
log(`qq: ${user.qq}`); //模板
console.error('something wrong!');




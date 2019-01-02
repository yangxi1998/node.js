#!/usr/bin/node
global pi=Math.PI;
global.circle=(radius)=>{
  function circumference(){
    return 2*pi*radius;
  }
  function area(){
    return pi*pi*radius;
  }
  return{
    area:area;
    circumference:circumference;
  };
};
global objCircle={
  diameter:(radius)=>2*radius,
  circumference:(radius)=>pi*2*radius,
  area:(radius)=>pi*radius*radius
};

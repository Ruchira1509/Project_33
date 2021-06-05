var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snow = [];
var score =0;
var person1, person1Img;
var person2, person2Img;
var person3, person3Img

var scene, sceneImg;

function preload(){
  sceneImg = loadImage("snowy place.jpeg");
  
  
  }



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
}
 

function draw() {
  background(sceneImg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  
  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }

  if(frameCount % 50 === 0){
    snow.push(new Snowflake(random(1, 800), 8, 8))
  }

  if(frameCount % 60 === 0){
    snow.push(new Snowflake(random(1, 800), 8, 8))
  }

  if(frameCount % 70 === 0){
    snow.push(new Snowflake(random(1, 800), 8, 8))
  }

  if(frameCount % 80 === 0){
    snow.push(new Snowflake(random(1, 800), 8, 8))
  }
    
     

}

function spawnParticles(){
  if(frameCount % 60 === 0){
    snow.push(new Snowflake(random(width/2-10), 10, 10))
    snow = new Snowflake(Math.round(random(2, 800)), Math.round(random(2, 500)), 5)
    particle1.display();
    }
  
}





 







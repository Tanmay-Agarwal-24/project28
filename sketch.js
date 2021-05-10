
var ground;
var paper,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var	dimg;
var rope1;
function  preload()
{
	dimg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1300, 650);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,300);

	rope1= new Launcher(paper.body,{x:200,y:200})

	box1 = new Dustbin(1200,510,20,200);
	box2 = new Dustbin(1000,510,20,200);
	box3  =new Dustbin(1100,600,219,20);
	
	ground = new Ground(width/2,620,width,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('skyblue');


	ground.display();
	image(dimg,1000,350,225,250);
	
	paper.display();
    rope1.display();
  drawSprites();
 
}




function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.cut();
}

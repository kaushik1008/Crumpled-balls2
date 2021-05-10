
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(750,650,1500,20);
paper=new Paper(100,0,30,30)
///box= new Box(1400,595,20,90);
	box1= new Box(1240,595,20,90);
	//box2= new Box(1320,630,140,20);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER)
	background(73)
	ground.display()
	
//box.display()
box1.display()
////box2.display()
paper.display()
	
}


function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
	}
	
	}
	




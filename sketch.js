
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 =  new Paper(100,600,10,);
    ground= new Ground(400,680,800,20);
	leftSide= new Dustbin(550,620,20,100);
	bottomSide= new Dustbin(610,660,100,20);
	rightSide= new Dustbin(670,620,20,100);
	
	
	Engine.run(engine);
  
}


function draw() {
  
rectMode(CENTER)

   background(0);
 Engine.update(engine);

 paper1.display();
 ground.display();
 leftSide.display();
 bottomSide.display();
 rightSide.display();

  drawSprites();
}

function keypressed(){

if (keyCode===UP_ARROW) {

	 Matter.Body.applyFroce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}



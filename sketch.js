
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,stone,rubber,ground,iron;
var particle1,particle2,particle3,particle4,particle5,particle6,particle7;



function setup() {
	createCanvas(1200,600);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	hammer = new Hammer(200,300,100,30);
	stone = new Stone(500,500,100,100);
	rubber = new Rubber(400,300,100);
	ground = new Ground(600,height,1200,20);
	particle1 = new Sandparticles(400,100,20);
    particle2 = new Sandparticles(100,100,20);
	particle3 = new Sandparticles(200,100,20);
	particle4 = new Sandparticles(300,100,20);
    particle5 = new Sandparticles(600,100,20);
    particle6 = new Sandparticles(500,100,20);
	particle7 = new Sandparticles(800,100,20);
	iron = new Iron(300,300,100,100);



	
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  Engine.update(engine);

  console.log(hammer.body.position.x);
  console.log(hammer.body.position.y);
  console.log(hammer.body.angle);

  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  iron.display();
  
  
  drawSprites();
 
}




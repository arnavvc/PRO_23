var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var z1, z2, z3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	z1 = createSprite(width/2, 650, 200, 20)
	z2 = createSprite(300, 610, 20, 100)
	z3 = createSprite(500, 610, 20, 100)

	z1.shapeColor = "red"
	z2.shapeColor = "red"
    z3.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;

	//Create a package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //Create a zone
	 z1body = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true})
	 z2body = Bodies.rectangle(300, 610, 20, 100, {isStatic:true})
	 z3body = Bodies.rectangle(500, 610, 20, 100, {isStatic:true})

	 z1body.shapeColor = "red"
	 z2body.shapeColor = "red"
	 z3body.shapeColor = "red"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  z1.x= z1body.position.x 
  z1.y= z1body.position.y 	

  z2.x= z2body.position.x 
  z2.y= z2body.position.y 
  
  z3.x= z3body.position.x 
  z3.y= z3body.position.y 	

  keyPressed(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
	Matter.Body.setStatic(packageBody, false)
    
  }
}




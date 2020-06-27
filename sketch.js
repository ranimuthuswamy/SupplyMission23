var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;
var packageSprite, helicopterSprite, groundSprite;
var boxLeftSprite, boxRightSprite, boxBaseSprite;
var boxLeftBody, boxRightBody, boxBaseBody;
var packageBody;
var boxPosition = 0;
var boxY = 0;
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


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPosition = width/2 - 100;
	boxY = 610;

	boxLeftSprite = createSprite(boxPosition, boxY, 20, 100);
	boxLeftSprite.shapeColor = rgb(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100, {isStatic:true});
	World.add(world, boxLeftBody);

	boxBaseSprite = createSprite(boxPosition+100, boxY+40, 200, 20);
	boxBaseSprite.shapeColor = rgb(255,0,0);

	boxBaseBody = Bodies.rectangle(boxPosition+100,boxY+40-20,200,20, {isStatic:true});
	World.add(world, boxBaseBody);

	boxRightSprite = createSprite(boxPosition+200, boxY, 20, 100);
	boxRightSprite.shapeColor = rgb(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100, {isStatic:true});
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {	
	 if (keyCode === DOWN_ARROW) {
		Body.setStatic(packageBody,false);		
	}
}
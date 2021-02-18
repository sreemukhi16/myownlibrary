var fixedRect, movingRect;
var ball1 , ball2 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1= createSprite(200, 200, 50, 80);
  ball1.velocityX = 4
  ball2= createSprite(800, 200, 50, 80);
  ball2.velocityX = -4
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(fixedRect , movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(ball1 , ball2)

  drawSprites();
}



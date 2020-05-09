var fixedRect, movingRect

function setup() {

  createCanvas(400,400);
  
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(100, 100, 50, 50);

  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {

  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  } else {

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }

  drawSprites();

}
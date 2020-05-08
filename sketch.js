var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds, cloudsi;
var obstacles, obstacle1, obstacle2, obstacle4, obstacle5, obstacle6;
var score;

function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloudsi = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {
  
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.depth = 5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  clouds = new Group(); 
  obstacles = new Group();
  
  score = 0;
  
}

function draw() {
  
  background(300);
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: " + score, 500, 50);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnClouds();
  spawnObstacles();
  
  trex.collide(invisibleGround);
  
  drawSprites();

}

function spawnClouds() {
  
  if(frameCount%60 === 0) {
     
    var cloud = createSprite(600, random(100, 125));
    cloud.addImage("red_bacons", cloudsi);
    cloud.velocityX = -5;
    cloud.scale = 0.5;
    cloud.depth = 1;
    cloud.lifetime = 120
    clouds.add(cloud);
  
  }
                        
}

function spawnObstacles() {
 
  if(frameCount%60 === 0) {
    
    var obstacle = createSprite(600, 165);
    obstacle.velocityX = -5;
    obstacles.add(obstacle);
    obstacle.scale = 0.5;
    obstacle.lifetime = 120;
    
    var rand = Math.round(random(1,6));
    switch(rand) {
        
      case 1: obstacle.addImage("green_pigs", obstacle1); 
      break;  
      
      case 2: obstacle.addImage("pink_giraffes", obstacle2);
      break;
      
      case 3: obstacle.addImage("yellow_poddles", obstacle3);
      break;
      
      case 4: obstacle.addImage("pink_panther", obstacle4);
      break;
      
      case 5: obstacle.addImage("tall_gorilla", obstacle5);
      break;
      
      case 6: obstacle.addImage("purple_chimpanzee", obstacle6);
      break;  
      
      default: break;
                                
     }  
    
  }
  
  
}
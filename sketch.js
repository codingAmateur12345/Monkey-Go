
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime 
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  score = 0;

  survivalTime = 0;
  
}


function draw() {
  
  background("LavenderBlush");
  
 stroke("white");
 textSize(20);
 fill("white");
 text("score"+score, 500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate());
 text("survivalTime : "+survivalTime,100,50);
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y>100) {
    monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;

  
  if (ground.x  < 0){
    ground.x = ground.width/2;
  }

  bananas();
  obstacles();
  
  drawSprites();
}

function bananas (){
  
  if(frameCount % 80 === 0){
  banana = createSprite(250,240,10,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 150;
  
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  
  }
    }

function obstacles(){
  if(frameCount % 300 === 0){
   obstacle = createSprite(200,330,20,20);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
    
   obstacle.lifetime = 150;
  }
}





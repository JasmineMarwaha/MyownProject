var girl, background1; 
var gameState = "start"
var score = 0;

function preload() {
  girl= loadAnimation("girl1.png","girl2.png");
  back = loadImage("mountains.jpg");
  obstacleno1 = loadImage("treeFrozen.png");
  obstacleno2 = loadImage("treeLongFrozen.png");
  obstacleno3 = loadImage("treePineFrozen.png");
  obstacleno4 = loadImage("castleWall.png");
  obstacleno5 = loadImage("fence.png");
  prize = loadImage("gift.jpg");
}


function setup() {
  createCanvas(1100,500);
  bg = createSprite(400,200);
  bg.addImage("bg",back);
  bg.scale = 2.4;
  player = createSprite(60, 70, 50, 50);
  player.scale = 0.4;
  player.addAnimation("run", girl);
  player.velocityX = 0;
  player.velocityY = 0;
  endpoint = createSprite(1050, 470, 30, 30);
  endpoint.addImage("endpoint", prize);
  endpoint.scale = 0.03;
  obstacle1 = createSprite(800, 170, 10, 150);
  obstacle1.addImage("obstacle1", obstacleno1);
  obstacle1.scale = 0.8;
  obstacle2 = createSprite(500, 250, 10, 100);
  obstacle2.addImage("obstacle2", obstacleno2);
  obstacle3 = createSprite(220, 250, 20, 40);
  obstacle3.addImage("obstacle3", obstacleno3);
  obstacle3.scale = 0.8;
  line1 = createSprite(130, 60, 10, 120);
  line1.shapeColor = "black";
  line2 = createSprite(110, 120, 50, 10);
  line2.shapeColor = "black";
  obstacle4 = createSprite(350, 400, 20, 20);
  obstacle4.addImage("obstacle4", obstacleno4);
  obstacle4.scale = 0.8;
  obstacle5 = createSprite(680, 300, 20, 30);
  obstacle5.addImage("obstacle5", obstacleno5);
  obstacle5.scale = 0.7;
  line3 = createSprite(50, 200, 130, 10);
  line3.shapeColor = "black";
  line4 = createSprite(120, 270, 120, 10);
  line4.shapeColor = "black";
  line5 = createSprite(70, 410, 10, 120);
  line5.shapeColor = "black";
  line6 = createSprite(130, 410, 10, 120);
  line6.shapeColor = "black";
  line7 = createSprite(350, 230, 130, 10);
  line7.shapeColor = "black";


}

function draw() {
  background(0);  



  if(keyDown("UP_ARROW")){
   player.y = player.y-1;
  }

  if(keyDown("DOWN_ARROW")) {
    player.y = player.y +1;
  }

  if(keyDown("RIGHT_ARROW")){
   player.x = player.x+1;
  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-1;
  }

  if(player.isTouching(line1)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(line2)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(line3)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(line4)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(line5)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(line6)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(obstacle1)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(obstacle2)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(obstacle3)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(obstacle4)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(obstacle5)){
    player.x = 60;
    player.y = 70;
    player.velocityX = 0;
    player.velocityY = 0;
  }

  drawSprites();
  fill("black");
  textSize(15);
  text("Press the down, up, left, and right arrow keys for the girl to get to her christmas gifts!", 200, 30);
}
var fixedRect, movingRect;
var fixedSq, movingSq;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


  fixedSq = createSprite(50,400,40,40);
  movingSq = createSprite(1150,400,40,40);
  fixedSq.velocityX = +5;
  movingSq.velocityX = -5;
}



function draw() {
  background(0,0,0);  

  

  bouncy(fixedRect,movingRect);
  bouncy(fixedSq,movingSq);
  drawSprites();
}

function bouncy(block1,block2) {

  if (block1.x - block2.x < block2.width/2 +block1.width/2
    && block2.x - block1.x < block2.width/2 + block1.width/2) {
      block1.velocityX =block1.velocityX * (-1);
      block2.velocityX = block2.velocityX * (-1);
}
if (block1.y - block2.y < block2.height/2 +block1.height/2
  && block2.y - block1.y < block2.height/2 +block1.height/2){
    block1.velocityY = block1.velocityY * (-1);
    block2.velocityY = block2.velocityY * (-1);
}



}
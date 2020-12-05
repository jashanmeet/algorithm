function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixed=createSprite(600,200,50,100);
  moving=createSprite(200,200,50,100)
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX
  moving.y=World.mouseY
  if(fixed.x-moving.x < moving.width/2+fixed.width/2 
  && moving.x-fixed.x < moving.width/2+fixed.width/2
  && fixed.y-moving.y < moving.height/2+fixed.height/2 
  && moving.y-fixed.y< moving.height/2+fixed.height/2){ 
    fixed.shapeColor = "red"; moving.shapeColor = "red"; } 
    else{ 
  fixed.shapeColor = "green"; moving.shapeColor = "green"; }
  drawSprites();
}
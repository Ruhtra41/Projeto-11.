var Runner, path, leftboundary;
var RunnerImg, pathImg;
function preload(){
  RunnerImg = loadImage("Runner-1.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200, 200);
  path.scale = 1.2;
  path.addImage(pathImg);
  Runner = createSprite(200, 350);
  Runner.scale = 0.08;
  Runner.addImage(RunnerImg);
  leftboundary = createSprite(90, 200, 100, 400);
  leftboundary.visible = false; 
}

function draw() {
  background(0);
  
  drawSprites();
}

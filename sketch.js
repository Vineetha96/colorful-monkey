var bananaImg;
var obstacleImg;
var obstacleGroup;
var background;
var score;
var backImage;
function preload() {
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("stone.png");
}

function setup() {
  createCanvas(400,400);
  
  Background = createSprite(500,500,25,25);
  Background.addImage(backImage);
}

function draw() {
  background(220);
  
  drawSprites();
}
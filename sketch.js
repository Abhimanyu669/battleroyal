var player1,player1img,plater2,player2img,player3,player3img,player4,player4img,player5,player5img,player6,player6img,player7,player7img,player8,player8img,playre9,player9img,player10,player10img
function preload (){
  player1img=loadImage("player1.png");
  player2img=loadImage("player2.png");
  player3img=loadImage("player3.png");
  player4img=loadImage("player4.jpg");
  player5img=loadImage("player5.jpg");
  player6img=loadImage("player6.png");
  player7img=loadImage("player7.png");
  player8img=loadImage("player8.png");
  player9img=loadImage("player9.png");
  player10img=loadImage("player10.png");
  }

function setup() {
  createCanvas(1200,800);
  player1= createSprite(400, 200, 50, 50);
  player1.addImage(player1img)
  player1.scale=0.5;
  player2=createSprite(1100,300,50,50);
  player2.addImage(player2img)
  player2.scale=0.5;
  player3=createSprite(600,400,50,50);
  player3.addImage(player3img)
  player3.scale=0.5;
  player4=createSprite(700,300,50,50);
  player4.addImage(player4img)
  player4.scale=0.5;
  player5=createSprite(500,600,50,50);
  player5.addImage(player5img)
  player5.scale=0.5;
  player6=createSprite(400,300,50,50);
  player6.addImage(player6img)
  player6.scale=0.5;
  player7=createSprite(600,200,50,50)
  player7.addImage(player7img)
  player7.scale=0.5;
  player8=createSprite(800,500,50,50);
  player8.addImage(player8img)
  player8.scale=0.5;
  player9=createSprite(400,600,50,50);
  player9.addImage(player9img)
  player9.sclae=0.5;
  player10=createSprite(500,100,50,50)
  player10.addImage(player10img)
  player10.scale=0.5;
}


function draw() {
  background(255,255,255);  
  drawSprites();
}
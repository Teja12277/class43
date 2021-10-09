var player1,galien
var player2,yalien
function preload(){
  player1run = loadAnimation("Images/sprite_110.png", "Images/sprite_111.png")
  player1stand = loadAnimation("Images/sprite_110.png")
  player1jump = loadAnimation("Images/sprite_113.png")
  player2run = loadAnimation("Images/sprite_p20.png", "Images/sprite_p21.png")
  player2stand = loadAnimation("Images/sprite_p20.png")
  player2jump = loadAnimation("Images/sprite_p23.png")
  bg = loadImage("Images/bg.jpg")

}
function setup() {
createCanvas(windowWidth,windowHeight)
player1 = createSprite(100, 600)
player1.addAnimation("p1", player1stand)
player1.addAnimation("p1a", player1run)
player1.addAnimation("p1b", player1jump)
player2 = createSprite(120, 600)
player2.addAnimation("p2", player2stand)
player2.addAnimation("p2a", player2run)
player2.addAnimation("p2b", player2jump)
}

function draw() {
background(bg)
playerMovement();
drawSprites();
}

function playerMovement(){
  if(keyDown("RIGHT")){
    player1.velocityX = 3
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("RIGHT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }

  if(keyDown("LEFT")){
    player1.velocityX = -3
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("LEFT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }


  if(keyDown("D")){
    player2.velocityX = 4
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("D")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("A")){
    player2.velocityX = -4
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("A")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("UP")){
    player1.velocityY = 2
    player2.changeAnimation()
  }

}
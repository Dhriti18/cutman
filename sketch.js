var PLAY = 0;
var END = 1;
var gameState = PLAY;

var sofia, sofai, cup, edges, playS, death;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8,
  wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wallsGroup;

var monster1, monster2, monster3, monster4, mons1, mons2, mon3, mons4, monsGroup;
var life, lif, lif2, lif1, lif3;


var score = 0;
var lives = 4;

function preload() {
  monster1 = loadImage("mons1.png");
  monster2 = loadImage("mons2.png");
  monster3 = loadImage("mons3.png");
  monster4 = loadImage("mons4.png");
  sofai = loadAnimation("pacman1.png", "pacc.png");
  playS = loadSound("PacmanSo.mp3");
  death = loadSound("pacD1.m4a");
  life = loadImage("pacman1.png");

}

function setup() {
  createCanvas(600, 610);
  monsGroup = createGroup();
  sofia = createSprite(540, 560, 13, 20);
  sofia.shapeColor = "green";
  sofia.addAnimation("sof", sofai);
  sofia.scale = 0.1;
  cup = createSprite(7, 6, 20, 20);
  cup.shapeColor = "yellow";
  wallsGroup = createGroup();
  squareGroup=createGroup();

  wall1 = createSprite(526, 15, 80, 16);
  wall1.shapeColor = "cyan";
  wallsGroup.add(wall1);
  wall2 = createSprite(92, 19, 20, 80);
  wall2.shapeColor = "cyan";
  wallsGroup.add(wall2);
  wall3 = createSprite(120, 130, 150, 20);
  wall3.shapeColor = "yellow";
  wallsGroup.add(wall3);
  wall4 = createSprite(230, 460, 200, 20);
  wall4.shapeColor = "yellow";
  wallsGroup.add(wall4);

  wall5 = createSprite(209, 18, 40, 20);
  wall5.shapeColor = "red";
  wallsGroup.add(wall5);
  wall6 = createSprite(537, 117, 20, 60);
  wall6.shapeColor = "red";
  wallsGroup.add(wall6);

  wall7 = createSprite(95, 176, 130, 20);
  wall7.shapeColor = "pink";
  wallsGroup.add(wall7);
  wall8 = createSprite(40, 200, 20, 60);
  wall8.shapeColor = "pink";
  wallsGroup.add(wall8);

  wall9 = createSprite(225, 180, 20, 80);
  wall9.shapeColor = "orange";
  wallsGroup.add(wall9);
  wall10 = createSprite(310, 210, 190, 20);
  wall10.shapeColor = "orange";
  wallsGroup.add(wall10);
  wall13 = createSprite(120, 310, 200, 20);
  wall13.shapeColor = "purple";
  wallsGroup.add(wall13);
  wall16 = createSprite(480, 330, 180, 20);
  wall16.shapeColor = "purple";
  wallsGroup.add(wall16);

  wall11 = createSprite(400, 530, 130, 20);
  wall11.shapeColor = "teal";
  wallsGroup.add(wall11);
  wall12 = createSprite(281, 25, 20, 100);
  wall12.shapeColor = "teal";
  wallsGroup.add(wall12);

  wall14 = createSprite(130, 580, 350, 20);
  wallsGroup.add(wall14);
  wall19 = createSprite(180, 380, 160, 20);
  wall19.shapeColor = "lime";
  wallsGroup.add(wall19);
  wall15 = createSprite(581, 460, 20, 210);
  wall15.shapeColor = "coral";
  wallsGroup.add(wall15);
  wall17 = createSprite(40, 460, 20, 120);
  wall17.shapeColor = "coral";
  wallsGroup.add(wall17);
  wall18 = createSprite(350, 369, 20, 230);
  wall18.shapeColor = "violet";
  wallsGroup.add(wall18);
  wall21 = createSprite(420, 130, 100, 20);
  wall21.shapeColor = "violet";
  wallsGroup.add(wall21);

  wall20 = createSprite(430, 51, 220, 20);
  wall20.shapeColor = "aqua";
  wallsGroup.add(wall20);
  wall22 = createSprite(573, 188, 20, 200);
  wall22.shapeColor = "aqua";
  wallsGroup.add(wall22);

  mons1 = createSprite(419, 140, 10, 10);
  mons1.addImage(monster1);
  mons1.scale = 2;

  mons1.velocityX = 5;
  mons1.velocityY = -5;
  monsGroup.add(mons1);


  mons2 = createSprite(195, 148, 10, 10);
  mons2.addImage(monster2);
  mons2.scale = 2;
  mons2.velocityX = 5
  mons2.velocityY = -5;
  monsGroup.add(mons2);
  mons3 = createSprite(77,288, 10, 10);
  mons3.addImage(monster3);
  mons3.scale = 2;
  mons3.velocityX = 5;
  mons3.velocityY = -5;
  monsGroup.add(mons3);
  mons4 = createSprite(17,112, 10, 10);
  mons4.addImage(monster4);
  mons4.scale = 2;
  mons4.velocityX = 5;

  mons4.velocityY = 5;
  monsGroup.add(mons4);
  lif = createSprite(200, 605, 8, 8);
  lif.addImage(life);
  lif.scale = 0.1;
  lif1 = createSprite(230, 605, 8, 8);
  lif1.addImage(life);
  lif1.scale = 0.1;
  lif2 = createSprite(260, 605, 8, 8);
  lif2.addImage(life);
  lif2.scale = 0.1;
  lif3 = createSprite(290, 605, 8, 8);
  lif3.addImage(life);
  lif3.scale = 0.1;
//restart = createSprite(300,140);
  
 
  
 












 

  edges = createEdgeSprites();


}

function draw() {
  background("blue");
  textSize(15);
  stroke("white");
  text("LIVES: " + lives, 28, 602)
  stroke("white");
  textSize(12);
  text("SCORE:  " + score, 104, 17);
  text("X" + mouseX + "Y" + mouseY, mouseX, mouseY);
   textSize(15);
  stroke("white");
  text("TARGET ", 9,28);

  sofia.velocityX = 0;
  sofia.velocityY = 0;



  if (gameState === PLAY) {


    if (monsGroup.isTouching(sofia)) {
     
      lives = lives - 1;
      lif.visible = false;
    }


    if (keyDown("right")) {
      sofia.velocityX = 2;
      sofia.velocityY = 0;

    }
    if (keyDown("up")) {
      sofia.velocityY = -2;
      sofia.velocityX = 0;
    }

    if (keyDown("down")) {
      sofia.velocityX = 0;
      sofia.velocityY = 2;
    }

    if (keyDown("left")) {
      sofia.velocityX = -2;
      sofia.velocityY = 0;
    }

 for (var i = 28; i < 568; i = i + 20) {
     
     fill("white");
      circle1=circle(7, i, 9);
    } 
    for (var a = 28; a < 569; a = a + 20) {
     
      fill ("white");
      circle2=circle(140, a, 9);
    }
    for (var r = 28; r <569 ; r = r + 20) {
         fill("white");
      circle3=circle(70,r,9);
    }
   for (var d = 28; d < 568; d = d + 20) {
     
     fill("white");
      circle4=circle(210, d, 9);
    } 
    for (var v = 10; v< 569; v=v+ 20) {
     
      fill ("white");
      circle(280, v, 9);
    }
    for (var e= 10; e <590 ; e= e + 20) {
         fill("white");
      circle(350,e,9);
    }
    for (var f = 10; f < 600; f = f + 20) {
      fill("white");
      circle(420,f,9);
    }


    for (var w = 10; w < 600; w = w + 20) {
  circle(480, w, 9);
    }
    for (var q = 10; q < 600; q = q + 20) {
      circle(540,q,9);
    }
    for (var l = 10; l <600; l=l+20) {
    circle(700,l,9);}
 
    

      





    if (sofia.isTouching(wallsGroup)) {

      sofia.velocityY = 0;
      sofia.velocityX = 0;

    }
    createEdgeSprites();
    sofia.bounceOff(edges);
    sofia.bounceOff(wallsGroup);


    monsGroup.bounceOff(wallsGroup);
    mons1.bounceOff(edges);
    mons2.bounceOff(edges);
    mons3.bounceOff(edges);
    mons4.bounceOff(edges);



    if (lives >0){
  
      
       gameSate = END;
     
      
     
      
    }


    if (sofia.isTouching(cup)) {
      textFont("kendall");
      stroke("yellow");
      textSize(27);
      text("You win", 120, 159);
      score=score+1;
      sofia.velocityX = 0;
      sofia.velocityY = 0;
      gameSate = END;
    }




    if (gameState === END) {
     
      sofia.velocityX = 0;
      sofia.velocityY = 0;
      monsGroup.velocityY = 0;
      monsGroup.velocityX = 0;
    }
    
    
    drawSprites();
  }
  
  
  
  
  
  
  
}

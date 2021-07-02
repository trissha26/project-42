var spacebg;
var spacecreaft1, spacecraft2, spacecraft3, spacecraft4;
var iss, issImg;
var hasdocked = false;



function preload(){
 issImg = loadImage("iss.png");
 spacebg = loadImage("spacebg.jpg");
 spacecraft1 = loadImage("spacecraft1.png");
 spacecraft2 = loadImage("spacecraft2.png");
 spacecraft3 = loadImage("spacecraft3.png");
 spacecraft4 = loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(280, 240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 180);
  iss.addImage(issImg);
  iss.scale = 0.6;


}

function draw() {
  background(spacebg); 
  
  if(!hasdocked){
    spacecraft.x = spacecraft.x+ random(-1,1);
    if(keyDown(LEFT_ARROW)){
     spacecraft.x = spacecraft.x-2;
     spacecraft.addImage(spacecraft3);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x+2;
      spacecraft.addImage(spacecraft4);
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y+2;
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-2;
      spacecraft.addImage(spacecraft2);
    }

  }
  if(spacecraft.y<=(iss.y+50)&& spacecraft.x<=(iss.x-10)){
    hasdocked=true;
    textSize(30);
    fill("white");
    text("Docking Successful", 200, 300);

  }

  
  drawSprites();
}
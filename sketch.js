var ground
var backgroundimage,zombieimage,hunterimage,bulletimage,gameoverimage,startimage,titleimage,zombieimage2;
var bulletArray=[]

function preload(){
backgroundimage=loadImage("assets/background.png")
zombieimage=loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png")
hunterimage=loadImage("assets/hunter.png")
bulletimage=loadImage("assets/bullet.png")
gameoverimage=loadImage("assets/gameover.png")
startimage=loadImage("assets/start.png")
titleimage=loadImage("assets/title.png")
zombieimage2=loadAnimation("assets/zombie4.png","assets/zombie5.png","assets/zombie6.png")

}

function setup(){

createCanvas(windowWidth,windowHeight);
ground=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
ground.addImage(backgroundimage)
ground.scale=7
ground.velocityX=-2

bullet=createSprite(326,375,5,5)
bullet.addImage(bulletimage)
bullet.scale=0.07
bullet.debug = true;


hunter=createSprite(200,windowHeight-200,100,100)
hunter.addImage(hunterimage)
hunter.scale=1.5
hunter.debug = true;
hunter.setCollider("rectangle",-50,0,90,200)

}

function draw(){
    background("black")

    if(ground.x<windowWidth/2-100){
        ground.x=windowWidth/2+200
    }

    multipleZombies();
    //fire multiple bullets on clicking space bar using for loop
    //for(var i=0;i<bullets.length;i++){
      //
    //}

    drawSprites()
}

//function for multiple zombies
function multipleZombies(){
   if(frameCount%100===0){
    var zombie=createSprite(windowWidth,windowHeight-190,10,10)
    zombie.scale=3;
    zombie.debug = true;
    zombie.setCollider("rectangle",-13,0,30,100)
    zombie.velocityX=-6
    zombie.lifetime=windowWidth/6
    zombie.depth=zombie.depth+1

    //switch statement to create multiple zombies animation
    rand = Math.round(random(1,2))
    switch(rand)
    {
      case 1: zombie.addAnimation("zombie1",zombieimage);
      break;
      case 2: zombie.addAnimation("zombie2",zombieimage2);
      break;
      default: break;
    }
   }
}

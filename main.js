// UFO
let ufo,asteroid1,asteroid2,asteroid3;

function preload() {
  ufoImage = loadImage("assets/ufo.png");
  asteroidImage = loadImage("assets/asteroid.png");
  bg = loadImage("assets/bg.jpg");
}


function setup() {
  createCanvas(1200, 700);
  ufo = createSprite(600, 600);
  ufo.addImage("ufo", ufoImage);
  ufo.scale = 0.3;

  asteroid1 = createSprite(400, 100);
  asteroid1.addImage("asteroid", asteroidImage);
  asteroid1.scale = 0.1;
  asteroid1.velocity.y = 2;

  asteroid2 = createSprite(700, 250);
  asteroid2.addImage("asteroid", asteroidImage);
  asteroid2.scale = 0.1;
  asteroid2.velocity.y = 1; 

  asteroid3 = createSprite(1000, 50);
  asteroid3.addImage("asteroid", asteroidImage);
  asteroid3.scale = 0.1;
  asteroid3.velocity.y = 1;


}

function draw(){
  background("black");

  image(bg, 0, 0, width, height);
  if(keyIsDown(LEFT_ARROW)){
    ufo.position.x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    ufo.position.x += 5;
  }
  
  if(asteroid1.position.y >700){
    asteroid1.position.y = 0;
  }
  if(asteroid2.position.y >700){
    asteroid2.position.y = 0;
  }
  if(asteroid3.position.y >700){
    asteroid3.position.y = 0;
  }
  if(ufo.overlap(asteroid1) || ufo.overlap(asteroid2) || ufo.overlap(asteroid3)){
    textSize(50);
    fill("yellow");
    text("Game Over", width/2 - 150, height/2);
    asteroid1.velocity.y = 0;
    asteroid2.velocity.y = 0;
    asteroid3.velocity.y = 0;

  }

  ufo.position.x = constrain(ufo.position.x, 0, width);
  ufo.position.y = constrain(ufo.position.y, 0, height);
  drawSprites();

}
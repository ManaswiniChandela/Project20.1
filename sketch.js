var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  
  speed=random(25,50)
  weight=random(400,1500)

  deformation=0.5*weight*speed*speed/22500;

  car=createSprite(50,200,50,50);
  wall=createSprite(600,200,30,400);
  wall.shapeColor=80,80,80;
}

function draw() {
  background(0,0,0); 
  
  car.velocityX=speed;

  /*if(deformation<100){
    car.shapeColor=0,255,0;
  }

  if(deformation>100  &&  deformation<180){
    car.shapeColor=230,230,0;
  }

  if(deformation>180){
    car.shapeColor=255,0,0;
  }*/
  drawSprites();
}
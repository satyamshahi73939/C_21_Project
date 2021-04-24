var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1350,400);
  speed=random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall = createSprite(1300, 200, thickness, height/2);
  wall.shapeColor = "grey";
}
function draw() {
  background("black");  
  if(hasCollided(bullet, wall)) {
    console.log(2);
    bullet.velocityX = 0;
    wall.depth=bullet.depth;
    bullet.depth=bullet.depth+1;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = "red";
    }
    if(damage<10)
    {
      wall.shapeColor = "green";
    }
  }
  
  drawSprites();
}
 function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
} 
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;
var particle;
var turn = 0;

var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k += 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20);
  textFont("Algerian");

  Engine.update(engine);
 
  // For displaying the plinkos
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }

  /* For pushing the particles into the array
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }
 
  // For displaying the particles
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  } */

  // For displaying the divisions
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  // Displaying the score
  text(score, 100, 50);

  // Displaying the scores over the respective divisions
  text("500", 25, 600);
  text("400", 105, 600);
  text("300", 185, 600);
  text("200", 265, 600);
  text("100", 345, 600);
  text("100", 425, 600);
  text("200", 505, 600);
  text("300", 585, 600);
  text("400", 665, 600);
  text("500", 745, 600);

  if (particle != null){

    particle.display();
    var position = particle.body.position.x;

    if (particle.body.position.y > 760){

      // The division have a value of 500
      if (position > 0 && position < 80 || position > 720 && position < 800){

        score += 500;
        particle = null;
      }

      // The division which have a value of 400
      else if (position > 80 && position < 160 || position > 640 && position < 720){

        score += 400;
        particle = null;
      }

      // The divisions which have a value of 300
      else if (position > 160 && position < 240 || position > 560 && position < 640){
        
        score += 300;
        particle = null;
      }

      // The divisions which has a value of 200
      else if (position > 240 && position < 320 || position > 480 && position < 560){

        score += 200;
        particle = null;
      }

      // The divisions which have a vlaue of 100
      else if (position > 320 && position < 400 || position > 400 && position < 480){

        score += 100;
        particle = null;
      }

      // If the ball does not fall in any divsion, then no score will be added
      else{

        particle = null;
      }

      if (turn > 5) gameState = "END";
    }
  }

  if (gameState === "END"){

    textSize(25);
    text("Game Over", 300, 40);
  }

}

function mousePressed(){

  if (gameState !== "END"){

    turn++;
    particle = new Particle(mouseX, 10, 10);

  }
}
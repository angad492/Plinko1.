var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0 ;
var ground;
var display;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
  
    
}
 


function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40)
  fill(255);

  textSize(35)
  text(" 500 ",5, 550);
  text(" 100 ",80, 550);
  text(" 200 ",160, 550);
  text(" 400 ",240, 550);
  text(" 300 ",320, 550);
  text(" 500 ",400, 550);
  text(" 300 ",480, 550);
  text(" 100 ",560, 550);
  text(" 200 ",640, 550);
  text(" 400 ",720, 550);
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();   
  }
 
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles
  
  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10))
  }
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  
  

}





/*if(gameState == "END") {
   background("black");
   fill("red");
   textsize(100);
   text("Game Over", 200, 400);
  }*/

  

  

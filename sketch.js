const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World; 
const Constraint = Matter.Constraint;

var world, engine;
var ground ;
var ball ;


function setup() {

  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  //JSON Format 
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(800,750,1200,20,{isStatic:true})
  World.add(world,ground)
 
    box1 = new Box(1000,300,100,100)
    box2 = new Box(1000,300,100,100)
    box3 = new Box(1000,300,100,100)
    box4 = new Box(1000,300,100,100)
    box5 = new Box(1000,300,100,100)
    box6 = new Box(1000,300,100,100)

    box7 = new Box(880,300,100,100)
    box8= new Box(880,300,100,100)
    box9 = new Box(880,300,100,100)
    box10 = new Box(880,300,100,100)
    box11 = new Box(880,300,100,100)
    box12 = new Box(880,300,100,100)

    box13 = new Box(760,300,100,100)
    box14 = new Box(760,300,100,100)
    box15 = new Box(760,300,100,100)
    box16 = new Box(760,300,100,100)
    box17 = new Box(760,300,100,100)
    box18 = new Box(760,300,100,100)
    
    ball1 = new Ball ()
    rope1 = new Rope (ball1.body,{x:500,y:50})
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  ball1.display();
  rope1.display();

  }

  function mouseDragged (){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
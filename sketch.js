const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world
var ball

function setup() {
  createCanvas(400,400);

engine=Engine.create()
world=engine.world

ball=Bodies.circle(100,300,10, {restitution:1})
World.add(world, ball)

ground=Bodies.rectangle(200,380, 400, 10,{isStatic:true})
World.add(world, ground)

console.log(ball)
}

function draw() {
  background("red"); 

Engine.update(engine)

ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,10,10)

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10)

}
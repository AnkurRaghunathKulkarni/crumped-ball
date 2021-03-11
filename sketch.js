const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var paper1,ground1,dustbin1
function setup(){
    createCanvas(1600,700)
    rectMode(CENTER)
    engine=Engine.create()
    world=engine.world
   paper1=new paper(200,450,70)
   ground1=new ground(width/2,670,width,20)
  dustbin1=new dustbin(1200,650)
Engine.run(engine) 

}
function draw() {
rectMode(CENTER)
background("black")
paper1.display()
ground1.display()
dustbin1.display()



}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
    }
}
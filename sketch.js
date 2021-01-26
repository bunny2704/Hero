const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg;

function preload() {
//preload the images here
bgimg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,600,1000,20);
    box1 = new Box(860,409,40,40);
    box2 = new Box(860,369,40,40);
    box3 = new Box(860,329,40,40);
    box4 = new Box(860,289,40,40);
    box5 = new Box(860,249,40,40);
    box6 = new Box(860,209,40,40);
    box7 = new Box(860,169,40,40);
    box8 = new Box(805,329,40,40);
    box9 = new Box(805,289,40,40);
    box10 = new Box(805,249,40,40);
    box11 = new Box(805,209,40,40);
    box12 = new Box(805,169,40,40);
    box13 = new Box(750,329,40,40);
    box14 = new Box(750,289,40,40);
    box15 = new Box(750,289,40,40);
    box16 = new Box(750,249,40,40);
    box17 = new Box(750,209,40,40);
    box18 = new Box(750,169,40,40);
    box19 = new Box(695,249,40,40);
    box20 = new Box(695,209,40,40);
    box21 = new Box(695,169,40,40);
    hero=new Super(160,260,100);
    slingshot = new sling(hero.body,{x:505, y:80});
    monster=new Monster(960,329,200)
}

function draw() {
  background(bgimg);

  Engine.update(engine);

  ground.display();
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
 box19.display();
 box20.display();
 box21.display();
 hero.display();
 slingshot.display();
monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
//function mouseReleased(){
 // slingshot.fly()
//}

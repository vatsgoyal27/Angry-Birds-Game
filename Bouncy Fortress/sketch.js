const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    d0 = new stone(49, 300, 50, 50);
    d1 = new stone(100, 300, 50, 50);
    d2_wood = new box(151, 300, 50, 50);
    d3_wood = new box(202, 300, 50, 50);
    d4_wood = new box(253, 300, 50, 50);
    d5 = new stone(304, 300, 50, 50);
    d6 = new stone(355, 300, 50, 50);

    c0 = new stone(49, 230, 50, 50);
    c1 = new stone(100, 230, 50, 50);
    c2_wood = new box(151, 230, 50, 50);
    c3_wood = new box(202, 230, 50, 50);
    c4_wood = new box(253, 230, 50, 50);
    c5 = new stone(304, 230, 50, 50);
    c6 = new stone(355, 230, 50, 50);

    b0 = new stone(49, 160, 50, 50);
    b1 = new stone(100, 160, 50, 50);
    b2_wood = new box(151, 160, 50, 50);
    b3_wood = new box(202, 160, 50, 50);
    b4_wood = new box(253, 160, 50, 50);
    b5 = new stone(304, 160, 50, 50);
    b6 = new stone(355, 160, 50, 50);


    a0 = new stone(49, 90, 50, 50);
    a1 = new stone(100, 90, 50, 50);
    a3_wood = new box(202, 90, 50, 50);
    a2_wood = new box(151, 90, 50, 50);
    a4_wood = new box(253, 90, 50, 50);
    a5 = new stone(304, 90, 50, 50);
    a6 = new stone(355, 90, 50, 50);

    z0 = new stone(49, 30, 50, 50);
    z1 = new stone(100, 30, 50, 50);
    z3 = new stone(202, 30, 50, 50);
    z2 = new stone(151, 30, 50, 50);
    z4 = new stone(253, 30, 50, 50);
    z5 = new stone(304, 30, 50, 50);
    z6 = new stone(355, 30, 50, 50);

    y0 = new stone(49, -50, 50, 50);
    y2 = new stone(151, -50, 50, 50);
    y4 = new stone(253, -50, 50, 50);
    y6 = new stone(355, -50, 50, 50);
    y1_pig = new pig(100, -50, 25, 25);
    y3_pig = new pig(202, -50, 25, 25);
    y5_pig = new pig(304, -50, 25, 25);

    bird1 = new bird(200, 1000);

    floor = new ground(200, 400, 400, 20);
    floor_bird = new ground(1000, 400, 400, 20);
    
}

function draw(){
    background("red");
    Engine.update(engine);

    d0.display();
    d1.display();
    d2_wood.display();
    d3_wood.display();
    d4_wood.display();
    d5.display();
    d6.display();

    c0.display();
    c1.display();
    c2_wood.display();
    c3_wood.display();
    c4_wood.display();
    c5.display();
    c6.display();

    b0.display();
    b1.display();
    b1.display();
    b2_wood.display();
    b3_wood.display();
    b4_wood.display();
    b5.display();
    b6.display();

    a0.display();
    a1.display();
    a3_wood.display();
    a5.display();
    a2_wood.display();
    a4_wood.display();
    a6.display();

    z0.display();
    z1.display();
    z3.display();
    z5.display();
    z2.display();
    z4.display();
    z6.display();

    y0.display();
    y2.display();
    y4.display();
    y6.display();
    y1_pig.display();
    y3_pig.display();
    y5_pig.display();

    bird1.display();

    floor.display();
    floor_bird.display();
    
}
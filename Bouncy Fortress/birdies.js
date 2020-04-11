class bird {

    constructor(x, y) {
        var options ={
            restitution: 0,
            friction: 4,
            density: 3
        }

        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
        display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        rotate(angle);
        fill("red");
        stroke("black");
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width-10, this.height-10);
        pop();
    }
}
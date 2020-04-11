class pig {

    constructor(x, y, radiusX, radiusY) {
        var options ={
            restitution: 1,
            friction: 1
        }
        this.x
        this.y
        this.radiusX
        this.radiusY
        this.body = Bodies.rectangle(x, y, radiusX, radiusY, options);
        World.add(world, this.body);
    }
        display() {
        var pos = this.body.position;
        fill("green");
        stroke("red");
        ellipse(pos.x, pos.y, this.radiusX-10, this.radiusY-10);
    
    }
}
class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        
        pop();
    }

};
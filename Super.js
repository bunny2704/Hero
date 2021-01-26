class Super
    { 
        constructor(x, y) {
            var options = {
                restitution: 1,
                friction: 0,
                isStatic:false
            }
            this.radius = 10;
            this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x, y, this.radius, options);
        
        World.add(world, this.body);


    }
    display() {
    
        var pose = this.body.position;
      //  var angle = this.body.angle;

        push();
        translate(pose.x, pose.y);
      //  rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("yellow");
        ellipseMode(RADIUS);
       image(this.image,0,0,this.radius*10,this.radius*10);
        pop();
    }}
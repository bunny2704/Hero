class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.1,
            friction:3,
            isStatic :false,
    
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
    
        World.add(world,this.body)
    
    
    }
    display(){
        fill("brown");
        strokeWeight(2)
        var pos=this.body.position
        rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
    
    
    }
    }
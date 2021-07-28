class Snowflake{
    constructor(x,y,r,){
        var options = {
            'restitution':0.8,
            'friction':5,
            'density':8.0
        }
    
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("snowflake2.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body);
        

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //this.color = color(random(0,255), random(0, 255), random(0, 255));
        fill('white');
        stroke('white');
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r, this.r);
        imageMode(CENTER)
        image(this.image, 0, 0, 15, 15);
        pop();
    }
    };

  

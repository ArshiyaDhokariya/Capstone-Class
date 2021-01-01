class Ball {
    constructor ()
    {
        var options={
            density : 1 ,
            frictionAir : 0.5 ,
             
        }
        
        this.body = Bodies.circle(200,500,100,options)
        World.add (world,this.body)
        
 
    }

    display()
    {
        var pos = this.body.position ;
        
        strokeWeight(4);
        stroke("yellow")

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,50*2,50*2);
        
    }
}
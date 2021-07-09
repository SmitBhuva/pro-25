class Paper{
    constructor(x,y,r){
        var options= {
            isStatic : false,
            resitution : 0.5,
            friction : 0,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r;
        this.image = loadImage("paper.png");
   }
   display(){
       var pos= this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image,0,0,this.radius+50,this.radius+50)
       pop();

    }
}
class box{
    constructor(x,y,width,height){
        var options={
            'isStatic': true,
            'restitution':0,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    
 this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    
    
World.add(world,this.body);

    }
    display(){

        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    
    }
}
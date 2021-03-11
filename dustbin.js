class dustbin{
    constructor(x,y){
       
       this.x=x
       this.y=y
       this.width=200
       this.height=230
       this.thickness=20
       this.image=loadImage("dustbingreen.png")
       this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
       this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
       this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
       
        
        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)
    }
    
    display(){
        var posb=this.bottom.position
        var posl=this.left.position
        var posr=this.right.position
        push()
        translate(posl.x,posl.y)
        angleMode(RADIANS)
        rotate(this.angle)
        fill("green")
            rectMode(CENTER)
        pop ()

        push()
        translate(posr.x,posr.y)
        angleMode(RADIANS)
        rotate(this.angle*-1)
        fill("green")
            rectMode(CENTER)
        pop ()
      
        push()
        translate(posb.x,posb.y)
        angleMode(RADIANS)
        fill("green")
            rectMode(CENTER)
        imageMode(CENTER)
        image(this.image,0,-this.height/2,this.width,this.height)
        pop ()




    }   
}
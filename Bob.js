class Bob{
    constructor(x,y,img){
        this.bob=createSprite(x,y,50,50);
        this.bob.addImage(img);
        this.bob.scale=0.05;
        this.bob.x=x;
        this.bob.y=y;

    }

    remove(){
        this.bob.destroy();
    }
    setpos(x,y){
       
        this.bob.x=x;
        this.bob.y=y;
    }

    move(){

       

    if(keyDown("up")){
        this.bob.setVelocity(0,-3) 
         
        console.log(this.bob);
     }
  
    
  if(keyDown("down")){
    this.bob.setVelocityY=3
    }
    
  if(keyDown("right")){
        this.bob.setVelocityX=3
     }
    
  if(keyDown("left")){
    this.bob.velocityX=-3

    }
    }
}



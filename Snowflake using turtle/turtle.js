 
 class turtle
{
  constructor()
  {
    this.positionX=400;
    this.positionY=300;
    this.angle=0;
    this.color=0;
  }

  forward(length)
  {
    var Radperdegree = 0.017453343;
    ctx.beginPath();
    ctx.moveTo(this.positionX , this.positionY);
    this.positionX = this.positionX + length*Math.cos(Radperdegree*this.angle);
    this.positionY = this.positionY + length*Math.sin(Radperdegree*this.angle);
    ctx.lineTo(this.positionX , this.positionY);
    ctx.closePath();
    ctx.stroke();
    console.log("X: ",this.positionX ,"Y: ", this.positionY);
  }
  
  turnTo(angle)
  {
    this.angle +=angle;
  }

   turn(angle)
   {
     this.angle = angle ;
   }
}
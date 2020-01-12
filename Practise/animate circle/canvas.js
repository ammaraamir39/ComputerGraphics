var canvas= document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');


var mouse={
    x:undefined,
    y:undefined
}

var color=[
    '#896d6d',
    '#2735a3',
    '#388292',
    '#a8c4c9'
]
var maxRadius= 50;
var minRadius= 8;

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse)
})


function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    //this.minRadius=radius;
    this.colour = color[Math.floor(Math.random() * color.length)]

    this.draw=function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle=this.colour;
        c.fill()


        
    }

    this.update=function(){

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }



        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
            ){
                if(this.radius < maxRadius)
                {

                    this.radius+=0.5
                }
        }
        else if(this.radius > minRadius){
            this.radius-=1
        }
        
        this.draw()
    } 

}

var circleArray=[]

for(i=0;i<1000;i++){

    var x = Math.random() * (innerWidth-radius*2)+radius;
    var dx = (Math.random() - 0.5) ;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    var radius = Math.random() * minRadius + 1

    circleArray.push(new Circle(x,y,dx,dy,radius))
    //var circle=new Circle(x,y,dx,dy,radius);
}

console.log(circleArray)



function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(i=0;i<circleArray.length;i++){
        circleArray[i].update()
    }
    
    //circle.update()
    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2, false)
    // c.strokeStyle = "blue";
    // c.stroke();
    
    
    

}

animate()
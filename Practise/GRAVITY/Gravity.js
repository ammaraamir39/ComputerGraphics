var canvas=document.querySelector('canvas');
var c=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var mouse={
    x:innerWidth/2,
    y:innerHeight/2
}

var colors=[
    '#e74747', '#387a39', '#0a5846','#020333'
]

addEventListener('mousemove',function(event){
mouse.x=event.x;
mouse.y=event.y;
})

addEventListener('resize',function(){
    canvas.width=innerWidth;
    canvas.height=innerHeight;
})

function RandIntRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}
 
function RandomColor(colors){
    
    return colors[Math.floor(Math.random()*colors.length)];
    
}

function Ball(x,y,dy,radius,color){
    this.x=x;
    this.y=y;
    this.dy=dy;
    this.radius=radius;
    this.color=color;

    this.update=function(){
        if(this.y + this.radius > canvas.height){
                
            this.dy=-this.dy
        
        }
        // if(this.y+radius < canvas.height/2){
        //     this.dy=+this.dy
        // }
        else{
            this.dy=+1;
        }
        this.y+=this.dy
        
        
       this.draw()
    }

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();
        c.closePath();
 
    }
}

var ball;
function init(){
    ball=new Ball(canvas.width/2,canvas.height/2,2,30,'red');
    console.log(ball)
}
    
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
   // c.fillText("Ammar",mouse.x,mouse.y)
    ball.update()
}

init();
animate();
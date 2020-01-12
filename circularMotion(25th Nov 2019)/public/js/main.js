const cvs=document.querySelector("canvas");
const ctx=cvs.getContext('2d');
cvs.width=window.innerWidth;
cvs.height=window.innerHeight;


const mouse={
    x:innerWidth/2,
    y:innerHeight/2

};

const colors=[
    '#218C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66'
]

window.addEventListener('mousemove',(event)=>{
    mouse.x=event.clientX;
    mouse.y=event.clientY;
})

window.addEventListener('resize',()=>{
    cvs.width=window.innerWidth;
    cvs.height=window.innerHeight;
})

function randomInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function RandomColors(colors){
    return colors[Math.floor(Math.random()*colors.length)];
}
var w,h;
class circle{
    constructor(x,y,radius,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.radians=Math.random()*(Math.PI*2);
        this.velocity=0.05;
        w=x;
        h=y;
        this.distanceFromCenter=randomInteger(50,120);
        this.MousePoint={
            x:x,
            y:y
        }
    };

    update=()=>{
        const lastPoint={
            x:this.x,
            y:this.y
        
        }
        //this.MousePoint+={mouse.x-this.lastPoint.x,}

        this.radians+=this.velocity;
        this.x=mouse.x+Math.cos(this.radians)*this.distanceFromCenter;
        this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        
        this.draw(lastPoint)
    }

    draw=(lastPoint)=>{
        ctx.beginPath();
        ctx.strokeStyle=this.color;
        ctx.lineWidth=this.radius;
        ctx.moveTo(lastPoint.x,lastPoint.y);
        ctx.lineTo(this.x,this.y)
        ctx.stroke();
        ctx.closePath();
    }


}

let particles=[];

function init(){
    for(var i=0;i<50;i++){
        const radius=(Math.random()*2)+1;
        particle=new circle(cvs.width/2,cvs.height/2,radius,RandomColors(colors));
        particles.push(particle);
    }
    console.log(particles);
    
}

function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle='rgba(255,255,255,0.02)';
    ctx.fillRect(0,0,cvs.width,cvs.height);
    particles.forEach(particle=>{
        particle.update();
    })

}


init();
animate();
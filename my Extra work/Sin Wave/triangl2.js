    class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }

    putPixel() {
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,1,1);
        ctx.closePath();
    }
}

let cv = document.getElementById("canvas");
let ctx = cv.getContext('2d');
var points = [];
var Previous;
var animationID;
var animate = true;
var currPosX = 0;
var currPosY = 0;
// ctx.moveTo(0,0);

var theta;
// ctx.moveTo(0,0);
myInit();

function forword(d){
    
    x = d * (Math.cos(theta));
    y = d * (Math.sin(theta));
    ctx.beginPath();
    ctx.moveTo(currPosX, currPosY);
    ctx.lineTo(currPosX + x, currPosY +y);
    ctx.stroke();

    ctx.closePath();
    
    console.log("currPosX "+currPosX);
    console.log("currPosY "+currPosY);
    console.log(currPosX +x);
    console.log(currPosY +y);
    console.log("theta "+theta);
    console.log("-------- ");

    currPosX = currPosX + x;
    currPosY = currPosY +y;
}

function turn(t){
    theta = (t*(Math.PI/180)) + theta;
}

function myInit(){           

    // theta = 0;
    // forword(150);
    // turn(90);
    // forword(150);
    // turn(90);
    // forword(150);
    // turn(90);
    // forword(50);
    // turn(90);
    // forword(250);
    // forword(10);
    cv.addEventListener('click',function(evt){
        var mouse_pos = getMousePos(cv, evt);

        if(points.length < 3)
            points.push(new Point(mouse_pos.x,mouse_pos.y)); // vertices (input points)
        
        if(points.length == 3) { // if(all 3 vertices)
            Previous = points[Math.round(Math.random()*2)]; //select previous(startingPoint) = random vertex(0||1||2)
            if(animate){
                animate = !animate;
                pattern();
            }
            else {
                animate = !animate;
                cancelAnimationFrame(animationID);
                points = [];
            }
        }
    }, true);
}

function pattern(){
    var triangle_R_P = points[Math.round(Math.random()*2)]; // select triangle_R_P = random vertex(0||1||2)
    var newPoint = new Point((Previous.x+triangle_R_P.x)/2, (Previous.y+triangle_R_P.y)/2); // newPoint = Mid Point
    newPoint.putPixel(); // draw dot
    Previous = newPoint; // previous = new
    animationID = requestAnimationFrame(pattern);
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
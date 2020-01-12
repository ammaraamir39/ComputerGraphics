
    class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }

    putPixel() {
        ctx.beginPath();
        // ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.fillRect(this.x,this.y,1,1);
        ctx.closePath();
        // ctx.fill();
    }
}

let cv = document.getElementById("canvas");
let ctx = cv.getContext('2d');
var points = [];


function myInit(){           

    cv.addEventListener('click',function(evt){
        var mouse_pos = getMousePos(cv, evt);
        
        if(points.length < 3)
            points.push(new Point(mouse_pos.x,mouse_pos.y)); // vertices (input points)
        
        if(points.length == 3) { // if(all 3 vertices)
            var Previous = points[Math.round(Math.random()*2)]; //select previous(startingPoint) = random vertex(0||1||2)
            for(var i = 0; i < 15000; i++){ // inc(15000) =>
                var triangle_R_P = points[Math.round(Math.random()*2)]; // select triangle_R_P = random vertex(0||1||2)
                // console.log(P);
                // console.log(T);
                var newPoint = new Point((Previous.x+triangle_R_P.x)/2, (Previous.y+triangle_R_P.y)/2); // newPoint = Mid Point
                newPoint.putPixel(); // draw dot
                Previous = newPoint; // previous = new
            }
            points = [];
        }
    }, true);
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}


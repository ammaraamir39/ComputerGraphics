var canvas = document.querySelector('canvas')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

var ctx = canvas.getContext('2d')


class Circle {
    constructor(x, y, dx, dy, radius,color) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.animateID = 0
        this.Animate = false;
        this.color=color;
    }
}

function update(c) {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    if ((c.x + c.radius > innerWidth) || (c.x - c.radius < 0)) {
        c.dx = -c.dx
    }
    if ((c.y + c.radius > innerHeight) || (c.y - c.radius < 0)) {
        c.dy = -c.dy
    }

    c.x += c.dx
    c.y += c.dy
    ctx.beginPath()
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = "blue"
    ctx.stroke();

    c.animateID = requestAnimationFrame(() => {
        update(c);
    });
}

var CircleArray = []

const colors = [
    '#218C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66'

]

function RandomColors(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


var radius = 50
var dx = 5
var dy = 5

var x = Math.random() * (innerWidth - radius * 2) + radius
var y = Math.random() * (innerHeight - radius * 2) + radius

var Cir = new Circle(x, y, dx, dy, radius);
CircleArray.push(Cir)
Cir.Animate = true;
update(Cir);

x = Math.random() * (innerWidth - radius * 2) + radius
y = Math.random() * (innerHeight - radius * 2) + radius

// var Cir = new Circle(x,y,dx,dy, radius);
// CircleArray.push(new Circle(x,y,dx,dy, radius))
// CircleArray[CircleArray.length-1].Animate = true;
// update(CircleArray[CircleArray.length-1]);



addEventListener('click', function (event) {
    var mouse = getMousePos(canvas, event);
    console.log(CircleArray);

    // for(var i = 0 ; i < CircleArray.length; i++)
    // {
    if (((Cir.x - mouse.x) * (Cir.x - mouse.x)) + ((Cir.y - mouse.y) * (Cir.y - mouse.y)) <= (Cir.radius * Cir.radius)) {

        Cir.Animate = !Cir.Animate;
        if (!Cir.Animate){
            Cir.color=RandomColors(colors)
            ctx.fillStyle=Cir.color;
            ctx.fill();
            cancelAnimationFrame(Cir.animateID)
        }
        else
            Cir.animateID = requestAnimationFrame(() => {
                Cir.Animate = true;
                update(Cir);
            });
    }
    // }

});

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
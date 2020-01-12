var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 200;
var y = 5;
var WIDTH = 482;
var HEIGHT = 482;
var img = new Image();
var collision = 0;

//window.onload=init();

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    img.src = "maze.gif";
    return setInterval(draw, 1);
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    //ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(img, 0, 0);
}

function draw()
{
    clear();
    ctx.fillStyle="purple";
    rect(x,y,15,15);
}

function doKeyDown(e) {
    switch (e.keyCode) {
        case 38:  /* Up arrow was pressed */
            if (y - dy > 0) {
                y -= dy;
                clear();
                checkcollision();
                if (collision == 1) {
                    y += dy;
                    collision = 0;
                }
            }
            break;
        case 40:/*Down arrow key pressed*/    
            if(y+dy < HEIGHT)
            {
                y+=dy;
                clear();
                checkcollision();
                if (collision == 1) {
                    y -= dy;
                    collision = 0;
                }
            }
            break;
        case 37:  /* Left arrow was pressed */
            if (x - dx > 0) {
                x -= dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x += dx;
                    collision = 0;
                }
            }
            break;
        case 39:  /* Right arrow was pressed */
            if (x + dx < WIDTH) {
                x += dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x -= dx;
                    collision = 0;
                }
            }
            break;
        }
}
function checkcollision() {
    var imgd = ctx.getImageData(x, y, 15, 15);
    console.log(imgd)
    var pix = imgd.data;
    for (var i = 0; n = pix.length, i < n; i += 4) {
        console.log('PIX')
        console.log(pix[i])
        if (pix[i] === 0) {
            collision = 1;
        }
    }
    
}
init();
window.addEventListener('keydown',doKeyDown,true);
         
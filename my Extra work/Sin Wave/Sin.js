var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function plotSine(ctx) {
    var width = canvas.width;
    var height = canvas.height;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(66,44,255)";

    var x = 0;
    var y = 0;
    var amplitude = 20;
    var frequency = 5;
    //ctx.moveTo(x, y);
    while (x < width) {
        y = height / 2 + amplitude * Math.sin(x / frequency);
        console.log('y' + y)
        ctx.lineTo(x, y);
        x = x + 1;
        console.log('x' + x)
    }
    ctx.stroke();
}
plotSine(ctx)
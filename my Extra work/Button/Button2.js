window.onload = myDisplay();

function myDisplay() {


    var cvs = document.getElementById('myCanvas');
    var ctx = cvs.getContext('2d');
    var buttonX = 50;
    var buttonY = 100;
    var buttonW = 200;
    var buttonH = 50;
    ctx.fillStyle = "#BBDB64";
    ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
    ctx.stroke();

    cvs.addEventListener('click', function(event) {
        if (
            event.x > buttonX &&
            event.x < buttonX + buttonW &&
            event.y > buttonY &&
            event.y < buttonY + buttonH
        ) {
            ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
            ctx.fillStyle = getRandomColor();
            ctx.stroke();
			ctx.font = "20pt sans-serif";
			ctx.fillText("Click",100, 135);
			ctx.strokeText("Click",100,135);

        }
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var count = 0
var a, b, c, d
window.onload = () => {

    let cvs = document.getElementById('Mycanvas')
    let ctx = cvs.getContext('2d')
        //     var x, y, x1, y1
        //     cvs.addEventListener('click', function(event) {
        //         x = event.clientX - 12;
        //         y = event.clientY - 10;
        //         ctx.arc(x, y, 5, 0, Math.PI * 2)
        //     });

    //     cvs.addEventListener('click', function(event) {
    //         x1 = event.clientX - 12;
    //         y1 = event.clientY - 10;
    //         ctx.arc(x1, y1, 5, 0, Math.PI * 2)
    //     });
    //     ctx.rect(x, y, x1, y1)
    //     ctx.stroke()
    // }


    var pointSize = 3;

    cvs.addEventListener('click', function(e) {

        console.log(count)
        if (count == 0)
            getPosition(e);
        else if (count == 1)
            getPosition2(e)

        count = (count + 1) % 2

    });


    function getPosition(event) {
        var rect = cvs.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        a = x
        b = y
    }

    function getPosition2(event) {
        var rect = cvs.getBoundingClientRect();
        var x1 = event.clientX - rect.left;
        var y1 = event.clientY - rect.top;
        c = x1
        d = y1
        c = c - a
        d = d - b
        ctx.rect(a, b, c, d)
        ctx.stroke()
    }

    //  drawCoordinates(x, y);

    //  function drawCoordinates(x, y) {

    //      ctx.fillStyle = "#ff2626"; // Red color

    //      ctx.beginPath();
    //      ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    //      ctx.fill();
    //  }

}
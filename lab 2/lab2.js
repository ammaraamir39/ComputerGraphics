 window.onload=myDisplay();
function myDisplay() {

    alert("inside my Display Function");
    var cvs = document.getElementById("mycanvas");
    var ctx = cvs.getContext('2d');
    
    var rect = {
        x: 0,
        y: 0,
        w: 120,
        h: 80
    };
    cvs.addEventListener('click', function (evt) {
        const path=new Path2D()
        path.rect(0,0,120,80);
        //path.rect(10,10,20,30);
        
        path.closePath();
        
        ctx.fillStyle="#000000";
        //ctx.fillStyle = "rgba(225,225,225,0.5)";
        //ctx.fill(path);
        ctx.fill(path);
        ctx.lineWidth=2;
        ctx.strokeStyle="#000000";
        ctx.stroke(path);
                   var mousePos = getMousePos(cvs, evt);
               
                   if (Inside(mousePos, rect)) {
                       alert('clicked inside rect');
                   } else {
                      alert('clicked outside rect');
                   }
               }, false)
}


    function Inside(pos, rect) {
        return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
        
    }

    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }


// function myDisplay() {
//     console.log('inside MyDisplayFunction');
//     alert("inside my Display Function");
//     var cvs = document.getElementById("mycanvas");
//     var ctx = cvs.getContext('2d');

//     var rect = {
//         x: 0,
//         y: 0,
//         width: 200,
//         height: 100
//     };


//     function isInside(pos, rect) {
//         return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
//     }

//     function getMousePos(canvas, event) {
//         var rect = canvas.getBoundingClientRect();
//         return {
//             x: event.clientX - rect.left,
//             y: event.clientY - rect.top
//         };
//     }

//     cvs.addEventListener('click', function (evt) {
//         var mousePos = getMousePos(cvs, evt);

//         if (isInside(mousePos, rect)) {
//             alert('clicked inside rect');
//         } else {
//             alert('clicked outside rect');
//         }
//     }, false)

//     const path = new Path2D;
//     path.rect(0, 0, 200, 100);
//     path.rect(25, 72, 32, 32);
//     path.closePath();

//     ctx.fillStyle = "#FFFFFF";
//     ctx.fillStyle = "rgba(225,225,225,0.5)";
//     ctx.fill(path);
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "#000000";
//     ctx.stroke(path);

// }
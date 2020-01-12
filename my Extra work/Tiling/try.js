let cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')

let row = 3,
    col = 3;

let tileWidth = cvs.width / col;
let tileHeight = cvs.height / row;

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        ctx.rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight)
        ctx.stroke();
    }
}


let img1 = new Image();
img1.src = 'Images/nature.jpg'

// img1.onload = function() {
//     for (i = 0; i < 3; i += 2) {
//         for (j = 0; j < 3; j += 2) {
//             //xindex = 1, yindex = 1;
//             x = j * tileWidth, y = i * tileHeight;
//             ctx.drawImage(img1, x, y, tileWidth, tileHeight);
//         }

//     }
// }

var pointX
var pointY

cvs.addEventListener('click', function(e) {
    var points = cvs.getBoundingClientRect()
    pointX = e.clientX - points.left
    pointY = e.clientY - points.top
    colorTile(pointX, pointY, ctx)
        //console.log(pointX, pointY)
})


class point {
    constructor(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.w1 = c;
        this.h1 = d;
    }
}


function colorTile(pointX, pointY, ctx) {



    // var x1 = 0;
    // var y1 = 0;
    // var w2 = 200;
    // var h2 = 200;
    // var count = 0;

    arr = []
    var x1 = 0;
    var y1 = 0;
    var w1 = 200;
    var h1 = 200;
    var count = 1;
    for (i = 0; i < 3; i++) {

        y1 = i * 200
        h1 = count * 200
        count += 1
        for (j = 0; j < 3; j++) {

            //     xnew = color(pointX, pointY, w1, h1, count, t);
            //     t = xnew
            //     w1 += 200;
            //     if (color) {
            //         break
            //     }
            // }
            // count += 1
            // h1 += 200
            t = new point(x1, y1, w1, h1);
            arr.push(t);
            // console.log(t);
            if (x1 >= 400) {
                x1 = 0;
                // y1 = 200;
                w1 = 200

            } else {

                x1 += 200

            }






            w1 += 200

        }
        w1 -= 200


    }

    // function color(pointX, pointY, w, h, count, t) {

    //     if ((pointX > t.x && pointY > t.y) && (pointX < w && pointY < h)) {
    //         ctx.fillRect(t.x, t.y, w, h)
    //     }
    //     if (t.x >= 600) {
    //         t.x = 0
    //     } else {
    //         t.x += 200
    //     }

    //     if (count == 0) {
    //         t.y = 0
    //     } else {
    //         t.y += 200;
    //     }
    //     return t
    // }
    //     if (pointX > 0 && pointY > 0 && pointX < 200 && pointY < 200) {
    //         ctx.fillRect(0, 0, 200, 200)
    //     } else if ((pointX > 200 && pointY > 0) && (pointX < 400 && pointY < 200)) {
    //         ctx.fillRect(200, 0, 200, 200)
    //     } else if ((pointX > 400 && pointY > 0) && (pointX < 600 && pointY < 200)) {
    //         ctx.fillRect(400, 0, 200, 200)
    //     } else if ((pointX > 0 && pointY > 200) && (pointX < 200 && pointY < 400)) {
    //         ctx.fillRect(0, 200, 200, 200)
    //     } else if ((pointX > 200 && pointY > 200) && (pointX < 400 && pointY < 400)) {
    //         ctx.fillRect(200, 200, 200, 200)
    //     } else if ((pointX > 400 && pointY > 200) && (pointX < 600 && pointY < 400)) {
    //         ctx.fillRect(400, 200, 200, 200)
    //     } else if ((pointX > 0 && pointY > 400) && (pointX < 200 && pointY < 600)) {
    //         ctx.fillRect(0, 400, 200, 200)
    //     } else if ((pointX > 200 && pointY > 400) && (pointX < 400 && pointY < 600)) {
    //         ctx.fillRect(200, 400, 200, 200)
    //     } else if ((pointX > 400 && pointY > 400) && (pointX < 600 && pointY < 600)) {
    //         ctx.fillRect(400, 400, 200, 200)
    //     }
    color(pointX, pointY, arr, ctx);
}

function color(x, y, arr, ctx) {

    for (var i = 0; i < arr.length; i++) {

        let a = arr[i];

        if ((x > a.x && y > a.y) && (x < a.w1 && y < a.h1)) {
            console.log('if k andar')
                //ctx.strokeStyle = "#FF0000"
            ctx.fillRect(a.x, a.y, 200, 200);
            console.log(a);
            break;
        }
    }
}
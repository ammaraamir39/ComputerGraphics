let t = 0
let time
let ratData
let catData
window.onload = myFunction()

function myFunction() {
    let cvs = document.getElementById('canvas')
    let ctx = cvs.getContext('2d')

    let Rcvs = document.getElementById('resultCanvas')
    let Rctx = Rcvs.getContext('2d')
    let canvasData = Rctx.getImageData(0, 0, 300, 300)

    let img1 = new Image()
    let img2 = new Image()

    img1.src = "images/mithu.jpg"
    img2.src = "images/tota.jpg"

    let partition = cvs.width / 2
    let startx = 0
    let starty = 0

    ctx.moveTo(partition, 0)
    ctx.lineTo(partition, cvs.height)
    ctx.stroke()

    img1.onload = function() {
        ctx.drawImage(img1, startx, starty, partition, cvs.height)
        catData = ctx.getImageData(0, 0, 300, 300)
    }
    img2.onload = function() {
        ctx.drawImage(img2, partition, starty, partition, cvs.height)
        ratData = ctx.getImageData(partition, starty, partition, cvs.height)

        console.log("cat" + catData.data)
        console.log("rat" + ratData.data)
        console.log("canvas" + canvasData.data)
        time = setInterval(
            function() {
                animation()
                t += 0.02
            }, 50)
    }

    // console.log("canvas" + catData.data.length)

    function animation() {
        console.log("t" + t)
        if (t > 1) {
            clearInterval(time)
            // console.log("rat" + ratData.data)
            console.log("canvas" + canvasData.data)
        }
        for (i = 0; i < catData.data.length; i += 4) {
            canvasData.data[i] = catData.data[i] + (ratData.data[i] - catData.data[i]) * t
            canvasData.data[i + 1] = catData.data[i + 1] + (ratData.data[i + 1] - catData.data[i + 1]) * t
            canvasData.data[i + 2] = catData.data[i + 2] + (ratData.data[i + 2] - catData.data[i + 2]) * t
            canvasData.data[i + 3] = 255;
        }
        Rctx.putImageData(canvasData, 0, 0)
    }
}
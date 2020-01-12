var count = 0
var a, b, c, d
window.onload = () => {

    var cvs = document.getElementById('myCanvas')
    var ctx = cvs.getContext('2d')

    var canvas = document.getElementById('resultCanvas')
    var context = canvas.getContext('2d')


    var pointSize = 3;

    cvs.addEventListener('click', function(e) {

        console.log(count)
        if (count == 0)
            getPosition(e);
        else if (count == 1)
            getPosition2(e)

        count = (count + 1) % 2

    });

    var crop

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
        c = Math.abs(c - a)
        d = Math.abs(d - b)
        ctx.rect(a, b, c, d)
        ctx.stroke()
        canvas.width = c;
        canvas.height = d;
        crop = ctx.getImageData(a, b, c, d)
        context.putImageData(crop, 0, 0)
    }
    // console.log(a, b, c, d)

    var img = new Image()
    img.src = './images/SingleCat.png';
    // var cropData = context.getImageData(0, 0, 400, 400)
    img.onload = function() {
            ctx.drawImage(img, 0, 0, cvs.width, cvs.height)


            // console.log(crop);
            // console.log(crop.data);
            //cropping(crop);
            // context.putImageData(crop, 0, 0)
        }
        //    var cropData = [];

    // function cropping(crop) {

    //     for (i = 1; i <= crop.data.length; i += 4) {
    //         cropData[i] = crop.data[i]
    //         cropData[i + 1] = crop.data[i + 1]
    //         cropData[i + 2] = crop.data[i + 2]
    //         cropData[i + 3] = 255
    //     }

    // }




}
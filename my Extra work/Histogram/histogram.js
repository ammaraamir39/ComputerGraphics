window.onload = myFunc();

function myFunc() {
    myInit();
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();
    var renderableHeight, renderableWidth, xStart, yStart;

    function myInit() {

        document.getElementById("imageFile").addEventListener("change", handleFiles);

    }

    function handleFiles() {
        var theGoods = document.getElementById('imageFile').files[0];
        var img = new Image();
        var reader = new FileReader();
        reader.addEventListener("load", function() { img.src = reader.result; });
        img.onload = function() { fitImageOn(canvas, img, context) }
        if (theGoods) { reader.readAsDataURL(theGoods); }
    }


    function calcAndGraph(img) {
        let rD = [],
            gD = [],
            bD = [];
        //let cv = document.getElementById("ballcanvas");
        //let ctx = cv.getContext("2d");
        //cv.width = 640;
        //cv.height = 480;
        //ctx.drawImage(img, 0, 0);
        //fitImageOn(canvas,img,context);
        const iD = context.getImageData(0, 0, canvas.width, canvas.height).data;
        console.log(iD)
        for (var i = 0; i < 256; i++) {
            rD[i] = 0;
            gD[i] = 0;
            bD[i] = 0;
        }

        for (var i = 0; i < iD.length; i += 4) {
            rD[iD[i]]++;
            gD[iD[i + 1]]++;
            bD[iD[i + 2]]++;

            // console.log(gD[i])
        }

        //console.log(iD);
        //console.log(rD.length);
        //console.log(rD);
        //console.log(bD);
        //console.log(gD);

        histogram({ rD, gD, bD });
        //    lerp({ rD, gD, bD })
    }




    var fitImageOn = function(canvas, imageObj) {
        var imageAspectRatio = imageObj.width / imageObj.height;
        var canvasAspectRatio = canvas.width / canvas.height;

        if (imageAspectRatio < canvasAspectRatio) {
            renderableHeight = canvas.height;
            renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
            xStart = (canvas.width - renderableWidth) / 2;
            yStart = 0;
        } else if (imageAspectRatio > canvasAspectRatio) {
            renderableWidth = canvas.width
            renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
            xStart = 0;
            yStart = (canvas.height - renderableHeight) / 2;
        } else {
            renderableHeight = canvas.height;
            renderableWidth = canvas.width;
            xStart = 0;
            yStart = 0;
        }
        context.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
        calcAndGraph(imageObj);

    };

    function findmax(arr) {
        let len = arr.length;
        let maxcolor = arr[0]
        for (i = 1; i < len; i++) {
            let v = arr[i];
            maxcolor = (v > maxcolor) ? v : maxcolor
        }
        return maxcolor;
    }

    var cvs = document.getElementById('cvs');
    var ctx = cvs.getContext('2d');

    var gvs = document.getElementById('gvs');
    var gtx = gvs.getContext('2d');


    var bvs = document.getElementById('bvs');
    var btx = bvs.getContext('2d');


    var mvs = document.getElementById('mvs');
    var mtx = mvs.getContext('2d');



    function histogram(data) {

        data.rD[0] = 0;
        data.gD[0] = 0;
        data.bD[0] = 0;

        data.rD[255] = 0;
        data.gD[255] = 0;
        data.bD[255] = 0;

        redGraph(data)
        greenGraph(data)
        blueGraph(data)
        blendGraph(data)
    }

    function redGraph(data) {
        redMax = findmax(data.rD)
        lineWith = 150 / 256
        for (i = 1; i < 256; i++) {
            high = (data.rD[i] / redMax) * 150
            ctx.beginPath()
            ctx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high)
            ctx.strokeStyle = "red"
            ctx.stroke()
            ctx.closePath()

        }

    }

    function greenGraph(data) {
        greenMax = findmax(data.gD)
        lineWith = 150 / 256
        for (i = 1; i < 256; i++) {
            high = (data.gD[i] / greenMax) * 150
            gtx.beginPath()
            gtx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high)
            gtx.strokeStyle = "green"
            gtx.stroke()
            gtx.closePath()

        }

    }

    function blueGraph(data) {
        blueMax = findmax(data.bD)
        lineWith = 150 / 256
        for (i = 1; i < 256; i++) {
            high = (data.bD[i] / blueMax) * 150
            btx.beginPath()
            btx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high)
            btx.strokeStyle = "blue"
            btx.stroke()
            btx.closePath()

        }
    }

    function blendGraph(data) {
        redMax = findmax(data.rD)
        greenMax = findmax(data.gD)
        blueMax = findmax(data.bD)

        maxOfMax = findmax([redMax, greenMax, blueMax])
        lineWith = 150 / 256
        mtx.beginPath();

        for (i = 1; i < 256; i++) {
            high = (data.rD[i] / maxOfMax) * 150
            high2 = (data.gD[i] / maxOfMax) * 150
            high3 = (data.bD[i] / maxOfMax) * 150
            mtx.beginPath()
            mtx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high)
            mtx.strokeStyle = "red"

            mtx.stroke()
            mtx.closePath()

            mtx.beginPath()
            mtx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high2)
            mtx.strokeStyle = "rgba(0,255,0,0.5)"

            mtx.stroke()
            mtx.closePath()

            mtx.beginPath()
            mtx.rect(xStart + lineWith * i, yStart + 150, lineWith, -high3)
            mtx.strokeStyle = "rgba(0,0,255,0.2)"

            mtx.stroke()
            mtx.closePath()
        }
        mtx.closePath();
    }
}
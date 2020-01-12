window.onload = myInit();

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
    reader.addEventListener("load", function () { img.src = reader.result; });
    img.onload = function () { fitImageOn(canvas, img, context) }
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

    histogram({rD,gD,bD});
//    lerp({ rD, gD, bD })
}




var fitImageOn = function (canvas, imageObj) {
    var imageAspectRatio = imageObj.width / imageObj.height;
    var canvasAspectRatio = canvas.width / canvas.height;


    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if (imageAspectRatio < canvasAspectRatio) {
        renderableHeight = canvas.height;
        renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
        xStart = (canvas.width - renderableWidth) / 2;
        yStart = 0;
    }

    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if (imageAspectRatio > canvasAspectRatio) {
        renderableWidth = canvas.width
        renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
        xStart = 0;
        yStart = (canvas.height - renderableHeight) / 2;
    }

    // Happy path - keep aspect ratio
    else {
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

function histogram(data){
    
        context.lineWidth = "5";
        context.strokeStyle = "purple";
        context.beginPath();
        context.moveTo(xStart, yStart + renderableHeight)
        context.lineTo(xStart + renderableWidth, yStart + renderableHeight);
        context.stroke();

        context.beginPath();
        context.moveTo(xStart+2, yStart + renderableHeight);
        context.lineTo(xStart+2, yStart)
        context.strokeStyle = "purple";
        context.stroke();

        context.closePath();

    data.rD[0] = 0;
    data.gD[0] = 0;
    data.bD[0] = 0;

        redMax=findmax(data.rD)
        greenMax = findmax(data.gD)
        blueMax = findmax(data.bD)

        //console.log(redMax)
        //console.log(greenMax)
        //console.log(blueMax)
        
        v=findmax([redMax,greenMax,blueMax])
        //v= redMax
        lineWith=renderableWidth/256.0;
        

        

        context.beginPath();


        for (i=1;i<256;i++){
            //console.log(data.rD)
            high=(data.rD[i]/v)*renderableHeight
            high2 = (data.gD[i] / v) * renderableHeight
            high3 = (data.bD[i] / v) * renderableHeight
            console.log(high)
            context.beginPath()
            context.rect(xStart+lineWith*i,yStart+renderableHeight,lineWith,-high)
            context.strokeStyle="red"

            context.stroke()
            context.closePath()

            context.beginPath()
            context.rect(xStart + lineWith * i, yStart + renderableHeight, lineWith, -high2)
            context.strokeStyle = "rgba(0,255,0,0.5)"

            context.stroke()
            context.closePath()

            context.beginPath()
            context.rect(xStart + lineWith * i, yStart + renderableHeight, lineWith, -high3)
            context.strokeStyle = "rgba(0,0,255,0.2)"

            context.stroke()
            context.closePath()




        }

        context.closePath();

        redHisto(data.rD,redMax,renderableHeight,renderableWidth,xStart,yStart,v)
        blueHisto(data.bD,blueMax,renderableHeight,renderableWidth,xStart,yStart,v)
    greenHisto(data.gD, greenMax, renderableHeight, renderableWidth, xStart, yStart, v)
}
function redHisto(data,rMax,rH,rW,xS,yS,maxAll){
    var canvas = document.getElementById('canvasred');
    var context = canvas.getContext('2d');
    context.lineWidth = "5";
    context.strokeStyle = "purple";
    context.beginPath();
    context.moveTo(xS, yS + rH)
    context.lineTo(xStart + renderableWidth, yStart + renderableHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(xStart + 2, yStart + renderableHeight);
    context.lineTo(xStart + 2, yStart)
    context.strokeStyle = "purple";
    context.stroke();

    context.closePath();
    lineWith=rW/256.0;

    for (i = 1; i < 256; i++) {
        //console.log(data.rD)
        high = (data[i] / maxAll) * rH
        context.beginPath()
        context.rect(xS + lineWith * i, yS + rH, lineWith, -high)
        context.strokeStyle = "red"

        context.stroke()
        context.closePath()
    }


}
function blueHisto(data, bMax, rH, rW, xS, yS, maxAll) {
    var canvas = document.getElementById('canvasblue');
    var context = canvas.getContext('2d');
    context.lineWidth = "5";
    context.strokeStyle = "purple";
    context.beginPath();
    context.moveTo(xS, yS + rH)
    context.lineTo(xS + rW, yS + rH);
    context.stroke();

    context.beginPath();
    context.moveTo(xS + 2, yS + rH);
    context.lineTo(xS + 2, yS)
    context.strokeStyle = "purple";
    context.stroke();

    context.closePath();
    lineWith = rW / 256.0;

    for (i = 1; i < 256; i++) {
        //console.log(data.rD)
        high = (data[i] / maxAll) * rH
        context.beginPath()
        context.rect(xS + lineWith * i, yS + rH, lineWith, -high)
        context.strokeStyle = "blue"

        context.stroke()
        context.closePath()
    }


}
function greenHisto(data, rMax, rH, rW, xS, yS, maxAll) {
    var canvas = document.getElementById('canvasgreen');
    var context = canvas.getContext('2d');
    context.lineWidth = "5";
    context.strokeStyle = "purple";
    context.beginPath();
    context.moveTo(xS, yS + rH)
    context.lineTo(xS + rW, yS + rH);
    context.stroke();

    context.beginPath();
    context.moveTo(xS + 2, yS + rH);
    context.lineTo(xS + 2, yS)
    context.strokeStyle = "purple";
    context.stroke();

    context.closePath();
    lineWith = rW / 256.0;

    for (i = 1; i < 256; i++) {
        //console.log(data.rD)
        high = (data[i] / maxAll) * rH
        context.beginPath()
        context.rect(xS + lineWith * i, yS + rH, lineWith, -high)
        context.strokeStyle = "green"

        context.stroke()
        context.closePath()
    }


}
window.onload = myInit();

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var imageObj = new Image();
var renderableHeight, renderableWidth, xStart, yStart;



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
    //console.log(iD)
    for (var i = 0; i < 256; i++) {
        rD[i] = 0;
        gD[i] = 0;
        bD[i] = 0;
    }
    let index = 0;
    for (var i = 0; i < iD.length; i += 4) {
        rD[index] = iD[i];
        gD[index] = iD[i + 1];
        bD[index] = iD[i + 2];
        index++;
       // console.log(gD[i])
    }

    //console.log(iD);
    //console.log(rD.length);
    console.log(rD);
    //console.log(bD);
    //console.log(gD);

    histogram();
    lerp({rD,gD,bD})
}

function size_Dict(data){
    let c=0;
    for(i in data){
        c++
    }
    return c
}

function Rect(left,right,bottom,top,color,flag){
    this.left=left;
    this.right = right;
    this.bottom = bottom;
    this.top = top;
    this.color = color;
    this.flag = flag;

    this.drawRecta=function(){
        console.log(this.left.x + "  " + this.left.y)
        console.log(this.right.x + "  " + this.right.y)
        context.beginPath();
        context.moveTo(this.left.x,this.left.y);
        context.lineTo(this.right.x,this.right.y);
        context.lineTo(this.right.x,this.top.y);
        context.lineTo(this.left.x,this.top.y);
        context.strokeStyle=this.color;
        context.fillStyle=this.color;
        context.stroke();

        if( this.flag){
            context.fill()
        }
        context.closePath()

    }

}



function Square(origin,length,color){
    this.origin=origin;
    this.length=length;
    this.color=color;

    this.draw=function(){
        context.beginPath();
        context.moveTo(this.origin.x,this.origin.y);
        context.lineTo(this.origin.x+this.length,this.origin.y)
        context.lineTo(this.origin.x+this.length,this.origin.y+this.length)
        context.lineTo(this.origin.x,this.origin.y+this.length)
        context.lineTo(this.origin.x,this.origin.y)
        context.strokeStyle=this.color;
        context.fillStyle=this.color;
        context.stroke();
        context.fill()
        context.closePath()
    }
}


function Point(x,y,h,color){
    this.x=x;
    this.y=y;
    this.h=h;
    this.color=color;
    
    this.draw=function(){
        // var square= new Square(new Point(this.x,this.y),50,"blue");
        // square.draw()
    
        //var a=0,b=255;
        //var h=Math.floor(a+Math.random()*(b-a));
        var f=true
      //  console.log("height: "+h)
        var rect=new Rect(
            new Point(this.x,this.y),
            new Point(this.x + 3, this.y),
            new Point(this.x - 3, this.y),
            new Point(this.x + 3, this.y-this.h),
            this.color,f
        )

        var rect2 = new Rect(Point(this.x - 1, this.y),
            new Point(this.x + 1, this.y),
            new Point(this.x + 1, this.y + this.h),
            new Point(this.x - 1, this.y - this.h),
            "yellow", f
        )

        rect.drawRecta();
        //rect2.drawRecta();
    
    }
    

    
    
    
    return this.x,this.y



}

function findmax(arr){
    let len=arr.length;
    let maxcolor=arr[0]
    for(i=1;i<len;i++)
    {
        let v=arr[i];
        maxcolor=(v>maxcolor)?v:maxcolor
    }
    return maxcolor;
}


function rH(arr,i){
    console.log('---------------');
    console.log(arr,i)
    console.log('---------------');

}

function lerp(data) {
    
    
    let source = new Point(xStart, yStart + renderableHeight,0,"green");
    let destination = new Point(xStart + renderableWidth, yStart + renderableHeight,0,"green")
    
    
    let  maxRed=findmax(data.rD)
    let maxGreen = findmax(data.gD)
    let maxBlue = findmax(data.bD)

    console.log('maxRed: '+maxRed);
    console.log('maxGreen: ' + maxGreen);
    console.log('maxBlue: ' + maxBlue);
    console.log(data.rD)
    // let maxRed=data.rD[0]
    
    // const len=data.rD.length;
    // for( i=1;i<len;i++){
        
    //     let v=data.rD[i];
    //     maxRed=(v>maxRed)?v:maxRed
        
    // }
    //     console.log('max Red:'+maxRed)    
    
    
    // for(i<0;i<256;i++){
        
    //      
    //      maxGreen = Math.max(data.gD[0])
    //      maxBlue = Math.max(data.bD[0])

    // }
    
    //console.log('x:' + maxRed)
    //console.log('dx:' + maxGreen)
    //console.log('y:' + maxBlue)


    let numPoints=255;
    let tMin=0.0,tMax=1.0,delT=(tMax-tMin)/255;
    var t=tMin;
    let lerpX={},lerpY={},redHeight={},greenHeight=[],blueHeight=[];

    for(var i=0;i<numPoints;i++){
        lerpX[i]=Math.round((source.x+(destination.x-source.x)*t));
        lerpY[i]=Math.round((source.y+(destination.y-source.y)*t));
        
        
        redHeight=(data.rD[i]/maxRed)*100;
//        rH(data.rD[i],i)
        
        t+=delT;
        tw=new Point(lerpX[i],lerpY[i],redHeight,"red");
        tw.draw()
      //  console.log(tw)
        
        
    }
    console.log("redheerer"+redHeight)

}


function histogram(){
    context.lineWidth="5";
    context.strokeStyle="purple";
    context.beginPath();
    context.moveTo(xStart,yStart+renderableHeight)
    context.lineTo(xStart+renderableWidth,yStart+renderableHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(xStart,yStart+renderableHeight);
    context.lineTo(xStart,yStart)
    context.strokeStyle="purple";
    context.stroke();
    //console.log('data in histo: '+data.rD)
    //let maxRed=findmax(data)
    //maxRed = Math.max(data.rD)
    //maxGreen = Math.max(data.gD)
    //maxBlue = Math.max(data.bD)

    //console.log('RED:' + maxRed)

    //lerp(maxRed,maxGreen,maxBlue)
  

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



function handleFiles() {
    var theGoods = document.getElementById('imageFile').files[0];
    var img = new Image();
    var reader = new FileReader();
    reader.addEventListener("load", function () { img.src = reader.result; });
    img.onload = function () { fitImageOn(canvas, img, context) } 
    if (theGoods) { reader.readAsDataURL(theGoods); }
}
function myInit() {

    document.getElementById("imageFile").addEventListener("change", handleFiles);

}



var bgImage = new Image();
var fgImage = new Image();
var timer;
var ball={
    xx:320,
    yy:200,
    w:fgImage.width,
    h:fgImage.height

}



window.onload = myInit();

function myInit() {
       bgImage.src = 'images/basket.jpg';
    fgImage.src = 'images/ball.jpg';

    myDisplay();
}

function myDisplay() {
    alert('inside my display function');

    var cvs = document.getElementById('mycanvas');
    var ctx = cvs.getContext('2d');
    ctx.drawImage(bgImage, 0, 0);

    cvs.onclick = function (e) {
        var x = e.clientX - 24;
        var y = e.clientY - 12;

        ctx.drawImage(fgImage, x, y, 64, 48);
    }
}
document.body.addEventListener('keydown',function(e){
 e=event || window.event;
 alert(String.fromCharCode(e.keyCode)+"-->"+e.keyCode);
 console.log('you press some key')

 var keyCode=e.charCode || e.keyCode;
 if(keyCode===13)
 {
     console.log('you invoke timer callback function');
     timer=setInterval(moveBall(),10);
 }
})

function moveBall(){
    console.log('you are inside the  my ball function');
    ctx.drawImage(bgImage,320,400);
    ctx.drawImage(fgImage,ball.xx,ball.yy,ball.w,ball.h);
}

// window.onload=myDisplay();

// function myDisplay(){
//     alert('inside the display function')
//     var cvs = document.getElementById('mycanvas');

//     // if(cvs.getContext)
//     // {
//     //     var ctx=cvs.getContext('2d')

//     //     var img=new Image();
//     //     img.onload=function()
//     //     {
//     //         ctx.drawImage(img,100,100,300,300);
//     //     }
//     //     img.src ="images/download.jpg";



//     //     ctx.fillStyle="blue";
//     //     ctx.fillRect(0,0,640,480);

//     //     ctx.moveTo(0,0);
//     //     ctx.lineTo(320,240);
//     //     ctx.stroke();
//     // }
// }
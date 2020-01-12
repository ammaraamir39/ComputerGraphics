var cvs=document.getElementById('canvas');
var cvs2=document.getElementById('canvas2');
var ctx=cvs.getContext('2d');
var ctx2=cvs.getContext('2d');
cvs.width=400;
cvs.height=400;
cvs2.width = 400;
cvs2.height = 400;

var width=cvs.width;
var height=cvs.height;


var img=new Image();
img.src='../images/girl.jpg';
img.onload=function(){
    ctx.drawImage(img,0,0,width,height);
}

count=0

window.addEventListener('click',function(e){
    if(count==0){
        getmouspos1(e)
    }
    else if(count == 1){
        getmousepos2(e)
    }
    count=(count+1)%2
});
var a,b,c,d;
function getmouspos1(e){
    var rect=cvs.getBoundingClientRect();
    var x = e.clientX-rect.left;
    var y=e.clientY-rect.top;
    a=x;
    b=y;
}

function getmousepos2(e){
    var rect=cvs.getBoundingClientRect();
    var x=e.clientX-rect.left;
    var y=e.clientY-rect.top;
    c=x;
    d=y;
    c=Math.abs(c-a);
    console.log(c);
    console.log(d);
    d=Math.abs(d-b);
    
    ctx.rect(a,b,c,d);
    ctx.stroke();

    var imgData=ctx.getImageData(a,b,c,d);
    console.log(imgData);
    cvs2.width=c;
    cvs2.height=d;
    var wi = cvs2.width;
    var hi = cvs2.height;
    ctx2.putImageData(imgData,0,0);

}

window.onload=init();

function init(){
    var canvas=document.getElementById('canvas');
    c=canvas.getContext('2d');
    
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    c.fillStyle="pink";
    c.fillRect(100,100,100,100);
    c.fillRect(400, 100, 100, 100);
    c.fillRect(300, 300, 100, 100);
    
    //Line
    c.beginPath();
    c.moveTo(50,300);
    c.lineTo(300,100);
    c.lineTo(400,400);
    c.stroke();

    //circle
    c.arc(300,300,30,0,Math.PI*2,false);
    c.stroke();

}
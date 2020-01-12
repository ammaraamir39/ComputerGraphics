window.onload=function(){
    // var canvas=document.getElementById('mycanvas');
    // c= canvas.getContext('2d');

    // var ve=3;
    // var corner=50;
    // var rad=50;

    // var ball={
    //     x:25,
    //     y:25
    // }

    // var moveX=Math.cos(Math.PI/180*corner)*ve;
    // var moveY=Math.sin(Math.PI/180*corner)*ve;

    // function Drawme(){
    //      c.clearRect(0,0,400,300);

    //      if(ball.x > canvas.width - rad || ball.x < rad)
    //      {
    //          moveX-=moveX;

    //      }
    //      else if(ball.y > canvas.height -rad || ball.y <  rad)
    //      {
    //          moveY-=moveY;
    //      }
    //      else
    //      {
    //          ball.x+=moveX;
    //          ball.y+=moveY;
    //      }
    //      c.beginPath();
    //      c.fillStyle="red";
    //      c.arc(ball.x,ball.y,rad,0,Math.PI*2,false);
    //      c.fill();
    //      c.closePath();

         

    // }
    // setInterval(Drawme,10);
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    var p = { x: 25, y: 25 };
    var velo = 3,
        corner = 50,
        rad = 20;
    var ball = { x: p.x, y: p.y };
    var moveX = Math.cos(Math.PI / 180 * corner) * velo;
    var moveY = Math.sin(Math.PI / 180 * corner) * velo;

    function DrawMe() {
        ctx.clearRect(0, 0, 400, 300);

        if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
        if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;

        ball.x += moveX;
        ball.y += moveY;

        ctx.beginPath();
        ctx.fillStyle = '#03fc94';
        ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
    setInterval(DrawMe, 10);

}
    
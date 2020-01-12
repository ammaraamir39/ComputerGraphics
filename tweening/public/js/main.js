

window.onload=()=>{
    let cvs=document.getElementById('canvas');
    let ctx=cvs.getContext('2d');
    let t =0;
    let width=cvs.width;
    let height=cvs.height;

   
    var timer;
    ctx.beginPath()
    ctx.moveTo(0,0);
    ctx.lineTo(0,height);
    ctx.moveTo(0,height);
    ctx.lineTo(width,height);
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.stroke();

    ctx.closePath();

    
    

    let House=[
        new Point(2,1 , width, height),
        new Point(3, 1, width, height),
        new Point(3, 2, width, height),
        new Point(3.5, 2, width, height),
        new Point(3.5, 1, width, height),
        new Point(4, 1, width, height),
        new Point(4, 3, width, height),
        new Point(3, 4, width, height),
        new Point(2, 3, width, height),
        new Point(2, 1, width, height)
    ]

    let T=[
        new Point(6.5, 6, width, height),
        new Point(7.5, 6, width, height),
        new Point(7.5, 8, width, height),
        new Point(8, 8, width, height),
        new Point(8, 9, width, height),
        new Point(7.5, 9, width, height),
        new Point(6, 9, width, height),
        new Point(6, 8, width, height),
        new Point(6.5, 8, width, height),
        new Point(6.5, 6, width, height),


        //        new Point(2, 4, width, height),
  //      new Point(2, 4, width, height),

    ]

    
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;


    for(i=0;i<House.length;i++){
       
        ctx.moveTo(House[i].x, House[i].y);
        ctx.lineTo(House[(i + 1) % House.length].x, House[(i + 1) % House.length].y);
        
    };
    ctx.stroke();


    ctx.closePath()

    ctx.beginPath()
    for (i = 0; i < T.length; i++) {

        ctx.moveTo(T[i].x, T[i].y);
        ctx.lineTo(T[(i + 1) % T.length].x, T[(i + 1) % T.length].y);

    };
    ctx.stroke();
    ctx.closePath();



    timer=setInterval(()=>{

        let p = [];

        if (t > 1) {
            clearInterval(timer);
            t = 0;
        }

        for (i = 0; i < House.length; i++) {
            x = House[i].x + (T[i].x - House[i].x) * t
            y = House[i].y + (T[i].y - House[i].y) * t
            p[i] = new Point(x, y, width, height)
        }

        ctx.beginPath()
        p.forEach(element => {


            console.log(element)
            ctx.arc(element.getX(), element.getY(), 5, 0, 2 * Math.PI);
            ctx.stroke();
        });
        ctx.closePath();

        t += 0.02;

    },50);
    






}



class Point{
    constructor(x,y,width,height){
        this.width = width;
        this.height  =height;

        this.x= x *(width/10);
        this.y = (height -(y*(height / 10)))
    }

    getX(){

        return this.x / (this.width / 10);
    }

    getY(){

        return (this.height - this.y) / (this.height / 10);
    }

    
}
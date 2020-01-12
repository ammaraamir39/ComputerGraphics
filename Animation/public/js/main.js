let t=0;
let timer;
let mdata;
let tdata;
//let mtdata=[];



    
    let mcvs=document.getElementById('canvas1');
    let mctx=mcvs.getContext('2d');

    let tcvs=document.getElementById('canvas2');
    let tctx=tcvs.getContext('2d');

    let mtcvs=document.getElementById('resultCanvas');
    let mtctx=mtcvs.getContext('2d');
    let mtdata=mtctx.getImageData(0,0,300,300);

    
    mimg=new Image();
    timg=new Image();

    mimg.src="../images/mithu.jpg";
    timg.src="../images/tota.jpg";
    
    
    mimg.onload=()=>{
        mctx.drawImage(mimg,0,0,mcvs.width,mcvs.height);
        mdata=mctx.getImageData(0,0,300,300);

    }

    timg.onload=()=>{
        tctx.drawImage(timg,0,0,tcvs.width,tcvs.height);
        tdata=tctx.getImageData(0,0,300,300);
        console.log('mithu data'+mdata.data);
        console.log('t data' + tdata.data);

        timer=setInterval(()=>{
                animation();
                t+=0.02
        },50)

    }

   


function animation() {
    if (t > 1) {
        clearInterval(timer)
    }
    for (i = 0; i < tdata.data.length; i += 4) {
        mtdata.data[i] = mdata.data[i] + (tdata.data[i] - mdata.data[i]) * t;
        mtdata.data[i + 1] = mdata.data[i + 1] + (tdata.data[i + 1] - mdata.data[i + 1]) * t;
        mtdata.data[i + 2] = mdata.data[i + 2] + (tdata.data[i + 2] - mdata.data[i + 2]) * t;
        mtdata.data[i + 3] = 255
    }
    mtctx.putImageData(mtdata,0,0);

}

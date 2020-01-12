const cvs=document.querySelector("canvas");
const ctx=cvs.getContext('2d');
cvs.width=window.innerWidth;
cvs.height=window.innerHeight;
var count=0;

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

const Max=[];
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let p = new Point();
    p.x=x;
    p.y=y;
    ctx.beginPath();
    ctx.fillRect(p.x,p.y,5,5);
    ctx.closePath();
    count+=1;
    
    return p;
    }


cvs.addEventListener("click", function (e) {
    // if (count == 2) {
    //     maximumValue(Max);
    // }
    if(count==3){
        maximumValue(Max);
    }

    var point = getMousePosition(cvs, e);
    Max.push(point);
});

// function Stopping(){
//     cvs.addEventListener('dblclick',(e)=>{
        
//         return true
//     })
//     return false;
// }


console.log(Max);


 

    function findmax(pointsArray) {
        //console.log(pointsArray)
        let len = pointsArray.length;
        let max = pointsArray[0]
        for (i = 0; i < len; i++) {
            let v = pointsArray[i];
            if (v.x > max.x && v.y > max.y)
                max = v
        }
        return max
    }

    function maximumValue(pointsArray) {
        var max = findmax(pointsArray)
        ctx.fillRect(max.x, max.y, 10, 10)
        
        // console.log(maximum)
        // alert('maxX: '+maximum.x + 'maxY: '+maximum.y);
        //alert('maxX: '+maximum.x)
        count=0;
    }

    //var maximum = findmax(pointsArray)



var count = 0
var a, b, c, d
window.onload = () => {

    var cvs = document.getElementById('myCanvas')
    var ctx = cvs.getContext('2d')

    var canvas = document.getElementById('resultCanvas')
    var context = canvas.getContext('2d')

    class point {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
    }


    var pointsArray = []
    cvs.addEventListener('click', function(e) {
        if (count == 5) {
            maximumValue(pointsArray)
        }
        getPosition(e);
        // else if (count == 1)
        //     getPosition2(e)

        // count = (count + 1) % 2

    });

    function getPosition(event) {
        var rect = cvs.getBoundingClientRect();

        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        p = new point(x, y)
        ctx.fillRect(p.x, p.y, 2, 2)
        pointsArray.push(p)
        count += 1

    }

    var arr = []

    function findmax(pointsArray) {
        console.log(pointsArray)
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
        alert('max')
        var maximum = findmax(pointsArray)
        ctx.fillRect(maximum.x, maximum.y, 5, 5)
        console.log(maximum)
    }

    //var maximum = findmax(pointsArray)

}
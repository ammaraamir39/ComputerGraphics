var roset
window.onload = () => {
    var cvs = document.getElementById('canvas');
    var ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    cwidth = cvs.width / 2;
    cheight = cvs.height / 2;
    class intPoint {
        constructor(x, y) {
            this.x = x;
            this.y = y;

        }
    }

    class Point2 {
        constructor(x, y) {
            this.x1 = x;
            this.y1 = y;
        }

        setPoint(dx, dy) {
            this.x1 = dx;
            this.y1 = dy;
        }



    }

    CurrPos = new Point2();
    CP = new Point2();
    p = new Point2();

    function moveTO(CurrPos) {
        CP.x1 = CurrPos.x1;
        CP.y1 = CurrPos.y1;
        return CP;
    }

    function lineTO(p) {
        // var geometryBox = new THREE.Geometry()
        // var materialBOx = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.2, side: THREE.DoubleSide })
        // geometryBox.vertices.push(new THREE.Vector3(CP.x1, CP.y1, 0))
        // geometryBox.vertices.push(new THREE.Vector3(p.x1, p.y1, 0))
        CP.x1 = p.x1;
        CP.y1 = p.y1;
        //roset = new THREE.Mesh(geometryBox, materialBOx);
        return CP;
    }

    function Rossette(n, r) {
        pointList = []
        var theta = (2.0 * Math.PI) / n;
        for (var i = 0; i < n; i++) {
            var p2 = new Point2();
            p2.x1 = r * Math.sin(theta * i) + cwidth;
            p2.y1 = r * Math.cos(theta * i) + cheight;
            pointList.push(p2);

        }
        console.log(pointList);

        ctx.beginPath();
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {

                var d = moveTO(pointList[i]);
                // console.log(pointList[i]);
                ctx.moveTo(d.x1, d.y1)
                var f = lineTO(pointList[j]);
                ctx.lineTo(f.x1, f.y1);
                console.log(pointList[j]);
            }
        }
        ctx.stroke();

    }









    // scene.add(roset);



    // var render = function() {
    //     //cube.rotation.z = Math.PI / 2
    //     //cube.translateX(1)
    //     renderer.render(scene, camera)
    // }

    // var gameLoop = function() {
    //     requestAnimationFrame(gameLoop)
    //         //update()
    //     render()
    // }
    // gameLoop()

    Rossette(30, 200);
}
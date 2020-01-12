

    var scene = new THREE.Scene()
        //var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    var camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    camera.position.z = 4

    var size = 8,
        step = 1
    var geometryGrid = new THREE.Geometry()
    var geometryMaterial = new THREE.LineBasicMaterial({ color: 0xcccccc, opacity: 0.2 })

    for (var i = -size; i <= size; i += step) {
        geometryGrid.vertices.push(new THREE.Vector3(-size, i, 0))
        geometryGrid.vertices.push(new THREE.Vector3(size, i, 0))
        geometryGrid.vertices.push(new THREE.Vector3(i, -size, 0))
        geometryGrid.vertices.push(new THREE.Vector3(i, size, 0))
    }
    var line = new THREE.LineSegments(geometryGrid, geometryMaterial)
    scene.add(line)

    var geometry = new THREE.Geometry()
    var material = new THREE.LineBasicMaterial({ color: 0xff00ff, opacity: 0.2, side: THREE.DoubleSide })
    geometry.vertices.push(new THREE.Vector3(0, 0, 0))
    geometry.vertices.push(new THREE.Vector3(3, 0, 0))
    geometry.vertices.push(new THREE.Vector3(3, 4, 0))
    geometry.vertices.push(new THREE.Vector3(0, 4, 0))
    geometry.vertices.push(new THREE.Vector3(0.5 * 3, 6, 0))
    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.faces.push(new THREE.Face3(0, 2, 3));
    geometry.faces.push(new THREE.Face3(3, 2, 4));

    geometry.vertices.push(new THREE.Vector3(0, 0, -3))
    geometry.vertices.push(new THREE.Vector3(3, 0, -3))
    geometry.vertices.push(new THREE.Vector3(3, 4, -3))
    geometry.vertices.push(new THREE.Vector3(0, 4, -3))
    geometry.vertices.push(new THREE.Vector3(0.5 * 3, 6, -3))
    geometry.faces.push(new THREE.Face3(5, 7, 6));
    geometry.faces.push(new THREE.Face3(5, 8, 7));
    geometry.faces.push(new THREE.Face3(7, 8, 9));

    geometry.faces.push(new THREE.Face3(3, 4, 8));
    geometry.faces.push(new THREE.Face3(4, 9, 8));
    geometry.faces.push(new THREE.Face3(2, 7, 9));
    geometry.faces.push(new THREE.Face3(4, 2, 9));

    geometry.faces.push(new THREE.Face3(6, 2, 1));
    geometry.faces.push(new THREE.Face3(7, 2, 6));
    geometry.faces.push(new THREE.Face3(0, 3, 5));
    geometry.faces.push(new THREE.Face3(3, 8, 5));

    geometry.faces.push(new THREE.Face3(0, 5, 1));
    geometry.faces.push(new THREE.Face3(5, 6, 1));


    var barn = new THREE.Mesh(geometry, material)
    barn.position.set(0.0, 0.0, 0.0)

    // barn.translateX(2);
    // barn.rotation.y=2;
     scene.add(barn)
     //Scaling and Shearing
        // var Sx=2.0;
        // var Sy=2.0;
        // var Sz=2.0;

        // var M1=new THREE.Matrix4().makeTranslation(2.0,0.0,0.0);
        // var M2=new THREE.Matrix4();

        // M2.set(Sx,0,0,0,
        //         0,Sy,0,0,
        //         0,0,Sz,0,
        //         0,0,0,1)
            
        // var M=new THREE.Matrix4();
        // M=M.multiply(M2).multiply(M1);


        // var newBarn=barn.clone();
        // newBarn.matrixAutoUpdate=false;
        // newBarn.applyMatrix(M);
        // newBarn.verrticesNeedUpdate=true;
        // scene.add(newBarn);



    var render = function() {
        //cube.rotation.z = Math.PI / 2
        //cube.translateX(1)
        renderer.render(scene, camera)
    }

    var animation = function() {
        requestAnimationFrame(animation)
            //        update()
        render()
    }
    animation()

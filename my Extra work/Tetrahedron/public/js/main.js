window.onload = () => {
    var scene = new THREE.Scene()
        //var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    var camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var size = 4,
        step = 1
    var geometryGrid = new THREE.Geometry()
    var geometryMaterial = new THREE.LineBasicMaterial({ color: 0xcccccc, opacity: 0.2 })

    for (var i = -size; i <= size; i += step) {
        geometryGrid.vertices.push(new THREE.Vector3(-size, i, 0))
        geometryGrid.vertices.push(new THREE.Vector3(size, i, 0))
        geometryGrid.vertices.push(new THREE.Vector3(i, -size, 0))
        geometryGrid.vertices.push(new THREE.Vector3(i, size, 0))
        geometryGrid.vertices.push(new THREE.Vector3(-size, 0, i))
        geometryGrid.vertices.push(new THREE.Vector3(size, 0, i))
        geometryGrid.vertices.push(new THREE.Vector3(i, 0, -size))
        geometryGrid.vertices.push(new THREE.Vector3(i, 0, size))
    }
    var line = new THREE.LineSegments(geometryGrid, geometryMaterial)
    scene.add(line)


    // var geometry = new THREE.BoxGeometry(1, 1, 1)
    // var material = new THREE.MeshBasicMaterial({ color: 0xfeffef, wireframe: false })
    // var cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)
    camera.position.z = 3

    var geometryTri = new THREE.Geometry()
    var materialTri = new THREE.LineBasicMaterial({ color: 0xff00ff, opacity: 0.2, side: THREE })
    geometryTri.vertices.push(new THREE.Vector3(1, 1, 1))
    geometryTri.vertices.push(new THREE.Vector3(1, -1, -1))
    geometryTri.vertices.push(new THREE.Vector3(-1, -1, 1))
    geometryTri.vertices.push(new THREE.Vector3(-1, 1, -1))

    geometryTri.faces.push(new THREE.Face3(1, 2, 3))
    geometryTri.faces.push(new THREE.Face3(0, 3, 2))
    geometryTri.faces.push(new THREE.Face3(0, 1, 3))
    geometryTri.faces.push(new THREE.Face3(0, 2, 1))

    var triangle = new THREE.Mesh(geometryTri, materialTri)
    triangle.position.set(0.0, 0.0, 0.0)
    scene.add(triangle)
//     var geometrySph = new THREE.SphereGeometry(0.5,10,10);
//     var materialSph = new THREE.MeshBasicMaterial({wireframe:true })
//    // geometrytri.vertices.push(new THREE.Vector3(1, 1, 1))
//     var sphMesh=new THREE.Mesh(geometrySph,materialSph);
//     sphMesh.position.set(1.27,1.27,1.27);
//     scene.add(sphMesh);

//     //var geometrySph = new THREE.SphereGeometry(0.5, 10, 10);
//     var materialSph2 = new THREE.MeshBasicMaterial({ wireframe: true })
//     // geometrytri.vertices.push(new THREE.Vector3(1, 1, 1))
//     var sphMesh2 = new THREE.Mesh(geometrySph, materialSph2);
//     sphMesh2.position.set(1.27, -1.27, -1.27);
//     scene.add(sphMesh2);
   
//     var materialSph3 = new THREE.MeshBasicMaterial({ wireframe: true })
//     var sphMesh3 = new THREE.Mesh(geometrySph, materialSph3);
//     sphMesh3.position.set(-1.27, -1.27, 1.27);
//     scene.add(sphMesh3);

//     var materialSph4 = new THREE.MeshBasicMaterial({ wireframe: true })
//     var sphMesh4 = new THREE.Mesh(geometrySph, materialSph4);
//     sphMesh4.position.set(-1.27, 1.27, -1.27);
//     scene.add(sphMesh4);

   
   
    var update = function() {
        // triangle.rotation.x += 0.01
        // triangle.rotation.y += 0.01
        // triangle.rotation.z += 0.01
        sphMesh.rotation.x+=0.01;
    }

    var render = function() {
        // triangle.rotation.z += = 0.1
        //cube.translateX(1)
        renderer.render(scene, camera)
    }

    var animate = function() {
        requestAnimationFrame(animate)
            //update()
        render()
    }
    animate()
}
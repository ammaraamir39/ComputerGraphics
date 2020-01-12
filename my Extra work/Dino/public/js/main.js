window.onload = () => {
    var scene = new THREE.Scene()
        //var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    var camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000)
        //var camera = new THREE.OrthographicCamera(-5, 5, -5, 5, 0.1, 1000)
    var size = 4,
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


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0xfeffef, wireframe: false })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 3

    //var axis = new THREE.Vector3(0, 0, 1)
    // axis.normalize()
    var allCubes = []
    for (var i = 0; i < 10; i++) {
        var newCube = cube.clone()
        allCubes.push(newCube)
        newCube.rotation.z = i * (360 / 10) * (Math.PI / 180)
            //newCube.rotateOnAxis(axis, i * (360 / 10) * (Math.PI / 180))
            //newCube.rotation.z = i * (360 / 10) * (Math.PI / 180)
        newCube.translateY(3.0)
        newCube.scale.set(1, 1, 1)
            //newCube.rotateOnAxis(axis, -i * (360 / 10) * (Math.PI / 180))
            // newCube.rotation.z = -i * (360 / 10) * (Math.PI / 180)
        scene.add(newCube)
    }

    var update = function() {
        //cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        cube.rotation.z += 0.01
        allCubes.forEach(obj => {
            obj.rotation.z += 0.01

        });

    }

    var render = function() {
        //cube.rotation.z = Math.PI / 2
        //cube.translateX(1)

        renderer.render(scene, camera)
    }

    var gameLoop = function() {
        requestAnimationFrame(gameLoop)
        update()
        render()
    }
    gameLoop()

}
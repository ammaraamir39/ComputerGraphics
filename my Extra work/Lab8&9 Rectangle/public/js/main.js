window.onload = () => {
    var scene = new THREE.Scene()
        //var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    var camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    camera.position.z = 4

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

    var geometryBox = new THREE.Geometry()
    var materialBOx = new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: 0.2, side: THREE.DoubleSide })
    geometryBox.vertices.push(new THREE.Vector3(0, 0, 0))
    geometryBox.vertices.push(new THREE.Vector3(2, 1, 0))
    geometryBox.vertices.push(new THREE.Vector3(0, 5, 0))
    geometryBox.vertices.push(new THREE.Vector3(-2, 4, 0))
    geometryBox.faces.push(new THREE.Face3(0, 1, 2))
    geometryBox.faces.push(new THREE.Face3(0, 2, 3))
    var boxPolygon = new THREE.Mesh(geometryBox, geometryMaterial)
    boxPolygon.position.set(0.0, 0.0, 0.0)
    scene.add(boxPolygon)

    var scaleMatrix = new THREE.Matrix4()
    var sx = 1.0 / 2.0
    var sy = 1.0 / 5.0
    var sz = 1.0
    scaleMatrix.set(sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1)

    boxPolygon.matrixAutoUpdate = false
    var r = new THREE.Matrix4().makeTranslation(0, 0, 0).makeRotationZ(-26.5 * Math.PI / 180)
    var sr = new THREE.Matrix4()
    sr = scaleMatrix.multiply(r)
    console.log(sr)
    boxPolygon.applyMatrix(sr)
    boxPolygon.verticesNeedUpdate = true
        //scene.add(boxPolygon)
        // var m1 = new THREE.Matrix4().makeTranslation(3, -3, 0)
        // var m2 = new THREE.Matrix4()
        // var m3 = new THREE.Matrix4()

    // var sx = 2.0 / 3.0
    // var sy = Math.sqrt(3) / 2
    // var sz = 1.0
    // m2.set(sx, 0, 0, 0,
    //     0, sy, 0, 0,
    //     0, 0, sz, 0,
    //     0, 0, 0, 1)
    // var xShear = -1.0 / Math.sqrt(3.0)
    // var yShear = 1
    // var zShear = 1

    // m3.set(1, xShear, 0, 0,
    //     0, yShear, 0, 0,
    //     0, 0, zShear, 0,
    //     0, 0, 0, 1)

    // var m = new THREE.Matrix4()
    // m = m.multiply(m3).multiply(m2).multiply(m1)
    // console.log(m)

    // var newTRi = triangle.clone()
    // newTRi.matrixAutoUpdate = false
    // var color = 0xffffff
    // newTRi.material.color.setHex(color)

    // newTRi.applyMatrix(m)
    // newTRi.verticesNeedUpdate = true
    // scene.add(newTRi)

    var render = function() {
        //cube.rotation.z = Math.PI / 2
        //cube.translateX(1)
        renderer.render(scene, camera)
    }

    var gameLoop = function() {
        requestAnimationFrame(gameLoop)
            //        update()
        render()
    }
    gameLoop()
}
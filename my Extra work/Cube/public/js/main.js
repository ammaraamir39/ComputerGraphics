window.onload = () => {
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    //var camera = new THREE.OrthographicCamera(-5, 5, -5, 5, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0xfeffef, wireframe: false })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 3

    var update = function() {
        //cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        cube.rotation.z += 0.01
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
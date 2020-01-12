window.onload = () => {
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var cubeMaterial = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Images/Car1.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/Car2.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Images/Car3.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/Car4.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('Images/Car5.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Images/Car6.jpg'), side: THREE.DoubleSide })
    ]

    var material = new THREE.MeshFaceMaterial(cubeMaterial)
    var cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    var floorGeometry = new THREE.CubeGeometry(10.5, 1, 10)
    var floorMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/floor.jpg'), side: THREE.DoubleSide })
    var floorCube = new THREE.Mesh(floorGeometry, floorMaterial)
    floorCube.position.y = -5
    scene.add(floorCube)

    var cielingGeometry = new THREE.CubeGeometry(10.5, 1, 10)
    var cielingMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/ceiling2.jpg'), side: THREE.DoubleSide })
    var cielingCube = new THREE.Mesh(cielingGeometry, cielingMaterial)
    cielingCube.position.y = 5
    scene.add(cielingCube)

    var leftWallGeometry = new THREE.CubeGeometry(0.5, 9, 10)
    var leftWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/walln.jpg'), side: THREE.DoubleSide })
    var leftWallCube = new THREE.Mesh(leftWallGeometry, leftWallMaterial)
    leftWallCube.position.x = -5
    scene.add(leftWallCube)

    var rightWallGeometry = new THREE.CubeGeometry(0.5, 9, 10)
    var rightWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('Images/walln.jpg'), side: THREE.DoubleSide })
    var rightWallCube = new THREE.Mesh(rightWallGeometry, rightWallMaterial)
    rightWallCube.position.x = 5
    scene.add(rightWallCube)

    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
    var light1 = new THREE.PointLight(0xFF0040, 2, 50)

    scene.add(ambientLight)
    scene.add(light1)
    camera.position.z = 3

    // var update = function() {
    //     cube.rotation.x += 0.01
    //     cube.rotation.y += 0.01
    //     cube.rotation.z += 0.01
    // }

    var render = function() {
        renderer.render(scene, camera)
    }

    var gameLoop = function() {
        requestAnimationFrame(gameLoop)
            // update()
        render()
    }
    gameLoop()
}
window.onload = () => {
    var scene = new THREE.Scene()
        // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var geometry = new THREE.BoxGeometry(3, 3, 3)
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false })
    var cube = new THREE.Mesh(geometry, material)

    var coneGeometry = new THREE.ConeGeometry(2.5, 10, 16)
    var coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var cone = new THREE.Mesh(coneGeometry, coneMaterial)

    var sphereGeometry = new THREE.SphereGeometry(2, 10, 10);
    var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    var ringGeometry = new THREE.RingGeometry(0.5, 1, 8, 2, 0, Math.PI * 2);
    var ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
    var ring = new THREE.Mesh(ringGeometry, ringMaterial);

    scene.add(cube)
    scene.add(cone)
    scene.add(sphere)
    scene.add(ring);
    cone.position.x = cube.position.x - 8
    sphere.position.x = cube.position.x + 8
    ring.position.y = cube.position.y + 5
    camera.position.z = 10

    var update = function() {
        cube.rotation.z += 0.01
            //cube.rotation.y += 0.01
            //  cube.rotation.z += 0.01
        cone.rotation.x += 0.01
        cone.rotation.y += 0.01
        ring.rotation.z += 0.01
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01
    }

    var render = function() {
        //cube.rotation.z = Math.PI / 8
        // cube.translateX(4)
        renderer.render(scene, camera)
    }

    var gameLoop = function() {
        requestAnimationFrame(gameLoop)
        update()
        render()
    }
    gameLoop()
}
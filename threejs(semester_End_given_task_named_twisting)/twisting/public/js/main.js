window.onload = () => {
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    //var camera = new THREE.OrthographicCamera(-5, 5, -5, 5, 0.1, 1000)
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new THREE.OrbitControls(camera, renderer.domElement)

    var geometry = new THREE.BoxGeometry(2, 2, 2,10,10,10)
    var material = new THREE.MeshBasicMaterial({ wireframe:true})
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 3

    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        Math.PI / 2
    );
    const vector = new THREE.Vector3(1, 0, 0);
    vector.applyQuaternion(quaternion);


    var update = function () {
        //cube.rotation.x += 0.01
        // cube.rotation.y += 0.01
        cube.rotation.z += 0.01
    }
    function twist() {
        const quaternion = new THREE.Quaternion();
        console.log(geometry.vertices)
        for (let i = 0; i < geometry.vertices.length; i++) {
            // a single vertex Y position
            const yPos = geometry.vertices[i].y;
            const twistAmount = 10;
            const upVec = new THREE.Vector3(0, 1, 0);

            quaternion.setFromAxisAngle(
                upVec,
                (Math.PI / 180) * (yPos / twistAmount)
            );

            geometry.vertices[i].applyQuaternion(quaternion);
        }

        // tells Three.js to re-render this mesh
        geometry.verticesNeedUpdate = true;
    }

    var render = function () {
        //cube.rotation.z = Math.PI / 2
        //cube.translateX(1)
        renderer.render(scene, camera)
    }

    var gameLoop = function () {
        requestAnimationFrame(gameLoop)
        twist()
      //  update()
        render()
    }
    gameLoop()
}
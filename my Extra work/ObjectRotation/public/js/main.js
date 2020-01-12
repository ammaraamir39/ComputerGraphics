let camera, scene, renderer;

function main() {
    const fov = 40;
    const aspect = 2;
    const near = 0.1;
    const far = 1000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 50, 0);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);


    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.maxdistance = 1000;
    controls.mindistance = 1;

    const scene = new THREE.Scene();



    {
        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.PointLight(color, intensity);
        scene.add(light);
    }


    const objects = [];
    const sphereGeometry = new THREE.SphereGeometry(5, 20, 20);

    const Parent = new THREE.Object3D();
    scene.add(Parent);
    objects.push(Parent);

    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    sphere = new THREE.Mesh(sphereGeometry, material);
    Parent.add(sphere);

    const childOne = new THREE.Object3D();
    childOne.position.x = -12;
    Parent.add(childOne);
    objects.push(childOne);



    const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
    const sphere2 = new THREE.Mesh(sphereGeometry, material2);
    sphere2.position.x = -12;
    Parent.add(sphere2);
    objects.push(sphere2);


    const childTwo = new THREE.Object3D();
    childTwo.position.x = 12;
    Parent.add(childTwo);
    objects.push(childTwo);



    const material3 = new THREE.MeshNormalMaterial({ wireframe: true });
    const sphere3 = new THREE.Mesh(sphereGeometry, material3);
    sphere3.position.x = 12;
    Parent.add(sphere3);
    objects.push(sphere3);

    function animation(time) {
        time *= 0.001;
        controls.update();

        objects.forEach((obj) => {
            // obj.rotation.x = time;
            obj.rotation.y = time;
            // obj.rotation.z = time;

        });
        renderer.render(scene, camera);

        requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}

main();
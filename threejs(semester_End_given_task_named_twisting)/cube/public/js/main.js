let camera,scene,cube,renderer;

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    //const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const texture=new THREE.TextureLoader().load('../texture/floor.jpg');
    const material = new THREE.MeshBasicMaterial({ map:texture });
    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    var light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(500, 50, 50);
    scene.add(light);

   
    

}


function animation(){
    // requestAnimationFrame(animation);

    // //cube.rotation.x+=0.01;
    // //cube.rotation.y+=0.01;
    // cube.rotation.z=Math.PI/4;
    // cube.translateX(0.025);

    for(var i=0;i<10;i++){
        var newCube=cube.clone();
        newCube.rotation.z=i*(360/10)*(Math.PI/180);
        newCube.translateY(0.002)
        scene.add(newCube);
    }

    renderer.render(scene,camera);
}
function windowResize(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize',windowResize,false);

init();
animation();

let camera,scene,cube,renderer;


function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
     control = new THREE.OrbitControls(camera,renderer.domElement)
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    var cubeMaterial=[
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader( ).load('../oasisSkybox/oasisnight_bk.jpg'),side:THREE.DoubleSide}),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_dn.jpg'),side:THREE.DoubleSide}),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_ft.jpg'),side:THREE.DoubleSide}),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_lf.jpg'),side:THREE.DoubleSide}),
        new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_rt.jpg'),side:THREE.DoubleSide}),
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_up.jpg'),side:THREE.DoubleSide}),
    ];


    var material = new THREE.MeshFaceMaterial(cubeMaterial);
    // const texture=new THREE.TextureLoader().load('../texture/floor.jpg');
    cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    camera.position.z = 3;





    var AmbientLight = new THREE.AmbientLight(0xFFFFFF,1.0);
    scene.add(AmbientLight);    

}


function animation(){
    requestAnimationFrame(animation);

   // cube.rotation.x+=0.01;
    //cube.rotation.y+=0.01;

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

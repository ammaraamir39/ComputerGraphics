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
    var geometry = new THREE.CubeGeometry(10000, 10000, 10000);
    var cubeMaterial = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../texture/floor.jpg"), side:THREE.doubleside}),
        // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../oasisSkybox/oasisnight_bk.jpg"), side:THREE.doubleside}),
        // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../oasisSkybox/oasisnight_dn.jpg"), side:THREE.doubleside}),
        // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../oasisSkybox/oasisnight_lf.jpg"), side:THREE.doubleside}),
        // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../oasisSkybox/oasisnight_rt.jpg"), side:THREE.doubleside}),
        // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../oasisSkybox/oasisnight_up.jpg"), side:THREE.doubleside})
    
    ];

    var cube=new THREE.MeshFaceMaterial(cubeMaterial);
    var material=new THREE.Mesh(geometry,cube);
    scene.add(material)


    // const texture=new THREE.TextureLoader().load('../texture/floor.jpg');
    camera.position.z = 5;


    



    var AmbientLight = new THREE.AmbientLight(0xFFFFFF,1.0);
    scene.add(AmbientLight);    

}


function animation(){
    requestAnimationFrame(animation);

    //cube.rotation.x+=0.01;
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

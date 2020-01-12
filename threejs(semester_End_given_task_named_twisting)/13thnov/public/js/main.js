

// let camera,scene,cube,renderer;


// function init(){
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     );

//     renderer = new THREE.WebGLRenderer({ antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
    
//     document.body.appendChild(renderer.domElement);
    
//      control = new THREE.OrbitControls(camera,renderer.domElement)
//     const geometry = new THREE.BoxGeometry(50, 50, 50);

//     var cubeMaterial=[
//         new THREE.MeshBasicMaterial({map:new THREE.TextureLoader( ).load('../oasisSkybox/oasisnight_bk.jpg'),side:THREE.DoubleSide}),
//         new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_dn.jpg'),side:THREE.DoubleSide}),
//         new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_ft.jpg'),side:THREE.DoubleSide}),
//         new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_lf.jpg'),side:THREE.DoubleSide}),
//         new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_rt.jpg'),side:THREE.DoubleSide}),
//         new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('../oasisSkybox/oasisnight_up.jpg'),side:THREE.DoubleSide}),
//     ];


//     var material = new THREE.MeshFaceMaterial(cubeMaterial);
//     // const texture=new THREE.TextureLoader().load('../texture/floor.jpg');
//     cube = new THREE.Mesh(geometry, material);
    
//     scene.add(cube);
//     camera.position.z = 3;





//     var AmbientLight = new THREE.AmbientLight(0xFFFFFF,1.0);
//     scene.add(AmbientLight);    

// }


// function animation(){
//     requestAnimationFrame(animation);

//    // cube.rotation.x+=0.01;
//     //cube.rotation.y+=0.01;

//     renderer.render(scene,camera);
// }
// function windowResize(){
//     camera.aspect=window.innerWidth/window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);

// }

// window.addEventListener('resize',windowResize,false);

// init();
// animation();
//import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r110/build/three.module.js';


function main(){
    

    const canvas = document.querySelector('#mycanvas');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov=40;
    const aspect=2;
    const near=0.1;
    const far=1000;

    const camera=new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,50,0);
    camera.up.set(0,0,1);
    camera.lookAt(0,0,0);

    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.maxdistance = 1000;
    controls.mindistance = 1;

    const scene=new THREE.Scene();

   
    
    {
        const color=0xFFFFFF;
        const intensity=3;
        const light=new THREE.PointLight(color,intensity);
        scene.add(light);
    }


    const objects=[];
    const radius=1;
    const heightSegments=10;
    const widthSegments=10;
    const sphereGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
    
    const solarSystem=new THREE.Object3D();
    scene.add(solarSystem);
    objects.push(solarSystem);
    
    const sunmaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });

    const sunMesh=new THREE.Mesh(sphereGeometry,sunmaterial);
    sunMesh.scale.set(5,5,5);
    solarSystem.add(sunMesh);
    objects.push(sunMesh);

    const earthOrbit=new THREE.Object3D();
    earthOrbit.position.x=12;
    solarSystem.add(earthOrbit);
    objects.pop(sunMesh)  //naya
    objects.push(earthOrbit);



    const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233FF, emissive: 0x112244 });
    const earthMesh=new THREE.Mesh(sphereGeometry,earthMaterial);
    earthMesh.position.x=12;
    solarSystem.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit=new THREE.Object3D();
    moonOrbit.position.x=4;
    earthOrbit.add(moonOrbit);
    objects.pop(earthMesh);
    objects.push(moonOrbit)
    
    
    const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
    const moonMesh=new THREE.Mesh(sphereGeometry,moonMaterial);
    moonMesh.scale.set(.75,.75,.75);
    moonOrbit.add(moonMesh);
    //objects.pop(moonOrbit);
    objects.push(moonMesh);

     const moon2Orbit = new THREE.Object3D();
    moon2Orbit.position.x = 2;
    moonOrbit.add(moon2Orbit);
    objects.pop(moonMesh);
    objects.push(moon2Orbit);
    
    const moon2Material = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
    const moon2Mesh = new THREE.Mesh(sphereGeometry, moon2Material);
    moon2Mesh.scale.set(.5, .5, .5);
    moon2Orbit.add(moon2Mesh);
    //objects.pop(moon2Orbit);
    objects.push(moon2Mesh);


    objects.forEach((node) => {
        const axes = new THREE.AxesHelper();
        axes.material.depthTest = false;
        axes.renderOrder = 1;
        node.add(axes);
    });

    function windowResize(renderer){
    const canvas = renderer.domElement;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const Resizeagain = canvas.width !== width || canvas.height !== height;
    if (Resizeagain) {
        renderer.setSize(width, height, false);
    }
    return Resizeagain;
    }

function animation(time){
    time *= 0.001;
    controls.update();

    if (windowResize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

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


 main()


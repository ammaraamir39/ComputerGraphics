
let scene,camera,renderer;
function init(){
    scene=new THREE.Scene();
    //scene.background=new THREE.Color(0xdddddd);

    camera=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
    camera.position.z=1;
    camera.rotation.x=1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    var ambient=new THREE.AmbientLight(0x555555);
    scene.add(ambient);

    //moonlight in the Sky
    var directionalLight=new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    


     renderer= new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();
    loader.load('../smoke.jpg',(texture)=>{
         cloudGeo = new THREE.PlaneBufferGeometry(500,500);
         cloudMaterial= new THREE.MeshLambertMaterial({
              map:texture,
              transparent:true
         })   
         for (i=0;i<25;i++){
            let cloud=new THREE.Mesh(cloudGeo,cloudMaterial);
            cloud.position.set(
                Math.random()*800-400,
                500,
                Math.random()*500-450
            )
            cloud.rotation.x=1.16;
            cloud.rotation.y=-0.12;
            cloud.rotation.z=Math.random()*360;

            cloud.material.opacity=0.6;
            scene.add(cloud);
         }
    });


    

}

function windowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', windowResize, false);
init();
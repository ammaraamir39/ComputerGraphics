let camera,scene,renderer,sphere1,sphere2,sphere3,controls;

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

    const geometry= new THREE.SphereGeometry(10,10,10);
    const material= new THREE.MeshNormalMaterial({wireframe:true});
    sphere= new THREE.Mesh(geometry,material);

    scene.add(sphere);

    const geometry2 = new THREE.SphereGeometry(10, 10, 10);
    const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
    sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.position.x=40;
    scene.add(sphere2);

    const geometry3 = new THREE.SphereGeometry(10, 10, 10);
    const material3 = new THREE.MeshNormalMaterial({ wireframe: true });
    sphere3 = new THREE.Mesh(geometry3, material3);
    sphere3.position.x=-40;
    scene.add(sphere3);

    camera.position.z=70   

        const domevent=new THREEx.DomEvents(camera,renderer.domElement);
        let sphereClicked=false;
        domevent.addEventListener(sphere,'click',(event)=>{
            if(!sphereClicked){
                material.wireframe=false;
                sphereClicked=true;
            }    
            else{
                material.wireframe=true;
                sphereClicked=false;
            }
        })
    
        domevent.addEventListener(sphere2,'mouseover',event=>{
                
            
            
             sphere2.scale.set(3, 3, 3);    
            
        })
        domevent.addEventListener(sphere2, 'mouseout', event => {
            sphere2.scale.set(1, 1, 1);
        })

    
        controls=new THREE.OrbitControls(camera,renderer.domElement);
        controls.maxdistance=1000;
        controls.mindistance = 1;



}

function animate(){
    sphere.rotation.x+=0.02;
    sphere.rotation.y += 0.02;
    
    sphere2.rotation.x += 0.02;
    sphere2.rotation.y += 0.02;
    
    sphere3.rotation.x += 0.02;
    sphere3.rotation.y += 0.02;
    
    controls.update();
    
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}


function windowResize(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize',windowResize,false);

init();
animate();


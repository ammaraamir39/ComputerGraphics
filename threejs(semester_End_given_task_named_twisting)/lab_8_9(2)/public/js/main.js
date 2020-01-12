let scene,camera,renderer

function main(){
    

  
    
     scene= new THREE.Scene();
    
     camera= new THREE.OrthographicCamera(-10,10,10,-10,0.1,1000);
    
    camera.position.z=4;
    
    renderer = new THREE.WebGLRenderer({ antialias:true });
    
    renderer.setClearColor('#FF0000');

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var size=4,step=1;
    var linegeometry=new THREE.Geometry();
    var materialGrid=new THREE.LineBasicMaterial({color:0x0000ff,opacity:0.2});

    for(var i=-size;i<=size;i+=step){
        linegeometry.vertices.push(new THREE.Vector3(-size,i,0));
        linegeometry.vertices.push(new THREE.Vector3(size, i, 0));
        linegeometry.vertices.push(new THREE.Vector3(i,-size, 0));
        linegeometry.vertices.push(new THREE.Vector3(i, size, 0));

    }

    var line=new THREE.LineSegments(linegeometry,materialGrid);
    scene.add(line);

    var boxGeometry=new THREE.Geometry();
    var boxMaterial=new THREE.LineBasicMaterial({color:0x0000ff,opacity:0.2,side:THREE.DoubleSide});
    boxGeometry.vertices.push(new THREE.Vector3(0,0,0));
    boxGeometry.vertices.push(new THREE.Vector3(2,1,0));
    boxGeometry.vertices.push(new THREE.Vector3(0,5,0));
    boxGeometry.vertices.push(new THREE.Vector3(-2,4,0));
  
    boxGeometry.faces.push(new THREE.Face3(0,1,2));
    boxGeometry.faces.push(new THREE.Face3(0, 2, 3));

    var boxPolygon=new THREE.Mesh(boxGeometry,boxMaterial);
    boxPolygon.position.set(0.0,0.0,0.0);
    scene.add(boxPolygon);

    var scaleMatrix=new THREE.Matrix4();
    var Sx=1.0/2.0;
    var Sy=1.0/5.0;

    scaleMatrix.set(Sx,0,0,0,
                    0,Sy,0,0,
                    0,0,1,0,
                    0,0,0,1);
    
    boxPolygon.matrixAutoUpdate=false;
    let R=new THREE.Matrix4().makeTranslation(0,0,0).makeRotationZ(-26.57*Math.PI/180);
    var SR=scaleMatrix.multiply(R);
    console.log(SR);

    boxPolygon.applyMatrix(SR);
    boxPolygon.verticesNeedUpdate=true;
    



    

   









     renderer.render(scene, camera);


    window.addEventListener('resize', windowResize, false);
     
    }
    
         function windowResize() {
             camera.aspect = window.innerWidth / window.innerHeight;
             camera.updateProjectionMatrix();
             renderer.setSize(window.innerWidth, window.innerHeight);
         
         }
    






//requestAnimationFrame(animation);



 main();
 //animation();


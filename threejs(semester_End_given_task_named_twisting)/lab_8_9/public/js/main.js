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
    var geometryGrid=new THREE.Geometry();
    var materialGrid=new THREE.LineBasicMaterial({color:0xcccccc, opacity:0.2});

    for(var i=-size; i<=size;i+=step){
        //for x-axis
        geometryGrid.vertices.push(new THREE.Vector3(-size,i,0)); 
        geometryGrid.vertices.push(new THREE.Vector3(size,i,0));
        //for y axis
        geometryGrid.vertices.push(new THREE.Vector3(i,-size,0));
        geometryGrid.vertices.push(new THREE.Vector3(i,size,0));
     }

     var line= new THREE.LineSegments(geometryGrid,materialGrid);
     scene.add(line);
     
     var geometryTri=new THREE.Geometry();
     var matertialTri=new THREE.LineBasicMaterial({color:0xff00ff,opacity:0.2,side:THREE});
     geometryTri.vertices.push(new THREE.Vector3(-3,3,0));
     geometryTri.vertices.push(new THREE.Vector3(0,3,0));
     geometryTri.vertices.push(new THREE.Vector3(0,5,0));
     geometryTri.faces.push(new THREE.Face3(0,1,2));
     var Triangle=new THREE.Mesh(geometryTri,matertialTri);
     Triangle.position.set(0.0,0.0,0.0);
     scene.add(Triangle);
     



    var Sx = 2.0 / 3.0;
    var Sy = Math.sqrt(3) / 2;
    var Sz = 1.0;
    var xShear=-1.0/Math.sqrt(3.0);
    var yShear=1;
    var zShear=1;

     var M1= new THREE.Matrix4().makeTranslation(3,-3,0);
    var M2= new THREE.Matrix4();
    var M3= new THREE.Matrix4();
    
    M2.set(Sx,0,0,0,
           0,Sy,0,0,
           0,0,Sz,0,
           0,0,0,1);

    M3.set(1,xShear,0,0,
            0,yShear,0,0,
            0,0,zShear,0,
            0,0,0,1);


    
    
    //  var oldM=new THREE.Matrix4(-3,0,0,
    //                             3,3,5,
    //                             1,1,1    );       
     var M=new THREE.Matrix4();

    M=M.multiply(M3).multiply(M2).multiply(M1);
    console.log(M);
    //Mnew=M.multiply(oldM);
    //console.log(Mnew);

    var newTriangle=Triangle.clone();
    newTriangle.matrixAutoUpdate=false;
    var color=0xfffff;
    newTriangle.material.color.setHex(color);

    newTriangle.applyMatrix(M);
    newTriangle.verticesNeedUpdate=true;
    scene.add(newTriangle);


   









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


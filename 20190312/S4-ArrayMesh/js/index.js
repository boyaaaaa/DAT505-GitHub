var renderer, scene, camera;
var controls;
function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
  controls= new THREE.OrbitControls(camera,renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -15; x <= 10; x +=5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -15; y <=10; y += 5) {
        for (var z = -15; z <= 10;z += 5) {
          console.log("x:"+x+",y"+y);
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxmaterial = new THREE.MeshLambertMaterial({color:0xffffff});
      if(x>=0&& y >=0&&z>=0){
      boxMaterial = new THREE.MeshLambertMaterial({color:0x336600});
      }else if(x<=0&& y>=0&&z>=0){
        boxMaterial = new THREE.MeshLambertMaterial({color:0xcc6633});
      }else{
       boxMaterial = new THREE.MeshLambertMaterial({color:0x00ffff});
      }

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      mesh.scale.y = 0.5;
      mesh.rotation.z = 1;
      scene.add(mesh);
  }

}
}



  document.body.appendChild(renderer.domElement);
}


function drawFrame(){
  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();

var renderer, scene, camera;
var controls;
var objects = [];
var container, stats;
var cubes=[];
var rot =0;
var randomSpeedX=[];
var randomRotationX = [];
var randomRotationY = [];


function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(30, W / H, .1, 1000);
  camera.position.set(0, 55, 80);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
  controls=new THREE.OrbitControls(camera,renderer.domElement);
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      console.log("x:"+x+",y"+y);
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);//？
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var box = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      box.position.x = x;
      box.position.z = y;
    //  box.scale.y = 0.5;
      //mesh.rotation.x = Math.random() * 200 - 100;
    //  mesh.rotation.y = Math.random() * 200 - 100;
    //  mesh.rotation.z = Math.random() * 200 - 100;

box.rotation.x = Math.random() * 2 * Math.PI;


var randomValueX = (Math.random() * 0.1) - 0.05;
randomSpeedX.push(randomValueX);



      scene.add(box);
      cubes.push(box);


  }
}

    document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

//rot += 0.03;

//cubes.forEach(function(c,i){
cubes[6].rotation.x += randomSpeedX[6]；
cubes[18].rotation.x += randomSpeedX[18]；

 //c.rotation.x = randomRotationX[i];
  //c.rotation.y = randomRotationY[i];

//});



  renderer.render(scene, camera);
}

init();
drawFrame();
//animate();
//render();

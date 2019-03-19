//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#330066");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  var geometry = new THREE.BoxGeometry(100, 100, 100);

  // MATERIAL 1:
  //var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

  //MATERIAL 2:
  var material = new THREE.MeshNormalMaterial();

  //MATERIAL 3:
  /*
  var material = new THREE.MeshLambertMaterial({
    color: "#433F81",
    transparent: true,
    opacity: 1
  });
  */

//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):
/*
var material = new THREE.MeshLambertMaterial({
  color: 0xF3FFE2,
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
*/

/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
*/

/*
//MATERIAL 7 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

/*
//MATERIAL 8 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/

mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -1000;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh );
}

//Add controller values for GUI
//Set present values for controllers
var controller = new function(){
   this.scaleX = 1;
}

//Creat a new DAT.GUI
var gui = new dat.GUI();

//Define the folder name
var f1 = gui.addFolder('Scale');
//Add controller for scale X
f1.add(controller,'scaleX',0.1,5).onChange(function(){
  mesh.scalex.x = (controller.scaleX);
});






// Render Loop
var render = function () {
  requestAnimationFrame( render );


//Continuously rotate the mesh
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

init();

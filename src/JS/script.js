// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// camera.position.set(0, 2, 9);
// const orbit = new OrbitControls(camera, renderer.domElement);

// // function createExtrudedMesh() {
// //   // Define the shape (ensure it's a THREE.Shape object)
// //   const length = 12, width = 8;

// // const shape = new THREE.Shape();
// // shape.moveTo( 0,0 );
// // shape.lineTo( 0, width );
// // shape.lineTo( length, width );
// // shape.lineTo( length, 0 );
// // shape.lineTo( 0, 0 );

// // const extrudeSettings = {
// // 	steps: 2,
// // 	depth: 16,
// // 	bevelEnabled: true,
// // 	bevelThickness: 1,
// // 	bevelSize: 1,
// // 	bevelOffset: 0,
// // 	bevelSegments: 1
// // };

// // const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const mesh = new THREE.Mesh( geometry, material ) ;
// // scene.add( mesh );
// // }

// var loader = new GLTFLoader();
// loader.loadAsync('../../../../Downloads/un.glb', function(gltf) {

// 	// Add the model to the scene
// 	scene.add(gltf.scene);
  
// 	// Render the scene
// 	renderer.render(scene, camera);
  
//   });

// // createExtrudedMesh();
// // const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
// // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// // const cube = new THREE.Mesh( geometry, material ); 
// // scene.add( cube );



// // function animate() {
// //   requestAnimationFrame(animate);
// // orbit.update();

// //   renderer.render(scene, camera);
// // }

// // animate();






import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load GLB model
const loader = new GLTFLoader();
loader.load('../brabus_g900_rocket_edition.glb', function () {
    console.log("++++++++++++++++++");
    // scene.add(gltf.scene);
});

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
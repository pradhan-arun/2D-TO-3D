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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../assets/AllImage'

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.enabled = false;
const stats = new Stats();

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 0, 5);
scene.add(directionalLight);

// console.log("image texture = ", imageTexture);
const cubeGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
const cube = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(image5) }));
const controls = new TransformControls(camera, renderer.domElement);
scene.add(cube)
controls.attach(cube)
scene.add(controls);
// setTimeout(() => {
//     console.log("called");
//     removeTransformControls()
// }, 3000);

// setTimeout(() => {
//     console.log("called");
//     scene.add(cube)
// controls.attach(cube)
// scene.add(controls);
// }, 7000);

// scene.add(cube);
window.addEventListener('keydown', function (event) {
    console.log("event code = ", event.code);
    switch (event.code) {
        case 'KeyG':
            controls.setMode('translate')
            break
        case 'KeyR':
            controls.setMode('rotate')
            break
        case 'KeyS':
            controls.setMode('scale')
            break
    }
})

document.body.appendChild(stats.dom)


// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
    // orbit.update();
}
animate();

const images = document.querySelectorAll('.sidebar img');
images.forEach(image => {
    image.addEventListener('click', function () {
        var imagePath = this.getAttribute('id');
        console.log("image path is called", imagePath);
        console.log("image path is called", cube);
        imagePath = imagePath == 'image1' ? image1 : imagePath == 'image2' ? image2 : imagePath == 'image3' ? image3 : image4;
        cube.material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(imagePath) });
        // scene.add(cube)
        cube.material.needsUpdate = true;
    });
});

function removeTransformControls() {
    if (controls) {
        // Detach the controls from any attached object
        controls.detach();

        // Remove the controls from the scene
        scene.remove(controls);

        // Dispose of the controls to release resources
        controls.dispose();

        // Set controls to null to indicate it's no longer in use
        // controls = null;
    }
}


// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
// import Stats from 'three/examples/jsm/libs/stats.module'

// const scene = new THREE.Scene()
// // scene.add(new THREE.AxesHelper(5))

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 2

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement);
// const orbit = new OrbitControls(camera, renderer.domElement);

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshNormalMaterial()

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// const controls = new TransformControls(camera, renderer.domElement)
// controls.attach(cube)
// scene.add(controls)

// window.addEventListener('keydown', function (event) {
//     console.log("event code = ", event.code);
//     switch (event.code) {
//         case 'KeyG':
//             controls.setMode('translate')
//             break
//         case 'KeyR':
//             controls.setMode('rotate')
//             break
//         case 'KeyS':
//             controls.setMode('scale')
//             break
//     }
// })

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// const stats = new Stats()
// document.body.appendChild(stats.dom)

// function animate() {
//     requestAnimationFrame(animate)

//     // controls.update()

//     render()

//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()
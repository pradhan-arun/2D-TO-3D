
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../assets/AllImage';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import Stats from 'three/examples/jsm/libs/stats.module'
// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });
renderer.setSize(window.innerWidth, window.innerHeight); // Adjust canvas size
camera.updateProjectionMatrix();
var controls = new TransformControls(camera, renderer.domElement);
const stats = new Stats();

camera.position.z = 5

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
// orbit.enableRotate = true; // Allow rotation
// orbit.enableZoom = true; // Allow zooming
// orbit.enablePan = false; // Disable panning

var floatingValue = document.getElementsByClassName('floating-section')[0];
var sidebarValue = document.getElementsByClassName('sidebar')[0];
var modificationValue = document.getElementById("modification-container");

// Retrieve lines from local storage
const lines = JSON.parse(window.localStorage.getItem('lines'));
console.log("lines = ", lines);

// Raycaster for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector3();

let selectedMesh = null; // Initialize selectedMesh variable
var objectValue = null;
// Event listener for mouse click
window.addEventListener('dblclick', onMouseClick, false);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    // orbit.update();
    renderer.render(scene, camera);
}
animate();

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
document.body.appendChild(stats.dom);
// Shape selection handling
document.querySelectorAll('.shape-option').forEach(option => {
    option.addEventListener('click', function () {
        const shape = this.id;
        if (shape === 'circle') {
            // Call function to add circle to Three.js scene
            addCircle();
        } else if (shape === 'square') {
            // Call function to add square to Three.js scene
            addSquare();
        } else if (shape === 'triangle') {
            // Call function to add triangle to Three.js scene
            addTriangle();
        }
    });
});
document.getElementById('add-floor').addEventListener('click', function () {
    console.log("add floor is called");
    createFloor(lines);

});

// Event listeners for position modification
document.getElementById('move-left').addEventListener('click', function () {
    objectValue.position.x -= 0.1;
});

document.getElementById('move-right').addEventListener('click', function () {
    objectValue.position.x += 0.1;
});

document.getElementById('move-up').addEventListener('click', function () {
    objectValue.position.y += 0.1;
});

document.getElementById('move-down').addEventListener('click', function () {
    objectValue.position.y -= 0.1;
});
document.getElementById('forward').addEventListener('click', function () {
    objectValue.position.z += 0.1;
});

document.getElementById('backward').addEventListener('click', function () {
    objectValue.position.z -= 0.1;
});

// Event listeners for rotation modification
document.getElementById('rotate-x-in').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.x += 0.1; // Rotate around the X-axis
    }
});
document.getElementById('rotate-x-desc').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.x -= 0.1; // Rotate around the Y-axis
    }
});

// Event listeners for rotation modification
document.getElementById('rotate-y-in').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.y += 0.01; // Rotate around the X-axis
    }
});
document.getElementById('rotate-y-desc').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.y -= 0.1; // Rotate around the Y-axis
    }
});

// Event listeners for rotation modification
document.getElementById('rotate-z-in').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.z += 0.1; // Rotate around the X-axis
    }
});
document.getElementById('rotate-z-desc').addEventListener('click', function () {
    if (objectValue) {
        objectValue.rotation.z -= 0.1; // Rotate around the Y-axis
    }
});

// Event listeners for size modification
document.getElementById('increase-size').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.x += 0.1; // Increase size by 10%
    }
});

document.getElementById('decrease-size').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.x -= 0.1;
    }
});

// Event listeners for size modification
document.getElementById('scale-z-in').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.z += 0.1; // Increase size by 10%
    }
});

document.getElementById('scale-z-desc').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.z -= 0.1;
    }
});

// Event listeners for scale modification
document.getElementById('scale-up').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.y += 0.1;
    }
});

document.getElementById('scale-down').addEventListener('click', function () {
    if (objectValue) {
        objectValue.scale.y -= 0.1;
    }
});



// ALL FUNCTIONS
var wallHeightAbove = 3; // Adjust the height above each wall for the new wall

const wallMeshes = lines.map((linePoints, index) => {
    const mesh = createWallMesh(linePoints);
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = "wall";
    scene.add(mesh);
    // scene.add(newWallMesh);

    return [mesh]; // Return both the original and new wall meshes
}).flat(); // Flatten the array of meshes

function createWallMesh(linePoints, heightAbove = 0, depth = 3, color = getRandomColor()) {
    console.log("line page == ", linePoints);
    const shape = new THREE.Shape(linePoints.map(point => new THREE.Vector3(
        point.x,
        point.y,
        point.z
    )));

    const extrudeSettings = {
        depth: depth, // Adjusted wall thickness to include extra width
        bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: color }); // Assign random color to the wall
    const wallMesh = new THREE.Mesh(geometry, material);
    wallMesh.name = "wall";

    // Offset the position of the wall if heightAbove is specified
    wallMesh.position.y += heightAbove;

    return wallMesh;
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to handle double click event
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    console.log("double clicked");
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        // If the ray intersects with any object
        const clickedObject = intersects[0].object;
        console.log("Detect the object   == ", clickedObject);
        // Check if the clicked object is already selected
        if (clickedObject === selectedMesh) {
            // If already selected, deselect it and reset its properties

            if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
            else selectedMesh.material.color.setHex(0xffffff);
            // Revert to original color
            selectedMesh = null; // Reset selectedMesh
            originalColor = null;
            objectValue = null; // Reset originalColor
            floatingValue.style.display = "none";
            modificationValue.style.display = "none";
            sidebarValue.style.display = 'none';
        } else {
            // If not selected, select it and change its properties
            if (selectedMesh) {
                // If there is a previously selected mesh, reset its properties
                if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
                else selectedMesh.material.color.setHex(0xffffff);// Revert previous selected mesh to original color

                if (selectedMesh.name === 'window') {
                    selectedMesh.material.color.setHex(originalColor)
                }
            }
            // Update the selected mesh and its properties
            selectedMesh = clickedObject;
            objectValue = clickedObject;
            originalColor = selectedMesh.material.color.getHex();
            selectedMesh.material.color.setHex(0xff0000);
            // Calculate a new position for the camera relative to the clicked object



            updateValue = false;
            console.log("clicked-------", clickedObject);
            console.log("floating value = ", modificationValue);
            // if (clickedObject.name == 'wall') {
                // floatingValue.style.display = "block";
                sidebarValue.style.display = 'block';
            // } else {
            //     sidebarValue.style.display = 'none';
            // }
            floatingValue.style.display = "block";
            // modificationValue.style.display = "flex";

        }
    } else {
        // If no object is clicked, deselect any previously selected mesh
        if (selectedMesh) {
            if (selectedMesh.material.map === null) selectedMesh.material.color.setHex(originalColor);
            else selectedMesh.material.color.setHex(0xffffff);// Revert to original color

            floatingValue.style.display = "none";
            sidebarValue.style.display = 'none';
            selectedMesh = null;
            originalColor = null;
            objectValue = null;
        }
    }

    console.log("Selected mesh = ", selectedMesh)
    if(selectedMesh){
        controls.attach(selectedMesh);
        scene.add(controls);
        orbit.enabled = false;
    }else{
        if(controls){
        controls.detach();

        // Remove the controls from the scene
        scene.remove(controls);

        // Dispose of the controls to release resources
        // controls.dispose();
        // controls = null;
        orbit.enabled=true;
        }
    }
}

// Function to add a circle to Three.js scene
function addCircle() {
    const circleGeometry = new THREE.CircleGeometry(1, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    scene.add(circleMesh);
    showModifySection(circleMesh);
}

// Function to add a square to Three.js scene
function addSquare() {
    const squareGeometry = new THREE.BoxGeometry(0.5, 0.5,0);
    const squareMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
    console.log("add square is caled", checkIntersection());
    // squareMesh.opacity= 0;
    squareMesh.position.copy(calculateCenterPosition());
    squareMesh.name = "window";

    console.log("calcultate center = ", calculateCenterPosition());
    // checkIntersection();
    scene.add(squareMesh);
    // showModifySection(squareMesh);
}

// Function to add a triangle to Three.js scene
function addTriangle() {
    const triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(new THREE.Vector3(0, 1, 0));
    triangleGeometry.vertices.push(new THREE.Vector3(-1, -1, 0));
    triangleGeometry.vertices.push(new THREE.Vector3(1, -1, 0));
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
    triangleGeometry.faces.push(new THREE.Face3(2, 1, 0));
    const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);
    // showModifySection(triangleMesh);
}

// Perform a raycast to check if the selected object is "hit" by the ray
function checkIntersection(selectedObject, position) {
    console.log("check intersection is called");
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(objectValue);
    console.log("==================", intersects);
    return intersects.length > 0;
}

// Function to calculate the center position of an object
function calculateCenterPosition(object) {
    const boundingBox = new THREE.Box3().setFromObject(objectValue);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    return center;
}

// Show modify section for the selected shape
function showModifySection(selectedObject) {
    // Update shape position based on arrow key presses
    console.log("nothinggg - ", selectedObject);
    document.addEventListener('keydown', function (event) {
        const keyCode = event.keyCode;
        const step = 0.1; // Adjustment step size

        switch (keyCode) {
            case 37: // Left arrow
                selectedObject.rotation.x -= step;
                break;
            case 39: // Right arrow
                selectedObject.rotation.x += step;
                break;
            case 38: // Up arrow
                selectedObject.rotation.y += step;
                break;
            case 40: // Down arrow
                selectedObject.rotation.y -= step;
                break;
        }
    });
}

//image add section
const images = document.querySelectorAll('.sidebar img');
images.forEach(image => {
    image.addEventListener('click', function () {
        var imagePath = this.getAttribute('id');
        console.log("image path is called", imagePath);
        console.log("image path is called", selectedMesh);
        imagePath = imagePath == 'image1' ? image1
            : imagePath == 'image2' ? image2
                : imagePath == 'image3' ? image3
                    : imagePath == 'image4' ? image4
                        : imagePath == 'image5' ? image5 : image6;
        if (selectedMesh) {
            console.log("selected mesh === ", selectedMesh);


            // Ensure the geometry's UVs are set
            selectedMesh.uvsNeedUpdate = true;

            const img = new THREE.TextureLoader().load(imagePath);
            img.wrapS = THREE.MirroredRepeatWrapping;
            img.wrapT = THREE.MirroredRepeatWrapping;
            const newMaterial = new THREE.MeshBasicMaterial({
                map: img,
                roughness: 0.75, // Adjust roughness (0 to 1)
                metalness: 0.25,
                bumpScale: 0.009,
            });

            // Set the material color to be fully transparent
            // newMaterial.transparent = true;
            // newMaterial.opacity = 0;
            selectedMesh.material = newMaterial;
            selectedMesh.material.needsUpdate = true;
        }
    });
});

const floorGroup = new THREE.Group();

scene.add(floorGroup);
function createFloor(linePoints) {
    linePoints.map((line) => {
        console.log("'wall meshes = ", wallMeshes);
        const newWallMesh = createWallMesh(line, wallHeightAbove, 2);
        newWallMesh.rotation.x = -Math.PI / 2;
        newWallMesh.position.y += 0.01; // Offset the new wall's position above the current one
        newWallMesh.name = "wall";
        scene.add(newWallMesh);
    })
    wallHeightAbove += 2
}

document.addEventListener('mousemove',ObjectMove);

function ObjectMove(event){
    let data = getMousePosition(event);
    // if(selectedMesh && selectedMesh.name === 'window'){
    //     selectedMesh.position.set(data.x, data.y, data.z)
    // }
}

function getMousePosition(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(event.clientY - rect.top) / rect.height * 2 + 1;
    const mouse3D = new THREE.Vector3(x, y, 0); // Z = 0 to draw lines on the ground plane
    mouse3D.unproject(camera);
    const dir = mouse3D.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    // console.log("posss ====  ", pos);
    return pos;
}

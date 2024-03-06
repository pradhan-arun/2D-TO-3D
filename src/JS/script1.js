import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera setup
camera.position.set(0, 5, 9); // Adjusted position to start from top of the object

// Orbit controls setup
const orbit = new OrbitControls(camera, renderer.domElement);

// Retrieve lines from local storage
const lines = JSON.parse(localStorage.getItem('lines'));
console.log("lines = ", lines);

// Function to create wall mesh
function createWallMesh(linePoints) {
    const shape = new THREE.Shape(linePoints.map(point => new THREE.Vector3(
        (point.x / 200 ) * 2 - 1,
        -(point.y / 250) * 2 + 1,
    )));

    const extrudeSettings = {
        depth: 2, // Adjusted wall thickness to include extra width
        bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // Assign random color to the wall
    return new THREE.Mesh(geometry, material);
}

// Create wall meshes and add them to the scene
const wallMeshes = lines.map((linePoints, index) => {
    const mesh = createWallMesh(linePoints);
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = index;
    return mesh;
});
wallMeshes.forEach(mesh => scene.add(mesh));

// Raycaster for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Event listener for mouse click
window.addEventListener('dblclick', onMouseClick, false);

let selectedMesh = null; // Initialize selectedMesh variable

// Function to handle double click event
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        // If the ray intersects with any object
        const clickedObject = intersects[0].object;

        // Check if the clicked object is already selected
        if (clickedObject === selectedMesh) {
            // If already selected, deselect it and reset its properties
            selectedMesh.material.color.setHex(originalColor); // Revert to original color
            selectedMesh = null; // Reset selectedMesh
            originalColor = null; // Reset originalColor
        } else {
            // If not selected, select it and change its properties
            if (selectedMesh) {
                // If there is a previously selected mesh, reset its properties
                selectedMesh.material.color.setHex(originalColor); // Revert previous selected mesh to original color
            }
            // Update the selected mesh and its properties
            selectedMesh = clickedObject;
            // Store the original color of the selected mesh
            originalColor = selectedMesh.material.color.getHex();
            selectedMesh.material.color.setHex(0xff0000); // Change color to indicate selection
            addWindowToSelectedMesh()
        }
    } else {
        // If no object is clicked, deselect any previously selected mesh
        if (selectedMesh) {
            selectedMesh.material.color.setHex(originalColor); // Revert to original color
            selectedMesh = null; // Reset selectedMesh
            originalColor = null; // Reset originalColor
        }
    }
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



// Function to add a cube window to the selected mesh
function addWindowToSelectedMesh() {
    // Check if a mesh is selected
    if (selectedMesh) {
        // Calculate the position for the window relative to the selected mesh
        const windowPosition = selectedMesh.position.clone(); // Clone the position of the selected mesh
        windowPosition.y += 2; // Offset the window above the selected mesh (adjust as needed)

        // Create cube geometry for the window
        const windowGeometry = new THREE.BoxGeometry(1, 1, 1); // Adjust size as needed
        const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color for the window (adjust as needed)
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);

        // Set the position of the window mesh
        windowMesh.position.copy(windowPosition);

        // Check if the window mesh is inside the selected mesh's bounding box
        const selectedMeshBoundingBox = new THREE.Box3().setFromObject(selectedMesh);
        const windowMeshBoundingBox = new THREE.Box3().setFromObject(windowMesh);
        const intersection = selectedMeshBoundingBox.intersect(windowMeshBoundingBox);

        if (!intersection.isEmpty()) {
            // If there is an intersection, add the window mesh to the scene
            scene.add(windowMesh);
            
            // Optional: You can store the window mesh as a property of the selected mesh for easier management
            selectedMesh.window = windowMesh;
        } else {
            // If the window mesh is outside the selected mesh, do not add it to the scene
            console.log("Window is outside the selected mesh.");
        }
    }
}

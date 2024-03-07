
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });
renderer.setSize(window.innerWidth, window.innerHeight); // Adjust canvas size

camera.position.z = 5;

const orbit = new OrbitControls(camera, renderer.domElement);

var floatingValue = document.getElementsByClassName('floating-section')[0];
var modificationValue = document.getElementById("modification-container");

// Retrieve lines from local storage
const lines = JSON.parse(window.localStorage.getItem('lines'));
console.log("lines = ", lines);
const wallMeshes = lines.map((linePoints, index) => {
    // if (index === 2) {
    const mesh = createWallMesh(linePoints);
    mesh.rotation.x = -Math.PI / 2;
    mesh.name = index;
    return mesh;
    // }
});
wallMeshes.forEach(mesh => scene.add(mesh));

// Raycaster for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector3();

var objectValue = null;
// Event listener for mouse click
window.addEventListener('dblclick', onMouseClick, false);
let selectedMesh = null; // Initialize selectedMesh variable

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

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

function createWallMesh(linePoints, addSpecial = false) {
    console.log("line page == ", linePoints);
    const shape = new THREE.Shape(linePoints.map(point => new THREE.Vector2(
        (point.x / 200) * 2 - 1,
        -(point.y / 250) * 2 + 1,
    )));

    const extrudeSettings = {
        depth: 2, // Adjusted wall thickness to include extra width
        bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // Assign random color to the wall
    const wallMesh = new THREE.Mesh(geometry, material);

    if (addSpecial) {
        // Add something special to the wall
        const specialGeometry = new THREE.BoxGeometry(2, 2, 0.5); // Example: Adding a small box
        const specialMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const specialMesh = new THREE.Mesh(specialGeometry, specialMaterial);

        // Position the special addition on the wall's surface
        const wallBoundingBox = new THREE.Box3().setFromObject(wallMesh);
        const wallHeight = wallBoundingBox.max.y - wallBoundingBox.min.y;
        const specialPosition = new THREE.Vector3(0, wallHeight / 2, 2); // Adjust position relative to the wall
        specialMesh.position.copy(specialPosition);
        wallMesh.add(specialMesh); // Add the special object as a child of the wall
    }

    // Create a group to hold both wall and square meshes
    const wallGroup = new THREE.Group();
    wallGroup.add(wallMesh); // Add square mesh to the group

    return wallGroup;
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

        // Check if the clicked object is already selected
        if (clickedObject === selectedMesh) {
            // If already selected, deselect it and reset its properties
            selectedMesh.material.color.setHex(originalColor); // Revert to original color
            selectedMesh = null; // Reset selectedMesh
            originalColor = null; // Reset originalColor
            floatingValue.style.display = "none";
            modificationValue.style.display = "none";
        } else {
            // If not selected, select it and change its properties
            if (selectedMesh) {
                // If there is a previously selected mesh, reset its properties
                selectedMesh.material.color.setHex(originalColor); // Revert previous selected mesh to original color
            }
            // Update the selected mesh and its properties
            selectedMesh = clickedObject;
            objectValue = clickedObject;
            originalColor = selectedMesh.material.color.getHex();
            selectedMesh.material.color.setHex(0xff0000); // Change color to indicate selection

            console.log("clicked-------", clickedObject);
            console.log("floating value = ", modificationValue);
            floatingValue.style.display = "block";
            modificationValue.style.display = "flex";
            
        }
    } else {
        // If no object is clicked, deselect any previously selected mesh
        if (selectedMesh) {
            selectedMesh.material.color.setHex(originalColor);// Revert to original color
            floatingValue.style.display = "none";
            selectedMesh = null; // Reset selectedMesh
            originalColor = null; // Reset originalColor
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
    const squareGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const squareMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
    console.log("add square is caled", checkIntersection());
    squareMesh.position.copy(calculateCenterPosition());
    // objectValue.add(squareMesh);

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




// Create wall meshes and add them to the scene



// // Function to create wall mesh
// function createWallMesh(linePoints) {
//     const shape = new THREE.Shape(linePoints.map(point => new THREE.Vector3(
//         (point.x / 200) * 2 - 1,
//         -(point.y / 250) * 2 + 1,
//     )));

//     const extrudeSettings = {
//         depth: 2, // Adjusted wall thickness to include extra width
//         bevelEnabled: false
//     };

//     const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//     const material = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // Assign random color to the wall
//     return new THREE.Mesh(geometry, material);
// }

// function createWallMesh(linePoints) {
//     const shape = new THREE.Shape(linePoints.map(point => new THREE.Vector3(
//         (point.x / 200) * 2 - 1,
//         -(point.y / 250) * 2 + 1,
//     )));

//     // Create a rectangle shape for the square
//     const squareShape = new THREE.Shape();
//     squareShape.moveTo(-0.5, -0.5); // Define square vertices
//     squareShape.lineTo(0.5, -0.5);
//     squareShape.lineTo(0.5, 0.5);
//     squareShape.lineTo(-0.5, 0.5);
//     squareShape.lineTo(-0.5, -0.5);

//     // Create extrude settings for the square
//     const extrudeSettingsSquare = {
//         depth: 0.2, // Adjust square thickness
//         bevelEnabled: false
//     };

//     // Create geometry and mesh for the square
//     const geometrySquare = new THREE.ExtrudeGeometry(squareShape, extrudeSettingsSquare);
//     const materialSquare = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // Assign random color to the square
//     const squareMesh = new THREE.Mesh(geometrySquare, materialSquare);

//     // Set position and rotation of the square relative to the wall
//     squareMesh.position.set(0, 0, 1); // Adjust z position to place the square in front of the wall
//     squareMesh.rotation.x = -Math.PI / 2; // Rotate square to align with the wall

//     // Create extrude settings for the wall
//     const extrudeSettings = {
//         depth: 2, // Adjusted wall thickness to include extra width
//         bevelEnabled: false
//     };

//     // Create geometry and mesh for the wall
//     const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//     const material = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // Assign random color to the wall
//     const wallMesh = new THREE.Mesh(geometry, material);

//     // Create a group to hold both wall and square meshes
//     const wallGroup = new THREE.Group();
//     wallGroup.add(squareMesh); // Add square mesh to the group
//     wallGroup.add(wallMesh);

//     return wallGroup;
// }


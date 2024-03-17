// Initialize Three.js scene
import * as THREE from 'three';
let points;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Set camera z-coordinate
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Initialize arrays to store walls and floors
const walls = [];
let floor = null;

let cube = new THREE.BoxGeometry(0.1, 0.1, 0.1);
let material = new THREE.MeshBasicMaterial({ color: 'white' });
let mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

// Event listeners for mouse events
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

let startPoint = null;
let endPoints = null;
let allLines = [];
let currentWall = null;
let floorPlane = null;

function onMouseDown(event) {
    startPoint = getMousePosition(event);
    currentWall = createWall(startPoint.clone(), startPoint.clone());
    scene.add(currentWall);
}

function onMouseMove(event) {
    let data = getMousePosition(event);
    mesh.position.set(data.x, data.y, data.z);
    if (startPoint !== null) {
        const endPoint = getMousePosition(event);
        endPoints = endPoint;
        updateWall(currentWall, startPoint, endPoint);
    }

}

function onMouseUp(event) {

        console.log("start point == ",Math.ceil(startPoint.x),Math.ceil(startPoint.y));
        console.log("end point = ", Math.ceil(endPoints.x),Math.ceil(endPoints.y));
        startPoint.x = Math.ceil(startPoint.x);
        startPoint.y = Math.ceil(startPoint.y);
        endPoints.x = Math.ceil(endPoints.x);
        endPoints.y = Math.ceil(endPoints.y);
        // Check if the start and end points are close enough to close the line
        if (startPoint && endPoints && startPoint.distanceTo(endPoints) < 0.1) {
            console.log("Line is closed");
            // Close the line by connecting the last point to the start point
            updateWall(currentWall, startPoint, startPoint);
        }
        
        allLines.push([startPoint, endPoints]);
        window.localStorage.setItem("lines", JSON.stringify(allLines))
        console.log("all lines = ", allLines);
        startPoint = null;
        if (currentWall) {
            walls.push(currentWall);
            currentWall = null;
        }
    
    
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

function createWall(start, end) {
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const line = new THREE.Line(geometry, material);
    return line;
}

function updateWall(wall, start, end) {
    const points = wall.geometry.attributes.position.array;
    points[0] = start.x;
    points[1] = start.y;
    points[3] = end.x;
    points[4] = end.y;
    wall.geometry.attributes.position.needsUpdate = true;
}

function detectFloor() {
    console.log("floor called");
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    floorPlane = new THREE.Mesh(floorGeometry, floorMaterial);
    floorPlane.rotateX(Math.PI / 2);
    scene.add(floorPlane);
}

// Render loop
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
animate();

// Detect the floor when the scene is loaded
detectFloor();
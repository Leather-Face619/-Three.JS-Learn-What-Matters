import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Naya 3D scene banane ke liye
const scene = new THREE.Scene();

// Camera setup karne ke liye (field of view, aspect ratio, near plane, far plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// WebGL renderer initialize karne ke liye, canvas element ke sath
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#canvas')});
// Renderer ka size set karne ke liye
renderer.setSize(window.innerWidth, window.innerHeight);
// Renderer ko document body mein add karne ke liye
document.body.appendChild(renderer.domElement);

// Sphere geometry create karne ke liye (radius, width segments, height segments)
const geometry = new THREE.SphereGeometry(1, 32, 16); 
// Material create karne ke liye sphere ke liye
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 , wireframe: true });
// Mesh banane ke liye geometry aur material se
const sphere = new THREE.Mesh(geometry, material);
// Sphere ko scene mein add karne ke liye
scene.add(sphere);

// Window resize hone par camera aur renderer ko update karne ke liye function
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Window resize event listener add karne ke liye
window.addEventListener('resize', onWindowResize);

// Orbit controls setup karne ke liye
const controls = new OrbitControls(camera, renderer.domElement);
// Damping enable karne ke liye smooth rotation ke liye
controls.enableDamping = true;
// Damping factor set karne ke liye
controls.dampingFactor = 0.05;

// Scene ko animate karne ke liye function
function animate() {
    // Next frame request karne ke liye
    requestAnimationFrame(animate);
   
    controls.update();
    // sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

camera.position.z = 5;
animate();
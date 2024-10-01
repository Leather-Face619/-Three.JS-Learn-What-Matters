// Creating basic Three.js scene
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); 
const capsule = new THREE.Mesh( geometry, material ); 
scene.add( capsule );

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#can'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Animation function
function animate() {
    requestAnimationFrame(animate);
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Start animation
animate();


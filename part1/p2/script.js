const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "gray" });
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);
mesh.position.z = 2;
mesh.scale.x = 2;    
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#can') });
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.05;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}

animate();

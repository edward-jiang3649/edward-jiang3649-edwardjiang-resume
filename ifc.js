import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.134.0/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls, model;

init();
animate();

function init() {
    // Scene and Camera setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1d1f21);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    // Renderer setup
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewer').appendChild(renderer.domElement);

    // Orbit Controls setup
    controls = new OrbitControls(camera, renderer.domElement);

    // Lighting setup
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Load the 3D model (replace this with your model loader)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    model = new THREE.Mesh(geometry, material);
    scene.add(model);

    // Add event listener for the scale slider
    const scaleSlider = document.getElementById('scaleSlider');
    scaleSlider.addEventListener('input', (event) => {
        const scaleValue = event.target.value;
        model.scale.set(scaleValue, scaleValue, scaleValue);
    });

    // Handle window resizing
    window.addEventListener('resize', onWindowResize);
}

function animate() {
    requestAnimationFrame(animate);

    // Required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

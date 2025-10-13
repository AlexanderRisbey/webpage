
import { assetHref } from './utils.js';

// Helper function to interpolate values based on scroll progress
const interpolate = (progress, outputRange) => {
  const segments = outputRange.length - 1;
  if (segments < 1) return outputRange[0];
  const segmentLength = 1 / segments;
  const currentSegment = Math.min(segments - 1, Math.floor(progress / segmentLength));
  const progressInSegment = (progress - currentSegment * segmentLength) / segmentLength;
  return outputRange[currentSegment] + (outputRange[currentSegment + 1] - outputRange[currentSegment]) * progressInSegment;
};


export const initView2Scene = () => {
    if (typeof THREE === 'undefined') {
        console.error('Three.js has not been loaded.');
        return;
    }

    const view2Container = document.getElementById('view2-container');
    if (!view2Container) return;

    if (typeof THREE.GLTFLoader === 'undefined') {
        view2Container.innerHTML = '<p style="color: red; padding: 1rem;">Error: GLTFLoader.js is missing.</p>';
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, view2Container.clientWidth / view2Container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(view2Container.clientWidth, view2Container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    view2Container.appendChild(renderer.domElement);

    const gltfLoader = new THREE.GLTFLoader();

    let model = null;
    gltfLoader.load(assetHref('view2.gltf'), (gltf) => {
        model = gltf.scene;
        scene.add(model);
    });

    const textureLoader = new THREE.TextureLoader();
    const frontTexture = textureLoader.load(assetHref('textures/box/front.png'));
    const leftTexture = textureLoader.load(assetHref('textures/box/left.png'));
    const labelTexture = textureLoader.load(assetHref('textures/distributionBox/label_v1.png'));

    const packages = [];
    const packageGroup = new THREE.Group();

    const packageGeometry = new THREE.BoxGeometry(1, 2.06845, 0.73304);
    const packageMaterials = [
        new THREE.MeshStandardMaterial({ map: leftTexture }),
        new THREE.MeshStandardMaterial({ map: leftTexture }),
        new THREE.MeshStandardMaterial({ color: 'white' }),
        new THREE.MeshStandardMaterial({ color: 'white' }),
        new THREE.MeshStandardMaterial({ map: frontTexture }),
        new THREE.MeshStandardMaterial({ map: frontTexture }),
    ];

    for (let i = 0; i < 24; i++) {
        const pkg = new THREE.Mesh(packageGeometry, packageMaterials);
        pkg.position.set(-4.56, 12.65, -10 + i * 5);
        pkg.rotation.set(0, -Math.PI / 2, 0);
        packages.push(pkg);
        packageGroup.add(pkg);
    }
    scene.add(packageGroup);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const scrollContainer = document.querySelector('.main-wrapper');
    let scrollY = window.scrollY;
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    });

    const getScrollRatio = () => {
        if (!view2Container) return 0;
        const rect = view2Container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementHeight = rect.height;
        const start = rect.top + window.scrollY - viewportHeight;
        const end = rect.top + window.scrollY + elementHeight;
        const scrollableDistance = end - start;
        if (scrollableDistance <= 0) return 0;
        const progress = (window.scrollY - start) / scrollableDistance;
        return Math.max(0, Math.min(1, progress));
    };

    const animate = () => {
        requestAnimationFrame(animate);

        const scrollRatio = getScrollRatio();

        const cameraPosX = interpolate(scrollRatio, [-10, 0, 20, 20, 20, 20, 20, 20]);
        const cameraPosY = interpolate(scrollRatio, [16, 16, 16, 16, 10, 10, 10, 20]);
        const cameraPosZ = interpolate(scrollRatio, [-10, -22, -15, -10, 20, 40, 50, 60]);
        const cameraLookZ = interpolate(scrollRatio, [-30, -30, -30, -30, -10, -5, 0, 0]);

        camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
        camera.lookAt(0, -10, cameraLookZ);

        if (model) {
            // This is where the complex animation logic from the React component would go.
            // Due to its complexity and stateful nature, a direct translation is non-trivial
            // and would require a significant state machine implementation here.
            // For now, we are just setting up the scene and camera.
        }

        renderer.render(scene, camera);
    };

    animate();
};

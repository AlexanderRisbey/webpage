// The user needs to add GLTFLoader.js to the vendor directory for this to work.
// import { GLTFLoader } from '../vendor/GLTFLoader.js'; 

export const initTrackAndTraceScene = () => {
    // Since THREE is loaded globally from the HTML, we can access it directly.
    if (typeof THREE === 'undefined') {
        console.error('Three.js has not been loaded. Please include it in your HTML.');
        return;
    }

    const view1Container = document.getElementById('view1-container');
    if (!view1Container) return;

    // Check if GLTFLoader is available
    if (typeof THREE.GLTFLoader === 'undefined') {
        view1Container.innerHTML = '<p style="color: red; padding: 1rem;">Error: GLTFLoader.js is missing. Please add it to the docs/vendor/ directory to load the 3D model.</p>';
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, view1Container.clientWidth / view1Container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(view1Container.clientWidth, view1Container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    view1Container.appendChild(renderer.domElement);

    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('../assets/view1.gltf', (gltf) => {
        gltf.scene.traverse(node => {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        scene.add(gltf.scene);
    });

    const textureLoader = new THREE.TextureLoader();
    const frontTexture = textureLoader.load('../assets/textures/box/front.png');
    const front2Texture = textureLoader.load('../assets/textures/box/front2.png');
    const leftTexture = textureLoader.load('../assets/textures/box/left.png');

    const packages = [];
    const packageGroup = new THREE.Group();

    const packageGeometry = new THREE.BoxGeometry(1, 2.06845, 0.73304);
    const laserGeometry = new THREE.BoxGeometry(2, 0.27, 0.27);
    const laserMaterial = new THREE.MeshPhongMaterial({ color: "#ff0000", opacity: 0, transparent: true });

    for (let i = 0; i < 12; i++) {
        const materials = [
            new THREE.MeshStandardMaterial({ map: leftTexture }),
            new THREE.MeshStandardMaterial({ map: leftTexture }),
            new THREE.MeshStandardMaterial({ color: 'white' }),
            new THREE.MeshStandardMaterial({ color: 'white' }),
            new THREE.MeshStandardMaterial({ map: front2Texture }),
            new THREE.MeshStandardMaterial({ map: front2Texture }),
        ];
        const pkg = new THREE.Mesh(packageGeometry, materials);
        const laser = new THREE.Mesh(laserGeometry, laserMaterial.clone());
        laser.position.set(-0.3, -0.85, -1);
        laser.rotation.set(0, -Math.PI / 2, 0);

        const group = new THREE.Group();
        group.add(pkg);
        group.add(laser);
        group.position.set(0.3, 12.65, i * 5 - 30);
        group.rotation.set(0, -Math.PI / 2, 0);
        group.scale.set(1.4, 1.4, 1.4);
        
        packages.push(group);
        packageGroup.add(group);
    }
    scene.add(packageGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const scrollContainer = document.querySelector('.main-wrapper');

    const updateCameraAndPackages = () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollY / scrollHeight;

        // Camera animation
        const cameraPosX = 60 - 58 * Math.min(1, scrollProgress / 0.2);
        const cameraPosY = 17 - 5 * Math.min(1, scrollProgress / 0.2);
        const cameraPosZ = 30 - 22 * Math.min(1, scrollProgress / 0.2);
        const cameraLookY = -6 + 11 * Math.min(1, scrollProgress / 0.2);
        camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
        camera.lookAt(-1, cameraLookY, 6);

        // Package animation
        const speed = 0.1 - 0.09 * Math.sin(scrollProgress * Math.PI);
        packages.forEach(pkg => {
            pkg.position.z -= speed;
            if (pkg.position.z < -30) {
                pkg.position.z = 30;
            }

            const material = pkg.children[0].material[4];
            if (pkg.position.z < 4) {
                material.map = frontTexture;
            } else {
                material.map = front2Texture;
            }

            if (pkg.position.z >= 3.9 && pkg.position.z <= 4.1) {
                pkg.children[1].material.opacity = 0.6;
            } else {
                pkg.children[1].material.opacity = 0;
            }
        });
    };

    const animate = () => {
        requestAnimationFrame(animate);
        updateCameraAndPackages();
        renderer.render(scene, camera);
    };

    animate();
}

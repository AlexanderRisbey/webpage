
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

export const initView3Scene = () => {
    if (typeof THREE === 'undefined') {
        console.error('Three.js has not been loaded.');
        return;
    }

    const view3Container = document.getElementById('view3-container');
    if (!view3Container) return;

    if (typeof THREE.GLTFLoader === 'undefined') {
        view3Container.innerHTML = '<p style="color: red; padding: 1rem;">Error: GLTFLoader.js is missing.</p>';
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, view3Container.clientWidth / view3Container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(view3Container.clientWidth, view3Container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    view3Container.appendChild(renderer.domElement);

    const gltfLoader = new THREE.GLTFLoader();

    let truckRef = null;
    let frontwheelRef = null;
    let leftDoorRef = null;
    let rightDoorRef = null;
    let backWheel1Ref = null;
    let backWheel2Ref = null;

    gltfLoader.load(assetHref('LydiaRx_semi-truck.gltf'), (gltf) => {
        truckRef = gltf.scene;
        truckRef.traverse(node => {
            if(node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
            if(node.name === 'GroupFrontWheels') frontwheelRef = node;
            if(node.name === 'GroupLeftDoor') leftDoorRef = node;
            if(node.name === 'GroupRightDoor') rightDoorRef = node;
            if(node.name === 'mesh_36') backWheel1Ref = node;
            if(node.name === 'mesh_37') backWheel2Ref = node;
        });
        scene.add(truckRef);
    });

    let palletsRef = new THREE.Group();
    let lastPalletRef = null;
    gltfLoader.load(assetHref('LydiaRx_pallet-with-cargo.gltf'), (gltf) => {
        const pallet = gltf.scene;
        for(let i = 0; i < 10; i++) {
            const newPallet = pallet.clone();
            newPallet.position.set(i * 1.25, 0, -3);
            if (i === 9) lastPalletRef = newPallet;
            palletsRef.add(newPallet);
        }
        scene.add(palletsRef);
    });

    let borderSceneRef = null;
    gltfLoader.load(assetHref('LydiaRx_border-scene.gltf'), (gltf) => {
        borderSceneRef = gltf.scene;
        borderSceneRef.position.set(0, -1.12, 0);
        borderSceneRef.scale.set(0.001, 0.001, 0.001);
        scene.add(borderSceneRef);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const getScrollRatio = () => {
        if (!view3Container) return 0;
        const rect = view3Container.getBoundingClientRect();
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

        const cameraPosX = interpolate(scrollRatio, [-2, -2, -2.5, 10, 10, 1, -2.7, -50]);
        const cameraPosY = interpolate(scrollRatio, [2, 2, 5, 5, 5, 0, 0]);
        const cameraPosZ = interpolate(scrollRatio, [-4, -2, 1.71, 10, 5.45, -2.99, -2.99]);

        camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
        camera.lookAt(-13, 0, -3);

        if (truckRef && frontwheelRef && backWheel1Ref && backWheel2Ref && leftDoorRef && rightDoorRef && lastPalletRef && palletsRef && borderSceneRef) {
            const wheels = interpolate(scrollRatio, [0, 0, 100, 110, 200]);
            frontwheelRef.rotation.y = wheels;
            backWheel1Ref.rotation.y = wheels;
            backWheel2Ref.rotation.y = wheels;

            const doors = interpolate(scrollRatio, [3, 3, 0, 0]);
            leftDoorRef.rotation.z = -doors;
            rightDoorRef.rotation.z = doors;

            const lastPallet = interpolate(scrollRatio, [0, 7, 7]);
            lastPalletRef.position.x = lastPallet;

            const loadingBayPosx = interpolate(scrollRatio, [1.1, 1.1, -100]);
            // loadingBayRef is not defined in the provided code, assuming it's not needed for now

            const borderScale = interpolate(scrollRatio, [0.001, 1, 1]);
            borderSceneRef.scale.set(borderScale, borderScale, borderScale);

            const borderPositionX = interpolate(scrollRatio, [0, 200, 200, 0, -200]);
            borderSceneRef.position.x = borderPositionX;

            palletsRef.visible = scrollRatio < 0.2;
            borderSceneRef.visible = scrollRatio >= 0.3;
        }

        renderer.render(scene, camera);
    };

    animate();
};
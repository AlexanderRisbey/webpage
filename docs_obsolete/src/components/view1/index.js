import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdaptiveDpr, Html, PerspectiveCamera, Stage, useGLTF, useProgress, useTexture } from '@react-three/drei'
import { BoxGeometry, Mesh, MeshStandardMaterial, DoubleSide } from 'three'
import { easeIn, useScroll, useSpring, useTransform } from 'framer-motion'

import frontTexture from '../../assets/textures/box/front.png'
import front2Texture from '../../assets/textures/box/front2.png'
import leftTexture from '../../assets/textures/box/left.png'

export default function View1({forwardedRef}) {
    
    const modelRef = useRef(null)
    const View1CameraRef = useRef(null)
    const packageRefs = useRef([]);
    
    function Loader() {
      const { active, progress, errors, item, loaded, total } = useProgress()
      return <Html center>{progress} % loaded</Html>
    }

    const { scrollYProgress } = useScroll({
        target: forwardedRef,
        offset: ["start end", "end start"]
      })
    
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Component View1 scroll: ", latest)
    // })

    const [left] = useTexture([leftTexture])
    const [front] = useTexture([frontTexture])
    const [front2] = useTexture([front2Texture])
    
    useGLTF.preload("/view1.gltf");

    function Model(props) {
      const { nodes, materials } = useGLTF("/view1.gltf");
      return (
        <group {...props} ref={props.forwardRef} dispose={null}>
          <group position={[-2.336, -1, 17.657]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_0.geometry}
              material={nodes.mesh_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_1.geometry}
              material={nodes.mesh_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_2.geometry}
              material={nodes.mesh_2.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_3.geometry}
              material={nodes.mesh_3.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4.geometry}
              material={nodes.mesh_4.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_5.geometry}
              material={nodes.mesh_5.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_6.geometry}
              material={nodes.mesh_6.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_7.geometry}
              material={materials.__DEFAULT}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_8.geometry}
              material={nodes.mesh_8.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_9.geometry}
              material={nodes.mesh_9.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_10.geometry}
              material={nodes.mesh_10.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_11.geometry}
              material={nodes.mesh_11.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_12.geometry}
              material={nodes.mesh_12.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_13.geometry}
              material={nodes.mesh_13.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_14.geometry}
              material={nodes.mesh_14.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_15.geometry}
              material={nodes.mesh_15.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_16.geometry}
              material={nodes.mesh_16.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_17.geometry}
              material={nodes.mesh_17.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_18.geometry}
              material={nodes.mesh_18.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_19.geometry}
              material={nodes.mesh_19.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_20.geometry}
              material={nodes.mesh_20.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_21.geometry}
              material={nodes.mesh_21.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_22.geometry}
              material={nodes.mesh_22.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_23.geometry}
              material={nodes.mesh_23.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_24.geometry}
              material={materials.__DEFAULT}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_25.geometry}
              material={nodes.mesh_25.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_26.geometry}
              material={nodes.mesh_26.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_27.geometry}
              material={nodes.mesh_27.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_28.geometry}
              material={nodes.mesh_28.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_29.geometry}
              material={nodes.mesh_29.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_30.geometry}
              material={nodes.mesh_30.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_31.geometry}
              material={nodes.mesh_31.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_32.geometry}
              material={nodes.mesh_32.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_33.geometry}
              material={nodes.mesh_33.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_34.geometry}
              material={nodes.mesh_34.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_35.geometry}
              material={nodes.mesh_35.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_36.geometry}
              material={nodes.mesh_36.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_37.geometry}
              material={nodes.mesh_37.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_38.geometry}
              material={nodes.mesh_38.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_39.geometry}
              material={nodes.mesh_39.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_40.geometry}
              material={nodes.mesh_40.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_41.geometry}
              material={nodes.mesh_41.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_42.geometry}
              material={nodes.mesh_42.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_43.geometry}
              material={nodes.mesh_43.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_44.geometry}
              material={nodes.mesh_44.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_45.geometry}
              material={nodes.mesh_45.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_46.geometry}
              material={nodes.mesh_46.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_47.geometry}
              material={nodes.mesh_47.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_48.geometry}
              material={nodes.mesh_48.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_49.geometry}
              material={nodes.mesh_49.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_50.geometry}
              material={nodes.mesh_50.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_51.geometry}
              material={nodes.mesh_51.material}
            />
          </group>
        </group>
      );
    }

    // function Package(props) {
    //     const geometry = new BoxGeometry(1, 2.06845, 0.73304);
    //     const materials = [
    //       new MeshStandardMaterial({ map: left }),   // Right side
    //       new MeshStandardMaterial({ map: left }),  // Left side
    //       new MeshStandardMaterial({ color: 'white' }), // Top side
    //       new MeshStandardMaterial({ color: 'white' }),// Bottom side
    //       new MeshStandardMaterial({ map: front  }),// Front side
    //       new MeshStandardMaterial({ map: front  }),// BackS side
    //     ];
    //     return <primitive {...props} ref={props.forwardRef} object={new Mesh(geometry, materials)} />;
    //   }

    console.log(packageRefs)
    function Package(props) {
      const geometry = new BoxGeometry(1, 2.06845, 0.73304);
      const materials = [
        new MeshStandardMaterial({ map: left }),   // Right side
        new MeshStandardMaterial({ map: left }),  // Left side
        new MeshStandardMaterial({ color: 'white' }), // Top side
        new MeshStandardMaterial({ color: 'white' }),// Bottom side
        new MeshStandardMaterial({ map: front  }),// Front side
        new MeshStandardMaterial({ map: front  }),// BackS side
      ];
      return <group {...props} ref={props.forwardRef}>
                <primitive object={new Mesh(geometry, materials)} />;
                <mesh position={[-.3, -.85, -1]} rotation={[0, -Math.PI / 2, 0]} >
                  <boxGeometry args={[2, .27, .27]} />
                  <meshPhongMaterial side={DoubleSide} color="#ff0000" opacity={0.5} transparent />
                </mesh>
              </group>
    }

    const temporaryx = useSpring(scrollYProgress, {
      stiffness: 300,
      damping: 40,
      restDelta: 0.001,
    });

    const cameraPosX = useTransform(temporaryx, [0, 0.45, 0.55, 1], [60, 2, 2, 7], easeIn);
    const cameraPosY = useTransform(temporaryx, [0, 0.45, 0.55, 1], [17, 12, 12, 13]);
    const cameraPosZ = useTransform(temporaryx, [0, 0.45,0.5, 0.55, 1], [30, 8,6, 4, -10]);
    const cameraLookY = useTransform(temporaryx, [0, 0.45, 0.55, 1], [-6, 5, 5, 5]);
    // const cameraFov = useTransform(temporaryx, [0, 0.45, 0.5, 0.55, 1], [52, 45, 40, 45, 52]);
    const speed = useTransform(temporaryx, [0, 0.45, 0.5, 0.6, 0.75, 1], [.1, .1, .01, .01 ,.1, .1]);
  
    // const [front, back, left, right] = useTexture([frontTexture, frontTexture, leftTexture, leftTexture]);
    
    const thresholdZ = 4
  
    useFrame((state) => {
      if (modelRef.current) {
        View1CameraRef.current.position.x= cameraPosX.get()
        View1CameraRef.current.position.y= cameraPosY.get()
        View1CameraRef.current.position.z= cameraPosZ.get()
        View1CameraRef.current.lookAt(-1,cameraLookY.get(),6)
        View1CameraRef.current.fov= 50
        // View1CameraRef.current.fov=cameraFov.get()
        //   state.camera.fov=10
      
        packageRefs.current.forEach((boxRef, index) => {
          if (boxRef) {
            // Decrement z-position by 0.1 per frame
            boxRef.position.z -= speed.get();
          
            // Reset position to 30 if it goes below -30
            if (boxRef.position.z < -30) {
              boxRef.position.z = 30;
            }
            const positionZ = boxRef.position.z;
            const material = boxRef.children[0].material[5];
            // Check if positionZ is below threshold
            if (positionZ < thresholdZ) {
              // Apply barcode texture
              material.map = front;
              
              // Make material visible
            } else {
              // Apply blank texture
              material.map = front2;
              // Make material invisible
            }
            if ((positionZ >= 3.9) && (positionZ <= 4.1 )){
              boxRef.children[1].material.opacity = .6
            } else{
              boxRef.children[1].material.opacity = 0
            }
          }
        });
      }
    });

    return (
      <group>
        <AdaptiveDpr pixelated />
        <Suspense fallback={<Loader />}>
          <Stage  preset={"rembrandt"} intensity={1} contactShadow={true} shadows="contact" environment="city">
            <PerspectiveCamera makeDefault ref={View1CameraRef}/>
            <ambientLight intensity={.25} color={"#fff"} />
            <Model forwardRef={modelRef}/>
            <Package forwardRef={ref => (packageRefs.current[0] = ref)} position={[0.3, 12.65, -30]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[1] = ref)} position={[0.3, 12.65, -25]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[2] = ref)} position={[0.3, 12.65, -20]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[3] = ref)} position={[0.3, 12.65, -15]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[4] = ref)} position={[0.3, 12.65, -10]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[5] = ref)} position={[0.3, 12.65, -5]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[6] = ref)} position={[0.3, 12.65, 0]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[7] = ref)} position={[0.3, 12.65, 5]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[8] = ref)} position={[0.3, 12.65, 10]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[9] = ref)} position={[0.3, 12.65, 15]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[10] = ref)} position={[0.3, 12.65, 20]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
            <Package forwardRef={ref => (packageRefs.current[11] = ref)} position={[0.3, 12.65, 25]} rotation={[0, -Math.PI / 2, 0]} scale={1.4} />
          </Stage>
        </Suspense>
      </group>
    )
}
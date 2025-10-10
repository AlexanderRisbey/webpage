import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdaptiveDpr, Html, PerspectiveCamera, Stage, useProgress } from '@react-three/drei'
import { easeIn, useScroll, useSpring, useTransform } from 'framer-motion'

import { LydiaRxSemiTruck, } from '../../assets/models/LydiaRx_semi-truck'
import { LydiaRxPalletWithCargo } from '../../assets/models/LydiaRx_pallet-with-cargo'
import { LydiaRxBorderScene } from '../../assets/models/lydiaRx_border-scene'
import { LydiaRxPalletWithCargoLow } from '../../assets/models/LydiaRx_pallet-with-cargo-low'

export default function View3({forwardedRef}) {
  
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
    const truckRef = useRef(null)
    const frontwheelRef = useRef(null)
    const leftDoorRef = useRef(null)
    const rightDoorRef = useRef(null)
    const backWheel1Ref = useRef(null)
    const backWheel2Ref = useRef(null)
    const lastPalletRef = useRef(null)
    const palletsRef = useRef(null)
    const loadingBayRef = useRef(null)
    const borderSceneRef = useRef(null)
    const stageSizeRef = useRef(null)
    const View3CameraRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: forwardedRef,
        offset: ["0vh", "end start"]
      })
    
    const springyScrollY = useSpring(scrollYProgress, {
      stiffness: 300,
      damping: 40,
      restDelta: 0.001,
    });
      
    const cameraPosX = useTransform(springyScrollY, [0,0.1,0.2,0.3,0.5,0.6,0.7,1], [ -2,   -2,  -2.5, 10,10, 1, -2.7, -50])
    const cameraPosY = useTransform(springyScrollY, [0,0.1,0.2,0.3,0.6,0.7,1], [ 2, 2,  5,   5, 5,  0, 0])
    const cameraPosZ = useTransform(springyScrollY, [0,0.1,0.2,0.3,0.6,0.7,1], [  -4,  -2,  1.71, 10, 5.45,  -2.99, -2.99])


    // const speed = useTransform(temporaryx, [0, 0.45, 0.5, 0.75, 1], [.2, .2, 0.02, .2 , .2]);
    const doors = useTransform(springyScrollY, [0,0.1 ,0.2, 1], [3,3, 0, 0]);
    const lastPallet = useTransform(springyScrollY, [0,0.1, 1], [0,7, 7,]);
    const wheels = useTransform(springyScrollY, [0, 0.2, 0.6, 0.75, 1], [0, 0, 100, 110 , 200],{ ease: easeIn });
    const loadingBayPosx = useTransform(springyScrollY, [0, 0.2, 0.6,], [1.1, 1.1, -100,], { ease: easeIn });
    
    const borderScale = useTransform(springyScrollY,     [0, 0.1, 1], [0.001, 1,1]);
    const borderPositionX = useTransform(springyScrollY, [0, 0.1 , 0.2, 0.6, 1], [0,200,200, 0, -200]);

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Component View3 scroll: ", latest)
    // })

    //ANIMATIONS...........................................................................
    useFrame((state) => {
      if(truckRef.current){


        //Camera
        View3CameraRef.current.position.x = cameraPosX.get()
        View3CameraRef.current.position.y = cameraPosY.get()
        View3CameraRef.current.position.z = cameraPosZ.get()
        View3CameraRef.current.lookAt(-13,0,-3)
        // View3CameraRef.current.lookAt(-1,cameraLookY.get(),6)
        View3CameraRef.current.fov= 50

        stageSizeRef.current.visible = false
        truckRef.current.position.y = -1.22
        borderSceneRef.current.position.y = -1.12
        frontwheelRef.current.rotation.y = wheels.get()
        backWheel1Ref.current.rotation.y = wheels.get()
        backWheel2Ref.current.rotation.y = wheels.get()
        leftDoorRef.current.rotation.z = -doors.get()
        rightDoorRef.current.rotation.z = doors.get()
        lastPalletRef.current.position.x = lastPallet.get()
        loadingBayRef.current.position.x = loadingBayPosx.get()
        borderSceneRef.current.scale.x = borderScale.get()
        borderSceneRef.current.scale.y = borderScale.get()
        borderSceneRef.current.scale.z = borderScale.get()
        borderSceneRef.current.position.x = borderPositionX.get()

        // truckRef.current.position.x = truckPos.get()
        if (springyScrollY.get() >= 0.2){
          palletsRef.current.visible= false
        } else {
          palletsRef.current.visible= true
        }
        if (springyScrollY.get() >= 0.3){
          borderSceneRef.current.visible= true
        } else {
          borderSceneRef.current.visible= false
        }
      }
      
    });
    
    return (
      <group>
        <AdaptiveDpr pixelated />
            <Suspense fallback={<Loader />}>
                <Stage  
                  adjustCamera={false} 
                  preset={"rembrandt"} 
                  intensity={0.5} 
                  // contactShadow={true} 
                  shadows={{ type: 'contact', color: '#000', colorBlend: 1, opacity: .5 }}
                  environment="city">
                    <PerspectiveCamera makeDefault ref={View3CameraRef} /> 
                    <ambientLight intensity={1} color={"#fff"} />
                    <group ref={palletsRef}>
                      <LydiaRxPalletWithCargo position={[7,0,-3.66]}/>
                      <LydiaRxPalletWithCargo forwardedRef={lastPalletRef} position={[7,0,-2.84]}/>
                      <LydiaRxPalletWithCargo position={[7,0,-2.03]}/>
                      <group position={[1.25,0,0]}>
                        <LydiaRxPalletWithCargo position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargo position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargo
                         position={[7,0,-2.03]}/>
                      </group>
                      <group position={[2.5,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[3.75,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[5,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[6.25,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[7.5,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[8.75,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[10,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                      <group position={[11.25,0,0]}>
                        <LydiaRxPalletWithCargoLow position={[7,0,-3.66]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.84]}/>
                        <LydiaRxPalletWithCargoLow position={[7,0,-2.03]}/>
                      </group>
                    </group>
                    {/* <mesh ref={loadingBayRef} rotation={[0, 0, 0]} position={[1.1,0.48,-3]}> */}
                    <mesh ref={loadingBayRef} rotation={[0, 0, 0]} position={[1.1,-.64,-3]}>
                      <boxGeometry args={[10, 1.12, 10]} />
                      <meshStandardMaterial color={'#fff'} />
                    </mesh>
                    <mesh ref={stageSizeRef} rotation={[0, 0, 0]} position={[30,-1.2,0]}> 
                      <boxGeometry args={[50, .01, 50]} />
                      <meshBasicMaterial color={'#fff'} />
                    </mesh> 
                    <group ref={borderSceneRef} position={[0,0,0]} scale={0.001}>
                      <LydiaRxBorderScene position={[-100,-.67,-49]}/>
                      <LydiaRxSemiTruck position={[13,-.1,-14]} doorLeft={2} doorRight={Math.PI}/>
                      <LydiaRxSemiTruck position={[-15,-.1,-5]} rotation={[0,.8,0]}/>
                      <LydiaRxSemiTruck position={[-10,-.1,-5]} rotation={[0,.8,0]}/>
                      <LydiaRxSemiTruck position={[-25,-.1,-5]} rotation={[0,.8,0]}/>
                    </group>
                    <LydiaRxSemiTruck position={[0,-.1,0]} truckRef={truckRef} frontwheelRef={frontwheelRef} leftDoorRef={leftDoorRef} rightDoorRef={rightDoorRef} backWheel1Ref={backWheel1Ref} backWheel2Ref={backWheel2Ref} />
                </Stage>
            </Suspense>
        </group>
    )
}
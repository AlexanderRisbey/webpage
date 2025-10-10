import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdaptiveDpr, Html, PerspectiveCamera, Stage, useGLTF, useProgress, useTexture } from '@react-three/drei'
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
import { easeIn, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

import frontTexture from '../../assets/textures/box/front.png'
import leftTexture from '../../assets/textures/box/left.png'
import labelTexture from '../../assets/textures/distributionBox/label_v1.png'

export default function View2({forwardedRef}) {
    
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  const modelRef = useRef(null)
  const View2CameraRef = useRef(null)
  const packageRefs = useRef([]);
  const packageGroupRefs = useRef([]);
  // const cardboardGroupRefs = useRef([]);
  const foldingCardboardRef = useRef([])
  const pusherRef = useRef()
  const replacementBoxRef = useRef()
  const textureBoxRef = useRef()
  const stack1Ref = useRef()
  const hookRef = useRef()
  const centerFlapRef = useRef()
  const outerFlapRef = useRef()
  const craneRef = useRef()
  const craneMovableRef = useRef()
  const suctionMechanismRef = useRef()
  
  console.log("Forwarded Ref2",forwardedRef)
  const { scrollYProgress } = useScroll({
      target: forwardedRef,
      offset: ["start end", "end start"]
    })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("Component View2 scroll: ", latest)
  })

  const [left] = useTexture([leftTexture])
  const [front] = useTexture([frontTexture])
  const [label] = useTexture([labelTexture])
  
  function Model(props) {
    const { nodes, materials } = useGLTF('/view2.gltf')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0,-1,0]}>
          {/* pusher */}
          <mesh ref={pusherRef} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} position={[.6, 0, 0]}/>
          {/* Closing Hook */}
          <group ref={hookRef} position={[7.45,-4.7,15.2]} >
            <mesh geometry={nodes.mesh_1.geometry} material={materials['Hook-closing']} position={[-7.45, 4.7, -15.2]} />
          </group>
          {/* Folding flap outer */}
          <group ref={outerFlapRef} position={[10.84,-7.7,12.3]} rotation={[0,0,0]}>
            <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} position={[-10.84, 7.7, -12.3]} />
          </group>
          {/* Folding flap center */}
          <group ref={centerFlapRef} position={[4.07,-7.7,12.3]} rotation={[0,0,0]}>
            <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} position={[-4.07, 7.7, -12.3]} />
          </group>
          {/* //label roller */}
          <mesh geometry={nodes.mesh_4.geometry} material={materials.Suction} />
          {/* printerholder */}
          <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
          {/* label Roll */}
          <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
          {/* label applier */}
          <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material}/>
          {/* label fed to printer */}
          <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material}  />
          {/* conveyor large centerpiece */}
          <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
          {/* conveyor large outerpiece */}
          <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
          {/* conveyor small centerpiece */}
          <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
          {/* conveyor small outerpiece */}
          <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
          {/* pylon 2 */}
          <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
          {/* pylon 3 */}
          <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
          {/* pylon 4 */}
          <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
          {/* pylon 1 */}
          <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
          {/* packagefolding structure */}
          <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
          {/* tape applier roller back */}
          <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
          {/* tape applier roller front */}
          <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
          {/* tape rolle */}
          <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
          {/* tape feed */}
          <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
          {/* tape applier */}
          <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
          {/* label printer structure */}
          <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
          {/* large conveyor floor last*/}
          <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
          {/* large conveyor floor mid*/}
          <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
          {/* large conveyor floor first*/}
          <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
          {/* large conveyor legs*/}
          <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
          {/* small conveyor outerpiece */}
          <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
          {/* stacker structure */}
          <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
          {/* stacker conveyor floor */}
          <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
          {/* small conveyor floor */}
          <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
          {/* <group ref={craneRef} position={[-6,0,-1.8]}> */}
          <group ref={craneRef} position={[-6,0,0]}>
            {/* crane structure */}
            <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
            <group ref={craneMovableRef} position={[0,0,0]}>
              {/* crane movable */}
              <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
              <PackageStack forwardRef={stack1Ref}  position={[1.441, 10.16, 17.45]} rotation={[Math.PI / 2, 0, 0]}/>
              <group ref={suctionMechanismRef}>
              {/* first suction */}
                <mesh geometry={nodes.mesh_34.geometry} material={materials.suc_1_end} />
                <mesh geometry={nodes.mesh_35.geometry} material={materials.suc} />
                <mesh geometry={nodes.mesh_36.geometry} material={materials.suc} />
                <mesh geometry={nodes.mesh_37.geometry} material={materials.suc} />
                <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                <mesh geometry={nodes.mesh_39.geometry} material={materials.suc} />
                <mesh geometry={nodes.mesh_40.geometry} material={materials.suc} />
                <mesh geometry={nodes.mesh_41.geometry} material={materials.Suc} />
                <mesh geometry={nodes.mesh_42.geometry} material={materials.suc_2_end} />
                <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
                <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
                <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
                <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
                <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
                <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
                <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
                <mesh geometry={nodes.mesh_50.geometry} material={materials.suc_3_end} />
                <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
                <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
                <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
                <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
                <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
                <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
                <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
                <mesh geometry={nodes.mesh_58.geometry} material={materials.suc_4_end} />
                <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
                <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
                <mesh geometry={nodes.mesh_61.geometry} material={nodes.mesh_61.material} />
                <mesh geometry={nodes.mesh_62.geometry} material={nodes.mesh_62.material} />
                <mesh geometry={nodes.mesh_63.geometry} material={nodes.mesh_63.material} />
                <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_64.material} />
                <mesh geometry={nodes.mesh_65.geometry} material={nodes.mesh_65.material} />
                <mesh geometry={nodes.Suc_5_End.geometry} material={materials.suc_5_end} />
                <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_67.material} />
                <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} />
                <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} />
                <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} />
                <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} />
                <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} />
                <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} />
              </group>
            </group>
          </group>
          {/* small conveyor centerpiece */}
          <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} />
          {/* scan laser */}
          <mesh geometry={nodes.mesh_75.geometry} material={nodes.mesh_75.material} />
          {/* scan device */}
          <mesh geometry={nodes.mesh_76.geometry} material={nodes.mesh_76.material} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/view2.gltf')
  
    function CardboardBox(props) {
      const { nodes } = useGLTF('/cardboardBox.gltf')
      return (
        <group {...props} ref={foldingCardboardRef} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            {/* <group   position={[7,25.935,11.84]} rotation={[-Math.PI / 2,0,0]}> */}
            <group   position={[7,25.935,11.84]} rotation={[0,0,0]}>
              {/* <mesh >
                <boxGeometry args={[1, 1, .1]} />
                <meshStandardMaterial color={'orange'} />
              </mesh>
              <mesh >
                <boxGeometry args={[1, .1, 1]} />
                <meshStandardMaterial color={'green'} />
              </mesh> */}
              <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} position={[-7,-25.935,-11.84]}/>
            </group>
            {/* <group   position={[4.965,31,11.99]} rotation={[0,Math.PI / 2,0]}> */}
            <group   position={[4.965,31,11.99]} rotation={[0,0,0]}>
              <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} position={[-4.965,-31,-11.99]}/>
            </group>
            {/* <group   position={[9.95,31,11.99]} rotation={[0,-Math.PI / 2,0]}> */}
            <group   position={[9.95,31,11.99]} rotation={[0,0,0]}>
              <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} position={[-9.95,-31,-11.99]}/>
            </group>
            <group   position={[7,36.83,11.85]} rotation={[0,0,0]}>
              <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} position={[-7,-36.83,-11.85]}/>
            </group>
            <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
            <PackageStack   position={[4.47, 36.14, 7.62]} rotation={[Math.PI / 2, 0, 0]}/>
            <PackageStack   position={[4.47, 36.14, 10.43]} rotation={[Math.PI / 2, 0, 0]}/>
          </group>
        </group>
      )
    } 

    function CardboardBoxProp(props) {
      const { nodes } = useGLTF('/cardboardBox.gltf')
      return (
        <group {...props} ref={props.forwardRef} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
            <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
            <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
            <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
          </group>
        </group>
      )
    }

    const cardboardGeometry = new BoxGeometry(1, 2, 3);
        const cardBoardMaterials = [
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
          new MeshStandardMaterial({ map: label }),   // Right side
        ];
        
        function CardboardTextureBox(props) {
          const { nodes } = useGLTF('/cardboardBox.gltf')
          return (
            <group {...props} ref={props.forwardRef} dispose={null}>
              <group rotation={[-Math.PI / 2, 0, 0]}>
                <group   position={[7,25.935,11.84]} rotation={[-Math.PI / 2,0,0]}>
                  <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} position={[-7,-25.935,-11.84]}/>
                </group>
                <group   position={[4.965,31,11.99]} rotation={[0,Math.PI / 2,0]}>
                  <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} position={[-4.965,-31,-11.99]}/>
                </group>
                <group   position={[9.95,31,11.99]} rotation={[0,-Math.PI / 2,0]}>
                  <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} position={[-9.95,-31,-11.99]}/>
                </group>
                <group   position={[7,36.83,11.85]} rotation={[Math.PI / 2,0,0]}>
                  <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} position={[-7,-36.83,-11.85]}/>
                </group>
                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                {/* <primitive rotation={[Math.PI / 2, 0, 0]} position={[9.603,29,8.26]}    scale={1} object={new Mesh(cardboardGeometry, cardBoardMaterials)}/> */}
                <primitive rotation={[Math.PI / 2, 0, 0]} position={[9.603,29,8.26]}    scale={[1,1,1]} object={new Mesh(cardboardGeometry, cardBoardMaterials)}/>
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[9.603,29,8.26]}    scale={[1.005,1,1.1]}>
                  <boxGeometry args={[1, 2, 3]} />
                  <meshStandardMaterial color={'#ad8762'} />
                </mesh> 
                {/* <primitive rotation={[Math.PI / 2, 0, 0]} position={[9.603,29,8.26]}    scale={[1.3,1,1]} object={new Mesh(cardboardGeometry, labelCoverMaterial)}/> */}
              </group>
            </group>
          )
        } 
       
    useGLTF.preload('/cardboardBox.gltf')

   
    const geometry = new BoxGeometry(1, 2.06845, 0.73304);
        const materials = [
          new MeshStandardMaterial({ map: left }),   // Right side
          new MeshStandardMaterial({ map: left }),  // Left side
          new MeshStandardMaterial({ color: 'white' }), // Top side
          new MeshStandardMaterial({ color: 'white' }),// Bottom side
          new MeshStandardMaterial({ map: front  }),// Front side
          new MeshStandardMaterial({ map: front  }),// BackS side
        ];

    function Package(props) {
        return <primitive  {...props} ref={props.forwardRef} scale={1.36} object={new Mesh(geometry, materials)}/>;        
      }

    function PackageRow(props) {
      return (
        <group {...props} ref={props.forwardRef}>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,0]}    scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,1.36]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,2.72]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,4.08]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,5.44]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,6.80]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,8.16]} scale={1.36} object={new Mesh(geometry, materials)}/>
          <primitive rotation={[0, -Math.PI / 2, 0]} position={[0,0,9.52]} scale={1.36} object={new Mesh(geometry, materials)}/>
        </group>
      )
    }

    function PackageStack(props) {
      return(
        <group {...props} ref={props.forwardRef}>
          <PackageRow position={[((0.73304 * 1.36)*5),0,0]}/>
          <PackageRow position={[((0.73304 * 1.36)*4),0,0]}/>
          <PackageRow position={[((0.73304 * 1.36)*3),0,0]}/>
          <PackageRow position={[((0.73304 * 1.36)*2),0,0]}/>
          <PackageRow position={[((0.73304 * 1.36)*1),0,0]}/>
        </group>
      )
    }
    
      const temporaryx = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
        restDelta: 0.001,
      });
      
  
      const cameraPosX = useTransform(temporaryx, [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1], [ -10, 0, 20, 20, 20, 20, 20, 20 ], easeIn);
      const cameraPosY = useTransform(temporaryx, [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1], [ 16, 16, 16, 16, 10, 10, 10 ,20  ]);
      const cameraPosZ = useTransform(temporaryx, [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1], [ -10, -22, -15, -10, 20,40, 50, 60]);
      // const cameraLookY = useTransform(temporaryx, [0, 0.45, 0.55, 1], [-6, 5, 5, 5]);
      const cameraLookZ = useTransform(temporaryx, [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1], [ -30, -30, -30, -30,-10, -5 , 0, 0]);
      // const cameraFov = useTransform(temporaryx, [0, 0.45, 0.5, 0.55, 1], [52, 30, 10, 30, 52]);
      const speed = useTransform(temporaryx, [0, 0.45, 0.5, 0.75, 1], [.2, .2, .2, .2 , .2]);
  
    // const [front, back, left, right] = useTexture([frontTexture, frontTexture, leftTexture, leftTexture]);
    
    // const thresholdZ = 4
    let pusher = false
    let goBack = false
    let pushBoxCycles = 5
    let craneCycle = 0
    let cardboardFillCycle = 0
    let foldBoxCycle = 0
    let replaceCycle = 0
    let textCycle = 0
    let wait = 0
    let wait2 = 0
    let init = true

    //ANIMATIONS...........................................................................
    useFrame((state) => {
        if (packageRefs.current && stack1Ref.current) {
        View2CameraRef.current.position.x= cameraPosX.get()
        View2CameraRef.current.position.y= cameraPosY.get()
        View2CameraRef.current.position.z= cameraPosZ.get()
        View2CameraRef.current.lookAt(0,-10,cameraLookZ.get())
        // View2CameraRef.current.fov=cameraFov.get()
        View2CameraRef.current.fov=50
        let allStopped1 = false;
        let allStopped2 = false;
        let allStopped3 = false;
    
        packageRefs.current.forEach((boxRef, index) => {
          if(boxRef.position.z < 50){
            boxRef.visible = true
          } else {
            boxRef.visible = false
          }
        })

        if(init){
          if(stack1Ref.current && foldingCardboardRef.current && textureBoxRef.current){

            stack1Ref.current.children.forEach((rowRef, index) => {
              rowRef.children.forEach((single, index) => {
                single.visible = false
              })
            })
            
          
            foldingCardboardRef.current.children[0].children.slice(5,7).forEach((cols, index) =>{
              cols.children.forEach((rows, index) =>{
                rows.children.forEach((single, index) =>{
                  single.visible = false
                })
              })
            })

            textureBoxRef.current.children[0].children.forEach((child, index) =>{
              if(child.type === "Group"){
                child.children.forEach((subChild, index) =>{
                  subChild.visible = false
                })
              }
              else {
                child.visible = false
              }
            })

            init = false
          }
        }
        packageRefs.current.forEach((boxRef, index) => {
          if (!boxRef) return;
    
          // Calculate the target position for each box
          const targetZ = -10.16 + (index < 8? index : index <16? index - 8: index -16 ) * 1.36;
          
          // Move the box towards the target position
          if (boxRef.position.z > targetZ) {
            boxRef.position.z -= speed.get();
          } else {
            boxRef.position.z = targetZ; 
            
            if (index === 7){
              allStopped1 = true
            }
            if (index === 15){
              allStopped2 = true
            }
            if (index === 23){
              allStopped3 = true
            }
          }
        });
    
        // If all boxes have stopped, reset their positions and make them invisible
        if (allStopped1) {
          packageRefs.current.slice(0, 8).forEach((boxRef, index) => {
            if (boxRef) {
              boxRef.position.z = packageRefs.current[23].position.z  + (index + 1) * 5;
              boxRef.visible = false;
              pusher = true
            }
          });
          allStopped1= false
        }
        if (allStopped2) {
          packageRefs.current.slice(8, 16).forEach((boxRef, index) => {
            if (boxRef) {
              boxRef.position.z = packageRefs.current[7].position.z + (index + 1) * 5;
              boxRef.visible = false;
              pusher = true
            }
          });
          allStopped2= false
        }
        if (allStopped3) {
          packageRefs.current.slice(16, 24).forEach((boxRef, index) => {
            if (boxRef) {
              boxRef.position.z = packageRefs.current[15].position.z + (index + 1) * 5;
              boxRef.visible = false;
              packageGroupRefs.visible = true;
              pusher = true
            }
          });
          allStopped3= false
        }
        if(pusher){
          let pusherInitX = .6
          let pusherTargetX = (0.73304 * 1.36) + pusherInitX
          
          if ((pusherRef.current.position.x < pusherTargetX) && !goBack) {
            pusherRef.current.position.x += speed.get() ;
          } else if(((pusherRef.current.position.x >= pusherTargetX) && !goBack)) {
            pusherRef.current.position.x = pusherTargetX; 
            goBack = true
          }

          if(pushBoxCycles < 5){
            packageGroupRefs.current.slice(pushBoxCycles, pushBoxCycles+1).forEach((boxRowRef, index) => {
              boxRowRef.children.forEach((boxRowChildRef, index) => {
                boxRowChildRef.visible = true
              })
            })
            packageGroupRefs.current.slice(0, pushBoxCycles+1).forEach((boxRowRef, index) => {
              let BoxRowtarget = -4.56 +((0.73304 * 1.36) * (pushBoxCycles - index +1)) 
              if (boxRowRef.position.x < BoxRowtarget) {
                boxRowRef.position.x += speed.get() ;
              } else {
                boxRowRef.position.x = BoxRowtarget;
              } 
            })
          }

          if ((pusherRef.current.position.x > pusherInitX) && goBack) {
            pusherRef.current.position.x -= speed.get() ;
          } else if(((pusherRef.current.position.x <= pusherInitX) && goBack)) {
            pusherRef.current.position.x = pusherInitX; 
            pushBoxCycles = pushBoxCycles + 1
            pusher = false
            goBack = false
          }
        }
        // box row animation
        if(pushBoxCycles === 5){
          let target = -3.8
          if(craneMovableRef.current.position.z > target){
            craneMovableRef.current.position.z -= speed.get()
          } else {
            craneMovableRef.current.position.z = target
            pushBoxCycles = 6
          }
        }
        if(pushBoxCycles === 6){
          packageGroupRefs.current.forEach((boxRowRef, index) => {
            boxRowRef.children.forEach((boxRowChildRef, index) => {
              boxRowChildRef.visible = false
            })
            boxRowRef.position.x = -4.56
          })

          //Make stack appear
          if(stack1Ref){

            stack1Ref.current.children.forEach((rowRef, index) => {
              rowRef.children.forEach((single, index) => {
                single.visible = true
              })
            })
          }
          //make suction maechanism work
          suctionMechanismRef.current.children.forEach((sucker, index) => {
            let attached = {scale: 0.5, position: 9.76}
            if(sucker.scale.z > attached.scale){
              sucker.scale.z -= speed.get() * 0.277778
              sucker.position.z += speed.get() * 5.42222
              stack1Ref.current.position.z += speed.get() * 0.005
            } else {
              sucker.scale.z = attached.scale
              sucker.position.z = attached.position
              pushBoxCycles = 0
              craneCycle = 1
            }
  
          })

          
        }
        //crane Animation
        if(craneCycle === 1){
          wait = wait + speed.get() * 10
          if(wait >= 60){
            let target = -.6
            if(craneMovableRef.current.position.z < target){
              craneMovableRef.current.position.z += speed.get()
            } else {
              craneMovableRef.current.position.z = target
              craneCycle = 2
            }
          }
        }
        if(craneCycle === 2){
          wait = 0
          let target = 3
          if(craneRef.current.position.x < target){
            craneRef.current.position.x += speed.get()
          } else {
            craneRef.current.position.x = target
            craneCycle = 3
          }
        }
        if(craneCycle === 3){
          let target = cardboardFillCycle === 0?-9.8:-9.8+2.81
          if(craneMovableRef.current.position.z > target){
            craneMovableRef.current.position.z -= speed.get()
          } else {
            craneMovableRef.current.position.z = target
            craneCycle = 4
          }
        }
        // Detach stack from suction
        if(craneCycle === 4){
          suctionMechanismRef.current.children.forEach((sucker, index) => {
            let detached = {scale: 1, position: 0}
            if(sucker.scale.z < detached.scale){
              sucker.scale.z += speed.get() * 0.277778
              sucker.position.z -= speed.get() * 5.42222
              stack1Ref.current.position.z -= speed.get() * 0.005
            } else {
              sucker.scale.z = detached.scale
              sucker.position.z = detached.position
              //hide stack
              stack1Ref.current.children.forEach((rowRef, index) => {
                rowRef.children.forEach((single, index) => {
                  single.visible = false
                })
              })
              //Show cardboard contents
              if(cardboardFillCycle === 0){
                foldingCardboardRef.current.children[0].children[5+cardboardFillCycle].children.forEach((rows, index) =>{
                  rows.children.forEach((single, index) =>{
                    single.visible = true
                  })
                })
                craneCycle = 5
                
              }
              if(cardboardFillCycle === 1){
                foldingCardboardRef.current.children[0].children[5+cardboardFillCycle].children.forEach((rows, index) =>{
                  rows.children.forEach((single, index) =>{
                    single.visible = true
                  })
                })
                craneCycle = 5
                
              }
              
              
            }
          
  
          })
        }
        if(craneCycle === 5){
          let target = 0
          if(craneMovableRef.current.position.z < target){
            craneMovableRef.current.position.z += speed.get()
          } else {
            craneMovableRef.current.position.z = target
            craneCycle = 6
            if(cardboardFillCycle === 1){
              foldBoxCycle = 1
              cardboardFillCycle = 0
            }
            else{
              cardboardFillCycle = 1
            }
            
          }
        }
        if(craneCycle === 6){
          let target = -6
          if(craneRef.current.position.x > target){
            craneRef.current.position.x -= speed.get()
          } else {
            craneRef.current.position.x = target
            craneCycle = 7
          }
        }
        // Fold Box Anitmation ------------------------------------------------------------------
        if(foldBoxCycle === 1){
          let target = 40.8 
          let target2 = 35.5
          if(foldingCardboardRef.current.position.z < target){
            foldingCardboardRef.current.position.z += speed.get()
            if(foldingCardboardRef.current.position.z >= target2 && foldingCardboardRef.current.children[0].children[0].rotation.x >= -Math.PI/2){
              foldingCardboardRef.current.children[0].children[0].rotation.x -= 0.29599 * speed.get()
               
            }
          } else {
            foldingCardboardRef.current.position.z = target
            foldingCardboardRef.current.children[0].children[0].rotation.x = -Math.PI/2
            foldBoxCycle = 2
            replaceCycle = 1
          }
        }
        if(foldBoxCycle === 2){
          let target = -Math.PI / 2
          let target2 = -Math.PI / 4
          if(hookRef.current.rotation.x > target){
            hookRef.current.rotation.x -= 0.29599 * speed.get()
            if(hookRef.current.rotation.x <= target2 && foldingCardboardRef.current.children[0].children[3].rotation.x < Math.PI/2){
              foldingCardboardRef.current.children[0].children[3].rotation.x += .59198 * speed.get() 
            }
          } else {
            hookRef.current.rotation.x = target
            foldingCardboardRef.current.children[0].children[3].rotation.x = Math.PI/2
            foldBoxCycle = 3
          }
        }
        if(foldBoxCycle === 3){
          let target = Math.PI/2
          let target2 = 0.27
          let target3 = 0.8
          if(outerFlapRef.current.rotation.y > -target && centerFlapRef.current.rotation.y < target){
            outerFlapRef.current.rotation.y -= (target/6) * speed.get()
            centerFlapRef.current.rotation.y += (target/6) * speed.get()
            if(outerFlapRef.current.rotation.y < -target2 && foldingCardboardRef.current.children[0].children[1].rotation.y < target ){
              foldingCardboardRef.current.children[0].children[1].rotation.y += 0.31610 * speed.get() 
              foldingCardboardRef.current.children[0].children[2].rotation.y -= 0.31610 * speed.get() 
              if(foldingCardboardRef.current.children[0].children[1].rotation.y > target3 && hookRef.current.rotation.x < 0){
                hookRef.current.rotation.x += 0.6 * speed.get()
              }
            }
          } else {
            outerFlapRef.current.rotation.y = -target
            centerFlapRef.current.rotation.y = target
            foldingCardboardRef.current.children[0].children[1].rotation.y = target
            foldingCardboardRef.current.children[0].children[2].rotation.y = -target
            hookRef.current.rotation.x = 0

            foldingCardboardRef.current.children[0].children.slice(5,7).forEach((cols, index) =>{
              cols.children.forEach((rows, index) =>{
                rows.children.forEach((single, index) =>{
                  single.visible = false
                })
              })
            })
            foldBoxCycle = 4
          }
        }
        if(foldBoxCycle === 4){
          foldingCardboardRef.current.children[0].children.slice(0,5).forEach((cols, index) =>{
            cols.rotation.x = 0
            cols.rotation.y = 0
            cols.rotation.z = 0         
          })
          textureBoxRef.current.children[0].children.forEach((child, index) =>{
            if(child.type === "Group"){
              child.children.forEach((subChild, index) =>{
                subChild.visible = true
              })
            }
            else {
              child.visible = true
            }
          })
          foldingCardboardRef.current.position.z = 25.98
          
          textCycle = 1
          foldBoxCycle = 0
        }

        //Replace Cycle Animation
        if(replaceCycle === 1){
          let target = 25.98
          if(replacementBoxRef.current.position.z < target){
            replacementBoxRef.current.position.z += speed.get()
          } else {
            replacementBoxRef.current.position.z = target
            replaceCycle = 2
          }
        }
        if(replaceCycle === 2){
          wait2 = wait2 + speed.get() *10
          if(wait2 > 600){
            replacementBoxRef.current.position.z = -20
            replaceCycle = 3
          }
        }
        if(replaceCycle === 3){
          wait2 = 0
          let target = 13.98
          if(replacementBoxRef.current.position.z < target){
            replacementBoxRef.current.position.z += speed.get()/2
          } else {
            replacementBoxRef.current.position.z = target
          }
        }
        if(textCycle === 1){
          let target = 90
          let target2 = Math.PI/2
          let target3 = 32.2
          if(textureBoxRef.current.position.z < target){
            textureBoxRef.current.position.z += speed.get()/2
            if(textureBoxRef.current.position.z > 50 && outerFlapRef.current.rotation.y < 0 && centerFlapRef.current.rotation.y > 0){
              outerFlapRef.current.rotation.y += (target2/12) * speed.get()
              centerFlapRef.current.rotation.y -= (target2/12) * speed.get()
            }
            if(textureBoxRef.current.position.z > 48 && textureBoxRef.current.children[0].children[6].position.y < target3){
              textureBoxRef.current.children[0].children[6].position.y += speed.get()/2
            }
            if(textureBoxRef.current.children[0].children[6].position.y >= target3){
              textureBoxRef.current.children[0].children[6].visible = false
            }
          } else {
            textureBoxRef.current.children[0].children[6].position.y = 29
            outerFlapRef.current.rotation.y = 0
            centerFlapRef.current.rotation.y = 0
            textureBoxRef.current.children[0].children.forEach((child, index) =>{
              if(child.type === "Group"){
                child.children.forEach((subChild, index) =>{
                  subChild.visible = false
                })
              }
              else {
                child.visible = false
              }
            })
            textureBoxRef.current.position.z = 40.8
            textCycle = 0
          }
        } 
      }
      
    });
    

    
    
    
    return (
      <group>
        <AdaptiveDpr pixelated />
            <Suspense fallback={<Loader />}>
                <Stage  adjustCamera={false} preset={"rembrandt"} intensity={1} contactShadow={true} shadows="contact" environment="city">
                    <PerspectiveCamera makeDefault ref={View2CameraRef} position={[0,0,0]} fov={50} /> 
                 
                    <ambientLight intensity={.25} color={"#fff"} />

                    <Model forwardRef={modelRef}/>
                    <CardboardBox forwardRef={foldingCardboardRef} position={[0,-1,25.98]}/>
                    
                    <CardboardTextureBox forwardRef={textureBoxRef} position={[0,-1,40.8]}/>

                    <CardboardBoxProp forwardRef={replacementBoxRef} position={[0,-1,13.98]}/>
                    <PackageRow forwardRef={ref => (packageGroupRefs.current[0] = ref)} position={[-4.56 +((0.73304 * 1.36)*5), 12.65, -10.16]}/>
                    <PackageRow forwardRef={ref => (packageGroupRefs.current[1] = ref)} position={[-4.56 +((0.73304 * 1.36)*4), 12.65, -10.16]}/>
                    <PackageRow forwardRef={ref => (packageGroupRefs.current[2] = ref)} position={[-4.56 +((0.73304 * 1.36)*3), 12.65, -10.16]}/>
                    <PackageRow forwardRef={ref => (packageGroupRefs.current[3] = ref)} position={[-4.56 +((0.73304 * 1.36)*2), 12.65, -10.16]}/>
                    <PackageRow forwardRef={ref => (packageGroupRefs.current[4] = ref)} position={[-4.56 +((0.73304 * 1.36)*1), 12.65, -10.16]}/>
                    
                    <Package forwardRef={ref => (packageRefs.current[0] = ref)} position={[-4.56, 12.65, -10]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[1] = ref)} position={[-4.56, 12.65, -5]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[2] = ref)} position={[-4.56, 12.65, 0]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[3] = ref)} position={[-4.56, 12.65, 5]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[4] = ref)} position={[-4.56, 12.65, 10]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[5] = ref)} position={[-4.56, 12.65, 15]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[6] = ref)} position={[-4.56, 12.65, 20]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[7] = ref)} position={[-4.56, 12.65, 25]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[8] = ref)} position={[-4.56, 12.65, 30]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[9] = ref)} position={[-4.56, 12.65, 35]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[10] = ref)} position={[-4.56, 12.65, 40]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[11] = ref)} position={[-4.56, 12.65, 45]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[12] = ref)} position={[-4.56, 12.65, 50]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[13] = ref)} position={[-4.56, 12.65, 55]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[14] = ref)} position={[-4.56, 12.65, 60]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[15] = ref)} position={[-4.56, 12.65, 65]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[16] = ref)} position={[-4.56, 12.65, 70]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[17] = ref)} position={[-4.56, 12.65, 75]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[18] = ref)} position={[-4.56, 12.65, 80]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[19] = ref)} position={[-4.56, 12.65, 85]} rotation={[0, -Math.PI / 2, 0]}  />
                    <Package forwardRef={ref => (packageRefs.current[20] = ref)} position={[-4.56, 12.65, 90]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[21] = ref)} position={[-4.56, 12.65, 95]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[22] = ref)} position={[-4.56, 12.65, 100]} rotation={[0, -Math.PI / 2, 0]} />
                    <Package forwardRef={ref => (packageRefs.current[23] = ref)} position={[-4.56, 12.65, 105]} rotation={[0, -Math.PI / 2, 0]} />
                </Stage>
            </Suspense>
        </group>
    )
}

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';
import topTexture from '../textures/pallet/top.png'
import leftTexture from '../textures/pallet/left.png'
import rightTexture from '../textures/pallet/right.png'
import frontTexture from '../textures/pallet/front.png'
import backTexture from '../textures/pallet/back.png'

export function LydiaRxPalletWithCargo(props) {
  const { nodes, materials } = useGLTF('/LydiaRx_pallet-with-cargo.gltf')
  const [top] = useTexture([topTexture])
  const [front] = useTexture([frontTexture])
  const [left] = useTexture([leftTexture])
  const [right] = useTexture([rightTexture])
  const [back] = useTexture([backTexture])

  const palletGeometry = new BoxGeometry(1.14, 1.72, 0.76);
  const palletMaterials = [
        new MeshStandardMaterial({ color: 'white' }),   // Right side
        new MeshStandardMaterial({ map: left }),  // Left side
        new MeshStandardMaterial({ color: top }), // Top side
        new MeshStandardMaterial({ color: 'white' }),// Bottom side
        new MeshStandardMaterial({ map: front  }),// Front side
        new MeshStandardMaterial({ map: back  }),// BackS side
        // new MeshStandardMaterial({ map: right }),   // Right side
        // new MeshStandardMaterial({ color: 'pink' }),  // Left side
        // new MeshStandardMaterial({ color: top }), // Top side
        // new MeshStandardMaterial({ color: 'white' }),// Bottom side
        // new MeshStandardMaterial({ color: 'black' }),// Front side
        // new MeshStandardMaterial({ map: back  }),// BackS side
  ];
  return (
    <group {...props} ref={props.forwardedRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Pallet */}
        <mesh castShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <primitive object={new Mesh(palletGeometry, palletMaterials)} position={[0, 0, .9]} rotation={[Math.PI/2,0,0]}/>;
        {/* <mesh castShadow geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} position={[0, 0, 0.822]} />   */}
      </group>
      {/* <directionalLight intensity={1} decay={2} position={[5, 10, 3.165]} /> */}
    </group>
  )
}


useGLTF.preload('/LydiaRx_pallet-with-cargo.gltf')

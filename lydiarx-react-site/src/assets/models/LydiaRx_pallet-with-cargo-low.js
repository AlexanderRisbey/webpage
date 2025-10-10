import React from 'react'
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

export function LydiaRxPalletWithCargoLow(props) {

  const palletGeometry = new BoxGeometry(1.14, 1.72, 0.76);
  const palletMaterials = [
        new MeshStandardMaterial({ color: 'white' }),   // Right side
        new MeshStandardMaterial({ color: 'white' }),  // Left side
        new MeshStandardMaterial({ color: 'white' }), // Top side
        new MeshStandardMaterial({ color: 'white' }),// Bottom side
        new MeshStandardMaterial({ color: 'white'  }),// Front side
        new MeshStandardMaterial({ color: 'white'  }),// BackS side
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
        <primitive object={new Mesh(palletGeometry, palletMaterials)} position={[0, 0, .9]} rotation={[Math.PI/2,0,0]}/>;
        {/* <mesh castShadow geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} position={[0, 0, 0.822]} />   */}
      </group>
      {/* <directionalLight intensity={1} decay={2} position={[5, 10, 3.165]} /> */}
    </group>
  )
}



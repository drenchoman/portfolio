import React, {Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Cloud, Shadow } from '@react-three/drei';


export default function Three() {

  function Rig() {
  const camera = useThree((state) => state.camera)
  return useFrame((state) => {
  camera.position.z = Math.cos(state.clock.elapsedTime) * 0.2
  camera.position.x = Math.sin(state.clock.elapsedTime) * 0.3
  camera.position.y = Math.sin(state.clock.elapsedTime) * 0.2


})
  }

  
  return <div className="canvas">
    <Canvas camera={{position: [0, 0, 16], fov: 75}}>
     
      <ambientLight intensity={0.8} />
      <pointLight color='pink' position={[0, 0, -10]} />
      <Suspense fallback={null}>
        <Cloud position={[4, 2, -15]} opacity={0.8} color={'#b1f2ff'} speed={0.1}  />
        <Cloud position={[-10, -4, -15]} opacity={0.6} color={'#d8f9ff'} speed={-0.1} />
        <Cloud position={[10, -10, -15]} opacity={0.4} color={'#3cdfff'} speed={0.3} />
        <Cloud position={[-3, -5, -15]} opacity={0.1} color={'#3cdfff'} speed={0.3} />
        <Cloud position={[-12, 10, -15]} opacity={0.3} color={'#63efff'} speed={0.3} />

      </Suspense>
      <Rig />
  </Canvas>
  </div>;
}

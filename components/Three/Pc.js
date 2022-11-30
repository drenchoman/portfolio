import React from 'react'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Pc() {
  const gltf = useLoader(GLTFLoader("public/scene.gltf"))

  return (
  <>
  <primitive object={gltf.scene} scale={0.01} />
  </>
  )
}

import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'
import bg from '../../public/abstract.jpeg'
import me from '../../public/me.jpeg'

export default function Three() {
  const mountRef = useRef(null)

  useEffect(() => {
 
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
  camera.position.setZ(30)
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  mountRef.current.appendChild(renderer.domElement)
  renderer.render(scene, camera)

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }


  const meTexture = new THREE.TextureLoader().load(me.src)

  // const knot = new THREE.Mesh(
  //   new THREE.CircleGeometry(3, 64),
  //   new THREE.MeshStandardMaterial({color:'silver', metalness: 0.5, map: meTexture})
  // )
  // knot.position.setX(6.5)
  // knot.position.setY(3)
  // scene.add(knot)

  const ambientLight = new THREE.AmbientLight(0xffffff)
  scene.add(ambientLight)
  
  // const pointerLight = new THREE.PointLight(0xffffff)
  // pointerLight.position.set(10,5,10)

  // const pointHelper = new THREE.PointLightHelper(pointerLight)
  // scene.add(pointHelper)
  // scene.add(pointerLight)

const bgTexture = new THREE.TextureLoader().load(bg.src)
scene.background = bgTexture


const geometry = new THREE.BoxGeometry(6,6,6);

// each cube side gets another color
const cubeMaterials = [ 
    new THREE.MeshBasicMaterial({color:0x33AA55,  transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0x55CC00, transparent:true, opacity:0.8}), 
    new THREE.MeshBasicMaterial({color:0x000000, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0x000000, transparent:true, opacity:0.8}), 
    new THREE.MeshBasicMaterial({color:0xFFFFFF,map: meTexture, transparent:true, opacity:0.8}), 
    new THREE.MeshBasicMaterial({color:0x5555AA,  transparent:true, opacity:0.8}), 
]; 
// create a MeshFaceMaterial, allows cube to have different materials on each face 
// const cubeMaterial = new THREE.Mesh(cubeMaterials); 
const cube = new THREE.Mesh(geometry, cubeMaterials);
cube.position.setX(8)

scene.add(cube)

  // Animations

  const rotateBox = (name) => {
  const num = name.rotation.x
  
 
  
      name.rotation.x += 0.001
      name.rotation.z += 0.0009
      name.rotation.y += 0.001
      // name.rotation.y += 0.001
    
   

    //   name.rotation.y += 0.001
    
    // name.rotation.z += 0.001
  }



const moveCamera = () => {
  const m = document.querySelector('#__next')
  const t = m.getBoundingClientRect().top
  camera.position.z = 30 + t * -0.01
  camera.position.x = t * -0.002
  camera.position.y = t * -0.002
  moveCube(t)
}

const moveCube = (t) => {
  cube.position.z = t * -0.02
  cube.position.x = 8 + t * 0.015
}

document.body.onscroll = moveCamera

  const animate = () => {
    requestAnimationFrame(animate)
    // rotateBox(knot)
    rotateBox(cube)
    renderer.render(scene, camera)
  }

  window.addEventListener('resize', onWindowResize, false)
  animate()

  return () => mountRef.current.removeChild(renderer.domElement)

}, [])
  
  return (
    <div className='canvas' ref={mountRef}>
  
    </div>
  )
}

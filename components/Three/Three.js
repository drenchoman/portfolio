import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'
import bg from '../../public/abstract.jpeg'
import me from '../../public/me.jpeg'
import vc from '../../public/vc.jpg'
import ye from '../../public/ye.jpg'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {BiLike, BiLinkExternal} from 'react-icons/bi'


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

  // const controls = new OrbitControls(camera, renderer.domElement)


  const meTexture = new THREE.TextureLoader().load(me.src)
  const vcTexture = new THREE.TextureLoader().load(vc.src)

  // const knot = new THREE.Mesh(
  //   new THREE.CircleGeometry(3, 64),
  //   new THREE.MeshStandardMaterial({color:'silver', metalness: 0.5, map: meTexture})
  // )
  // knot.position.setX(6.5)
  // knot.position.setY(3)
  // scene.add(knot)

  const ambientLight = new THREE.AmbientLight(0xffffff)
  scene.add(ambientLight)
  
  // const pointerLight = new THREE.PointLight(0xFFE8E8, 0.3)
  // pointerLight.position.set(10,5,10)

  // const pointHelper = new THREE.PointLightHelper(pointerLight)
  // scene.add(pointHelper)
  // scene.add(pointerLight)

const bgTexture = new THREE.TextureLoader().load(bg.src)
scene.background = bgTexture


const geometry = new THREE.BoxGeometry(6,6,6);

// each cube side gets another color
const cubeMaterials = [ 
    new THREE.MeshStandardMaterial({color:0xFFFFFF,  transparent:true, opacity:0.5}),
    new THREE.MeshStandardMaterial({color:0xFFFFFF, transparent:true, opacity:0.5}), 
    new THREE.MeshStandardMaterial({color:0xFFFFFF, transparent:true, opacity:0.5}),
    new THREE.MeshStandardMaterial({color:0xFFFFFF, transparent:true, opacity:0.5}), 
    new THREE.MeshStandardMaterial({color:0xFFFFFF,map: meTexture, transparent:true, opacity:0.9}), 
    new THREE.MeshStandardMaterial({color:0xFFFFFF,  transparent:true, opacity:0.5}), 
]; 
// create a MeshFaceMaterial, allows cube to have different materials on each face 
// const cubeMaterial = new THREE.Mesh(cubeMaterials); 
const cube = new THREE.Mesh(geometry, cubeMaterials);
cube.position.setX(8)
cube.rotation.y = -0.5

scene.add(cube)

const pcGeo = new THREE.BoxGeometry(20, 10, 4)
const pc = new THREE.Mesh(pcGeo,[
  new THREE.MeshBasicMaterial({color: 0x5CB8E4}),
  new THREE.MeshBasicMaterial({color: 0x5CB8E4}),
  new THREE.MeshBasicMaterial({color: 0x5CB8E4}),
  new THREE.MeshBasicMaterial({color: 0x5CB8E4, }),
  new THREE.MeshBasicMaterial({color: 0xFFFFFF, map: vcTexture}),
  new THREE.MeshBasicMaterial({color: 0x5CB8E4}),
]
  )

  const stickGeo = new THREE.BoxGeometry(4, 10, 4)
  const stick = new THREE.Mesh(stickGeo,
    new THREE.MeshBasicMaterial({color: 0x5CB8E4})
    )
const baseGeo = new THREE.BoxGeometry(12, 8, 1 )
const base = new THREE.Mesh(baseGeo,
  new THREE.MeshBasicMaterial({color: 0x5CB8E4}))


stick.position.setZ(-1)


base.rotation.x = -8



const m = document.querySelector('#vc')
const b = document.querySelector('#__next')

const bRect = b.getBoundingClientRect()
const mRect = m.getBoundingClientRect()
// console.log(mRect);
// console.log(bRect)

const stickYPos = -10
const baseYPos = -15
const topPos = mRect.top * -0.07
// console.log(topPos);
// console.log(mRect.top);

pc.position.set(0,topPos,-100)
stick.position.set(0,topPos + stickYPos,-100)
base.position.set(0,topPos + baseYPos,-100)

// scene.add(pc)
// scene.add(stick)
// scene.add(base)


// const positionPc = () => {
//   const m = document.querySelector('#vc')
//   const bRect = document.body.getBoundingClientRect()
//   const mRect = m.getBoundingClientRect()
//   const offset = bRect - mRect

//   console.log(mRect.y)
//   console.log(mRect);
//   console.log(mRect.y)
//   console.log(bRect);

//   pc.position.y = -20
// }
// positionPc()

  // Animations

  const rotateBox = (name) => {
 
  
 
  
      name.rotation.x += 0.001
      name.rotation.z += 0.0009
      name.rotation.y += 0.002
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
  // console.log(t);
  // console.log(mRect.top);
  // movePc(t)
  // const zz = document.querySelector('#vc')
  // const bRect = document.body.getBoundingClientRect()
  // const mRect = zz.getBoundingClientRect().top

  // console.log(mRect);

}

const movePc = (t) => {
  
  const pcBase = pc.position.y
  const stickBase = stick.position.y
  const baseBase = base.position.y
  console.log(baseBase);
  // pc.position.z = t * -0.01
  // stick.position.z = t * -0.01
  // base.position.z = t * -0.01

  pc.position.y = pcBase + t * -0.0001
  stick.position.y = stickBase + t * -0.0001
  base.position.y = baseBase+ t * -0.0001
}

const moveCube = (t) => {
  cube.position.z = t * -0.02
  cube.position.x = 8 + t * 0.015
  cube.rotation.x = t * -0.01
}

document.body.onscroll = moveCamera

  const animate = () => {
    requestAnimationFrame(animate)
    // rotateBox(knot)
    rotateBox(cube)

    // controls.update()
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

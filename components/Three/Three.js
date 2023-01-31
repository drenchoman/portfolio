import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import vertexShader from '../../src/utils/vertexShader.glsl'
import fragmentShader from '../../src/utils/fragmentShader.glsl'
import { useTheme } from 'next-themes';
import glslify from "glslify"

export default function Three() {
  const {theme} = useTheme()
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      4.5,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    scene.background = null
    camera.position.setZ(30);
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

 
  
      const setSphere = (positionX, positionY, size, intensity) => {
        const geometry = new THREE.SphereGeometry(size, 32, 32)
        const uniforms = {
          uColor: { 
            value: new THREE.Color(0x51b1f5),
           },  
           uLightPos: {
            value: new THREE.Vector3(10, 3, 3) // array of vec3
          },
          uLightColor: {
            value: new THREE.Color(0xFFFFFF)
          },
          uLightIntensity: {
            value: intensity
          }
        }
        const material = new THREE.ShaderMaterial({
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          uniforms
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = positionX
      mesh.position.y = positionY
      return mesh
    }
    const s1 = setSphere(0, 0, 1, 0.7)
    const s2 = setSphere(2, 1, 0.5, 0.9)
    const s3 = setSphere(-2, 0.3, 0.3, 0.3)
    scene.add(s1)
    scene.add(s2)
    scene.add(s3)

    

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const pointerLight = new THREE.PointLight(0xff0000, 1, 100)
    pointerLight.position.set(30, 30, 10)
    scene.add(pointerLight)

   
    const clock = new THREE.Clock();




    function updateMesh(name) {
      if(theme =='light'){
        name.material.uniforms.uColor.value = new THREE.Color(0x51b1f5);

      } else if (theme =='dark'){
        name.material.uniforms.uColor.value = new THREE.Color(0xD18CE0)
      }

    }
   
   
    const animate = () => {
     
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime()
      camera.position.y += Math.cos(time) * 0.0003
    
      s1.position.z -= Math.sin(time) * 0.01
      s2.position.x += Math.cos(time) * 0.0005
      s3.position.z -= Math.cos(time) * 0.005
      updateMesh(s1)
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize, false);
    animate();

    let x = mountRef.current;
    return () => x.removeChild(renderer.domElement);
  }, [theme]);
  

  return <div className="canvas" ref={mountRef}></div>;
}

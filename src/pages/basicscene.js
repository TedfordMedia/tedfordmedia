 
import * as THREE from 'three'
import React, {   useRef, useMemo, Suspense} from 'react' 
import { Canvas, useFrame  } from "@react-three/fiber"  
import Layout from "../components/layoutwide" 
import RobotStarsScene from "../components/basics/robots/robotscenea" 

import {   OrbitControls   } from '@react-three/drei'
 
 
const IndexPage = (props) => (   
  <Layout displayHero={false}>  

    <section  >
      <div  style={{ height: "600px", width: "100%",background:"yellow" }}> 
    
        <Canvas style={{ height: "500px", width: "100%" }} 
          shadowMap
          shadows
          gl={{ alpha: false }}
          camera={{ position: [-1, 5, 12], fov: 20 }}
          onCreated={({ gl, camera, scene }) => {
            camera.lookAt(0, 1.2, 0)
           // scene.background = new THREE.Color('lightblue')
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}>
            <RobotStarsScene/>

{/* <LogoTedfordMedia castShadow position={[0, -3.5, 0]} rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(20), 0]} scale={[80, 80, 80] }       /> */}
            <mesh position={[0, -.5, 0]} >
                <boxBufferGeometry args={[1, 1, 1]}  attach="geometry" />
                <meshPhongMaterial color={'red'} attach="material" />
            </mesh> 
            <OrbitControls />  
        

        

          <hemisphereLight intensity={0.35}intensity={.04} />
          <directionalLight position={[137, -170, -90]}  intensity={.3} castShadow shadow-camera-zoom={2} />           <directionalLight position={[137, 170, -40]}  intensity={.25} castShadow shadow-camera-zoom={2} /> 
          <directionalLight position={[7, 19, -70]}  intensity={.6} castShadow shadow-camera-zoom={2} /> 
          <directionalLight position={[37, 50,-100]}  intensity={0.7} castShadow shadow-camera-zoom={2} />
          <directionalLight position={[37, 39, -90]}  intensity={.7} castShadow shadow-camera-zoom={2} /> 
          <directionalLight position={[-17, 19, -50]}  intensity={.4} castShadow shadow-camera-zoom={2} /> 
          <directionalLight position={[137, -170, -90]}  intensity={.3} castShadow shadow-camera-zoom={2} /> 
        </Canvas>
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  
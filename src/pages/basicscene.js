 
import * as THREE from 'three'
import React, {   useRef, useMemo, Suspense} from 'react' 
import { Canvas, useFrame  } from "@react-three/fiber"  
import Layout from "../components/layoutwide" 
import {Stars, Icosahedron, Html , OrbitControls, useMatcapTexture, Environment} from '@react-three/drei'
 
import Robot from "../helpers/Robot6.js";
 
const IndexPage = (props) => (   
  <Layout displayHero={false}>  

    <section  >
      <div  style={{ height: "600px", width: "100%",background:"yellow" }}> 
    
        <Canvas style={{ height: "500px", width: "100%" }} 
          shadowMap
          shadows
          gl={{ alpha: false }}
          camera={{ position: [-1, 5, 30], fov: 20 }}
          onCreated={({ gl, camera, scene }) => {
            camera.lookAt(0, 0, 0)
           // scene.background = new THREE.Color('lightblue')
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}>

{/* <LogoTedfordMedia castShadow position={[0, -3.5, 0]} rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(20), 0]} scale={[80, 80, 80] }       /> */}
            <mesh  >
                <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
                <meshPhongMaterial color={'red'} attach="material" />
            </mesh> 
            <OrbitControls />  
            <Stars/>

            <Suspense fallback={<Html>loading..</Html>}>    
                <Robot/>
            </Suspense>

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
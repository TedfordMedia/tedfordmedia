 
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
          camera={{ position: [-1, 1.1, 4], fov: 30 }}
          onCreated={({ gl, camera, scene }) => { 
            // gl.toneMapping = THREE.ACESFilmicToneMapping
            // gl.outputEncoding = THREE.sRGBEncoding
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}>

          <RobotStarsScene/> 
          <OrbitControls target={[0,.8,0]}/>   
 
        </Canvas>
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  
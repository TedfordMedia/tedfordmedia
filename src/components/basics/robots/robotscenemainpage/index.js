import React, { Suspense } from 'react' 
import Robotdance from "../../../../helpers/Robot6dance.js";
import Robot from "../../../../helpers/Robot6dance.js";
import { Html, Stars   } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"  
import * as THREE from 'three'
import MyFloor from "../../../../components/basics/flooring/bluecubeish"; 
import LogoTedfordMedia from "../../../../helpers/Tedmedialogotedb.js"; 
import SurgeonModel from "../../../../helpers/Surgeon2.js"; 
  
function Dolighting({ brightness, color }) {
  return (
    <group name="lighting">
      <hemisphereLight intensity={.02} />
      <directionalLight position={[67, 19, 127]}  intensity={.2} castShadow shadow-camera-zoom={2} /> 
      <directionalLight position={[67,30,50]}  intensity={0.2} castShadow shadow-camera-zoom={2} />
      <directionalLight position={[-57, 30,40]}  intensity={0.2} castShadow shadow-camera-zoom={2} /> 
      <spotLight lookAt={[0, -10, 2]} position={[-20, 0, 3]} color={'white'} intensity={.3} />
    </group>
  );
}

const RobotStarsSceneNew = ({ props }) => (
    <Canvas 
        style={{ height: "100%", width: "100%" }} 
        shadowMap
        shadows
        gl={{ alpha: false }}
        camera={{ position: [-3, 1.1, 4.5], fov: 30 }}
        onCreated={({ gl, camera, scene }) => { 
            // gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }}>
        <group position={[0, -.6, 0]} >
           
            <MyFloor/>
            <Stars/>
            <Dolighting/>

            <Suspense fallback={null}>    
                <Robot position={[0, 0, -.25]} scale={[.7, .7, .7]} castShadow/>  
            </Suspense>   

            <Suspense fallback={null}>   
                <LogoTedfordMedia position={[-.57, -.045, .51]} scale={[140, 140, 140]} castShadow/>  
            </Suspense> 
            <OrbitControls/>
            <Suspense fallback={null}>    
               <SurgeonModel/>
            </Suspense>
        </group> 
    </Canvas>
)

export default RobotStarsSceneNew
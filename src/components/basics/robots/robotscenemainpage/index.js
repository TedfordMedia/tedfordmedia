import React, { Suspense } from 'react' 
import Robotdance from "../../../../helpers/Robot6dance.js";
import Robot from "../../../../helpers/Robot6dance.js";
import { Html, Stars   } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
import { Canvas,useFrame } from "@react-three/fiber"  
import * as THREE from 'three'
import MyFloor from "../../../../components/basics/flooring/bluecubeish"; 
import LogoTedfordMedia from "../../../../helpers/Tedmedialogotedb.js"; 
// import Mixabot from "../../../../helpers/Helmety2.js"; 
// import Model from "../../../../helpers/Sentry.js";
function Dolighting({ brightness, color }) {
  return (
    <group name="lighting">
      <hemisphereLight intensity={.1} />
      <directionalLight position={[67, 19, 127]}  intensity={.4} castShadow shadow-camera-zoom={2} /> 
      <directionalLight position={[67,30,50]}  intensity={0.2} castShadow shadow-camera-zoom={2} />
      <directionalLight position={[-57, 30,40]}  intensity={0.2} castShadow shadow-camera-zoom={2} /> 
      {/* <spotLight lookAt={[0, -10, 2]} position={[-20, 0, 3]} color={'white'} intensity={.3} /> */}
    </group>
  );
}

function moveTheCameraTween(camera){
  console.log('tween camera');

//  position: [-3, 1.1, 4.5]

}
function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
  })
  return null
}

const RobotStarsSceneNew = ({ props }) => (
    <Canvas 
        style={{ height: "100%", width: "100%" }} 
        shadowMap
        shadows
        gl={{ alpha: false }}
        camera={{ 
          position: [-3, 1.1, 4.5], 
          fov: 30 ,  
          near: 0.01,
          far: 3000
        }}
        
        onCreated={({ gl, camera, scene }) => { 
            // gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          //  moveTheCameraTween(camera);
    }}>
         {/* <Dolly /> */}
        <group position={[0, -.6, 0]} >
           
            <MyFloor/>
            <Suspense fallback={null}>   
              <group position={[1.4, -7, -5.25]}>
                {/* <Model  scale={[.03,.03,.03]} /> */}
              </group>
            </Suspense>
            <Stars/>
            <Dolighting/>

            <Suspense fallback={null}>    
                <Robot position={[0, 0, -.25]} scale={[1,1,1]} castShadow/>  
            </Suspense>   

            <Suspense fallback={null}>   
                <LogoTedfordMedia position={[-.57, -.045, .51]} scale={[140, 140, 140]} castShadow/>  
            </Suspense>   
        </group> 
    </Canvas>
)

export default RobotStarsSceneNew
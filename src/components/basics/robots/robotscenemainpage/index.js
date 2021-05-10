import React, { Suspense } from 'react' 
import Robotdance from "../../../../helpers/Robot6dance.js";
import Robot from "../../../../helpers/Robot6.js";
import { Html,   Stars   } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"  
import * as THREE from 'three'
import MyFloor from "../../../../components/basics/flooring/bluecubeish"; 

const RobotStarsSceneNew = ({ author, noSubscribeForm }) => (
    <Canvas style={{ height: "100%", width: "100%" }} 
    shadowMap
    shadows
    gl={{ alpha: false }}
    camera={{ position: [-3, 1.1, 5], fov: 30 }}
    onCreated={({ gl, camera, scene }) => { 
        // gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }}>
        <group position={[0, -.5, 0]} >
            <hemisphereLight intensity={.04} />
            <directionalLight position={[67, 19, 127]}  intensity={.2} castShadow shadow-camera-zoom={2} /> 
            <directionalLight position={[67,30,50]}  intensity={0.3} castShadow shadow-camera-zoom={2} />
            <directionalLight position={[-57, 30,40]}  intensity={0.3} castShadow shadow-camera-zoom={2} />
 
            <MyFloor/>

            <Stars/>
            <Suspense fallback={<Html></Html>}>    
                <Robot position={[0, 0, -.25]} castShadow/> 
                {/* <Robotdance     castShadow/> */}
            </Suspense>  
            {/* <OrbitControls target={[0,.8,0]}/>    */}
        </group> 
    </Canvas>
)

export default RobotStarsSceneNew
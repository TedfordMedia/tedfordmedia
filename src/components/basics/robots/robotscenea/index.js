import React, { Suspense } from 'react' 
import Robot from "../../../../helpers/Robot6.js";
import { Html,   Stars   } from '@react-three/drei';

const RobotStarsScene = ({ author, noSubscribeForm }) => (
    <group>
        <hemisphereLight intensity={.04} />
        <directionalLight position={[67, 19, 127]}  intensity={.2} castShadow shadow-camera-zoom={2} /> 
        <directionalLight position={[67,30,50]}  intensity={0.3} castShadow shadow-camera-zoom={2} />
        <directionalLight position={[-57, 30,40]}  intensity={0.3} castShadow shadow-camera-zoom={2} />
        <mesh castShadow receiveShadow position={[0, -.5, 0]} >
            <boxBufferGeometry args={[1, 1, 1]}  attach="geometry" />
            <meshPhongMaterial color={'red'} attach="material" />
        </mesh> 
        <Stars/>
        <Suspense fallback={<Html></Html>}>    
            <Robot castShadow/> 
        </Suspense> 
    </group> 
)

export default RobotStarsScene 
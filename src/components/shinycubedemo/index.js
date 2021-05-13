import React, { Suspense } from 'react' 
 
import Robot from "../../helpers/Robot6dance.js";
import { Html, Stars   } from '@react-three/drei';
import { OrbitControls, Environment, useTexture, useCubeTexture } from '@react-three/drei'
import { Canvas,useFrame, useRef, useThree } from "@react-three/fiber"  
import * as THREE from 'three'
import MyFloor from "../../components/basics/flooring/bluecubeish"; 
import LogoTedfordMedia from "../../helpers/Tedmedialogotedb.js"; 
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
function TheCurveThing(){
 
  // const [ref] = useRef() 
  // const { gl, scene } = useThree() 
   const myytexture = useTexture('./images/squareAroughbw.png') 
  // const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: './images/gym/' })
 
  // scene.background = envMap;
  // scene.environment = envMap; 

  

  return (
    <> 
      <group position={[0, 0, 2]}> 
        <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial metalness={1}     roughness={0}  /> 
        </mesh> 
      </group> 
    </>
  )
}

const RobotStarsSceneNew = ({ props }) => (
    <Canvas 
        style={{ height: "100%", width: "100%" }} 
        shadowMap
        shadows
        gl={{ alpha: false }}
        camera={{ 
          position: [0, 1.1, 8.5], 
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
         <Suspense>
           <TheCurveThing/>
         </Suspense>

         
        <group position={[0, -.6, 0]} >
           
            <MyFloor/>
            <Suspense fallback={null}> 
            <Environment preset="dawn"   background />

            {/* sunset: string;
    dawn: string;
    night: string;
    warehouse: string;
    forest: string;
    apartment: string;
    studio: string;
    city: string;
    park: string;
    lobby: string; */}


            </Suspense>


            <Dolighting/>

            <Suspense fallback={null}>    
                {/* <Robot position={[0, 0, -.25]} scale={[1,1,1]} castShadow/>   */}
            </Suspense>   

            <Suspense fallback={null}>   
                <LogoTedfordMedia position={[-.57, -.045, .51]} scale={[140, 140, 140]} castShadow/>  
            </Suspense> 

            <OrbitControls/>
            {/* <Suspense fallback={null}>    
               <Mixabot position={[-.6, 0, -.2]} />
            </Suspense> */}

 
        </group> 
    </Canvas>
)

export default RobotStarsSceneNew
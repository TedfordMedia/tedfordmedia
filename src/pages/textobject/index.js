import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Text , OrbitControls} from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'
import Layout from "../../components/layoutwidellh"   
import Roboto from '/static/helvetiker_regular.typeface.json';
 
const DISPLAY_TEXT = 'TedfordMedia';
  
function MyTextGeom({ clicked, ...props }) { 
  const font = new THREE.FontLoader().parse(Roboto);
  const DISPLAY_TEXT = 'TedfordMedia 3D';
 
  const textOptions = {
    font,
    size: 5,
    height: 1
  }; 

  return ( 

    <mesh>
      <textGeometry attach='geometry' args={[DISPLAY_TEXT, textOptions]} />
      <meshStandardMaterial attach='material' color={"lightblue"}/>
    </mesh>

  )
}

function MyflatText({ clicked, ...props }) {  
    return (
       <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      Drei 2d text I am
      <meshBasicMaterial color="green" > 
      </meshBasicMaterial>
    </Text> 
  )
}

function Dolighting({ brightness, color }) {
  return (
    <group name="lighting">
      <hemisphereLight intensity={.1} />
      <directionalLight position={[67, 19, 127]}  intensity={.4} castShadow shadow-camera-zoom={2} /> 
      <directionalLight position={[67,30,50]}  intensity={0.2} castShadow shadow-camera-zoom={2} />
      <directionalLight position={[-57, 30,40]}  intensity={0.2} castShadow shadow-camera-zoom={2} />  
    </group>
  );
}
 
const MyPage = (props) => {

  return(
    <Layout  css={css`  
      `}>    
      <div  className={'mydiv'}       
        css={css` 
        height: 100%;
        overflow: hidden;
      `}>  
        <Canvas 
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
          <Suspense fallback={null}>
            <MyTextGeom/>            
          </Suspense>
          <Dolighting/>
          <Suspense fallback={null}>
            <MyflatText/>            
          </Suspense> 

          <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)}
  
export default MyPage  
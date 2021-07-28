import * as THREE from 'three'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Text , OrbitControls} from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'
import Layout from "../../components/layoutwidellh"   
import Roboto from '/static/helvetiker_regular.typeface.json';
import { gsap } from "gsap";  
import { useSpring, animated } from 'react-spring/three'


function MyTextGeom({ clicked, ...props }) { 
  const font = new THREE.FontLoader().parse(Roboto);
  const DISPLAY_TEXT = '3D Text!';  
  const ref = useRef() 
 
  const textOptions = {
    font,
    size: 5,
    height: 1
  }; 
  
  useFrame((state, delta) => { 
    if (props.isAlt){
      ref.current.rotation.y += 0.001
    } 
   
  
  })

  useEffect((state, delta) => { 

    var tl = gsap.timeline();
 
    if (props.isAlt){
      tl 
        .to( ref.current.rotation, {
          duration: 140,  
          x: Math.PI, 
          y: Math.PI, 
          z: Math.PI,
      })
    }  
  
  })

  return ( 
    <group name="xxx"  ref={ref}  {...props}> 
    <mesh>
      <textGeometry attach='geometry' args={[DISPLAY_TEXT, textOptions]} />
      <meshStandardMaterial attach='material' color={"lightblue"}/>
    </mesh>
    </group>
  )
}

function MyflatText({ clicked, ...props }) {  
  const ref = useRef()
  
  useEffect((state, delta) => { 
    gsap
      .to( ref.current.rotation, {
        duration: 240,  
        x: 0, 
        y: Math.PI/3,   
        z: 0,
    })    

  })
 
  return (
    <group name="xxx"  ref={ref} {...props}>
       <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
        2D Text from react-three/drei
        <meshBasicMaterial color="green" />  
      </Text> 
    </group>
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

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 30 + Math.sin(clock.getElapsedTime()) * 2
  })
  return null
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
            camera={{ position: [0, 5, 80], fov: 55, near: 1, far: 20000 }}>

          <Suspense fallback={null}>
            <MyTextGeom position={[-15,0,0]}/>   
            <MyTextGeom isAlt={true} position={[15,10,0]}/>            
          </Suspense>
          <Dolighting/>

          <Suspense fallback={null}>
            <MyflatText position={[0,0,0]} />            
          </Suspense> 

          {/* <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/> */}
          <Dolly />
        </Canvas>
      </div> 
  </Layout> 
)}
  
export default MyPage  
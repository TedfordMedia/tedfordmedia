import * as THREE from 'three'
import React, { Suspense, useRef, useMemo , useState,useEffect} from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, useTexture, Html, Stars } from '@react-three/drei' 
import { css } from '@emotion/core'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Layout from "../../components/layoutwidellh"   
import Robot from "../../helpers/Robot6dance.js";
import Effects from './Effects'
import LogoTedfordMedia from "../../helpers/Tedmedia3dlogo"; 
var i = 0;
  
 
const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas gl={{ antialias: false }} dpr={1} camera={{ position: [-7, 3, 10], fov: 30 }} style={{ height: "100%", width: "100%" }}>

          <ambientLight intensity={.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Suspense fallback={null}>   
              <LogoTedfordMedia position={[10, 1, -10]} scale={[20, 20, 20]} rotation={[Math.PI/2, 0, 0]} castShadow/>  
          </Suspense>   
          <OrbitingBoxes />
          <Effects />
        </Canvas>
      </div> 
  </Layout> 
)
  
export default MyPage  

 
// import React, { useEffect, useRef, useState } from 'react'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={hovered ? 'hotpink' : props.color} />
    </mesh>
  )
}

const OrbitingBoxes = () => {
  const [t, setT] = useState(0)
  useFrame(() => {
    setT(t + 0.01)
  })

  const r = .5 * (Math.sin(t * 0.5) + 2) * 2.5

  return (
    <>
      <Box position={[r * Math.cos(t), r * Math.sin(t), 0]} color="#FF5555" />
      <Box position={[r * Math.cos(t + (Math.PI / 3) * 2), r * Math.sin(t + (Math.PI / 3) * 2), 0]} color="#55BB55" />
      <Box position={[r * Math.cos(t + (Math.PI / 3) * 2 * 2), r * Math.sin(t + (Math.PI / 3) * 2 * 2), 0]} color="#5555FF" />
    </>
  )
} 
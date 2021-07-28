import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'
import { Fire } from './shaders/Fire'

 
 import Layout from "../../components/layoutwidellh"  
// import { Canvas, useFrame} from "@react-three/fiber"
// import { Stars, Html, OrbitControls, useLoader, useTexture, Text } from '@react-three/drei';
// import * as THREE from 'three'




extend({ Water })
 

function Box() {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 200
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })
  return (
    <mesh ref={ref} scale={20}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}


const MyPage = (props) => (   
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
            <pointLight position={[100, 100, 100]} />
        
            <Suspense fallback={null}>
           
                <Fire />
            </Suspense>
            <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
            <OrbitControls />
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
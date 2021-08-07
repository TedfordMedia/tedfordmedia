import * as THREE from 'three'
import React, { Suspense, useRef, useMemo , useState,useEffect} from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture, Html } from '@react-three/drei' 
import { css } from '@emotion/core'
 
import Layout from "../../components/layoutwidellh"   
import Picframe from "./Pictureandframe";
import { gsap } from "gsap";  

 
 
function Brickwall({ ...props }) {
  
    // walls
    const diffuseTex = useLoader(THREE.TextureLoader, './textures/brick_diffuse.jpg')
    
    const bumpTex = useLoader(THREE.TextureLoader, './textures/brick_bump.jpg')
   
    return (
        <group position={[0, 0, 0]} > 
                <mesh castShadow receiveShadow position={[0, 0, 0]}>
                    <boxBufferGeometry args={[1,1,1]}   /> 
                    <meshPhysicalMaterial roughness={0} bumpScale={.3} color={"white"} map={diffuseTex} bumpMap={bumpTex}/>
                </mesh>  
                <Picframe position={[.2,.1,0]}/>
                <Picframe position={[-.2,.1,0]}/> 
                {/* <mesh castShadow receiveShadow position={[-.25, 0, .51]}>
                    <boxBufferGeometry args={[.3,.3,.02]}   /> 
                    <meshStandardMaterial roughness={0} bumpScale={.3} color={"pink"}  />
                </mesh>  

                <Picframe position={[-.2,.2,.51]}   rotation={[0, Math.PI, 0]} scale={.3}>        <meshPhysicalMaterial roughness={0} bumpScale={.3} color={"white"} map={diffuseTex} bumpMap={bumpTex}/></Picframe> */}
        </group>
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
            style={{ height: "100%", width: "100%" }}  lookAt={[0, -10, 2]} 
            camera={{ position: [0, 0, 1.5], fov: 55, near: .01, far: 400 }}>
            <pointLight position={[100, 100, 100]} intensity={0.1}/>
            <pointLight position={[-100, -100, -100]} />
            <ambientLight intensity={.5} />

            <Suspense fallback={<Html><h1 style={{color:'blue'}}>Loading...</h1></Html>}>  
                <Brickwall/>
                {/* <Box />  */}
            </Suspense>
           
            <Stars />
            <OrbitControls  maxDistance={50} maxPolarAngle={2}  />
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
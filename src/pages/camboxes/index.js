import * as THREE from 'three'
import React, { Suspense, useRef} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei' 
import { css } from '@emotion/core'
import Layout from "../../components/layoutwidellh"   
import Picframe from "./Pictureandframe"; 
import { a, useSpring } from '@react-spring/three'
 
 import { gsap } from "gsap";   
function Brickwall({ ...props }) {
   
    const diffuseTex = useLoader(THREE.TextureLoader, './textures/brick_diffuse.jpg')
    const bumpTex = useLoader(THREE.TextureLoader, './textures/brick_bump.jpg')
    const ref = useRef()  
  
    return (
        <group  ref={ref} position={[0, 0, 0]} > 
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                <boxBufferGeometry args={[1,1,1]}   /> 
                <meshPhysicalMaterial roughness={0} bumpScale={.3} color={"white"} map={diffuseTex} bumpMap={bumpTex}/>
            </mesh>  
            <Picframe position={[.2,.1,0]} isAlt camposition={[0,0,1]}/>
            <Picframe position={[-.2,.1,0]} camposition={[0,0,1]}/>
        </group>
    )
}

const MyPage = (props) => (   
 <Layout  
    css={css`  
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
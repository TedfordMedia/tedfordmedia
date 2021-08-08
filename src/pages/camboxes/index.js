import * as THREE from 'three'
import React, { Suspense, useRef} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Html } from '@react-three/drei' 
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
        <group  ref={ref} position={[0, 0, 1]} rotation-y={Math.PI } > 
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                <boxBufferGeometry args={[1,1,1]}   /> 
                <meshPhysicalMaterial roughness={1} bumpScale={.9} color={"white"} map={diffuseTex}  bumpMap={bumpTex} />
            </mesh>  
            <Picframe position={[.2,.1,0]} isAlt camposition={[.1,.1,-.1]}/>
            <Picframe position={[-.2,.1,0]} camposition={[-.1,0,-.1]}/>
        </group>
    )
}
function Dolighting({  }) {
  return (
    <group name="lighting">
        {/* <pointLight position={[100, 100, 100]} intensity={0.1}/>
        <pointLight position={[-100, -100, -100]} />
        <ambientLight intensity={.5} />  */}
    </group>
  );
}
const MyPage = (props) => (   

    <Layout  
        css={css`  
        `}>    
         <div  
            className={'mydiv'}       
            css={css` 
            height: 100%;
            overflow: hidden;
        `}>  
         
        <Canvas  lookAt={[0, 5,0]}
            camera={{
                position: [0, 0, -.01],
                fov: 75,
                near: 0.01,
                far: 100
            }}
            onCreated={({ gl, camera, scene }) => {  
              gl.outputEncoding = THREE.sRGBEncoding
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;  
          }}
          style={{ height: "100%", width:  "100%" }}>   
 
            <Suspense fallback={null}> 
              <Environment preset="dawn"   background /> 
            </Suspense>

            <Dolighting/>

            <Suspense fallback={<Html><h1 style={{color:'blue'}}>Loading...</h1></Html>}>  
                <Brickwall/> 
            </Suspense>
              
            <OrbitControls  enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
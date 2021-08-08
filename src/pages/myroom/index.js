
import React, { Suspense, useState , useRef  } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, useTexture,   Sky, Html } from '@react-three/drei' 
import { css } from '@emotion/core'
import Room from "../../helpers/Myroomchill"; 
 import Layout from "../../components/layoutwidellh"  
import * as THREE from 'three'
 
function Box() {
  
  const ref = useRef() 
  return (
    <mesh position={[0,0,0]} ref={ref} castShadow receiveShadow scale={1}>
      <boxGeometry />
      <meshStandardMaterial  color={"blue"}   />
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
        {/* <Canvas lookAt={[0, 2, 0]} */}
          
 
         


             <Canvas  
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
                    // const fogColor = new THREE.Color(0x000000);
                    // scene.fog = new THREE.Fog(fogColor, .0025, 80);
                    // scene.background = new THREE.Color( 0xa0a0a0 ); 
                }}
                style={{ height: "100%", width:  "100%" }}>




            <pointLight position={[-8, 3, 4]} />
            <ambientLight intensity={.3} />
            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}> 
            <Box/>           </Suspense>
            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
              <group 
                    scale={[1,1,1]}  
                    //rotation={[0, -Math.PI , 0]} 
                    position={[-3, -1.2,6]} > 
                <Room/> 
              </group>
            </Suspense>
            
            <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                  <OrbitControls  enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
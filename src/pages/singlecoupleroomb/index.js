import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls,   Html   } from '@react-three/drei'
 
import { css } from '@emotion/core'
 
import EnvSingleCouple from "../../helpers/Env_SwankyOffice.js";  

import Layout from "../../components/layoutwidellh"  
 
 


const MyPage = (props) => (   
  <Layout>    
    <div  
      className={'mydiv'}       
      css={css` 
      height: 100%;
      overflow: hidden;
    `}>  
      <Canvas 
          shadows 
          camera={{    
            position: [0, 0, .01],
            fov: 75,
            near: 0.01,
            far: 100}
          } 
          onCreated={({ gl, camera, scene }) => {  
            // scene.background = new THREE.Color( 0xa2b9e7 ); 
          }
        }>
  
          <Suspense fallback={<Html></Html>}>  
            <group rotation-z={0}  rotation-y={0}  position={[-2, -1.8, 3]}> 
              <EnvSingleCouple/>
            </group>
          </Suspense>  
          <OrbitControls       
            target={[0,0,0]}  
            enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
      </Canvas>
    </div>
  </Layout> 
)
  
export default MyPage  
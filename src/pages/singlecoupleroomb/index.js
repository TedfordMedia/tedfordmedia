import * as THREE from 'three'
import React, { Suspense  } from 'react'
import { Canvas  } from '@react-three/fiber'
import { OrbitControls, useTexture, Html, softShadows, Shadow  } from '@react-three/drei'
 
import { css } from '@emotion/core'
 
import EnvSingleCouple from "../../helpers/ENV1_Family.js";  

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
  
          <Suspense fallback={<Html>Loading.....</Html>}>   
            <EnvSingleCouple/> 
          </Suspense>  
   
          <OrbitControls target={[0,0,0]}  enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
      </Canvas>
    </div>
  </Layout> 
)
  
export default MyPage  
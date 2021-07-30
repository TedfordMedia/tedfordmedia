
import React, { Suspense  } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky,   Html } from '@react-three/drei' 
import { css } from '@emotion/core'
import Corridoor from "../../helpers/Corridoor.js"; 
import Layout from "../../components/layoutwidellh"  
import * as THREE from 'three'
const MyPage = (props) => (   
 <Layout  css={css`  
      `}>    
      <div  className={'mydiv'}       
        css={css` 
        height: 100%;
        overflow: hidden;
      `}>  
        <Canvas 
            onCreated={({ gl, camera, scene }) => {  
                gl.outputEncoding = THREE.sRGBEncoding
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap; 
                const fogColor = new THREE.Color(0x000000);
                scene.fog = new THREE.Fog(fogColor, .0025, 80);
                scene.background = new THREE.Color( 0xa0a0a0 ); 
            }}
            style={{ height: "100%", width: "100%" }}  lookAt={[0, -10, 2]} 
            camera={{ position: [0, 1.5, 0], fov: 50, near: 1, far: 100 }}>
            {/* <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} /> */}
            <ambientLight intensity={.5} />
  
            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
              <group position={[0, -1, 0]}> 
                <Corridoor/> 
              </group>
            </Suspense>

            {/* <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} /> */}
            <OrbitControls  maxDistance={20} maxPolarAngle={Math.PI / 2}  />
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
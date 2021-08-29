import * as THREE from 'three'
import * as TMT from '/static/TMTools.js'; 
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls,   Html, Environment   } from '@react-three/drei'
 
import { css } from '@emotion/core'
 
import EnvSingleCouple from "../../helpers/Env_SwankyOffice5.js";   
import Layout from "../../components/layoutwidellh"   

const masterTool = new TMT.masterTool(); 
masterTool.start();  




const MyPage = (props) =>  {

  console.log('hello');

  return (

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
            scene.background = new THREE.Color( 0x00ff00 ); 
          }
        }>
  
          <Suspense fallback={<Html>Loading</Html>}>  
            <group     position={[-1.3, -1.8, 0]}> 
              <EnvSingleCouple   />
            </group>
            <Environment preset="forest"   background /> 
          </Suspense>  

  
          <OrbitControls       
            target={[0,0,0]}  
            enableZoom={false} enablePan={true} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
      </Canvas>
    </div>
  </Layout> 
)}
  
export default MyPage  
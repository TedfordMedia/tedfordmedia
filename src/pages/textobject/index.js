import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Text , OrbitControls} from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'
import Layout from "../../components/layoutwidellh"   
import Roboto from '/static/helvetiker_regular.typeface.json';
 
const DISPLAY_TEXT = 'TedfordMedia';
 

function MyThing2({ clicked, ...props }) { 
   const font = new THREE.FontLoader().parse(Roboto);

 const textOptions = {
    font,
    size: 5,
    height: 1
  };
  // const Myfont = useLoader(
  //   THREE.FontLoader,
  //   'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json'
  // );

//  const Myfont = useLoader(
//     THREE.FontLoader,
//     './Inter-Bold.woff'
//   );
  // useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return ( 

   <mesh>
        <textGeometry attach='geometry' args={['three.js', textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh>

  )
}
function MyThding2({ clicked, ...props }) {  
    return (
       <Text font="/Inther-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      Drei 2d text I am
      <meshBasicMaterial color="green" > 
      </meshBasicMaterial>
    </Text> 
  )
}

const MyPage = (props) => {
  const DISPLAY_TEXT = 'TedfordMedia';

 


  return(
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
          <Suspense fallback={null}>
            <MyThing2/>            
          </Suspense>
 
          <Suspense fallback={null}>
            <MyThding2/>            
          </Suspense> 

          <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)}
  
export default MyPage  
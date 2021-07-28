import * as THREE from 'three'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Text , OrbitControls} from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'
import Layout from "../../components/layoutwidellh"   
import Roboto from '/static/helvetiker_regular.typeface.json';
import { gsap } from "gsap"; 

const DISPLAY_TEXT = 'TedfordMedia';
  
function MyTextGeom({ clicked, ...props }) { 
  const font = new THREE.FontLoader().parse(Roboto);
  const DISPLAY_TEXT = '3D Text!';
 
  const textOptions = {
    font,
    size: 5,
    height: 1
  }; 

  return ( 
    <group name="xxx"  position={[-10,0,0]}> 
    <mesh>
      <textGeometry attach='geometry' args={[DISPLAY_TEXT, textOptions]} />
      <meshStandardMaterial attach='material' color={"lightblue"}/>
    </mesh>
    </group>
  )
}

function MyflatText({ clicked, ...props }) {  
  const ref = useRef()

  useEffect((state, delta) => {
    // ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
   // ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta;
 
   gsap.to( ref.current.position, {
      duration: 30,  
      x: ref.current.position.x,
      y: ref.current.position.y+10,
      z: ref.current.position.z+0, 
    }).reverse();;  


  })



  // useEffect(() => {
  //   if (texture && curve && curve.points && tube && tube.current) {
  //     //timeline animation
  //     gsap.registerPlugin(TimelineMax)
  //     const hyperSpace = new TimelineMax({ repeat: -1 })
  //     hyperSpace.to(texture, 4, { repeatX: 0.3, ease: Power1.easeInOut })
  //     hyperSpace.to(textureParams, 4, { repeatX: 0.3, ease: Power1.easeInOut })
  //     hyperSpace.to(textureParams, 12, { offsetX: 8, ease: Power2.easeInOut }, 0)
  //     hyperSpace.to(textureParams, 6, { repeatX: 10, ease: Power2.easeInOut }, "-=5")
  //     const shake = new TimelineMax({ repeat: -1, repeatDelay: 5 })
  //     shake.to(
  //       cameraShake,
  //       2,
  //       {
  //         x: -0.01,
  //         ease: RoughEase.ease.config({
  //           template: Power0.easeNone,
  //           strength: 0.5,
  //           points: 100,
  //           taper: "none",
  //           randomize: true,
  //           clamp: false,
  //         }),
  //       },
  //       4,
  //     )
  //     shake.to(cameraShake, 2, {
  //       x: 0,
  //       ease: RoughEase.ease.config({
  //         template: Power0.easeNone,
  //         strength: 0.5,
  //         points: 100,
  //         taper: "none",
  //         randomize: true,
  //         clamp: false,
  //       }),
  //     })
  //   }
  // }, [])






    return (
    <group name="xxx"  ref={ref} position={[0,-10,0]}>
       <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
        2D Text from react-three/drei
        <meshBasicMaterial color="green" />  
      </Text> 
    </group>
  )
}

function Dolighting({ brightness, color }) {
  return (
    <group name="lighting">
      <hemisphereLight intensity={.1} />
      <directionalLight position={[67, 19, 127]}  intensity={.4} castShadow shadow-camera-zoom={2} /> 
      <directionalLight position={[67,30,50]}  intensity={0.2} castShadow shadow-camera-zoom={2} />
      <directionalLight position={[-57, 30,40]}  intensity={0.2} castShadow shadow-camera-zoom={2} />  
    </group>
  );
}
 
const MyPage = (props) => {

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
            camera={{ position: [0, 5, 80], fov: 55, near: 1, far: 20000 }}>
          <Suspense fallback={null}>
            <MyTextGeom/>            
          </Suspense>
          <Dolighting/>
          <Suspense fallback={null}>
            <MyflatText/>            
          </Suspense> 

          <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)}
  
export default MyPage  
import React , {  useEffect, Suspense, useRef} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Html, OrbitControls, useCubeTexture, useTexture } from '@react-three/drei';
//import { a, useSpring } from '@react-spring/three'
import Model from "../../helpers/Sentry.js"; 
import gsap from "gsap";
import { useTransition } from '@react-spring/core';
 
 function TheCurveThing(){
//  constructor(props){
//     super(props);
//     this.myElement = null;
//    this.myTween = TimelineLite({paused: true});
//   }
 const ref = useRef()
  
// console.dir(ref)
 
   const {   scene   } = useThree() 
   const myytexture = useTexture('./images/squareAroughbw.png') 
   const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: './images/gym/' })
 
   scene.background = envMap;
   scene.environment = envMap; 

   useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.002))
  
  return (
    <> 
      <group position={[0, 0, 2]} ref={ref}> 
        <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial metalness={1} color={'green'} roughnessMap={myytexture} roughness={1} envMap={envMap} /> 
        </mesh> 
      </group> 
    </>
  )
}
function Box({position, color}) {
  const ref = useRef()

  useEffect(() => {  
    console.log('useEff')

    gsap.to( ref.current.position, {
      duration: 30,  
      x: 10,
      y: 0,
      z: 3,
    //  repeat:-1,
    }); 
    // gsap.to( ref.current.position, {
    //   duration: 20,
    //   delay: 20,  
    //   x: 0,
    //   y: 2,
    //   z: 3,
    //   repeat:-1,
    // }); 
    
  })

    // gsap.to( camera.position, {
  //   duration: 10,  
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   onUpdate: function () {
  //     camera.updateProjectionMatrix();
  //     // controls.update();
  //   }
  // }); 


  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={color} attach="material" />
    </mesh>
  )
}
function Dolly() {

  const ref = useRef()
 const {   camera } = useThree() 
  // This one makes the camera move in and out
//  camera.position.z = -450
 
   
  // gsap.to( camera.position, {
  //   duration: 10,  
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   onUpdate: function () {
  //     camera.updateProjectionMatrix();
  //     // controls.update();
  //   }
  // }); 
                                                                                                                                         
  //good
  // gsap.to( camera.position, {
  //   duration: 10,  
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   onUpdate: function () {
  //     camera.updateProjectionMatrix();
  //     // controls.update();
  //   }
  // });


 //gsap.start();
 
//   useFrame(({ clock, camera }) => {
//     camera.position.z = 99950 + Math.sin(clock.getElapsedTime()) * 30
//   })








  return null
}


function MyPage(props){
    
    console.log(props.forcedHeight);

    return (
      <>  
        <Layout displayHero={false}>    
            <div  style={{ height: props.forcedHeight, width: "100%",background:"black" }}>  
                <Canvas  
                camera={{
                    position: [0, 0, -.01],
                    fov: 75,
                    near: 0.01,
                    far: 100
                }}
                pixelRatio={Math.min(window.devicePixelRatio, 2)}
                 
                style={{ height: "100%", width: "100%" }}>
        
                    <pointLight position={[-10, 20, 20]} intensity={.8}/>
                    <pointLight position={[10, 10, -10]} intensity={.8}/>
                
                    <Suspense fallback={null}>  
                        <TheCurveThing> 
                        </TheCurveThing> 
                    </Suspense>
                    <Box color="#f56f42" position={[1, 0, 3]} />  
                    <Suspense fallback={<Html>Loading...</Html>}>    
                    <group scale={[.03,.03,.03]} position={[.7, -1, -1.5]}>
                        <Model  /> 
                    </group>
                    </Suspense>
                    <Dolly/>
        
                <OrbitControls  enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
                </Canvas>
            </div> 
        </Layout> 
      </>
    )
}
 
export default MyPage  
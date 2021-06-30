import React , {  useEffect, Suspense, useRef} from 'react';
import Layout from "../../components/layoutwide"   
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Html, OrbitControls, useCubeTexture, useTexture } from '@react-three/drei';
//import { a, useSpring } from '@react-spring/three'
import Model from "../../helpers/Sentry.js"; 
import gsap from "gsap"; 
import * as THREE from 'three'


 function TheShinyCube(){
//  constructor(props){
//     super(props);
//     this.myElement = null;
//    this.myTween = TimelineLite({paused: true});
//   }
 const ref = useRef()
  
// console.dir(ref)
 
   const { scene } = useThree() 
   const myytexture = useTexture('./images/tedmedlogos/square_logo_BW.png') 
   const envMap = useCubeTexture(['./images/tedmedlogos/square_logo_BW.png', './images/tedmedlogos/square_logo_BW.png', './images/tedmedlogos/square_logo_BW.png', './images/tedmedlogos/square_logo_BW.png', './images/tedmedlogos/square_logo_BW.png', './images/tedmedlogos/square_logo_BW.png'] )
 
   scene.background = envMap;
   scene.environment = envMap; 

   useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.002))
  
  return (
    <> 
      <group position={[0, 0, 2]} ref={ref}> 
        <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial metalness={1} color={'#589bcd'} roughnessMap={myytexture} roughness={1} envMap={envMap} /> 
        </mesh> 
      </group> 
    </>
  )
}
function Box({position, color}) {
  const ref = useRef()
  // var startpos = new THREE.Vector3(1,1,1);
  var endpos = new THREE.Vector3(10,.5,3);
 
  useEffect(() => {  
    console.log('useEff')

    gsap.to( ref.current.position, {
      duration: 30,  
      x: endpos.x,
      y: endpos.y,
      z: endpos.z,
    //  repeat:-1,
    });  
  }) 

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={color} attach="material" />
    </mesh>
  )
}

function MyPage(props){
    
   // console.log(props.forcedHeight);

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
               // pixelRatio={Math.min(window.devicePixelRatio, 2)}
                 
                style={{ height: "100%", width: "100%" }}>
        
                    <pointLight position={[-10, 20, 20]} intensity={.8}/>
                    <pointLight position={[10, 10, -10]} intensity={.8}/>
                
                    <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
                        <TheShinyCube/>  
                        {/* <TheShinyCube  color="white" position={[2, 0, 5]} />   */}
                    </Suspense>

                    <Suspense fallback={<Html><h1 style={{color:'blue'}}>Loading...cube</h1></Html>}>  
                        {/* <TheShinyCube/>   */}
                        {/* <ShinyCube  color="white" position={[2, 0, 5]} />   */}
                    </Suspense>

                    <Box color="#f56f42" position={[1, 0, 3]} />   
                    <Suspense fallback={<Html>Loading...</Html>}>    
                    <group scale={[.03,.03,.03]} position={[.7, -1, -1.5]}>
                        <Model  /> 
                        {/* <Model  />  */}
                    </group>
                    </Suspense> 
        
                <OrbitControls  enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5}/>
                </Canvas>
            </div> 
        </Layout> 
      </>
    )
}
 
export default MyPage  
import React , {useRef, Suspense, useEffect} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas, useFrame, useMemo} from "@react-three/fiber"
import { Html, OrbitControls, useLoader, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three'
import Flamingo from "../../helpers/Flamingo.js"; 
import img from '../../images/logo.png'
import gsap from "gsap"; 
import LogoFloor from "../../components/layoutwidebb"   
import Robot from "../../helpers/Robot6"; 
import Samba from "../../helpers/Samba"; 
import Roboto from '/static/helvetiker_regular.typeface.json';
import { CurveModifier, CurveModifierRef, Plane, Sphere, softShadows } from '@react-three/drei';
 
import LogoTedfordMedia from "../../helpers/Tedmedialogosilver"; 
 
function TheFollowCube(){ 
    const ref = useRef()   
    const myytexture = useTexture('./images/tedmedlogos/square_logo.png')   
  
    const curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -10, 2, 10 ),
        new THREE.Vector3( -10, 2, 0 ), 
        new THREE.Vector3( -5, 4, -10 ),    
        new THREE.Vector3( 5, 4, -10 ),
        new THREE.Vector3( 10, 2, 0 ),
        new THREE.Vector3( 10, 2, 10 )
    ] );
    curve.curveType = 'catmullrom';
    curve.closed = true;

    const points = curve.getPoints( 50 );
    const lineGeometry = new THREE.BufferGeometry().setFromPoints( points ); 
  

  return (
    <> 
      <group position={[0, 0, 0]} ref={ref}>  

        <line position={[0, 0, 0]} ref={ref} geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color={'red'} linewidth={1} linecap={'round'} linejoin={'round'} />
        </line> 

        <mesh castShadow receiveShadow position={[-2, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial    map={myytexture}   roughness={1}   /> 
        </mesh> 
      </group> 
    </>
  )
}
function MyText({ clicked, ...props }) { 
  const font = new THREE.FontLoader().parse(Roboto);
  const DISPLAY_TEXT = 'TEDFORDMEDIA';  
 
  const ref = useRef() 
 
  const textOptions = { 
    font,
    size: 2,
    height: 1
  }; 
  
  useFrame((state, delta) => { 
   
  })

  useEffect((state, delta) => { 
 
  })

  return ( 
    <group name="xxx"  ref={ref}  {...props}> 
        <mesh castShadow>
        <textGeometry attach='geometry'  args={[DISPLAY_TEXT, textOptions]} />
        <meshStandardMaterial attach='material' color={props.color}/>
        </mesh>
    </group>
  )
}
function Light() {
  const ref = useRef()
  const random = Math.random() * 100000
  useFrame(() => {
    const timer = random + Date.now() * 0.00025
    ref.current.position.set(Math.sin(timer * 7) * 300, Math.cos(timer * 5) * 400, Math.cos(timer * 3) * 300)
  })
  return <pointLight ref={ref} intensity={1} />
}

function SoftShadowsScene() {
  const sphere = useRef()

  useFrame(({ clock }) => {
    sphere.current.position.y = Math.sin(clock.getElapsedTime()) + 2
  })

  return (
    <> 
    <fog attach="fog" args={['white', 0, 40]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <Sphere ref={sphere} castShadow receiveShadow args={[1, 24, 24]}>
        <meshPhongMaterial color="royalblue" attach="material" />
      </Sphere>

      <Plane receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.5, 0]} args={[10, 10, 4, 4]}>
        <shadowMaterial attach="material" opacity={0.5} />
      </Plane>
      <Plane rotation-x={-Math.PI / 2} position={[0, -0.5, 0]} args={[10, 10, 4, 4]}>
        <meshBasicMaterial attach="material" opacity={0.5} />
      </Plane>

        <Suspense fallback={<Html><h1 style={{color:'#99e600'}}>Loading...</h1></Html>}>   
            <TheFollowCube/>   
            <MyText color={'red'} position={[-3, 1, -2]} scale={[.5,.5,.5]}/>
        </Suspense> 
        <Light/>
        <Suspense fallback={null}>   
            <LogoTedfordMedia position={[-5,10,-5]} scale={[2000, 2000, 2000]} rotation={[0, 0, 0]} castShadow/>  
        </Suspense>  
        <OrbitControls  maxDistance={20} maxPolarAngle={Math.PI / 2}  autoRotate autoRotateSpeed={-.8} /> 
    </>

  )
}


const MyPage = (props) => {

    return (   

  <Layout displayHero={false}>      
    <div  style={{ height: "100vh", width: "100%",background:"#a0a0a0" }}>       
     <Canvas  
            shadowMap
            shadows
            gl={{ alpha: false }}
            camera={{ 
            position: [0,3,13], 
            fov: 30 ,  
            near: 0.01,
            far: 1100
            }}
            onCreated={({ gl, camera, scene }) => {  
                gl.outputEncoding = THREE.sRGBEncoding
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap; 
 gl.toneMapping = THREE.ACESFilmicToneMapping
                // const fogColor = new THREE.Color(0x00ff00);
                // scene.fog = new THREE.Fog(fogColor, 9.0025, 80);
                //  scene.background = new THREE.Color( 0x000000 ); 
            }}


            style={{ height: "100%", width: "100%" }}
        >
            <SoftShadowsScene />
  
        </Canvas>
    </div>
  </Layout> 
)
 } 
export default MyPage  
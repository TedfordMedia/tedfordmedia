import React , {useRef, Suspense, useEffect} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas, useFrame} from "@react-three/fiber"
import { Stars, Html, OrbitControls, useLoader, useTexture } from '@react-three/drei';
import * as THREE from 'three'
import Flamingo from "../../helpers/Flamingo.js"; 
import img from '../../images/logo.png'
import gsap from "gsap"; 
import LogoFloor from "../../components/layoutwidebb"   
import Robot from "../../helpers/Robot6"; 
import Samba from "../../helpers/Samba"; 
 import Roboto from '/static/helvetiker_regular.typeface.json';
 
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

        <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial    map={myytexture}   roughness={1}   /> 
        </mesh> 
      </group> 
    </>
  )
}
  
 const TheBoxbricks = (props) => {
   const groupRef = useRef();

  return (

    <group ref={groupRef}> 
        <mesh  {...props} castShadow receiveShadow position={[-5, -.5, 0]} >
            <boxBufferGeometry args={[2, 2, 2]}  attach="geometry" />
            <meshPhongMaterial color={'#4e7ea4'} attach="material" />
        </mesh> 
        <mesh castShadow receiveShadow position={[25, -6, -30]} rotation={[Math.PI/2, 0, 0]} >
            <boxBufferGeometry args={[100, 75, 10]}  attach="geometry" />
            <meshPhongMaterial color={'#4e7ea4'} attach="material" />
        </mesh>  

        <mesh castShadow receiveShadow position={[25, -6, 45]} rotation={[Math.PI/2, 0, 0]} >
            <boxBufferGeometry args={[100, 75, 10]}  attach="geometry" />
            <meshPhongMaterial color={'#b1d049'} attach="material" />
        </mesh>   
    </group>

  );
};

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
 
function Dolighting({ brightness, color }) {

  return (
    <group name="lighting">
        <hemisphereLight intensity={.1} />
        <ambientLight intensity={.1} /> 
 
        <pointLight castShadow 
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
                position={[-10, 10, 20]} intensity={1}/> 
    </group>
  );
}
 
 
function TheCurveThing({children, scene}){
 
  const [ref] = useRef()  

    const curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -80, 0, - 80 ),
        new THREE.Vector3( 40, 0, - 80 ),
        new THREE.Vector3( 140, 80, - 80 ),
        new THREE.Vector3( 140, 90, - 50 ),
        new THREE.Vector3( 40, 50, 80 ),
        new THREE.Vector3( - 40, 0, 80 )
    ] );
  

    var sampleClosedSpline = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -80, 0, - 80 ),
        new THREE.Vector3( 40, 0, - 80 ),
        new THREE.Vector3( 140, 80, - 80 ),
        new THREE.Vector3( 140, 90, - 50 ),
        new THREE.Vector3( 40, -50, 80 ),
        new THREE.Vector3( - 40, 0, 80 )
    ] );

    curve.curveType = 'catmullrom';
    curve.closed = true;
 
    const points = curve.getPoints( 50 );
    const lineGeometry = new THREE.BufferGeometry().setFromPoints( points ); 
  
 
  return (
    <> 
      <group position={[0, 0, -1]}> 
        <line position={[0, 0, 0]} ref={ref} geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'blue'} linewidth={50} linecap={'round'} linejoin={'round'} />
        </line>  
      </group> 
    </>
  )
}
 
const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"#a0a0a0" }}>  
        <Canvas  
            shadowMap
            shadows
            gl={{ alpha: false }}
            camera={{ 
            position: [-3, 20.1, 80.5], 
            fov: 30 ,  
            near: 0.01,
            far: 1100
            }}
            onCreated={({ gl, camera, scene }) => {  
                gl.outputEncoding = THREE.sRGBEncoding
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap; 
                // const fogColor = new THREE.Color(0x00ff00);
                // scene.fog = new THREE.Fog(fogColor, 9.0025, 80);
                scene.background = new THREE.Color( 0xa0a0a0 );
  
            }}
            style={{ height: "100%", width: "100%" }}
        >
          <Dolighting/>
  
          <TheBoxbricks/> 
 
          <Suspense fallback={<Html>Loading...</Html>}>    
              <group position={[0, 1, -2]} scale={[.02,.02,.02]}>
              <Flamingo  /> 
              </group>
          </Suspense>  

          <Suspense fallback={<Html><h1 style={{color:'#99e600'}}>Loading...</h1></Html>}>   
              <TheFollowCube/>   
              <MyText color={'#b1d049'} position={[0, -1, 0]}/>
          </Suspense> 
    
          <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)
  
export default MyPage  
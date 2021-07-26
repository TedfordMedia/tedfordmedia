import React , {useRef, Suspense} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas, useFrame} from "@react-three/fiber"
import { Stars, Html, OrbitControls, useLoader, useTexture } from '@react-three/drei';
import * as THREE from 'three'
import Flamingo from "../../helpers/Flamingo.js"; 
import img from '../../images/logo.png'
import gsap from "gsap"; 
import LogoFloor from "../../components/layoutwidebb"  
 
const Torus = (props) => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.x += 0.01;
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
      <mesh {...props}>
        <torusGeometry args={[1, 0.2, 12, 36]} />
        <meshStandardMaterial color={"red"} />
        <Html>
          <div className="label">Torus</div>
        </Html>
      </mesh>
    </group>
  );
};

function TheShinyCube(){ 
  const ref = useRef()   
  const myytexture = useTexture('./images/tedmedlogos/square_logo_BW.png')  
 
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.002))

  return (
    <> 
      <group position={[0, 0, 2]} ref={ref}> 
        <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial metalness={1} color={'#589bcd'} roughnessMap={myytexture} roughness={1}   /> 
        </mesh> 
      </group> 
    </>
  )
}
 

function TheNormalCube(){ 
  const ref = useRef()   
  const myytexture = useTexture('./images/tedmedlogos/square_logo.png')   
 
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.002))

  return (
    <> 
      <group position={[0, 0, 2]} ref={ref}>  
        <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry args={[4, 4, 4]} />
            <meshStandardMaterial metalness={1}  map={myytexture}   roughness={1}   /> 
        </mesh> 
      </group> 
    </>
  )
}
 



function TheCurveThing({children, scene}){
 
  const [ref] = useRef() 

//   const curve = new THREE.CatmullRomCurve3( [
//     new THREE.Vector3( -4, 1, 9 ),
//     new THREE.Vector3( -4, 1, 5 ),
//     new THREE.Vector3( 0, 2, 0 ),
//     new THREE.Vector3( 5, 1, 5 ),
//     new THREE.Vector3( 5, 1, 8 ),
//     new THREE.Vector3( -4, 1, 9 ),
//   ] );
  

    const curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -80, 0, - 80 ),
        new THREE.Vector3( 40, 0, - 80 ),
        new THREE.Vector3( 140, 80, - 80 ),
        new THREE.Vector3( 140, 90, - 50 ),
        new THREE.Vector3( 40, -50, 80 ),
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
 
    console.dir(children)
     // flow = new Flow( {children});
    // flow.updateCurve( 0, curve );
    // scene.add( flow.object3D );
 
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
        <Canvas camera={{ position: [-7, 3, 20], fov: 30 }} style={{ height: "100%", width: "100%" }}>
            <ambientLight />

            <LogoFloor/>
 
          
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          <pointLight position={[3, 3, 3]} intensity={1}/>
          {/* <Stars/> */}



            <directionalLight position={[67, 19, 127]}  intensity={.2} castShadow shadow-camera-zoom={2} /> 
            <directionalLight position={[67,30,50]}  intensity={0.3} castShadow shadow-camera-zoom={2} />
            <directionalLight position={[-57, 30,40]}  intensity={0.3} castShadow shadow-camera-zoom={2} />

            <mesh castShadow receiveShadow position={[0, -.5, 0]} >
                <boxBufferGeometry args={[2, 2, 2]}  attach="geometry" />
                <meshPhongMaterial color={'blue'} attach="material" />
            </mesh> 
 





          <TheCurveThing> 
          </TheCurveThing> 

            <Suspense fallback={<Html>Loading...</Html>}>    
            <group position={[20, 16, 10]} scale={[.025,.025,.025]}>
               <Flamingo  /> 
            </group>
          </Suspense>
          <Suspense fallback={<Html>Loading...</Html>}>    
            <group position={[0, 1, -2]} scale={[.02,.02,.02]}>
               <Flamingo  /> 
            </group>
          </Suspense>


            <Suspense fallback={<Html>Loading...</Html>}>    
                <group position={[10, 10, 0]} scale={[1.02,1.02,1.02]}>
                {/* <Box  />  */}
                </group>
            </Suspense>
 
            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
                <TheShinyCube/>   
            </Suspense> 

      <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
     <group position={[3, 8, 0]} scale={[1.02,1.02,1.02]}>
                <TheNormalCube/>   
        </group>
            </Suspense> 

            <group position={[3, 3, 0]} scale={[1.02,1.02,1.02]}>
                <Torus />
            </group>
   
          <OrbitControls/>
        </Canvas>
      </div> 
  </Layout> 
)
 

	// scene.background = new THREE.Color( 0xa0a0a0 );
	// scene.fog = new THREE.Fog( 0xa0a0a0,100	, 5000 );




export default MyPage  
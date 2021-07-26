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
 
function Dolighting({ brightness, color }) {
  return (
    <group name="lighting">
        <hemisphereLight intensity={.1} />
        <ambientLight intensity={.1} />
        {/* <pointLight castShadow position={[20, 80, 3]} intensity={.9}/>  */}
 
        <pointLight castShadow 
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
                position={[-10, 10, 20]} intensity={1}/>
        {/* <directionalLight position={[67, 19, 127]}  intensity={.2} castShadow shadow-camera-zoom={2} />  */}
        {/* <directionalLight position={[67,30,50]}  intensity={0.3} castShadow shadow-camera-zoom={2} /> */}
       
        {/* <directionalLight position={[67, 69, 7]}  intensity={.4} castShadow shadow-camera-zoom={2} />  */}
        {/* <directionalLight position={[67,50,50]}  intensity={0.1} castShadow shadow-camera-zoom={2} /> */}
        {/* <directionalLight position={[-57, 40,40]}  intensity={0.1} castShadow shadow-camera-zoom={2} />   */}
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
        <Canvas  
            shadowMap
            shadows
            gl={{ alpha: false }}
            camera={{ 
            position: [-3, 20.1, 80.5], 
            fov: 30 ,  
            near: 0.01,
            far: 200
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

            <Suspense fallback={<Html>Loading...</Html>}>  
                <LogoFloor/>
            </Suspense>
            
            <mesh castShadow receiveShadow position={[-5, -.5, 0]} >
                <boxBufferGeometry args={[2, 2, 2]}  attach="geometry" />
                <meshPhongMaterial color={'#4e7ea4'} attach="material" />
            </mesh> 
            <mesh castShadow receiveShadow position={[25, -.5, -30]} >
                <boxBufferGeometry args={[100, 10, 10]}  attach="geometry" />
                <meshPhongMaterial color={'#4e7ea4'} attach="material" />
            </mesh> 
            <TheCurveThing/>  

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

            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
                <group position={[3, 8, 0]} scale={[1.02,1.02,1.02]}>
                    <TheNormalCube/>   
                </group>
            </Suspense> 

            <group position={[3, 3, 0]} scale={[1.02,1.02,1.02]}>
                <Torus />
            </group>
           
            <OrbitControls  maxDistance={50} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)
 
// scene.background = new THREE.Color( 0xa0a0a0 );
// scene.fog = new THREE.Fog( 0xa0a0a0,100	, 5000 );
 
export default MyPage  
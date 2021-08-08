import React , {useRef, Suspense} from 'react';
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
    
    useFrame(() => { 
      // const ref = useRef()  
      //  gsap.to( ref.position, {
      //                 duration: .5,  
      //                 x: 1,
      //                 y: 3,
      //                 z: 40, 
      //               }); 
      // const ref = useRef()  
      // var currentTime = Date.now();
      // // uniforms.iGlobalTime.value = (currentTime - startTime) * 0.001; 

      // if (ref){
      //  // ref.position.copy( position );	
      //   // ref.matrix.lookAt( splineCamera.position, lookAt, normal );
      //   // ref.quaternion.setFromRotationMatrix( splineCamera.matrix );
      // }
    });

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
const TheNormalCubeB = (props) => {
  const groupRef = useRef();
  const myytexture = useTexture('./images/tedmedlogos/square_logo.png')   
 
//   useFrame(() => {
//     groupRef.current.rotation.x += 0.01;
//     groupRef.current.rotation.y += 0.01;
//   });

  return (
    <group ref={groupRef}>
      <mesh {...props}>
        <boxBufferGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color={"red"} map={myytexture}  />
        <Html>
          <div className="label">Cubetest</div>
        </Html>
      </mesh>
    </group>
  );
};

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

       {/* <TheNormalCubeB 
            castShadow  
            position={[-10, 100, 20]}  /> */}

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

            <Suspense fallback={<Html>Loading...</Html>}>  
                <LogoFloor/>
            </Suspense>
            
            <TheBoxbricks/> 

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
 
            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
  
                <TheNormalCubeB  position={[0,10,-10]}/>   
 
            </Suspense> 

            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
  
                <TheFollowCube/>   
 
            </Suspense> 
  

            <Suspense fallback={<Html><h1 style={{color:'white'}}>Loading...</h1></Html>}>  
              <group position={[3, -.89, 0]}  >
                <Robot/>   
             </group>
            </Suspense> 
  
            <group position={[3, 3, 0]} scale={[1.02,1.02,1.02]}>
                <Torus />
            </group>
           
            <OrbitControls  maxDistance={650} maxPolarAngle={Math.PI / 2}/>
        </Canvas>
      </div> 
  </Layout> 
)
 
// scene.background = new THREE.Color( 0xa0a0a0 );
// scene.fog = new THREE.Fog( 0xa0a0a0,100	, 5000 );
 
export default MyPage  
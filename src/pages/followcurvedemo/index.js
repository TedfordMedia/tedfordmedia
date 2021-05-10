import React , {useRef, Suspense} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas } from "@react-three/fiber"
import { Stars, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import Model from "../../helpers/Sentry.js";
 

function TheCurveThing(){
 
  const [ref] = useRef() 

  const curve = new THREE.CatmullRomCurve3( [
    new THREE.Vector3( -10, 0, 6 ),
    new THREE.Vector3( -5, 3, 5 ),
    new THREE.Vector3( 0, 2, 0 ),
    new THREE.Vector3( 5, 0, 5 ),
    new THREE.Vector3( 5, 2, 5 ),
    new THREE.Vector3( -10, 0, 6 ),
  ] );
  
  const points = curve.getPoints( 50 );
  const lineGeometry = new THREE.BufferGeometry().setFromPoints( points ); 

  return (
    <> 
      <group position={[0, 0, -1]}> 
        <line position={[0, 0, 0]} ref={ref} geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'blue'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line>  
      </group> 
    </>
  )
}
 

const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [-7, 3, 20], fov: 30 }} style={{ height: "100%", width: "100%" }}>

          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
          
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          <pointLight position={[10, -10, -10]} intensity={1}/>
          <Stars/>
          <TheCurveThing/> 
          <Suspense fallback={<Html>Loading...</Html>}>    
            <group scale={[.03,.03,.03]}>
               <Model  /> 
            </group>
          </Suspense>
          <OrbitControls/>
        </Canvas>
      </div> 
  </Layout> 
)
 
export default MyPage  
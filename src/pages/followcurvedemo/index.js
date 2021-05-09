import React , {useRef} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas } from "@react-three/fiber"
import { Stars } from '@react-three/drei';
import * as THREE from 'three'

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
      <group position={[0, 1, -1]}> 
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
        <Canvas camera={{ position: [-2, 2, 75], fov: 30 }} style={{ height: "100%", width: "100%" }}>

          <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
          
          <pointLight position={[-10, 10, 10]} />
          
          <Stars/>
          <TheCurveThing/>
        </Canvas>
      </div> 
  </Layout> 
)
 
export default MyPage  
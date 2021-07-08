 
import React, { Suspense } from 'react'  
import Layout from "../../components/Layout"  
import { Stars, Html } from '@react-three/drei'; 
import { Canvas } from "@react-three/fiber" 

const IndexPage = (props) => (   
  <Layout displayHero={false}>    
      {/* <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [-7, 3, 20], fov: 30 }} style={{ height: "100%", width: "100%" }}>

          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
          
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          <pointLight position={[10, -10, -10]} intensity={1}/>
 
 

          <Suspense fallback={<Html>Loading...</Html>}>    
        
          </Suspense>
         
        </Canvas>
      </div>  */}
  </Layout> 
)
 
export default IndexPage  
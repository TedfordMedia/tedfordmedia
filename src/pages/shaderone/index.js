import React , {Suspense} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas } from "@react-three/fiber"
import { Stars, Html, OrbitControls } from '@react-three/drei';
 
import Model from "../../helpers/Sentry.js";
 
const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [-7, 3, 20], fov: 30 }} style={{ height: "100%", width: "100%" }}>
  
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          <pointLight position={[10, -10, -10]} intensity={1}/>
          <Stars/>
 
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
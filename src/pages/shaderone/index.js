import React , {Suspense} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas } from "@react-three/fiber"
import { Stars, Html, OrbitControls } from '@react-three/drei';
import LogoTedfordMedia from "../../helpers/Tedmedia3dlogo"; 
 
 
const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [0, 0, 40], fov: 30 }} style={{ height: "100%", width: "100%" }}>
  
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          {/* <pointLight position={[10, -10, -10]} intensity={1}/> */}
          <Stars/>
 
          <Suspense fallback={null}>   
              <LogoTedfordMedia position={[0, 0, 0]} scale={[140, 140, 140]} rotation={[90, 0, 0]} castShadow/>  
          </Suspense>   

          <OrbitControls/>
        </Canvas>
      </div> 
  </Layout> 
)
 
export default MyPage  
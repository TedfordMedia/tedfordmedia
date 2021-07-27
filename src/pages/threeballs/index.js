import React, { Suspense } from "react";
import { Physics, useBox } from "@react-three/cannon";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

 const MyPage = (props) =>  {

  return (
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas   camera={{ position: [0, 50, 30] }} style={{ height: "100%", width: "100%" }}>
            
             <Suspense fallback={null}>
                <Physics>
                <Ball position={[10, 28, 0]} color={"red"} />
                <Ball position={[7, 29, 0]} color={"green"} />
                <Ball position={[4, 30, 0]} color={"blue"} />
                <Cube args={[25, 1, 1]} position={[8, 5, 0]} rotation={[0, 0, 0.3]} />
                <Cube
                    args={[25, 1, 1]}
                    position={[-8, 15, 0]}
                    rotation={[0, 0, -0.3]}
                />
                <Cube
                    args={[25, 1, 1]}
                    position={[8, 25, 0]}
                    rotation={[0, 0, 0.3]}
                />
                <Ground />
                </Physics>
            </Suspense>
        </Canvas>
      </div> 
  </Layout> 
  )

}
export default MyPage  
import React , {Suspense,  } from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas,   } from "@react-three/fiber"
import { Stars,   OrbitControls } from '@react-three/drei';
 import LogoTedfordMedia from "../../helpers/TedfordmedialogoGood"; 
import "./styles.css";
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";
 


 const MyPage = (props) =>  {

  return (
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [0, 0, 14], fov: 30 }} style={{ height: "80%", width: "100%" }}>
            <mesh
                visible // object gets render if true
                userData={{ test: "hello" }} // An object that can be used to store custom data about the Object3d
                position={[0, 0, 0]} // The position on the canvas of the object [x,y,x]
                rotation={[0, 0, 0]} // The rotation of the object
                castShadow // Sets whether or not the object cats a shadow
                // There are many more props.....
            >
                {/* A spherical shape*/}
                <sphereGeometry attach="geometry" args={[1, 16, 200]} />
                {/* A standard mesh material*/}
                <meshStandardMaterial
                attach="material" // How the element should attach itself to its parent
                color="#7222D3" // The color of the material
                transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
                roughness={0.1} // The roughness of the material - Defaults to 1
                metalness={0.1} // The metalness of the material - Defaults to 0
                />
            </mesh>
            {/*An ambient light that creates a soft light against the object */}
            <ambientLight intensity={0.5} />
            {/*An directional light which aims form the given position */}
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/*An point light, basically the same as directional. This one points from under */}
            <pointLight position={[0, -10, 5]} intensity={1} />

            {/* We can use the drei Sphere which has a simple API. This sphere has a wobble material attached to it */}
            <Sphere visible position={[-1, 1, 0]} args={[1, 16, 200]}>
                <MeshWobbleMaterial
                attach="material"
                color="#EB1E99"
                factor={1} // Strength, 0 disables the effect (default=1)
                speed={2} // Speed (default=1)
                roughness={0}
                />
            </Sphere>

            {/* This sphere has a distort material attached to it */}
            <Sphere visible position={[1, -1, -1]} args={[1, 16, 200]}>
                <MeshDistortMaterial
                color="#00A38D"
                attach="material"
                distort={0.5} // Strength, 0 disables the effect (default=1)
                speed={2} // Speed (default=1)
                roughness={0}
                />
            </Sphere>
            <Suspense fallback={null}>   
                <LogoTedfordMedia position={[0, 5, -10]} scale={[1550, 1550, 1550]} rotation={[90, 0, 0]} castShadow/>  
            </Suspense>   
        </Canvas>
      </div> 
  </Layout> 
  )

}
export default MyPage  
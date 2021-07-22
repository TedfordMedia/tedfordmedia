import React , {Suspense, useRef} from 'react';
import Layout from "../../components/layoutwide"  
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars,   OrbitControls } from '@react-three/drei';
import LogoTedfordMedia from "../../helpers/Tedmedia3dlogoshaderone"; 
 import * as THREE from 'three'
 
function Thing() {
  const ref = useRef()
  const geometryRef = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  const fragmentShader = `
    varying vec3 Normal;
    varying vec3 Position;

    uniform vec3 Ka;
    uniform vec3 Kd;
    uniform vec3 Ks;
    uniform vec4 LightPosition;
    uniform vec3 LightIntensity;
    uniform float Shininess;

    vec3 phong() {
      vec3 n = normalize(Normal);
      vec3 s = normalize(vec3(LightPosition) - Position);
      vec3 v = normalize(vec3(-Position));
      vec3 r = reflect(-s, n);

      vec3 ambient = Ka;
      vec3 diffuse = Kd * max(dot(s, n), 0.0);
      vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

      return LightIntensity * (ambient + diffuse + specular);
    }

    void main() {
      vec3 blue = vec3(0.0, 1.0, 1.0);
      gl_FragColor = vec4(blue*phong(), 1.0);
  }`
  const vertexShader = `
    varying vec3 Normal;
    varying vec3 Position;

    void main() {
      Normal = normalize(normalMatrix * normal);
      Position = vec3(modelViewMatrix * vec4(position, 1.0));
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
  const uniforms = {
    // phong material uniforms
    Ka: { value: new THREE.Vector3(1, 1, 1) },
    Kd: { value: new THREE.Vector3(1, 1, 1) },
    Ks: { value: new THREE.Vector3(1, 1, 1) },
    LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
    LightPosition: { value: new THREE.Vector4(0.0, 2000.0, 0.0, 1.0) },
    Shininess: { value: 200.0 }
  }
  
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[5, 5, 5]} /> 
      <shaderMaterial attach="material" uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} />
    </mesh>
  )
}

const MyPage = (props) => (   
  <Layout displayHero={false}>    
      <div  style={{ height: "100vh", width: "100%",background:"black" }}>  
        <Canvas camera={{ position: [0, 0, 4], fov: 30 }} style={{ height: "100%", width: "100%" }}>
  
          <pointLight position={[-10, 20, 20]} intensity={1}/>
          {/* <pointLight position={[10, -10, -10]} intensity={1}/> */}
          <Stars/>
          {/* <Thing /> */}
          <Suspense fallback={null}>   
              <LogoTedfordMedia position={[0, 1, -2]} scale={[20, 20, 20]} rotation={[90, 0, 0]} castShadow/>  
          </Suspense>   

          <OrbitControls/>
        </Canvas>
      </div> 
  </Layout> 
)
 
export default MyPage  

import React, { Suspense, useState,useEffect, useRef } from 'react'
import { Canvas , useFrame,} from '@react-three/fiber' 
import { useGLTF, OrbitControls,    Plane, Sphere,Sky, Html, Reflector, Text, useTexture  } from '@react-three/drei' 

 import Layout from "../../components/layoutwidellh"  
import * as THREE from 'three'
 import Overlay from './Overlay'
 function Carla(props) {
  const { scene } = useGLTF('/shoe-draco.glb')
  return <primitive object={scene} {...props} />
}
 
function VideoText({ clicked, ...props }) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/arintro.mp4', crossOrigin: 'Anonymous', loop: true, muted: 'muted' }))
  video.muted = 'muted';  

  useEffect(() => void (clicked && video.play()), [video, clicked])

  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      drei
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>

      <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
        2D Text from react-three/drei
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial> 
      </Text> 

      <group scale={[2,2,2]}>
        <Plane args={[1.28,.720]} position={[-1.2, 0, -2]}>
          <meshBasicMaterial toneMapped={false}>
            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
          </meshBasicMaterial> 
        </Plane>
      </group>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/images/SurfaceImperfections003_1K_var1.jpg', '/images/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector resolution={512} args={[10, 10]} mirror={0.4} mixBlur={8} mixStrength={1} rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  useEffect(() => setTimeout(() => set(true), 500), [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0, 0)
    }
  })
}
 
 const MyPage = (props) =>  {
 const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }
  return (
    <>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
        <color attach="background" args={['yellow']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
            <VideoText {...store} position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>  
 
          
      </Canvas>
      <Overlay {...store} />
    </>
)}
  
export default MyPage  


 






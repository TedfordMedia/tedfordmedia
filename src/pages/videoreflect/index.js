import * as THREE from 'three'
import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Sky, useTexture, Reflector, Text} from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core' 
 import Layout from "../../components/layoutwidellh"   
 

extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, './images/waternormals.jpg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}
 
function Carla(props) {
  const { scene } = useGLTF('./robot6.glb')
  return <primitive object={scene} {...props} />
}
function VideoText({ clicked, ...props }) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true }))
  useEffect(() => void (clicked && video.play()), [video, clicked])
  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      drei
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}
function Ground() {
  const [floor, normal] = useTexture(['./images/SurfaceImperfections003_1K_var1.jpg', './images/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector resolution={512} args={[10, 10]} mirror={0.4} mixBlur={8} mixStrength={1} rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}


const MyPage = (props) => (   
 <Layout  css={css`  
      `}>    
      <div  className={'mydiv'}       
        css={css` 
        height: 100%;
        overflow: hidden;
      `}>  
        <Canvas 
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
            <pointLight position={[100, 100, 100]} />
            <pointLight position={[-100, -100, -100]} />
              <Suspense fallback={null}>
            <group position={[0, -1, 0]}>
               
            </group>

            <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />    </Suspense>
            <OrbitControls />
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
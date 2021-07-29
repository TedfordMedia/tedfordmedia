import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Box, Plane } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { css } from '@emotion/core'

import { Physics, useBox, usePlane } from "@react-three/cannon";

 
 import Layout from "../../components/layoutwidellh"  


function PhyPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  );
}

function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
    >
      <meshNormalMaterial />
    </Box>
  );
}




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
             <Physics gravity={[0, -10, 0]}>
              <PhyPlane
                color="hotpink"
                position={[0, -2, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <PhyPlane color="lightblue" position={[0, 0, -10]} />
              <PhyBox position={[2, 0, -5]} />
              <PhyBox position={[0, 0, -5]} />
              <PhyBox position={[-2, 0, -5]} />
            </Physics>

            <ambientLight intensity={0.3} />
            <pointLight intensity={0.8} position={[5, 0, 5]} />
            <OrbitControls />
        </Canvas>
      </div>
  
  </Layout> 
)
  
export default MyPage  
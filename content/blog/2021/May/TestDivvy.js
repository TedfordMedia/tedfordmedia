import React ,  {useRef}from 'react';
import styled from 'styled-components';
import { Canvas,useFrame   } from '@react-three/fiber'
 

// Static object
const MyDivBox2 = styled.div({
  background: 'pink',
  height: '500px',
  width: '100%',
  padding: '1em'
});
// Static object
function Box({position, color}) {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={color} attach="material" />
    </mesh>
  )
}


export const Testbyyy = () => (
  <div> 
    <MyDivBox2>
      hello MyDivBox2aa
      <Canvas style={{ height: "100%", width: "100%" }}>
      <mesh  >
        <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
        <meshPhongMaterial color={'red'} attach="material" />
      </mesh> 
      <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
      <Box color="#f56f42" position={[1, 0, 3]} />      
      <Box color="#18a36e" position={[-1, 0, 3]} />

      </Canvas>
    </MyDivBox2>
  </div>
);
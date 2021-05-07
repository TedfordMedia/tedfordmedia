import React from 'react';
import styled from 'styled-components';
import { Canvas   } from '@react-three/fiber'
 

// Static object
const MyDivBox2 = styled.div({
  background: 'pink',
  height: '300px',
  width: '100%',
  padding: '1em'
});
// Static object
 

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

      </Canvas>
    </MyDivBox2>
  </div>
);
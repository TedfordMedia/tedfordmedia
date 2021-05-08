/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
// https://sketchfab.com/3d-models/montana-watch-free-model-18311353c2464a929ec15b18819d0295
export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/watchexportedglb2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-2.34, 249.54, 20.4]} rotation={[-0.21, 0, -1.6]}>
            <group position={[-0.54, -27.39, -7.12]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes['������������_Base_0'].geometry} material={materials.Base} />
            </group>
            <group position={[2.34, -37.5, -20.4]}>
              <mesh
                geometry={nodes['��������������_Metal_0'].geometry}
                material={nodes['��������������_Metal_0'].material}
              />
              <mesh
                geometry={nodes['��������������_Metal_0001'].geometry}
                material={nodes['��������������_Metal_0001'].material}
              />
              <mesh
                geometry={nodes['��������������_Metal_0002'].geometry}
                material={nodes['��������������_Metal_0002'].material}
              />
              <mesh
                geometry={nodes['��������������_Metal_0003'].geometry}
                material={nodes['��������������_Metal_0003'].material}
              />
            </group>
          </group>
          <group position={[-14.33, 359.02, 2.71]} rotation={[-0.21, 0, 1.54]}>
            <group position={[19.09, -3.24, 0]}>
              <mesh geometry={nodes['1_Number_0'].geometry} material={nodes['1_Number_0'].material} />
            </group>
            <group position={[19.09, -3.24, 0]}>
              <mesh geometry={nodes['1_1_Number_0'].geometry} material={nodes['1_1_Number_0'].material} />
            </group>
            <group position={[11.81, -3.25, -6]}>
              <mesh geometry={nodes['2_Number_0'].geometry} material={nodes['2_Number_0'].material} />
            </group>
            <group position={[12.46, -3.25, -6]}>
              <mesh geometry={nodes['3_Number_0'].geometry} material={nodes['3_Number_0'].material} />
            </group>
            <group name="4" position={[11.81, -3.24, -6]}>
              <mesh geometry={nodes['4_Number_0'].geometry} material={nodes['4_Number_0'].material} />
            </group>
            <group position={[11.81, -3.25, -6]}>
              <mesh geometry={nodes['5_Number_0'].geometry} material={nodes['5_Number_0'].material} />
            </group>
            <group position={[11.81, -3.25, -6]}>
              <mesh geometry={nodes['6_Number_0'].geometry} material={nodes['6_Number_0'].material} />
            </group>
            <group position={[12.46, -2.49, -6]}>
              <mesh geometry={nodes['7_Number_0'].geometry} material={nodes['7_Number_0'].material} />
            </group>
            <group position={[11.81, -3.25, -6]}>
              <mesh geometry={nodes['8_Number_0'].geometry} material={nodes['8_Number_0'].material} />
            </group>
            <group position={[11.81, -3.25, -6]}>
              <mesh geometry={nodes['9_Number_0'].geometry} material={nodes['9_Number_0'].material} />
            </group>
            <group name="����������001" position={[-114.86, 28.49, 0]}>
              <mesh
                geometry={nodes['����������_Number_0001'].geometry}
                material={nodes['����������_Number_0001'].material}
              />
            </group>
            <group position={[-114.86, 28.49, 0]}>
              <mesh geometry={nodes['����������_Number_0'].geometry} material={nodes['����������_Number_0'].material} />
            </group>
          </group>
          <group position={[-225.85, 258.66, 30.93]} rotation={[-0.21, -0.17, 1.54]}>
            <mesh geometry={nodes['����������_������_���'].geometry} material={materials.Logo} />
          </group>
          <group position={[-29.91, 255.35, 42.51]} rotation={[-0.21, 0, 1.54]}>
            <mesh geometry={nodes['������������_Glass_0'].geometry} material={materials.Glass} />
          </group>
          <group position={[-19.52, 249.11, -0.37]} rotation={[-0.21, 0, 1.54]}>
            <mesh geometry={nodes['������������_�������001'].geometry} material={materials.Back} />
          </group>
          <group position={[5.08, 0, -372.12]}>
            <mesh geometry={nodes['������������_��������_p'].geometry} material={materials.plane} />
          </group>
          <group position={[-29.91, 252.93, 31.16]} rotation={[-0.21, 0, 1.54]}>
            <mesh geometry={nodes['����������������_Face_0'].geometry} material={materials.Face} />
          </group>
          <group position={[-45.05, 250.42, 21.91]} rotation={[-0.21, 0, 1.54]}>
            <mesh geometry={nodes['������������������_Watch_0'].geometry} material={materials.Watch} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/watchexportedglb2.glb')
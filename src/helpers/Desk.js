/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/desk.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
          <group position={[0.7, 0.23, 0.26]}>
            <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
          </group>
          <group position={[0.5, 0.54, 0.26]}>
            <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/desk.glb')
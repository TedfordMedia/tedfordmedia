/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/logoTedfordMedia.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve010.geometry} material={materials['SVGMat.021']} position={[0.06, 0, -0.26]} />
      <mesh geometry={nodes.Curve011.geometry} material={materials['SVGMat.032']} position={[0.06, 0, -0.07]} />
      <mesh geometry={nodes.Curve012.geometry} material={materials['SVGMat.033']} position={[-0.07, 0, -0.08]} />
      <mesh geometry={nodes.Curve013.geometry} material={materials['SVGMat.034']} position={[0.11, 0, -0.17]} />
      <mesh geometry={nodes.Curve014.geometry} material={materials['SVGMat.035']} position={[-0.11, 0, -0.19]} />
      <mesh geometry={nodes.Curve015.geometry} material={materials['SVGMat.036']} position={[0.09, 0, -0.14]} />
      <mesh geometry={nodes.Curve016.geometry} material={materials['SVGMat.037']} position={[0.07, 0, -0.23]} />
      <mesh geometry={nodes.Curve017.geometry} material={materials['SVGMat.038']} position={[0.03, 0, -0.07]} />
      <mesh geometry={nodes.Curve018.geometry} material={materials['SVGMat.039']} position={[-0.08, 0, -0.22]} />
      <mesh geometry={nodes.Curve019.geometry} material={materials['SVGMat.040']} position={[-0.08, 0, -0.11]} />
      <mesh geometry={nodes.Curve020.geometry} material={materials['SVGMat.041']} position={[-0.05, 0, -0.14]} />
      <mesh geometry={nodes.Curve021.geometry} material={materials['SVGMat.042']} position={[-0.05, 0, -0.2]} />
      <mesh geometry={nodes.Curve022.geometry} material={materials['SVGMat.043']} position={[-0.01, 0, -0.11]} />
      <mesh geometry={nodes.Curve023.geometry} material={materials['SVGMat.044']} position={[0, 0, -0.22]} />
      <mesh geometry={nodes.Curve024.geometry} material={materials['SVGMat.045']} position={[0.05, 0, -0.13]} />
      <mesh geometry={nodes.Curve025.geometry} material={materials['SVGMat.046']} position={[0.05, 0, -0.19]} />
      <mesh geometry={nodes.Curve026.geometry} material={materials['SVGMat.047']} position={[-0.19, 0, -0.02]} />
      <mesh geometry={nodes.Curve027.geometry} material={materials['SVGMat.048']} position={[-0.16, 0, -0.02]} />
      <mesh geometry={nodes.Curve028.geometry} material={materials['SVGMat.050']} position={[-0.12, 0, -0.02]} />
      <mesh geometry={nodes.Curve029.geometry} material={materials['SVGMat.051']} position={[-0.09, 0, -0.02]} />
      <mesh geometry={nodes.Curve030.geometry} material={materials['SVGMat.052']} position={[-0.05, 0, -0.02]} />
      <mesh geometry={nodes.Curve031.geometry} material={materials['SVGMat.053']} position={[-0.02, 0, -0.02]} />
      <mesh geometry={nodes.Curve032.geometry} material={materials['SVGMat.054']} position={[0.02, 0, -0.02]} />
      <mesh geometry={nodes.Curve033.geometry} material={materials['SVGMat.055']} position={[0.06, 0, -0.02]} />
      <mesh geometry={nodes.Curve034.geometry} material={materials['SVGMat.056']} position={[0.1, 0, -0.02]} />
      <mesh geometry={nodes.Curve035.geometry} material={materials['SVGMat.057']} position={[0.13, 0, -0.02]} />
      <mesh geometry={nodes.Curve036.geometry} material={materials['SVGMat.058']} position={[0.16, 0, -0.02]} />
      <mesh geometry={nodes.Curve037.geometry} material={materials['SVGMat.059']} position={[0.19, 0, -0.01]} />
    </group>
  )
}

useGLTF.preload('/logoTedfordMedia.glb')

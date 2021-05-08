/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tedmed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.003']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.004']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.006']} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.007']} />
      <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.008']} />
      <mesh geometry={nodes.Curve006.geometry} material={materials['SVGMat.009']} />
      <mesh geometry={nodes.Curve007.geometry} material={materials['SVGMat.010']} />
      <mesh geometry={nodes.Curve008.geometry} material={materials['SVGMat.011']} />
      <mesh geometry={nodes.Curve009.geometry} material={materials['SVGMat.012']} />
      <mesh geometry={nodes.Curve010.geometry} material={materials['SVGMat.013']} />
      <mesh geometry={nodes.Curve011.geometry} material={materials['SVGMat.014']} />
      <mesh geometry={nodes.Curve012.geometry} material={materials['SVGMat.015']} />
      <mesh geometry={nodes.Curve013.geometry} material={materials['SVGMat.016']} />
      <mesh geometry={nodes.Curve014.geometry} material={materials['SVGMat.017']} />
      <mesh geometry={nodes.Curve015.geometry} material={materials['SVGMat.018']} />
      <mesh geometry={nodes.Curve016.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve017.geometry} material={materials['SVGMat.020']} />
      <mesh geometry={nodes.Curve018.geometry} material={materials['SVGMat.022']} />
      <mesh geometry={nodes.Curve019.geometry} material={materials['SVGMat.023']} />
      <mesh geometry={nodes.Curve020.geometry} material={materials['SVGMat.024']} />
      <mesh geometry={nodes.Curve021.geometry} material={materials['SVGMat.025']} />
      <mesh geometry={nodes.Curve022.geometry} material={materials['SVGMat.026']} />
      <mesh geometry={nodes.Curve023.geometry} material={materials['SVGMat.027']} />
      <mesh geometry={nodes.Curve024.geometry} material={materials['SVGMat.028']} />
      <mesh geometry={nodes.Curve025.geometry} material={materials['SVGMat.029']} />
      <mesh geometry={nodes.Curve026.geometry} material={materials['SVGMat.030']} />
      <mesh geometry={nodes.Curve027.geometry} material={materials['SVGMat.031']} />
    </group>
  )
}

useGLTF.preload('/tedmed.glb')
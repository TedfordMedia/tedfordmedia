// import React, { useState, useEffect, useRef } from 'react'
// import { Canvas, useFrame, useThree } from 'react-three-fiber'
 
import styled from '@emotion/styled'
// // import 'bootstrap/dist/css/bootstrap.min.css'
// import '../mystyling.scss'
// // // import main script and neural network model from Jeeliz FaceFilter NPM package
 

import * as THREE from 'three'
import React, { Suspense, useRef, useMemo , useState,useEffect} from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, useTexture, Html } from '@react-three/drei' 
import { css } from '@emotion/core'
 import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
 import Layout from "../../components/layoutwidellh"   


 

// import main script and neural network model from Jeeliz FaceFilter NPM package
import { JEELIZFACEFILTER, NN_4EXPR } from 'facefilter'

// import THREE.js helper, useful to compute pose 
import { JeelizThreeFiberHelper } from './JeelizThreeFiberHelper.js'



const _maxFacesDetected = 1 // max number of detected faces
const _faceFollowers = new Array(_maxFacesDetected)
let _expressions = null


// This mesh follows the face. put stuffs in it.
// Its position and orientation is controlled by Jeeliz THREE.js helper
const FaceFollower = (props) => {
  // This reference will give us direct access to the mesh
  const objRef = useRef()
  useEffect(() => {
    const threeObject3D = objRef.current
    _faceFollowers[props.faceIndex] = threeObject3D  
  })
  
  const mouthOpenRef = useRef()
  const mouthSmileRef = useRef()
  useFrame(() => {
    if (mouthOpenRef.current){
      const s0 = props.expression.mouthOpen
      mouthOpenRef.current.scale.set(s0, 1, s0)
    }

    if (mouthSmileRef.current){
      const s1 = props.expression.mouthSmile
      mouthSmileRef.current.scale.set(s1, 1, s1)
    }
  })

  return (
    <object3D ref={objRef}>
      <mesh name="mainCube">
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>

      <mesh ref={mouthOpenRef} rotation={[Math.PI/2,0,0]} position={[0, -0.2, 0.2]}>
        <cylinderGeometry args={[0.3,0.3, 1, 32]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>

      <mesh ref={mouthSmileRef} rotation={[Math.PI/2,0,0]} position={[0, -0.2, 0.2]}>
        <cylinderGeometry args={[0.5,0.5, 1, 32, 1, false, -Math.PI/2, Math.PI]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </object3D>
  )
}


// fake component, display nothing
// just used to get the Camera and the renderer used by React-fiber:
let _threeFiber = null
const DirtyHook = (props) => {
  _threeFiber = useThree()
  useFrame(JeelizThreeFiberHelper.update_camera.bind(null, props.sizing, _threeFiber.camera))
  return null
}


const compute_sizing = () => {
  // compute  size of the canvas:
  const height = window.innerHeight
  const wWidth = window.innerWidth
  const width = Math.min(wWidth, height)

  // compute position of the canvas:
  const top = 0
  const left = (wWidth - width ) / 2
  return {width, height, top, left}
}

 
 

const MyPage = (props) => {

console.log('hello')

return (   
 <Layout  css={css`  
      `}>    
      <div  className={'mydiv'}       
        css={css` 
        height: 100%;
        overflow: hidden;
      `}>  
        i am canvas
      </div>
  
  </Layout> 
)}
  
export default MyPage  

 

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
import Robot from "../../helpers/Robot6dance.js";
 

const MyPage = (props) => (   
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
)
  
export default MyPage  
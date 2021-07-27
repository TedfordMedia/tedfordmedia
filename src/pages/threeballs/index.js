import React , {useRef, Suspense} from 'react';
import Layout from "../../components/layoutwidellh"  
import { Canvas, useFrame} from "@react-three/fiber"
import { Stars, Html, OrbitControls, useLoader, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three'
import Flamingo from "../../helpers/Flamingo.js"; 
import img from '../../images/logo.png'
import gsap from "gsap"; 
import LogoFloor from "../../components/layoutwidebb"   
import Robot from "../../helpers/Robot6"; 
 import { useSpring } from "@react-spring/core";
 
import { Physics, useBox } from "@react-three/cannon";
import "./style.css";
import { Global, css } from '@emotion/core'

const MyPage = (props) => (   
 <Layout  css={css`  
      `}>   
 
      <div  className={'mydiv'}       
        css={css`
        background-color: pink; 
        height: 100%;
     overflow: hidden;
      `}>  
          HELLO
      </div>
  
  </Layout> 
)
  
export default MyPage  
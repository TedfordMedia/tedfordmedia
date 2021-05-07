import React, { Suspense } from 'react' 
import Robot from "../../../../helpers/Robot6.js";
import { Html,   Stars   } from '@react-three/drei';

const RobotStarsScene = ({ author, noSubscribeForm }) => (
  
   
    <Suspense fallback={<Html>loading..</Html>}>    
        <Robot/> 
    </Suspense>
 
 
)

export default RobotStarsScene 
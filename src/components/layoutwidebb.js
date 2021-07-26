import * as React from "react"    
import { useTexture } from '@react-three/drei';

const LogoFloor = props => { 
  const myytexture = useTexture('./images/tedmedlogos/square_logo.png')   
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" map={myytexture} color="#999999" />
    </mesh>
  )
}

export default   LogoFloor   
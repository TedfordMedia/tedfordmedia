import React, { Suspense, useRef, useMemo , useState,useEffect} from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber' 
import * as THREE from 'three'
import { gsap } from "gsap";  
const Picframe = props => { 

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const ref = useRef() 
    const diffuseTex = useLoader(THREE.TextureLoader, './images/tedmedlogos/square_logo.png')   
 
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

   var tl = gsap.timeline();

    // if (props.isAlt){
    //   tl 
    //     .to( ref.current.rotation, {
    //       duration: 1,   
    //       x: Math.PI,  
    //   }) 
    // }  
 
    return (
        <mesh ref={ref} {...props}>
            <mesh castShadow receiveShadow position={[0, 0, .51]}>
                <boxBufferGeometry args={[.3,.3,.02]}   /> 
                <meshStandardMaterial roughness={0} bumpScale={1} color={hovered ? 'green' : 'grey'}  /> 

                <mesh        
                    onClick={(e) => {
                        console.log('click')
                        e.stopPropagation() 
                    }} 
                    onPointerOut={(e) => {
                        setHover(false)
                    }} 
                    onPointerOver={(e) => {
                        setHover(true)
                    }} 
                    scale={.27} receiveShadow rotation={[Math.PI, Math.PI, Math.PI]} position={[0,0,.011]}>
                    <planeBufferGeometry attach="geometry" args={[1, 1]} />
                    <meshStandardMaterial attach="material" map={diffuseTex}  />
                </mesh>  
            </mesh>  
        </mesh>
    )
}

export default Picframe   
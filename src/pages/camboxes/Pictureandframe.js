import React, { useRef, useState,useEffect, useFrame} from 'react'
import { useLoader } from '@react-three/fiber' 
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

    if (props.camposition){
        // alert('campos'+JSON.stringify(props.camposition))
    }

    // var tl = gsap.timeline();
    // tl 
    //     .to( ref.current.rotation, {
    //     duration: 1,   
    //     x: Math.PI,  
    // }) 
//   useFrame(({ clock, camera }) => {
// // need to trigger state cchange ?!
//     camera.position.z = 30 + Math.sin(clock.getElapsedTime()) * 4
//   })
    function moveCamera(e, zprops){
        alert('move'+zprops.camposition)
    }
  
    return (
        <mesh ref={ref} {...props}>
            <mesh castShadow receiveShadow position={[0, 0, .51]}>
                <boxBufferGeometry args={[.3,.3,.02]}   /> 
                <meshStandardMaterial roughness={0} bumpScale={1} color={hovered ? 'green' : 'grey'}  /> 

                <mesh        
                    onClick={(e) => {
 
                        console.log('click')
                        moveCamera(e, props);
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
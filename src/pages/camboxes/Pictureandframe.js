import React, { useRef, useState,useEffect, useFrame} from 'react'
import { useLoader, useThree } from '@react-three/fiber' 
import * as THREE from 'three'
import { gsap } from "gsap";  
import { Html } from '@react-three/drei' 
import { css } from '@emotion/core'

const Picframe = props => { 

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const ref = useRef() 
    const { camera } = useThree();
    const diffuseTex = useLoader(THREE.TextureLoader, './images/boxpic1.png')  
    const diffuseTex2 = useLoader(THREE.TextureLoader, './images/tedmedlogos/square_logo.png')   
    var theTexture = diffuseTex;

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
 
    if (props.isAlt){
        theTexture = diffuseTex2;
    }
 
    function moveCamera(e, zprops){

        if (zprops.camposition){
            var tl = gsap.timeline({onComplete:isCompletedd});
            tl 
                .to( camera.position, {
                    duration: 1,   
                    x: zprops.camposition[0],  
                    y: zprops.camposition[1],  
                    z: zprops.camposition[2],  
                }
            )  


        } 
        
    }
    function isCompletedd(){
        alert('Launch Overlay - unfinished!'); 
    }
  
    return (
        <mesh ref={ref} {...props}>
            <mesh castShadow receiveShadow position={[0, 0, .51]}>
                <boxBufferGeometry args={[.3,.3,.02]}   /> 
                <meshStandardMaterial roughness={0} bumpScale={1} color={hovered ? 'green' : 'grey'}  /> 

                <mesh        
                    onClick={(e) => { 
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
                    <meshStandardMaterial attach="material" map={theTexture}  />
                    <Html position={[0,1,0]}>
                        <div   
                        onClick={(e) => {  
                            moveCamera(e, props);
                            e.stopPropagation() 
                        }}    
                        css={css` 
                            cursor: pointer;  
                        `}>
                            Hotspot 
                        </div>
                    </Html>
                </mesh>  
            </mesh>  
        </mesh>
    )
}

export default Picframe   
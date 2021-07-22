 
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three' 

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tedmedia3dlogo.glb')
  var startTime = Date.now();

  var uniforms = {
      iGlobalTime: { type: "f", value: 1.0 },
      iResolution: { type: "v1", value: new THREE.Vector2(), }
  };
 
  useFrame(() => { 
        var currentTime = Date.now();
        uniforms.iGlobalTime.value = (currentTime - startTime) * 0.001; 
  });

  const fragmentShader = `
      
    uniform vec2 iResolution;
    uniform float iGlobalTime;

    varying vec2 vUv; 

    void main(void)
    {
        float time=iGlobalTime*0.6;
        vec2 uv = (-1.0 + 2.0 *vUv)* 2.0;
    
        vec2 uv0=uv;
        float i0=1.4;
        float i1=1.9;
        float i2=1.4;
        float i4=0.6;
        for(int s=0;s<20;s++) {
            vec2 r;
            r=vec2(cos(uv.y*i0-i4+time/i1),sin(uv.x*i0-i4+time/i1))/i2;
            r+=vec2(-r.y,r.x)*0.3;
            uv.xy+=r-0.5;
            i0*=1.93;
            i1*=1.15;
            i2*=1.7;
            i4+=0.65+0.1*time*i1;
        }
        float r=sin(uv.x-time)*0.4+0.6;
        float b=sin(uv.y+time)*0.4+0.6;
        float g=0.0; 
        gl_FragColor = vec4(r,g,b,1.0);
    }`

  const vertexShader = `
    varying vec2 vUv; 
    void main() {
        vUv = uv;
    
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
    }
  ` 
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve027.geometry}
        material={materials['SVGMat.028']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      > 
      </mesh>
      <mesh
        material={materials['SVGMat.027']}
        geometry={nodes.Curve026.geometry} 
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      > 
      </mesh>
      <mesh
        geometry={nodes.Curve025.geometry}
        material={materials['SVGMat.026']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve024.geometry}
        material={materials['SVGMat.025']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve023.geometry}
        material={materials['SVGMat.024']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve022.geometry}
        material={materials['SVGMat.023']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve021.geometry}
        material={materials['SVGMat.022']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve020.geometry}
        material={materials['SVGMat.021']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve019.geometry}
        material={materials['SVGMat.020']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve018.geometry}
        material={materials['SVGMat.019']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve017.geometry}
        material={materials['SVGMat.018']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve016.geometry}
        material={materials['SVGMat.017']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve015.geometry}
        material={materials['SVGMat.016']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve014.geometry}
        material={materials['SVGMat.015']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve013.geometry}
        material={materials['SVGMat.014']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve012.geometry}
        material={materials['SVGMat.013']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >     
      </mesh>
      <mesh
        geometry={nodes.Curve011.geometry}
        material={materials['SVGMat.012']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        
        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        />
        </mesh>
      <mesh
        geometry={nodes.Curve010.geometry}
        material={materials['SVGMat.011']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
       >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve009.geometry}
        material={materials['SVGMat.010']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve008.geometry}
        material={materials['SVGMat.009']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve007.geometry}
        material={materials['SVGMat.008']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh> 
 
      <mesh
        geometry={nodes.Curve006.geometry}
        material={materials['SVGMat.007']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve005.geometry}
        material={materials['SVGMat.006']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve004.geometry}
        material={materials['SVGMat.005']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
        >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials['SVGMat.004']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve001.geometry}
        material={materials['SVGMat.002']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve.geometry}
        // material={materials['SVGMat.001']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
      >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
      <mesh
        geometry={nodes.Curve002.geometry}
        // material={materials['SVGMat.003']}
        position={[-0.11, 0, -0.07]}
        scale={[1.42, 1.42, 1.42]}
         >        <shaderMaterial
          attach="material"
          args={[{
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          }]}
        /></mesh>
    </group>
  )
}

useGLTF.preload('/tedmedia3dlogo.glb')

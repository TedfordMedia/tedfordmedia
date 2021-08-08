/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/myroomchill.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 3, 0]} rotation={[-1.41, 0.51, 1.25]}>
        <group position={[6.26, -5.46, 2.24]} rotation={[1.04, -1.29, 0]}>
          <mesh castShadow receiveShadow
            geometry={nodes.hours.geometry}
            material={nodes.hours.material}
            position={[0.01, -0.05, -0.04]}
            rotation={[0, 0, -0.61]}
            scale={[0.93, 0.93, 0.93]}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.minutes.geometry}
            material={nodes.minutes.material}
            position={[0.01, -0.05, -0.03]}
            rotation={[0, 0, Math.PI / 4]}
            scale={[0.93, 0.93, 0.93]}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.numbers.geometry}
            material={nodes.numbers.material}
            position={[0.01, 0.42, 0.03]}
            scale={[0.93, 0.93, 0.93]}
          />
        </group>
        <group position={[5.23, -3.66, -1.33]} rotation={[1.04, -1.29, 0]}>
          <group position={[0.5, 0.28, -0.04]} rotation={[0, 0, 0]} scale={[0.12, 0.12, 0.12]}>
            <mesh geometry={nodes.door_1.geometry} material={nodes.door_1.material} />
            <mesh geometry={nodes.door_2.geometry} material={nodes.door_2.material} />
            <mesh geometry={nodes.door_3.geometry} material={nodes.door_3.material} />
            <mesh castShadow receiveShadow
              name="handle"
              geometry={nodes.handle.geometry}
              material={nodes.handle.material}
              position={[-7.13, 7.92, 0.27]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.8, 0.8, 0.8]}
            />
          </group>
          <mesh castShadow receiveShadow
            name="door_frame"
            geometry={nodes.door_frame.geometry}
            material={nodes.door_frame.material}
            position={[0, 1.28, 0.1]}
            scale={[0.31, 0.31, 0.22]}
          />
        </group>
        <group position={[5.08, 0.04, -3.51]} rotation={[-2.1, -0.28, -Math.PI]}>
          <group position={[0.5, 0.28, -0.04]} rotation={[0, 0, 0]} scale={[0.12, 0.12, 0.12]}>
            <mesh geometry={nodes.door_1.geometry} material={nodes.door_1.material} />
            <mesh geometry={nodes.door_2.geometry} material={nodes.door_2.material} />
            <mesh geometry={nodes.door_3.geometry} material={nodes.door_3.material} />
            <mesh
              name="handle001"
              geometry={nodes.handle001.geometry}
              material={nodes.handle001.material}
              position={[-7.13, 7.92, 0.27]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.8, 0.8, 0.8]}
            />
          </group>
          <mesh
            name="door_frame001" castShadow receiveShadow
            geometry={nodes.door_frame001.geometry}
            material={nodes.door_frame001.material}
            position={[0, 1.28, 0.1]}
            scale={[0.31, 0.31, 0.22]}
          />
        </group>
        <group position={[9.18, -7.17, 2.49]} rotation={[1.04, 0.28, 0]}>
          <group name="Door_1001" position={[-0.89, -0.17, 0.05]} scale={[2.54, 2.54, 2.54]}>
            <mesh  castShadow receiveShadowgeometry={nodes.Door_1_1.geometry} material={nodes.Door_1_1.material} />
            <mesh  castShadow receiveShadowgeometry={nodes.Door_1_2.geometry} material={nodes.Door_1_2.material} />
          </group>
          <group name="Door_2001" position={[0.96, -0.17, 0]} scale={[2.54, 2.54, 2.54]}>
            <mesh  castShadow receiveShadowgeometry={nodes.Door_2_1.geometry} material={nodes.Door_2_1.material} />
            <mesh  castShadow receiveShadowgeometry={nodes.Door_2_2.geometry} material={nodes.Door_2_2.material} />
          </group>
          <mesh
             castShadow receiveShadowgeometry={nodes.door_frame002.geometry}
            material={nodes.door_frame002.material}
            position={[0, -0.14, 0.07]}
            scale={[2.54, 2.54, 2.54]}
          />
        </group>
        <group position={[10.47, -5.9, 1.44]} rotation={[-2.1, 1.35, -Math.PI]} scale={[0.2, 0.2, 0.2]}>
          <group position={[1.07, 0.97, 3.54]} rotation={[1.57, 0, -0.07]} scale={[20000002, 20000000, 20000000]}>
            <group scale={[200, 200, 200]}>
              <mesh  castShadow receiveShadowgeometry={nodes.Curve.geometry} material={nodes.Curve.material} scale={[1.42, 1.42, 1.42]} />
              <mesh  castShadow receiveShadowgeometry={nodes.Curve001.geometry} material={nodes.Curve001.material} scale={[1.42, 1.42, 1.42]} />
              <mesh  castShadow receiveShadowgeometry={nodes.Curve002.geometry} material={nodes.Curve002.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve003.geometry} material={nodes.Curve003.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve004.geometry} material={nodes.Curve004.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve005.geometry} material={nodes.Curve005.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve006.geometry} material={nodes.Curve006.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve007.geometry} material={nodes.Curve007.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve008.geometry} material={nodes.Curve008.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve009.geometry} material={nodes.Curve009.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve010.geometry} material={nodes.Curve010.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve011.geometry} material={nodes.Curve011.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve012.geometry} material={nodes.Curve012.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve013.geometry} material={nodes.Curve013.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve014.geometry} material={nodes.Curve014.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve015.geometry} material={nodes.Curve015.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve016.geometry} material={nodes.Curve016.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve017.geometry} material={nodes.Curve017.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve018.geometry} material={nodes.Curve018.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve019.geometry} material={nodes.Curve019.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve020.geometry} material={nodes.Curve020.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve021.geometry} material={nodes.Curve021.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve022.geometry} material={nodes.Curve022.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve023.geometry} material={nodes.Curve023.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve024.geometry} material={nodes.Curve024.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve025.geometry} material={nodes.Curve025.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve026.geometry} material={nodes.Curve026.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve027.geometry} material={nodes.Curve027.material} scale={[1.42, 1.42, 1.42]} />
            </group>
          </group>
          <group position={[25.34, 0.49, 2.15]} rotation={[1.57, 0, -0.07]} scale={[10000001, 10000000, 10000001]}>
            <group scale={[200, 200, 200]}>
              <mesh geometry={nodes.Curve028.geometry} material={nodes.Curve028.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve029.geometry} material={nodes.Curve029.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve030.geometry} material={nodes.Curve030.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve031.geometry} material={nodes.Curve031.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve032.geometry} material={nodes.Curve032.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve033.geometry} material={nodes.Curve033.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve034.geometry} material={nodes.Curve034.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve035.geometry} material={nodes.Curve035.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve036.geometry} material={nodes.Curve036.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve037.geometry} material={nodes.Curve037.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve038.geometry} material={nodes.Curve038.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve039.geometry} material={nodes.Curve039.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve040.geometry} material={nodes.Curve040.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve041.geometry} material={nodes.Curve041.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve042.geometry} material={nodes.Curve042.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve043.geometry} material={nodes.Curve043.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve044.geometry} material={nodes.Curve044.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve045.geometry} material={nodes.Curve045.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve046.geometry} material={nodes.Curve046.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve047.geometry} material={nodes.Curve047.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve048.geometry} material={nodes.Curve048.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve049.geometry} material={nodes.Curve049.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve050.geometry} material={nodes.Curve050.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve051.geometry} material={nodes.Curve051.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve052.geometry} material={nodes.Curve052.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve053.geometry} material={nodes.Curve053.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve054.geometry} material={nodes.Curve054.material} scale={[1.42, 1.42, 1.42]} />
              <mesh geometry={nodes.Curve055.geometry} material={nodes.Curve055.material} scale={[1.42, 1.42, 1.42]} />
            </group>
          </group>
        </group>
        <mesh castShadow receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials['WOOD-FLOORS-Parquet-dark-Textures-ARCHITECTURE-Dark-parquet-flo']}
          position={[7.8, -3.79, -1.28]}
          rotation={[1.04, -1.29, 0]}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Wall_1.geometry}
          material={nodes.Wall_1.material}
          position={[5.45, -3.62, 0.39]}
          rotation={[1.04, -1.29, 0]}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Wall_2.geometry}
          material={materials['table 1']}
          position={[6.43, 1.14, -2.41]}
          rotation={[-2.1, -0.28, -Math.PI]}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Wall_3.geometry}
          material={nodes.Wall_3.material}
          position={[10.2, -2.42, -0.32]}
          rotation={[1.04, -1.29, 0]}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Wall_4.geometry}
          material={nodes.Wall_4.material}
          position={[9.19, -7.17, 2.48]}
          rotation={[1.04, 0.28, 0]}
        />
        <group position={[4.58, -1.03, -1.13]} rotation={[1.04, -1.29, 0]}>
          <mesh  castShadow receiveShadowgeometry={nodes.Window_1.geometry} material={nodes.Window_1.material} />
          <mesh  castShadow receiveShadowgeometry={nodes.Window_2.geometry} material={nodes.Window_2.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/myroomchill.glb')

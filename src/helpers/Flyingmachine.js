/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/flyingmachine.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {  
    actions['Take 01'].play()
  
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[2.23, 4.09, 1.93]} rotation={[0, -0.01, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant10Solid1_0.geometry} material={nodes.Composant10Solid1_0.material} />
        </group>
        <group position={[2.23, 4.09, 1.93]} rotation={[0, -0.6, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant10Solid2_0.geometry} material={nodes.Composant10Solid2_0.material} />
        </group>
        <group position={[2.23, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant10Solid3_0.geometry} material={nodes.Composant10Solid3_0.material} />
        </group>
        <group position={[0.95, 6.02, 5.52]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant11Solid2_0.geometry} material={nodes.Composant11Solid2_0.material} />
        </group>
        <group position={[1.41, 6.09, 4.3]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant11Solid3_0.geometry} material={nodes.Composant11Solid3_0.material} />
        </group>
        <group position={[-10.7, 5.58, 5.6]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant13Solid2_0.geometry} material={nodes.Composant13Solid2_0.material} />
        </group>
        <group position={[-11.23, 5.49, 4.6]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant13Solid3_0.geometry} material={nodes.Composant13Solid3_0.material} />
        </group>
        <group position={[10.71, 5.58, 5.6]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant14Solid2_0.geometry} material={nodes.Composant14Solid2_0.material} />
        </group>
        <group position={[11.23, 5.5, 4.6]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant14Solid3_0.geometry} material={nodes.Composant14Solid3_0.material} />
        </group>
        <group position={[0, -1.44, 1.75]} scale={[0.1, 0.09, 0.09]}>
          <mesh geometry={nodes.Composant15Solid2_0.geometry} material={nodes.Composant15Solid2_0.material} />
        </group>
        <group position={[0, -1.44, 1.75]} scale={[0.1, 0.09, 0.09]}>
          <mesh geometry={nodes.Composant15Solid3_0.geometry} material={nodes.Composant15Solid3_0.material} />
        </group>
        <group position={[0.98, 1.27, 1.08]} rotation={[0.01, 0, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant18Solid2_0.geometry} material={nodes.Composant18Solid2_0.material} />
        </group>
        <group position={[-0.97, 0.66, 1.16]} rotation={[0.04, 0, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant19Solid2_0.geometry} material={nodes.Composant19Solid2_0.material} />
        </group>
        <group position={[-2.23, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant6Solid1_0.geometry} material={nodes.Composant6Solid1_0.material} />
        </group>
        <group position={[-2.23, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant6Solid2_0.geometry} material={nodes.Composant6Solid2_0.material} />
        </group>
        <group position={[-2.23, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant6Solid3_0.geometry} material={nodes.Composant6Solid3_0.material} />
        </group>
        <group position={[-0.94, 6.01, 5.52]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant7Solid2_0.geometry} material={nodes.Composant7Solid2_0.material} />
        </group>
        <group position={[-1.4, 6.09, 4.3]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant7Solid3_0.geometry} material={nodes.Composant7Solid3_0.material} />
        </group>
        <group position={[0.01, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant9Solid2_0.geometry} material={nodes.Composant9Solid2_0.material} />
        </group>
        <group position={[0.01, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant9Solid3_0.geometry} material={nodes.Composant9Solid3_0.material} />
        </group>
        <group position={[0, -1.77, 8.23]} rotation={[-1.76, 0, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant9Solid4_0.geometry} material={nodes.Composant9Solid4_0.material} />
        </group>
        <group name="Composant9Solid5" position={[0.25, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant9Solid5_0.geometry} material={nodes.Composant9Solid5_0.material} />
        </group>
        <group position={[0, 3.03, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.CorpsSolid1_0.geometry} material={nodes.CorpsSolid1_0.material} />
        </group>
        <group position={[0, 2.52, 1.21]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.structure_tail_0.geometry} material={nodes.structure_tail_0.material} />
        </group>
        <group position={[-10.7, 6.12, 5.6]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[3.14, 0, 2.66]}>
              <group position={[0, 1.13, 0]} rotation={[Math.PI / 2, 0.45, 1.57]} scale={[1, 1, 1]}>
                <group position={[0.31, 3.93, 0]} rotation={[0.03, 0, 1.57]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.SolideSolid1_0.geometry} material={nodes.SolideSolid1_0.material} />
                </group>
              </group>
              <group position={[0, 0, 0.53]} rotation={[1.57, 0.48, -3.14]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant13Solid1_0.geometry} material={nodes.Composant13Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant15Solid1_0.geometry} material={nodes.Composant15Solid1_0.material} />
        </group>
        <group position={[0, -1.44, 1.75]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid10_0.geometry} material={nodes.Composant16Solid10_0.material} />
        </group>
        <group position={[0, 5.34, 0.36]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid11_0.geometry} material={nodes.Composant16Solid11_0.material} />
        </group>
        <group position={[0, 3.03, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid12_0.geometry} material={nodes.Composant16Solid12_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid5_0.geometry} material={materials.courroie} />
        </group>
        <group position={[-3.93, 3.1, 5.13]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid6_0.geometry} material={nodes.Composant16Solid6_0.material} />
        </group>
        <group position={[3.93, 3.11, 5.13]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid7_0.geometry} material={nodes.Composant16Solid7_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid8_0.geometry} material={nodes.Composant16Solid8_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant16Solid9_0.geometry} material={nodes.Composant16Solid9_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid1_0.geometry} material={nodes.Composant17Solid1_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid2_0.geometry} material={nodes.Composant17Solid2_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid3_0.geometry} material={nodes.Composant17Solid3_0.material} />
        </group>
        <group position={[0, 1.3, 3.47]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid4_0.geometry} material={nodes.Composant17Solid4_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid5_0.geometry} material={nodes.Composant17Solid5_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant17Solid6_0.geometry} material={nodes.Composant17Solid6_0.material} />
        </group>
        <group position={[0.01, 4.09, 1.93]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.Composant9Solid1_0.geometry} material={nodes.Composant9Solid1_0.material} />
        </group>
        <group position={[-1.16, -1.44, 3.1]} rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI, 0, 0]}>
            <group position={[0, 2.74, 0.38]} rotation={[-1.84, 0, 0]}>
              <group position={[0, 2.4, 0]} rotation={[1.13, 0, -Math.PI]}>
                <group position={[-0.19, 0, 0]} rotation={[-0.76, 0, -Math.PI]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.Foot2Solid1_0.geometry} material={nodes.Foot2Solid1_0.material} />
                </group>
              </group>
              <group position={[1.16, 0, 0]} rotation={[1.88, 0, 0]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant19Solid1_0.geometry} material={nodes.Composant19Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, 1.3, 3.47]} rotation={[-Math.PI, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <group position={[0, 1.07, 0]} rotation={[-3.12, 0, -1.56]} scale={[1, 1, 1]}>
              <group position={[0, 2.39, 0]} rotation={[-1.35, -0.02, 0.01]} scale={[1, 1, 1]}>
                <group position={[-0.07, 0.03, 0]} rotation={[2.9, -0.03, 0.03]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.FootSolid1_0.geometry} material={nodes.FootSolid1_0.material} />
                </group>
              </group>
              <group position={[-1.07, 0.01, -0.02]} rotation={[1.58, -0.01, 0.02]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant18Solid1_0.geometry} material={nodes.Composant18Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, 4.17, 3.17]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.structure_0.geometry} material={nodes.structure_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.tail_0.geometry} material={nodes.tail_0.material} />
        </group>
        <group position={[0, -1, -5]} scale={[0.1, 0.1, 0.1]}>
          <mesh geometry={nodes.tail_direction_0.geometry} material={nodes.tail_direction_0.material} />
        </group>
        <group position={[-3.93, 6.43, 5.13]}>
          <group rotation={[Math.PI, 0, 0]}>
            <group position={[0, 0.56, 0]} rotation={[-1.59, -0.01, -1.44]}>
              <group position={[0, 3.01, 0]} rotation={[1.57, -0.29, -1.55]} scale={[1, 1, 1]}>
                <group position={[-6.5, 10.43, -2.7]} rotation={[1.41, -0.03, -1.56]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.Composant7Solid1_0.geometry} material={nodes.Composant7Solid1_0.material} />
                </group>
              </group>
              <group position={[0.05, 0.03, 2.77]} rotation={[-1.45, -1.44, 0.13]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant8Solid1_0.geometry} material={nodes.Composant8Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
        <group position={[3.93, 6.04, 5.13]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[-3.14, -0.01, 1.43]} scale={[1, 1, 1]}>
              <group position={[0, 3.02, 0]} rotation={[1.58, 0.3, 1.57]} scale={[1, 1, 1]}>
                <group position={[7.06, 10.27, -2.57]} rotation={[1.41, 0, 1.57]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.Composant11Solid1_0.geometry} material={nodes.Composant11Solid1_0.material} />
                </group>
              </group>
              <group position={[0.01, -0.02, 2.93]} rotation={[-1.58, 1.43, 0.02]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant12Solid1_0.geometry} material={nodes.Composant12Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
        <group position={[10.71, 5.58, 5.6]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[-3.14, -0.03, -2.68]}>
              <group position={[0, 1.13, 0]} rotation={[1.57, -0.43, -1.6]}>
                <group position={[0, 9.82, 0]} rotation={[0.03, 0, -1.52]} scale={[0.1, 0.1, 0.1]}>
                  <mesh geometry={nodes.Solide2Solid1_0.geometry} material={nodes.Solide2Solid1_0.material} />
                </group>
              </group>
              <group position={[0, 0, 0]} rotation={[1.58, -0.46, -3.11]} scale={[0.1, 0.1, 0.1]}>
                <mesh geometry={nodes.Composant14Solid1_0.geometry} material={nodes.Composant14Solid1_0.material} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/flyingmachine.glb')
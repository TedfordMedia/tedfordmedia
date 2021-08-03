/*
Auto-generated  by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/steampunk_submarine.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => { 
    actions['Take 001'].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[0.03, 0.03, 0.03]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.BODY_MAIN_BULB1_0.geometry}
              material={materials.BULB1}
              skeleton={nodes.BODY_MAIN_BULB1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.BODY_MAIN_SHIP1_0.geometry}
              material={nodes.BODY_MAIN_SHIP1_0.material}
              skeleton={nodes.BODY_MAIN_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.BODY_MAIN_SHIP1_0001.geometry}
              material={nodes.BODY_MAIN_SHIP1_0001.material}
              skeleton={nodes.BODY_MAIN_SHIP1_0001.skeleton}
            />
            <skinnedMesh
              geometry={nodes.CHAINS_1_SHIP1_0.geometry}
              material={nodes.CHAINS_1_SHIP1_0.material}
              skeleton={nodes.CHAINS_1_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.CHAINS_2_SHIP1_0.geometry}
              material={nodes.CHAINS_2_SHIP1_0.material}
              skeleton={nodes.CHAINS_2_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.CHAINS_3_SHIP1_0.geometry}
              material={nodes.CHAINS_3_SHIP1_0.material}
              skeleton={nodes.CHAINS_3_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.MOTOR_SHIP1_0.geometry}
              material={nodes.MOTOR_SHIP1_0.material}
              skeleton={nodes.MOTOR_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.MOTOR_STICK_SHIP1_0.geometry}
              material={nodes.MOTOR_STICK_SHIP1_0.material}
              skeleton={nodes.MOTOR_STICK_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface360_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface360_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface360_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface391_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface391_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface391_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface418_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface418_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface418_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface428_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface428_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface428_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface431_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface431_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface431_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface444_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface444_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface444_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface475_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface475_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface475_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface544_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface544_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface544_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface570_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface570_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface570_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PLATEpolySurface592_SHIP1_0.geometry}
              material={nodes.PLATEpolySurface592_SHIP1_0.material}
              skeleton={nodes.PLATEpolySurface592_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface521_SHIP1_0.geometry}
              material={nodes.polySurface521_SHIP1_0.material}
              skeleton={nodes.polySurface521_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface618_SHIP1_0.geometry}
              material={nodes.polySurface618_SHIP1_0.material}
              skeleton={nodes.polySurface618_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface619_SHIP1_0.geometry}
              material={nodes.polySurface619_SHIP1_0.material}
              skeleton={nodes.polySurface619_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface621_SHIP1_0.geometry}
              material={nodes.polySurface621_SHIP1_0.material}
              skeleton={nodes.polySurface621_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface622_SHIP1_0.geometry}
              material={nodes.polySurface622_SHIP1_0.material}
              skeleton={nodes.polySurface622_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface623_SHIP1_0.geometry}
              material={nodes.polySurface623_SHIP1_0.material}
              skeleton={nodes.polySurface623_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface625_SHIP1_0.geometry}
              material={nodes.polySurface625_SHIP1_0.material}
              skeleton={nodes.polySurface625_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface626_SHIP1_0.geometry}
              material={nodes.polySurface626_SHIP1_0.material}
              skeleton={nodes.polySurface626_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface628_SHIP1_0.geometry}
              material={nodes.polySurface628_SHIP1_0.material}
              skeleton={nodes.polySurface628_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface629_SHIP1_0.geometry}
              material={nodes.polySurface629_SHIP1_0.material}
              skeleton={nodes.polySurface629_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.polySurface630_SHIP1_0.geometry}
              material={nodes.polySurface630_SHIP1_0.material}
              skeleton={nodes.polySurface630_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PROPELLER2_SHIP1_0.geometry}
              material={nodes.PROPELLER2_SHIP1_0.material}
              skeleton={nodes.PROPELLER2_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.PROPELLER_1_SHIP1_0.geometry}
              material={nodes.PROPELLER_1_SHIP1_0.material}
              skeleton={nodes.PROPELLER_1_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.RUBBER_1_SHIP1_0.geometry}
              material={nodes.RUBBER_1_SHIP1_0.material}
              skeleton={nodes.RUBBER_1_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.RUBBER_2_SHIP1_0.geometry}
              material={nodes.RUBBER_2_SHIP1_0.material}
              skeleton={nodes.RUBBER_2_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.RUBBER_3_SHIP1_0.geometry}
              material={nodes.RUBBER_3_SHIP1_0.material}
              skeleton={nodes.RUBBER_3_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.RUBBER_4_SHIP1_0.geometry}
              material={nodes.RUBBER_4_SHIP1_0.material}
              skeleton={nodes.RUBBER_4_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface401_SHIP1_0.geometry}
              material={nodes.SAILpolySurface401_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface401_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface402_SHIP1_0.geometry}
              material={nodes.SAILpolySurface402_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface402_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface480_SHIP1_0.geometry}
              material={nodes.SAILpolySurface480_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface480_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface481_SHIP1_0.geometry}
              material={nodes.SAILpolySurface481_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface481_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface518_SHIP1_0.geometry}
              material={nodes.SAILpolySurface518_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface518_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface519_SHIP1_0.geometry}
              material={nodes.SAILpolySurface519_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface519_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface599_SHIP1_0.geometry}
              material={nodes.SAILpolySurface599_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface599_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface600_SHIP1_0.geometry}
              material={nodes.SAILpolySurface600_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface600_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface607_SHIP1_0.geometry}
              material={nodes.SAILpolySurface607_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface607_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface608_SHIP1_0.geometry}
              material={nodes.SAILpolySurface608_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface608_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface609_SHIP1_0.geometry}
              material={nodes.SAILpolySurface609_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface609_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.SAILpolySurface610_SHIP1_0.geometry}
              material={nodes.SAILpolySurface610_SHIP1_0.material}
              skeleton={nodes.SAILpolySurface610_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.TAIL1_SHIP1_0.geometry}
              material={nodes.TAIL1_SHIP1_0.material}
              skeleton={nodes.TAIL1_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.TAIL_2_SHIP1_0.geometry}
              material={nodes.TAIL_2_SHIP1_0.material}
              skeleton={nodes.TAIL_2_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.TAIL_3_SHIP1_0.geometry}
              material={nodes.TAIL_3_SHIP1_0.material}
              skeleton={nodes.TAIL_3_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.WING_LEFT_SHIP1_0.geometry}
              material={nodes.WING_LEFT_SHIP1_0.material}
              skeleton={nodes.WING_LEFT_SHIP1_0.skeleton}
            />
            <skinnedMesh
              geometry={nodes.WING_RIGHT_SHIP1_0.geometry}
              material={nodes.WING_RIGHT_SHIP1_0.material}
              skeleton={nodes.WING_RIGHT_SHIP1_0.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/steampunk_submarine.glb')
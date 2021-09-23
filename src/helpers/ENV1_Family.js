/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/singlelivingroomb/ENV1_Family.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="ENV1_Family">
        <group name="ENV1_Family_1">
          <group name="ENV3_DUM" rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              name="BLESSED_Statue"
              geometry={nodes.BLESSED_Statue.geometry}
              material={nodes.BLESSED_Statue.material}
              position={[2.64, -2.09, -1.44]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="Books002"
              geometry={nodes.Books002.geometry}
              material={materials.Books}
              position={[0.88, -2.1, -1.71]}
            />
            <mesh
              name="BooksSetA001"
              geometry={nodes.BooksSetA001.geometry}
              material={materials.ENV_Family_Book02_MAT}
              position={[0.77, -2.11, -1.71]}
            />
            <mesh
              name="Ceiling"
              geometry={nodes.Ceiling.geometry}
              material={materials['ENV1_Family-No Name']}
              position={[0, 0.21, -0.04]}
            />
            <mesh
              name="Ceiling_light001"
              geometry={nodes.Ceiling_light001.geometry}
              material={nodes.Ceiling_light001.material}
              position={[-1.49, 0.09, -2.46]}
            />
            <mesh
              name="Ceiling_light002"
              geometry={nodes.Ceiling_light002.geometry}
              material={nodes.Ceiling_light002.material}
              position={[1.58, 0.09, -2.46]}
            />
            <mesh
              name="Coffeetable"
              geometry={nodes.Coffeetable.geometry}
              material={nodes.Coffeetable.material}
              position={[1.95, 1.61, -0.29]}
            />
            <mesh
              name="Console"
              geometry={nodes.Console.geometry}
              material={nodes.Console.material}
              position={[0.15, -1.61, -0.13]}
            />
            <mesh
              name="Curtains"
              geometry={nodes.Curtains.geometry}
              material={nodes.Curtains.material}
              position={[-2.79, 0.09, -1.14]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="Door"
              geometry={nodes.Door.geometry}
              material={materials['ENV1_Family-WindowsDoor']}
              position={[-1.79, 2.34, -1.09]}
            />
            <mesh
              name="ENV1_Sofa"
              geometry={nodes.ENV1_Sofa.geometry}
              material={nodes.ENV1_Sofa.material}
              position={[0.19, 1.82, -0.59]}
            />
            <mesh
              name="ENV1_Sofa_LO001"
              geometry={nodes.ENV1_Sofa_LO001.geometry}
              material={nodes.ENV1_Sofa_LO001.material}
              position={[2.66, -0.03, -0.59]}
            />
            <group name="ENV_Walls" position={[-0.14, -0.01, -1.33]}>
              <mesh
                name="ENV_Walls_1"
                geometry={nodes.ENV_Walls_1.geometry}
                material={materials['ENV1_Family-Walls_Coloured']}
              />
              <mesh
                name="ENV_Walls_2"
                geometry={nodes.ENV_Walls_2.geometry}
                material={materials['ENV1_Family-WhitePaint']}
              />
              <mesh
                name="ENV_Walls_3"
                geometry={nodes.ENV_Walls_3.geometry}
                material={materials['ENV1_Family-Walls_White']}
              />
              <mesh
                name="ENV_Walls_4"
                geometry={nodes.ENV_Walls_4.geometry}
                material={materials['ENV1_Family-WindowFrames']}
              />
            </group>
            <mesh
              name="Floor"
              geometry={nodes.Floor.geometry}
              material={materials['ENV1_Family-WoodenFloor_MAT']}
              position={[-0.15, 0, -0.04]}
            />
            <mesh
              name="FloorLamp"
              geometry={nodes.FloorLamp.geometry}
              material={nodes.FloorLamp.material}
              position={[2.95, 1.48, -0.85]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="HOME_Statue"
              geometry={nodes.HOME_Statue.geometry}
              material={nodes.HOME_Statue.material}
              position={[-2.34, -2.09, -1.46]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="Lamp001"
              geometry={nodes.Lamp001.geometry}
              material={nodes.Lamp001.material}
              position={[-1.04, -2.06, -0.99]}
            />
            <mesh
              name="Lamp002"
              geometry={nodes.Lamp002.geometry}
              material={nodes.Lamp002.material}
              position={[2.7, -2.12, -1.06]}
            />
            <mesh
              name="LOVED_Statue"
              geometry={nodes.LOVED_Statue.geometry}
              material={nodes.LOVED_Statue.material}
              position={[-1.85, -2.09, -1.85]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="Photoframe001"
              geometry={nodes.Photoframe001.geometry}
              material={nodes.Photoframe001.material}
              position={[-1.52, -2.06, -0.82]}
            />
            <mesh
              name="Photoframe002"
              geometry={nodes.Photoframe002.geometry}
              material={nodes.Photoframe002.material}
              position={[-1.77, -2.18, -0.82]}
            />
            <mesh
              name="Photoframe003"
              geometry={nodes.Photoframe003.geometry}
              material={nodes.Photoframe003.material}
              position={[-1.88, -2.1, -0.87]}
            />
            <mesh
              name="Photoframe004"
              geometry={nodes.Photoframe004.geometry}
              material={nodes.Photoframe004.material}
              position={[-2.24, -2.19, -0.81]}
            />
            <mesh
              name="Photoframe005"
              geometry={nodes.Photoframe005.geometry}
              material={nodes.Photoframe005.material}
              position={[-2.41, -2.07, -0.82]}
            />
            <mesh
              name="Photoframe007"
              geometry={nodes.Photoframe007.geometry}
              material={nodes.Photoframe007.material}
              position={[1.52, -2.18, -0.94]}
            />
            <mesh
              name="PhotoframeRound"
              geometry={nodes.PhotoframeRound.geometry}
              material={nodes.PhotoframeRound.material}
              position={[1.96, -2.14, -0.91]}
            />
            <mesh
              name="Pillows001"
              geometry={nodes.Pillows001.geometry}
              material={nodes.Pillows001.material}
              position={[-0.63, 1.74, -0.82]}
            />
            <mesh
              name="Pillows004"
              geometry={nodes.Pillows004.geometry}
              material={nodes.Pillows004.material}
              position={[1.01, 1.72, -0.82]}
            />
            <mesh
              name="Rug"
              geometry={nodes.Rug.geometry}
              material={materials['ENV1_Family-Rug']}
              position={[0.03, -0.03, -0.04]}
            />
            <mesh
              name="Shelves"
              geometry={nodes.Shelves.geometry}
              material={nodes.Shelves.material}
              position={[2.08, -2.13, -1.48]}
            />
            <mesh
              name="Shelves001"
              geometry={nodes.Shelves001.geometry}
              material={nodes.Shelves001.material}
              position={[-1.77, -2.13, -1.48]}
            />
            <mesh
              name="Sideboard"
              geometry={nodes.Sideboard.geometry}
              material={nodes.Sideboard.material}
              position={[-1.78, -2.12, -0.04]}
            />
            <mesh
              name="SM_Magazine_002"
              geometry={nodes.SM_Magazine_002.geometry}
              material={nodes.SM_Magazine_002.material}
              position={[2.13, 1.57, -0.55]}
            />
            <mesh
              name="Surfaces"
              geometry={nodes.Surfaces.geometry}
              material={nodes.Surfaces.material}
              position={[2.08, -2.12, -0.04]}
            />
            <mesh
              name="TV"
              geometry={nodes.TV.geometry}
              material={materials['ENV1_Family-TV_MAT']}
              position={[0.15, -1.68, -1.15]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name="TV_Stand"
              geometry={nodes.TV_Stand.geometry}
              material={nodes.TV_Stand.material}
              position={[0.15, -1.63, -0.38]}
            />
            <mesh
              name="Vase001"
              geometry={nodes.Vase001.geometry}
              material={materials['ENV_Traditional-Vasepink']}
              position={[1.8, -2.08, -1.52]}
            />
            <mesh
              name="Vase002"
              geometry={nodes.Vase002.geometry}
              material={materials['ENV_Traditional-VaseGreen']}
              position={[-2.61, -2.17, -1.93]}
            />
            <mesh
              name="Windows"
              geometry={nodes.Windows.geometry}
              material={materials['ENV_Traditional-CabinetGlass']}
              position={[0, 0.21, -0.04]}
            />
          </group>
          <group name="InteractiveObjects">
            <mesh
              name="ENV1_Wallet"
              geometry={nodes.ENV1_Wallet.geometry}
              material={materials.ENV1_Wallet_MAT}
              position={[1.75, 0.54, 1.38]}
              rotation={[-Math.PI, -0.09, -Math.PI]}>
              <group name="Hotspot" position={[0, 0.31, 0]} />
            </mesh>
            <mesh
              name="ENV1_Laptop"
              geometry={nodes.ENV1_Laptop.geometry}
              material={materials.ENV1_Laptop_MAT}
              position={[2.29, 0.83, -2.06]}
              rotation={[-Math.PI, 0.32, -Math.PI]}
              scale={[0.81, 0.81, 0.81]}>
              <group name="Hotspot_1" />
            </mesh>
            <mesh
              name="ENV1_Phone"
              geometry={nodes.ENV1_Phone.geometry}
              material={materials.ENV1_MobilePhone_MAT}
              position={[0.49, 0.7, 1.53]}
              rotation={[0.03, 0.44, 0]}
              scale={[1.3, 1.3, 1.3]}>
              <group name="Hotspot_2" position={[0, 0.18, -0.01]} />
            </mesh>
            <mesh
              name="Photograph"
              geometry={nodes.Photograph.geometry}
              material={materials.GetWellSoon_Photo_MAT}
              position={[1.78, 0.54, 1.56]}
              rotation={[1.71, -0.07, -0.48]}
            />
            <mesh
              name="PolicyDocument"
              geometry={nodes.PolicyDocument.geometry}
              material={materials.PolicyDocument_MAT}
              position={[-0.48, 0.69, 1.52]}
              rotation={[Math.PI / 2, 0, 1.56]}>
              <group name="Hotspot_3" position={[0, 0, -0.31]} />
            </mesh>
          </group>
          <group name="Characters">
            <group
              name="Dummy"
              position={[2.37, 0.83, 0.47]}
              rotation={[Math.PI / 2, 0, 0.26]}
              scale={[1.02, 1.02, 1.02]}>
              <group name="Arm_L" position={[0, -0.19, -0.52]} rotation={[-0.45, 0.68, -1.11]} />
              <group name="Arm_R" position={[0, 0.18, -0.52]} rotation={[0.36, 0.74, 1.07]} />
              <group name="Body" position={[0, 0, 0]} />
              <group name="UL_L" position={[0, 0.07, 0.07]} rotation={[-1.5, -1.01, -1.49]}>
                <group name="LL_L" position={[0.04, 0, 0.31]} rotation={[1.01, 1.44, -1.15]}>
                  <group
                    name="F_L"
                    position={[0.02, 0.01, 0.32]}
                    rotation={[-0.23, 0.07, 0.31]}
                    scale={[0.91, 0.91, 0.91]}
                  />
                </group>
              </group>
              <group name="UL_R" position={[0, -0.09, 0.04]} rotation={[1.26, -0.98, 1.23]}>
                <group name="LL_R" position={[0, -0.01, 0.32]} rotation={[-1.04, 1.31, 0.72]}>
                  <group
                    name="F_R"
                    position={[0.07, -0.01, 0.35]}
                    rotation={[-0.07, 0.01, 1.05]}
                    scale={[0.85, 0.85, 0.85]}
                  />
                </group>
              </group>
              <group name="Cube" position={[-0.12, 0.01, 0]} rotation={[0, 0.19, 0]} scale={[0.37, 0.29, 0.26]} />
              <group name="Capsule" position={[-0.39, -0.06, 0.49]} scale={[0.25, 0.3, 0.25]} />
            </group>
            <group
              name="Dummy_(1)"
              position={[2.38, 0.81, -0.69]}
              rotation={[1.58, 0.09, -0.62]}
              scale={[0.86, 0.86, 0.86]}>
              <group name="Arm_L_1" position={[0, -0.19, -0.52]} rotation={[-0.45, 0.68, -1.11]} />
              <group name="Arm_R_1" position={[0, 0.18, -0.52]} rotation={[0.36, 0.74, 1.07]} />
              <group name="Body_1" position={[0, 0, 0]} />
              <group name="UL_L_1" position={[-0.04, 0.02, 0.06]} rotation={[-1.52, -1.38, -1.48]}>
                <group name="LL_L_1" position={[0.04, -0.01, 0.37]} rotation={[0.32, 1.34, 0.36]}>
                  <group
                    name="F_L_1"
                    position={[0, 0.01, 0.34]}
                    rotation={[0.09, 0.22, -0.02]}
                    scale={[0.91, 0.91, 0.91]}
                  />
                </group>
              </group>
              <group name="UL_R_1" position={[-0.04, -0.06, 0.02]} rotation={[1.15, -1.14, 1.08]}>
                <group name="LL_R_1" position={[0.09, -0.04, 0.26]} rotation={[-0.05, 1.3, -0.1]}>
                  <group
                    name="F_R_1"
                    position={[0.01, 0.04, 0.32]}
                    rotation={[0.02, 0.15, -0.37]}
                    scale={[0.85, 0.85, 0.85]}
                  />
                </group>
              </group>
              <group name="Cube_1" position={[-0.12, 0.01, 0]} rotation={[0, 0.19, 0]} scale={[0.37, 0.29, 0.26]} />
              <group
                name="Capsule_1"
                position={[-0.44, -0.08, 0.55]}
                rotation={[-0.03, -0.03, 0.45]}
                scale={[0.25, 0.3, 0.25]}
              />
              <group name="Sphere" position={[0.02, 0.01, 0]} scale={[0.32, 0.32, 0.32]} />
            </group>
            <mesh
              name="GinaAndMike"
              geometry={nodes.GinaAndMike.geometry}
              material={materials.GinaAndMike}
              position={[2.12, 0.91, -0.04]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.73, 1.73, 1.73]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/singlelivingroomb/ENV1_Family.gltf')
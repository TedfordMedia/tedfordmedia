/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React , {  useEffect, Suspense, useRef} from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import * as TMT from '/static/TMTools.js'; 
import { Canvas, useThree, useFrame } from "@react-three/fiber"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/wholething/wholething.gltf')
  const { actions } = useAnimations(animations, group)

  const { scene } = useThree() 
 
  useEffect(() => { 
    TMT.sceneSetUnityLightMapShader(scene);
  }, [scene])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="wholething">
        <group name="wholething_1">
          <group name="Door_1_(1)" position={[-0.35, 0, -5.39]} rotation={[0, -Math.PI / 2, 0]}>
            <group name="door" position={[0.5, 0.28, -0.04]} rotation={[0, 0, 0]} scale={[0.12, 0.12, 0.12]}>
              <mesh name="door_2" geometry={nodes.door_2.geometry} material={nodes.door_2.material} />
              <mesh name="door_3" geometry={nodes.door_3.geometry} material={nodes.door_3.material} />
              <mesh name="door_4" geometry={nodes.door_4.geometry} material={nodes.door_4.material} />
              <mesh
                name="handle"
                geometry={nodes.handle.geometry}
                material={nodes.handle.material}
                position={[-7.13, 7.92, 0.27]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.8, 0.8, 0.8]}
              />
            </group>
            <mesh
              name="door_frame"
              geometry={nodes.door_frame.geometry}
              material={nodes.door_frame.material}
              position={[0, 1.28, 0.1]}
              rotation={[0, 0, 0]}
              scale={[0.31, 0.31, 0.22]}
            />
          </group>
          <group name="Directional_Light" position={[0, 3, 0]} rotation={[-1.41, 0.51, 1.25]} />
          <group name="Terrain" position={[-234.5, 0, 233.3]} />
          <group name="Spotlight" position={[6.66, 1.64, -5.47]} rotation={[-Math.PI / 2, 0, 0]} />
          <group name="Spotlight_(1)" position={[2.19, 2.83, -6.83]} rotation={[-Math.PI / 2, 0, 0]} />
          <group name="Point_light" position={[7.62, 2.04, -7]} />
          <group name="Camera" position={[6.61, 1.92, -6.58]}>
            <group name="Reflection_Probe" position={[0.08, -0.96, 0]} />
          </group>
          <group name="Bread_2" position={[3.43, 1.04, -8.28]}>
            <mesh
              name="Bread_1"
              geometry={nodes.Bread_1.geometry}
              material={nodes.Bread_1.material}
              position={[-0.02, -0.01, 0.02]}
              rotation={[0, 0, 0.01]}
              scale={[12.43, 12.43, 12.43]}
            />
            <mesh
              name="Bread_2_1"
              geometry={nodes.Bread_2_1.geometry}
              material={nodes.Bread_2_1.material}
              position={[0.02, 0.01, -0.02]}
              rotation={[3.14, 0, 3.13]}
              scale={[12.43, 12.43, 12.43]}
            />
          </group>
          <group name="Candles" position={[5.96, 1.52, -8.88]}>
            <mesh
              name="candle_2"
              geometry={nodes.candle_2.geometry}
              material={nodes.candle_2.material}
              position={[0.05, 0.06, 0]}
              rotation={[0, 1.49, -Math.PI]}
              scale={[-0.88, -0.88, -0.88]}
            />
            <mesh
              name="candle_3"
              geometry={nodes.candle_3.geometry}
              material={nodes.candle_3.material}
              position={[-0.04, 0.02, 0]}
              rotation={[0, 0.6, -Math.PI]}
              scale={[-0.88, -0.88, -0.88]}
            />
          </group>
          <group name="Clock" position={[7.33, 2.16, -4.41]}>
            <mesh
              name="hours"
              geometry={nodes.hours.geometry}
              material={nodes.hours.material}
              position={[0.01, -0.05, -0.04]}
              rotation={[0, 0, -0.61]}
              scale={[0.93, 0.93, 0.93]}
            />
            <mesh
              name="minutes"
              geometry={nodes.minutes.geometry}
              material={nodes.minutes.material}
              position={[0.01, -0.05, -0.03]}
              rotation={[0, 0, Math.PI / 4]}
              scale={[0.93, 0.93, 0.93]}
            />
            <mesh
              name="numbers"
              geometry={nodes.numbers.geometry}
              material={nodes.numbers.material}
              position={[0.01, 0.42, 0.03]}
              rotation={[0, 0, 0]}
              scale={[0.93, 0.93, 0.93]}
            />
          </group>
          <group name="Sink" position={[0.77, 0.94, -8.95]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              name="Sink_1"
              geometry={nodes.Sink_1.geometry}
              material={nodes.Sink_1.material}
              position={[0.05, -0.04, 0.03]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.04, 0.04, 0.04]}
            />
            <mesh
              name="Tap"
              geometry={nodes.Tap.geometry}
              material={nodes.Tap.material}
              position={[-0.06, 0.1, -0.03]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.04, 1.04, 1.04]}
            />
          </group>
          <group name="Tv" position={[7.39, 1, -8.8]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              name="Screen"
              geometry={nodes.Screen.geometry}
              material={materials.screen}
              rotation={[0, 0, 0]}
              scale={[5.1, 5.17, 5.1]}
            />
            <mesh
              name="tv"
              geometry={nodes.tv.geometry}
              material={materials.tv}
              rotation={[0, 0, 0]}
              scale={[5.1, 5.17, 5.1]}
            />
          </group>
          <group name="Door_2_1" position={[9.68, 1.5, -6.78]} rotation={[0, Math.PI / 2, 0]}>
            <group name="Door_1" position={[-0.89, -0.17, 0.05]} rotation={[0, 0, 0]} scale={[2.54, 2.54, 2.54]}>
              <mesh name="Door_1_2" geometry={nodes.Door_1_2.geometry} material={nodes.Door_1_2.material} />
              <mesh name="Door_1_3" geometry={nodes.Door_1_3.geometry} material={nodes.Door_1_3.material} />
            </group>
            <group name="Door_2" position={[0.96, -0.17, 0]} rotation={[0, 0, 0]} scale={[2.54, 2.54, 2.54]}>
              <mesh name="Door_2_2" geometry={nodes.Door_2_2.geometry} material={nodes.Door_2_2.material} />
              <mesh name="Door_2_3" geometry={nodes.Door_2_3.geometry} material={nodes.Door_2_3.material} />
            </group>
            <mesh
              name="door_frame_2"
              geometry={nodes.door_frame_2.geometry}
              material={nodes.door_frame_2.material}
              position={[0, -0.14, 0.07]}
              rotation={[0, 0, 0]}
              scale={[2.54, 2.54, 2.54]}
            />
          </group>
          <group name="Door_1_1" position={[3.82, 0, -4.35]}>
            <group name="door_1" position={[0.5, 0.28, -0.04]} rotation={[0, 0, 0]} scale={[0.12, 0.12, 0.12]}>
              <mesh name="door_2" geometry={nodes.door_2.geometry} material={nodes.door_2.material} />
              <mesh name="door_3" geometry={nodes.door_3.geometry} material={nodes.door_3.material} />
              <mesh name="door_4" geometry={nodes.door_4.geometry} material={nodes.door_4.material} />
              <mesh
                name="handle_1"
                geometry={nodes.handle_1.geometry}
                material={nodes.handle_1.material}
                position={[-7.13, 7.92, 0.27]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.8, 0.8, 0.8]}
              />
            </group>
            <mesh
              name="door_frame_1"
              geometry={nodes.door_frame_1.geometry}
              material={nodes.door_frame_1.material}
              position={[0, 1.28, 0.1]}
              rotation={[0, 0, 0]}
              scale={[0.31, 0.31, 0.22]}
            />
          </group>
          <mesh
            name="Dvd"
            geometry={nodes.Dvd.geometry}
            material={materials.dvd}
            position={[7.87, 0.36, -8.69]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            name="Pillow_3"
            geometry={nodes.Pillow_3.geometry}
            material={materials['pillow 3']}
            position={[7.52, 0.8, -4.95]}
            rotation={[0, 0.33, 0]}
          />
          <mesh
            name="Pillow_2"
            geometry={nodes.Pillow_2.geometry}
            material={materials['pillow 2']}
            position={[6.76, 0.84, -4.85]}
            rotation={[0, -0.48, 0]}
          />
          <mesh
            name="Pillow_1"
            geometry={nodes.Pillow_1.geometry}
            material={materials['pillow 1']}
            position={[7.92, 0.85, -4.78]}
          />
          <group name="Sofa" position={[7.38, 0.49, -4.99]} rotation={[0, 0, 0]}>
            <mesh name="Sofa_1" geometry={nodes.Sofa_1.geometry} material={materials.fabric2} />
            <mesh name="Sofa_2" geometry={nodes.Sofa_2.geometry} material={materials.metallic} />
          </group>
          <group name="Chair_2_(1)" position={[3.96, 0.44, -8.19]} rotation={[0, 0, 0]}>
            <mesh
              name="Chair_2_(1)_1"
              geometry={nodes['Chair_2_(1)_1'].geometry}
              material={nodes['Chair_2_(1)_1'].material}
            />
            <mesh
              name="Chair_2_(1)_2"
              geometry={nodes['Chair_2_(1)_2'].geometry}
              material={nodes['Chair_2_(1)_2'].material}
            />
          </group>
          <group name="Chair_2" position={[4.07, 0.44, -7.29]} rotation={[0, 0.26, 0]}>
            <mesh
              name="Chair_2_(1)_1"
              geometry={nodes['Chair_2_(1)_1'].geometry}
              material={nodes['Chair_2_(1)_1'].material}
            />
            <mesh
              name="Chair_2_(1)_2"
              geometry={nodes['Chair_2_(1)_2'].geometry}
              material={nodes['Chair_2_(1)_2'].material}
            />
          </group>
          <group name="Couch_2_(1)" position={[13.82, 0.54, -6.43]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              name="Couch_2_(1)_1"
              geometry={nodes['Couch_2_(1)_1'].geometry}
              material={nodes['Couch_2_(1)_1'].material}
            />
            <mesh
              name="Couch_2_(1)_2"
              geometry={nodes['Couch_2_(1)_2'].geometry}
              material={nodes['Couch_2_(1)_2'].material}
            />
          </group>
          <group name="Couch_2" position={[11.87, 0.54, -4.58]} rotation={[0, 0, 0]}>
            <mesh
              name="Couch_2_(1)_1"
              geometry={nodes['Couch_2_(1)_1'].geometry}
              material={nodes['Couch_2_(1)_1'].material}
            />
            <mesh
              name="Couch_2_(1)_2"
              geometry={nodes['Couch_2_(1)_2'].geometry}
              material={nodes['Couch_2_(1)_2'].material}
            />
          </group>
          <mesh
            name="Beer_(1)"
            geometry={nodes['Beer_(1)'].geometry}
            material={nodes['Beer_(1)'].material}
            position={[11.89, 0.49, -6.59]}
            rotation={[0, 0.72, 0]}
          />
          <mesh
            name="Beer"
            geometry={nodes.Beer.geometry}
            material={nodes.Beer.material}
            position={[11.57, 0.49, -6.13]}
            rotation={[-Math.PI, 0.33, -Math.PI]}
          />
          <group name="Plant_3_(1)" position={[13.96, 1.42, -13.05]} rotation={[0, 0, 0]}>
            <mesh
              name="Plant_3_(1)_1"
              geometry={nodes['Plant_3_(1)_1'].geometry}
              material={nodes['Plant_3_(1)_1'].material}
            />
            <mesh
              name="Plant_3_(1)_2"
              geometry={nodes['Plant_3_(1)_2'].geometry}
              material={nodes['Plant_3_(1)_2'].material}
            />
          </group>
          <group name="Plant_3" position={[10.35, 1.42, -13.05]} rotation={[0, 0, 0]}>
            <mesh
              name="Plant_3_(1)_1"
              geometry={nodes['Plant_3_(1)_1'].geometry}
              material={nodes['Plant_3_(1)_1'].material}
            />
            <mesh
              name="Plant_3_(1)_2"
              geometry={nodes['Plant_3_(1)_2'].geometry}
              material={nodes['Plant_3_(1)_2'].material}
            />
          </group>
          <group name="Lamp_2_(1)" position={[12.06, 0.43, -13.65]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh
              name="Lamp_2_(1)_1"
              geometry={nodes['Lamp_2_(1)_1'].geometry}
              material={nodes['Lamp_2_(1)_1'].material}
            />
            <mesh
              name="Lamp_2_(1)_2"
              geometry={nodes['Lamp_2_(1)_2'].geometry}
              material={nodes['Lamp_2_(1)_2'].material}
            />
          </group>
          <group name="Lamp_2_(2)" position={[10.2, 0.43, -4.52]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              name="Lamp_2_(1)_1"
              geometry={nodes['Lamp_2_(1)_1'].geometry}
              material={nodes['Lamp_2_(1)_1'].material}
            />
            <mesh
              name="Lamp_2_(1)_2"
              geometry={nodes['Lamp_2_(1)_2'].geometry}
              material={nodes['Lamp_2_(1)_2'].material}
            />
          </group>
          <group name="Lamp_2" position={[10.23, 0.43, -10]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              name="Lamp_2_(1)_1"
              geometry={nodes['Lamp_2_(1)_1'].geometry}
              material={nodes['Lamp_2_(1)_1'].material}
            />
            <mesh
              name="Lamp_2_(1)_2"
              geometry={nodes['Lamp_2_(1)_2'].geometry}
              material={nodes['Lamp_2_(1)_2'].material}
            />
          </group>
          <mesh
            name="Candle_2_(1)"
            geometry={nodes['Candle_2_(1)'].geometry}
            material={nodes['Candle_2_(1)'].material}
            position={[12.07, 0.13, -13.66]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Candle_2_(2)"
            geometry={nodes['Candle_2_(2)'].geometry}
            material={nodes['Candle_2_(2)'].material}
            position={[10.2, 0.13, -4.51]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Candle_2"
            geometry={nodes.Candle_2.geometry}
            material={nodes.Candle_2.material}
            position={[10.22, 0.13, -10]}
            rotation={[0, 0, 0]}
          />
          <group name="Led_spotlight_(1)" position={[6.88, 2.98, -8.49]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <group name="Led_spotlight_(2)" position={[8.92, 2.98, -8.49]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <group name="Led_spotlight_(3)" position={[4.58, 2.98, -5.06]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <group name="Led_spotlight_(4)" position={[6.88, 2.98, -5.06]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <group name="Led_spotlight_(5)" position={[8.92, 2.98, -5.06]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <group name="Led_spotlight" position={[4.58, 2.98, -8.49]} rotation={[0, 0, 0]}>
            <mesh
              name="Led_spotlight_(1)_1"
              geometry={nodes['Led_spotlight_(1)_1'].geometry}
              material={nodes['Led_spotlight_(1)_1'].material}
            />
            <mesh
              name="Led_spotlight_(1)_2"
              geometry={nodes['Led_spotlight_(1)_2'].geometry}
              material={nodes['Led_spotlight_(1)_2'].material}
            />
          </group>
          <mesh
            name="Bottle_1"
            geometry={nodes.Bottle_1.geometry}
            material={materials['bottle glass 1']}
            position={[4.89, 2.21, -8.91]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Books_4"
            geometry={nodes.Books_4.geometry}
            material={nodes.Books_4.material}
            position={[5.42, 0.23, -8.9]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            name="Books_3"
            geometry={nodes.Books_3.geometry}
            material={nodes.Books_3.material}
            position={[5.36, 0.71, -8.9]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            name="Books_2"
            geometry={nodes.Books_2.geometry}
            material={nodes.Books_2.material}
            position={[5.3, 1.69, -8.9]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            name="Tea_table"
            geometry={nodes.Tea_table.geometry}
            material={materials['table 1']}
            position={[7.42, 0.28, -6.67]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Crystal_ball"
            geometry={nodes.Crystal_ball.geometry}
            material={materials['crystal ball']}
            position={[5.97, 1.1, -8.88]}
          />
          <mesh
            name="Bread"
            geometry={nodes.Bread.geometry}
            material={materials.bread}
            position={[3.22, 1.09, -8.07]}
            rotation={[0, -0.89, 0]}
          />
          <mesh
            name="Books_1"
            geometry={nodes.Books_1.geometry}
            material={nodes.Books_1.material}
            position={[5.32, 1.21, -8.91]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <group
            name="Exterior_Walls"
            position={[12.1, 1.21, -8.93]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.98, 0.98, 0.98]}>
            <mesh
              name="Exterior_Walls_1"
              geometry={nodes.Exterior_Walls_1.geometry}
              material={materials['stone wall']}
            />
            <mesh name="Exterior_Walls_2" geometry={nodes.Exterior_Walls_2.geometry} material={materials.Concrete} />
          </group>
          <mesh
            name="Exhaust_hood"
            geometry={nodes.Exhaust_hood.geometry}
            material={materials['Exhaust hood']}
            position={[0, 2.21, -7.65]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group name="Fridge" position={[1.83, 1.13, -8.82]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh name="Fridge_1" geometry={nodes.Fridge_1.geometry} material={materials.fridge} />
            <mesh name="Fridge_2" geometry={nodes.Fridge_2.geometry} material={materials['fridge plastic']} />
          </group>
          <group name="Ball" position={[11.31, 0.22, -9.17]} rotation={[0, 0, 0]}>
            <mesh name="Ball_1" geometry={nodes.Ball_1.geometry} material={materials['white plastic']} />
            <mesh name="Ball_2" geometry={nodes.Ball_2.geometry} material={materials['black plastic']} />
          </group>
          <mesh
            name="Ceiling"
            geometry={nodes.Ceiling.geometry}
            material={materials.Ceiling}
            position={[4.76, 3.05, -6.77]}
            rotation={[0, 0, 0]}
          />
          <group name="Ceiling_lamp" position={[1.51, 2.95, -6.8]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              name="Ceiling_lamp_1"
              geometry={nodes.Ceiling_lamp_1.geometry}
              material={materials['lamp material']}
            />
            <mesh name="Ceiling_lamp_2" geometry={nodes.Ceiling_lamp_2.geometry} material={materials['lamp light 2']} />
          </group>
          <mesh
            name="Wall_2"
            geometry={nodes.Wall_2.geometry}
            material={nodes.Wall_2.material}
            position={[-0.35, 1.5, -6.79]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Wall_1"
            geometry={nodes.Wall_1.geometry}
            material={nodes.Wall_1.material}
            position={[4.68, 1.5, -4.33]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Wall_3"
            geometry={nodes.Wall_3.geometry}
            material={nodes.Wall_3.material}
            position={[4.65, 1.5, -9.28]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Wall_4"
            geometry={nodes.Wall_4.geometry}
            material={nodes.Wall_4.material}
            position={[9.67, 1.5, -6.79]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="Switch"
            geometry={nodes.Switch.geometry}
            material={materials.Switch}
            position={[-0.31, 1.37, -6.21]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Hotplate"
            geometry={nodes.Hotplate.geometry}
            material={materials.hotplate}
            position={[0.04, 0.93, -7.63]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="Utensils"
            geometry={nodes.Utensils.geometry}
            material={materials['metallic utensils_']}
            position={[-0.27, 1.4, -8.42]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group name="Window" position={[1.56, 1.5, -4.31]} rotation={[0, 0, 0]}>
            <mesh name="Window_1" geometry={nodes.Window_1.geometry} material={nodes.Window_1.material} />
            <mesh name="Window_2" geometry={nodes.Window_2.geometry} material={nodes.Window_2.material} />
          </group>
          <mesh
            name="Fresh_cola"
            geometry={nodes.Fresh_cola.geometry}
            material={materials['can drink']}
            position={[11.54, 0.46, -6.55]}
          />
          <group name="Exterior_Table" position={[11.83, 0.19, -6.37]} rotation={[0, 0, 0]}>
            <mesh
              name="Exterior_Table_1"
              geometry={nodes.Exterior_Table_1.geometry}
              material={nodes.Exterior_Table_1.material}
            />
            <mesh name="Exterior_Table_2" geometry={nodes.Exterior_Table_2.geometry} material={materials['glass 1']} />
          </group>
          <group name="Couch" position={[11.87, 0.64, -8]} rotation={[-Math.PI, 0.01, Math.PI]}>
            <mesh name="Couch_1" geometry={nodes.Couch_1.geometry} material={nodes.Couch_1.material} />
            <mesh name="Couch_3" geometry={nodes.Couch_3.geometry} material={nodes.Couch_3.material} />
          </group>
          <mesh
            name="Basket"
            geometry={nodes.Basket.geometry}
            material={materials.Rattan}
            position={[8.83, 0.27, -4.66]}
          />
          <mesh
            name="Floor"
            geometry={nodes.Floor.geometry}
            material={materials.floor}
            position={[4.66, -0.03, -6.78]}
          />
          <group name="Chair_1" position={[2.27, 0.49, -4.8]}>
            <mesh name="Chair_1_1" geometry={nodes.Chair_1_1.geometry} material={materials['wood 1']} />
            <mesh name="Chair_1_2" geometry={nodes.Chair_1_2.geometry} material={materials.fabric1} />
          </group>
          <mesh
            name="Wine_bottle"
            geometry={nodes.Wine_bottle.geometry}
            material={materials['bottle 1']}
            position={[3.19, 1.23, -8.76]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Tv_remote"
            geometry={nodes.Tv_remote.geometry}
            material={materials.buttons}
            position={[7.91, 0.56, -6.61]}
            rotation={[0, 0.42, 0]}
          />
          <group name="Shelving" position={[5.38, 1, -8.93]} rotation={[0, 0, 0]}>
            <mesh name="Shelving_1" geometry={nodes.Shelving_1.geometry} material={materials['metallic 1']} />
            <mesh name="Shelving_2" geometry={nodes.Shelving_2.geometry} material={materials['wood 3']} />
          </group>
          <mesh
            name="Plant_1"
            geometry={nodes.Plant_1.geometry}
            material={materials.plant}
            position={[8.95, 0.45, -8.73]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Picture_1"
            geometry={nodes.Picture_1.geometry}
            material={materials['picture 1']}
            position={[8.9, 1.96, -4.41]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Microwave"
            geometry={nodes.Microwave.geometry}
            material={materials.Microwave}
            position={[-0.02, 1.1, -6.88]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group name="Lamp" position={[5.44, 1.07, -4.91]} rotation={[0, -1.12, 0]}>
            <mesh name="Lamp_1" geometry={nodes.Lamp_1.geometry} material={materials['color lamp']} />
            <mesh name="Lamp_3" geometry={nodes.Lamp_3.geometry} material={materials['lamp light']} />
          </group>
          <group name="Kitchen_furniture_2" position={[3.25, 0.51, -7.91]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              name="Kitchen_furniture_2_1"
              geometry={nodes.Kitchen_furniture_2_1.geometry}
              material={nodes.Kitchen_furniture_2_1.material}
            />
            <mesh
              name="Kitchen_furniture_2_2"
              geometry={nodes.Kitchen_furniture_2_2.geometry}
              material={nodes.Kitchen_furniture_2_2.material}
            />
          </group>
          <group name="Kitchen_furniture_1" position={[0.3, 0.49, -8.08]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              name="Kitchen_furniture_1_1"
              geometry={nodes.Kitchen_furniture_1_1.geometry}
              material={nodes.Kitchen_furniture_1_1.material}
            />
            <mesh
              name="Kitchen_furniture_1_2"
              geometry={nodes.Kitchen_furniture_1_2.geometry}
              material={materials['kitchen metallic']}
            />
            <mesh
              name="Kitchen_furniture_1_3"
              geometry={nodes.Kitchen_furniture_1_3.geometry}
              material={nodes.Kitchen_furniture_1_3.material}
            />
          </group>
          <mesh
            name="Dish"
            geometry={nodes.Dish.geometry}
            material={materials.dish}
            position={[0.08, 0.94, -8.82]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Dice"
            geometry={nodes.Dice.geometry}
            material={materials.dice}
            position={[5.86, 2.11, -8.93]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Cup"
            geometry={nodes.Cup.geometry}
            material={materials.cup}
            position={[7.31, 0.62, -6.56]}
            rotation={[0, 0.97, 0]}
          />
          <mesh
            name="Coffee"
            geometry={nodes.Coffee.geometry}
            material={materials.coffee}
            position={[7.74, 0.59, -6.45]}
            rotation={[0, 0, 0]}
          />
          <mesh
            name="Carpet"
            geometry={nodes.Carpet.geometry}
            material={materials.carpet}
            position={[7.2, 0.01, -7.01]}
            rotation={[0, 0, 0]}
          />
          <group name="Candle" position={[8.19, 0.64, -8.7]} rotation={[0, 0, 0]}>
            <mesh name="Candle_1" geometry={nodes.Candle_1.geometry} material={nodes.Candle_1.material} />
            <mesh name="Candle_3" geometry={nodes.Candle_3.geometry} material={nodes.Candle_3.material} />
          </group>
          <group name="Cabinet" position={[7.43, 0.31, -8.84]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh name="Cabinet_1" geometry={nodes.Cabinet_1.geometry} material={materials['wood 2']} />
            <mesh name="Cabinet_2" geometry={nodes.Cabinet_2.geometry} material={materials['cabinet glass']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/wholething/wholething.gltf')
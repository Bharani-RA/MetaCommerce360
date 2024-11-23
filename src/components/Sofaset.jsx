
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sofaset(props) {
  const { nodes, materials } = useGLTF("models/sofaset.glb");
  return (
    <group {...props} dispose={null}>
    <group scale={0.01} >
      <group rotation={[Math.PI / 2, 0.007, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <group position={[-4.874, 51.266, 96.672]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sofa_classic_ch_models__textile_0.geometry}
                material={materials.textile}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.sofa_classic_ch_models__wood_0.geometry}
                material={materials.wood}
              />
            </group>
          </group>
          <group
            position={[144.939, -91.171, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group position={[-5.899, 51.266, 40.611]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .armchair_classic_ch_models_armchair_classic_ch_models_01_textile_0
                    .geometry
                }
                material={materials.textile_0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .armchair_classic_ch_models_armchair_classic_ch_models_01_wood_0
                    .geometry
                }
                material={materials.wood_0}
              />
            </group>
          </group>
          <group
            position={[-148.77, -87.899, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
          >
            <group position={[-5.899, 51.266, 40.611]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .armchair_classic_ch_models_armchair_classic_ch_models_textile_0
                    .geometry
                }
                material={materials.textile_0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .armchair_classic_ch_models_armchair_classic_ch_models_wood_0
                    .geometry
                }
                material={materials.wood_0}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table_low__0.geometry}
            material={materials.table_low__0}
            position={[-1.528, -132.478, 45]}
          />
        </group>
      </group>
    </group>
    </group>
  );
}

useGLTF.preload("models/sofaset.glb");
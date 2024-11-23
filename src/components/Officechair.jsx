
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Officechair(props) {
  const { nodes, materials } = useGLTF("models/office_chair.glb");
  return (
    <group {...props} dispose={null}>
    <group scale={5}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.087}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.officeChair_phong1_0.geometry}
          material={materials.phong1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/office_chair.glb");

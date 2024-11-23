import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Livingroom(props) {
  const { nodes, materials } = useGLTF("models/livingroom.glb");
  return (
    <group {...props} dispose={null}>
        <group scale={0.01} >
      <group position={[0, 35.433, -51.181]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_���������_0"].geometry}
          material={materials.material_1}
          position={[-17.224, -2.953, -7.677]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_���������_0"].geometry}
          material={materials.material_1}
          position={[-17.224, 11.811, 9.843]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0"].geometry}
          material={materials.material_2}
          position={[37.402, 17.717, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_���������_0_1"].geometry}
          material={materials.material_1}
          position={[17.224, 11.811, 9.843]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_1"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_2"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0"].geometry}
          material={materials.material_2}
          position={[35.433, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_1"].geometry}
          material={materials.material_2}
          position={[0, 0, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_3"].geometry}
          material={materials.material_2}
          position={[-37.402, 0, -19.488]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_4"].geometry}
          material={materials.material_2}
          position={[-37.402, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_5"].geometry}
          material={materials.material_2}
          position={[-37.402, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_2"].geometry}
          material={materials.material_2}
          position={[-35.433, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_6"].geometry}
          material={materials.material_2}
          position={[-37.402, 17.717, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_7"].geometry}
          material={materials.material_2}
          position={[37.402, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_8"].geometry}
          material={materials.material_2}
          position={[37.402, 0, -19.488]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_9"].geometry}
          material={materials.material_2}
          position={[37.402, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_���������_0"].geometry}
          material={materials.material_1}
          position={[17.224, -2.953, -7.677]}
        />
      </group>
      <group
        position={[78.002, 35.433, -15.946]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_3"].geometry}
          material={materials.material_2}
          position={[13.779, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_���������_0"].geometry}
          material={materials.material_1}
          position={[0, -2.953, -7.677]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_10"].geometry}
          material={materials.material_2}
          position={[15.748, 17.716, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_11"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_12"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_4"].geometry}
          material={materials.material_2}
          position={[-13.78, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_13"].geometry}
          material={materials.material_2}
          position={[15.748, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_5"].geometry}
          material={materials.material_2}
          position={[0, 0, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_14"].geometry}
          material={materials.material_2}
          position={[-15.748, 0, -19.488]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_15"].geometry}
          material={materials.material_2}
          position={[-15.748, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_16"].geometry}
          material={materials.material_2}
          position={[-15.748, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_17"].geometry}
          material={materials.material_2}
          position={[-15.748, 17.717, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_���������_0_1"].geometry}
          material={materials.material_1}
          position={[0, 8.858, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_18"].geometry}
          material={materials.material_2}
          position={[15.748, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_19"].geometry}
          material={materials.material_2}
          position={[15.748, 0, -19.488]}
        />
      </group>
      <group
        position={[-78.002, 35.433, -15.946]}
        rotation={[-Math.PI / 2, 0, Math.PI / 6]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_6"].geometry}
          material={materials.material_2}
          position={[13.779, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_���������_0_1"].geometry}
          material={materials.material_1}
          position={[0, -2.953, -7.677]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_20"].geometry}
          material={materials.material_2}
          position={[15.748, 17.716, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_21"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_22"].geometry}
          material={materials.material_2}
          position={[0, 14.764, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_7"].geometry}
          material={materials.material_2}
          position={[-13.78, -2.953, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_23"].geometry}
          material={materials.material_2}
          position={[15.748, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_8"].geometry}
          material={materials.material_2}
          position={[0, 0, -9.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_24"].geometry}
          material={materials.material_2}
          position={[-15.748, 0, -19.488]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_25"].geometry}
          material={materials.material_2}
          position={[-15.748, 0, 10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_26"].geometry}
          material={materials.material_2}
          position={[-15.748, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_27"].geometry}
          material={materials.material_2}
          position={[-15.748, 17.717, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_���������_0_2"].geometry}
          material={materials.material_1}
          position={[0, 8.858, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_28"].geometry}
          material={materials.material_2}
          position={[15.748, -15.748, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_29"].geometry}
          material={materials.material_2}
          position={[15.748, 0, -19.488]}
        />
      </group>
      <group position={[36.417, 94.488, -129.134]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_30"].geometry}
          material={materials.material_3}
          position={[-0.038, 0, 0.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_9"].geometry}
          material={materials.material_4}
          position={[0.822, 3.13, 0.197]}
          rotation={[0, 0, -0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_10"].geometry}
          material={materials.material_4}
          position={[3.013, -3.031, 0.197]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0"].geometry}
          material={materials.material_5}
          position={[0, 0, -0.787]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������_0"].geometry}
          material={materials.material_6}
          position={[0, 0, -0.787]}
        />
      </group>
      <group
        position={[153.543, 55.118, -78.74]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group
          position={[-10.943, 4.608, -1.968]}
          rotation={[0, 0, -Math.PI / 4]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_12"].geometry}
            material={materials.material_6}
            position={[0, 0, -37.402]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������_������_0_31"].geometry}
            material={materials.material_7}
            position={[-3.15, -11.811, -1.969]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���������_������_0_32"].geometry}
            material={materials.material_7}
            position={[3.15, -11.811, -1.969]}
            rotation={[0, 0, -Math.PI]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_11"].geometry}
          material={materials.material_2}
          position={[0, 0, 35.433]}
        />
      </group>
      <group
        position={[-153.543, 68.898, -52.165]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group position={[0, -53.15, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_13"].geometry}
            material={materials.material_4}
            position={[0, 0, -51.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_14"].geometry}
            material={materials.material_2}
            position={[0, 0, -53.15]}
          />
        </group>
        <group position={[0, 53.15, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_17"].geometry}
            material={materials.material_4}
            position={[0, 0, -51.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_18"].geometry}
            material={materials.material_2}
            position={[0, 0, -53.15]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_15"].geometry}
          material={materials.material_4}
          position={[0, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_16"].geometry}
          material={materials.material_2}
          position={[0, 0, -53.15]}
        />
      </group>
      <group
        position={[-71.85, 68.898, -133.858]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group position={[-53.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_19"].geometry}
            material={materials.material_4}
            position={[0, 0, -51.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_20"].geometry}
            material={materials.material_2}
            position={[0, 0, -53.15]}
          />
        </group>
        <group rotation={[0, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_21"].geometry}
            material={materials.material_4}
            position={[0, 0, -51.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_22"].geometry}
            material={materials.material_2}
            position={[0, 0, -53.15]}
          />
        </group>
        <group position={[53.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_23"].geometry}
            material={materials.material_2}
            position={[0, 0, -53.15]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_24"].geometry}
            material={materials.material_4}
            position={[0, 0, -51.181]}
          />
        </group>
      </group>
      <group
        position={[0, 114.173, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������_0_1"].geometry}
          material={materials.material_2}
          position={[0, 0, 3.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_25"].geometry}
          material={materials.material_3}
          position={[0, 0, -5.906]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_26"].geometry}
          material={materials.material_4}
          position={[0, 0, -7.874]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_������_0"].geometry}
          material={materials.material_2}
          position={[0, 0, -2.854]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_������_0"].geometry}
          material={materials.material_2}
          position={[0, 0, -2.854]}
          rotation={[0, 0, 2.356]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_33"].geometry}
          material={materials.material_2}
          position={[0, 0, -3.937]}
        />
      </group>
      <group
        position={[148.622, 74.803, 35.433]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.8}
      >
        <group position={[0, -19.685, 23.622]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_���������A_0_1"].geometry}
            material={materials.material}
            position={[0, 0, -0.984]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_2"].geometry}
            material={materials.material_2}
            position={[0, 0, -0.984]}
          />
        </group>
        <group position={[0, -19.685, -23.622]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_���������A_0_2"].geometry}
            material={materials.material_8}
            position={[0, 0, -0.984]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_3"].geometry}
            material={materials.material_2}
            position={[0, 0, -0.984]}
          />
        </group>
        <group position={[0, 19.685, 23.622]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_���������B_0"].geometry}
            material={materials.material_5}
            position={[0, 0, -0.984]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_4"].geometry}
            material={materials.material_2}
            position={[0, 0, -0.984]}
          />
        </group>
        <group position={[0, 19.685, -23.622]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_���������B_0_1"].geometry}
            material={materials.material_9}
            position={[0, 0, -0.984]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_5"].geometry}
            material={materials.material_2}
            position={[0, 0, -0.984]}
          />
        </group>
      </group>
      <group position={[0, 66.929, -23.622]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[153.543, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_6"].geometry}
            material={materials.material_7}
            position={[0, -59.055, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_7"].geometry}
            material={materials.material_7}
            position={[0, 55.118, 27.559]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_8"].geometry}
            material={materials.material_7}
            position={[0, 114.173, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_9"].geometry}
            material={materials.material_7}
            position={[0, 55.118, -59.055]}
          />
        </group>
        <group position={[-153.543, -19.685, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_10"].geometry}
            material={materials.material_7}
            position={[0, -82.677, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_11"].geometry}
            material={materials.material_7}
            position={[0, 51.181, 55.118]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_12"].geometry}
            material={materials.material_7}
            position={[0, 48.228, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_13"].geometry}
            material={materials.material_7}
            position={[-0.984, 130.906, -59.055]}
          />
        </group>
        <group position={[-42.323, 110.236, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_14"].geometry}
            material={materials.material_7}
            position={[-28.543, 0, 55.118]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_15"].geometry}
            material={materials.material_7}
            position={[-29.528, 0, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_16"].geometry}
            material={materials.material_7}
            position={[79.724, 0, -59.055]}
          />
        </group>
        <group position={[108.268, 137.795, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_17"].geometry}
            material={materials.material_7}
            position={[0, 19.685, -59.055]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_������_0_18"].geometry}
            material={materials.material_7}
            position={[-45.276, -3.937, -59.055]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_27"].geometry}
          material={materials.material_7}
          position={[0, -157.48, -59.055]}
        />
      </group>
      <group position={[0, 11.811, -23.622]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_���������_0_2"].geometry}
          material={materials.material_10}
          position={[0, -23.622, -3.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_���������_0_3"].geometry}
          material={materials.material_10}
          position={[108.268, 129.921, -3.937]}
        />
      </group>
      <group position={[0, 34.185, 23.622]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-31.522, -3.937, 12.795]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������_������_0_28"].geometry}
            material={materials.material_3}
            position={[-0.368, 0, -5.445]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["���_���_0"].geometry}
            material={materials.material_11}
            position={[-0.368, 0, -5.445]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������3���_������_0"].geometry}
            material={materials.material_12}
            position={[-0.246, -2.245, 2.033]}
            rotation={[-Math.PI / 3, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������1���_������_0_1"].geometry}
            material={materials.material_12}
            position={[-2.456, 0, 1.564]}
            rotation={[0, Math.PI / 4, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������2���_������_0_1"].geometry}
            material={materials.material_12}
            position={[-1.28, 2.026, 2.033]}
            rotation={[0.839, 0.725, -1.033]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������5���_������_0"].geometry}
            material={materials.material_12}
            position={[-0.014, 0.545, 2.461]}
            rotation={[-1.749, -1.13, 1.453]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["������4���_������_0"].geometry}
            material={materials.material_12}
            position={[2.244, 0.747, 1.564]}
            rotation={[0.464, -0.659, -2.457]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_34"].geometry}
          material={materials.material_2}
          position={[-20.079, 0, -4.461]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_29"].geometry}
          material={materials.material_2}
          position={[-38.779, 0, -18.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_30"].geometry}
          material={materials.material_2}
          position={[0, 0, -16.272]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_31"].geometry}
          material={materials.material_6}
          position={[3.543, 0, -14.303]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_32"].geometry}
          material={materials.material_4}
          position={[23.622, 0, 1.445]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_35"].geometry}
          material={materials.material_2}
          position={[23.622, 0, 1.445]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_33"].geometry}
          material={materials.material_2}
          position={[38.779, 0, -18.24]}
        />
      </group>
      <group
        position={[-140.573, 45.111, -120.625]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���_0_1"].geometry}
          material={materials.material_11}
          position={[0.809, -0.546, -29.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_34"].geometry}
          material={materials.material_3}
          position={[0.809, -0.546, -29.363]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������6���_������_0"].geometry}
          material={materials.material_12}
          position={[4.62, -5.705, 11.834]}
          rotation={[-0.602, -0.378, 2.063]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_������_0_2"].geometry}
          material={materials.material_12}
          position={[3.248, -5.729, 17.415]}
          rotation={[-0.925, -0.59, 1.968]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������4���_������_0_1"].geometry}
          material={materials.material_12}
          position={[6.307, 1.068, 13.153]}
          rotation={[0, -Math.PI / 3, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������3���_������_0_1"].geometry}
          material={materials.material_12}
          position={[2.094, 5.973, 17.415]}
          rotation={[1.02, -0.301, -1.751]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_������_0_2"].geometry}
          material={materials.material_12}
          position={[-4.16, -0.284, 18.701]}
          rotation={[-0.778, 1.325, 0.793]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������5���_������_0_1"].geometry}
          material={materials.material_12}
          position={[-4.979, -5.362, 12.562]}
          rotation={[-0.537, 0.725, 0.732]}
        />
      </group>
      <group position={[0, 70.866, 120.079]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_36"].geometry}
          material={materials.material_2}
          position={[23.228, 0, 29.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_37"].geometry}
          material={materials.material_2}
          position={[23.228, 0, 51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������1���_������_0"].geometry}
          material={materials.material_2}
          position={[124.016, 0, -33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������2���_������_0"].geometry}
          material={materials.material_2}
          position={[77.559, 0, -33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������3���_������_0"].geometry}
          material={materials.material_2}
          position={[27.165, 0, 33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������1���_������_0_1"].geometry}
          material={materials.material_3}
          position={[0, -0.984, 33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������2���_������_0_1"].geometry}
          material={materials.material_3}
          position={[-50.394, -0.984, 33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������1���_������_0"].geometry}
          material={materials.material_3}
          position={[0, -0.984, 33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������2���_������_0"].geometry}
          material={materials.material_3}
          position={[-50.394, -0.984, 33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_38"].geometry}
          material={materials.material_3}
          position={[106.299, -0.984, -33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_39"].geometry}
          material={materials.material_6}
          position={[85.039, -0.984, -33.465]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0"].geometry}
          material={materials.material_2}
          position={[100.787, 0, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������1���_������_0_2"].geometry}
          material={materials.material_3}
          position={[50.394, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_������_0_3"].geometry}
          material={materials.material_3}
          position={[50.394, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_������_0_4"].geometry}
          material={materials.material_2}
          position={[50.394, -0.984, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_������_0_3"].geometry}
          material={materials.material_2}
          position={[0, -0.984, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������2���_������_0_2"].geometry}
          material={materials.material_3}
          position={[0, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������3���_������_0_1"].geometry}
          material={materials.material_3}
          position={[-50.394, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������3���_������_0_2"].geometry}
          material={materials.material_2}
          position={[-50.394, -0.984, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_������_0_4"].geometry}
          material={materials.material_3}
          position={[0, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������3���_������_0_3"].geometry}
          material={materials.material_3}
          position={[-50.394, 0, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_1"].geometry}
          material={materials.material_2}
          position={[-77.559, 0, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������3���_������_0_2"].geometry}
          material={materials.material_6}
          position={[-100.787, -0.984, -7.874]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������4���_������_0"].geometry}
          material={materials.material_6}
          position={[-100.787, -0.984, 11.811]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������5���_������_0"].geometry}
          material={materials.material_6}
          position={[-100.787, -0.984, 31.496]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_2"].geometry}
          material={materials.material_2}
          position={[-124.016, 0, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������_������_0_40"].geometry}
          material={materials.material_3}
          position={[-111.417, -0.984, -51.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������2���_������_0_3"].geometry}
          material={materials.material_2}
          position={[-90.157, -0.984, -29.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_3"].geometry}
          material={materials.material_7}
          position={[-100.787, 8.858, -25.984]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_35"].geometry}
          material={materials.material_4}
          position={[-106.299, 8.858, -55.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���������1���_������_0_3"].geometry}
          material={materials.material_2}
          position={[-100.787, -0.984, -55.118]}
        />
      </group>
      <group
        position={[108.268, 62.992, -165.846]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_36"].geometry}
          material={materials.material_3}
          position={[0, -0.492, -43.307]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������_0_19"].geometry}
          material={materials.material_2}
          position={[0, 0.492, -47.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_37"].geometry}
          material={materials.material_3}
          position={[0, -0.492, -43.307]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���1���_������_0"].geometry}
          material={materials.material_6}
          position={[0, 2.461, 5.906]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���2���_������_0"].geometry}
          material={materials.material_6}
          position={[0, 2.461, 25.591]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���3���_������_0"].geometry}
          material={materials.material_6}
          position={[0, 2.461, 45.276]}
        />
      </group>
      <group
        position={[-81.496, 72.047, 126.181]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������A_0"].geometry}
          material={materials.material_13}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_1"].geometry}
          material={materials.material}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������������A_0"].geometry}
          material={materials.material_15}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_2"].geometry}
          material={materials.material_8}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_3"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
      </group>
      <group
        position={[-93.307, 71.457, 126.575]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������������B_0"].geometry}
          material={materials.material_16}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������B_0"].geometry}
          material={materials.material_17}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_1"].geometry}
          material={materials.material_9}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_2"].geometry}
          material={materials.material_5}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_3"].geometry}
          material={materials.material_18}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_4"].geometry}
          material={materials.material_18}
          position={[0, 0, -4.528]}
        />
      </group>
      <group
        position={[-120.079, 91.732, 126.181]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������A_0_1"].geometry}
          material={materials.material_13}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_4"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_5"].geometry}
          material={materials.material}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������������A_0_1"].geometry}
          material={materials.material_15}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_6"].geometry}
          material={materials.material_8}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_7"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
      </group>
      <group
        position={[127.953, 95.669, -168.307]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������A_0_2"].geometry}
          material={materials.material_13}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_8"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_9"].geometry}
          material={materials.material_8}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������������A_0_2"].geometry}
          material={materials.material_15}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_10"].geometry}
          material={materials.material}
          position={[0, 0, -5.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������A_0_11"].geometry}
          material={materials.material_14}
          position={[0, 0, -5.118]}
        />
      </group>
      <group
        position={[139.764, 95.079, -168.701]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������B_0_1"].geometry}
          material={materials.material_17}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_5"].geometry}
          material={materials.material_18}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_6"].geometry}
          material={materials.material_18}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_7"].geometry}
          material={materials.material_5}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_���������B_0_8"].geometry}
          material={materials.material_9}
          position={[0, 0, -4.528]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["���_������������B_0_1"].geometry}
          material={materials.material_16}
          position={[0, 0, -4.528]}
        />
      </group>
      <group position={[0, 70.866, 126.378]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_4"].geometry}
          material={materials.material_7}
          position={[0, -2.953, -5.906]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_38"].geometry}
          material={materials.material_2}
          position={[0, 3.543, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_5"].geometry}
          material={materials.material_7}
          position={[15.748, -1.772, -7.874]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_������_0_39"].geometry}
          material={materials.material_7}
          position={[0, 3.15, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������������_������_0_6"].geometry}
          material={materials.material_7}
          position={[-15.748, -1.772, -7.874]}
        />
      </group>
      <group
        position={[-26.378, 41.163, -49.723]}
        rotation={[-0.77, 0.393, 0.355]}
        scale={0.9}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������1���_������_0_5"].geometry}
          material={materials.material_3}
          position={[0.015, 0.013, 12.656]}
        />
      </group>
      <group
        position={[29.281, 42.349, -50.482]}
        rotation={[-0.339, -1.021, 2.849]}
        scale={0.9}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������2���_������_0_5"].geometry}
          material={materials.material_3}
          position={[0.015, 0.013, 12.656]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["������_���������A_0"].geometry}
        material={materials.material}
        position={[0, 15.748, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
    </group>
  );
}

useGLTF.preload("models/livingroom.glb");
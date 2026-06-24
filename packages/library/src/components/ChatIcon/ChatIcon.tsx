import { useMemo } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { ChatIconProps } from "./types";

export function ChatIcon(props: ChatIconProps) {
  const bubbleShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.5, 0.4);
    shape.lineTo(0.5, 0.4);
    shape.quadraticCurveTo(0.6, 0.4, 0.6, 0.3);
    shape.lineTo(0.6, -0.2);
    shape.quadraticCurveTo(0.6, -0.3, 0.5, -0.3);
    shape.lineTo(-0.15, -0.3);
    // Tail pointing down-left
    shape.lineTo(-0.4, -0.6);
    shape.lineTo(-0.3, -0.3);
    shape.lineTo(-0.5, -0.3);
    shape.quadraticCurveTo(-0.6, -0.3, -0.6, -0.2);
    shape.lineTo(-0.6, 0.3);
    shape.quadraticCurveTo(-0.6, 0.4, -0.5, 0.4);
    return shape;
  }, []);

  const extrudeSettings = {
    depth: 0.16,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.06,
    bevelThickness: 0.06,
  };

  return (
    <SharedWrapper iconId="chat" {...props}>
      {(mat) => (
        <group position={[0, 0.1, 0]} rotation={[0.2, -0.2, 0]}>
          {/* Main Bubble Body */}
          <mesh castShadow receiveShadow position={[0, 0, -0.08]}>
            <extrudeGeometry args={[bubbleShape, extrudeSettings]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.4}
            />
          </mesh>

          {/* Floating Message Lines for realistic context */}
          <mesh position={[-0.05, 0.1, 0.11]} castShadow>
            <RoundedBox args={[0.55, 0.07, 0.03]} radius={0.03} smoothness={4}>
              <meshStandardMaterial 
                roughness={0.4} 
                metalness={0.1} 
                color={props.theme === "dark" ? "#f8fafc" : "#1e293b"} 
              />
            </RoundedBox>
          </mesh>

          <mesh position={[-0.15, -0.08, 0.11]} castShadow>
            <RoundedBox args={[0.35, 0.07, 0.03]} radius={0.03} smoothness={4}>
              <meshStandardMaterial 
                roughness={0.4} 
                metalness={0.1} 
                color={props.theme === "dark" ? "#f8fafc" : "#1e293b"} 
              />
            </RoundedBox>
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

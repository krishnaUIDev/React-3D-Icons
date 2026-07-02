import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { LinkedinIconProps } from "./types";

export function LinkedinIcon(props: LinkedinIconProps) {
  return (
    <SharedWrapper iconId="linkedin" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]}>
          {/* Main Rounded Box Backplate */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.1, 1.1, 0.28]} radius={0.25} smoothness={8}>
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
            </RoundedBox>
          </mesh>

          {/* Extruded "in" letters */}
          <group position={[-0.04, 0, 0.15]}>
            {/* i - Dot */}
            <mesh castShadow position={[-0.18, 0.20, 0]}>
              <boxGeometry args={[0.09, 0.09, 0.06]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* i - Stem */}
            <mesh castShadow position={[-0.18, -0.05, 0]}>
              <boxGeometry args={[0.09, 0.30, 0.06]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* n - Left Stem */}
            <mesh castShadow position={[0.03, -0.03, 0]}>
              <boxGeometry args={[0.09, 0.34, 0.06]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* n - Right Stem */}
            <mesh castShadow position={[0.21, -0.07, 0]}>
              <boxGeometry args={[0.09, 0.26, 0.06]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* n - Arch Bridge */}
            <mesh castShadow position={[0.12, 0.10, 0]}>
              <boxGeometry args={[0.18, 0.08, 0.06]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

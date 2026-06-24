import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { LockIconProps } from "./types";

export function LockIcon(props: LockIconProps) {
  return (
    <SharedWrapper iconId="lock" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.2, 0.02]} position={[0, 0.05, 0]}>
          
          {/* Padlock Shackle Loop (Shackle arch) */}
          <group position={[0, 0.16, 0]}>
            {/* Curved Arch (Half Torus) */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.28, 0.07, 16, 48, Math.PI]} />
              <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
            </mesh>
            {/* Left Stem */}
            <mesh position={[-0.28, -0.15, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
            </mesh>
            {/* Right Stem */}
            <mesh position={[0.28, -0.15, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Padlock Body */}
          <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.85, 0.58, 0.36]} radius={0.1} smoothness={4}>
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

          {/* Keyhole (Contrasting dark keyhole details) */}
          <group position={[0, -0.18, 0.185]}>
            {/* Top Circle */}
            <mesh castShadow>
              <cylinderGeometry args={[0.075, 0.075, 0.02, 16]} />
              <meshStandardMaterial roughness={0.7} color="#0f172a" />
            </mesh>
            {/* Bottom Triangle/Slot */}
            <mesh position={[0, -0.09, 0]} castShadow>
              <boxGeometry args={[0.06, 0.12, 0.02]} />
              <meshStandardMaterial roughness={0.7} color="#0f172a" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

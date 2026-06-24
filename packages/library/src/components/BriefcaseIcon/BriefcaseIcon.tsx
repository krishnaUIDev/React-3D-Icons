import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function BriefcaseIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="briefcase" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, -0.05, 0]}>
          
          {/* Main Case Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.9, 0.34]} />
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

          {/* Left Latch (Metallic Gold/Silver lock) */}
          <mesh castShadow position={[-0.32, 0.1, 0.18]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.12, 0.16, 0.06]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Right Latch (Metallic Gold/Silver lock) */}
          <mesh castShadow position={[0.32, 0.1, 0.18]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.12, 0.16, 0.06]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Center Strap (Premium accent bar) */}
          <mesh position={[0, 0, 0.18]} castShadow>
            <boxGeometry args={[0.08, 0.92, 0.02]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#27272a" />
          </mesh>

          {/* Top Handle - Left Joint */}
          <mesh position={[-0.22, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.16, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Top Handle - Right Joint */}
          <mesh position={[0.22, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.16, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Top Handle - Grip Bar */}
          <mesh position={[0, 0.58, 0]} castShadow>
            <boxGeometry args={[0.48, 0.06, 0.08]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

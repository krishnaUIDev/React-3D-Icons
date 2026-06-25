import { SharedWrapper } from "../SharedWrapper";
import { DolphinIconProps } from "./types";

export function DolphinIcon(props: DolphinIconProps) {
  return (
    <SharedWrapper iconId="dolphin" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 6, -Math.PI / 12]} position={[0, 0, 0]}>
          {/* Main Leaping Body Segment (Middle) */}
          <mesh castShadow receiveShadow scale={[1.6, 0.74, 0.62]} rotation={[0, 0, 0.2]}>
            <sphereGeometry args={[0.14, 24, 12]} />
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

          {/* Head & Snout (Front curved extension) */}
          <group position={[0.14, 0.06, 0]} rotation={[0, 0, -0.15]}>
            <mesh castShadow scale={[1.2, 0.9, 0.9]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial roughness={0.3} metalness={0.4} color="#cbd5e1" />
            </mesh>
            {/* Tapered beak snout */}
            <mesh position={[0.06, -0.02, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
              <coneGeometry args={[0.02, 0.06, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.4} color="#cbd5e1" />
            </mesh>
            {/* Glowing Snout Tip */}
            <mesh position={[0.09, -0.02, 0]} castShadow>
              <sphereGeometry args={[0.008, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Curved Lower Tail Stem */}
          <mesh position={[-0.15, -0.06, 0]} rotation={[0, 0, 0.55]} castShadow>
            <cylinderGeometry args={[0.046, 0.02, 0.16, 12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.4} color="#cbd5e1" />
          </mesh>

          {/* Tail Fin (Double fluke wings) */}
          <group position={[-0.24, -0.12, 0]} rotation={[0, 0, 0.4]}>
            {/* Left fluke */}
            <mesh position={[0, 0, 0.04]} rotation={[0.2, 0, 0]} castShadow>
              <boxGeometry args={[0.04, 0.016, 0.08]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#94a3b8" />
            </mesh>
            {/* Right fluke */}
            <mesh position={[0, 0, -0.04]} rotation={[-0.2, 0, 0]} castShadow>
              <boxGeometry args={[0.04, 0.016, 0.08]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#94a3b8" />
            </mesh>
          </group>

          {/* Curved Dorsal Fin (Top spine) */}
          <mesh position={[-0.02, 0.13, 0]} rotation={[0, 0, -0.55]} castShadow>
            <boxGeometry args={[0.06, 0.08, 0.016]} />
            <meshStandardMaterial roughness={0.4} metalness={0.3} color="#94a3b8" />
          </mesh>

          {/* Left Pectoral Fin (Flipper) */}
          <mesh position={[0.04, -0.05, 0.08]} rotation={[0.5, 0, 0.4]} castShadow>
            <boxGeometry args={[0.06, 0.015, 0.04]} />
            <meshStandardMaterial roughness={0.5} metalness={0.3} color="#64748b" />
          </mesh>

          {/* Right Pectoral Fin (Flipper) */}
          <mesh position={[0.04, -0.05, -0.08]} rotation={[-0.5, 0, 0.4]} castShadow>
            <boxGeometry args={[0.06, 0.015, 0.04]} />
            <meshStandardMaterial roughness={0.5} metalness={0.3} color="#64748b" />
          </mesh>

          {/* Glowing/Accent scale-line along the spine curve */}
          <mesh position={[0, 0.076, 0]} scale={[1.61, 0.75, 0.63]} rotation={[0, 0, 0.2]} castShadow>
            <torusGeometry args={[0.14, 0.004, 4, 24, Math.PI]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

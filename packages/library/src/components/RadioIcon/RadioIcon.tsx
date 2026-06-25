import { SharedWrapper } from "../SharedWrapper";
import { RadioIconProps } from "./types";

export function RadioIcon(props: RadioIconProps) {
  return (
    <SharedWrapper iconId="radio" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]} position={[0, 0, 0]}>
          {/* Main Retro Radio Cabinet Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.38, 0.24, 0.14]} />
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

          {/* Front Speaker Fabric Mesh Grille Panel */}
          <mesh position={[-0.08, 0, 0.071]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.004, 24]} />
            <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
          </mesh>
          {/* Inner metallic speaker ring */}
          <mesh position={[-0.08, 0, 0.073]} castShadow>
            <torusGeometry args={[0.06, 0.006, 8, 24]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Tuning frequency slider window scale */}
          <mesh position={[0.08, 0.04, 0.071]} castShadow>
            <boxGeometry args={[0.14, 0.04, 0.004]} />
            <meshStandardMaterial roughness={0.9} metalness={0.0} color="#0f172a" />
          </mesh>

          {/* Glowing Tuning Needle Indicator */}
          <mesh position={[0.06, 0.04, 0.073]} castShadow>
            <boxGeometry args={[0.006, 0.03, 0.004]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Tuning Knob 1 (Upper) */}
          <mesh position={[0.05, -0.05, 0.071]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.024, 0.024, 0.01, 16]} />
            <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
          </mesh>

          {/* Tuning Knob 2 (Lower) */}
          <mesh position={[0.11, -0.05, 0.071]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.024, 0.024, 0.01, 16]} />
            <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
          </mesh>

          {/* Telescopic Antenna extending from back */}
          <group position={[0.14, 0.12, -0.05]} rotation={[-0.4, 0.2, -0.4]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.006, 0.004, 0.3, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#94a3b8" />
            </mesh>
            {/* Top antenna bead tip */}
            <mesh position={[0, 0.155, 0]} castShadow>
              <sphereGeometry args={[0.008, 8, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Retro Top Carrier Handle strap */}
          <group position={[0, 0.12, 0]}>
            {/* Horizontal handle loop */}
            <mesh position={[0, 0.02, 0]} castShadow>
              <boxGeometry args={[0.26, 0.012, 0.024]} />
              <meshStandardMaterial roughness={0.6} metalness={0.3} color="#1e293b" />
            </mesh>
            {/* Left pivot post */}
            <mesh position={[-0.12, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Right pivot post */}
            <mesh position={[0.12, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

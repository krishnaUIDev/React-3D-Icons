import { SharedWrapper } from "../SharedWrapper";
import { DrillIconProps } from "./types";

export function DrillIcon(props: DrillIconProps) {
  return (
    <SharedWrapper iconId="drill" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Main Horizontal Motor Housing Barrel */}
          <mesh castShadow receiveShadow position={[-0.08, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.13, 0.11, 0.38, 16]} />
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

          {/* Pistol Grip Handle */}
          <mesh castShadow position={[-0.14, -0.08, 0]} rotation={[0, 0, -Math.PI / 8]}>
            <boxGeometry args={[0.08, 0.32, 0.09]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Bottom Battery Pack Block */}
          <mesh castShadow position={[-0.2, -0.25, 0]} rotation={[0, 0, -Math.PI / 8]}>
            <boxGeometry args={[0.16, 0.08, 0.12]} />
            <meshStandardMaterial
              roughness={0.3}
              metalness={0.7}
              color={props.theme === "dark" ? "#475569" : "#334155"}
            />
          </mesh>

          {/* Drill Chuck (Steel collar at front) */}
          <mesh castShadow position={[0.15, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.085, 0.085, 0.1, 16]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.85}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Drill Bit (Thin steel rod + spiral texture representation) */}
          <group position={[0.3, 0.16, 0]}>
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.024, 0.024, 0.22, 8]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#94a3b8" : "#64748b"}
              />
            </mesh>
            {/* Drill bit tip cone */}
            <mesh position={[0.11, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
              <coneGeometry args={[0.024, 0.05, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Glowing Trigger Switch Button (Accent color) */}
          <mesh position={[-0.08, 0.03, 0]} castShadow>
            <boxGeometry args={[0.05, 0.06, 0.04]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

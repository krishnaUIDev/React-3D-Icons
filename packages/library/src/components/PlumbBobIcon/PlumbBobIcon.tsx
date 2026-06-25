import { SharedWrapper } from "../SharedWrapper";
import { PlumbBobIconProps } from "./types";

export function PlumbBobIcon(props: PlumbBobIconProps) {
  return (
    <SharedWrapper iconId="plumbbob" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0]} position={[0, 0, 0]}>
          {/* Suspended Line/Wire */}
          <mesh position={[0, 0.24, 0]} castShadow>
            <cylinderGeometry args={[0.005, 0.005, 0.28, 8]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#64748b" />
          </mesh>

          {/* Top Knurled Brass Nut / Cap */}
          <mesh position={[0, 0.08, 0]} castShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.04, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#d97706" />
          </mesh>

          {/* Glowing Spacer Ring */}
          <mesh position={[0, 0.05, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Main Conical Plumb Bob Body */}
          <mesh position={[0, -0.07, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.08, 0.004, 0.22, 16]} />
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

          {/* Steel Tip Point at bottom */}
          <mesh position={[0, -0.19, 0]} castShadow>
            <coneGeometry args={[0.012, 0.03, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
          </mesh>

          {/* Concentric detail rings around weight body */}
          <mesh position={[0, -0.05, 0]} castShadow>
            <torusGeometry args={[0.076, 0.006, 8, 24]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
          </mesh>
          <mesh position={[0, -0.1, 0]} castShadow>
            <torusGeometry args={[0.058, 0.006, 8, 24]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

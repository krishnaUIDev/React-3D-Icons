import { SharedWrapper } from "../SharedWrapper";
import { FunnelIconProps } from "./types";

export function FunnelIcon(props: FunnelIconProps) {
  return (
    <SharedWrapper iconId="funnel" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, 0.05, 0]}>
          
          {/* Main Upper Funnel Cone (Hollowed cone style representation) */}
          <group position={[0, 0.1, 0]}>
            {/* Outer Cone */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.28, 0.08, 0.24, 32, 1, true]} />
              <meshPhysicalMaterial
                side={2} // DoubleSide for inside rendering
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

            {/* Inner fluid level plate (Glowing Accent) */}
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.01, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Top Rim Collar (Metal band) */}
            <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.282, 0.015, 8, 32]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>
          </group>

          {/* Lower Stem Spout (Outlet cylinder) */}
          <mesh castShadow position={[0, -0.12, 0]}>
            <cylinderGeometry args={[0.045, 0.038, 0.22, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Suspended Fluid Droplet at Stem Base (Glowing Accent) */}
          <mesh position={[0, -0.27, 0]} castShadow>
            <sphereGeometry args={[0.026, 16, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>

          {/* Rim Hanger Tab (Small loop ring on side) */}
          <mesh position={[0.29, 0.22, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <torusGeometry args={[0.03, 0.008, 6, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#94a3b8" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

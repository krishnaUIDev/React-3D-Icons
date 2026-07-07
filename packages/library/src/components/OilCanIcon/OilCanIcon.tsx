import { SharedWrapper } from "../SharedWrapper";
import { OilCanIconProps } from "./types";

export function OilCanIcon(props: OilCanIconProps) {
  return (
    <SharedWrapper iconId="oilcan" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, -0.02, 0]}>
          {/* Main Can Oil Reservoir Body */}
          <group position={[0, -0.06, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.32, 24]} />
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

            {/* Bottom Base Rim Plate (Dark trim) */}
            <mesh position={[0, -0.165, 0]}>
              <cylinderGeometry args={[0.224, 0.224, 0.015, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#334155" />
            </mesh>
            {/* Top Dome Cap */}
            <mesh position={[0, 0.16, 0]} castShadow>
              <sphereGeometry args={[0.22, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Long Slanted Oil Spout Pipe (Angled up-right) */}
          <group position={[0.08, 0.18, 0]} rotation={[0, 0, -0.45]}>
            <mesh castShadow position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.015, 0.022, 0.34, 12]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>

            {/* Glowing Oil Droplet at Spout Nozzle Tip (Glowing Accent) */}
            <mesh position={[0, 0.36, 0]} castShadow>
              <sphereGeometry args={[0.024, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

          {/* Back Carrying Loop Handle */}
          <mesh position={[-0.24, -0.06, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <torusGeometry args={[0.13, 0.02, 8, 16, Math.PI]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#475569" />
          </mesh>

          {/* Thumb Pump Trigger Lever (Glowing Accent) */}
          <mesh position={[-0.12, 0.14, 0]} rotation={[0, 0, 0.55]} castShadow>
            <boxGeometry args={[0.16, 0.02, 0.04]} />
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

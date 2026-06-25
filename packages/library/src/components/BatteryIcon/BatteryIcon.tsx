import { SharedWrapper } from "../SharedWrapper";
import { BatteryIconProps } from "./types";

export function BatteryIcon(props: BatteryIconProps) {
  return (
    <SharedWrapper iconId="battery" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 6, 0.1]} position={[0, 0, 0]}>
          {/* Main Battery Casing */}
          <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 1.0, 32]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Anode Terminal (Top Cap) */}
          <mesh castShadow position={[0, 0.52, 0]}>
            <cylinderGeometry args={[0.13, 0.13, 0.12, 16]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Battery Base Rim (Bottom Cap) */}
          <mesh castShadow position={[0, -0.58, 0]}>
            <cylinderGeometry args={[0.345, 0.345, 0.06, 32]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Inner Glowing Charge Bars (Rendered inside the transparent glass case) */}
          <group position={[0, -0.05, 0]}>
            {/* Charge Bar 1 (Bottom) */}
            <mesh position={[0, -0.27, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.24, 0.2, 24]} />
              <meshStandardMaterial
                color={props.accentColor || "#10b981"}
                emissive={props.accentColor || "#10b981"}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.3}
              />
            </mesh>

            {/* Charge Bar 2 (Middle) */}
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.24, 0.2, 24]} />
              <meshStandardMaterial
                color={props.accentColor || "#10b981"}
                emissive={props.accentColor || "#10b981"}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.3}
              />
            </mesh>

            {/* Charge Bar 3 (Top) */}
            <mesh position={[0, 0.27, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.24, 0.2, 24]} />
              <meshStandardMaterial
                color={props.accentColor || "#10b981"}
                emissive={props.accentColor || "#10b981"}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

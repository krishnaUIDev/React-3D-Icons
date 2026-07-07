import { SharedWrapper } from "../SharedWrapper";
import { ShieldAlertIconProps } from "./types";

export function ShieldAlertIcon(props: ShieldAlertIconProps) {
  return (
    <SharedWrapper iconId="shieldalert" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.05]} position={[0, 0.1, 0]}>
          {/* Shield Base Plate */}
          <group>
            {/* Top curved main body */}
            <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
              <boxGeometry args={[1.06, 0.72, 0.22]} />
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

            {/* Bottom pointy geometry (45-deg rotated box) */}
            <mesh castShadow receiveShadow position={[0, -0.23, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.75, 0.75, 0.22]} />
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
          </group>

          {/* Central Exclamation Mark (Alert Symbol) */}
          <group position={[0, -0.04, 0.13]}>
            {/* Warning Bar */}
            <mesh position={[0, 0.1, 0]} castShadow>
              <boxGeometry args={[0.08, 0.26, 0.05]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>
            {/* Warning Dot */}
            <mesh position={[0, -0.12, 0]} castShadow>
              <boxGeometry args={[0.08, 0.08, 0.05]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Border highlight rim */}
          <group position={[0, 0, 0.01]}>
            <mesh position={[0, 0.1, 0.115]}>
              <boxGeometry args={[1.1, 0.74, 0.03]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
                wireframe
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

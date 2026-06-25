import { SharedWrapper } from "../SharedWrapper";
import { HacksawIconProps } from "./types";

export function HacksawIcon(props: HacksawIconProps) {
  return (
    <SharedWrapper iconId="hacksaw" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.08]} position={[0, 0, 0]}>
          
          {/* Main Hacksaw U-Frame (Segmented Steel Rods) */}
          <group>
            {/* Top Frame Rod */}
            <mesh castShadow position={[-0.05, 0.22, 0]}>
              <boxGeometry args={[0.62, 0.03, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Front vertical drop rod */}
            <mesh castShadow position={[0.25, 0.08, 0]}>
              <boxGeometry args={[0.03, 0.3, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Rear vertical drop rod */}
            <mesh castShadow position={[-0.35, 0.12, 0]}>
              <boxGeometry args={[0.03, 0.22, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Hacksaw Blade (Thin plate running horizontally at bottom) */}
          <mesh castShadow position={[-0.05, -0.05, 0]}>
            <boxGeometry args={[0.58, 0.025, 0.008]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* D-shaped Handle / Grip at the back */}
          <group position={[-0.4, 0.02, 0]}>
            {/* Main grip block */}
            <mesh castShadow>
              <boxGeometry args={[0.08, 0.24, 0.06]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            
            {/* Rubber inner grip inlay (glowing accent) */}
            <mesh position={[0.02, 0, 0]}>
              <boxGeometry args={[0.02, 0.18, 0.066]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Front Blade Tension Wing Nut (Glowing Accent) */}
          <mesh position={[0.28, -0.05, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
            <torusGeometry args={[0.035, 0.012, 6, 12]} />
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

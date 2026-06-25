import { SharedWrapper } from "../SharedWrapper";
import { PliersIconProps } from "./types";

export function PliersIcon(props: PliersIconProps) {
  return (
    <SharedWrapper iconId="pliers" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Central Pivot Pin (Cylinder) */}
          <mesh castShadow receiveShadow position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Left Jaw & Right Handle (Pivoted together) */}
          <group position={[0, 0.05, 0]} rotation={[0, 0, 0.15]}>
            {/* Jaw tip (Left jaw pointing up) */}
            <mesh castShadow position={[-0.04, 0.18, 0.03]} rotation={[0, 0, -0.1]}>
              <boxGeometry args={[0.05, 0.22, 0.05]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Jaw teeth grip detail */}
            <mesh position={[-0.018, 0.18, 0.03]}>
              <boxGeometry args={[0.01, 0.18, 0.04]} />
              <meshStandardMaterial roughness={0.5} metalness={0.8} color="#94a3b8" />
            </mesh>

            {/* Right Handle (Stretches down-right) */}
            <mesh castShadow position={[0.12, -0.22, -0.03]} rotation={[0, 0, -0.18]}>
              <cylinderGeometry args={[0.03, 0.024, 0.44, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right Handle Rubber Grip (Glowing Accent) */}
            <mesh position={[0.13, -0.26, -0.03]} rotation={[0, 0, -0.18]}>
              <cylinderGeometry args={[0.035, 0.029, 0.3, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Right Jaw & Left Handle (Pivoted together) */}
          <group position={[0, 0.05, 0]} rotation={[0, 0, -0.15]}>
            {/* Jaw tip (Right jaw pointing up) */}
            <mesh castShadow position={[0.04, 0.18, -0.03]} rotation={[0, 0, 0.1]}>
              <boxGeometry args={[0.05, 0.22, 0.05]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Left Handle (Stretches down-left) */}
            <mesh castShadow position={[-0.12, -0.22, 0.03]} rotation={[0, 0, 0.18]}>
              <cylinderGeometry args={[0.03, 0.024, 0.44, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Left Handle Rubber Grip (Glowing Accent) */}
            <mesh position={[-0.13, -0.26, 0.03]} rotation={[0, 0, 0.18]}>
              <cylinderGeometry args={[0.035, 0.029, 0.3, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

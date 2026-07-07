import { SharedWrapper } from "../SharedWrapper";
import { HookIconProps } from "./types";

export function HookIcon(props: HookIconProps) {
  return (
    <SharedWrapper iconId="hook" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0.05]} position={[0, 0.02, 0]}>
          {/* Top Cable Pulley Box Block */}
          <group position={[0, 0.28, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.34, 0.28, 0.24]} />
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

            {/* Glowing Accent Warning Band across the housing */}
            <mesh position={[0, 0, 0.122]} castShadow>
              <boxGeometry args={[0.26, 0.06, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Central Pulley Axle Bolt (Horizontal cylinder) */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.045, 0.045, 0.28, 16]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>
          </group>

          {/* Swivel Shank / Connector Collar */}
          <group position={[0, 0.1, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>
            <mesh position={[0, -0.04, 0]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>
          </group>

          {/* Heavy Lifting Crane Hook */}
          {/* Curved Hook Body (using 3/4 circle torus) */}
          <mesh castShadow position={[-0.075, -0.15, 0]} rotation={[0, 0, -Math.PI / 5]}>
            <torusGeometry args={[0.15, 0.038, 12, 32, Math.PI * 1.35]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Pointed Hook Tip (cone at the end of the torus arc) */}
          <mesh castShadow position={[0.13, -0.19, 0]} rotation={[0, 0, Math.PI / 3]}>
            <coneGeometry args={[0.037, 0.09, 12]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Hook Suspension Ring (connecting to swivel shank) */}
          <mesh castShadow position={[0, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.065, 0.02, 8, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

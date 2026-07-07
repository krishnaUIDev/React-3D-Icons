import { SharedWrapper } from "../SharedWrapper";
import { DonutIconProps } from "./types";

export function DonutIcon(props: DonutIconProps) {
  return (
    <SharedWrapper iconId="donut" {...props}>
      {(mat) => (
        <group rotation={[0.5, -Math.PI / 8, 0.1]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main Doughnut Ring (Golden brown baked dough) */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.24, 0.1, 16, 32]} />
            <meshStandardMaterial roughness={0.7} metalness={0.0} color="#d97706" />
          </mesh>

          {/* Frosting Glaze (Preset color - e.g. glass/metal glaze with drops) */}
          <group>
            <mesh position={[0, 0.025, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.23, 0.075, 12, 32]} />
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
            {/* Drip 1 */}
            <mesh position={[-0.18, -0.04, 0.16]} castShadow>
              <sphereGeometry args={[0.038, 12, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Drip 2 */}
            <mesh position={[0.2, -0.03, -0.1]} castShadow>
              <sphereGeometry args={[0.032, 12, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Drip 3 */}
            <mesh position={[-0.08, -0.05, -0.22]} castShadow>
              <sphereGeometry args={[0.035, 12, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Sprinkles (Scattered colorful tiny boxes) */}
          <group position={[0, 0.09, 0]}>
            {/* Sprinkle 1 (White) */}
            <mesh position={[0.18, 0, 0.1]} rotation={[0, 0.5, 0]} castShadow>
              <boxGeometry args={[0.015, 0.015, 0.05]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} />
            </mesh>

            {/* Sprinkle 2 (Pink/Red) */}
            <mesh position={[-0.16, 0, 0.12]} rotation={[0, -0.6, 0]} castShadow>
              <boxGeometry args={[0.015, 0.015, 0.05]} />
              <meshStandardMaterial color="#ef4444" roughness={0.5} />
            </mesh>

            {/* Sprinkle 3 (Blue) */}
            <mesh position={[0.08, 0, -0.18]} rotation={[0, 1.2, 0]} castShadow>
              <boxGeometry args={[0.015, 0.015, 0.05]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.5} />
            </mesh>

            {/* Sprinkle 4 (Green) */}
            <mesh position={[-0.1, 0, -0.16]} rotation={[0, -1.0, 0]} castShadow>
              <boxGeometry args={[0.015, 0.015, 0.05]} />
              <meshStandardMaterial color="#22c55e" roughness={0.5} />
            </mesh>

            {/* Sprinkle 5 (Glowing Accent Color) */}
            <mesh position={[0.2, 0, -0.06]} rotation={[0, 0.2, 0]} castShadow>
              <boxGeometry args={[0.016, 0.016, 0.06]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

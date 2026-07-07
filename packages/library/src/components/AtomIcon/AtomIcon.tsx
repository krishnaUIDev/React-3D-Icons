import { SharedWrapper } from "../SharedWrapper";
import { AtomIconProps } from "./types";

export function AtomIcon(props: AtomIconProps) {
  return (
    <SharedWrapper iconId="atom" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Central Nucleus Cluster (Preset Material) */}
          <group position={[0, 0, 0]}>
            {/* Center Proton */}
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                color={mat.color}
              />
            </mesh>
            {/* Cluster Proton 1 */}
            <mesh position={[-0.05, 0.04, 0.03]} castShadow>
              <sphereGeometry args={[0.054, 12, 12]} />
              <meshPhysicalMaterial roughness={mat.roughness} color={mat.color} />
            </mesh>
            {/* Cluster Proton 2 */}
            <mesh position={[0.05, -0.04, 0.03]} castShadow>
              <sphereGeometry args={[0.054, 12, 12]} />
              <meshPhysicalMaterial roughness={mat.roughness} color={mat.color} />
            </mesh>
            {/* Cluster Neutron 1 */}
            <mesh position={[-0.03, -0.05, -0.04]} castShadow>
              <sphereGeometry args={[0.054, 12, 12]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
            {/* Cluster Neutron 2 */}
            <mesh position={[0.04, 0.05, -0.04]} castShadow>
              <sphereGeometry args={[0.054, 12, 12]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
          </group>

          {/* Orbit Ring 1 (Horizontal flat) */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.26, 0.008, 8, 48]} />
            <meshStandardMaterial color="#94a3b8" opacity={0.6} transparent />
          </mesh>

          {/* Orbit Ring 2 (Tilted Positive) */}
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[0.26, 0.008, 8, 48]} />
            <meshStandardMaterial color="#94a3b8" opacity={0.6} transparent />
          </mesh>

          {/* Orbit Ring 3 (Tilted Negative) */}
          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[0.26, 0.008, 8, 48]} />
            <meshStandardMaterial color="#94a3b8" opacity={0.6} transparent />
          </mesh>

          {/* Glowing Electron 1 on Orbit 1 (Emissive Accent Color) */}
          <mesh position={[0.26, 0, 0]} castShadow>
            <sphereGeometry args={[0.024, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>

          {/* Glowing Electron 2 on Orbit 2 (Emissive Accent Color) */}
          <mesh position={[-0.13, 0.18, 0.13]} castShadow>
            <sphereGeometry args={[0.024, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>

          {/* Glowing Electron 3 on Orbit 3 (Emissive Accent Color) */}
          <mesh position={[-0.13, -0.18, -0.13]} castShadow>
            <sphereGeometry args={[0.024, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

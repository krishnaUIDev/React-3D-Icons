import { SharedWrapper } from "../SharedWrapper";
import { FishIconProps } from "./types";

export function FishIcon(props: FishIconProps) {
  return (
    <SharedWrapper iconId="fish" {...props}>
      {(mat) => (
        <group rotation={[0.1, Math.PI / 4, 0]} position={[0, 0, 0]}>
          {/* Main Fish Body (squashed ellipsoid) */}
          <mesh castShadow receiveShadow scale={[1.4, 0.8, 0.5]}>
            <sphereGeometry args={[0.18, 32, 16]} />
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

          {/* Tail Fin Joint/Connector */}
          <mesh position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.02, 0.03, 0.06, 12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
          </mesh>

          {/* Tail Fin (Twin Flaps) */}
          <group position={[-0.26, 0, 0]}>
            {/* Top Fin Flap */}
            <mesh position={[-0.05, 0.05, 0]} rotation={[0, 0, 0.5]} castShadow>
              <boxGeometry args={[0.12, 0.04, 0.015]} />
              <meshStandardMaterial roughness={0.4} metalness={0.7} color="#cbd5e1" />
            </mesh>
            {/* Bottom Fin Flap */}
            <mesh position={[-0.05, -0.05, 0]} rotation={[0, 0, -0.5]} castShadow>
              <boxGeometry args={[0.12, 0.04, 0.015]} />
              <meshStandardMaterial roughness={0.4} metalness={0.7} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Dorsal Fin (Top spine) */}
          <mesh position={[0.02, 0.16, 0]} rotation={[0, 0, -0.4]} castShadow>
            <boxGeometry args={[0.12, 0.06, 0.015]} />
            <meshStandardMaterial roughness={0.4} metalness={0.7} color="#94a3b8" />
          </mesh>

          {/* Side Pectoral Fins */}
          <group position={[0.04, -0.04, 0]}>
            {/* Left pectoral fin */}
            <mesh position={[0, 0, 0.09]} rotation={[0.4, 0.3, 0.2]} castShadow>
              <boxGeometry args={[0.08, 0.03, 0.01]} />
              <meshStandardMaterial roughness={0.5} metalness={0.4} color="#64748b" />
            </mesh>
            {/* Right pectoral fin */}
            <mesh position={[0, 0, -0.09]} rotation={[-0.4, -0.3, 0.2]} castShadow>
              <boxGeometry args={[0.08, 0.03, 0.01]} />
              <meshStandardMaterial roughness={0.5} metalness={0.4} color="#64748b" />
            </mesh>
          </group>

          {/* Glowing Eyes */}
          <group position={[0.16, 0.04, 0]}>
            {/* Left Eye */}
            <mesh position={[0, 0, 0.05]} castShadow>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0, 0, -0.05]} castShadow>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Glowing Scale Lines/Accent Bands */}
          <mesh position={[-0.04, 0, 0]} castShadow>
            <torusGeometry args={[0.082, 0.006, 6, 24]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

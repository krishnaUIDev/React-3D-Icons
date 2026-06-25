import { SharedWrapper } from "../SharedWrapper";
import { BirdIconProps } from "./types";

export function BirdIcon(props: BirdIconProps) {
  return (
    <SharedWrapper iconId="bird" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 6, 0]} position={[0, 0, 0]}>
          {/* Main Central Aerodynamic Bird Body */}
          <mesh castShadow receiveShadow scale={[0.8, 0.7, 1.4]}>
            <sphereGeometry args={[0.12, 24, 12]} />
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

          {/* Head */}
          <mesh position={[0, 0.08, 0.16]} castShadow>
            <sphereGeometry args={[0.046, 16, 16]} />
            <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
          </mesh>

          {/* Glowing/Accent Beak */}
          <mesh position={[0, 0.06, 0.22]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <coneGeometry args={[0.016, 0.05, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Left Wing (Angled in active flight upstroke) */}
          <group position={[-0.08, 0.04, 0]} rotation={[0.2, 0.2, 0.8]}>
            <mesh castShadow>
              <boxGeometry args={[0.26, 0.08, 0.01]} />
              <meshStandardMaterial roughness={0.4} metalness={0.5} color="#94a3b8" />
            </mesh>
            {/* Glowing Wing Tip */}
            <mesh position={[-0.14, 0, 0]} castShadow>
              <boxGeometry args={[0.04, 0.06, 0.012]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Right Wing (Angled in active flight upstroke) */}
          <group position={[0.08, 0.04, 0]} rotation={[-0.2, -0.2, -0.8]}>
            <mesh castShadow>
              <boxGeometry args={[0.26, 0.08, 0.01]} />
              <meshStandardMaterial roughness={0.4} metalness={0.5} color="#94a3b8" />
            </mesh>
            {/* Glowing Wing Tip */}
            <mesh position={[0.14, 0, 0]} castShadow>
              <boxGeometry args={[0.04, 0.06, 0.012]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Fan-Shaped Tail Feathers */}
          <group position={[0, -0.04, -0.18]} rotation={[0.3, 0, 0]}>
            <mesh position={[0, 0, -0.04]} castShadow>
              <boxGeometry args={[0.08, 0.01, 0.1]} />
              <meshStandardMaterial roughness={0.5} metalness={0.3} color="#475569" />
            </mesh>
            <mesh position={[-0.04, 0, -0.03]} rotation={[0, 0.2, 0]} castShadow>
              <boxGeometry args={[0.04, 0.01, 0.08]} />
              <meshStandardMaterial roughness={0.5} metalness={0.3} color="#475569" />
            </mesh>
            <mesh position={[0.04, 0, -0.03]} rotation={[0, -0.2, 0]} castShadow>
              <boxGeometry args={[0.04, 0.01, 0.08]} />
              <meshStandardMaterial roughness={0.5} metalness={0.3} color="#475569" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

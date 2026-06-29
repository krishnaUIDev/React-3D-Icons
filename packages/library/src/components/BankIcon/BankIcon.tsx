import { SharedWrapper } from "../SharedWrapper";
import { BankIconProps } from "./types";

export function BankIcon(props: BankIconProps) {
  return (
    <SharedWrapper iconId="bank" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Triangular Roof Pediment (Preset Color) */}
          <group position={[0, 0.16, 0]}>
            <mesh castShadow receiveShadow position={[0, 0.04, 0]} rotation={[0, Math.PI / 4, 0]}>
              <coneGeometry args={[0.36, 0.1, 4]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                color={mat.color}
              />
            </mesh>
            <mesh position={[0, -0.01, 0]} castShadow>
              <boxGeometry args={[0.52, 0.03, 0.38]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Pillars/Columns (Greek architectural style) */}
          <group position={[0, 0.0, 0]}>
            {/* Left Column */}
            <mesh position={[-0.16, 0, 0]} castShadow>
              <cylinderGeometry args={[0.022, 0.022, 0.26, 10]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
            {/* Center Left Column */}
            <mesh position={[-0.05, 0, 0.04]} castShadow>
              <cylinderGeometry args={[0.022, 0.022, 0.26, 10]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
            {/* Center Right Column */}
            <mesh position={[0.05, 0, 0.04]} castShadow>
              <cylinderGeometry args={[0.022, 0.022, 0.26, 10]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
            {/* Right Column */}
            <mesh position={[0.16, 0, 0]} castShadow>
              <cylinderGeometry args={[0.022, 0.022, 0.26, 10]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
            </mesh>
          </group>

          {/* Step Foundation Base */}
          <group position={[0, -0.15, 0]}>
            {/* Top Step */}
            <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.5, 0.024, 0.36]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.6} />
            </mesh>
            {/* Bottom Step */}
            <mesh position={[0, -0.01, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.54, 0.024, 0.4]} />
              <meshStandardMaterial color="#64748b" roughness={0.7} />
            </mesh>
          </group>

          {/* Glowing Front Portal/Door behind center pillars (Emissive Accent Color) */}
          <mesh position={[0, -0.04, -0.06]} castShadow>
            <boxGeometry args={[0.08, 0.14, 0.02]} />
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

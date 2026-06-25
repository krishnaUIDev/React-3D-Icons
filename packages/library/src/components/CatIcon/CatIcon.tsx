import { SharedWrapper } from "../SharedWrapper";
import { CatIconProps } from "./types";

export function CatIcon(props: CatIconProps) {
  return (
    <SharedWrapper iconId="cat" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, 0]} position={[0, -0.02, 0]}>
          {/* Main Rounded Feline Head Casing */}
          <mesh castShadow receiveShadow scale={[1.2, 1.0, 0.8]}>
            <sphereGeometry args={[0.16, 24, 16]} />
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

          {/* Left Pointed Ear */}
          <group position={[-0.1, 0.12, 0]} rotation={[0, 0, 0.35]}>
            <mesh castShadow>
              <coneGeometry args={[0.045, 0.12, 4]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
            {/* Inner Ear Accent */}
            <mesh position={[0, 0, 0.01]} scale={[0.8, 0.8, 0.8]} castShadow>
              <coneGeometry args={[0.035, 0.1, 4]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Right Pointed Ear */}
          <group position={[0.1, 0.12, 0]} rotation={[0, 0, -0.35]}>
            <mesh castShadow>
              <coneGeometry args={[0.045, 0.12, 4]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
            {/* Inner Ear Accent */}
            <mesh position={[0, 0, 0.01]} scale={[0.8, 0.8, 0.8]} castShadow>
              <coneGeometry args={[0.035, 0.1, 4]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Glowing Oval Eyes */}
          <group position={[0, 0.02, 0.076]}>
            {/* Left Eye */}
            <mesh position={[-0.06, 0, 0]} scale={[0.6, 1.2, 0.5]} castShadow>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.06, 0, 0]} scale={[0.6, 1.2, 0.5]} castShadow>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Tiny Nose Snout */}
          <mesh position={[0, -0.04, 0.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <coneGeometry args={[0.012, 0.018, 3]} />
            <meshStandardMaterial roughness={0.5} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Whiskers */}
          <group position={[0, -0.05, 0.1]}>
            {/* Left Whiskers */}
            <mesh position={[-0.09, 0.01, 0]} rotation={[0, -0.2, 0.08]} castShadow>
              <cylinderGeometry args={[0.002, 0.002, 0.12, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
            <mesh position={[-0.09, -0.01, 0]} rotation={[0, -0.2, -0.04]} castShadow>
              <cylinderGeometry args={[0.002, 0.002, 0.12, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
            {/* Right Whiskers */}
            <mesh position={[0.09, 0.01, 0]} rotation={[0, 0.2, -0.08]} castShadow>
              <cylinderGeometry args={[0.002, 0.002, 0.12, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
            <mesh position={[0.09, -0.01, 0]} rotation={[0, 0.2, 0.04]} castShadow>
              <cylinderGeometry args={[0.002, 0.002, 0.12, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
          </group>

          {/* Glowing Collar Ribbon Band (lower neck area base) */}
          <mesh position={[0, -0.13, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.11, 0.012, 6, 24]} />
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

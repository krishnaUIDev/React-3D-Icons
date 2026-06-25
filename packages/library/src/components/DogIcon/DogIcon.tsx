import { SharedWrapper } from "../SharedWrapper";
import { DogIconProps } from "./types";

export function DogIcon(props: DogIconProps) {
  return (
    <SharedWrapper iconId="dog" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, 0]} position={[0, -0.02, 0]}>
          {/* Main Canine Head Base */}
          <mesh castShadow receiveShadow scale={[1.15, 1.15, 1.0]}>
            <sphereGeometry args={[0.15, 24, 16]} />
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

          {/* Protruding Snout Mouthpiece */}
          <mesh position={[0, -0.03, 0.08]} castShadow>
            <boxGeometry args={[0.08, 0.07, 0.09]} />
            <meshStandardMaterial roughness={0.5} metalness={0.1} color="#cbd5e1" />
          </mesh>

          {/* Nose Tip Button */}
          <mesh position={[0, 0.01, 0.13]} castShadow>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Left Floppy Ear (Hanging down side) */}
          <mesh position={[-0.12, -0.02, 0]} rotation={[0, 0, 0.15]} castShadow>
            <boxGeometry args={[0.04, 0.16, 0.06]} />
            <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
          </mesh>

          {/* Right Floppy Ear (Hanging down side) */}
          <mesh position={[0.12, -0.02, 0]} rotation={[0, 0, -0.15]} castShadow>
            <boxGeometry args={[0.04, 0.16, 0.06]} />
            <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
          </mesh>

          {/* Glowing Round Eyes */}
          <group position={[0, 0.03, 0.07]}>
            {/* Left Eye */}
            <mesh position={[-0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.016, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.016, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Glowing Dog Tag Collar (Lower base loop) */}
          <group position={[0, -0.14, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.1, 0.012, 6, 24]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
            </mesh>
            {/* Glowing Tag Emblem */}
            <mesh position={[0, -0.03, 0.08]} rotation={[0.2, 0, 0]} castShadow>
              <boxGeometry args={[0.024, 0.034, 0.008]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

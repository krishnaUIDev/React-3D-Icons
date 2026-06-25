import { SharedWrapper } from "../SharedWrapper";
import { OwlIconProps } from "./types";

export function OwlIcon(props: OwlIconProps) {
  return (
    <SharedWrapper iconId="owl" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, 0]} position={[0, -0.02, 0]}>
          {/* Main Round Owl Body/Head */}
          <mesh castShadow receiveShadow scale={[1.2, 1.15, 0.85]}>
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

          {/* Left Ear Tuft (Feather Horn) */}
          <mesh position={[-0.08, 0.13, 0]} rotation={[0, 0, 0.4]} castShadow>
            <coneGeometry args={[0.03, 0.08, 4]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#334155" />
          </mesh>

          {/* Right Ear Tuft (Feather Horn) */}
          <mesh position={[0.08, 0.13, 0]} rotation={[0, 0, -0.4]} castShadow>
            <coneGeometry args={[0.03, 0.08, 4]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#334155" />
          </mesh>

          {/* Concentric Eyes Assembly */}
          <group position={[0, 0.01, 0.07]}>
            {/* Left Eye Outer Ring */}
            <mesh position={[-0.055, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.036, 0.008, 6, 20]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#cbd5e1" />
            </mesh>
            {/* Left Glowing Pupil */}
            <mesh position={[-0.055, 0, 0.006]} castShadow>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>

            {/* Right Eye Outer Ring */}
            <mesh position={[0.055, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.036, 0.008, 6, 20]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#cbd5e1" />
            </mesh>
            {/* Right Glowing Pupil */}
            <mesh position={[0.055, 0, 0.006]} castShadow>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Sharp Nose Beak */}
          <mesh position={[0, -0.04, 0.095]} rotation={[0, 0, Math.PI]} castShadow>
            <coneGeometry args={[0.015, 0.04, 3]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#d97706" />
          </mesh>

          {/* Chest Feather Ridges (Two nested toruses) */}
          <mesh position={[0, -0.08, 0.06]} rotation={[0.4, 0, 0]} castShadow>
            <torusGeometry args={[0.06, 0.004, 4, 16, Math.PI]} />
            <meshStandardMaterial roughness={0.6} metalness={0.2} color="#475569" />
          </mesh>
          <mesh position={[0, -0.11, 0.05]} rotation={[0.4, 0, 0]} castShadow>
            <torusGeometry args={[0.04, 0.004, 4, 16, Math.PI]} />
            <meshStandardMaterial roughness={0.6} metalness={0.2} color="#475569" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

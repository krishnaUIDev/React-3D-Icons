import { SharedWrapper } from "../SharedWrapper";
import { CaliperIconProps } from "./types";

export function CaliperIcon(props: CaliperIconProps) {
  return (
    <SharedWrapper iconId="caliper" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.15]} position={[0, 0, 0]}>
          {/* Main Caliper Beam Scale (Horizontal Ruler) */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[0.74, 0.05, 0.02]} />
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

          {/* Stationary Jaw Block (Fixed at left, X = -0.32) */}
          <group position={[-0.32, 0, 0]}>
            {/* Base mounting */}
            <mesh castShadow position={[0, 0, 0]}>
              <boxGeometry args={[0.1, 0.07, 0.024]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Lower measuring jaw (Long curved hook pointing down-right) */}
            <mesh castShadow position={[-0.02, -0.13, 0]} rotation={[0, 0, 0.2]}>
              <boxGeometry args={[0.04, 0.22, 0.022]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Upper internal jaw (Short tip pointing up-right) */}
            <mesh castShadow position={[-0.01, 0.08, 0]} rotation={[0, 0, -0.25]}>
              <boxGeometry args={[0.03, 0.1, 0.022]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Sliding Vernier Carriage (Sliding body, shifted slightly to the right, X = 0.05) */}
          <group position={[0.02, 0, 0]}>
            {/* Slider housing block */}
            <mesh castShadow position={[0, 0, 0]}>
              <boxGeometry args={[0.16, 0.075, 0.032]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Sliding Lower measuring jaw (curves down-left, meets fixed jaw) */}
            <mesh castShadow position={[-0.04, -0.13, 0]} rotation={[0, 0, -0.2]}>
              <boxGeometry args={[0.04, 0.22, 0.022]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Sliding Upper internal jaw (curves up-left) */}
            <mesh castShadow position={[-0.03, 0.08, 0]} rotation={[0, 0, 0.25]}>
              <boxGeometry args={[0.03, 0.1, 0.022]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Glowing Accent Slider Locking Thumb Screw (Top knob) */}
            <mesh position={[0, 0.07, 0]} castShadow>
              <cylinderGeometry args={[0.032, 0.032, 0.06, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Depth Rod (Very thin steel wire extending from right end) */}
          <mesh castShadow position={[0.39, -0.015, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
            <meshStandardMaterial roughness={0.1} metalness={0.95} color="#94a3b8" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

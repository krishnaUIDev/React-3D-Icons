import { SharedWrapper } from "../SharedWrapper";
import { SmartLockIconProps } from "./types";

export function SmartLockIcon(props: SmartLockIconProps) {
  return (
    <SharedWrapper iconId="smartlock" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Main Heavy Backplate Disc */}
          <mesh castShadow position={[0, 0, -0.04]}>
            <cylinderGeometry args={[0.18, 0.18, 0.03, 32]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
          </mesh>

          {/* Electronic Smart Lock Cylinder Body */}
          <mesh castShadow receiveShadow position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.16, 0.16, 0.07, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Chrome Trim Bezel */}
          <mesh position={[0, 0, 0.046]} castShadow>
            <cylinderGeometry args={[0.162, 0.162, 0.01, 32]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Central Key Cylinder Core (Metal spindle) */}
          <mesh position={[0, -0.04, 0.05]} castShadow>
            <cylinderGeometry args={[0.042, 0.042, 0.012, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
          </mesh>
          {/* Keyhole slot details */}
          <mesh position={[0, -0.04, 0.056]} castShadow>
            <boxGeometry args={[0.008, 0.024, 0.004]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
          </mesh>

          {/* Top Half Touchpad Keypad Display (Black glossy screen) */}
          <group position={[0, 0.04, 0.05]}>
            <mesh castShadow>
              <boxGeometry args={[0.14, 0.08, 0.008]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#0f172a" />
            </mesh>
            {/* Array of numeric key dots/squares */}
            {[-0.046, -0.015, 0.015, 0.046].map((xOffset, idx) => (
              <mesh key={idx} position={[xOffset, 0.016, 0.005]} castShadow>
                <boxGeometry args={[0.018, 0.018, 0.002]} />
                <meshStandardMaterial roughness={0.2} metalness={0.1} color="#cbd5e1" />
              </mesh>
            ))}
            {[-0.046, -0.015, 0.015, 0.046].map((xOffset, idx) => (
              <mesh key={idx} position={[xOffset, -0.016, 0.005]} castShadow>
                <boxGeometry args={[0.018, 0.018, 0.002]} />
                <meshStandardMaterial roughness={0.2} metalness={0.1} color="#cbd5e1" />
              </mesh>
            ))}
          </group>

          {/* Glowing Status Ring (Ring encircling center core - Accent color) */}
          <mesh position={[0, 0, 0.047]} castShadow>
            <torusGeometry args={[0.13, 0.008, 8, 32]} />
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

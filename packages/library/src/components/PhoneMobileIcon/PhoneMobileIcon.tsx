import { SharedWrapper } from "../SharedWrapper";
import { PhoneMobileIconProps } from "./types";

export function PhoneMobileIcon(props: PhoneMobileIconProps) {
  return (
    <SharedWrapper iconId="phonemobile" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Main Outer Phone Casing Chassis */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.42, 0.78, 0.035]} />
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

          {/* Front Screen Display (Glass panel inset) */}
          <mesh position={[0, 0, 0.018]} castShadow>
            <boxGeometry args={[0.38, 0.74, 0.006]} />
            <meshStandardMaterial
              roughness={0.05}
              metalness={0.9}
              color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
            />
          </mesh>

          {/* Front Camera Hole Punch notch */}
          <mesh position={[0, 0.33, 0.022]} castShadow>
            <sphereGeometry args={[0.012, 12, 12]} />
            <meshBasicMaterial color="#1e293b" />
          </mesh>

          {/* Side Volume/Power Buttons (Small rectangular tabs) */}
          <mesh position={[0.215, 0.15, 0]} castShadow>
            <boxGeometry args={[0.01, 0.08, 0.018]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>
          <mesh position={[0.215, 0.04, 0]} castShadow>
            <boxGeometry args={[0.01, 0.08, 0.018]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Glowing Smart Screen Desktop UI Accent Stripe (Glowing Accent) */}
          <mesh position={[0, -0.18, 0.02]} castShadow>
            <boxGeometry args={[0.24, 0.016, 0.008]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
          <mesh position={[-0.1, -0.06, 0.02]} castShadow>
            <circleGeometry args={[0.038, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
          <mesh position={[0.1, -0.06, 0.02]} castShadow>
            <circleGeometry args={[0.038, 16]} />
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

import { SharedWrapper } from "../SharedWrapper";
import { WebcamIconProps } from "./types";

export function WebcamIcon(props: WebcamIconProps) {
  return (
    <SharedWrapper iconId="webcam" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Spherical Camera Head */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.22, 32, 32]} />
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

          {/* Camera Lens Bezel Ring (Front protruding cylinder) */}
          <mesh position={[0, 0.1, 0.16]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.11, 0.11, 0.08, 24]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#475569" : "#64748b"}
            />
          </mesh>

          {/* Inner Glass Lens Aperture (Dark concentric circle) */}
          <mesh position={[0, 0.1, 0.202]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.01, 24]} />
            <meshStandardMaterial roughness={0.02} metalness={0.95} color="#0f172a" />
          </mesh>

          {/* Neck Spindle Joint (Small vertical connector cylinder) */}
          <mesh position={[0, -0.1, 0]} castShadow>
            <cylinderGeometry args={[0.034, 0.034, 0.1, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Desktop Clamp Base Mount (Folded hinge support) */}
          <group position={[0, -0.22, 0]}>
            {/* Top base plate */}
            <mesh castShadow>
              <boxGeometry args={[0.26, 0.06, 0.18]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
            </mesh>
            {/* Lower clamp leg */}
            <mesh position={[0, -0.06, -0.06]} castShadow>
              <boxGeometry args={[0.26, 0.12, 0.04]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#334155" />
            </mesh>
          </group>

          {/* Glowing Status Indicator Ring around the Lens (Glowing Accent) */}
          <mesh position={[0, 0.1, 0.203]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.09, 0.008, 8, 32]} />
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

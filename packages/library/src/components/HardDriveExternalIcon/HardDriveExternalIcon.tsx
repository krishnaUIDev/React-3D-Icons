import { SharedWrapper } from "../SharedWrapper";
import { HardDriveExternalIconProps } from "./types";

export function HardDriveExternalIcon(props: HardDriveExternalIconProps) {
  return (
    <SharedWrapper iconId="harddriveexternal" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, 0, 0]}>
          {/* Main Portable Hard Drive Case */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.38, 0.58, 0.07]} />
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

          {/* Protective Rubber Side Bumpers (Corner protection sleeves) */}
          <mesh position={[-0.19, 0, 0]} castShadow>
            <boxGeometry args={[0.015, 0.54, 0.08]} />
            <meshStandardMaterial roughness={0.7} metalness={0.2} color="#1e293b" />
          </mesh>
          <mesh position={[0.19, 0, 0]} castShadow>
            <boxGeometry args={[0.015, 0.54, 0.08]} />
            <meshStandardMaterial roughness={0.7} metalness={0.2} color="#1e293b" />
          </mesh>

          {/* USB Type-C Connection Port (Bottom cutout) */}
          <mesh position={[0, -0.29, 0]} castShadow>
            <boxGeometry args={[0.08, 0.012, 0.03]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#475569" />
          </mesh>

          {/* Front Face Textures (Cool hardware heat sink stripes) */}
          <group position={[0, 0.04, 0.036]}>
            <mesh position={[0, 0.08, 0]}>
              <boxGeometry args={[0.26, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#475569" />
            </mesh>
            <mesh position={[0, 0.02, 0]}>
              <boxGeometry args={[0.26, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#475569" />
            </mesh>
            <mesh position={[0, -0.04, 0]}>
              <boxGeometry args={[0.26, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#475569" />
            </mesh>
          </group>

          {/* Glowing Status LED Bar (Horizontal line at the top - Glowing Accent) */}
          <mesh position={[0, 0.22, 0.036]} castShadow>
            <boxGeometry args={[0.18, 0.016, 0.006]} />
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

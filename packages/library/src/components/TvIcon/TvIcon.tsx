import { SharedWrapper } from "../SharedWrapper";
import { TvIconProps } from "./types";

export function TvIcon(props: TvIconProps) {
  return (
    <SharedWrapper iconId="tv" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0]} position={[0, 0, 0]}>
          {/* Main TV Frame Bezel */}
          <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.44, 0.28, 0.02]} />
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

          {/* Glossy Dark Screen Canvas */}
          <mesh position={[0, 0.06, 0.008]} castShadow>
            <boxGeometry args={[0.42, 0.26, 0.008]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#0f172a" />
          </mesh>

          {/* Glowing/Accent Screen Border or Widgets */}
          <mesh position={[0, 0.06, 0.01]} castShadow>
            <boxGeometry args={[0.38, 0.22, 0.006]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={0.6}
              opacity={0.3}
              transparent
            />
          </mesh>

          {/* Supporting Neck Stem Stand */}
          <mesh position={[0, -0.11, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.06, 12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
          </mesh>

          {/* Trapezoidal or rectangular base plate stand */}
          <mesh position={[0, -0.14, 0]} castShadow>
            <boxGeometry args={[0.2, 0.016, 0.12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#334155" />
          </mesh>

          {/* Glowing Power Status Indicator Dot */}
          <mesh position={[0, -0.072, 0.012]} castShadow>
            <sphereGeometry args={[0.005, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

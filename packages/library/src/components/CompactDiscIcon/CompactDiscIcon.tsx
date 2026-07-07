import { SharedWrapper } from "../SharedWrapper";
import { CompactDiscIconProps } from "./types";

export function CompactDiscIcon(props: CompactDiscIconProps) {
  return (
    <SharedWrapper iconId="cd" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.1, 0]} position={[0, 0, 0]}>
          {/* Main CD Shiny Disc (Rotated flat cylinder) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.19, 0.19, 0.01, 32]} />
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

          {/* Rainbow Spectral Refraction Highlight 1 (Concentric Ring) */}
          <mesh position={[0, 0, 0.006]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.14, 0.008, 8, 32]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* Rainbow Spectral Refraction Highlight 2 (Outer Accent Ring) */}
          <mesh position={[0, 0, 0.005]} rotation={[Math.PI / 2, 0, 1.2]} castShadow>
            <torusGeometry args={[0.09, 0.006, 8, 32]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color="#0ea5e9"
              emissive="#0ea5e9"
              emissiveIntensity={0.7}
            />
          </mesh>

          {/* Inner Clear Plastic Hub area */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.002]} castShadow>
            <cylinderGeometry args={[0.056, 0.056, 0.012, 24]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.2}
              color="#f8fafc"
              opacity={0.6}
              transparent
            />
          </mesh>

          {/* Center Hole Void (Dark back cylinder) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.024, 0.024, 0.016, 24]} />
            <meshStandardMaterial roughness={0.9} metalness={0.0} color="#0f172a" />
          </mesh>

          {/* Glowing Center Ring Border */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.008]} castShadow>
            <torusGeometry args={[0.026, 0.004, 6, 24]} />
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

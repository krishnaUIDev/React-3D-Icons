import { SharedWrapper } from "../SharedWrapper";
import { ThermometerIconProps } from "./types";

export function ThermometerIcon(props: ThermometerIconProps) {
  return (
    <SharedWrapper iconId="thermometer" {...props}>
      {(mat) => (
        <group
          rotation={[0.15, -Math.PI / 8, 0.05]}
          position={[0, 0.05, 0]}
          scale={[1.45, 1.45, 1.45]}
        >
          {/* Glass Outer Sleeve (Glass/Clear material) */}
          <group>
            {/* Top tube */}
            <mesh castShadow position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.065, 0.065, 0.52, 16]} />
              <meshPhysicalMaterial
                roughness={0.05}
                metalness={0.1}
                transmission={0.95}
                thickness={0.8}
                clearcoat={1.0}
                ior={1.5}
                color="#ffffff"
              />
            </mesh>
            {/* Tube dome cap */}
            <mesh position={[0, 0.36, 0]} castShadow>
              <sphereGeometry args={[0.065, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshPhysicalMaterial
                roughness={0.05}
                metalness={0.1}
                transmission={0.95}
                thickness={0.8}
                clearcoat={1.0}
                ior={1.5}
                color="#ffffff"
              />
            </mesh>
            {/* Bottom glass bulb */}
            <mesh position={[0, -0.22, 0]} castShadow>
              <sphereGeometry args={[0.13, 20, 20]} />
              <meshPhysicalMaterial
                roughness={0.05}
                metalness={0.1}
                transmission={0.95}
                thickness={0.8}
                clearcoat={1.0}
                ior={1.5}
                color="#ffffff"
              />
            </mesh>
          </group>

          {/* Inner Mercury Liquid (Red glowing / accent color) */}
          <group>
            {/* Bulb liquid core */}
            <mesh position={[0, -0.22, 0]} castShadow>
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Vertical fluid column */}
            <mesh position={[0, 0.03, 0]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.38, 10]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Temperature Tick Mark Indicators (Metal/Grey) */}
          <group position={[0, 0.02, 0]}>
            <mesh position={[0.09, 0.16, 0]} castShadow>
              <boxGeometry args={[0.05, 0.012, 0.012]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.4} metalness={0.8} />
            </mesh>
            <mesh position={[0.09, 0.06, 0]} castShadow>
              <boxGeometry args={[0.05, 0.012, 0.012]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.4} metalness={0.8} />
            </mesh>
            <mesh position={[0.09, -0.04, 0]} castShadow>
              <boxGeometry args={[0.05, 0.012, 0.012]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.4} metalness={0.8} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

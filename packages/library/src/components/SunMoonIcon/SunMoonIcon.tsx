import { SharedWrapper } from "../SharedWrapper";
import { SunMoonIconProps } from "./types";

export function SunMoonIcon(props: SunMoonIconProps) {
  return (
    <SharedWrapper iconId="sunmoon" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.1]} position={[0, 0, 0]}>
          
          {/* Sun Half-Sphere (Left Side) */}
          <group position={[-0.15, 0, 0]}>
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.34, 32, 32]} />
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

            {/* Symmetrical Sun Rays extending outwards left-side only */}
            {[-1.8, -1.2, -0.6, 0, 0.6, 1.2, 1.8].map((angle, i) => (
              <group key={i} rotation={[0, 0, angle + Math.PI]}>
                <mesh position={[0, 0.44, 0]} castShadow>
                  <cylinderGeometry args={[0.016, 0.016, 0.16, 8]} />
                  <meshStandardMaterial
                    roughness={0.2}
                    metalness={0.7}
                    color={mat.color}
                  />
                </mesh>
              </group>
            ))}
          </group>

          {/* Moon Crescent Half (Right Side, wrapping around) */}
          <group position={[0.1, 0, 0.06]} rotation={[0, 0, -Math.PI / 2.8]}>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.36, 0.11, 16, 48, Math.PI * 0.8]} />
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

            {/* Smooth beveled tips */}
            <mesh position={[0.36, 0.01, 0]}>
              <sphereGeometry args={[0.11, 16, 16]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} />
            </mesh>
            <mesh position={[-0.18, 0.31, 0]}>
              <sphereGeometry args={[0.11, 16, 16]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} />
            </mesh>
          </group>

          {/* Neon mini-stars near the crescent moon (Accent glow) */}
          <group position={[0.42, 0, 0.14]}>
            {/* Top Star */}
            <mesh position={[0.08, 0.16, 0]} castShadow>
              <sphereGeometry args={[0.038, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.2}
              />
            </mesh>
            
            {/* Bottom Star */}
            <mesh position={[0.02, -0.16, 0]} castShadow>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

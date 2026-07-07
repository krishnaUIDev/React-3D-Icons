import { SharedWrapper } from "../SharedWrapper";
import { MoonIconProps } from "./types";

export function MoonIcon(props: MoonIconProps) {
  return (
    <SharedWrapper iconId="moon" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Crescent Moon Arc (Torus segment rotated) */}
          <group rotation={[0, 0, Math.PI / 2.3]}>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.56, 0.15, 16, 48, Math.PI * 0.86]} />
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
            <mesh position={[0.56, 0.015, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>

            <mesh position={[-0.24, 0.51, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Floating Neon night stars */}
          <group position={[0.3, 0, 0.12]}>
            {/* Top Star */}
            <mesh position={[0.15, 0.25, 0]} castShadow>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Bottom Star */}
            <mesh position={[0.02, -0.22, 0]} castShadow>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

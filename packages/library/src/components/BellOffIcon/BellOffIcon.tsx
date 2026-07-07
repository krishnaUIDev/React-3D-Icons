import { SharedWrapper } from "../SharedWrapper";
import { BellOffIconProps } from "./types";

export function BellOffIcon(props: BellOffIconProps) {
  return (
    <SharedWrapper iconId="belloff" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, 0.1, 0]}>
          {/* Bell Body Group */}
          <group position={[0, 0, 0]}>
            {/* Top Loop hanger ring */}
            <mesh castShadow position={[0, 0.45, 0]}>
              <torusGeometry args={[0.11, 0.024, 8, 20]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>

            {/* Upper Dome Half Sphere */}
            <mesh castShadow receiveShadow position={[0, 0.16, 0]}>
              <sphereGeometry args={[0.38, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

            {/* Main cylinder body flare */}
            <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
              <cylinderGeometry args={[0.38, 0.48, 0.44, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Bottom Lip Ring (torus) */}
            <mesh castShadow position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.48, 0.045, 8, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>

            {/* Bottom Clapper sphere */}
            <mesh castShadow position={[0, -0.38, 0]}>
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#1e293b" : "#cbd5e1"}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          </group>

          {/* Slashed Out Diagonal Bar (Glowing disabled accent warning) */}
          <mesh position={[0, 0, 0.16]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <cylinderGeometry args={[0.038, 0.038, 1.25, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

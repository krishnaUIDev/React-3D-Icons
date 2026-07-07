import { SharedWrapper } from "../SharedWrapper";
import { PulleyIconProps } from "./types";

export function PulleyIcon(props: PulleyIconProps) {
  return (
    <SharedWrapper iconId="pulley" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Main U-Frame Bracket Holder */}
          <group position={[0, 0.08, 0]}>
            {/* Top mounting block */}
            <mesh castShadow>
              <boxGeometry args={[0.28, 0.06, 0.22]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Left bracket plate */}
            <mesh position={[-0.13, -0.16, 0]} castShadow>
              <boxGeometry args={[0.02, 0.36, 0.16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right bracket plate */}
            <mesh position={[0.13, -0.16, 0]} castShadow>
              <boxGeometry args={[0.02, 0.36, 0.16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Top eyelet ring */}
            <mesh position={[0, 0.07, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.06, 0.016, 8, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Central Grooved Pulley Wheel (Cylinder + concentric outer rings) */}
          <group position={[0, -0.08, 0]}>
            {/* Core disk */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
              <cylinderGeometry args={[0.18, 0.18, 0.14, 24]} />
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
            {/* Rim boundaries to form the groove channel */}
            <mesh position={[-0.07, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <torusGeometry args={[0.19, 0.012, 8, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            <mesh position={[0.07, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <torusGeometry args={[0.19, 0.012, 8, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Glowing Accent Central Axle Pin (Glowing Accent) */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.042, 0.042, 0.3, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Cable / Rope segment crossing over the top of the wheel */}
          <mesh position={[0, -0.06, 0.22]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.44, 12]} />
            <meshStandardMaterial roughness={0.85} metalness={0.1} color="#d1d5db" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

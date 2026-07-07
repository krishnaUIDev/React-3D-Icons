import { SharedWrapper } from "../SharedWrapper";
import { CrankIconProps } from "./types";

export function CrankIcon(props: CrankIconProps) {
  return (
    <SharedWrapper iconId="crank" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.4, 0.1]} position={[0, 0, 0]}>
          {/* Main Central Pivot Axle */}
          <mesh castShadow receiveShadow position={[0, 0, -0.06]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.12, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Glowing Axle Accent Collar */}
          <mesh position={[0, 0, -0.01]} castShadow>
            <cylinderGeometry args={[0.046, 0.046, 0.02, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Primary Offset Web/Arm */}
          <group position={[0, 0, 0]}>
            {/* Flat Crank Arm bar */}
            <mesh castShadow position={[0, 0.11, 0.02]}>
              <boxGeometry args={[0.06, 0.28, 0.03]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Pivot Counterweight (Circular disc on axle end) */}
            <mesh castShadow position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.07, 0.07, 0.03, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Off-Center Crank Pin */}
          <mesh castShadow position={[0, 0.22, 0.06]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.08, 12]} />
            <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
          </mesh>

          {/* Handle Grip (Rotatable sleeve mounted on crank pin) */}
          <mesh castShadow position={[0, 0.22, 0.13]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.038, 0.038, 0.1, 16]} />
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

          {/* Accent Cap on Grip tip */}
          <mesh position={[0, 0.22, 0.185]} castShadow>
            <sphereGeometry args={[0.038, 16, 12]} />
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

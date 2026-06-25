import { SharedWrapper } from "../SharedWrapper";
import { CloudLightningIconProps } from "./types";

export function CloudLightningIcon(props: CloudLightningIconProps) {
  return (
    <SharedWrapper iconId="cloudlightning" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0.1, 0]}>
          
          {/* Cloud Body (Overlapping physical spheres) */}
          <group position={[0, 0.1, 0]}>
            {/* Center Sphere */}
            <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
              <sphereGeometry args={[0.38, 32, 32]} />
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

            {/* Left Sphere */}
            <mesh castShadow receiveShadow position={[-0.34, 0.05, 0]}>
              <sphereGeometry args={[0.27, 32, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>

            {/* Right Sphere */}
            <mesh castShadow receiveShadow position={[0.34, 0.08, 0]}>
              <sphereGeometry args={[0.29, 32, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>

            {/* Flat Bottom Filler Plate */}
            <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[0.68, 0.24, 0.46]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Central Glowing Lightning Bolt (Accent color) */}
          <group position={[0.04, -0.06, 0.16]}>
            {/* Top diagonal segment */}
            <mesh position={[0.05, -0.16, 0]} rotation={[0, 0, -0.45]} castShadow>
              <boxGeometry args={[0.08, 0.32, 0.06]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissiveIntensity={1.3}
              />
            </mesh>
            
            {/* Middle horizontal-skewed segment */}
            <mesh position={[-0.04, -0.28, 0]} rotation={[0, 0, 0.32]} castShadow>
              <boxGeometry args={[0.08, 0.26, 0.06]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Bottom tip segment */}
            <mesh position={[-0.08, -0.42, 0]} rotation={[0, 0, -0.2]} castShadow>
              <boxGeometry args={[0.06, 0.22, 0.06]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#fbbf24"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

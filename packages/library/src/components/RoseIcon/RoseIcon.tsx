import { SharedWrapper } from "../SharedWrapper";
import { RoseIconProps } from "./types";

export function RoseIcon(props: RoseIconProps) {
  return (
    <SharedWrapper iconId="rose" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, -0.04, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Stem (curved vertical post) */}
          <group position={[0, -0.16, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.012, 0.014, 0.28, 12]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
            </mesh>
            {/* Small Thorns */}
            <mesh position={[-0.014, 0.04, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
              <coneGeometry args={[0.008, 0.02, 4]} />
              <meshStandardMaterial color="#14532d" />
            </mesh>
            <mesh position={[0.014, -0.04, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <coneGeometry args={[0.008, 0.02, 4]} />
              <meshStandardMaterial color="#14532d" />
            </mesh>
            {/* Stem Green Leaves */}
            <mesh position={[-0.04, 0.08, 0.02]} rotation={[0.4, 0.2, 0.8]} castShadow>
              <boxGeometry args={[0.08, 0.01, 0.04]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#15803d" />
            </mesh>
          </group>

          {/* Sepal cup base (green calyx under petals) */}
          <mesh position={[0, -0.03, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.018, 0.03, 12]} />
            <meshStandardMaterial roughness={0.5} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Concentric Petals Layers */}
          <group position={[0, 0.04, 0]}>
            {/* Outer Petals Layer (Wide torus segments) */}
            <group rotation={[0.2, 0, 0]}>
              <mesh castShadow receiveShadow>
                <sphereGeometry args={[0.13, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
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
            </group>

            {/* Mid Petals Layer (Nested tighter) */}
            <group rotation={[-0.1, 0.8, -0.1]}>
              <mesh position={[0, 0.02, 0]} castShadow>
                <sphereGeometry args={[0.09, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>
            </group>

            {/* Inner Tightly Wrapped Rose Core (Glowing) */}
            <mesh position={[0, 0.04, 0]} castShadow>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

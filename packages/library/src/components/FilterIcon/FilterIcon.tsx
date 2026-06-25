import { SharedWrapper } from "../SharedWrapper";
import { FilterIconProps } from "./types";

export function FilterIcon(props: FilterIconProps) {
  return (
    <SharedWrapper iconId="filter" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Outer Funnel Cone (tapering downwards) */}
          <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.7, 0.35, 0.45, 32, 1, true]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
              side={2} // DoubleSide so inside is rendered nicely
            />
          </mesh>

          {/* Funnel Spout (narrow lower tube) */}
          <mesh castShadow receiveShadow position={[0, -0.225, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Accent-colored filter plate inside the bowl */}
          <mesh position={[0, 0.12, 0]}>
            <cylinderGeometry args={[0.39, 0.39, 0.02, 32]} />
            <meshStandardMaterial
              color={props.accentColor || "#ec4899"}
              roughness={0.4}
              metalness={0.7}
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Glowing filter grid details */}
          <mesh position={[0, 0.125, 0]}>
            <cylinderGeometry args={[0.35, 0.35, 0.025, 12, 1, true]} />
            <meshStandardMaterial
              color={props.accentColor || "#ec4899"}
              emissive={props.accentColor || "#ec4899"}
              emissiveIntensity={1.2}
              wireframe
            />
          </mesh>

          {/* Droplet representing filtered output */}
          <mesh position={[0, -0.55, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={props.accentColor || "#ec4899"}
              emissive={props.accentColor || "#ec4899"}
              emissiveIntensity={1.0}
              roughness={0.1}
              metalness={0.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

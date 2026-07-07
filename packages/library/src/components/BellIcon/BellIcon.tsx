import { SharedWrapper } from "../SharedWrapper";
import { BellIconProps } from "./types";

export function BellIcon(props: BellIconProps) {
  return (
    <SharedWrapper iconId="bell" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.15, -0.05]} position={[0, 0, 0]}>
          {/* Top Loop / Crown hanger */}
          <mesh position={[0, 0.42, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[0.11, 0.032, 8, 32]} />
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

          {/* Dome Top (Hemisphere) */}
          <mesh position={[0, 0.15, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.32, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

          {/* Tapered Cylinder Body */}
          <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.32, 0.45, 0.5, 32]} />
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

          {/* Bell Bottom Rim Collar */}
          <mesh position={[0, -0.33, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.44, 0.05, 12, 48]} />
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

          {/* Bell Clapper Ball (contrasting orange/gold metal clapper) */}
          <mesh position={[0, -0.46, 0]} castShadow>
            <sphereGeometry args={[0.11, 24, 24]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#e2e8f0" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

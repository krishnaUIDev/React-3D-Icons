import { SharedWrapper } from "../SharedWrapper";
import { CloudIconProps } from "./types";

export function CloudIcon(props: CloudIconProps) {
  return (
    <SharedWrapper iconId="cloud" {...props}>
      {(mat) => (
        <group position={[0, 0.1, 0]}>
          {/* Main Central Sphere */}
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.62, 32, 32]} />
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
          <mesh position={[-0.5, -0.05, 0.05]} castShadow receiveShadow>
            <sphereGeometry args={[0.48, 32, 32]} />
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

          {/* Right Sphere */}
          <mesh position={[0.5, -0.08, 0.05]} castShadow receiveShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
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

          {/* Bottom rounded connecting box to form a flat cloud floor */}
          <mesh position={[0, -0.18, 0.02]} castShadow receiveShadow>
            <boxGeometry args={[1.0, 0.35, 0.75]} />
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
      )}
    </SharedWrapper>
  );
}

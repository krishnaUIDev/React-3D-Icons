import { SharedWrapper } from "../SharedWrapper";
import { MusicIconProps } from "./types";

export function MusicIcon(props: MusicIconProps) {
  return (
    <SharedWrapper iconId="music" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, -0.05, 0]}>
          {/* Left Note Head (Rotated Egg Shape) */}
          <group position={[-0.22, -0.3, 0]} rotation={[0.3, 0, 0.5]}>
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.18, 32, 16]} />
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

          {/* Right Note Head (Rotated Egg Shape) */}
          <group position={[0.18, -0.12, 0]} rotation={[0.3, 0, 0.5]}>
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.18, 32, 16]} />
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

          {/* Left Stem */}
          <mesh position={[-0.1, 0.1, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.8, 16]} />
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

          {/* Right Stem */}
          <mesh position={[0.3, 0.28, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.8, 16]} />
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

          {/* Slanted Connecting Beam */}
          <group position={[0.1, 0.59, 0]} rotation={[0, 0, 0.41]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.45, 0.14, 0.08]} />
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
        </group>
      )}
    </SharedWrapper>
  );
}

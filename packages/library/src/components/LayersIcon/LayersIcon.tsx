import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function LayersIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="layers" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.5, 0.1]} position={[0, 0, 0]}>
          {/* Bottom Layer */}
          <mesh position={[0, -0.28, -0.16]} castShadow receiveShadow>
            <boxGeometry args={[1.0, 0.05, 1.0]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
              opacity={0.5} // slightly transparent so layering is visible
              transparent
            />
          </mesh>

          {/* Middle Layer */}
          <mesh position={[0, 0.0, 0.0]} castShadow receiveShadow>
            <boxGeometry args={[1.0, 0.05, 1.0]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
              opacity={0.7}
              transparent
            />
          </mesh>

          {/* Top Layer */}
          <mesh position={[0, 0.28, 0.16]} castShadow receiveShadow>
            <boxGeometry args={[1.0, 0.05, 1.0]} />
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

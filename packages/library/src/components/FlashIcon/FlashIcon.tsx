import { SharedWrapper } from "../SharedWrapper";
import { FlashIconProps } from "./types";

export function FlashIcon(props: FlashIconProps) {
  return (
    <SharedWrapper iconId="flash" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.15]}>
          {/* Top Zig */}
          <mesh position={[0.15, 0.42, 0]} rotation={[0, 0, -Math.PI / 8]} castShadow receiveShadow>
            <boxGeometry args={[0.3, 0.65, 0.28]} />
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

          {/* Middle Connector */}
          <mesh position={[-0.04, 0.12, 0]} rotation={[0, 0, Math.PI / 6]} castShadow receiveShadow>
            <boxGeometry args={[0.26, 0.52, 0.28]} />
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

          {/* Bottom Zag (Pointy) */}
          <mesh position={[-0.2, -0.28, 0]} rotation={[0, 0, -Math.PI / 10]} castShadow receiveShadow>
            <boxGeometry args={[0.22, 0.68, 0.28]} />
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

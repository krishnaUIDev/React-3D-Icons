import { SharedWrapper } from "../SharedWrapper";
import { FolderIconProps } from "./types";

export function FolderIcon(props: FolderIconProps) {
  return (
    <SharedWrapper iconId="folder" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.05]} position={[0, -0.08, 0]}>
          
          {/* Back Cover Substrate */}
          <mesh position={[0, 0, -0.12]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.95, 0.08]} />
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

          {/* Folder Tab on Back Cover */}
          <mesh position={[-0.38, 0.54, -0.12]} castShadow>
            <boxGeometry args={[0.42, 0.22, 0.08]} />
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

          {/* Paper Sheet 1 (Peaking Out) */}
          <mesh position={[-0.05, 0.18, -0.04]} rotation={[0, 0, 0.05]} castShadow>
            <boxGeometry args={[1.15, 0.9, 0.04]} />
            <meshStandardMaterial roughness={0.9} metalness={0.0} color="#f4f4f5" />
          </mesh>

          {/* Paper Sheet 2 (Peaking Out) */}
          <mesh position={[0.04, 0.12, 0.02]} rotation={[0, 0, -0.04]} castShadow>
            <boxGeometry args={[1.12, 0.86, 0.04]} />
            <meshStandardMaterial roughness={0.9} metalness={0.0} color="#e4e4e7" />
          </mesh>

          {/* Front Cover (Slightly Slanted Open) */}
          <mesh position={[0, -0.04, 0.12]} rotation={[-0.08, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.88, 0.08]} />
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

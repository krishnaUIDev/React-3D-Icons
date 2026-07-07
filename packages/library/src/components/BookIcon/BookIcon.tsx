import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function BookIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="book" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Back Cover */}
          <mesh castShadow receiveShadow position={[0, 0, -0.16]}>
            <boxGeometry args={[0.95, 1.35, 0.06]} />
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

          {/* Front Cover */}
          <mesh castShadow receiveShadow position={[0, 0, 0.16]}>
            <boxGeometry args={[0.95, 1.35, 0.06]} />
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

          {/* Book Spine (left side) */}
          <mesh castShadow position={[-0.47, 0, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 1.35, 16, 1, false, Math.PI / 2, Math.PI]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Pages (cream-colored block inside) */}
          <mesh castShadow receiveShadow position={[0.04, 0, 0]}>
            <boxGeometry args={[0.82, 1.25, 0.26]} />
            <meshPhysicalMaterial
              roughness={0.8}
              metalness={0.05}
              color="#fcfcf0" // Warm cream page color
            />
          </mesh>

          {/* Ribbon Bookmark (accent dangling out of the bottom) */}
          <mesh position={[0, -0.68, 0.04]} rotation={[0.1, 0, 0.1]} castShadow>
            <boxGeometry args={[0.08, 0.35, 0.02]} />
            <meshStandardMaterial roughness={0.3} metalness={0.2} color={mat.color} />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

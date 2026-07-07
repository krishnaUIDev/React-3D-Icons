import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function FlagIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="flag" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[-0.2, 0, 0]}>
          {/* Flagpole (Steel silver pole) */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[0.022, 0.022, 1.4, 12]} />
            <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
          </mesh>

          {/* Flagpole Top Ball */}
          <mesh castShadow position={[0, 0.72, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />{" "}
            {/* Gold top ball */}
          </mesh>

          {/* Flagpole Bottom Collar */}
          <mesh castShadow position={[0, -0.71, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Waving Flag Banner - Segment 1 (closest to pole) */}
          <mesh position={[0.2, 0.3, 0.015]} rotation={[0, 0.2, 0]} castShadow>
            <boxGeometry args={[0.38, 0.46, 0.04]} />
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

          {/* Waving Flag Banner - Segment 2 (middle wave) */}
          <mesh position={[0.52, 0.3, -0.025]} rotation={[0, -0.35, 0]} castShadow>
            <boxGeometry args={[0.34, 0.46, 0.04]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Waving Flag Banner - Segment 3 (tail end) */}
          <mesh position={[0.8, 0.3, 0.01]} rotation={[0, 0.15, 0]} castShadow>
            <boxGeometry args={[0.26, 0.46, 0.04]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function ShareIcon(props: IconProps) {
  // Angle of diagonal connecting rods
  const angle = Math.atan2(0.45, 0.9); // ~0.4636 rad (~26.5 deg)
  const rodLength = Math.sqrt(0.45 * 0.45 + 0.9 * 0.9); // ~1.006

  return (
    <SharedWrapper iconId="share" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.3, 0]} position={[0, 0, 0]}>
          
          {/* Connecting Rod 1 (Top diagonal) */}
          <mesh position={[0, 0.225, 0]} rotation={[0, 0, -angle]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, rodLength, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Connecting Rod 2 (Bottom diagonal) */}
          <mesh position={[0, -0.225, 0]} rotation={[0, 0, angle]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, rodLength, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Left Node (Parent node) */}
          <mesh position={[-0.45, 0, 0]} castShadow>
            <sphereGeometry args={[0.22, 24, 24]} />
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

          {/* Top Right Node */}
          <mesh position={[0.45, 0.45, 0]} castShadow>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Bottom Right Node */}
          <mesh position={[0.45, -0.45, 0]} castShadow>
            <sphereGeometry args={[0.22, 24, 24]} />
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

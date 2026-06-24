import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function PinIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="pin" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.2, 0.4]} position={[0, 0.1, 0]}>
          
          {/* Metal Pin Needle (extending down from bottom of handle) */}
          <mesh castShadow position={[0, -0.62, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6, 12]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Needle Sharp Tip */}
          <mesh castShadow position={[0, -0.96, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.02, 0.08, 12]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Pin Handle - Bottom Flat Base Collar */}
          <mesh castShadow position={[0, -0.26, 0]}>
            <cylinderGeometry args={[0.26, 0.26, 0.1, 24]} />
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

          {/* Pin Handle - Middle Tapered Waist */}
          <mesh castShadow position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.16, 0.24, 0.58, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Pin Handle - Top Rounded Head */}
          <mesh castShadow position={[0, 0.44, 0]}>
            <sphereGeometry args={[0.28, 24, 24]} />
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

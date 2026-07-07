import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function PhoneIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="phone" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.4, 0.4]} position={[0, 0, 0]}>
          {/* Main Curved Handle - Middle Section */}
          <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 1.0, 16]} />
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

          {/* Top Receiver Cup Joiner (rotated towards ear) */}
          <mesh castShadow position={[0.08, 0.44, 0.08]} rotation={[-0.4, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.2, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Top Speaker Cap */}
          <mesh castShadow position={[0.12, 0.52, 0.12]} rotation={[-0.4, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.06, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>
          <mesh position={[0.12, 0.55, 0.12]} rotation={[-0.4, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />{" "}
            {/* Metallic plate */}
          </mesh>

          {/* Bottom Microphone Cup Joiner (rotated towards mouth) */}
          <mesh castShadow position={[0.08, -0.44, 0.08]} rotation={[0.4, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.2, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Bottom Microphone Cap */}
          <mesh castShadow position={[0.12, -0.52, 0.12]} rotation={[0.4, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.06, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>
          <mesh position={[0.12, -0.55, 0.12]} rotation={[0.4, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />{" "}
            {/* Metallic plate */}
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

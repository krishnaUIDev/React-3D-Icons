import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function CoffeeIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="coffee" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, -0.1, 0]}>
          
          {/* Main Mug Cup Body */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.46, 0.46, 0.88, 32]} />
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

          {/* Coffee Surface (Liquid inside cup) */}
          <mesh position={[0, 0.4, 0]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.04, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.0} color="#3b2314" /> {/* Dark coffee brown */}
          </mesh>

          {/* Mug Handle (Side loop) */}
          <mesh position={[-0.48, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <torusGeometry args={[0.24, 0.08, 12, 32, Math.PI]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Steam Wave 1 */}
          <mesh position={[-0.14, 0.68, 0]} rotation={[0, 0, 0.1]} castShadow>
            <capsuleGeometry args={[0.02, 0.16, 4, 8]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#cbd5e1" transparent opacity={0.6} />
          </mesh>

          {/* Steam Wave 2 (Middle) */}
          <mesh position={[0.02, 0.72, 0]} rotation={[0, 0, -0.05]} castShadow>
            <capsuleGeometry args={[0.02, 0.18, 4, 8]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#cbd5e1" transparent opacity={0.6} />
          </mesh>

          {/* Steam Wave 3 */}
          <mesh position={[0.16, 0.66, 0]} rotation={[0, 0, 0.15]} castShadow>
            <capsuleGeometry args={[0.02, 0.14, 4, 8]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#cbd5e1" transparent opacity={0.6} />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

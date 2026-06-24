import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function MonitorIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="monitor" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0.1, 0]}>
          
          {/* Outer Screen Bezel frame */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.34, 0.82, 0.08]} />
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

          {/* Inner Glossy Screen Glass */}
          <mesh position={[0, 0, 0.03]} castShadow>
            <boxGeometry args={[1.24, 0.72, 0.04]} />
            <meshStandardMaterial roughness={0.05} metalness={0.9} color="#18181b" /> {/* Sleek black screen glass */}
          </mesh>

          {/* Monitor Stand Neck */}
          <mesh position={[0, -0.52, -0.05]} castShadow>
            <cylinderGeometry args={[0.05, 0.06, 0.24, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
          </mesh>

          {/* Stand Base Plate */}
          <mesh position={[0, -0.64, 0]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.24, 0.26, 0.03, 24]} />
            <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

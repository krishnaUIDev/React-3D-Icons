import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function TagIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="tag" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.4, 0.6]} position={[0, 0, 0]}>
          {/* Main Tag Body Board */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
            <boxGeometry args={[0.72, 1.0, 0.06]} />
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

          {/* Top Angled Shoulders (Tapered corners) */}
          <mesh position={[-0.24, 0.45, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <boxGeometry args={[0.2, 0.2, 0.06]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>
          <mesh position={[0.24, 0.45, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
            <boxGeometry args={[0.2, 0.2, 0.06]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Punched Hole Ring */}
          <mesh position={[0, 0.34, 0.035]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.07, 0.02, 8, 24]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Inner Dark Hole */}
          <mesh position={[0, 0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.07, 16]} />
            <meshStandardMaterial roughness={0.9} metalness={0.1} color="#09090b" />
          </mesh>

          {/* Thread / String Loop */}
          <mesh position={[0, 0.58, 0.05]} rotation={[0, 0, 0]} castShadow>
            <torusGeometry args={[0.2, 0.015, 8, 32, Math.PI * 1.5]} />
            <meshStandardMaterial roughness={0.6} metalness={0.05} color="#e4e4e7" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function EyeIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="eye" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0]} position={[0, 0, 0]}>
          
          {/* Eyeball (White Sphere) */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <sphereGeometry args={[0.44, 32, 32]} />
            <meshStandardMaterial roughness={0.1} metalness={0.05} color="#fcfcfc" />
          </mesh>

          {/* Iris (Colored lens) */}
          <mesh castShadow position={[0, 0, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.04, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Pupil (Dark Center) */}
          <mesh position={[0, 0, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.02, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#09090b" />
          </mesh>

          {/* Top Eyelid (Torus segment curved down) */}
          <mesh position={[0, 0.12, 0.16]} rotation={[0.2, 0, 0]} castShadow>
            <torusGeometry args={[0.5, 0.05, 12, 32, Math.PI]} />
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

          {/* Bottom Eyelid (Torus segment curved up) */}
          <mesh position={[0, -0.12, 0.16]} rotation={[-0.2, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.5, 0.05, 12, 32, Math.PI]} />
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

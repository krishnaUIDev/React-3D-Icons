import { SharedWrapper } from "../SharedWrapper";
import { PlusIconProps } from "./types";

export function PlusIcon(props: PlusIconProps) {
  return (
    <SharedWrapper iconId="plus" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Vertical Bar */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Horizontal Bar */}
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Center Connection Sphere */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.082, 16, 16]} />
            <meshStandardMaterial
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.6}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

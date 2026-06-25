import { SharedWrapper } from "../SharedWrapper";
import { CloseIconProps } from "./types";

export function CloseIcon(props: CloseIconProps) {
  return (
    <SharedWrapper iconId="close" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Diagonal Bar 1 */}
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.07, 0.07, 0.85, 16]} />
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

          {/* Diagonal Bar 2 */}
          <mesh castShadow receiveShadow rotation={[0, 0, -Math.PI / 4]}>
            <cylinderGeometry args={[0.07, 0.07, 0.85, 16]} />
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

          {/* Center Connector sphere */}
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

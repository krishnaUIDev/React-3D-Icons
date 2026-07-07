import { SharedWrapper } from "../SharedWrapper";
import { CheckIconProps } from "./types";

export function CheckIcon(props: CheckIconProps) {
  return (
    <SharedWrapper iconId="check" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.05]} position={[0, 0.05, 0]}>
          {/* Circular backing disc */}
          <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
            <cylinderGeometry args={[0.85, 0.85, 0.12, 48]} />
            <meshPhysicalMaterial
              roughness={mat.roughness * 1.2}
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

          {/* Rim border ring */}
          <mesh position={[0, 0, -0.04]}>
            <torusGeometry args={[0.87, 0.055, 12, 48]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>

          {/* Checkmark – short left leg */}
          <mesh castShadow position={[-0.22, -0.08, 0.1]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.13, 0.42, 0.18]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.0}
              roughness={0.15}
              metalness={0.2}
            />
          </mesh>

          {/* Checkmark – long right leg */}
          <mesh castShadow position={[0.14, 0.12, 0.1]} rotation={[0, 0, -Math.PI / 3.2]}>
            <boxGeometry args={[0.13, 0.72, 0.18]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.0}
              roughness={0.15}
              metalness={0.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

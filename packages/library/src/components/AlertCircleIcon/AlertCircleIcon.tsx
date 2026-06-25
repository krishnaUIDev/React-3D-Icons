import { SharedWrapper } from "../SharedWrapper";
import { AlertCircleIconProps } from "./types";

export function AlertCircleIcon(props: AlertCircleIconProps) {
  return (
    <SharedWrapper iconId="alertcircle" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Outer circular torus ring */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.78, 0.06, 12, 48]} />
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

          {/* Exclamation point upper body (tapering downwards) */}
          <mesh castShadow receiveShadow position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.065, 0.035, 0.38, 24]} />
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

          {/* Exclamation point bottom dot (accent-colored glowing sphere) */}
          <mesh castShadow position={[0, -0.22, 0]}>
            <sphereGeometry args={[0.075, 24, 24]} />
            <meshStandardMaterial
              color={props.accentColor || "#ef4444"}
              emissive={props.accentColor || "#ef4444"}
              emissiveIntensity={1.2}
              roughness={0.15}
              metalness={0.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

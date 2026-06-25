import { SharedWrapper } from "../SharedWrapper";
import { InfoIconProps } from "./types";

export function InfoIcon(props: InfoIconProps) {
  return (
    <SharedWrapper iconId="info" {...props}>
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

          {/* Lower vertical stem of "i" */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.42, 24]} />
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

          {/* Bottom decorative base plate for "i" */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.03, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* Dot of the letter "i" (accent-colored glowing sphere) */}
          <mesh castShadow position={[0, 0.25, 0]}>
            <sphereGeometry args={[0.09, 24, 24]} />
            <meshStandardMaterial
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
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

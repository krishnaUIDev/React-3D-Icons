import { SharedWrapper } from "../SharedWrapper";
import { WifiIconProps } from "./types";

export function WifiIcon(props: WifiIconProps) {
  const arcLength = Math.PI * 2 / 3; // 120 degrees arc
  const zRotation = Math.PI / 6;     // Offset to center it on the Y-axis

  return (
    <SharedWrapper iconId="wifi" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.15, 0]} position={[0, -0.1, 0]}>
          
          {/* Bottom Center Dot */}
          <mesh position={[0, -0.32, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.09, 32, 32]} />
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

          {/* First Inner Arch */}
          <mesh position={[0, -0.32, 0]} rotation={[0, 0, zRotation]} castShadow receiveShadow>
            <torusGeometry args={[0.26, 0.048, 8, 48, arcLength]} />
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

          {/* Second Middle Arch */}
          <mesh position={[0, -0.32, 0]} rotation={[0, 0, zRotation]} castShadow receiveShadow>
            <torusGeometry args={[0.54, 0.048, 8, 48, arcLength]} />
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

          {/* Third Outer Arch */}
          <mesh position={[0, -0.32, 0]} rotation={[0, 0, zRotation]} castShadow receiveShadow>
            <torusGeometry args={[0.82, 0.048, 8, 48, arcLength]} />
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

import { SharedWrapper } from "../SharedWrapper";
import { AnchorIconProps } from "./types";

export function AnchorIcon(props: AnchorIconProps) {
  return (
    <SharedWrapper iconId="anchor" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Central vertical shank */}
          <mesh castShadow receiveShadow position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.9, 24]} />
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

          {/* Top horizontal stock / crossbar */}
          <mesh castShadow receiveShadow position={[0, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.045, 0.045, 0.55, 24]} />
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

          {/* Decorative stock end caps (using accent color) */}
          {[-0.275, 0.275].map((xOffset, index) => (
            <mesh key={index} position={[xOffset, 0.35, 0]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          ))}

          {/* Top shackle ring / loop */}
          <mesh castShadow receiveShadow position={[0, 0.52, 0]}>
            <torusGeometry args={[0.09, 0.03, 12, 24]} />
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

          {/* Bottom crescent arms */}
          <mesh castShadow receiveShadow position={[0, -0.3, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.35, 0.055, 12, 32, Math.PI]} />
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

          {/* Left fluke (tip) */}
          <mesh castShadow position={[-0.35, -0.22, 0]} rotation={[0, 0, Math.PI / 4]}>
            <coneGeometry args={[0.07, 0.18, 4]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              roughness={0.2}
              metalness={0.6}
            />
          </mesh>

          {/* Right fluke (tip) */}
          <mesh castShadow position={[0.35, -0.22, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <coneGeometry args={[0.07, 0.18, 4]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              roughness={0.2}
              metalness={0.6}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

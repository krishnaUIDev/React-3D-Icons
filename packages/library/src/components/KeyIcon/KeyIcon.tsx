import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { KeyIconProps } from "./types";

export function KeyIcon(props: KeyIconProps) {
  return (
    <SharedWrapper iconId="key" {...props}>
      {(mat) => (
        <group rotation={[0.4, 0.2, Math.PI / 4]} position={[0, 0.15, 0]}>
          {/* Key Bow / Head Ring */}
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.32, 0.1, 16, 64]} />
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

          {/* Shaft connecting head to bit */}
          <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 32]} />
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

          {/* Tip of the key (Rounded end) */}
          <mesh position={[0, -0.55, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.07, 32, 16]} />
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

          {/* Key Bitting / Tooth 1 */}
          <mesh position={[0.12, -0.3, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.18, 0.12, 0.1]} radius={0.02} smoothness={4}>
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
            </RoundedBox>
          </mesh>

          {/* Key Bitting / Tooth 2 */}
          <mesh position={[0.1, -0.45, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.14, 0.09, 0.1]} radius={0.02} smoothness={4}>
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
            </RoundedBox>
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

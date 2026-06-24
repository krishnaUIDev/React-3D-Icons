import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { TrophyIconProps } from "./types";

export function TrophyIcon(props: TrophyIconProps) {
  return (
    <SharedWrapper iconId="trophy" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, 0.05, 0]}>
          
          {/* Main Cup Bowl */}
          <mesh position={[0, 0.14, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.42, 0.18, 0.44, 32]} />
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

          {/* Rim Collar on Top of Bowl */}
          <mesh position={[0, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.42, 0.04, 8, 48]} />
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

          {/* Left Handle Ring */}
          <mesh position={[-0.42, 0.14, 0]} rotation={[0, 0, 0.2]} castShadow receiveShadow>
            <torusGeometry args={[0.18, 0.035, 8, 32]} />
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

          {/* Right Handle Ring */}
          <mesh position={[0.42, 0.14, 0]} rotation={[0, 0, -0.2]} castShadow receiveShadow>
            <torusGeometry args={[0.18, 0.035, 8, 32]} />
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

          {/* Cup Stand / Stem */}
          <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.08, 0.16, 0.22, 16]} />
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

          {/* Base Pedestal (contrasting darker stand) */}
          <mesh position={[0, -0.36, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.42, 0.14, 0.42]} radius={0.03} smoothness={4}>
              <meshStandardMaterial 
                roughness={0.7} 
                metalness={0.2} 
                color={props.theme === "dark" ? "#1e293b" : "#475569"} 
              />
            </RoundedBox>
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

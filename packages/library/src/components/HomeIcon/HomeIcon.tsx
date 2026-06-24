import { SharedWrapper } from "../SharedWrapper";
import { HomeIconProps } from "./types";

export function HomeIcon(props: HomeIconProps) {
  return (
    <SharedWrapper iconId="home" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Main House Base */}
          <mesh castShadow receiveShadow position={[0, -0.2, 0]}>
            <boxGeometry args={[0.75, 0.6, 0.65]} />
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

          {/* Pyramidal Roof (using 4-sided Cone) */}
          <mesh position={[0, 0.35, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
            <coneGeometry args={[0.62, 0.55, 4]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={props.accentColor || "#f43f5e"}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Chimney */}
          <mesh position={[0.2, 0.38, -0.15]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Door */}
          <mesh position={[0, -0.32, 0.33]} castShadow>
            <boxGeometry args={[0.18, 0.34, 0.02]} />
            <meshStandardMaterial
              roughness={0.4}
              metalness={0.2}
              color={props.theme === "dark" ? "#18181b" : "#e4e4e7"}
            />
          </mesh>

          {/* Window */}
          <mesh position={[0, 0.02, 0.33]} castShadow>
            <boxGeometry args={[0.16, 0.16, 0.02]} />
            <meshPhysicalMaterial
              roughness={0.1}
              metalness={0.1}
              transmission={0.9}
              thickness={0.5}
              color={props.accentColor || "#eab308"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

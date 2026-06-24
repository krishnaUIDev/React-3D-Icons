import { SharedWrapper } from "../SharedWrapper";
import { SearchIconProps } from "./types";

export function SearchIcon(props: SearchIconProps) {
  return (
    <SharedWrapper iconId="search" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0]} position={[0, 0.1, 0]}>
          {/* Magnifying Glass Ring */}
          <mesh castShadow receiveShadow position={[0.12, 0.12, 0]}>
            <torusGeometry args={[0.42, 0.07, 16, 48]} />
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

          {/* Glass Lens (Inside the Ring) */}
          <mesh castShadow position={[0.12, 0.12, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.04, 32]} />
            <meshPhysicalMaterial
              roughness={0.15}
              metalness={0.1}
              transmission={0.9}
              thickness={0.8}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
              ior={1.5}
              color={props.accentColor || "#38bdf8"}
              emissive={props.theme === "dark" ? "#1e1b4b" : "#000000"}
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Diagonal Handle */}
          <mesh position={[-0.24, -0.24, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.45, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Handle Tip (Accent Color) */}
          <mesh position={[-0.4, -0.4, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <cylinderGeometry args={[0.052, 0.052, 0.12, 16]} />
            <meshPhysicalMaterial
              roughness={0.3}
              metalness={0.6}
              color={props.accentColor || "#f43f5e"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

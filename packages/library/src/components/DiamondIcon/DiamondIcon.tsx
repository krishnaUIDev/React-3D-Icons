import { SharedWrapper } from "../SharedWrapper";
import { DiamondIconProps } from "./types";

export function DiamondIcon(props: DiamondIconProps) {
  return (
    <SharedWrapper iconId="diamond" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Upper Crown: Beveled cylinder tapering up. Flat facets are created using 8 segments */}
          <mesh castShadow receiveShadow position={[0, 0.125, 0]}>
            <cylinderGeometry args={[0.45, 0.75, 0.25, 8]} />
            <meshPhysicalMaterial
              roughness={mat.roughness * 0.5} // Diamonds are highly polished
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={2.42} // Genuine diamond IOR is 2.42!
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
              flatShading={true} // Emphasize flat facets
            />
          </mesh>

          {/* Lower Pavilion: Cone pointing down */}
          <mesh
            castShadow
            receiveShadow
            position={[0, -0.375, 0]}
            rotation={[Math.PI, 0, 0]}
          >
            <coneGeometry args={[0.75, 0.75, 8]} />
            <meshPhysicalMaterial
              roughness={mat.roughness * 0.5}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={2.42}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
              flatShading={true}
            />
          </mesh>

          {/* Girdle: Flat metallic accent ring dividing crown and pavilion */}
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[0.76, 0.025, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

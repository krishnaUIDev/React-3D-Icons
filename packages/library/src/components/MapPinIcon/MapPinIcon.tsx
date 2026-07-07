import { SharedWrapper } from "../SharedWrapper";
import { MapPinIconProps } from "./types";

export function MapPinIcon(props: MapPinIconProps) {
  return (
    <SharedWrapper iconId="mappin" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, 0.05, 0]}>
          {/* Main Pin Balloon Ring */}
          <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.26, 0.14, 16, 64]} />
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

          {/* Pin Bottom Taper (Cone pointing down) */}
          <mesh position={[0, -0.16, 0]} rotation={[Math.PI, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.02, 0.24, 0.5, 32]} />
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

          {/* Base shadow/plate indicator (Dark ground ring) */}
          <mesh position={[0, -0.42, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.18, 0.03, 8, 32]} />
            <meshStandardMaterial
              roughness={0.6}
              color={props.theme === "dark" ? "#1e293b" : "#64748b"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

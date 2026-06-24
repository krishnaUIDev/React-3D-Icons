import { SharedWrapper } from "../SharedWrapper";
import { PlayIconProps } from "./types";

export function PlayIcon(props: PlayIconProps) {
  return (
    <SharedWrapper iconId="play" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Circular Frame Ring */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.68, 0.06, 16, 48]} />
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

          {/* Core Play Triangle */}
          <mesh position={[-0.08, 0, 0]} rotation={[Math.PI / 2, Math.PI / 2, 0]} castShadow>
            <coneGeometry args={[0.35, 0.56, 3]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={props.accentColor || "#10b981"}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Decorative Back Disk (Glass look inside the ring) */}
          <mesh position={[0, 0, -0.04]}>
            <cylinderGeometry args={[0.62, 0.62, 0.03, 32]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.1}
              transmission={0.8}
              thickness={0.4}
              color={props.accentColor || "#10b981"}
              opacity={0.3}
              transparent
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

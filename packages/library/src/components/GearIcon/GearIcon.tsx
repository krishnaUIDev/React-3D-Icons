import { SharedWrapper } from "../SharedWrapper";
import { GearIconProps } from "./types";

export function GearIcon(props: GearIconProps) {
  const toothCount = 8;
  const teeth = Array.from({ length: toothCount });
  const radius = 0.62;

  return (
    <SharedWrapper iconId="gear" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 4, 0, 0]}>
          {/* Central Gear Hub Body */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.6, 0.6, 0.22, 32]} />
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

          {/* Central Axle Hole (Simulated with a dark inset cylinder) */}
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.24, 16]} />
            <meshStandardMaterial
              roughness={0.8}
              metalness={0.2}
              color={props.theme === "dark" ? "#090d16" : "#cbd5e1"}
            />
          </mesh>

          {/* Radiating Gear Teeth */}
          {teeth.map((_, index) => {
            const angle = (index * (Math.PI * 2)) / toothCount;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            return (
              <mesh
                key={index}
                position={[x, 0, z]}
                rotation={[0, -angle, 0]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[0.16, 0.22, 0.18]} />
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
            );
          })}
        </group>
      )}
    </SharedWrapper>
  );
}

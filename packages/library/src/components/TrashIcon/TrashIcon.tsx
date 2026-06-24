import { SharedWrapper } from "../SharedWrapper";
import { TrashIconProps } from "./types";

export function TrashIcon(props: TrashIconProps) {
  const ribs = [0, 60, 120, 180, 240, 300];

  return (
    <SharedWrapper iconId="trash" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, -0.05, 0]}>
          {/* Main Tapered Trash Bin Body */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.38, 0.3, 0.65, 24]} />
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

          {/* Decorative Vertical Ribs */}
          {ribs.map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            // Place ribs on the outer surface of the cylinder
            const x = Math.sin(rad) * 0.36;
            const z = Math.cos(rad) * 0.36;
            return (
              <mesh key={i} position={[x, -0.1, z]} rotation={[0, -rad, 0]} castShadow>
                <boxGeometry args={[0.03, 0.63, 0.03]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>
            );
          })}

          {/* Bin Rim Ring */}
          <mesh position={[0, 0.22, 0]} castShadow>
            <torusGeometry args={[0.375, 0.025, 8, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>

          {/* Lid */}
          <mesh position={[0, 0.27, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.05, 24]} />
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

          {/* Lid Handle */}
          <mesh position={[0, 0.33, 0]} castShadow>
            <torusGeometry args={[0.07, 0.025, 8, 16, Math.PI]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

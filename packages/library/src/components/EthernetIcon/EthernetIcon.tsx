import { SharedWrapper } from "../SharedWrapper";
import { EthernetIconProps } from "./types";

export function EthernetIcon(props: EthernetIconProps) {
  return (
    <SharedWrapper iconId="ethernet" {...props}>
      {(mat) => (
        <group>
          {/* Angled to showcase plug pins and locking tab */}
          <group rotation={[Math.PI / 10, -Math.PI / 5, 0]}>
            {/* RJ45 Crystal Clear/Colored Plug Body */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.38, 0.28, 0.52]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Front gold-plated contact pins (8 small pins on front face) */}
            {Array.from({ length: 8 }).map((_, idx) => {
              const xOffset = -0.14 + idx * 0.04;
              return (
                <mesh key={idx} position={[xOffset, 0.08, 0.27]}>
                  <boxGeometry args={[0.02, 0.06, 0.06]} />
                  <meshStandardMaterial
                    roughness={0.2}
                    metalness={0.9}
                    color="#d4af37" // Always gold
                  />
                </mesh>
              );
            })}

            {/* Plastic Locking Tab Lever (on top face) */}
            <group position={[0, 0.16, -0.06]} rotation={[Math.PI / 10, 0, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.12, 0.04, 0.32]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  clearcoat={mat.clearcoat}
                  color={mat.color}
                  emissive={mat.emissive}
                />
              </mesh>
            </group>

            {/* Rubber Boot Strain Relief (Back part) */}
            <mesh position={[0, 0, -0.32]}>
              <boxGeometry args={[0.32, 0.24, 0.18]} />
              <meshStandardMaterial
                roughness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#64748b"}
              />
            </mesh>

            {/* Rounded Cable Extending Outwards (Back) */}
            <mesh position={[0, -0.06, -0.54]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.07, 0.07, 0.34, 12]} />
              <meshStandardMaterial
                roughness={0.9}
                color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

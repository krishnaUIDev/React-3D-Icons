import { SharedWrapper } from "../SharedWrapper";
import { UmbrellaIconProps } from "./types";

export function UmbrellaIcon(props: UmbrellaIconProps) {
  // Spoke tip coordinates at bottom edge of canopy (radius = 0.55)
  const canopyRadius = 0.55;
  const numSpokes = 8;
  const spokeTips = Array.from({ length: numSpokes }).map((_, i) => {
    const angle = (i * Math.PI * 2) / numSpokes;
    return {
      x: canopyRadius * Math.cos(angle),
      z: canopyRadius * Math.sin(angle)
    };
  });

  return (
    <SharedWrapper iconId="umbrella" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 10, -Math.PI / 12, 0.1]} position={[0, 0.05, 0]}>
          {/* Flipped Canopy Dome */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0]} rotation={[Math.PI, 0, 0]}>
            <sphereGeometry args={[canopyRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.42]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Spoke Tips (Beads at the edge of the canopy) */}
          {spokeTips.map((tip, idx) => (
            <mesh
              key={`tip-${idx}`}
              position={[tip.x, 0.15 - canopyRadius * Math.sin(Math.PI * 0.08), tip.z]}
              castShadow
            >
              <sphereGeometry args={[0.022, 12, 12]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.accentColor || "#ec4899"}
              />
            </mesh>
          ))}

          {/* Central Stem (Shaft) */}
          <mesh castShadow position={[0, -0.22, 0]}>
            <cylinderGeometry args={[0.022, 0.022, 0.85, 16]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#4b5563"}
            />
          </mesh>

          {/* Top Crown Tip */}
          <mesh castShadow position={[0, 0.72, 0]}>
            <coneGeometry args={[0.045, 0.14, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* J-Hook Handle (Semicircle Torus at the bottom) */}
          <mesh castShadow position={[-0.08, -0.645, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.08, 0.022, 8, 24, Math.PI]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#4b5563"}
            />
          </mesh>

          {/* Handle Grip Cap */}
          <mesh position={[-0.16, -0.62, 0]} castShadow>
            <sphereGeometry args={[0.03, 12, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

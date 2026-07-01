import { SharedWrapper } from "../SharedWrapper";
import { DNAIconProps } from "./types";

export function DNAIcon(props: DNAIconProps) {
  // Define 7 vertical base pair levels
  const levels = [-0.24, -0.16, -0.08, 0, 0.08, 0.16, 0.24];
  // Helical winding coefficient (turns per unit Y height)
  const winding = 4.5;

  return (
    <SharedWrapper iconId="dna" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 6, 0.45]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Central Helical Structure */}
          {levels.map((y, index) => {
            const angle = y * winding;
            const radius = 0.14;
            const leftX = Math.cos(angle) * radius;
            const leftZ = Math.sin(angle) * radius;
            const rightX = -Math.cos(angle) * radius;
            const rightZ = -Math.sin(angle) * radius;

            return (
              <group key={index}>
                {/* Horizontal Base Pair Connector Bar */}
                <mesh position={[(leftX + rightX) / 2, y, (leftZ + rightZ) / 2]} rotation={[0, -angle, Math.PI / 2]} castShadow>
                  <cylinderGeometry args={[0.008, 0.008, radius * 2, 8]} />
                  <meshStandardMaterial
                    color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissiveIntensity={1.2}
                  />
                </mesh>

                {/* Left Winding Strand Sphere (Primary Preset Color) */}
                <mesh position={[leftX, y, leftZ]} castShadow>
                  <sphereGeometry args={[0.038, 12, 12]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    clearcoat={mat.clearcoat}
                    color={mat.color}
                  />
                </mesh>

                {/* Right Winding Strand Sphere (Secondary Slate/Blue Color) */}
                <mesh position={[rightX, y, rightZ]} castShadow>
                  <sphereGeometry args={[0.038, 12, 12]} />
                  <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
                </mesh>
              </group>
            );
          })}

        </group>
      )}
    </SharedWrapper>
  );
}

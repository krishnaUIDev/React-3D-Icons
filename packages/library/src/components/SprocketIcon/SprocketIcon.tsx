import { SharedWrapper } from "../SharedWrapper";
import { SprocketIconProps } from "./types";

export function SprocketIcon(props: SprocketIconProps) {
  const toothCount = 14;
  const radius = 0.28;

  return (
    <SharedWrapper iconId="sprocket" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Main Sprocket Disk Wheel */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.26, 0.26, 0.04, 32]} />
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

          {/* Central Bore Shaft Hole (Chrome border ring) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Glowing Concentric Track Ring (Glowing Accent) */}
          <mesh position={[0, 0, 0.021]} castShadow>
            <torusGeometry args={[0.16, 0.012, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Individual Pointy/Beveled Sprocket Teeth */}
          <group>
            {Array.from({ length: toothCount }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / toothCount;
              const xPos = radius * Math.cos(angle);
              const yPos = radius * Math.sin(angle);
              return (
                <mesh
                  key={index}
                  position={[xPos, yPos, 0]}
                  rotation={[0, 0, angle + Math.PI / 2]}
                  castShadow
                >
                  <coneGeometry args={[0.038, 0.07, 4]} />
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
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

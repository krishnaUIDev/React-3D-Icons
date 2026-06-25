import { SharedWrapper } from "../SharedWrapper";
import { BearingIconProps } from "./types";

export function BearingIcon(props: BearingIconProps) {
  const ballCount = 8;
  const radius = 0.22;

  return (
    <SharedWrapper iconId="bearing" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0.05]} position={[0, 0, 0]}>
          
          {/* Outer Bearing Ring (Thick boundary collar) */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.31, 0.038, 8, 48]} />
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

          {/* Inner Bearing Ring (Concentric central collar - Glowing Accent) */}
          <mesh castShadow position={[0, 0, 0]}>
            <torusGeometry args={[0.13, 0.026, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Central Mount Shaft Hole (Metal sleeve) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.104, 0.104, 0.08, 24]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Steel Balls Array (Nested in the track channel) */}
          <group>
            {Array.from({ length: ballCount }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / ballCount;
              const xPos = radius * Math.cos(angle);
              const yPos = radius * Math.sin(angle);
              return (
                <mesh key={index} position={[xPos, yPos, 0]} castShadow>
                  <sphereGeometry args={[0.046, 16, 16]} />
                  <meshStandardMaterial
                    roughness={0.05}
                    metalness={0.95}
                    color={props.theme === "dark" ? "#f1f5f9" : "#cbd5e1"}
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

import { SharedWrapper } from "../SharedWrapper";
import { PropellerIconProps } from "./types";

export function PropellerIcon(props: PropellerIconProps) {
  const bladeCount = 3;

  return (
    <SharedWrapper iconId="propeller" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Rear Drive Shaft Adapter (Steel sleeve) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.1]} castShadow>
            <cylinderGeometry args={[0.046, 0.046, 0.16, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Central Propeller Spinner Hub (Bulbous nose cone) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.08, 0.12, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Spherical Glowing Accent Nose Cap */}
          <mesh position={[0, 0, 0.06]} castShadow>
            <sphereGeometry args={[0.07, 24, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* 3 Twisted Propeller Blades */}
          <group>
            {Array.from({ length: bladeCount }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / bladeCount;
              return (
                <group key={index} rotation={[0, 0, angle]}>
                  {/* Blade assembly: rotated outward and pitched */}
                  <mesh
                    position={[0, 0.18, 0]}
                    rotation={[-0.4, 0, 0]} // Twisted pitch angle
                    castShadow
                  >
                    <boxGeometry args={[0.13, 0.24, 0.016]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      clearcoat={mat.clearcoat}
                      clearcoatRoughness={mat.clearcoatRoughness}
                      ior={mat.ior}
                      color={mat.color}
                    />
                  </mesh>
                  {/* Blade reinforce spine (accent colored root support) */}
                  <mesh
                    position={[0, 0.09, -0.01]}
                    rotation={[0, 0, 0]}
                    castShadow
                  >
                    <boxGeometry args={[0.038, 0.08, 0.012]} />
                    <meshStandardMaterial
                      color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissiveIntensity={0.5}
                    />
                  </mesh>
                </group>
              );
            })}
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

import { SharedWrapper } from "../SharedWrapper";
import { OrchidIconProps } from "./types";

export function OrchidIcon(props: OrchidIconProps) {
  return (
    <SharedWrapper iconId="orchid" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.15, 0]} position={[0, -0.01, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* 3 Outer Sepals (120 deg apart) */}
          <group position={[0, 0, 0]}>
            {Array.from({ length: 3 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 3;
              return (
                <group key={i} rotation={[0, 0, angle]}>
                  <mesh position={[0, 0.11, -0.01]} scale={[0.8, 1.6, 0.1]} castShadow>
                    <sphereGeometry args={[0.07, 16, 16]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      color={mat.color}
                    />
                  </mesh>
                </group>
              );
            })}
          </group>

          {/* 2 Lateral Petals (flared to the sides, slightly forward) */}
          <group position={[0, 0, 0.01]}>
            {/* Left lateral petal */}
            <mesh position={[-0.09, 0.04, 0]} rotation={[0.1, -0.2, 0.8]} scale={[1.4, 1.1, 0.12]} castShadow>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right lateral petal */}
            <mesh position={[0.09, 0.04, 0]} rotation={[0.1, 0.2, -0.8]} scale={[1.4, 1.1, 0.12]} castShadow>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Lower Lip (labellum) - scoop/hood shape */}
          <mesh position={[0, -0.06, 0.025]} scale={[1.2, 1.1, 0.7]} rotation={[0.3, 0, 0]} castShadow>
            <sphereGeometry args={[0.05, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
            <meshPhysicalMaterial
              roughness={mat.roughness + 0.1}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Center Column / Pistil component */}
          <mesh position={[0, -0.01, 0.02]} scale={[0.5, 1, 0.5]} rotation={[0.2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.015, 0.06, 10]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color={mat.color} />
          </mesh>

          {/* Glowing Center Core Node */}
          <mesh position={[0, -0.012, 0.036]} castShadow>
            <sphereGeometry args={[0.02, 12, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

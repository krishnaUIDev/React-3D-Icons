import { SharedWrapper } from "../SharedWrapper";
import { LilyIconProps } from "./types";

export function LilyIcon(props: LilyIconProps) {
  return (
    <SharedWrapper iconId="lily" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0]} position={[0, -0.04, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Green Calyx / Stem base */}
          <group position={[0, -0.12, 0.01]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.012, 0.014, 0.15, 8]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
            </mesh>
          </group>

          {/* Calyx bell shape */}
          <mesh position={[0, -0.06, 0.015]} rotation={[0.15, 0, 0]} castShadow>
            <cylinderGeometry args={[0.038, 0.014, 0.08, 10]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#15803d" />
          </mesh>

          {/* 6 Recurved Petals forming a trumpet/bell */}
          <group position={[0, 0, 0.02]}>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * Math.PI) / 3;
              return (
                <group key={i} rotation={[0.05, 0, angle]}>
                  {/* Flared outward petal */}
                  <mesh position={[0, 0.09, 0.04]} rotation={[0.45, 0, 0]} scale={[1.1, 1.8, 0.12]} castShadow>
                    <sphereGeometry args={[0.075, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
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

          {/* Central Pistil Style (Long green center cylinder) */}
          <group position={[0, 0, 0.03]} rotation={[0.15, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.007, 0.007, 0.18, 8]} />
              <meshStandardMaterial color="#16a34a" />
            </mesh>
            <mesh position={[0, 0.09, 0]} castShadow>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshStandardMaterial color="#14532d" />
            </mesh>
          </group>

          {/* Central Stamens with Glowing Anthers */}
          <group position={[0, -0.02, 0.03]}>
            {Array.from({ length: 5 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 5;
              return (
                <group key={i} rotation={[0.2, 0, angle]}>
                  {/* Filament */}
                  <mesh position={[0, 0.08, 0.01]} castShadow>
                    <cylinderGeometry args={[0.004, 0.004, 0.15, 6]} />
                    <meshStandardMaterial color="#bbf7d0" />
                  </mesh>
                  {/* Glowing Anther Tip */}
                  <mesh position={[0, 0.15, 0.025]} rotation={[0.2, 0, Math.PI / 2]} scale={[2, 1, 1]} castShadow>
                    <sphereGeometry args={[0.008, 8, 8]} />
                    <meshStandardMaterial
                      color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissiveIntensity={1.4}
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

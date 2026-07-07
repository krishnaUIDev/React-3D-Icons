import { SharedWrapper } from "../SharedWrapper";
import { LavenderIconProps } from "./types";

export function LavenderIcon(props: LavenderIconProps) {
  return (
    <SharedWrapper iconId="lavender" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.1, 0.05]} position={[0, -0.02, 0]} scale={[1.5, 1.5, 1.5]}>
          {/* Main Stem */}
          <mesh position={[0, -0.08, 0]} castShadow>
            <cylinderGeometry args={[0.008, 0.011, 0.3, 8]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Small leaves branching off lower stem */}
          <group position={[0, -0.14, 0]}>
            <mesh position={[-0.026, 0, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
              <boxGeometry args={[0.05, 0.006, 0.012]} />
              <meshStandardMaterial roughness={0.6} color="#15803d" />
            </mesh>
            <mesh position={[0.026, 0.02, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <boxGeometry args={[0.05, 0.006, 0.012]} />
              <meshStandardMaterial roughness={0.6} color="#15803d" />
            </mesh>
          </group>

          {/* Stacked tiers of flower pod clusters */}
          <group position={[0, 0.06, 0]}>
            {Array.from({ length: 6 }).map((_, tierIdx) => {
              const yPos = tierIdx * 0.042 - 0.1;
              const scaleFactor = 1.0 - tierIdx * 0.12; // buds taper at the top
              return (
                <group
                  key={tierIdx}
                  position={[0, yPos, 0]}
                  scale={[scaleFactor, scaleFactor, scaleFactor]}
                >
                  {/* Circular pods in this tier */}
                  {Array.from({ length: 6 }).map((_, podIdx) => {
                    const angle = (podIdx * Math.PI) / 3;
                    const radius = 0.022;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;
                    return (
                      <mesh
                        key={podIdx}
                        position={[x, 0, z]}
                        rotation={[0.3, 0, angle]}
                        scale={[0.7, 1.4, 0.7]}
                        castShadow
                      >
                        <sphereGeometry args={[0.014, 8, 8]} />
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

                  {/* Central glowing core node in each tier */}
                  <mesh position={[0, 0.006, 0]} castShadow>
                    <sphereGeometry args={[0.009, 8, 8]} />
                    <meshStandardMaterial
                      color={
                        mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                      }
                      emissive={
                        mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                      }
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

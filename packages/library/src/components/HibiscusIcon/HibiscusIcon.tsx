import { SharedWrapper } from "../SharedWrapper";
import { HibiscusIconProps } from "./types";

export function HibiscusIcon(props: HibiscusIconProps) {
  return (
    <SharedWrapper iconId="hibiscus" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.1, 0]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* 5 Flared petals arranged in a circle */}
          <group position={[0, 0, 0]}>
            {Array.from({ length: 5 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 5;
              return (
                <group key={i} rotation={[0, 0, angle]}>
                  {/* Flared and tilted petal */}
                  <mesh position={[0, 0.1, 0.02]} rotation={[0.4, 0, 0]} scale={[1.3, 1.8, 0.15]} castShadow>
                    <sphereGeometry args={[0.08, 16, 16]} />
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

          {/* Central protruding style/pistil tube */}
          <group rotation={[0.3, 0, 0]} position={[0, 0.02, 0.04]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.01, 0.008, 0.2, 8]} />
              <meshPhysicalMaterial roughness={0.4} metalness={0.1} color={mat.color} />
            </mesh>

            {/* Glowing Pollen Tips (Anthers) at the top of style */}
            <group position={[0, 0.1, 0]}>
              {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i * Math.PI * 2) / 5;
                const x = Math.cos(angle) * 0.022;
                const z = Math.sin(angle) * 0.022;
                return (
                  <mesh key={i} position={[x, 0.01, z]} castShadow>
                    <sphereGeometry args={[0.009, 8, 8]} />
                    <meshStandardMaterial
                      color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissiveIntensity={1.4}
                    />
                  </mesh>
                );
              })}
            </group>
          </group>

          {/* Calyx (green sepals at base) */}
          <mesh position={[0, 0, -0.01]} scale={[1, 1, 0.5]} castShadow>
            <cylinderGeometry args={[0.035, 0.015, 0.04, 10]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

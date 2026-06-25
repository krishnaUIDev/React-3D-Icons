import { SharedWrapper } from "../SharedWrapper";
import { DaisyIconProps } from "./types";

export function DaisyIcon(props: DaisyIconProps) {
  return (
    <SharedWrapper iconId="daisy" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.1, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Circular array of white capsule petals */}
          <group position={[0, 0, 0]}>
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * Math.PI) / 8;
              return (
                <mesh key={i} rotation={[0, 0, angle]} castShadow>
                  <cylinderGeometry args={[0.012, 0.012, 0.36, 8]} />
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

          {/* Central Yellow Button disc (front face) */}
          <mesh position={[0, 0, 0.008]} scale={[1, 1, 0.4]} castShadow>
            <sphereGeometry args={[0.076, 24, 16]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#f59e0b" />
          </mesh>

          {/* Glowing Center Ring/Core Indicator */}
          <mesh position={[0, 0, 0.018]} scale={[1, 1, 0.2]} castShadow>
            <sphereGeometry args={[0.046, 12, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

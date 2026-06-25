import { SharedWrapper } from "../SharedWrapper";
import { LotusIconProps } from "./types";

export function LotusIcon(props: LotusIconProps) {
  return (
    <SharedWrapper iconId="lotus" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 6, 0]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Flat Green Lotus Water Leaf Pad */}
          <mesh position={[0, -0.07, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.22, 0.22, 0.016, 24]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Leaf Pad V-notch cutout detail */}
          <mesh position={[0, -0.07, 0.2]} rotation={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.08, 0.024, 0.08]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#15803d" />
          </mesh>

          {/* Symmetrical blooming petals array */}
          <group position={[0, -0.06, 0]}>
            {/* Outer Petals Layer (8 petals rotated in a circle) */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * Math.PI) / 4;
              return (
                <mesh key={i} position={[Math.sin(angle) * 0.06, 0.04, Math.cos(angle) * 0.06]} rotation={[0.4, angle, 0]} castShadow scale={[1, 1.2, 0.5]}>
                  <sphereGeometry args={[0.07, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

            {/* Inner Petals Layer (Tighter, 6 petals) */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * Math.PI) / 3;
              return (
                <mesh key={i} position={[Math.sin(angle) * 0.03, 0.08, Math.cos(angle) * 0.03]} rotation={[0.2, angle, 0]} castShadow scale={[0.8, 1.2, 0.4]}>
                  <sphereGeometry args={[0.06, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    color={mat.color}
                    emissive={mat.emissive}
                    emissiveIntensity={mat.emissiveIntensity * 0.4}
                  />
                </mesh>
              );
            })}

            {/* Central Glowing Seed Pod Core */}
            <mesh position={[0, 0.09, 0]} castShadow>
              <sphereGeometry args={[0.024, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

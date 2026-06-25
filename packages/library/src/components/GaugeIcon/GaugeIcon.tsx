import { SharedWrapper } from "../SharedWrapper";
import { GaugeIconProps } from "./types";

export function GaugeIcon(props: GaugeIconProps) {
  return (
    <SharedWrapper iconId="gauge" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, 0, 0]}>
          
          {/* Base Dial Cylinder */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.85, 0.85, 0.14, 32]} />
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

          {/* Outer highlight rim */}
          <mesh castShadow position={[0, 0, 0.08]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.86, 0.04, 8, 48]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
            />
          </mesh>

          {/* Tick marks around the gauge face */}
          <group position={[0, 0, 0.08]}>
            {[-1.2, -0.6, 0, 0.6, 1.2].map((angle, i) => (
              <group key={i} rotation={[0, 0, angle]}>
                <mesh position={[0, 0.68, 0]}>
                  <boxGeometry args={[0.03, 0.12, 0.02]} />
                  <meshStandardMaterial
                    color={props.theme === "dark" ? "#64748b" : "#94a3b8"}
                  />
                </mesh>
              </group>
            ))}
          </group>

          {/* Central needle pointer system */}
          <group position={[0, 0, 0.08]} rotation={[0, 0, -Math.PI / 4]}>
            {/* Center Cap */}
            <mesh castShadow position={[0, 0, 0.02]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#0f172a" : "#f1f5f9"}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>

            {/* Glowing needle pointer arm */}
            <mesh castShadow position={[0, 0.3, 0.01]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.04, 0.6, 0.02]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

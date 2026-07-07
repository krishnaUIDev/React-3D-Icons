import { SharedWrapper } from "../SharedWrapper";
import { ThermostatIconProps } from "./types";

export function ThermostatIcon(props: ThermostatIconProps) {
  const tickCount = 24;

  return (
    <SharedWrapper iconId="thermostat" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          {/* Main Thermostat Wall Backplate */}
          <mesh position={[0, 0, -0.04]} castShadow>
            <cylinderGeometry args={[0.22, 0.22, 0.02, 32]} />
            <meshStandardMaterial roughness={0.3} metalness={0.6} color="#cbd5e1" />
          </mesh>

          {/* Heavy Rotating Dial Ring */}
          <mesh castShadow receiveShadow position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.188, 0.188, 0.08, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Front Black Glossy Screen Display Panel */}
          <mesh position={[0, 0, 0.052]} castShadow>
            <cylinderGeometry args={[0.154, 0.154, 0.008, 32]} />
            <meshStandardMaterial roughness={0.08} metalness={0.9} color="#0f172a" />
          </mesh>

          {/* Inset Glowing Accent Temperature Scale (Concentric outer status scale ring) */}
          <mesh position={[0, 0, 0.057]} castShadow>
            <torusGeometry args={[0.134, 0.006, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Outer dial ticks details */}
          {Array.from({ length: tickCount }).map((_, idx) => {
            const angle = (idx * 2 * Math.PI) / tickCount;
            // Leave a gap at the bottom for standard thermostat look
            if (idx > 4 && idx < 20) {
              return (
                <mesh key={idx} position={[0, 0, 0.056]} rotation={[0, 0, angle]} castShadow>
                  <mesh position={[0, 0.144, 0]}>
                    <boxGeometry args={[0.005, 0.016, 0.002]} />
                    <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
                  </mesh>
                </mesh>
              );
            }
            return null;
          })}

          {/* Simplified Digital Number Readout (e.g., Temperature "72" - modeled abstractly with glowing boxes) */}
          <group position={[0, 0, 0.058]}>
            {/* Digit "7" */}
            <group position={[-0.03, 0.01, 0]}>
              <mesh position={[0, 0.024, 0]} castShadow>
                <boxGeometry args={[0.038, 0.008, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              <mesh position={[0.01, -0.002, 0]} rotation={[0, 0, -0.24]} castShadow>
                <boxGeometry args={[0.008, 0.046, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
            </group>

            {/* Digit "2" */}
            <group position={[0.03, 0.01, 0]}>
              {/* Top horizontal segment */}
              <mesh position={[0, 0.024, 0]} castShadow>
                <boxGeometry args={[0.034, 0.008, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              {/* Top-right vertical segment */}
              <mesh position={[0.013, 0.012, 0]} castShadow>
                <boxGeometry args={[0.008, 0.018, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              {/* Middle horizontal segment */}
              <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[0.034, 0.008, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              {/* Bottom-left vertical segment */}
              <mesh position={[-0.013, -0.012, 0]} castShadow>
                <boxGeometry args={[0.008, 0.018, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              {/* Bottom horizontal segment */}
              <mesh position={[0, -0.024, 0]} castShadow>
                <boxGeometry args={[0.034, 0.008, 0.003]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
            </group>

            {/* Small Degree Circle Symbol "°" */}
            <mesh position={[0.076, 0.038, 0]} castShadow>
              <torusGeometry args={[0.01, 0.004, 6, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.0}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

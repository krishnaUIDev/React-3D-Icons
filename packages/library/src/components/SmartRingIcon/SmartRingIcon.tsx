import { SharedWrapper } from "../SharedWrapper";
import { SmartRingIconProps } from "./types";

export function SmartRingIcon(props: SmartRingIconProps) {
  const sensorCount = 3;

  return (
    <SharedWrapper iconId="smartring" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.3, 0.15]} position={[0, 0, 0]}>
          {/* Main Ring Outer Band (High Gloss Metal/Glassmorphism) */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.22, 0.046, 12, 48]} />
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

          {/* Central Inside Sleeve (Polished titanium inner face) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.076, 32]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Exterior Smart Accent Sensor Ring (Glowing stripe around outer crown) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.002]} castShadow>
            <torusGeometry args={[0.264, 0.008, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Internal Infrared Health Biosensors (Three small glowing nodes on the inside face) */}
          <group>
            {Array.from({ length: sensorCount }).map((_, idx) => {
              const angle = (idx * 2 * Math.PI) / sensorCount;
              const xPos = 0.174 * Math.cos(angle);
              const yPos = 0.174 * Math.sin(angle);
              return (
                <mesh key={idx} position={[xPos, yPos, 0]} castShadow>
                  <sphereGeometry args={[0.012, 8, 8]} />
                  <meshStandardMaterial
                    color={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                    }
                    emissive={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                    }
                    emissiveIntensity={1.5}
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

import { SharedWrapper } from "../SharedWrapper";
import { SmartBulbIconProps } from "./types";

export function SmartBulbIcon(props: SmartBulbIconProps) {
  const threads = 3;

  return (
    <SharedWrapper iconId="smartbulb" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Bottom Screw Contact Pin (brass button at base) */}
          <mesh position={[0, -0.24, 0]} castShadow>
            <cylinderGeometry args={[0.026, 0.026, 0.016, 12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.9} color="#d97706" />
          </mesh>

          {/* Metal Screw Base Threading (Concentric stacked rings) */}
          <group position={[0, -0.19, 0]}>
            {Array.from({ length: threads }).map((_, idx) => (
              <mesh key={idx} position={[0, idx * 0.024, 0]} castShadow>
                <cylinderGeometry args={[0.052, 0.052, 0.02, 16]} />
                <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
              </mesh>
            ))}
          </group>

          {/* Ceramic/Plastic Insulator Collar (Middle transition neck) */}
          <mesh position={[0, -0.09, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.054, 0.08, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.1} color="#cbd5e1" />
          </mesh>

          {/* Smart Ring / Wi-Fi band (Glowing Accent) */}
          <mesh position={[0, -0.04, 0]} castShadow>
            <cylinderGeometry args={[0.088, 0.088, 0.018, 24]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Bulbar LED Housing (Heatsink ring base) */}
          <mesh position={[0, -0.01, 0]} castShadow>
            <cylinderGeometry args={[0.106, 0.094, 0.04, 24]} />
            <meshStandardMaterial roughness={0.25} metalness={0.1} color="#cbd5e1" />
          </mesh>

          {/* Glass Bulb Globe (Semi-transparent / Emissive sphere) */}
          <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness * 0.5}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              ior={mat.ior}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.8}
            />
          </mesh>

          {/* Glowing Inner LED COB Tower (Accent Core visible inside bulb) */}
          {mat.transmission > 0 && (
            <group position={[0, 0.08, 0]}>
              <mesh castShadow>
                <cylinderGeometry args={[0.02, 0.02, 0.06, 12]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.5}
                />
              </mesh>
              <mesh position={[0, 0.032, 0]} castShadow>
                <sphereGeometry args={[0.024, 12, 12]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.5}
                />
              </mesh>
            </group>
          )}
        </group>
      )}
    </SharedWrapper>
  );
}

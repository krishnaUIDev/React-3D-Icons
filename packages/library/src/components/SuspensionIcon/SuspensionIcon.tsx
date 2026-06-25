import { SharedWrapper } from "../SharedWrapper";
import { SuspensionIconProps } from "./types";

export function SuspensionIcon(props: SuspensionIconProps) {
  const springCoils = 6;

  return (
    <SharedWrapper iconId="suspension" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Upper Double Wishbone Control Arm (V-shaped arm structure) */}
          <group position={[0, 0.08, 0]}>
            {/* Left pivot sleeve */}
            <mesh position={[-0.14, 0, -0.06]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.04, 12]} />
              <meshStandardMaterial roughness={0.25} metalness={0.7} color="#475569" />
            </mesh>
            {/* Right pivot sleeve */}
            <mesh position={[0.14, 0, -0.06]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.04, 12]} />
              <meshStandardMaterial roughness={0.25} metalness={0.7} color="#475569" />
            </mesh>
            {/* Left arm member */}
            <mesh position={[-0.07, 0.01, 0.01]} rotation={[0, -0.6, 0]} castShadow>
              <boxGeometry args={[0.18, 0.016, 0.024]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right arm member */}
            <mesh position={[0.07, 0.01, 0.01]} rotation={[0, 0.6, 0]} castShadow>
              <boxGeometry args={[0.18, 0.016, 0.024]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Joint cap (Apex of wishbone) */}
            <mesh position={[0, 0.01, 0.08]} castShadow>
              <sphereGeometry args={[0.022, 12, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Central Coilover Shock Absorber Strut */}
          <group position={[0, -0.04, 0]}>
            {/* Lower mount eyelet */}
            <mesh position={[0, -0.16, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <torusGeometry args={[0.024, 0.008, 8, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Lower strut cylinder shaft */}
            <mesh position={[0, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.12, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Upper shock damper body (reservoir canister) */}
            <mesh position={[0, 0.04, 0]} castShadow>
              <cylinderGeometry args={[0.034, 0.034, 0.16, 16]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
            </mesh>
            {/* Top mounting collar (Glowing Accent) */}
            <mesh position={[0, 0.12, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.016, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Helical Suspension Coil Spring */}
            <group position={[0, -0.03, 0]}>
              {Array.from({ length: springCoils }).map((_, index) => {
                const zOffset = (index - springCoils / 2) * 0.036;
                return (
                  <mesh
                    key={index}
                    position={[0, zOffset, 0]}
                    rotation={[0.16, 0, 0]} // Slight tilt to simulate helical spiral helix path
                    castShadow
                  >
                    <torusGeometry args={[0.048, 0.01, 8, 24]} />
                    <meshStandardMaterial
                      color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissiveIntensity={1.0}
                    />
                  </mesh>
                );
              })}
            </group>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

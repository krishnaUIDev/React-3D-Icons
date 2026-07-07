import { SharedWrapper } from "../SharedWrapper";
import { HydraulicJackIconProps } from "./types";

export function HydraulicJackIcon(props: HydraulicJackIconProps) {
  return (
    <SharedWrapper iconId="hydraulicjack" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Heavy Rectangular Base Plate */}
          <mesh castShadow position={[0, -0.22, 0]}>
            <boxGeometry args={[0.24, 0.04, 0.2]} />
            <meshStandardMaterial roughness={0.4} metalness={0.6} color="#334155" />
          </mesh>

          {/* Main Hydraulic Oil Reservoir Cylinder (Bottle) */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.076, 0.076, 0.28, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Base Collar Ring (Glowing Accent) */}
          <mesh position={[0, -0.19, 0]} castShadow>
            <cylinderGeometry args={[0.082, 0.082, 0.02, 24]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Top Reservoir Cap Gland */}
          <mesh position={[0, 0.09, 0]} castShadow>
            <cylinderGeometry args={[0.064, 0.07, 0.03, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
          </mesh>

          {/* Extensible Steel Ram Piston (Telescoping rod) */}
          <mesh position={[0, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.16, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Top Contact Saddle (Grooved cap) */}
          <mesh position={[0, 0.245, 0]} castShadow>
            <cylinderGeometry args={[0.046, 0.046, 0.016, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#475569" />
          </mesh>

          {/* Side Manual Pump Cylinder Unit */}
          <group position={[0.078, -0.08, 0.06]}>
            {/* Pump cylinder sleeve */}
            <mesh castShadow>
              <cylinderGeometry args={[0.026, 0.026, 0.18, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
            </mesh>
            {/* Pump piston rod */}
            <mesh position={[0, 0.08, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.08, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
            </mesh>
            {/* Socket link arm (Hinged bracket) */}
            <mesh position={[0, 0.12, 0.016]} rotation={[0.4, 0, 0]} castShadow>
              <boxGeometry args={[0.016, 0.02, 0.068]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Handle socket sleeve (horizontal receiver) */}
            <mesh position={[0, 0.12, 0.046]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.014, 0.014, 0.06, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Base Release Valve Screw Knob */}
          <mesh position={[-0.07, -0.18, 0.07]} rotation={[Math.PI / 2, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.022, 0.022, 0.014, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

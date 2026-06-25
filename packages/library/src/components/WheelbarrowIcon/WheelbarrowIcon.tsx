import { SharedWrapper } from "../SharedWrapper";
import { WheelbarrowIconProps } from "./types";

export function WheelbarrowIcon(props: WheelbarrowIconProps) {
  return (
    <SharedWrapper iconId="wheelbarrow" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 4, 0.05]} position={[0, -0.05, 0]}>
          {/* Main Container Tray Block */}
          <mesh position={[0, 0.1, -0.02]} rotation={[-0.1, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.34, 0.14, 0.32]} />
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

          {/* Glowing/Accent Tray Rim Frame */}
          <mesh position={[0, 0.17, -0.02]} rotation={[-0.1, 0, 0]} castShadow>
            <boxGeometry args={[0.36, 0.02, 0.34]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Dual Frame Pipes underneath handles */}
          <group position={[0, 0, 0]}>
            {/* Left Handle Pipe */}
            <mesh position={[-0.1, 0.02, 0.02]} rotation={[0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.6, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
            </mesh>
            {/* Right Handle Pipe */}
            <mesh position={[0.1, 0.02, 0.02]} rotation={[0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.6, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
            </mesh>
            
            {/* Left Handle Grip */}
            <mesh position={[-0.1, -0.06, 0.28]} rotation={[0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.1, 12]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Right Handle Grip */}
            <mesh position={[0.1, -0.06, 0.28]} rotation={[0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.1, 12]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
          </group>

          {/* Front Wheel Assembly */}
          <group position={[0, -0.15, -0.22]}>
            {/* Axle bar */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.24, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Center Rubber Wheel */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Metal rim core */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.045, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Support Legs (Stand struts) */}
          <group position={[0, -0.06, 0.12]}>
            {/* Left Leg */}
            <mesh position={[-0.1, -0.06, 0]} rotation={[0, 0, 0.1]} castShadow>
              <boxGeometry args={[0.016, 0.16, 0.03]} />
              <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
            </mesh>
            {/* Right Leg */}
            <mesh position={[0.1, -0.06, 0]} rotation={[0, 0, -0.1]} castShadow>
              <boxGeometry args={[0.016, 0.16, 0.03]} />
              <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
            </mesh>
            {/* Leg braces */}
            <mesh position={[0, -0.03, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.2, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.7} color="#334155" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

import { SharedWrapper } from "../SharedWrapper";
import { TapeMeasureIconProps } from "./types";

export function TapeMeasureIcon(props: TapeMeasureIconProps) {
  return (
    <SharedWrapper iconId="tapemeasure" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Tape Measure Outer Case */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.48, 0.48, 0.26]} />
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

          {/* Rubberized Corner Bumpers (Protection cladding) */}
          <group>
            {/* Top Bumper */}
            <mesh position={[0, 0.23, 0]} castShadow>
              <boxGeometry args={[0.34, 0.04, 0.28]} />
              <meshStandardMaterial roughness={0.7} metalness={0.2} color="#1e293b" />
            </mesh>
            {/* Left Bumper */}
            <mesh position={[-0.23, 0, 0]} castShadow>
              <boxGeometry args={[0.04, 0.34, 0.28]} />
              <meshStandardMaterial roughness={0.7} metalness={0.2} color="#1e293b" />
            </mesh>
          </group>

          {/* Extended Yellow Steel Tape Blade (Extends down-right) */}
          <group position={[0.22, -0.2, 0.05]}>
            {/* Metal Tape strip */}
            <mesh castShadow position={[0.16, 0.02, 0]} rotation={[0, 0, -0.05]}>
              <boxGeometry args={[0.32, 0.015, 0.12]} />
              <meshStandardMaterial
                color="#facc15" // Yellow steel tape
                roughness={0.1}
                metalness={0.7}
              />
            </mesh>
            {/* Red Tick Marks on Tape (Simulating measurements) */}
            <mesh position={[0.1, 0.03, 0.04]} rotation={[0, 0, -0.05]}>
              <boxGeometry args={[0.01, 0.005, 0.03]} />
              <meshBasicMaterial color="#ef4444" />
            </mesh>
            <mesh position={[0.2, 0.03, 0.04]} rotation={[0, 0, -0.05]}>
              <boxGeometry args={[0.01, 0.005, 0.03]} />
              <meshBasicMaterial color="#ef4444" />
            </mesh>

            {/* L-shaped Steel Tape Hook tip */}
            <mesh position={[0.32, -0.02, 0]} castShadow>
              <boxGeometry args={[0.012, 0.06, 0.14]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Front Chrome Logo Plate/Circle */}
          <mesh position={[0, 0, 0.134]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.15, 0.01, 32]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#94a3b8" : "#475569"}
            />
          </mesh>

          {/* Locking Slide Switch button (Glowing Accent) */}
          <mesh position={[0.12, 0.18, 0.13]} castShadow>
            <boxGeometry args={[0.06, 0.12, 0.05]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Carrying Hand Strap Loop */}
          <mesh position={[-0.24, -0.16, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#475569" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

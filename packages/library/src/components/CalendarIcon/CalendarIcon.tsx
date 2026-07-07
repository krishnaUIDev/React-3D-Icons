import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CalendarIconProps } from "./types";

export function CalendarIcon(props: CalendarIconProps) {
  // 3x3 day grid offsets
  const dayOffsets = [-0.3, 0, 0.3];
  const rowOffsets = [0.08, -0.18, -0.44];

  return (
    <SharedWrapper iconId="calendar" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Main Calendar Backing Board */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.2, 1.2, 0.16]} radius={0.12} smoothness={8}>
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
            </RoundedBox>
          </mesh>

          {/* Header Band (Red Accent) */}
          <mesh position={[0, 0.44, 0.02]} castShadow>
            <RoundedBox args={[1.2, 0.32, 0.18]} radius={0.06} smoothness={4}>
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.1}
                color="#ef4444" // Crimson red header
              />
            </RoundedBox>
          </mesh>

          {/* Left Binder Hook/Ring */}
          <mesh position={[-0.32, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.1, 0.028, 8, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#e2e8f0" />
          </mesh>

          {/* Right Binder Hook/Ring */}
          <mesh position={[0.32, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.1, 0.028, 8, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#e2e8f0" />
          </mesh>

          {/* Day Grid Squares */}
          {rowOffsets.map((y, rowIdx) =>
            dayOffsets.map((x, colIdx) => (
              <mesh key={`${rowIdx}-${colIdx}`} position={[x, y, 0.095]} castShadow>
                <boxGeometry args={[0.16, 0.16, 0.03]} />
                <meshStandardMaterial
                  roughness={0.8}
                  metalness={0.1}
                  color={
                    rowIdx === 1 && colIdx === 1
                      ? "#3b82f6" // Current day marked blue
                      : props.theme === "dark"
                        ? "#1e293b"
                        : "#cbd5e1"
                  }
                />
              </mesh>
            ))
          )}
        </group>
      )}
    </SharedWrapper>
  );
}

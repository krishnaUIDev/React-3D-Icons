import { SharedWrapper } from "../SharedWrapper";
import { RemoteControlIconProps } from "./types";

export function RemoteControlIcon(props: RemoteControlIconProps) {
  const numButtons = 9;

  return (
    <SharedWrapper iconId="remotecontrol" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Main Handheld Remote Casing (Sleek bevel wand) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.16, 0.44, 0.03]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Top Infrared LED Transmitter bulb */}
          <mesh position={[0, 0.222, 0]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.008, 0.008, 0.01, 8]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Top Power Button (Glowing Accent Red circle) */}
          <mesh position={[-0.04, 0.16, 0.016]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.008, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Circular D-Pad Controller disk (Center navigator) */}
          <group position={[0, 0.05, 0.016]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.046, 0.046, 0.008, 24]} />
              <meshStandardMaterial roughness={0.3} metalness={0.3} color="#475569" />
            </mesh>
            {/* Center Ok button */}
            <mesh position={[0, 0, 0.002]} castShadow>
              <sphereGeometry args={[0.016, 12, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Volume / Channel Toggle Rocker Switches */}
          <group position={[0, -0.05, 0.016]}>
            {/* Volume toggle (Left) */}
            <mesh position={[-0.034, 0, 0]} castShadow>
              <boxGeometry args={[0.016, 0.046, 0.008]} />
              <meshStandardMaterial roughness={0.25} metalness={0.3} color="#334155" />
            </mesh>
            {/* Channel toggle (Right) */}
            <mesh position={[0.034, 0, 0]} castShadow>
              <boxGeometry args={[0.016, 0.046, 0.008]} />
              <meshStandardMaterial roughness={0.25} metalness={0.3} color="#334155" />
            </mesh>
          </group>

          {/* Numeric 3x3 Button Pad (Bottom layout) */}
          <group position={[0, -0.14, 0.016]}>
            {Array.from({ length: numButtons }).map((_, idx) => {
              const row = Math.floor(idx / 3);
              const col = idx % 3;
              const xPos = (col - 1) * 0.038;
              const yPos = (1 - row) * 0.034;
              return (
                <mesh key={idx} position={[xPos, yPos, 0]} castShadow>
                  <boxGeometry args={[0.022, 0.018, 0.006]} />
                  <meshStandardMaterial roughness={0.2} metalness={0.2} color="#94a3b8" />
                </mesh>
              );
            })}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

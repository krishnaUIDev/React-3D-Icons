import { SharedWrapper } from "../SharedWrapper";
import { WindlassIconProps } from "./types";

export function WindlassIcon(props: WindlassIconProps) {
  const ropeCoils = 8;

  return (
    <SharedWrapper iconId="windlass" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.35, 0.1]} position={[0, 0, 0]}>
          {/* Heavy Base Ground Frame Plate */}
          <mesh castShadow position={[0, -0.18, 0]}>
            <boxGeometry args={[0.34, 0.03, 0.22]} />
            <meshStandardMaterial roughness={0.35} metalness={0.6} color="#334155" />
          </mesh>

          {/* Left/Right Support Stanchion Brackets (Vertical stands) */}
          {[-0.13, 0.13].map((xOffset, idx) => (
            <mesh key={idx} position={[xOffset, -0.06, 0]} castShadow>
              <boxGeometry args={[0.024, 0.22, 0.08]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          ))}

          {/* Horizontal Central Winch Axle Shaft */}
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0.02, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.32, 12]} />
            <meshStandardMaterial roughness={0.15} metalness={0.85} color="#94a3b8" />
          </mesh>

          {/* Main Winch Drum Cylinder (Rope spooler) */}
          <group position={[0, 0.02, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.054, 0.054, 0.18, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Left/Right Drum Flanges (Boundary disks) */}
            {[-0.09, 0.09].map((xPos, idx) => (
              <mesh key={idx} rotation={[0, 0, Math.PI / 2]} position={[xPos, 0, 0]} castShadow>
                <cylinderGeometry args={[0.076, 0.076, 0.012, 16]} />
                <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
              </mesh>
            ))}

            {/* Glowing Accent Ring on Left Drum Flange */}
            <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.096, 0, 0]} castShadow>
              <cylinderGeometry args={[0.082, 0.082, 0.008, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Winch Wire Rope Coils (Stacked steel rope strands) */}
            {Array.from({ length: ropeCoils }).map((_, idx) => {
              const xPos = (idx - ropeCoils / 2) * 0.018 + 0.009;
              return (
                <mesh key={idx} rotation={[0, 0, Math.PI / 2]} position={[xPos, 0, 0]} castShadow>
                  <cylinderGeometry args={[0.062, 0.062, 0.016, 12]} />
                  <meshStandardMaterial roughness={0.35} metalness={0.9} color="#475569" />
                </mesh>
              );
            })}
          </group>

          {/* Winch Crank Handle Assembly (Mounted on right side) */}
          <group position={[0.16, 0.02, 0]}>
            {/* Gear locking cog (Ratchet wheel) */}
            <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.01, 0, 0]} castShadow>
              <cylinderGeometry args={[0.038, 0.038, 0.012, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#94a3b8" />
            </mesh>
            {/* Crank handle arm */}
            <mesh position={[0.016, 0.05, 0]} castShadow>
              <boxGeometry args={[0.014, 0.12, 0.022]} />
              <meshStandardMaterial roughness={0.25} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Crank handle pin & grip sleeve */}
            <mesh rotation={[0, 0, Math.PI / 2]} position={[0.046, 0.1, 0]} castShadow>
              <cylinderGeometry args={[0.014, 0.014, 0.06, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

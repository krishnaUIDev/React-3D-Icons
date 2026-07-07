import { SharedWrapper } from "../SharedWrapper";
import { ViceIconProps } from "./types";

export function ViceIcon(props: ViceIconProps) {
  return (
    <SharedWrapper iconId="vice" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.35, 0.1]} position={[0, 0, 0]}>
          {/* Main Heavy Mount Base Block */}
          <mesh castShadow position={[0, -0.16, 0]}>
            <boxGeometry args={[0.22, 0.04, 0.24]} />
            <meshStandardMaterial roughness={0.4} metalness={0.6} color="#334155" />
          </mesh>

          {/* Guide Rail Track Slide base (Horizontal steel beams) */}
          <mesh castShadow position={[0, -0.1, 0]}>
            <boxGeometry args={[0.08, 0.08, 0.36]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Fixed Rear Jaw (Cast body at back of vice) */}
          <group position={[0, -0.01, -0.1]}>
            <mesh castShadow>
              <boxGeometry args={[0.18, 0.14, 0.06]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Hardened steel jaw plate face */}
            <mesh position={[0, 0.03, 0.032]} castShadow>
              <boxGeometry args={[0.16, 0.04, 0.008]} />
              <meshStandardMaterial roughness={0.3} metalness={0.9} color="#94a3b8" />
            </mesh>
          </group>

          {/* Sliding Front Jaw (Movable jaw block) */}
          <group position={[0, -0.01, 0.06]}>
            <mesh castShadow>
              <boxGeometry args={[0.18, 0.14, 0.06]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Hardened steel jaw plate face */}
            <mesh position={[0, 0.03, -0.032]} castShadow>
              <boxGeometry args={[0.16, 0.04, 0.008]} />
              <meshStandardMaterial roughness={0.3} metalness={0.9} color="#94a3b8" />
            </mesh>
          </group>

          {/* Lead Screw Shaft (Steel cylinder extending forward) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0.08]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.28, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Front Screw Thread Collar / Handle Hub (Glowing Accent) */}
          <group position={[0, -0.05, 0.2]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.04, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Turning handle cross bar */}
            <mesh rotation={[0, 0, 0.2]} position={[0, 0, 0.008]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.22, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Spherical handle caps */}
            {[-0.11, 0.11].map((offset, idx) => {
              // Rotate positions along handle axis (0.2 rad)
              const yPos = offset * Math.sin(0.2);
              const xPos = offset * Math.cos(0.2);
              return (
                <mesh key={idx} position={[xPos, yPos, 0.008]} castShadow>
                  <sphereGeometry args={[0.014, 12, 12]} />
                  <meshStandardMaterial roughness={0.2} metalness={0.8} color="#475569" />
                </mesh>
              );
            })}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

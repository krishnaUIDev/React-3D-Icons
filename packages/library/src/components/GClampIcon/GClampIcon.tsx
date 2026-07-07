import { SharedWrapper } from "../SharedWrapper";
import { GClampIconProps } from "./types";

export function GClampIcon(props: GClampIconProps) {
  return (
    <SharedWrapper iconId="gclamp" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Main G-Clamp Frame (C-shaped heavy metal structure) */}
          <group>
            {/* Back long spine */}
            <mesh castShadow receiveShadow position={[-0.1, 0, 0]}>
              <boxGeometry args={[0.04, 0.36, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Top arm */}
            <mesh castShadow position={[-0.01, 0.16, 0]}>
              <boxGeometry args={[0.22, 0.04, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Bottom anvil arm */}
            <mesh castShadow position={[-0.01, -0.16, 0]}>
              <boxGeometry args={[0.22, 0.04, 0.04]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Anvil pad (Flat jaw on bottom arm) */}
            <mesh position={[0.08, -0.13, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Top Threaded Guide Collar (Glowing Accent ring) */}
          <mesh position={[0.08, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.034, 0.034, 0.05, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Threaded Screw Rod (Steel spindle shaft extending down) */}
          <mesh position={[0.08, 0.02, 0]} castShadow>
            <cylinderGeometry args={[0.014, 0.014, 0.24, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Clamping Swivel Pad (Top jaw disc on screw end) */}
          <mesh position={[0.08, -0.09, 0]} castShadow>
            <cylinderGeometry args={[0.026, 0.026, 0.016, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#475569" />
          </mesh>

          {/* Sliding T-Handle Tommy Bar */}
          <group position={[0.08, 0.19, 0]}>
            {/* Screw head hex socket */}
            <mesh castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.02, 6]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#94a3b8" />
            </mesh>
            {/* Sliding handle rod cross-bar */}
            <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0.02, 0]} castShadow>
              <cylinderGeometry args={[0.007, 0.007, 0.16, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Spherical handle stops at ends */}
            {[-0.08, 0.08].map((xOffset, idx) => (
              <mesh key={idx} position={[xOffset, 0.02, 0]} castShadow>
                <sphereGeometry args={[0.012, 12, 12]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

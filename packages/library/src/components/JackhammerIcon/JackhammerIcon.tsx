import { SharedWrapper } from "../SharedWrapper";
import { JackhammerIconProps } from "./types";

export function JackhammerIcon(props: JackhammerIconProps) {
  return (
    <SharedWrapper iconId="jackhammer" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, -Math.PI / 12]} position={[0, 0, 0]}>
          {/* Main vertical body casing */}
          <mesh position={[0, 0.05, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.08, 0.28, 16]} />
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

          {/* Glowing/Accent cylinder sleeve in middle body */}
          <mesh position={[0, 0.05, 0]} castShadow>
            <cylinderGeometry args={[0.082, 0.082, 0.08, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Horizontal Handle Bar T-shaped top */}
          <group position={[0, 0.2, 0]}>
            {/* Center connector bracket */}
            <mesh castShadow>
              <boxGeometry args={[0.09, 0.06, 0.09]} />
              <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
            </mesh>
            {/* Left and right handles bar */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.022, 0.022, 0.44, 16]} />
              <meshStandardMaterial roughness={0.4} metalness={0.8} color="#64748b" />
            </mesh>
            {/* Left Rubber Grip */}
            <mesh position={[-0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.026, 0.026, 0.1, 16]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Right Rubber Grip */}
            <mesh position={[0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.026, 0.026, 0.1, 16]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
          </group>

          {/* Lower chuck collar */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <cylinderGeometry args={[0.048, 0.038, 0.06, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Heavy spring shock absorber (helix) */}
          <group position={[0, -0.19, 0]}>
            {Array.from({ length: 4 }).map((_, i) => (
              <mesh key={i} position={[0, (i - 1.5) * 0.02, 0]} castShadow>
                <torusGeometry args={[0.035, 0.01, 8, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#334155" />
              </mesh>
            ))}
          </group>

          {/* Chisel Point Bit shaft */}
          <mesh position={[0, -0.32, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.16, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.95} color="#94a3b8" />
          </mesh>

          {/* Chisel Tip point */}
          <mesh position={[0, -0.42, 0]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.002, 0.04, 4]} />
            <meshStandardMaterial roughness={0.1} metalness={0.95} color="#94a3b8" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

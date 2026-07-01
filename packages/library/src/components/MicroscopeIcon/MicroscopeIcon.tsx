import { SharedWrapper } from "../SharedWrapper";
import { MicroscopeIconProps } from "./types";

export function MicroscopeIcon(props: MicroscopeIconProps) {
  return (
    <SharedWrapper iconId="microscope" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Base Stand (Preset Material) */}
          <mesh position={[0, -0.19, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.26, 0.03, 0.26]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Curved Support Arm Neck (Slate Grey Torus segment) */}
          <mesh position={[0.06, -0.02, 0]} rotation={[0, 0, Math.PI / 2.2]} castShadow>
            <torusGeometry args={[0.14, 0.018, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#64748b" roughness={0.6} />
          </mesh>

          {/* Eyepiece / Objective View Tube (Slanted Cylinder) */}
          <mesh position={[-0.05, 0.08, 0]} rotation={[0, 0, -0.6]} castShadow>
            <cylinderGeometry args={[0.03, 0.032, 0.22, 12]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
          </mesh>

          {/* Focus Adjustment Knobs (2 small cylinders on side) */}
          <group position={[0.05, 0.02, 0]}>
            <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.02, 10]} />
              <meshStandardMaterial color="#334155" roughness={0.8} />
            </mesh>
            <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.02, 10]} />
              <meshStandardMaterial color="#334155" roughness={0.8} />
            </mesh>
          </group>

          {/* Microscope Specimen Stage Plate (Dark flat plate) */}
          <mesh position={[-0.04, -0.08, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.16, 0.012, 0.16]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} />
          </mesh>

          {/* Glass Specimen Slide on stage */}
          <mesh position={[-0.04, -0.07, 0.01]} castShadow>
            <boxGeometry args={[0.1, 0.005, 0.04]} />
            <meshStandardMaterial color="#38bdf8" opacity={0.6} transparent roughness={0.1} />
          </mesh>

          {/* Glowing Specimen Target spot on slide (Emissive Accent Color) */}
          <mesh position={[-0.04, -0.065, 0.01]} castShadow>
            <sphereGeometry args={[0.008, 6, 6]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>

          {/* Light Source Bulb below Stage */}
          <mesh position={[-0.04, -0.14, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.04, 10]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

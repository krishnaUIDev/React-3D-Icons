import { SharedWrapper } from "../SharedWrapper";
import { TelescopeIconProps } from "./types";

export function TelescopeIcon(props: TelescopeIconProps) {
  return (
    <SharedWrapper iconId="telescope" {...props}>
      {(mat) => (
        <group
          rotation={[0.15, -Math.PI / 8, 0.05]}
          position={[0, -0.02, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Main Telescope Tube (Preset Material) */}
          <group position={[-0.02, 0.08, 0]} rotation={[0, 0, -0.42]}>
            {/* Outer body tube */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.04, 0.03, 0.32, 12]} />
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

            {/* Front Objective Lens Collar (Metallic) */}
            <mesh position={[0, 0.16, 0]} castShadow>
              <cylinderGeometry args={[0.044, 0.042, 0.03, 12]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>

            {/* Front Glowing Lens Face (Emissive Accent Color) */}
            <mesh position={[0, 0.176, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.038, 0.038, 0.004, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>

            {/* Eyepiece small slanted connector tube at back */}
            <mesh position={[0, -0.17, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.018, 0.04, 10]} />
              <meshStandardMaterial color="#334155" roughness={0.5} />
            </mesh>
          </group>

          {/* Tripod Mount Center Bracket */}
          <mesh position={[0, 0.04, 0]} castShadow>
            <boxGeometry args={[0.04, 0.04, 0.04]} />
            <meshStandardMaterial color="#475569" roughness={0.6} />
          </mesh>

          {/* Tripod Legs (Slanted Slate Cylinders) */}
          <group>
            {/* Front Right Leg */}
            <mesh position={[0.06, -0.1, 0.06]} rotation={[0.25, 0, -0.28]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
              <meshStandardMaterial color="#64748b" roughness={0.5} />
            </mesh>
            {/* Front Left Leg */}
            <mesh position={[-0.06, -0.1, 0.06]} rotation={[0.25, 0, 0.28]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
              <meshStandardMaterial color="#64748b" roughness={0.5} />
            </mesh>
            {/* Back Center Leg */}
            <mesh position={[0, -0.1, -0.09]} rotation={[-0.34, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
              <meshStandardMaterial color="#64748b" roughness={0.5} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

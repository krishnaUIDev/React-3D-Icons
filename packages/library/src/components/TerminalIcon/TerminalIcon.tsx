import { SharedWrapper } from "../SharedWrapper";
import { TerminalIconProps } from "./types";

export function TerminalIcon(props: TerminalIconProps) {
  return (
    <SharedWrapper iconId="terminal" {...props}>
      {(mat) => (
        <group>
          {/* Angled to show 3D depth */}
          <group rotation={[Math.PI / 10, -Math.PI / 6, 0]}>
            {/* Terminal Window Board */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.9, 0.64, 0.08]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Window Top Bar (Header) */}
            <mesh position={[0, 0.26, 0.01]}>
              <boxGeometry args={[0.88, 0.09, 0.08]} />
              <meshStandardMaterial
                roughness={0.6}
                color={props.theme === "dark" ? "#0f172a" : "#94a3b8"}
              />
            </mesh>

            {/* Window control buttons (Red, Yellow, Green spheres) */}
            {[-0.38, -0.31, -0.24].map((xOffset, idx) => {
              const colors = ["#ef4444", "#f59e0b", "#10b981"];
              return (
                <mesh key={idx} position={[xOffset, 0.26, 0.06]}>
                  <sphereGeometry args={[0.024, 12, 12]} />
                  <meshBasicMaterial color={colors[idx]} />
                </mesh>
              );
            })}

            {/* Screen Inner canvas cutout area */}
            <mesh position={[0, -0.06, 0.01]}>
              <boxGeometry args={[0.88, 0.52, 0.07]} />
              <meshStandardMaterial
                roughness={0.9}
                color={props.theme === "dark" ? "#020617" : "#f8fafc"}
              />
            </mesh>

            {/* Prompt Arrow ">" */}
            <group position={[-0.28, 0.08, 0.05]}>
              <mesh castShadow position={[-0.04, 0.04, 0]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.1, 0.026, 0.02]} />
                <meshStandardMaterial roughness={0.2} color={props.accentColor || "#10b981"} />
              </mesh>
              <mesh castShadow position={[-0.04, -0.04, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.1, 0.026, 0.02]} />
                <meshStandardMaterial roughness={0.2} color={props.accentColor || "#10b981"} />
              </mesh>
            </group>

            {/* Underscore cursor "_" */}
            <mesh castShadow position={[-0.14, 0.02, 0.05]}>
              <boxGeometry args={[0.11, 0.024, 0.02]} />
              <meshStandardMaterial roughness={0.2} color={props.accentColor || "#10b981"} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

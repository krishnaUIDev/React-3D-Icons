import { SharedWrapper } from "../SharedWrapper";
import { TopologyIconProps } from "./types";

export function TopologyIcon(props: TopologyIconProps) {
  return (
    <SharedWrapper iconId="topology" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.1]} position={[0, 0, 0]}>
          
          {/* Central Hub Node (Main system gateway) */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.32, 32, 32]} />
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

          {/* Central Hub rim ring */}
          <mesh castShadow position={[0, 0, 0.01]}>
            <torusGeometry args={[0.33, 0.025, 8, 32]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
            />
          </mesh>

          {/* Symmetrical Spoke Rails (Orthogonal network connections) */}
          <group position={[0, 0, 0]}>
            {/* Horizontal line (X-axis connector) */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 1.1, 8]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#475569" : "#cbd5e1"}
                roughness={0.4}
                metalness={0.6}
              />
            </mesh>
            {/* Vertical line (Y-axis connector) */}
            <mesh castShadow>
              <cylinderGeometry args={[0.024, 0.024, 1.1, 8]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#475569" : "#cbd5e1"}
                roughness={0.4}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Satellite Nodes (Four outer sub-system spheres) */}
          {[
            [0.55, 0],
            [-0.55, 0],
            [0, 0.55],
            [0, -0.55],
          ].map(([x, y], index) => (
            <mesh key={index} position={[x, y, 0]} castShadow>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
                roughness={0.2}
              />
            </mesh>
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}

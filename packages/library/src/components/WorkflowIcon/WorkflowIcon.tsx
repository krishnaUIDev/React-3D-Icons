import { SharedWrapper } from "../SharedWrapper";
import { WorkflowIconProps } from "./types";

export function WorkflowIcon(props: WorkflowIconProps) {
  return (
    <SharedWrapper iconId="workflow" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Top Root Node Box */}
          <mesh castShadow receiveShadow position={[0, 0.48, 0]}>
            <boxGeometry args={[0.56, 0.38, 0.16]} />
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

          {/* Bottom Left Child Node Box */}
          <mesh castShadow receiveShadow position={[-0.48, -0.42, 0]}>
            <boxGeometry args={[0.56, 0.38, 0.16]} />
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

          {/* Bottom Right Child Node Box */}
          <mesh castShadow receiveShadow position={[0.48, -0.42, 0]}>
            <boxGeometry args={[0.56, 0.38, 0.16]} />
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

          {/* Connecting Rails (Glowing data lines) */}
          <group position={[0, 0, 0]}>
            {/* Vertical stem down from root */}
            <mesh position={[0, 0.14, 0]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.32, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Horizontal branch bar */}
            <mesh position={[0, -0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.96, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Left drop tube */}
            <mesh position={[-0.48, -0.15, 0]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.22, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Right drop tube */}
            <mesh position={[0.48, -0.15, 0]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.22, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Connection Joint Beads (Spheres) */}
          <group position={[0, 0, 0.01]}>
            {/* Center-split T-junction */}
            <mesh position={[0, -0.04, 0]} castShadow>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
              />
            </mesh>
            {/* Left corner elbow */}
            <mesh position={[-0.48, -0.04, 0]} castShadow>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
              />
            </mesh>
            {/* Right corner elbow */}
            <mesh position={[0.48, -0.04, 0]} castShadow>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

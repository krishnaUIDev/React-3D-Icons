import { SharedWrapper } from "../SharedWrapper";
import { PipelineIconProps } from "./types";

export function PipelineIcon(props: PipelineIconProps) {
  return (
    <SharedWrapper iconId="pipeline" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Main pipes */}
          {/* Segment 1: Lower horizontal pipe */}
          <mesh castShadow receiveShadow position={[-0.45, -0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Segment 2: Vertical connecting pipe */}
          <mesh castShadow receiveShadow position={[-0.2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.4, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Segment 3: Upper horizontal pipe */}
          <mesh castShadow receiveShadow position={[0.2, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.06, 0.06, 0.8, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Joint Elbow Spheres */}
          {/* Bottom-left elbow */}
          <mesh castShadow position={[-0.2, -0.2, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* Top-left elbow */}
          <mesh castShadow position={[-0.2, 0.2, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* End flanges/connectors (metallic rims) */}
          <mesh position={[-0.7, -0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.09, 0.09, 0.04, 16]} />
            <meshStandardMaterial
              roughness={0.3}
              metalness={0.8}
              color={props.theme === "dark" ? "#27272a" : "#e4e4e7"}
            />
          </mesh>

          <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.09, 0.09, 0.04, 16]} />
            <meshStandardMaterial
              roughness={0.3}
              metalness={0.8}
              color={props.theme === "dark" ? "#27272a" : "#e4e4e7"}
            />
          </mesh>

          {/* Valve Control Wheel */}
          <group position={[0.1, 0.2, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Valve Central Node */}
            <mesh>
              <cylinderGeometry args={[0.03, 0.03, 0.08, 16]} />
              <meshStandardMaterial
                roughness={0.3}
                metalness={0.8}
                color={props.theme === "dark" ? "#27272a" : "#e4e4e7"}
              />
            </mesh>
            {/* Valve Outer Wheel Ring */}
            <mesh castShadow>
              <torusGeometry args={[0.15, 0.025, 8, 24]} />
              <meshStandardMaterial
                color={props.accentColor || "#10b981"}
                emissive={props.accentColor || "#10b981"}
                emissiveIntensity={1.0}
                roughness={0.15}
                metalness={0.7}
              />
            </mesh>
            {/* Valve Spokes */}
            {[0, Math.PI / 3, (2 * Math.PI) / 3].map((angle, index) => (
              <mesh key={index} rotation={[0, angle, 0]}>
                <boxGeometry args={[0.26, 0.02, 0.02]} />
                <meshStandardMaterial
                  color={props.accentColor || "#10b981"}
                  roughness={0.3}
                  metalness={0.6}
                />
              </mesh>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

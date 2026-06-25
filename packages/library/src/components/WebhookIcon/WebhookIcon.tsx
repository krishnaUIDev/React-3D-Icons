import { SharedWrapper } from "../SharedWrapper";
import { WebhookIconProps } from "./types";

export function WebhookIcon(props: WebhookIconProps) {
  return (
    <SharedWrapper iconId="webhook" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* T-Junction Connector Pipes */}
          {/* Upper Horizontal Connector */}
          <mesh castShadow receiveShadow position={[0, 0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.045, 0.045, 0.7, 24]} />
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

          {/* Lower Vertical Connector */}
          <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.6, 24]} />
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

          {/* The three terminal nodes */}
          {/* Node 1: Left Input Node */}
          <mesh castShadow position={[-0.35, 0.25, 0]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* Node 2: Right Input Node */}
          <mesh castShadow position={[0.35, 0.25, 0]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* Node 3: Bottom Output Node */}
          <mesh castShadow position={[0, -0.35, 0]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              color={mat.color}
            />
          </mesh>

          {/* Junction Core Sphere (Center block) */}
          <mesh position={[0, 0.25, 0]}>
            <sphereGeometry args={[0.075, 16, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#27272a" : "#cbd5e1"} />
          </mesh>

          {/* Glowing Status Accent Bulbs on each node */}
          <mesh position={[-0.35, 0.25, 0.1]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>

          <mesh position={[0.35, 0.25, 0.1]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>

          <mesh position={[0, -0.35, 0.1]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={props.accentColor || "#10b981"}
              emissive={props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

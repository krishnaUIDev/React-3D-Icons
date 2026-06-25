import { SharedWrapper } from "../SharedWrapper";
import { ContainerIconProps } from "./types";

export function ContainerIcon(props: ContainerIconProps) {
  return (
    <SharedWrapper iconId="container" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.35, 0.05]}>

          {/* Main container body */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[1.6, 0.9, 0.75]} />
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

          {/* Corrugation ribs (vertical lines on body) */}
          {[-0.54, -0.27, 0, 0.27, 0.54].map((x, i) => (
            <mesh key={i} castShadow position={[x, 0, 0.38]}>
              <boxGeometry args={[0.045, 0.92, 0.06]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
                roughness={0.6}
                metalness={0.4}
              />
            </mesh>
          ))}

          {/* Top rail */}
          <mesh castShadow position={[0, 0.47, 0]}>
            <boxGeometry args={[1.64, 0.07, 0.8]} />
            <meshStandardMaterial
              color={props.theme === "dark" ? "#334155" : "#cbd5e1"}
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Bottom rail */}
          <mesh castShadow position={[0, -0.47, 0]}>
            <boxGeometry args={[1.64, 0.07, 0.8]} />
            <meshStandardMaterial
              color={props.theme === "dark" ? "#334155" : "#cbd5e1"}
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Left corner post */}
          <mesh castShadow position={[-0.82, 0, 0]}>
            <boxGeometry args={[0.07, 0.95, 0.82]} />
            <meshStandardMaterial
              color={props.theme === "dark" ? "#475569" : "#94a3b8"}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>

          {/* Right corner post */}
          <mesh castShadow position={[0.82, 0, 0]}>
            <boxGeometry args={[0.07, 0.95, 0.82]} />
            <meshStandardMaterial
              color={props.theme === "dark" ? "#475569" : "#94a3b8"}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>

          {/* Door latch bar on front face */}
          <mesh castShadow position={[0.02, 0, 0.41]}>
            <boxGeometry args={[0.055, 0.82, 0.055]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

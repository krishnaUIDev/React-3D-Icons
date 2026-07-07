import { SharedWrapper } from "../SharedWrapper";
import { GameConsoleIconProps } from "./types";

export function GameConsoleIcon(props: GameConsoleIconProps) {
  return (
    <SharedWrapper iconId="gameconsole" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Main Core Tower Structure (Upright) */}
          <mesh castShadow receiveShadow position={[0, 0.04, 0]}>
            <boxGeometry args={[0.12, 0.68, 0.4]} />
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

          {/* Left Wing Shell Plate (White or styled side panels) */}
          <mesh position={[-0.075, 0.04, 0.01]} rotation={[0, 0, -0.015]} castShadow>
            <boxGeometry args={[0.02, 0.7, 0.42]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Right Wing Shell Plate (Slightly offset) */}
          <mesh position={[0.075, 0.04, 0.01]} rotation={[0, 0, 0.015]} castShadow>
            <boxGeometry args={[0.02, 0.7, 0.42]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Bottom Stand Mount (Flat circular base plate) */}
          <mesh position={[0, -0.31, 0.01]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.22, 0.024, 32]} />
            <meshStandardMaterial roughness={0.5} metalness={0.5} color="#1e293b" />
          </mesh>

          {/* Disc Drive Slot (Fine black vertical box on front edge) */}
          <mesh position={[0.04, 0.05, 0.202]} castShadow>
            <boxGeometry args={[0.008, 0.38, 0.008]} />
            <meshBasicMaterial color="#0f172a" />
          </mesh>

          {/* Glowing Status Light Strip (Vertical stripe down the front core - Glowing Accent) */}
          <mesh position={[0, 0.05, 0.202]} castShadow>
            <boxGeometry args={[0.012, 0.52, 0.005]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

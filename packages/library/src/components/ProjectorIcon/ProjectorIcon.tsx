import { SharedWrapper } from "../SharedWrapper";
import { ProjectorIconProps } from "./types";

export function ProjectorIcon(props: ProjectorIconProps) {
  return (
    <SharedWrapper iconId="projector" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, -0.04, 0]}>
          
          {/* Main Projector Body Cabinet */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.58, 0.22, 0.44]} />
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

          {/* Bottom Support Feet (Small cylinders) */}
          <mesh position={[-0.24, -0.12, 0.16]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.03, 12]} />
            <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
          </mesh>
          <mesh position={[0.24, -0.12, 0.16]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.03, 12]} />
            <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
          </mesh>
          <mesh position={[0, -0.12, -0.16]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.03, 12]} />
            <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
          </mesh>

          {/* Large Concentric Projector Lens (Protruding forward on the right, Z = 0.22) */}
          <group position={[0.14, 0.02, 0.22]}>
            {/* Outer Lens Sleeve */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.11, 0.11, 0.08, 24]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>
            {/* Inner Lens Aperture glass */}
            <mesh position={[0, 0, 0.042]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.075, 0.075, 0.01, 24]} />
              <meshStandardMaterial roughness={0.02} metalness={0.95} color="#0f172a" />
            </mesh>

            {/* Glowing Lens Ring (Glowing Accent) */}
            <mesh position={[0, 0, 0.043]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.09, 0.008, 8, 32]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

          {/* Rear Cooling Vents (Linear slats on back-left) */}
          <group position={[-0.18, 0.02, -0.224]}>
            <mesh position={[0, 0.04, 0]}>
              <boxGeometry args={[0.16, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#334155" />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.16, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#334155" />
            </mesh>
            <mesh position={[0, -0.04, 0]}>
              <boxGeometry args={[0.16, 0.015, 0.005]} />
              <meshStandardMaterial roughness={0.5} metalness={0.5} color="#334155" />
            </mesh>
          </group>

          {/* Top Panel Buttons grid */}
          <group position={[-0.16, 0.112, 0.06]}>
            <mesh position={[-0.04, 0, 0]}>
              <sphereGeometry args={[0.015, 12, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#94a3b8" />
            </mesh>
            <mesh position={[0.04, 0, 0]}>
              <sphereGeometry args={[0.015, 12, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#94a3b8" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

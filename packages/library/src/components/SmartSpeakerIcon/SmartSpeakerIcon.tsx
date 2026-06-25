import { SharedWrapper } from "../SharedWrapper";
import { SmartSpeakerIconProps } from "./types";

export function SmartSpeakerIcon(props: SmartSpeakerIconProps) {
  return (
    <SharedWrapper iconId="smartspeaker" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Speaker Mesh Cabinet (Cylinder) */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.2, 0.2, 0.46, 24]} />
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

          {/* Bottom Stand Rim (Rubber pad) */}
          <mesh position={[0, -0.235, 0]}>
            <cylinderGeometry args={[0.204, 0.204, 0.015, 24]} />
            <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Top Matte Controls Deck (Cap plate) */}
          <mesh position={[0, 0.23, 0]} castShadow>
            <cylinderGeometry args={[0.19, 0.19, 0.01, 24]} />
            <meshStandardMaterial
              roughness={0.4}
              metalness={0.6}
              color={props.theme === "dark" ? "#1e293b" : "#475569"}
            />
          </mesh>

          {/* Voice Assistant Glowing Ring (On top of controls deck - Glowing Accent) */}
          <mesh position={[0, 0.236, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.11, 0.014, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>

          {/* Central Button Dot on top deck */}
          <mesh position={[0, 0.236, 0]} castShadow>
            <sphereGeometry args={[0.018, 12, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

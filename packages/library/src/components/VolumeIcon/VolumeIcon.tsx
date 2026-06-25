import { SharedWrapper } from "../SharedWrapper";
import { VolumeIconProps } from "./types";

export function VolumeIcon(props: VolumeIconProps) {
  return (
    <SharedWrapper iconId="volume" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Speaker Casing Base (Rectangular plate) */}
          <mesh castShadow receiveShadow position={[-0.45, 0, 0]}>
            <boxGeometry args={[0.32, 0.44, 0.44]} />
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

          {/* Speaker Front Cone (Truncated cone) */}
          <mesh castShadow receiveShadow position={[-0.14, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.1, 0.38, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Speaker Center dust cap cap */}
          <mesh position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={props.theme === "dark" ? "#1e293b" : "#cbd5e1"}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Radiating Sound Waves (Concentric glowing torus arches) */}
          <group position={[0.15, 0, 0]}>
            {/* Inner smaller wave */}
            <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.32, 0.02, 8, 24, Math.PI * 0.55]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#3b82f6"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#3b82f6"}
                emissiveIntensity={1.0}
              />
            </mesh>

            {/* Outer larger wave */}
            <mesh position={[0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.54, 0.02, 8, 24, Math.PI * 0.55]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#3b82f6"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#3b82f6"}
                emissiveIntensity={1.0}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

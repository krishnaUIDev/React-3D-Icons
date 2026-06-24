import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function DownloadIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="download" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Bottom Tray Base Plate */}
          <mesh position={[0, -0.42, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.1, 0.08, 0.8]} />
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

          {/* Left Tray Wall */}
          <mesh position={[-0.51, -0.3, 0]} castShadow>
            <boxGeometry args={[0.08, 0.22, 0.8]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Right Tray Wall */}
          <mesh position={[0.51, -0.3, 0]} castShadow>
            <boxGeometry args={[0.08, 0.22, 0.8]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Back Tray Wall */}
          <mesh position={[0, -0.3, -0.36]} castShadow>
            <boxGeometry args={[1.1, 0.22, 0.08]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Downward Arrow Shaft */}
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Downward Arrow Tip (Pointing Down) */}
          <mesh position={[0, -0.18, 0]} rotation={[Math.PI, Math.PI / 4, 0]} castShadow>
            <coneGeometry args={[0.26, 0.26, 4]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

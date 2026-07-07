import { SharedWrapper } from "../SharedWrapper";
import { ScaleIconProps } from "./types";

export function ScaleIcon(props: ScaleIconProps) {
  return (
    <SharedWrapper iconId="scale" {...props}>
      {(mat) => (
        <group
          rotation={[0.15, -Math.PI / 8, 0.05]}
          position={[0, -0.02, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Central Post (Vertical Column in Preset Material) */}
          <mesh castShadow receiveShadow position={[0, -0.02, 0]}>
            <cylinderGeometry args={[0.016, 0.016, 0.34, 10]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Base Stand Plate */}
          <mesh position={[0, -0.19, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
            <meshStandardMaterial color="#64748b" roughness={0.6} />
          </mesh>

          {/* Horizontal Cross Beam (Tilted slightly for dynamic feel) */}
          <group position={[0, 0.12, 0]} rotation={[0, 0, 0.04]}>
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.38, 8]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.7} />
            </mesh>

            {/* Left Pan Assembly */}
            <group position={[-0.18, -0.02, 0]}>
              {/* Strings */}
              <mesh position={[-0.03, -0.08, 0]} rotation={[0, 0, -0.15]} castShadow>
                <boxGeometry args={[0.004, 0.18, 0.004]} />
                <meshStandardMaterial color="#cbd5e1" />
              </mesh>
              <mesh position={[0.03, -0.08, 0]} rotation={[0, 0, 0.15]} castShadow>
                <boxGeometry args={[0.004, 0.18, 0.004]} />
                <meshStandardMaterial color="#cbd5e1" />
              </mesh>
              {/* Pan Plate */}
              <mesh position={[0, -0.16, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.008, 12]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
              </mesh>
            </group>

            {/* Right Pan Assembly */}
            <group position={[0.18, -0.02, 0]}>
              {/* Strings */}
              <mesh position={[-0.03, -0.08, 0]} rotation={[0, 0, -0.15]} castShadow>
                <boxGeometry args={[0.004, 0.18, 0.004]} />
                <meshStandardMaterial color="#cbd5e1" />
              </mesh>
              <mesh position={[0.03, -0.08, 0]} rotation={[0, 0, 0.15]} castShadow>
                <boxGeometry args={[0.004, 0.18, 0.004]} />
                <meshStandardMaterial color="#cbd5e1" />
              </mesh>
              {/* Pan Plate */}
              <mesh position={[0, -0.16, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.008, 12]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.3} />
              </mesh>
            </group>
          </group>

          {/* Central Glowing Pivot Node (Emissive Accent Color) */}
          <mesh position={[0, 0.12, 0.012]} castShadow>
            <sphereGeometry args={[0.026, 10, 10]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

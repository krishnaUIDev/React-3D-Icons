import { SharedWrapper } from "../SharedWrapper";
import { SafeIconProps } from "./types";

export function SafeIcon(props: SafeIconProps) {
  return (
    <SharedWrapper iconId="safe" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 8, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main Safe Box Body (Preset Material) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.38, 0.38, 0.34]} />
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

          {/* Front Door Panel (Slightly inset box) */}
          <mesh position={[0, 0, 0.171]} castShadow>
            <boxGeometry args={[0.34, 0.34, 0.01]} />
            <meshStandardMaterial color="#334155" roughness={0.7} />
          </mesh>

          {/* Combination Lock Dial Wheel (Silver circular rim) */}
          <group position={[0.06, 0.04, 0.176]}>
            <mesh castShadow>
              <torusGeometry args={[0.07, 0.014, 8, 20]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Dial spokes */}
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.13, 0.014, 0.008]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.8} />
            </mesh>
            <mesh rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.13, 0.014, 0.008]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.8} />
            </mesh>

            {/* Dial Center Cap (Glowing Accent Color) */}
            <mesh position={[0, 0, 0.01]} castShadow>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

          {/* Safe Door Handle Lever (Silver bar + lock connection) */}
          <group position={[-0.08, -0.04, 0.176]}>
            <mesh position={[0, 0, 0.008]} rotation={[0, 0, -0.2]} castShadow>
              <boxGeometry args={[0.02, 0.08, 0.016]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0.034, 0.016]}>
              <sphereGeometry args={[0.016, 8, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} />
            </mesh>
          </group>

          {/* Side Hinges (2 small cylinders on the right edge) */}
          <group position={[0.18, 0, 0.15]}>
            <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 8]} />
              <meshStandardMaterial color="#475569" metalness={0.6} />
            </mesh>
            <mesh position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 8]} />
              <meshStandardMaterial color="#475569" metalness={0.6} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

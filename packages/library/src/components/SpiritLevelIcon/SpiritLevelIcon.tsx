import { SharedWrapper } from "../SharedWrapper";
import { SpiritLevelIconProps } from "./types";

export function SpiritLevelIcon(props: SpiritLevelIconProps) {
  return (
    <SharedWrapper iconId="spiritlevel" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Main Level Frame (Ruler block with two viewing ports/holes) */}
          <group>
            {/* Main Bar Chassis */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.74, 0.16, 0.06]} />
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

            {/* Aluminum Edge Plates (Top and bottom metal bars) */}
            <mesh position={[0, 0.082, 0]} castShadow>
              <boxGeometry args={[0.744, 0.015, 0.066]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
            <mesh position={[0, -0.082, 0]} castShadow>
              <boxGeometry args={[0.744, 0.015, 0.066]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Central Horizontal Level Vial (Green glowing cylinder) */}
          <group position={[0, 0, 0.01]}>
            {/* Vial glass tube */}
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.034, 0.034, 0.14, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#22c55e"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#22c55e"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Vial measurement lines */}
            <mesh position={[-0.03, 0, 0.015]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.036, 0.036, 0.005, 12]} />
              <meshBasicMaterial color="#1e293b" />
            </mesh>
            <mesh position={[0.03, 0, 0.015]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.036, 0.036, 0.005, 12]} />
              <meshBasicMaterial color="#1e293b" />
            </mesh>
            {/* Air Bubble (Tiny cylinder/sphere shifted slightly) */}
            <mesh position={[0.006, 0, 0.012]} castShadow>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#ffffff" />
            </mesh>
          </group>

          {/* Vertical Level Vial (Plumb reading, X = -0.22) */}
          <group position={[-0.22, 0, 0.01]}>
            {/* Vial glass tube */}
            <mesh castShadow>
              <cylinderGeometry args={[0.034, 0.034, 0.09, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#22c55e"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#22c55e"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Air Bubble */}
            <mesh position={[0, -0.005, 0.012]} castShadow>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#ffffff" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

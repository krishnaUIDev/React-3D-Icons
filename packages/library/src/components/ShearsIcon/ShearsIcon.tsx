import { SharedWrapper } from "../SharedWrapper";
import { ShearsIconProps } from "./types";

export function ShearsIcon(props: ShearsIconProps) {
  return (
    <SharedWrapper iconId="shears" {...props}>
      {(mat) => (
        <group rotation={[0.1, 0.2, Math.PI / 4]} position={[0, 0, 0]}>
          {/* Central Pivot Joint Pin */}
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.026, 0.026, 0.06, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#94a3b8" />
          </mesh>

          {/* Scissor Blades Jaws (Upper and lower shears) */}
          <group position={[0, 0, 0]}>
            {/* Upper cutting blade */}
            <group rotation={[0, 0, 0.2]}>
              <mesh position={[0, 0.12, 0.01]} castShadow>
                <boxGeometry args={[0.04, 0.16, 0.012]} />
                <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
              </mesh>
              {/* Blade edge chamfer */}
              <mesh position={[-0.01, 0.12, 0.01]} rotation={[0, 0.3, 0]} castShadow>
                <boxGeometry args={[0.02, 0.16, 0.01]} />
                <meshStandardMaterial roughness={0.1} metalness={0.95} color="#e2e8f0" />
              </mesh>
            </group>

            {/* Lower cutting blade */}
            <group rotation={[0, 0, -0.2]}>
              <mesh position={[0, 0.12, -0.01]} castShadow>
                <boxGeometry args={[0.04, 0.16, 0.012]} />
                <meshStandardMaterial roughness={0.15} metalness={0.9} color="#94a3b8" />
              </mesh>
              {/* Blade edge chamfer */}
              <mesh position={[0.01, 0.12, -0.01]} rotation={[0, -0.3, 0]} castShadow>
                <boxGeometry args={[0.02, 0.16, 0.01]} />
                <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
              </mesh>
            </group>
          </group>

          {/* Heavy Lever Handles (Extending down) */}
          <group position={[0, 0, 0]}>
            {/* Left Handle rod */}
            <group rotation={[0, 0, 2.9]}>
              <mesh position={[0, 0.18, 0.015]} castShadow>
                <cylinderGeometry args={[0.018, 0.018, 0.28, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
              </mesh>
              {/* Left Grip Cover */}
              <mesh position={[0, 0.22, 0.015]} castShadow>
                <cylinderGeometry args={[0.024, 0.024, 0.18, 12]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>
              {/* Left End cap loop */}
              <mesh position={[0, 0.31, 0.015]} castShadow>
                <torusGeometry args={[0.024, 0.008, 6, 12]} />
                <meshStandardMaterial roughness={0.4} metalness={0.7} color="#334155" />
              </mesh>
            </group>

            {/* Right Handle rod */}
            <group rotation={[0, 0, 3.4]}>
              <mesh position={[0, 0.18, -0.015]} castShadow>
                <cylinderGeometry args={[0.018, 0.018, 0.28, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
              </mesh>
              {/* Right Grip Cover */}
              <mesh position={[0, 0.22, -0.015]} castShadow>
                <cylinderGeometry args={[0.024, 0.024, 0.18, 12]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.2}
                />
              </mesh>
              {/* Right End cap loop */}
              <mesh position={[0, 0.31, -0.015]} castShadow>
                <torusGeometry args={[0.024, 0.008, 6, 12]} />
                <meshStandardMaterial roughness={0.4} metalness={0.7} color="#334155" />
              </mesh>
            </group>
          </group>

          {/* Pivot Spring Wire Link (Tactile detail) */}
          <mesh position={[0, -0.03, 0]} castShadow>
            <torusGeometry args={[0.04, 0.006, 6, 12, Math.PI]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#1e293b" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

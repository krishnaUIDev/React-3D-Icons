import { SharedWrapper } from "../SharedWrapper";
import { CalendarCheckIconProps } from "./types";

export function CalendarCheckIcon(props: CalendarCheckIconProps) {
  return (
    <SharedWrapper iconId="calendarcheck" {...props}>
      {(mat) => (
        <group rotation={[0.22, -Math.PI / 6, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Calendar Plate Body (Preset Material) */}
          <mesh castShadow receiveShadow position={[0, -0.02, 0]}>
            <boxGeometry args={[0.34, 0.3, 0.02]} />
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

          {/* Top Colored Header Banner */}
          <mesh position={[0, 0.12, 0.002]} castShadow>
            <boxGeometry args={[0.34, 0.07, 0.024]} />
            <meshStandardMaterial color="#ef4444" roughness={0.4} />
          </mesh>

          {/* Top Binder Hanging Rings */}
          <group>
            {/* Left Ring */}
            <mesh position={[-0.09, 0.16, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.034, 0.008, 6, 16]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Right Ring */}
            <mesh position={[0.09, 0.16, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.034, 0.008, 6, 16]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>

          {/* Calendar Grid Date Dots */}
          <group>
            {/* Row 1 */}
            <mesh position={[-0.08, 0.04, 0.012]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.004, 8]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.5} />
            </mesh>
            <mesh position={[0, 0.04, 0.012]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.004, 8]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.5} />
            </mesh>
            <mesh position={[0.08, 0.04, 0.012]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.004, 8]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.5} />
            </mesh>

            {/* Row 2 */}
            <mesh position={[-0.08, -0.03, 0.012]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.004, 8]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.5} />
            </mesh>
            <mesh position={[0, -0.03, 0.012]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.004, 8]} />
              <meshStandardMaterial color="#94a3b8" roughness={0.5} />
            </mesh>
          </group>

          {/* Raised 3D Checkmark on Bottom Right (Emissive Accent Color) */}
          <group position={[0.08, -0.09, 0.02]}>
            {/* Short Left Wing */}
            <mesh position={[-0.015, -0.015, 0]} rotation={[0, 0, -0.7]} castShadow>
              <boxGeometry args={[0.024, 0.05, 0.016]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Long Right Wing */}
            <mesh position={[0.015, 0.005, 0]} rotation={[0, 0, 0.7]} castShadow>
              <boxGeometry args={[0.024, 0.09, 0.016]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

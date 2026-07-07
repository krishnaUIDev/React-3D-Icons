import { SharedWrapper } from "../SharedWrapper";
import { SmartWatchIconProps } from "./types";

export function SmartWatchIcon(props: SmartWatchIconProps) {
  return (
    <SharedWrapper iconId="smartwatch" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Watch Body Case (Metal bezel) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.36, 0.42, 0.07]} />
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

          {/* Curved Strap Bands (Top and bottom bands wrapping down) */}
          <group>
            {/* Top Strap */}
            <mesh position={[0, 0.32, -0.06]} rotation={[0.25, 0, 0]} castShadow>
              <boxGeometry args={[0.24, 0.28, 0.024]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#334155" />
            </mesh>
            {/* Bottom Strap */}
            <mesh position={[0, -0.32, -0.06]} rotation={[-0.25, 0, 0]} castShadow>
              <boxGeometry args={[0.24, 0.28, 0.024]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#334155" />
            </mesh>
          </group>

          {/* Front Screen Display (Black glass) */}
          <mesh position={[0, 0, 0.036]} castShadow>
            <boxGeometry args={[0.3, 0.36, 0.006]} />
            <meshStandardMaterial
              roughness={0.05}
              metalness={0.9}
              color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
            />
          </mesh>

          {/* Crown Rotating Dial Button (Right edge cylinder) */}
          <mesh position={[0.19, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.04, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Glowing Smart Interface Ring/Widgets (Activity Tracker Arc - Glowing Accent) */}
          <group position={[0, 0, 0.039]}>
            {/* Outer ring representation (Torus) */}
            <mesh castShadow>
              <torusGeometry args={[0.11, 0.016, 8, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Central glowing widget dot */}
            <mesh position={[0, 0.04, 0.005]}>
              <sphereGeometry args={[0.024, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

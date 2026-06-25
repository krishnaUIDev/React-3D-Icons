import { SharedWrapper } from "../SharedWrapper";
import { TabletIconProps } from "./types";

export function TabletIcon(props: TabletIconProps) {
  return (
    <SharedWrapper iconId="tablet" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Tablet Bezel Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.72, 0.54, 0.03]} />
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

          {/* Screen Display Face */}
          <mesh position={[0, 0, 0.015]} castShadow>
            <boxGeometry args={[0.66, 0.48, 0.006]} />
            <meshStandardMaterial
              roughness={0.06}
              metalness={0.9}
              color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
            />
          </mesh>

          {/* Front camera lens circle */}
          <mesh position={[0, 0.25, 0.018]} castShadow>
            <sphereGeometry args={[0.01, 12, 12]} />
            <meshBasicMaterial color="#1e293b" />
          </mesh>

          {/* Glowing App Grid Widgets / Screen elements (Glowing Accent) */}
          <group position={[0, 0, 0.019]}>
            {/* Widget 1 */}
            <mesh position={[-0.18, 0.1, 0]} castShadow>
              <boxGeometry args={[0.2, 0.12, 0.002]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            
            {/* Widget 2 */}
            <mesh position={[0.16, 0.1, 0]} castShadow>
              <boxGeometry args={[0.24, 0.04, 0.002]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Widget 3 */}
            <mesh position={[0.16, 0.02, 0]} castShadow>
              <boxGeometry args={[0.24, 0.04, 0.002]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

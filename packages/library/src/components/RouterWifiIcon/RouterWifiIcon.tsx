import { SharedWrapper } from "../SharedWrapper";
import { RouterWifiIconProps } from "./types";

export function RouterWifiIcon(props: RouterWifiIconProps) {
  return (
    <SharedWrapper iconId="routerwifi" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, -0.06, 0]}>
          {/* Main Router Casing Base */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.62, 0.09, 0.36]} />
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

          {/* Top Panel Trim (Dark slate plate) */}
          <mesh position={[0, 0.046, 0]} castShadow>
            <boxGeometry args={[0.56, 0.01, 0.3]} />
            <meshStandardMaterial
              roughness={0.4}
              metalness={0.6}
              color={props.theme === "dark" ? "#1e293b" : "#475569"}
            />
          </mesh>

          {/* Left Vertical Antenna Rod */}
          <mesh position={[-0.24, 0.22, -0.14]} rotation={[0.08, 0, 0.05]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.38, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Right Vertical Antenna Rod */}
          <mesh position={[0.24, 0.22, -0.14]} rotation={[0.08, 0, -0.05]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.38, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Front Glowing LED Status Nodes (Glowing Accent) */}
          <group position={[0, -0.01, 0.182]}>
            {/* LED 1 */}
            <mesh position={[-0.15, 0, 0]}>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 2 */}
            <mesh position={[-0.05, 0, 0]}>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 3 */}
            <mesh position={[0.05, 0, 0]}>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 4 (Power state, glowing red/orange) */}
            <mesh position={[0.15, 0, 0]}>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={1.1} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

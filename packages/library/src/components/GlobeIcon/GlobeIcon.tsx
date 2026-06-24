import { SharedWrapper } from "../SharedWrapper";
import { GlobeIconProps } from "./types";

export function GlobeIcon(props: GlobeIconProps) {
  return (
    <SharedWrapper iconId="globe" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Central Sphere (Earth) */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.48, 32, 32]} />
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

          {/* Latitude Band (Tilted Ring) */}
          <mesh position={[0, 0.1, 0]} rotation={[0.3, 0.4, 0.8]} castShadow>
            <torusGeometry args={[0.55, 0.035, 8, 48]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#3b82f6"}
            />
          </mesh>

          {/* Longitude Band (Perpendicular Tilted Ring) */}
          <mesh position={[0, 0.1, 0]} rotation={[1.2, -0.6, 0.2]} castShadow>
            <torusGeometry args={[0.55, 0.035, 8, 48]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#3b82f6"}
            />
          </mesh>

          {/* Curved Stand Arm */}
          <mesh position={[-0.08, 0.08, 0]} rotation={[0, 0, Math.PI * 0.28]} castShadow>
            <torusGeometry args={[0.62, 0.045, 8, 32, Math.PI * 1.1]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Stand Axis Pin Top */}
          <mesh position={[0.13, 0.65, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.1, 12]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>

          {/* Stand Axis Pin Bottom */}
          <mesh position={[-0.28, -0.48, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.1, 12]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>

          {/* Stand Base Connector Column */}
          <mesh position={[-0.43, -0.48, 0]} rotation={[0, 0, 0.1]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Stand Base Disk */}
          <mesh position={[-0.44, -0.55, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.28, 0.07, 24]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

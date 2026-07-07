import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function CompassIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="compass" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Compass Outer Casing Ring */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.7, 0.08, 16, 64]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.5}
            />
          </mesh>

          {/* Compass Top Attachment Loop */}
          <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0]} castShadow>
            <torusGeometry args={[0.12, 0.04, 8, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Inner Backing Dial Plate */}
          <mesh position={[0, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.66, 0.66, 0.04, 32]} />
            <meshPhysicalMaterial
              roughness={Math.max(0.1, mat.roughness - 0.1)}
              metalness={Math.max(0, mat.metalness - 0.2)}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color="#ffffff" // Clean white/metallic background plate for readability
            />
          </mesh>

          {/* Dial Face Center Pin */}
          <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* North Needle (Red) */}
          <group position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
            <mesh position={[0, 0.26, 0.01]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <coneGeometry args={[0.08, 0.5, 4]} />
              <meshStandardMaterial roughness={0.3} metalness={0.2} color="#ef4444" />
            </mesh>
          </group>

          {/* South Needle (Blue/Silver) */}
          <group position={[0, 0, 0.05]} rotation={[0, 0, Math.PI]}>
            <mesh position={[0, 0.26, 0.01]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <coneGeometry args={[0.08, 0.5, 4]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Directional Tick Markers (North, South, East, West) */}
          <mesh position={[0, 0.52, 0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
            <meshStandardMaterial color="#ef4444" />
          </mesh>
          <mesh position={[0, -0.52, 0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
            <meshStandardMaterial color="#71717a" />
          </mesh>
          <mesh position={[0.52, 0, 0.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
            <meshStandardMaterial color="#71717a" />
          </mesh>
          <mesh position={[-0.52, 0, 0.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
            <meshStandardMaterial color="#71717a" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

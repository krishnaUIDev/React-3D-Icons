import { SharedWrapper } from "../SharedWrapper";
import { ElephantIconProps } from "./types";

export function ElephantIcon(props: ElephantIconProps) {
  return (
    <SharedWrapper iconId="elephant" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, -0.02, 0]}>
          {/* Main Heavy Head/Shoulders Dome */}
          <mesh castShadow receiveShadow scale={[1.2, 1.1, 1.1]}>
            <sphereGeometry args={[0.16, 24, 16]} />
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

          {/* Large Left Ear Plate */}
          <mesh position={[-0.16, 0.04, -0.02]} rotation={[0.1, 0.2, 0.3]} castShadow>
            <boxGeometry args={[0.02, 0.24, 0.16]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#334155" />
          </mesh>

          {/* Large Right Ear Plate */}
          <mesh position={[0.16, 0.04, -0.02]} rotation={[0.1, -0.2, -0.3]} castShadow>
            <boxGeometry args={[0.02, 0.24, 0.16]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#334155" />
          </mesh>

          {/* Raised Trunk (Segmented curve upward) */}
          <group position={[0, -0.04, 0.1]}>
            {/* Trunk Base */}
            <mesh position={[0, -0.03, 0.02]} rotation={[0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.034, 0.038, 0.08, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
            {/* Middle Bend */}
            <mesh position={[0, -0.08, 0.06]} rotation={[0.6, 0, 0]} castShadow>
              <cylinderGeometry args={[0.028, 0.034, 0.08, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
            {/* Upper Trunk */}
            <mesh position={[0, -0.06, 0.12]} rotation={[1.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.022, 0.028, 0.08, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
            {/* Raised Tip */}
            <mesh position={[0, 0.0, 0.16]} rotation={[2.0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.022, 0.08, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Left Glowing/Accent Tusk */}
          <mesh position={[-0.045, -0.07, 0.1]} rotation={[-0.4, 0.2, 0.4]} castShadow>
            <coneGeometry args={[0.012, 0.1, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Right Glowing/Accent Tusk */}
          <mesh position={[0.045, -0.07, 0.1]} rotation={[-0.4, -0.2, -0.4]} castShadow>
            <coneGeometry args={[0.012, 0.1, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Stately Eyes */}
          <group position={[0, 0.04, 0.08]}>
            {/* Left Eye */}
            <mesh position={[-0.07, 0, 0]} castShadow>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.07, 0, 0]} castShadow>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#0f172a" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

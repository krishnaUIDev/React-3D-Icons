import { SharedWrapper } from "../SharedWrapper";
import { ButterflyIconProps } from "./types";

export function ButterflyIcon(props: ButterflyIconProps) {
  return (
    <SharedWrapper iconId="butterfly" {...props}>
      {(mat) => (
        <group rotation={[0.2, 0, 0]} position={[0, 0, 0]}>
          {/* Central Body (Thorax and Abdomen) */}
          <group position={[0, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.014, 0.014, 0.24, 12]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
            </mesh>
            {/* Head */}
            <mesh position={[0, 0.13, 0]} castShadow>
              <sphereGeometry args={[0.02, 12, 12]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#334155" />
            </mesh>
            {/* Left Antenna */}
            <mesh position={[-0.01, 0.16, 0]} rotation={[0, 0, 0.4]} castShadow>
              <cylinderGeometry args={[0.003, 0.003, 0.06, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.1} color="#475569" />
            </mesh>
            {/* Right Antenna */}
            <mesh position={[0.01, 0.16, 0]} rotation={[0, 0, -0.4]} castShadow>
              <cylinderGeometry args={[0.003, 0.003, 0.06, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.1} color="#475569" />
            </mesh>
          </group>

          {/* Left Wing Group */}
          <group position={[-0.02, 0, 0]} rotation={[0, 0.2, 0]}>
            {/* Left Upper Wing */}
            <mesh position={[-0.1, 0.06, 0]} rotation={[0, 0, -0.2]} castShadow receiveShadow>
              <boxGeometry args={[0.18, 0.14, 0.01]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Left Upper Wing Glowing Detail */}
            <mesh position={[-0.1, 0.06, 0.006]} rotation={[0, 0, -0.2]} castShadow>
              <boxGeometry args={[0.13, 0.09, 0.006]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Left Lower Wing */}
            <mesh position={[-0.08, -0.07, 0]} rotation={[0, 0, 0.2]} castShadow receiveShadow>
              <boxGeometry args={[0.13, 0.11, 0.01]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Left Lower Wing Glowing Detail */}
            <mesh position={[-0.08, -0.07, 0.006]} rotation={[0, 0, 0.2]} castShadow>
              <boxGeometry args={[0.09, 0.07, 0.006]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Right Wing Group */}
          <group position={[0.02, 0, 0]} rotation={[0, -0.2, 0]}>
            {/* Right Upper Wing */}
            <mesh position={[0.1, 0.06, 0]} rotation={[0, 0, 0.2]} castShadow receiveShadow>
              <boxGeometry args={[0.18, 0.14, 0.01]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right Upper Wing Glowing Detail */}
            <mesh position={[0.1, 0.06, 0.006]} rotation={[0, 0, 0.2]} castShadow>
              <boxGeometry args={[0.13, 0.09, 0.006]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Right Lower Wing */}
            <mesh position={[0.08, -0.07, 0]} rotation={[0, 0, -0.2]} castShadow receiveShadow>
              <boxGeometry args={[0.13, 0.11, 0.01]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Right Lower Wing Glowing Detail */}
            <mesh position={[0.08, -0.07, 0.006]} rotation={[0, 0, -0.2]} castShadow>
              <boxGeometry args={[0.09, 0.07, 0.006]} />
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

import { SharedWrapper } from "../SharedWrapper";
import { CactusIconProps } from "./types";

export function CactusIcon(props: CactusIconProps) {
  return (
    <SharedWrapper iconId="cactus" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.1, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main trunk */}
          <group position={[0, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.045, 0.045, 0.34, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            <mesh position={[0, 0.17, 0]} castShadow>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Ribs (vertical texture lines) */}
          <group>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * 0.046;
              const z = Math.sin(angle) * 0.046;
              return (
                <mesh key={i} position={[x, 0, z]} rotation={[0, -angle, 0]} castShadow>
                  <boxGeometry args={[0.008, 0.33, 0.008]} />
                  <meshStandardMaterial color="#14532d" roughness={0.8} />
                </mesh>
              );
            })}
          </group>

          {/* Left Branch Arm (lower) */}
          <group position={[-0.04, -0.04, 0]}>
            {/* Horizontal joiner */}
            <mesh position={[-0.025, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.032, 0.032, 0.06, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Corner elbow */}
            <mesh position={[-0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.032, 8, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Vertical part */}
            <mesh position={[-0.05, 0.06, 0]} castShadow>
              <cylinderGeometry args={[0.032, 0.032, 0.12, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            <mesh position={[-0.05, 0.12, 0]} castShadow>
              <sphereGeometry args={[0.032, 8, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Right Branch Arm (higher) */}
          <group position={[0.04, 0.04, 0]}>
            {/* Horizontal joiner */}
            <mesh position={[0.025, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.06, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Corner elbow */}
            <mesh position={[0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Vertical part */}
            <mesh position={[0.05, 0.06, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.12, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            <mesh position={[0.05, 0.12, 0]} castShadow>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Pot/Base sand block */}
          <mesh position={[0, -0.2, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.06, 0.07, 12]} />
            <meshStandardMaterial roughness={0.9} metalness={0.05} color="#ea580c" />
          </mesh>

          {/* Glowing Spine Pins */}
          <group>
            {/* Left branch spine */}
            <mesh position={[-0.105, 0.06, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.1, 1, 0.1]} castShadow>
              <coneGeometry args={[0.015, 0.04, 4]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Right branch spine */}
            <mesh position={[0.105, 0.14, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.1, 1, 0.1]} castShadow>
              <coneGeometry args={[0.015, 0.04, 4]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Top spine */}
            <mesh position={[0, 0.23, 0]} scale={[0.1, 1, 0.1]} castShadow>
              <coneGeometry args={[0.015, 0.04, 4]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Trunk mid spine (pointing forward) */}
            <mesh position={[0, 0.08, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[0.1, 1, 0.1]} castShadow>
              <coneGeometry args={[0.015, 0.04, 4]} />
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

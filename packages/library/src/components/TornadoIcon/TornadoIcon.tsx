import { SharedWrapper } from "../SharedWrapper";
import { TornadoIconProps } from "./types";

export function TornadoIcon(props: TornadoIconProps) {
  return (
    <SharedWrapper iconId="tornado" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.1, 0.15]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Central Glowing Core Shaft */}
          <mesh castShadow>
            <cylinderGeometry args={[0.02, 0.01, 0.72, 10]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Tornado Swirl Rings (Stacked layers from bottom to top) */}
          
          {/* Top Layer 1 */}
          <mesh position={[0.05, 0.3, 0]} rotation={[Math.PI / 2, 0.1, 0.05]} castShadow receiveShadow>
            <torusGeometry args={[0.32, 0.04, 10, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={mat.color}
            />
          </mesh>

          {/* Layer 2 */}
          <mesh position={[0.025, 0.15, 0]} rotation={[Math.PI / 2, 0.08, 0.03]} castShadow receiveShadow>
            <torusGeometry args={[0.24, 0.036, 10, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Layer 3 */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0.05, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.17, 0.032, 10, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Layer 4 */}
          <mesh position={[-0.025, -0.15, 0]} rotation={[Math.PI / 2, 0.03, -0.03]} castShadow receiveShadow>
            <torusGeometry args={[0.11, 0.026, 10, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Layer 5 (Bottom Point) */}
          <mesh position={[-0.05, -0.3, 0]} rotation={[Math.PI / 2, 0, -0.05]} castShadow receiveShadow>
            <torusGeometry args={[0.05, 0.02, 8, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

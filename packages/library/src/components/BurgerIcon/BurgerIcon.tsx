import { SharedWrapper } from "../SharedWrapper";
import { BurgerIconProps } from "./types";

export function BurgerIcon(props: BurgerIconProps) {
  return (
    <SharedWrapper iconId="burger" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Top Bun (Golden Brown / Primary color preset) */}
          <group position={[0, 0.12, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.3, 0.3, 0.08, 20]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>
            <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
              <sphereGeometry args={[0.3, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>

            {/* Sesame Seeds (White glowing dots) */}
            <group position={[0, 0.28, 0]} scale={[0.8, 0.8, 0.8]}>
              <mesh position={[0.08, 0, 0.1]} rotation={[0.2, 0.5, 0]}>
                <boxGeometry args={[0.02, 0.008, 0.04]} />
                <meshStandardMaterial color="#ffffff" roughness={0.5} />
              </mesh>
              <mesh position={[-0.1, 0.02, 0.08]} rotation={[0.3, -0.6, 0.1]}>
                <boxGeometry args={[0.02, 0.008, 0.04]} />
                <meshStandardMaterial color="#ffffff" roughness={0.5} />
              </mesh>
              <mesh position={[0.12, 0.03, -0.1]} rotation={[-0.2, 0.8, -0.2]}>
                <boxGeometry args={[0.02, 0.008, 0.04]} />
                <meshStandardMaterial color="#ffffff" roughness={0.5} />
              </mesh>
              <mesh position={[-0.04, 0.05, -0.12]} rotation={[-0.1, -0.2, 0]}>
                <boxGeometry args={[0.02, 0.008, 0.04]} />
                <meshStandardMaterial color="#ffffff" roughness={0.5} />
              </mesh>
            </group>
          </group>

          {/* Tomato Slices (Red/Accent or vibrant red) */}
          <group position={[0, 0.07, 0]}>
            <mesh position={[-0.08, 0, 0]} castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.03, 12]} />
              <meshStandardMaterial color="#ef4444" roughness={0.6} />
            </mesh>
            <mesh position={[0.08, 0, 0.04]} castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.03, 12]} />
              <meshStandardMaterial color="#ef4444" roughness={0.6} />
            </mesh>
          </group>

          {/* Cheese Slice (Glowing yellow/accent plate with draped edges) */}
          <group position={[0, 0.035, 0]}>
            {/* Main square cheese plate */}
            <mesh rotation={[0, Math.PI / 6, 0]} castShadow>
              <boxGeometry args={[0.54, 0.015, 0.54]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.1}
              />
            </mesh>
            {/* Draped side flap 1 */}
            <mesh position={[-0.24, -0.02, 0.08]} rotation={[0, 0.3, 0.6]} castShadow>
              <boxGeometry args={[0.015, 0.07, 0.18]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.1}
              />
            </mesh>
            {/* Draped side flap 2 */}
            <mesh position={[0.24, -0.02, -0.08]} rotation={[0, 0.3, -0.6]} castShadow>
              <boxGeometry args={[0.015, 0.07, 0.18]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.1}
              />
            </mesh>
          </group>

          {/* Meat Patty (Dark clay brown) */}
          <mesh position={[0, -0.02, 0]} castShadow>
            <cylinderGeometry args={[0.29, 0.29, 0.09, 16]} />
            <meshStandardMaterial color="#5c3f30" roughness={0.8} />
          </mesh>

          {/* Lettuce Layer (Green overlapping wavy plates) */}
          <group position={[0, -0.07, 0]}>
            {/* Leaf 1 */}
            <mesh position={[-0.04, 0, 0]} rotation={[0.05, 0, 0.05]} castShadow>
              <boxGeometry args={[0.55, 0.016, 0.55]} />
              <meshStandardMaterial color="#22c55e" roughness={0.7} />
            </mesh>
            {/* Leaf 2 */}
            <mesh position={[0.04, 0.008, 0.02]} rotation={[-0.04, Math.PI / 4, -0.06]} castShadow>
              <boxGeometry args={[0.54, 0.016, 0.54]} />
              <meshStandardMaterial color="#16a34a" roughness={0.7} />
            </mesh>
            {/* Leaf 3 */}
            <mesh position={[0, -0.008, -0.04]} rotation={[0.06, -Math.PI / 6, 0.04]} castShadow>
              <boxGeometry args={[0.56, 0.016, 0.56]} />
              <meshStandardMaterial color="#22c55e" roughness={0.7} />
            </mesh>
          </group>

          {/* Bottom Bun (Golden Brown / Primary color preset) */}
          <mesh position={[0, -0.13, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.09, 20]} />
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

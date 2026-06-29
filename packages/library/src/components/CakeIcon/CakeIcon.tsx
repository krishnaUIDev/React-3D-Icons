import { SharedWrapper } from "../SharedWrapper";
import { CakeIconProps } from "./types";

export function CakeIcon(props: CakeIconProps) {
  return (
    <SharedWrapper iconId="cake" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Plate / Base Stand (Silver/Grey) */}
          <mesh position={[0, -0.22, 0]} castShadow>
            <cylinderGeometry args={[0.38, 0.4, 0.02, 24]} />
            <meshStandardMaterial color="#94a3b8" roughness={0.3} metalness={0.8} />
          </mesh>

          {/* Bottom Cake Layer (Preset Primary Color) */}
          <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.16, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Middle Frosting Strip (White cream) */}
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.305, 0.305, 0.02, 24]} />
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </mesh>

          {/* Top Cake Layer (Preset Primary Color) */}
          <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.22, 0.22, 0.14, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Frosting Whipped Cream Dolls (Concentric spheres around rim) */}
          <group position={[0, 0.12, 0]}>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i * Math.PI) / 3;
              const r = 0.19;
              return (
                <mesh key={i} position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]} castShadow>
                  <sphereGeometry args={[0.025, 8, 8]} />
                  <meshStandardMaterial color="#ffffff" roughness={0.6} />
                </mesh>
              );
            })}
          </group>

          {/* Decorative Cherries on Top Deck */}
          <group position={[0, 0.12, 0]}>
            {/* Cherry 1 */}
            <group position={[0.08, 0.01, 0.08]}>
              <mesh castShadow>
                <sphereGeometry args={[0.028, 8, 8]} />
                <meshStandardMaterial color="#ef4444" roughness={0.3} />
              </mesh>
              <mesh position={[0.01, 0.03, 0.01]} rotation={[0, 0, -Math.PI / 6]}>
                <cylinderGeometry args={[0.003, 0.003, 0.05, 4]} />
                <meshStandardMaterial color="#334155" />
              </mesh>
            </group>
            {/* Cherry 2 */}
            <group position={[-0.09, 0.01, -0.07]}>
              <mesh castShadow>
                <sphereGeometry args={[0.028, 8, 8]} />
                <meshStandardMaterial color="#ef4444" roughness={0.3} />
              </mesh>
              <mesh position={[-0.01, 0.03, -0.01]} rotation={[0, 0, Math.PI / 6]}>
                <cylinderGeometry args={[0.003, 0.003, 0.05, 4]} />
                <meshStandardMaterial color="#334155" />
              </mesh>
            </group>
          </group>

          {/* Celebration Candle (Striped vertical post) */}
          <group position={[0, 0.12, 0]}>
            <mesh position={[0, 0.08, 0]} castShadow>
              <cylinderGeometry args={[0.015, 0.015, 0.12, 8]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.4} />
            </mesh>
            
            {/* Candle Wick */}
            <mesh position={[0, 0.15, 0]} castShadow>
              <cylinderGeometry args={[0.003, 0.003, 0.02, 4]} />
              <meshStandardMaterial color="#000000" roughness={0.9} />
            </mesh>

            {/* Glowing Candle Flame (Emissive red/yellow accent) */}
            <mesh position={[0, 0.19, 0]} castShadow>
              <coneGeometry args={[0.016, 0.05, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

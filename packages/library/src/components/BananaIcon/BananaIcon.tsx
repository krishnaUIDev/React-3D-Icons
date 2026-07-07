import { SharedWrapper } from "../SharedWrapper";
import { BananaIconProps } from "./types";

export function BananaIcon(props: BananaIconProps) {
  return (
    <SharedWrapper iconId="banana" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0.2]} position={[0, -0.05, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main Exposed Banana Core (Soft Matte Cream color) */}
          <group position={[0, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.06, 0.065, 0.32, 8]} />
              <meshStandardMaterial color="#fef08a" roughness={0.8} metalness={0.0} />
            </mesh>
            <mesh position={[0, 0.16, 0]} castShadow>
              <sphereGeometry args={[0.06, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#fef08a" roughness={0.8} />
            </mesh>
          </group>

          {/* Lower Banana Peel Base (Preset color - e.g. yellow) */}
          <group position={[-0.02, -0.15, 0]} rotation={[0, 0, -Math.PI / 18]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.065, 0.07, 0.16, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                color={mat.color}
              />
            </mesh>

            {/* Bottom Dark Tip Stem */}
            <mesh position={[0.01, -0.11, 0]} rotation={[0, 0, -Math.PI / 10]} castShadow>
              <cylinderGeometry args={[0.02, 0.03, 0.06, 6]} />
              <meshStandardMaterial color="#422006" roughness={0.9} />
            </mesh>
          </group>

          {/* Peel Flap 1 (Peeled down - left) */}
          <group position={[-0.05, 0.02, 0.02]} rotation={[0, 0.2, 0.65]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.016, 0.22, 0.08]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Peel Flap 2 (Peeled down - right) */}
          <group position={[0.05, 0.02, 0.02]} rotation={[0, -0.2, -0.65]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.016, 0.22, 0.08]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Peel Flap 3 (Peeled down - back/center) */}
          <group position={[0, 0.01, -0.05]} rotation={[-0.6, 0, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.08, 0.22, 0.016]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Glowing node at the base connection (Emissive accent) */}
          <mesh position={[0, -0.08, 0]} castShadow>
            <sphereGeometry args={[0.025, 10, 10]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

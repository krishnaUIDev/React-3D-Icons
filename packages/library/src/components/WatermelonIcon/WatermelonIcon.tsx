import { SharedWrapper } from "../SharedWrapper";
import { WatermelonIconProps } from "./types";

export function WatermelonIcon(props: WatermelonIconProps) {
  return (
    <SharedWrapper iconId="watermelon" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 8, 0.1]} position={[0, -0.05, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Semicircular Slice Group (Oriented like a bowl/smile) */}
          <group rotation={[0, 0, -Math.PI / 6]}>
            {/* Outer Green Rind */}
            <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.38, 0.38, 0.07, 18, 1, false, 0, Math.PI]} />
              <meshStandardMaterial color="#16a34a" roughness={0.7} />
            </mesh>

            {/* Inner White Rind Layer */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.001]}>
              <cylinderGeometry args={[0.35, 0.35, 0.072, 18, 1, false, 0, Math.PI]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.7} />
            </mesh>

            {/* Red Flesh Layer (Preset Primary Color) */}
            <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.002]}>
              <cylinderGeometry args={[0.32, 0.32, 0.074, 16, 1, false, 0, Math.PI]} />
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

            {/* Seeds (Small dark/glowing spheres on the flat flesh face) */}
            <group position={[0, 0, 0.04]}>
              {/* Seed 1 */}
              <mesh position={[-0.15, -0.08, 0]} castShadow>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"
                  }
                  emissiveIntensity={1.2}
                />
              </mesh>

              {/* Seed 2 */}
              <mesh position={[-0.05, -0.15, 0]} castShadow>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"
                  }
                  emissiveIntensity={1.2}
                />
              </mesh>

              {/* Seed 3 */}
              <mesh position={[0.05, -0.15, 0]} castShadow>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"
                  }
                  emissiveIntensity={1.2}
                />
              </mesh>

              {/* Seed 4 */}
              <mesh position={[0.15, -0.08, 0]} castShadow>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#1e293b"
                  }
                  emissiveIntensity={1.2}
                />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

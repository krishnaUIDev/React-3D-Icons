import { SharedWrapper } from "../SharedWrapper";
import { RocketIconProps } from "./types";

export function RocketIcon(props: RocketIconProps) {
  return (
    <SharedWrapper iconId="rocket" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.4, 0.2]} position={[0, -0.15, 0]}>
          {/* Main Cabin / Fuselage */}
          <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
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

          {/* Nose Cone */}
          <mesh position={[0, 0.95, 0]} castShadow>
            <coneGeometry args={[0.3, 0.4, 32]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.8}
              color="#ef4444" // Bright Red Accent
            />
          </mesh>

          {/* Booster Tail Nozzle */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.26, 0.15, 16]} />
            <meshStandardMaterial roughness={0.5} metalness={0.9} color="#18181b" />
          </mesh>

          {/* Circular Portal Window */}
          <group position={[0, 0.45, 0.29]}>
            {/* Window Frame */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.12, 0.03, 8, 24]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#d4af37" />
            </mesh>
            {/* Window Glass */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.01]}>
              <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
              <meshPhysicalMaterial
                roughness={0.05}
                transmission={0.95}
                thickness={0.5}
                color="#38bdf8"
              />
            </mesh>
          </group>

          {/* Stabilizer Fin 1 (Back Right) */}
          <mesh position={[0.3, 0.08, -0.15]} rotation={[0, -Math.PI / 3, 0.4]} castShadow>
            <boxGeometry args={[0.06, 0.38, 0.28]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#ef4444" />
          </mesh>

          {/* Stabilizer Fin 2 (Back Left) */}
          <mesh position={[-0.3, 0.08, -0.15]} rotation={[0, Math.PI / 3, -0.4]} castShadow>
            <boxGeometry args={[0.06, 0.38, 0.28]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#ef4444" />
          </mesh>

          {/* Stabilizer Fin 3 (Front Center) */}
          <mesh position={[0, 0.08, 0.3]} rotation={[0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.06, 0.38, 0.28]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#ef4444" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

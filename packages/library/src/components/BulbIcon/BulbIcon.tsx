import { SharedWrapper } from "../SharedWrapper";
import { BulbIconProps } from "./types";

export function BulbIcon(props: BulbIconProps) {
  return (
    <SharedWrapper iconId="bulb" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, 0.05, 0]}>
          
          {/* Main Top Glass Sphere */}
          <mesh position={[0, 0.22, 0]} castShadow receiveShadow>
            <sphereGeometry args={[0.44, 32, 32]} />
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

          {/* Neck Glass Taper */}
          <mesh position={[0, -0.06, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.38, 0.24, 0.26, 32]} />
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

          {/* Glowing Filament (U-Shape Loop) */}
          <group position={[0, 0.15, 0]}>
            <mesh castShadow>
              <torusGeometry args={[0.11, 0.02, 8, 32, Math.PI]} />
              <meshStandardMaterial roughness={0.1} metalness={0.2} color="#f59e0b" emissive="#fbbf24" emissiveIntensity={2.0} />
            </mesh>
            <mesh position={[-0.11, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.015, 0.015, 0.2, 16]} />
              <meshStandardMaterial roughness={0.1} metalness={0.2} color="#f59e0b" emissive="#fbbf24" emissiveIntensity={1.0} />
            </mesh>
            <mesh position={[0.11, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.015, 0.015, 0.2, 16]} />
              <meshStandardMaterial roughness={0.1} metalness={0.2} color="#f59e0b" emissive="#fbbf24" emissiveIntensity={1.0} />
            </mesh>
          </group>

          {/* Screw Base (Metal Threads) */}
          <group position={[0, -0.26, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.18, 24]} />
              <meshStandardMaterial roughness={0.25} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Thread Rings */}
            <mesh position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.22, 0.03, 8, 24]} />
              <meshStandardMaterial roughness={0.25} metalness={0.8} color="#94a3b8" />
            </mesh>
            <mesh position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.22, 0.03, 8, 24]} />
              <meshStandardMaterial roughness={0.25} metalness={0.8} color="#94a3b8" />
            </mesh>
            <mesh position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.22, 0.03, 8, 24]} />
              <meshStandardMaterial roughness={0.25} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Bottom Contact Tip */}
            <mesh position={[0, -0.15, 0]} castShadow>
              <cylinderGeometry args={[0.14, 0.08, 0.06, 16]} />
              <meshStandardMaterial roughness={0.9} color="#334155" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}

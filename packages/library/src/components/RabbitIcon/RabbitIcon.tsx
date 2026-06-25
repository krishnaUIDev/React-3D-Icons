import { SharedWrapper } from "../SharedWrapper";
import { RabbitIconProps } from "./types";

export function RabbitIcon(props: RabbitIconProps) {
  return (
    <SharedWrapper iconId="rabbit" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, 0]} position={[0, -0.04, 0]}>
          {/* Main Rabbit Head sphere */}
          <mesh castShadow receiveShadow scale={[1.0, 1.1, 0.95]}>
            <sphereGeometry args={[0.14, 24, 16]} />
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

          {/* Left Long Ear */}
          <group position={[-0.05, 0.14, 0]} rotation={[0, 0, 0.1]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.02, 0.024, 0.16, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
            {/* Left Ear Inner Detail (glowing pink/accent) */}
            <mesh position={[0, 0, 0.008]} scale={[0.6, 0.8, 0.5]} castShadow>
              <cylinderGeometry args={[0.02, 0.024, 0.16, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Right Long Ear */}
          <group position={[0.05, 0.14, 0]} rotation={[0, 0, -0.1]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.02, 0.024, 0.16, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#cbd5e1" />
            </mesh>
            {/* Right Ear Inner Detail (glowing pink/accent) */}
            <mesh position={[0, 0, 0.008]} scale={[0.6, 0.8, 0.5]} castShadow>
              <cylinderGeometry args={[0.02, 0.024, 0.16, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Glowing Round Eyes */}
          <group position={[0, 0.02, 0.065]}>
            {/* Left Eye */}
            <mesh position={[-0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.014, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.05, 0, 0]} castShadow>
              <sphereGeometry args={[0.014, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Small Fluffy Cheeks */}
          <mesh position={[-0.02, -0.04, 0.1]} castShadow>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#f8fafc" />
          </mesh>
          <mesh position={[0.02, -0.04, 0.1]} castShadow>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#f8fafc" />
          </mesh>

          {/* Small Nose point */}
          <mesh position={[0, -0.02, 0.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <coneGeometry args={[0.008, 0.012, 3]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#64748b" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

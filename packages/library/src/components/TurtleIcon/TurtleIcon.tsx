import { SharedWrapper } from "../SharedWrapper";
import { TurtleIconProps } from "./types";

export function TurtleIcon(props: TurtleIconProps) {
  return (
    <SharedWrapper iconId="turtle" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 6, 0.05]} position={[0, -0.04, 0]}>
          {/* Main Domed Shell Casing */}
          <mesh castShadow receiveShadow scale={[1.25, 0.8, 1.45]}>
            <sphereGeometry args={[0.16, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

          {/* Underbelly flat plastron plate */}
          <mesh position={[0, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.16, 0.18, 0.02, 16]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#cbd5e1" />
          </mesh>

          {/* Glowing Shell Rim Collar */}
          <mesh position={[0, 0.005, 0]} scale={[1.29, 0.8, 1.49]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.16, 0.008, 6, 24]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* 4 Swimming Flippers (Legs) */}
          <group position={[0, -0.02, 0]}>
            {/* Front Left Flipper */}
            <mesh position={[-0.15, 0, 0.14]} rotation={[0.2, 0.5, 0]} castShadow>
              <boxGeometry args={[0.08, 0.016, 0.04]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
            {/* Front Right Flipper */}
            <mesh position={[0.15, 0, 0.14]} rotation={[0.2, -0.5, 0]} castShadow>
              <boxGeometry args={[0.08, 0.016, 0.04]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
            {/* Rear Left Flipper */}
            <mesh position={[-0.12, 0, -0.14]} rotation={[-0.2, -0.4, 0]} castShadow>
              <boxGeometry args={[0.06, 0.016, 0.03]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
            {/* Rear Right Flipper */}
            <mesh position={[0.12, 0, -0.14]} rotation={[-0.2, 0.4, 0]} castShadow>
              <boxGeometry args={[0.06, 0.016, 0.03]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#334155" />
            </mesh>
          </group>

          {/* Head & Neck */}
          <group position={[0, 0.02, 0.22]}>
            <mesh rotation={[-0.2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.024, 0.06, 12]} />
              <meshStandardMaterial roughness={0.5} metalness={0.2} color="#475569" />
            </mesh>
            {/* Head Dome */}
            <mesh position={[0, 0.03, 0.01]} castShadow>
              <sphereGeometry args={[0.026, 12, 12]} />
              <meshStandardMaterial roughness={0.5} metalness={0.2} color="#475569" />
            </mesh>
            {/* Glowing Eyes */}
            <mesh position={[0.016, 0.04, 0.018]} castShadow>
              <sphereGeometry args={[0.005, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
            <mesh position={[-0.016, 0.04, 0.018]} castShadow>
              <sphereGeometry args={[0.005, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Small Pointy Tail */}
          <mesh position={[0, -0.01, -0.24]} rotation={[0.4, 0, 0]} castShadow>
            <coneGeometry args={[0.012, 0.04, 4]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#334155" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

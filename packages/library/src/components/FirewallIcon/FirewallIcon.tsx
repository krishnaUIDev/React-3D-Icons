import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { FirewallIconProps } from "./types";

export function FirewallIcon(props: FirewallIconProps) {
  const brickColor = "#e11d48"; // Brick Red

  return (
    <SharedWrapper iconId="firewall" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]}>
          {/* Main Wall Group */}
          <group position={[0, 0.05, 0]}>
            {/* Gray Mortar Backing Wall */}
            <mesh castShadow receiveShadow>
              <RoundedBox args={[1.06, 0.78, 0.16]} radius={0.06} smoothness={4}>
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
              </RoundedBox>
            </mesh>

            {/* Individual Red Bricks Overlay */}
            {/* Row 1 (y = 0.24) */}
            <mesh castShadow position={[-0.34, 0.24, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0, 0.24, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.34, 0.24, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>

            {/* Row 2 (y = 0.08) */}
            <mesh castShadow position={[-0.43, 0.08, 0.08]}>
              <RoundedBox args={[0.13, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[-0.17, 0.08, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.17, 0.08, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.43, 0.08, 0.08]}>
              <RoundedBox args={[0.13, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>

            {/* Row 3 (y = -0.08) */}
            <mesh castShadow position={[-0.34, -0.08, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0, -0.08, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.34, -0.08, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>

            {/* Row 4 (y = -0.24) */}
            <mesh castShadow position={[-0.43, -0.24, 0.08]}>
              <RoundedBox args={[0.13, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[-0.17, -0.24, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.17, -0.24, 0.08]}>
              <RoundedBox args={[0.31, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
            <mesh castShadow position={[0.43, -0.24, 0.08]}>
              <RoundedBox args={[0.13, 0.13, 0.03]} radius={0.02} smoothness={2}>
                <meshStandardMaterial roughness={0.7} metalness={0.1} color={brickColor} />
              </RoundedBox>
            </mesh>
          </group>

          {/* Glowing Fire Flame in Front */}
          <group position={[0, -0.15, 0.16]}>
            {/* Center Yellow Flame tongue */}
            <mesh castShadow position={[0, 0.06, 0.02]}>
              <cylinderGeometry args={[0.01, 0.14, 0.42, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.1}
                color="#fcd34d"
                emissive="#fbbf24"
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Left Orange Flame tongue */}
            <mesh castShadow position={[-0.13, 0.01, 0]} rotation={[0, 0, 0.28]}>
              <cylinderGeometry args={[0.01, 0.1, 0.3, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.1}
                color="#f97316"
                emissive="#ea580c"
                emissiveIntensity={0.6}
              />
            </mesh>

            {/* Right Red-Orange Flame tongue */}
            <mesh castShadow position={[0.13, 0.01, 0]} rotation={[0, 0, -0.28]}>
              <cylinderGeometry args={[0.01, 0.1, 0.3, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.1}
                color="#ef4444"
                emissive="#dc2626"
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}

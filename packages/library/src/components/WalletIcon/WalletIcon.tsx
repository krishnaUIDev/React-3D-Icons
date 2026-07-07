import { SharedWrapper } from "../SharedWrapper";
import { WalletIconProps } from "./types";

export function WalletIcon(props: WalletIconProps) {
  return (
    <SharedWrapper iconId="wallet" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Back Wallet Cover */}
          <mesh position={[0, 0, -0.06]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.82, 0.1]} />
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

          {/* Credit Card 1 (peeking out) */}
          <mesh position={[-0.24, 0.38, -0.01]} rotation={[0, 0, -0.08]} castShadow>
            <boxGeometry args={[0.42, 0.32, 0.02]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#6366f1" />
          </mesh>

          {/* Credit Card 2 (peeking out) */}
          <mesh position={[0.24, 0.34, -0.02]} rotation={[0, 0, 0.12]} castShadow>
            <boxGeometry args={[0.42, 0.32, 0.02]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#ef4444" />
          </mesh>

          {/* Front Wallet Cover (slightly slanted forward) */}
          <mesh position={[0, -0.03, 0.08]} rotation={[-0.08, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.76, 0.1]} />
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

          {/* Leather Closure Strap */}
          <mesh position={[0, 0.05, 0.12]} rotation={[-0.06, 0, 0]} castShadow>
            <boxGeometry args={[0.16, 0.28, 0.03]} />
            <meshStandardMaterial
              roughness={mat.roughness + 0.1}
              metalness={mat.metalness}
              color={mat.color}
            />
          </mesh>

          {/* Golden Snap Button / Clasp */}
          <mesh position={[0, -0.04, 0.145]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.02, 16]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color="#d4af37" // Metallic Gold
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

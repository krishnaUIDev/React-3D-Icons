import { SharedWrapper } from "../SharedWrapper";
import { PiggyBankIconProps } from "./types";

export function PiggyBankIcon(props: PiggyBankIconProps) {
  return (
    <SharedWrapper iconId="piggybank" {...props}>
      {(mat) => (
        <group
          rotation={[0.15, -Math.PI / 8, 0.05]}
          position={[0, -0.02, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Main Piggy Body (Oval Sphere in Preset Color) */}
          <mesh castShadow receiveShadow scale={[1.2, 1.0, 1.0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
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

          {/* Snout Nose (Cylinder on front) */}
          <mesh position={[0, -0.02, 0.21]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.05, 12]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              color={mat.color}
            />
          </mesh>

          {/* Nostrils (Two tiny dark spots on snout) */}
          <group position={[0, -0.02, 0.238]}>
            <mesh position={[-0.015, 0, 0]}>
              <sphereGeometry args={[0.008, 6, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.015, 0, 0]}>
              <sphereGeometry args={[0.008, 6, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          </group>

          {/* Piggy Ears (Two pointed cones) */}
          <group position={[0, 0.15, 0.08]}>
            {/* Left Ear */}
            <mesh position={[-0.08, 0.04, 0]} rotation={[0.2, 0, 0.3]} castShadow>
              <coneGeometry args={[0.04, 0.1, 4]} />
              <meshPhysicalMaterial roughness={mat.roughness} color={mat.color} />
            </mesh>
            {/* Right Ear */}
            <mesh position={[0.08, 0.04, 0]} rotation={[0.2, 0, -0.3]} castShadow>
              <coneGeometry args={[0.04, 0.1, 4]} />
              <meshPhysicalMaterial roughness={mat.roughness} color={mat.color} />
            </mesh>
          </group>

          {/* Piggy Legs (4 small support cylinders) */}
          <group position={[0, -0.18, 0]}>
            {/* Left Front */}
            <mesh position={[-0.08, 0, 0.08]} castShadow>
              <cylinderGeometry args={[0.022, 0.024, 0.08, 8]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
            </mesh>
            {/* Right Front */}
            <mesh position={[0.08, 0, 0.08]} castShadow>
              <cylinderGeometry args={[0.022, 0.024, 0.08, 8]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
            </mesh>
            {/* Left Back */}
            <mesh position={[-0.08, 0, -0.08]} castShadow>
              <cylinderGeometry args={[0.022, 0.024, 0.08, 8]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
            </mesh>
            {/* Right Back */}
            <mesh position={[0.08, 0, -0.08]} castShadow>
              <cylinderGeometry args={[0.022, 0.024, 0.08, 8]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
            </mesh>
          </group>

          {/* Piggy Coin Slot (Horizontal dark cutout) */}
          <mesh position={[0, 0.201, 0]} castShadow>
            <boxGeometry args={[0.015, 0.01, 0.1]} />
            <meshStandardMaterial color="#1e293b" roughness={0.9} />
          </mesh>

          {/* Falling Coin (Glowing gold/accent disk entering the slot) */}
          <mesh position={[0, 0.27, 0]} rotation={[0.4, 0, -0.2]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.012, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}

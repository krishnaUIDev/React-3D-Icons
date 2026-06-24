import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CreditCardIconProps } from "./types";

export function CreditCardIcon(props: CreditCardIconProps) {
  return (
    <SharedWrapper iconId="creditcard" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.35, 0.12]} position={[0, 0, 0]}>
          
          {/* Card Body Slab */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.2, 0.78, 0.08]} radius={0.05} smoothness={4}>
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

          {/* SIM Card Gold Chip (Front Left) */}
          <mesh position={[-0.34, 0.12, 0.045]} castShadow>
            <RoundedBox args={[0.2, 0.16, 0.01]} radius={0.01} smoothness={2}>
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#fbbf24" />
            </RoundedBox>
          </mesh>

          {/* Holographic/Dark stripe on the front bottom */}
          <mesh position={[0, -0.16, 0.045]} castShadow>
            <boxGeometry args={[1.0, 0.08, 0.01]} />
            <meshStandardMaterial roughness={0.5} color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"} />
          </mesh>

          {/* Brand Logo - Circle 1 (Red) */}
          <mesh position={[0.28, -0.16, 0.046]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 24]} />
            <meshStandardMaterial roughness={0.3} color="#ef4444" />
          </mesh>

          {/* Brand Logo - Circle 2 (Orange/Yellow) */}
          <mesh position={[0.42, -0.16, 0.046]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 24]} />
            <meshStandardMaterial roughness={0.3} color="#f59e0b" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

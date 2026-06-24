import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CartIconProps } from "./types";

export function CartIcon(props: CartIconProps) {
  const wheelPositions = [
    [-0.2, -0.3, -0.18],
    [0.2, -0.3, -0.18],
    [-0.2, -0.3, 0.18],
    [0.2, -0.3, 0.18]
  ] as const;

  return (
    <SharedWrapper iconId="cart" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0]} position={[0, 0.05, 0]}>
          
          {/* Basket Bottom */}
          <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.55, 0.04, 0.4]} radius={0.02} smoothness={4}>
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

          {/* Basket Back Panel (Taller) */}
          <mesh position={[-0.26, 0.12, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.04, 0.4, 0.4]} radius={0.02} smoothness={4}>
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

          {/* Basket Front Panel */}
          <mesh position={[0.26, 0.06, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.04, 0.28, 0.4]} radius={0.02} smoothness={4}>
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

          {/* Basket Left Side */}
          <mesh position={[0, 0.08, 0.18]} castShadow receiveShadow>
            <RoundedBox args={[0.48, 0.32, 0.04]} radius={0.02} smoothness={4}>
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

          {/* Basket Right Side */}
          <mesh position={[0, 0.08, -0.18]} castShadow receiveShadow>
            <RoundedBox args={[0.48, 0.32, 0.04]} radius={0.02} smoothness={4}>
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

          {/* Bottom Chassis Tubes (Metallic) */}
          <mesh position={[0, -0.18, 0]} castShadow>
            <boxGeometry args={[0.5, 0.04, 0.3]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Cross Handle Bar */}
          <mesh position={[-0.32, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.022, 0.022, 0.38, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#ef4444" />
          </mesh>

          {/* 4 Wheels (Darker grey rubber with shiny steel axles) */}
          {wheelPositions.map((pos, idx) => (
            <group key={idx} position={pos}>
              <mesh castShadow>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial roughness={0.8} color="#334155" />
              </mesh>
            </group>
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}

import { SharedWrapper } from "../SharedWrapper";
import { ShoppingBagIconProps } from "./types";

export function ShoppingBagIcon(props: ShoppingBagIconProps) {
  return (
    <SharedWrapper iconId="shoppingbag" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Main Paper Bag Body (Preset material, e.g. glass or clay container) */}
          <mesh castShadow receiveShadow position={[0, -0.04, 0]}>
            <boxGeometry args={[0.34, 0.44, 0.18]} />
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

          {/* Left Rope Handle (Torus segment arching up) */}
          <mesh position={[0, 0.18, 0.04]} rotation={[0, 0, 0]} castShadow>
            <torusGeometry args={[0.07, 0.012, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
          </mesh>

          {/* Right Rope Handle (Torus segment arching up) */}
          <mesh position={[0, 0.18, -0.04]} rotation={[0, 0, 0]} castShadow>
            <torusGeometry args={[0.07, 0.012, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
          </mesh>

          {/* Front Bag Fold Lines (Subtle vertical indents) */}
          <group position={[0, -0.04, 0.091]}>
            <mesh position={[-0.08, 0, 0]}>
              <boxGeometry args={[0.008, 0.4, 0.005]} />
              <meshStandardMaterial color="#334155" roughness={0.7} opacity={0.3} transparent />
            </mesh>
            <mesh position={[0.08, 0, 0]}>
              <boxGeometry args={[0.008, 0.4, 0.005]} />
              <meshStandardMaterial color="#334155" roughness={0.7} opacity={0.3} transparent />
            </mesh>
          </group>

          {/* Glowing Label / Star Logo in Center (Emissive Accent Color) */}
          <mesh position={[0, -0.04, 0.092]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <boxGeometry args={[0.07, 0.07, 0.01]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissiveIntensity={1.3}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}

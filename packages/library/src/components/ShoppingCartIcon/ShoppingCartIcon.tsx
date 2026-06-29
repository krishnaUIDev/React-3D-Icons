import { SharedWrapper } from "../SharedWrapper";
import { ShoppingCartIconProps } from "./types";

export function ShoppingCartIcon(props: ShoppingCartIconProps) {
  return (
    <SharedWrapper iconId="shoppingcart" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 10, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Main Wire Basket Container (Preset Material) */}
          <group position={[0, 0, 0]}>
            {/* Basket Bottom */}
            <mesh position={[0, -0.06, -0.02]} castShadow receiveShadow>
              <boxGeometry args={[0.28, 0.016, 0.26]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} transmission={mat.transmission} thickness={mat.thickness} />
            </mesh>
            {/* Basket Front */}
            <mesh position={[0, 0.03, 0.11]} castShadow>
              <boxGeometry args={[0.28, 0.18, 0.016]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} transmission={mat.transmission} thickness={mat.thickness} />
            </mesh>
            {/* Basket Back */}
            <mesh position={[0, 0.05, -0.15]} castShadow>
              <boxGeometry args={[0.28, 0.22, 0.016]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} transmission={mat.transmission} thickness={mat.thickness} />
            </mesh>
            {/* Basket Left Side */}
            <mesh position={[-0.14, 0.04, -0.02]} castShadow>
              <boxGeometry args={[0.016, 0.2, 0.28]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} transmission={mat.transmission} thickness={mat.thickness} />
            </mesh>
            {/* Basket Right Side */}
            <mesh position={[0.14, 0.04, -0.02]} castShadow>
              <boxGeometry args={[0.016, 0.2, 0.28]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} transmission={mat.transmission} thickness={mat.thickness} />
            </mesh>
          </group>

          {/* Cart Metal Support Frame & Legs (Metallic Slate) */}
          <group>
            {/* Front Support Legs */}
            <mesh position={[-0.1, -0.14, 0.06]} rotation={[0.3, 0, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.18, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0.1, -0.14, 0.06]} rotation={[0.3, 0, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.18, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Back Support Legs */}
            <mesh position={[-0.1, -0.14, -0.1]} rotation={[-0.3, 0, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.18, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0.1, -0.14, -0.1]} rotation={[-0.3, 0, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.18, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
            </mesh>
          </group>

          {/* Cart Wheels (Dark Slate cylinders on axes) */}
          <group position={[0, -0.22, 0]}>
            {/* Front Wheels */}
            <mesh position={[-0.11, 0, 0.08]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.016, 12]} />
              <meshStandardMaterial color="#1e293b" roughness={0.7} />
            </mesh>
            <mesh position={[0.11, 0, 0.08]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.016, 12]} />
              <meshStandardMaterial color="#1e293b" roughness={0.7} />
            </mesh>
            {/* Back Wheels */}
            <mesh position={[-0.11, 0, -0.12]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.016, 12]} />
              <meshStandardMaterial color="#1e293b" roughness={0.7} />
            </mesh>
            <mesh position={[0.11, 0, -0.12]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.016, 12]} />
              <meshStandardMaterial color="#1e293b" roughness={0.7} />
            </mesh>
          </group>

          {/* Cart Push Handle (Horizontal bar on top back) */}
          <group position={[0, 0.14, -0.17]}>
            {/* Left handle connection stem */}
            <mesh position={[-0.12, -0.04, -0.02]} rotation={[0.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.1, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
            {/* Right handle connection stem */}
            <mesh position={[0.12, -0.04, -0.02]} rotation={[0.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.1, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
            {/* Main horizontal bar */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.28, 8]} />
              <meshStandardMaterial color="#ef4444" roughness={0.4} />
            </mesh>
          </group>

          {/* Glowing Item inside the basket (Emissive Accent Color Gift Box) */}
          <mesh position={[0, -0.01, -0.02]} rotation={[0.1, 0.4, -0.15]} castShadow>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
